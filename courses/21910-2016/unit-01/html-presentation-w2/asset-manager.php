<?php
/**
 * asset-manager.php
 * MASTER PROMPT ADD-ON V11.2 — UNIVERSAL IMAGE URL IMPORT & VISUAL ASSET MANAGEMENT
 * ระบบจัดการไฟล์ภาพ Local Asset สำหรับ XAMPP (พร้อมระบบป้องกัน SSRF, ตรวจสอบ MIME Type และคัดกรอง SVG ที่ไม่ปลอดภัย)
 * หมายเหตุ: หากเปิดผ่าน Static Server หรือ file:// ระบบ Frontend จะสลับไปใช้โหมด Static + Export Source Code โดยอัตโนมัติ
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['ping'])) {
    echo json_encode([
        'ok' => true,
        'backendAvailable' => true,
        'targetDir' => 'assets/images/'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'อนุญาตเฉพาะคำขอแบบ POST เท่านั้น'], JSON_UNESCAPED_UNICODE);
    exit;
}

$targetDir = __DIR__ . DIRECTORY_SEPARATOR . 'assets' . DIRECTORY_SEPARATOR . 'images';
if (!is_dir($targetDir)) {
    @mkdir($targetDir, 0755, true);
}

$allowedMimes = [
    'image/png'     => 'png',
    'image/jpeg'    => 'jpg',
    'image/jpg'     => 'jpg',
    'image/webp'    => 'webp',
    'image/gif'     => 'gif',
    'image/svg+xml' => 'svg'
];

/**
 * ตรวจสอบความปลอดภัยของไฟล์ SVG (ห้ามมี <script>, event handlers หรือ javascript: URI)
 */
function isSafeSvgContent(string $svgContent): bool {
    $lower = strtolower($svgContent);
    if (strpos($lower, '<svg') === false) {
        return false;
    }
    $dangerousPatterns = [
        '/<script\b/i',
        '/javascript\s*:/i',
        '/vbscript\s*:/i',
        '/data\s*:\s*text\/html/i',
        '/\bon[a-z]+\s*=/i',
        '/<iframe\b/i',
        '/<object\b/i',
        '/<embed\b/i',
        '/<foreignobject\b/i'
    ];
    foreach ($dangerousPatterns as $pattern) {
        if (preg_match($pattern, $svgContent)) {
            return false;
        }
    }
    return true;
}

/**
 * ตรวจสอบ URL เพื่อป้องกัน SSRF (ห้ามเข้าถึง localhost, private IP, reserved IP หรือพอร์ตภายใน)
 */
function validatePublicUrlForSsrf(string $url): array {
    $parts = @parse_url($url);
    if (!$parts || empty($parts['scheme']) || empty($parts['host'])) {
        return ['valid' => false, 'reason' => 'รูปแบบ URL ไม่ถูกต้อง'];
    }

    $scheme = strtolower($parts['scheme']);
    if ($scheme !== 'https' && $scheme !== 'http') {
        return ['valid' => false, 'reason' => 'อนุญาตเฉพาะโปรโตคอล HTTPS (หรือ HTTP สาธารณะ) เท่านั้น ไม่อนุญาต ' . $scheme . ':'];
    }

    if (isset($parts['port']) && !in_array((int)$parts['port'], [80, 443], true)) {
        return ['valid' => false, 'reason' => 'ไม่อนุญาตให้เชื่อมต่อพอร์ตที่ไม่ใช่มาตรฐาน (อนุญาตเฉพาะ 80 และ 443)'];
    }

    $host = strtolower($parts['host']);
    $blockedHosts = ['localhost', '127.0.0.1', '0.0.0.0', '::1', '[::1]'];
    if (in_array($host, $blockedHosts, true) ||
         preg_match('/\.(local|internal|lan|intranet|corp|home)$/i', $host)) {
        return ['valid' => false, 'reason' => 'ระบบป้องกัน SSRF: ไม่อนุญาตให้ดึงข้อมูลจากเครือข่ายภายในหรือ localhost'];
    }

    $ips = @gethostbynamel($host);
    if (!$ips || !is_array($ips) || count($ips) === 0) {
        return ['valid' => false, 'reason' => 'ไม่สามารถแปลงชื่อโดเมน (DNS) ของลิงก์ต้นทางได้'];
    }

    foreach ($ips as $ip) {
        if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
            return ['valid' => false, 'reason' => 'ระบบป้องกัน SSRF: ไม่อนุญาตให้เชื่อมต่อ IP ภายในหรือ IP สงวน (' . $ip . ')'];
        }
    }

    return ['valid' => true, 'ips' => $ips];
}

// ตรวจสอบกรณีส่งเป็น Multipart Form (อัปโหลดไฟล์จากเครื่องครูโดยตรง)
$action = $_POST['action'] ?? '';
if (empty($action)) {
    $rawInput = file_get_contents('php://input');
    $jsonBody = json_decode($rawInput, true);
    if (is_array($jsonBody) && isset($jsonBody['action'])) {
        $action = $jsonBody['action'];
    }
}

// 1. อัปโหลดไฟล์รูปภาพจากเครื่องคอมพิวเตอร์เข้าสู่ assets/images/
if ($action === 'upload_local_file') {
    if (!isset($_FILES['imageFile']) || $_FILES['imageFile']['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(['ok' => false, 'error' => 'ไม่พบไฟล์รูปภาพที่อัปโหลด หรือเกิดข้อผิดพลาดในการรับไฟล์'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $tmpPath = $_FILES['imageFile']['tmp_name'];
    $origName = basename($_FILES['imageFile']['name']);
    $fileSize = (int)$_FILES['imageFile']['size'];

    if ($fileSize <= 0 || $fileSize > 12 * 1024 * 1024) {
        echo json_encode(['ok' => false, 'error' => 'ขนาดไฟล์ต้องไม่เกิน 12 MB'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $tmpPath);
    finfo_close($finfo);

    // กรณีไฟล์ SVG บางครั้ง finfo อาจอ่านเป็น text/xml หรือ text/plain
    $extLower = strtolower(pathinfo($origName, PATHINFO_EXTENSION));
    if (($mime === 'text/xml' || $mime === 'application/xml' || $mime === 'text/plain') && $extLower === 'svg') {
        $mime = 'image/svg+xml';
    }

    if (!isset($allowedMimes[$mime])) {
        echo json_encode([
            'ok' => false,
            'error' => 'ประเภทไฟล์ไม่รองรับ (' . htmlspecialchars($mime) . ') รองรับเฉพาะ PNG, JPG, JPEG, WebP, GIF และ SVG ที่ปลอดภัย'
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $ext = $allowedMimes[$mime];
    if ($ext === 'svg') {
        $svgRaw = file_get_contents($tmpPath);
        if (!isSafeSvgContent($svgRaw)) {
            echo json_encode([
                'ok' => false,
                'error' => 'ปฏิเสธไฟล์ SVG: ตรวจพบ Script หรือแอตทริบิวต์ที่อาจไม่ปลอดภัยภายในไฟล์ SVG'
            ], JSON_UNESCAPED_UNICODE);
            exit;
        }
    } else {
        $imgInfo = @getimagesize($tmpPath);
        if ($imgInfo === false) {
            echo json_encode(['ok' => false, 'error' => 'ไฟล์รูปภาพไม่ถูกต้องหรือเสียหาย'], JSON_UNESCAPED_UNICODE);
            exit;
        }
    }

    $slidePrefix = preg_replace('/[^a-zA-Z0-9_-]/', '', $_POST['slideId'] ?? 'slide');
    $baseSlug = preg_replace('/[^a-zA-Z0-9_-]/', '-', pathinfo($origName, PATHINFO_FILENAME));
    $baseSlug = trim(substr($baseSlug, 0, 36), '-');
    if ($baseSlug === '') {
        $baseSlug = 'custom-img';
    }

    $finalFilename = sprintf('local-%s-%s-%d.%s', $slidePrefix, $baseSlug, time(), $ext);
    $destPath = $targetDir . DIRECTORY_SEPARATOR . $finalFilename;

    if (!move_uploaded_file($tmpPath, $destPath)) {
        echo json_encode(['ok' => false, 'error' => 'ไม่สามารถบันทึกไฟล์ลงในโฟลเดอร์ assets/images/ ได้'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    echo json_encode([
        'ok' => true,
        'relativePath' => 'assets/images/' . $finalFilename,
        'filename' => $finalFilename,
        'mimeType' => $mime,
        'storageType' => 'local-project-file'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// 2. ดึงภาพจาก External URL ที่ได้รับอนุญาตมาจัดเก็บใน assets/images/ (โดยไม่หลบเลี่ยง Hotlink)
if ($action === 'import_url_to_local') {
    $url = trim($jsonBody['url'] ?? '');
    $slideId = preg_replace('/[^a-zA-Z0-9_-]/', '', $jsonBody['slideId'] ?? 'slide');

    $ssrfCheck = validatePublicUrlForSsrf($url);
    if (!$ssrfCheck['valid']) {
        echo json_encode(['ok' => false, 'error' => $ssrfCheck['reason']], JSON_UNESCAPED_UNICODE);
        exit;
    }

    // ใช้ HTTP Context มาตรฐานโดยไม่ปลอมแปลง Referer เพื่อเคารพนโยบาย Hotlink ของเว็บไซต์ต้นทาง
    $ctx = stream_context_create([
        'http' => [
            'method' => 'GET',
            'timeout' => 10,
            'follow_location' => 0, // ป้องกัน Open Redirect ไปยังเครือข่ายภายใน (SSRF via Redirect)
            'header' => "User-Agent: EducationalSlideAssetImporter/1.0\r\nAccept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8\r\n"
        ],
        'ssl' => [
            'verify_peer' => true,
            'verify_peer_name' => true
        ]
    ]);

    $data = @file_get_contents($url, false, $ctx);
    if ($data === false || strlen($data) === 0) {
        echo json_encode([
            'ok' => false,
            'error' => 'ไม่สามารถดึงไฟล์ภาพจาก URL นี้ได้โดยตรง (เว็บไซต์ต้นทางอาจจำกัดการเข้าถึง ป้องกัน Hotlink หรือมีการเปลี่ยนเส้นทาง) แนะนำให้บันทึกภาพที่คุณมีสิทธิ์ใช้งานลงเครื่อง แล้วใช้วิธีอัปโหลดไฟล์แทน'
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    if (strlen($data) > 12 * 1024 * 1024) {
        echo json_encode(['ok' => false, 'error' => 'ไฟล์จาก URL มีขนาดใหญ่เกิน 12 MB'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->buffer($data);

    if (($mime === 'text/xml' || $mime === 'application/xml' || $mime === 'text/plain') && strpos(strtolower($data), '<svg') !== false) {
        $mime = 'image/svg+xml';
    }

    if ($mime === 'text/html') {
        echo json_encode([
            'ok' => false,
            'error' => 'URL นี้ส่งค่ากลับมาเป็นหน้าเว็บ HTML ไม่ใช่ไฟล์รูปภาพโดยตรง กรุณาคลิกขวาที่ตัวรูปภาพแล้วเลือก "คัดลอกที่อยู่รูปภาพ" (Copy image address)'
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    if (!isset($allowedMimes[$mime])) {
        echo json_encode([
            'ok' => false,
            'error' => 'เนื้อหาที่ได้จาก URL ไม่ใช่ไฟล์รูปภาพที่รองรับ (ตรวจพบประเภท: ' . htmlspecialchars($mime) . ')'
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $ext = $allowedMimes[$mime];
    if ($ext === 'svg') {
        if (!isSafeSvgContent($data)) {
            echo json_encode(['ok' => false, 'error' => 'ปฏิเสธไฟล์ SVG จาก URL เนื่องจากตรวจพบ Script หรือโค้ดที่ไม่ปลอดภัย'], JSON_UNESCAPED_UNICODE);
            exit;
        }
    } else {
        $imgSize = @getimagesizefromstring($data);
        if ($imgSize === false) {
            echo json_encode(['ok' => false, 'error' => 'ข้อมูลจาก URL ไม่ใช่ไฟล์รูปภาพที่สมบูรณ์'], JSON_UNESCAPED_UNICODE);
            exit;
        }
    }

    $finalFilename = sprintf('imported-%s-%d.%s', $slideId, time(), $ext);
    $destPath = $targetDir . DIRECTORY_SEPARATOR . $finalFilename;

    if (@file_put_contents($destPath, $data) === false) {
        echo json_encode(['ok' => false, 'error' => 'ไม่สามารถเขียนไฟล์ลงในโฟลเดอร์ assets/images/ ได้'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    echo json_encode([
        'ok' => true,
        'relativePath' => 'assets/images/' . $finalFilename,
        'filename' => $finalFilename,
        'mimeType' => $mime,
        'storageType' => 'local-project-file'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// 3. บันทึกข้อมูลรายการภาพประกอบทั้งหมดลงในไฟล์ custom-assets-data.js ของโปรเจกต์
if ($action === 'save_custom_assets_js') {
    $assets = $jsonBody['assets'] ?? [];
    if (!is_array($assets)) {
        echo json_encode(['ok' => false, 'error' => 'รูปแบบข้อมูล assets ไม่ถูกต้อง'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $jsContent = "/**\n"
        . " * custom-assets-data.js\n"
        . " * MASTER PROMPT ADD-ON V11.2 — UNIVERSAL IMAGE URL IMPORT & VISUAL ASSET MANAGEMENT\n"
        . " * บันทึกอัตโนมัติสำหรับใช้ในโปรเจกต์และ Central Teaching Presentation Library\n"
        . " */\n"
        . "window.PRELOADED_CUSTOM_ASSETS = " . json_encode($assets, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . ";\n";

    $jsFile = __DIR__ . DIRECTORY_SEPARATOR . 'custom-assets-data.js';
    if (@file_put_contents($jsFile, $jsContent) === false) {
        echo json_encode(['ok' => false, 'error' => 'ไม่สามารถบันทึกไฟล์ custom-assets-data.js ลงโปรเจกต์ได้'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    echo json_encode([
        'ok' => true,
        'savedFile' => 'custom-assets-data.js',
        'count' => count($assets)
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode(['ok' => false, 'error' => 'ไม่รู้จักคำสั่ง action ที่ระบุ'], JSON_UNESCAPED_UNICODE);
