/**
 * slides-data.js (MASTER PROMPT V11 — PROFESSIONAL INTERACTIVE EDUCATIONAL WEB PRESENTATION)
 * รายวิชา: 21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล
 * ระดับชั้น: ประกาศนียบัตรวิชาชีพ (ปวช.2)
 * หน่วยที่ 1 (สัปดาห์ที่ 2): ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล
 * เรื่อง: การทำงานของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจ (4 ชั่วโมง: ทฤษฎี 2 ชม. / ปฏิบัติ 2 ชม.)
 */

const COURSE_METADATA = {
    courseId: "21910-2016",
    courseName: "การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล",
    level: "ปวช.2",
    unitId: "unit-1-week-2",
    unitNumber: "1 (สัปดาห์ที่ 2)",
    unitTitle: "ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล — การทำงานของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจ",
    hours: "4 ชั่วโมง (ทฤษฎี 2 ชั่วโมง ปฏิบัติ 2 ชั่วโมง)",
    presentationType: "html-interactive",
    totalSlides: 28,
    version: "1.0.0"
};

const VOCAB_DATA = {
    "Web Browser": {
        term: "Web Browser (เว็บเบราว์เซอร์)",
        category: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        easyDef: "โปรแกรมบนคอมพิวเตอร์หรือมือถือที่ใช้เปิดดูและโต้ตอบกับหน้าเว็บไซต์ เช่น Google Chrome, Microsoft Edge, Safari",
        example: "เมื่อนักเรียนเปิดโปรแกรม Google Chrome แล้วพิมพ์ชื่อเว็บร้านกาแฟเพื่อดูเมนูเครื่องดื่ม"
    },
    "Web Server": {
        term: "Web Server (เว็บเซิร์ฟเวอร์)",
        category: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        easyDef: "เครื่องคอมพิวเตอร์แม่ข่ายที่ทำหน้าที่เก็บข้อมูลเว็บไซต์ คอยรับคำขอ (Request) ประมวลผล และส่งข้อมูลหน้าเว็บตอบกลับ (Response) ให้ผู้ใช้งาน",
        example: "เซิร์ฟเวอร์ของร้านกาแฟส่งไฟล์ HTML, CSS, รูปกาแฟ และราคาเครื่องดื่มกลับมาที่หน้าจอของลูกค้า"
    },
    "DNS": {
        term: "DNS (Domain Name System)",
        category: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        easyDef: "ระบบสมุดโทรศัพท์ของอินเทอร์เน็ตที่ทำหน้าที่แปลงชื่อโดเมนที่คนจำง่าย (เช่น baancoffee.example) ให้กลายเป็นหมายเลข IP Address ของเซิร์ฟเวอร์ปลายทาง",
        example: "เมื่อพิมพ์ www.baancoffee.example ระบบ DNS จะค้นหาหมายเลข IP ของเซิร์ฟเวอร์ร้านกาแฟเพื่อให้เบราว์เซอร์ติดต่อได้ถูกที่"
    },
    "Request": {
        term: "Request (คำขอข้อมูล)",
        category: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        easyDef: "คำขอที่ส่งจากผู้ใช้งานหรือเว็บเบราว์เซอร์ไปยังเว็บเซิร์ฟเวอร์เพื่อขอเปิดหน้าเว็บหรือขอข้อมูลที่ต้องการ",
        example: "เมื่อลูกค้าคลิกเมนู 'สินค้าทั้งหมด' เบราว์เซอร์จะส่ง Request ไปขอรายการสินค้าจากเซิร์ฟเวอร์"
    },
    "Response": {
        term: "Response (ข้อมูลตอบกลับ)",
        category: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        easyDef: "ข้อมูลหรือผลลัพธ์ที่เว็บเซิร์ฟเวอร์ส่งกลับมาให้เว็บเบราว์เซอร์ เช่น ไฟล์ HTML, CSS, JavaScript และรูปภาพ",
        example: "เซิร์ฟเวอร์ส่งข้อมูลรายการเครื่องดื่มและรูปภาพกลับมาแสดงผลบนหน้าจอของลูกค้า"
    },
    "URL": {
        term: "URL (Uniform Resource Locator)",
        category: "ส่วนที่ 1: ความสัมพันธ์ URL/Domain/Hosting/HTTPS",
        easyDef: "ที่อยู่สำหรับเข้าถึงหน้าเว็บหรือทรัพยากรบนอินเทอร์เน็ต ระบุทั้งรูปแบบการเชื่อมต่อ ชื่อโฮสต์ และเส้นทางไปยังหน้าเว็บย่อย",
        example: "https://www.baancoffee.example/menu คือ URL ที่พาไปยังหน้าเมนูเครื่องดื่มของร้านโดยตรง"
    },
    "Domain": {
        term: "Domain (ชื่อโดเมน)",
        category: "ส่วนที่ 1: ความสัมพันธ์ URL/Domain/Hosting/HTTPS",
        easyDef: "ชื่อที่ตั้งขึ้นเพื่อช่วยให้ผู้ใช้งานจดจำและเข้าถึงเว็บไซต์ได้ง่าย เปรียบเสมือนป้ายชื่อร้านค้า",
        example: "baancoffee.example เป็นชื่อโดเมนสมมติของร้านกาแฟ"
    },
    "Hosting": {
        term: "Hosting (เว็บโฮสติ้ง)",
        category: "ส่วนที่ 1: ความสัมพันธ์ URL/Domain/Hosting/HTTPS",
        easyDef: "บริการพื้นที่และทรัพยากรบนเซิร์ฟเวอร์สำหรับจัดเก็บไฟล์เว็บไซต์ รูปภาพ และข้อมูลต่าง ๆ ให้พร้อมเปิดใช้งานออนไลน์ตลอดเวลา",
        example: "เปรียบเสมือนที่ดินและอาคารร้านค้าที่ใช้เก็บอุปกรณ์และสินค้าทั้งหมดของร้านกาแฟ"
    },
    "HTTPS": {
        term: "HTTPS & TLS (การเชื่อมต่อแบบเข้ารหัส)",
        category: "ส่วนที่ 1: ความปลอดภัยของเว็บไซต์",
        easyDef: "รูปแบบการเชื่อมต่อเว็บไซต์ที่ใช้การเข้ารหัสข้อมูลด้วยมาตรฐาน TLS เพื่อปกป้องข้อมูลระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์ไม่ให้ถูกดักอ่านหรือแก้ไข",
        example: "ช่วยปกป้องชื่อ เบอร์โทรศัพท์ ที่อยู่จัดส่ง และรายการสั่งซื้อของลูกค้า (แต่ต้องตรวจสอบความน่าเชื่อถือของร้านค้าร่วมด้วยเสมอ)"
    },
    "Informational Website": {
        term: "Informational Website (เว็บไซต์แบบข้อมูล)",
        category: "ส่วนที่ 2: ประเภทของเว็บไซต์",
        easyDef: "เว็บไซต์ที่มุ่งนำเสนอเนื้อหาให้ผู้เข้าชมอ่านหรือศึกษา เช่น ประวัติร้าน รายละเอียดสินค้า เวลาเปิด–ปิด และช่องทางติดต่อ โดยไม่ต้องมีระบบประมวลผลซับซ้อน",
        example: "เว็บไซต์ร้านกาแฟในจังหวัดแพร่ที่แสดงหน้าแรก หน้าเมนู หน้าเกี่ยวกับร้าน และหน้าติดต่อเรา"
    },
    "Web Application": {
        term: "Web Application (เว็บแอปพลิเคชัน)",
        category: "ส่วนที่ 2: ประเภทของเว็บไซต์",
        easyDef: "ระบบซอฟต์แวร์ที่เข้าถึงผ่านเว็บเบราว์เซอร์ซึ่งผู้ใช้งานทำกิจกรรมโต้ตอบได้จริง เช่น เข้าสู่ระบบ เลือกระดับความหวาน ใส่ตะกร้า สั่งซื้อสินค้า และเชื่อมฐานข้อมูล",
        example: "ระบบสั่งกาแฟออนไลน์ที่ให้ลูกค้าเลือกเมนู เลือกความหวาน 50% กดใส่ตะกร้า และส่งคำสั่งซื้อไปที่ร้าน"
    },
    "Hero Section": {
        term: "Hero Section (ส่วนแนะนำหลัก)",
        category: "ส่วนที่ 3: องค์ประกอบเว็บไซต์ธุรกิจ",
        easyDef: "พื้นที่เด่นบริเวณส่วนบนของหน้าแรก ใช้แสดงข้อความสำคัญ ภาพสินค้าเด่น หรือจุดขายของธุรกิจให้ลูกค้าเข้าใจทันที",
        example: "ภาพแก้วกาแฟสดพร้อมข้อความ 'กาแฟสดจากเมล็ดกาแฟคุณภาพของชุมชน'"
    },
    "CTA": {
        term: "CTA (Call to Action — ปุ่มกระตุ้นการดำเนินการ)",
        category: "ส่วนที่ 3: องค์ประกอบเว็บไซต์ธุรกิจ",
        easyDef: "ปุ่มหรือลิงก์ที่ออกแบบให้เด่นชัดเพื่อนำผู้ใช้งานไปสู่เป้าหมายที่ธุรกิจต้องการ",
        example: "ปุ่ม 'สั่งซื้อเลย', 'ดูเมนูทั้งหมด', 'จองคิว' หรือ 'ติดต่อร้าน'"
    },
    "Usability": {
        term: "Usability (ความง่ายในการใช้งาน)",
        category: "ส่วนที่ 4: การประเมินคุณภาพเว็บไซต์",
        easyDef: "คุณภาพของเว็บไซต์ที่ช่วยให้ผู้ใช้งานค้นหาสิ่งที่ต้องการได้สะดวก เมนูเข้าใจง่าย ตัวอักษรอ่านสบายตา และปุ่มทำงานตรงตามความคาดหวัง",
        example: "ลูกค้าเปิดเว็บแล้วหาเมนูเครื่องดื่มและราคาเจอได้ทันทีภายในไม่กี่วินาที"
    },
    "Mobile-Friendly": {
        term: "Mobile-Friendly (การรองรับโทรศัพท์มือถือ)",
        category: "ส่วนที่ 4: การประเมินคุณภาพเว็บไซต์",
        easyDef: "การออกแบบเว็บไซต์ให้แสดงผลเหมาะสมกับหน้าจอมือถือ ข้อความอ่านง่าย รูปภาพพอดีจอ ไม่ล้นขอบแนวนอน และปุ่มกดสัมผัสได้สะดวก",
        example: "เปิดเว็บร้านกาแฟบนสมาร์ตโฟนแล้วอ่านเมนูและกดปุ่มโทรติดต่อร้านได้ทันทีโดยไม่ต้องถ่างนิ้วซูม"
    }
};

const SLIDES_DATA = [
    // =========================================================================
    // SLIDE 1: Cover Slide (หน้าปกบทเรียน)
    // =========================================================================
    {
        slideId: "u1w2-s01",
        slideNumber: 1,
        title: "การทำงานของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจ",
        section: "บทนำและภาพรวมหน่วยเรียน",
        layoutType: "Cover Slide",
        teachingTime: 3,
        timeGuide: "3 นาที (ชั่วโมงที่ 1: นำเข้าสู่บทเรียน)",
        kicker: "รหัสวิชา 21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล • ระดับชั้น ปวช.2",
        badge: "หน่วยที่ 1 (สัปดาห์ที่ 2) • 4 ชั่วโมง",
        content: [
            "หน่วยที่ 1: ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล (สัปดาห์ที่ 2)",
            "เรื่อง: การทำงานของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจ",
            "เวลาเรียนรวม 4 ชั่วโมง (ภาคทฤษฎี 2 ชั่วโมง / ภาคปฏิบัติ 2 ชั่วโมง)"
        ],
        visualAssets: ["assets/diagrams/hero-how-web-works.svg", "assets/images/ref-web-frameworks.png"],
        interactiveType: "Glossary Quick Triggers",
        speakerNotes: {
            objective: "แนะนำหัวข้อการเรียนประจำสัปดาห์ที่ 2 เชื่อมโยงความรู้จากสัปดาห์ที่ 1 สู่การทำงานเบื้องหลังของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจจริง",
            explanationGuide: "สวัสดีนักเรียน ปวช.2 ทุกคนครับ สัปดาห์ที่แล้วเรารู้จักคำว่า เว็บเพจ เว็บไซต์ โดเมน และโฮสติ้งกันไปแล้ว สัปดาห์ที่ 2 นี้เราจะมาเปิดเบื้องหลังกันว่า เมื่อเราพิมพ์ชื่อเว็บแล้วกด Enter มันเกิดอะไรขึ้นระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์ และเราจะวิเคราะห์ได้อย่างไรว่าเว็บไซต์ธุรกิจเว็บไหนดีหรือควรปรับปรุงตรงไหน",
            extraExamples: "เปรียบเทียบเหมือนเวลาเราไปร้านกาแฟ สิ่งที่เราเห็นคือหน้าร้านและเมนู แต่เบื้องหลังมีบาริสต้า ห้องครัว และระบบสต็อกสินค้าทำงานร่วมกัน",
            guidingQuestion: "วันนี้ก่อนเริ่มเรียน ใครเข้าเว็บไซต์หรือแอปซื้อของออนไลน์มาแล้วบ้าง จำได้ไหมว่าหน้าเว็บที่เปิดมีปุ่มหรือส่วนประกอบอะไรสะดุดตาที่สุด?",
            expectedAnswer: "นักเรียนตอบตามประสบการณ์ เช่น เห็นแบนเนอร์โปรโมชัน รูปสินค้า ราคา หรือปุ่มกดสั่งซื้อ",
            interactiveGuide: "ครูสามารถคลิกคำศัพท์ไฮไลต์สีฟ้าบนสไลด์เพื่อสาธิตการเปิดคำอธิบายศัพท์ (Interactive Glossary) ให้ดูเป็นตัวอย่าง",
            transitionNote: "ไปดูกันในสไลด์ที่ 2 ครับว่า เมื่อเรียนจบ 4 ชั่วโมงในสัปดาห์นี้ พวกเราจะทำอะไรได้บ้าง"
        },
        html: `
            <div class="col-split-6-4" style="align-items:center;">
                <div class="card blue" style="height:100%; justify-content:space-between; padding:28px 32px;">
                    <div>
                        <div style="display:inline-flex; align-items:center; gap:10px; background:var(--accent-blue); color:#1E40AF; padding:6px 16px; border-radius:999px; font-size:21px; font-weight:700; margin-bottom:14px;">
                            <i class="fa-solid fa-graduation-cap"></i> รายวิชา 21910-2016 • ระดับประกาศนียบัตรวิชาชีพ (ปวช.2)
                        </div>
                        <h1 class="hero-main-title" style="color:var(--text-primary); margin-bottom:12px;">
                            การทำงานของเว็บไซต์<br><span style="color:var(--primary);">&amp; การวิเคราะห์เว็บไซต์ธุรกิจ</span>
                        </h1>
                        <p class="body-text" style="color:var(--text-secondary);">
                            <strong>หน่วยที่ 1:</strong> ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล (สัปดาห์ที่ 2)<br>
                            เรียนรู้กระบวนการทำงานระหว่าง <span class="glossary-term" data-glossary="Web Browser">Web Browser</span> กับ <span class="glossary-term" data-glossary="Web Server">Web Server</span> ประเภทเว็บไซต์ และการประเมินคุณภาพเว็บไซต์ธุรกิจจริง
                        </p>
                    </div>

                    <div class="grid-3" style="gap:14px; flex:0 0 auto;">
                        <div style="background:#EFF6FF; border:1.5px solid #93C5FD; border-radius:14px; padding:12px 14px;">
                            <div class="caption-text" style="color:#1D4ED8; font-weight:700;"><i class="fa-solid fa-clock"></i> เวลาเรียนรวม</div>
                            <div style="font-size:25px; font-weight:800; color:#18243D;">4 ชั่วโมง</div>
                            <div class="caption-text">ทฤษฎี 2 ชม. • ปฏิบัติ 2 ชม.</div>
                        </div>
                        <div style="background:#F5F3FF; border:1.5px solid #C4B5FD; border-radius:14px; padding:12px 14px;">
                            <div class="caption-text" style="color:#6D28D9; font-weight:700;"><i class="fa-solid fa-layer-group"></i> โครงสร้างบทเรียน</div>
                            <div style="font-size:25px; font-weight:800; color:#18243D;">5 ส่วนหลัก</div>
                            <div class="caption-text">ครบทั้งทฤษฎีและวิเคราะห์เว็บจริง</div>
                        </div>
                        <div style="background:#ECFDF5; border:1.5px solid #6EE7B7; border-radius:14px; padding:12px 14px;">
                            <div class="caption-text" style="color:#047857; font-weight:700;"><i class="fa-solid fa-magnifying-glass-chart"></i> ภารกิจปฏิบัติ</div>
                            <div style="font-size:25px; font-weight:800; color:#18243D;">สำรวจ 2 เว็บจริง</div>
                            <div class="caption-text">พร้อมวาดผังและเสนอแนวทางปรับปรุง</div>
                        </div>
                    </div>
                </div>

                <div class="card purple" style="height:100%; justify-content:space-between; padding:20px;">
                    <img src="assets/diagrams/hero-how-web-works.svg" alt="แผนภาพภาพรวมการทำงานของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจ" style="width:100%; height:440px; object-fit:contain; border-radius:12px; background:#FFFFFF;">
                    <div style="display:flex; align-items:center; gap:12px; background:#FFFFFF; border:1.5px solid #DDD6FE; border-radius:12px; padding:10px 14px;">
                        <img src="assets/images/ref-web-frameworks.png" alt="ภาพประกอบระบบพัฒนาเว็บและแอปพลิเคชัน" style="width:84px; height:54px; object-fit:cover; border-radius:8px; flex-shrink:0;">
                        <div class="caption-text" style="color:#4C1D95;">
                            <strong>จากผู้ใช้งานสู่ผู้สร้างเว็บไซต์ธุรกิจ:</strong> เข้าใจทั้งระบบเบื้องหลังและมุมมองการวิเคราะห์คุณภาพหน้าเว็บ
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 2: จุดประสงค์การเรียนรู้ (Learning Objectives — 5 ข้อ)
    // =========================================================================
    {
        slideId: "u1w2-s02",
        slideNumber: 2,
        title: "จุดประสงค์การเรียนรู้ประจำสัปดาห์ที่ 2 (5 ข้อ)",
        section: "บทนำและภาพรวมหน่วยเรียน",
        layoutType: "Learning Objectives",
        teachingTime: 4,
        timeGuide: "4 นาที (ชั่วโมงที่ 1: แจ้งเป้าหมายการเรียนรู้)",
        kicker: "หัวข้อที่ 2 • เป้าหมายการเรียนรู้และแผนการจัดกิจกรรม 4 ชั่วโมง",
        badge: "5 จุดประสงค์การเรียนรู้",
        content: [
            "1. อธิบายขั้นตอนการทำงานของเว็บไซต์ระหว่างเว็บเบราว์เซอร์กับเว็บเซิร์ฟเวอร์ได้",
            "2. อธิบายความสัมพันธ์ระหว่าง URL โดเมน โฮสติ้ง และ HTTPS ได้",
            "3. เปรียบเทียบเว็บไซต์แบบข้อมูลกับเว็บแอปพลิเคชันได้",
            "4. วิเคราะห์องค์ประกอบและคุณภาพของเว็บไซต์ธุรกิจได้",
            "5. สำรวจเว็บไซต์ธุรกิจจริง 2 แห่ง พร้อมบันทึกหลักฐานและเสนอแนวทางปรับปรุงได้"
        ],
        visualAssets: ["assets/diagrams/hero-how-web-works.svg"],
        interactiveType: "None",
        speakerNotes: {
            objective: "ชี้แจงจุดประสงค์การเรียนรู้ทั้ง 5 ข้อให้นักเรียนทราบเป้าหมายที่ชัดเจนก่อนเริ่มเรียน",
            explanationGuide: "เมื่อเรียนจบสัปดาห์นี้ นักเรียนจะต้องทำได้ครบ 5 ข้อนี้ครับ ข้อ 1–2 คือเข้าใจการทำงานเบื้องหลังระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์ รวมถึง URL, โดเมน, โฮสติ้ง และ HTTPS ข้อ 3 คือแยกความต่างระหว่างเว็บไซต์แบบข้อมูลกับเว็บแอปพลิเคชัน ข้อ 4 คือวิเคราะห์องค์ประกอบและคุณภาพเว็บธุรกิจได้ และข้อ 5 คือลงมือสำรวจเว็บไซต์จริง 2 แห่งพร้อมเสนอแนวทางปรับปรุงครับ",
            extraExamples: "การรู้ทั้ง 5 ข้อนี้จะทำให้เวลาเราเริ่มสร้างเว็บไซต์ในสัปดาห์ถัด ๆ ไป เราจะไม่ได้สร้างแค่ให้พอมีหน้าเว็บ แต่สร้างเว็บที่ลูกค้าใช้งานได้จริงและตอบโจทย์ร้านค้า",
            guidingQuestion: "ใน 5 ข้อนี้ ข้อไหนที่นักเรียนคิดว่าเป็นทักษะที่เจ้าของร้านค้าออนไลน์ยุคนี้ต้องการจากนักพัฒนาเว็บมากที่สุด?",
            expectedAnswer: "การวิเคราะห์คุณภาพเว็บไซต์ให้ใช้งานง่าย รองรับมือถือ และช่วยให้ธุรกิจขายสินค้าหรือบริการได้ตามเป้าหมาย (ข้อ 4 และ 5)",
            interactiveGuide: "ครูชี้ให้เห็นการแบ่งเวลา 2 ชั่วโมงแรกสำหรับทฤษฎีและตัวอย่าง และ 2 ชั่วโมงหลังสำหรับกิจกรรมปฏิบัติสำรวจเว็บไซต์จริง",
            transitionNote: "เริ่มต้นที่หัวข้อที่ 1 สาระสำคัญของบทเรียนในสไลด์ที่ 3 กันเลยครับ"
        },
        html: `
            <div class="col-split-6-4">
                <div class="card blue" style="padding:14px 20px; gap:8px;">
                    <div class="card-icon-header">
                        <div class="icon-box" style="width:44px; height:44px; font-size:21px;"><i class="fa-solid fa-bullseye"></i></div>
                        <div>
                            <h3 class="card-title" style="font-size:28px;">เมื่อเรียนจบสัปดาห์นี้ นักเรียนสามารถ:</h3>
                            <p class="caption-text" style="font-size:20px;">ครบทั้งความรู้ความเข้าใจ (ข้อ 1–3) และการคิดวิเคราะห์ปฏิบัติจริง (ข้อ 4–5)</p>
                        </div>
                    </div>
                    <div class="step-list" style="gap:6px;">
                        <div class="step-item" style="padding:7px 12px;">
                            <div class="step-num" style="width:34px; height:34px; font-size:19px;">1</div>
                            <div class="step-content">
                                <h4 style="font-size:23px;">อธิบายขั้นตอนการทำงานของเว็บไซต์</h4>
                                <p style="font-size:20px;">อธิบายการติดต่อสื่อสารระหว่าง Web Browser กับ Web Server ได้</p>
                            </div>
                        </div>
                        <div class="step-item" style="padding:7px 12px;">
                            <div class="step-num" style="width:34px; height:34px; font-size:19px;">2</div>
                            <div class="step-content">
                                <h4 style="font-size:23px;">อธิบายความสัมพันธ์ของ URL, โดเมน, โฮสติ้ง และ HTTPS</h4>
                                <p style="font-size:20px;">เชื่อมโยงหน้าที่ของแต่ละส่วนเมื่อเปิดใช้งานเว็บไซต์จริงได้</p>
                            </div>
                        </div>
                        <div class="step-item" style="padding:7px 12px;">
                            <div class="step-num" style="width:34px; height:34px; font-size:19px;">3</div>
                            <div class="step-content">
                                <h4 style="font-size:23px;">เปรียบเทียบเว็บไซต์แบบข้อมูลกับเว็บแอปพลิเคชัน</h4>
                                <p style="font-size:20px;">จำแนกลักษณะสำคัญและเลือกใช้ให้เหมาะสมกับธุรกิจได้</p>
                            </div>
                        </div>
                        <div class="step-item" style="padding:7px 12px;">
                            <div class="step-num" style="width:34px; height:34px; font-size:19px;">4</div>
                            <div class="step-content">
                                <h4 style="font-size:23px;">วิเคราะห์องค์ประกอบและคุณภาพของเว็บไซต์ธุรกิจ</h4>
                                <p style="font-size:20px;">ตรวจสอบองค์ประกอบหลัก 7 ส่วน และเกณฑ์คุณภาพเว็บไซต์ 6 ด้านได้</p>
                            </div>
                        </div>
                        <div class="step-item" style="padding:7px 12px;">
                            <div class="step-num" style="width:34px; height:34px; font-size:19px;">5</div>
                            <div class="step-content">
                                <h4 style="font-size:23px;">สำรวจเว็บไซต์ธุรกิจจริง 2 แห่ง พร้อมเสนอแนวทางปรับปรุง</h4>
                                <p style="font-size:20px;">บันทึกหลักฐาน เปรียบเทียบจุดเด่น–จุดด้อย วาดผัง และสรุปข้อเสนอแนะได้</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card purple" style="justify-content:space-between; padding:16px 20px; gap:10px;">
                    <div class="card-icon-header">
                        <div class="icon-box purple" style="width:44px; height:44px; font-size:21px;"><i class="fa-solid fa-calendar-check"></i></div>
                        <div>
                            <h3 class="card-title" style="font-size:28px;">โครงสร้างเวลาเรียน 4 ชั่วโมง</h3>
                            <p class="caption-text" style="font-size:20px;">แบ่งเป็นภาคทฤษฎีและภาคปฏิบัติอย่างสมดุล</p>
                        </div>
                    </div>

                    <div style="background:#EFF6FF; border:2px solid #93C5FD; border-radius:14px; padding:12px 16px;">
                        <div style="font-size:24px; font-weight:800; color:#1E40AF; margin-bottom:4px;">
                            <i class="fa-solid fa-book-open"></i> ช่วงที่ 1: ภาคทฤษฎี (2 ชั่วโมง)
                        </div>
                        <ul style="padding-left:22px; color:#18243D; font-size:22px;">
                            <li>ส่วนที่ 1: การทำงานของเว็บไซต์ &amp; URL/HTTPS</li>
                            <li>ส่วนที่ 2: เว็บไซต์แบบข้อมูล vs เว็บแอปพลิเคชัน</li>
                            <li>ส่วนที่ 3: การวิเคราะห์ 7 องค์ประกอบเว็บไซต์ธุรกิจ</li>
                            <li>ส่วนที่ 4: การประเมินคุณภาพเว็บไซต์ธุรกิจ 6 ด้าน</li>
                        </ul>
                    </div>

                    <div style="background:#ECFDF5; border:2px solid #6EE7B7; border-radius:14px; padding:12px 16px;">
                        <div style="font-size:24px; font-weight:800; color:#065F46; margin-bottom:4px;">
                            <i class="fa-solid fa-laptop-code"></i> ช่วงที่ 2: ภาคปฏิบัติ (2 ชั่วโมง)
                        </div>
                        <ul style="padding-left:22px; color:#18243D; font-size:22px;">
                            <li>ส่วนที่ 5: กิจกรรม “นักวิเคราะห์เว็บไซต์ธุรกิจ”</li>
                            <li>สำรวจเว็บไซต์จริง 2 แห่ง + ทดสอบบนมือถือ</li>
                            <li>แลกเปลี่ยนตรวจทานกับเพื่อน &amp; วาดผัง Browser–Server</li>
                        </ul>
                    </div>

                    <div class="easy-explain" style="padding:10px 14px;">
                        <span class="easy-explain-badge"><i class="fa-solid fa-lightbulb"></i> หัวใจสำคัญ</span>
                        <span class="easy-explain-text" style="font-size:22px;">เรียนให้รู้จริงทั้ง <strong>“กลไกการทำงาน”</strong> และ <strong>“สายตาของนักวิเคราะห์”</strong></span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 3: สาระสำคัญของบทเรียน (Click-to-Reveal)
    // =========================================================================
    {
        slideId: "u1w2-s03",
        slideNumber: 3,
        title: "สาระสำคัญ: เบื้องหลังหน้าเว็บไซต์ธุรกิจที่เราเห็นทุกวัน",
        section: "1. สาระสำคัญ",
        layoutType: "Introduction / Motivation",
        teachingTime: 5,
        timeGuide: "5 นาที (ชั่วโมงที่ 1: ปูพื้นฐานสาระสำคัญ)",
        kicker: "หัวข้อที่ 1 • สาระสำคัญของบทเรียน (Interactive Click-to-Reveal)",
        badge: "คลิกการ์ดเพื่อเปิดมุมมองเบื้องหลัง",
        content: [
            "เมื่อเราเปิดเว็บไซต์ร้านค้าออนไลน์ เรามักเห็นรูปภาพสินค้า ราคา เมนูต่าง ๆ และปุ่มสำหรับสั่งซื้อ แต่เบื้องหลังหน้าเว็บไซต์ที่ปรากฏบนหน้าจอนั้น มีการทำงานร่วมกันของหลายส่วน เช่น เว็บเบราว์เซอร์ เว็บเซิร์ฟเวอร์ ชื่อโดเมน และระบบเครือข่ายอินเทอร์เน็ต",
            "เว็บไซต์ธุรกิจแต่ละแห่งมีวัตถุประสงค์และความสามารถแตกต่างกัน บางเว็บไซต์สร้างขึ้นเพื่อให้ข้อมูลสินค้าและช่องทางติดต่อ ขณะที่บางเว็บไซต์สามารถรับคำสั่งซื้อ ตรวจสอบสถานะสินค้า หรือให้ผู้ใช้งานเข้าสู่ระบบได้",
            "ดังนั้น ผู้ที่ต้องการสร้างเว็บไซต์สำหรับธุรกิจดิจิทัลจึงควรเข้าใจทั้งกระบวนการทำงานของเว็บไซต์และวิธีพิจารณาว่าเว็บไซต์หนึ่ง ๆ สามารถตอบสนองความต้องการของธุรกิจและลูกค้าได้ดีเพียงใด"
        ],
        visualAssets: ["assets/diagrams/hero-how-web-works.svg"],
        interactiveType: "Click-to-Reveal",
        speakerNotes: {
            objective: "ให้นักเรียนตระหนักว่าหน้าเว็บที่เห็นบนหน้าจอเกิดจากการทำงานร่วมกันของหลายระบบ และแต่ละธุรกิจต้องการเว็บไซต์ที่มีความสามารถไม่เหมือนกัน",
            explanationGuide: "เวลาพวกเราเปิดเว็บไซต์ร้านค้าออนไลน์ สิ่งที่เห็นทันทีคือรูปสินค้า ราคา เมนู และปุ่มสั่งซื้อใช่ไหมครับ แต่รู้ไหมว่ากว่าภาพเหล่านี้จะขึ้นมาบนจอได้ เบื้องหลังมีทั้งเว็บเบราว์เซอร์ เว็บเซิร์ฟเวอร์ ชื่อโดเมน และอินเทอร์เน็ตทำงานประสานกันอยู่ นอกจากนี้ เว็บไซต์แต่ละร้านก็ไม่ได้เหมือนกันหมด บางร้านทำเว็บไว้ให้ดูข้อมูลและเบอร์ติดต่อเฉย ๆ แต่บางร้านกดสั่งซื้อ เช็กสถานะพัสดุ และล็อกอินสมาชิกได้เลย",
            extraExamples: "เหมือนร้านขายเสื้อผ้าแถวบ้าน บางร้านมีแค่ป้ายบอกราคาหน้าร้านให้ลูกค้าโทรถาม แต่ห้างใหญ่มีระบบแคชเชียร์ สะสมแต้ม และจัดส่งถึงบ้าน",
            guidingQuestion: "ถ้าเราอยากรับจ้างทำเว็บไซต์ให้ร้านค้าในจังหวัดของเรา ทำไมเราถึงต้องรู้เรื่องการทำงานเบื้องหลังด้วย รู้แค่วิธีตกแต่งหน้าเว็บให้สวยพอไหมครับ?",
            expectedAnswer: "ไม่พอ เพราะถ้าไม่เข้าใจระบบเบื้องหลังและการวิเคราะห์ความต้องการธุรกิจ เราอาจเลือกประเภทเว็บไซต์ผิด หรือทำเว็บที่สวยแต่ลูกค้ากดสั่งซื้อหรือติดต่อร้านไม่ได้จริง",
            interactiveGuide: "คลิกปุ่ม 'เปิดคำอธิบาย' บนการ์ดทั้ง 3 ใบ เพื่อให้นักเรียนเปรียบเทียบระหว่างสิ่งที่เห็นหน้าจอ ระบบเบื้องหลัง และเป้าหมายทางธุรกิจ",
            transitionNote: "ทีนี้เรามาเริ่มเจาะลึกส่วนที่ 1 เรื่องกระบวนการทำงานของเว็บไซต์กันในสไลด์ที่ 4 ครับ"
        },
        html: `
            <div style="display:flex; align-items:center; justify-content:space-between; background:var(--accent-blue); border:2px solid #93C5FD; padding:10px 20px; border-radius:14px; flex-shrink:0;">
                <span class="caption-text" style="font-weight:700; color:#1E40AF;"><i class="fa-solid fa-hand-pointer"></i> คลิกที่ปุ่มในการ์ดแต่ละใบ เพื่อเปิดดูรายละเอียดสาระสำคัญทั้ง 3 มิติ</span>
                <button class="reveal-btn reveal-all-trigger" type="button"><i class="fa-solid fa-eye"></i> เปิด/ซ่อนทั้งหมด</button>
            </div>

            <div class="grid-3">
                <div class="reveal-card revealed">
                    <div class="reveal-header">
                        <div class="card-icon-header">
                            <div class="icon-box"><i class="fa-solid fa-Store"></i><i class="fa-solid fa-store"></i></div>
                            <div>
                                <h3 class="card-title">1. สิ่งที่เห็น vs เบื้องหลัง</h3>
                                <p class="caption-text">หน้าเว็บและการทำงานร่วมกัน</p>
                            </div>
                        </div>
                        <button class="reveal-btn" type="button"><i class="fa-solid fa-chevron-up"></i> ซ่อน</button>
                    </div>
                    <div class="reveal-placeholder">คลิกเพื่อดูว่าเบื้องหลังหน้าเว็บมีส่วนใดทำงานร่วมกันบ้าง</div>
                    <div class="reveal-body">
                        บนหน้าจอเราเห็น<strong>รูปภาพสินค้า ราคา เมนู และปุ่มสั่งซื้อ</strong> แต่เบื้องหลังมีการทำงานร่วมกันของ <strong>เว็บเบราว์เซอร์, เว็บเซิร์ฟเวอร์, ชื่อโดเมน และระบบเครือข่ายอินเทอร์เน็ต</strong>
                    </div>
                </div>

                <div class="reveal-card">
                    <div class="reveal-header">
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-sliders"></i></div>
                            <div>
                                <h3 class="card-title">2. ความสามารถที่ต่างกัน</h3>
                                <p class="caption-text">วัตถุประสงค์ของแต่ละธุรกิจ</p>
                            </div>
                        </div>
                        <button class="reveal-btn" type="button"><i class="fa-solid fa-chevron-down"></i> เปิดดู</button>
                    </div>
                    <div class="reveal-placeholder">คลิกเพื่อเปรียบเทียบความสามารถของเว็บไซต์ธุรกิจแต่ละแห่ง</div>
                    <div class="reveal-body">
                        บางเว็บไซต์สร้างขึ้นเพื่อ<strong>ให้ข้อมูลสินค้าและช่องทางติดต่อ</strong> ขณะที่บางเว็บไซต์สามารถ<strong>รับคำสั่งซื้อ ตรวจสอบสถานะสินค้า หรือให้ผู้ใช้งานเข้าสู่ระบบ</strong>ได้
                    </div>
                </div>

                <div class="reveal-card">
                    <div class="reveal-header">
                        <div class="card-icon-header">
                            <div class="icon-box mint"><i class="fa-solid fa-user-check"></i></div>
                            <div>
                                <h3 class="card-title">3. หัวใจของผู้สร้างเว็บ</h3>
                                <p class="caption-text">ทำไมต้องเรียนเรื่องนี้?</p>
                            </div>
                        </div>
                        <button class="reveal-btn" type="button"><i class="fa-solid fa-chevron-down"></i> เปิดดู</button>
                    </div>
                    <div class="reveal-placeholder">คลิกเพื่อดูสิ่งที่ผู้สร้างเว็บไซต์ธุรกิจต้องเข้าใจ</div>
                    <div class="reveal-body">
                        ผู้สร้างเว็บไซต์ธุรกิจดิจิทัลต้องเข้าใจทั้ง<strong>กระบวนการทำงานของเว็บไซต์</strong> และ<strong>วิธีพิจารณาว่าเว็บไซต์ตอบสนองความต้องการของธุรกิจและลูกค้าได้ดีเพียงใด</strong>
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-compass"></i> สรุปสาระสำคัญ</span>
                <span class="easy-explain-text">เว็บไซต์ธุรกิจที่ดีไม่ได้วัดที่ความสวยงามเพียงอย่างเดียว แต่ต้องทำงานถูกต้องและช่วยให้ลูกค้ากับธุรกิจบรรลุเป้าหมายได้จริง</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 4: ส่วนที่ 1 การทำงานของเว็บไซต์ — 3.1 เมื่อเราเปิดเว็บไซต์ เกิดอะไรขึ้นบ้าง?
    // =========================================================================
    {
        slideId: "u1w2-s04",
        slideNumber: 4,
        title: "3.1 เมื่อเราเปิดเว็บไซต์ เกิดอะไรขึ้นบ้าง?",
        section: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        layoutType: "Prior Knowledge Activation",
        teachingTime: 5,
        timeGuide: "5 นาที (ชั่วโมงที่ 1: กระตุ้นความคิดและยกตัวอย่างร้านกาแฟ)",
        kicker: "ส่วนที่ 1 การทำงานของเว็บไซต์ • หัวข้อที่ 3.1",
        badge: "สถานการณ์ตัวอย่าง: เว็บไซต์ร้านกาแฟ",
        content: [
            "นักเรียนเคยสงสัยหรือไม่ว่า เมื่อเราพิมพ์ชื่อเว็บไซต์ลงใน Google Chrome แล้วกด Enter เหตุใดเว็บไซต์จึงปรากฏขึ้นบนหน้าจอได้ภายในเวลาเพียงไม่กี่วินาที?",
            "ความจริงแล้ว การเปิดเว็บไซต์ไม่ได้เป็นเพียงการแสดงภาพที่เก็บอยู่ในคอมพิวเตอร์ของเรา แต่เป็นกระบวนการติดต่อสื่อสารระหว่างอุปกรณ์ของผู้ใช้งานกับระบบที่ให้บริการเว็บไซต์ผ่านอินเทอร์เน็ต",
            "ตัวอย่างเช่น นักเรียนต้องการเข้าเว็บไซต์ร้านกาแฟเพื่อดูเมนูเครื่องดื่ม เมื่อพิมพ์ URL ของร้าน เบราว์เซอร์จะติดต่อไปยังเซิร์ฟเวอร์ที่ให้บริการเว็บไซต์ จากนั้นเซิร์ฟเวอร์จะส่งข้อมูลที่จำเป็นกลับมา เพื่อให้เบราว์เซอร์แสดงหน้าเว็บที่มีชื่อร้าน รูปภาพเครื่องดื่ม ราคา และช่องทางติดต่อ"
        ],
        visualAssets: ["assets/diagrams/hero-how-web-works.svg"],
        interactiveType: "Click-to-Reveal",
        speakerNotes: {
            objective: "ปรับความเข้าใจให้ถูกต้องว่าการเปิดเว็บไซต์คือการสื่อสารผ่านอินเทอร์เน็ตระหว่างอุปกรณ์ผู้ใช้กับเซิร์ฟเวอร์ ไม่ใช่การเปิดไฟล์ที่อยู่ในเครื่องตัวเอง",
            explanationGuide: "ลองนึกภาพตามนะครับ เวลาเราเปิด Google Chrome แล้วพิมพ์ชื่อเว็บไซต์ลงไป พอกด Enter แค่ไม่กี่วินาที หน้าเว็บก็เด้งขึ้นมาเลย! หลายคนอาจนึกว่าภาพหน้าเว็บนั้นอยู่ในคอมของเราอยู่แล้ว แต่ความจริงไม่ใช่ครับ มันคือการส่งข้อความติดต่อกันผ่านอินเทอร์เน็ตระหว่างเครื่องของเรากับเครื่องเซิร์ฟเวอร์ของร้านกาแฟ",
            extraExamples: "ถ้าเราตัดสายอินเทอร์เน็ตหรือปิด Wi-Fi แล้วพิมพ์ URL เว็บไซต์ใหม่ที่ไม่เคยเข้ามาก่อน เบราว์เซอร์จะเปิดหน้าเว็บไม่ได้ เพราะติดต่อเซิร์ฟเวอร์ปลายทางไม่ได้นั่นเอง",
            guidingQuestion: "ในตัวอย่างการเข้าเว็บไซต์ร้านกาแฟ เมื่อเซิร์ฟเวอร์ส่งข้อมูลกลับมาแล้ว หน้าเว็บแสดงข้อมูลอะไรให้นักเรียนเห็นบ้างครับ?",
            expectedAnswer: "แสดงชื่อร้าน รูปภาพเครื่องดื่ม ราคา และช่องทางติดต่อ",
            interactiveGuide: "ชี้ให้นักเรียนดูลำดับเหตุการณ์ในตัวอย่างร้านกาแฟตั้งแต่พิมพ์ URL จนถึงการแสดงผลหน้าเมนู",
            transitionNote: "แล้วกระบวนการติดต่อสื่อสารที่ว่านี้ มีทั้งหมดกี่ขั้นตอน อะไรบ้าง? ไปดูแผนภาพ 5 ขั้นตอนในสไลด์ที่ 5 กันครับ"
        },
        html: `
            <div class="col-split-6-4">
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><i class="fa-solid fa-circle-question"></i></div>
                            <div>
                                <h3 class="card-title">พิมพ์ชื่อเว็บใน Google Chrome แล้วกด Enter...</h3>
                                <p class="caption-text">ทำไมหน้าเว็บจึงปรากฏขึ้นภายในเวลาเพียงไม่กี่วินาที?</p>
                            </div>
                        </div>
                        <p class="body-text" style="margin-top:14px;">
                            ความจริงแล้ว การเปิดเว็บไซต์<strong>ไม่ได้เป็นเพียงการแสดงภาพที่เก็บอยู่ในคอมพิวเตอร์ของเรา</strong> แต่เป็น<strong>กระบวนการติดต่อสื่อสาร</strong>ระหว่างอุปกรณ์ของผู้ใช้งานกับระบบที่ให้บริการเว็บไซต์ผ่านอินเทอร์เน็ต
                        </p>
                    </div>

                    <div style="background:#EFF6FF; border:2px solid #93C5FD; border-radius:16px; padding:18px 22px;">
                        <h4 style="font-size:27px; font-weight:800; color:#1E40AF; margin-bottom:10px;">
                            <i class="fa-solid fa-mug-hot"></i> ตัวอย่างสถานการณ์จริง: เข้าเว็บไซต์ร้านกาแฟ
                        </h4>
                        <div class="step-list" style="gap:10px;">
                            <div class="step-item" style="padding:10px 14px;">
                                <div class="step-num">1</div>
                                <div class="step-content">
                                    <p style="font-size:24px; color:#18243D;">นักเรียนต้องการเข้าเว็บไซต์ร้านกาแฟเพื่อดูเมนูเครื่องดื่ม จึงพิมพ์ <span class="glossary-term" data-glossary="URL">URL</span> ของร้านในเบราว์เซอร์</p>
                                </div>
                            </div>
                            <div class="step-item" style="padding:10px 14px;">
                                <div class="step-num">2</div>
                                <div class="step-content">
                                    <p style="font-size:24px; color:#18243D;"><span class="glossary-term" data-glossary="Web Browser">Web Browser</span> ติดต่อไปยัง <span class="glossary-term" data-glossary="Web Server">Web Server</span> ที่ให้บริการเว็บไซต์ผ่านอินเทอร์เน็ต</p>
                                </div>
                            </div>
                            <div class="step-item" style="padding:10px 14px;">
                                <div class="step-num">3</div>
                                <div class="step-content">
                                    <p style="font-size:24px; color:#18243D;">เซิร์ฟเวอร์ส่งข้อมูลที่จำเป็นกลับมา เพื่อให้เบราว์เซอร์แสดง<strong>ชื่อร้าน รูปภาพเครื่องดื่ม ราคา และช่องทางติดต่อ</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card purple" style="justify-content:space-between;">
                    <img src="assets/diagrams/hero-how-web-works.svg" alt="กระบวนการติดต่อสื่อสารระหว่างเบราว์เซอร์ของลูกค้ากับเซิร์ฟเวอร์ร้านกาแฟ" style="width:100%; height:410px; object-fit:contain; background:#FFFFFF; border-radius:14px;">
                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-wifi"></i> จุดสำคัญ</span>
                        <span class="easy-explain-text">ทุกครั้งที่เปิดเว็บ คือการคุยกันระหว่าง <strong>อุปกรณ์ของเรา (Browser)</strong> กับ <strong>เครื่องแม่ข่าย (Server)</strong></span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 5: 3.2 ขั้นตอนการทำงานของเว็บไซต์ (Interactive Step-by-Step 5 ขั้นตอน)
    // =========================================================================
    {
        slideId: "u1w2-s05",
        slideNumber: 5,
        title: "3.2 แผนภาพขั้นตอนการทำงานของเว็บไซต์ (5 ขั้นตอน)",
        section: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        layoutType: "Core Concepts (Interactive Simulation)",
        teachingTime: 8,
        timeGuide: "8 นาที (ชั่วโมงที่ 1: จำลองการทำงานทีละขั้นตอน 1–5)",
        kicker: "ส่วนที่ 1 การทำงานของเว็บไซต์ • หัวข้อที่ 3.2 (Interactive Step-by-Step)",
        badge: "คลิกขั้นตอนที่ 1–5 เพื่อดูการไหลของข้อมูล",
        content: [
            "ขั้นตอนที่ 1: ผู้ใช้งานเปิดเว็บเบราว์เซอร์ พิมพ์ URL ของเว็บไซต์ร้านกาแฟ และค้นหาที่อยู่เซิร์ฟเวอร์ผ่าน DNS",
            "ขั้นตอนที่ 2: เบราว์เซอร์ส่งคำขอ (Request) ขอข้อมูลหน้าเว็บไซต์ผ่านเครือข่าย",
            "ขั้นตอนที่ 3: เว็บเซิร์ฟเวอร์รับคำขอ ค้นหาหรือประมวลผลข้อมูลที่ต้องการ",
            "ขั้นตอนที่ 4: เซิร์ฟเวอร์ส่งข้อมูลกลับ (Response) เช่น HTML, CSS, JavaScript และรูปภาพ",
            "ขั้นตอนที่ 5: เบราว์เซอร์แสดงผลเว็บไซต์ ผู้ใช้งานมองเห็นหน้าเว็บและโต้ตอบได้"
        ],
        visualAssets: ["assets/diagrams/browser-server-5steps.svg"],
        interactiveType: "Step-by-Step Simulation",
        speakerNotes: {
            objective: "อธิบายลำดับการทำงานของเว็บไซต์ทั้ง 5 ขั้นตอนตั้งแต่ผู้ใช้พิมพ์ URL จนหน้าเว็บปรากฏบนหน้าจอ",
            explanationGuide: "สไลด์นี้สำคัญมากครับ เพราะเป็นหัวใจของส่วนที่ 1 และนักเรียนจะต้องนำไปใช้วาดผังส่งในกิจกรรมท้ายบทด้วย! มาดูทีละขั้นนะครับ ขั้นที่ 1 ผู้ใช้เปิดเบราว์เซอร์ พิมพ์ URL ร้านกาแฟ แล้วค้นหาที่อยู่เซิร์ฟเวอร์ผ่าน DNS ขั้นที่ 2 เบราว์เซอร์ส่งคำขอหรือ Request ออกไป ขั้นที่ 3 เว็บเซิร์ฟเวอร์รับคำขอแล้วค้นหาหรือประมวลผลข้อมูล ขั้นที่ 4 เซิร์ฟเวอร์ส่งข้อมูลกลับมาเป็น Response ได้แก่ HTML, CSS, JavaScript และรูปภาพ และขั้นที่ 5 เบราว์เซอร์นำมาแสดงผลให้เราเห็นและคลิกใช้งานได้",
            extraExamples: "เปรียบเหมือนการสั่งกาแฟ: 1) ดูป้ายร้านและเดินไปเคาน์เตอร์ 2) สั่งเมนูกับพนักงาน (Request) 3) บาริสต้าชงกาแฟ 4) พนักงานเสิร์ฟกาแฟกลับมา (Response) 5) เราได้รับกาแฟพร้อมดื่ม",
            guidingQuestion: "ถ้าเปรียบเทียบกับการสั่งอาหารในร้าน ขั้นตอนที่ 2 (Request) และขั้นตอนที่ 4 (Response) เปรียบได้กับเหตุการณ์ใดครับ?",
            expectedAnswer: "Request คือตอนเราส่งใบสั่งอาหารให้พนักงาน ส่วน Response คือตอนพนักงานยกอาหารที่ทำเสร็จแล้วมาเสิร์ฟที่โต๊ะ",
            interactiveGuide: "คลิกปุ่ม 'ขั้นตอนที่ 1' ถึง 'ขั้นตอนที่ 5' ด้านบนเพื่อไฮไลต์คำอธิบายและดูบทบาทของแต่ละขั้นตอน",
            transitionNote: "เพื่อให้เข้าใจลึกซึ้งขึ้น เราจะไปเจาะลึกรายละเอียดของขั้นตอนที่ 1–3 ในสไลด์ถัดไปครับ"
        },
        html: `
            <div class="sim-stepper-bar" id="webFlowStepper" role="tablist" aria-label="ตัวจำลองขั้นตอนการทำงานของเว็บไซต์ 5 ขั้นตอน">
                <button type="button" class="sim-step-btn active" data-step="1">1. เปิดเบราว์เซอร์ &amp; DNS</button>
                <button type="button" class="sim-step-btn" data-step="2">2. ส่งคำขอ (Request)</button>
                <button type="button" class="sim-step-btn" data-step="3">3. เซิร์ฟเวอร์รับคำขอ</button>
                <button type="button" class="sim-step-btn" data-step="4">4. ส่งกลับ (Response)</button>
                <button type="button" class="sim-step-btn" data-step="5">5. เบราว์เซอร์แสดงผล</button>
            </div>

            <div class="col-split-6-4">
                <div class="card blue" style="padding:14px; justify-content:center;">
                    <img src="assets/diagrams/browser-server-5steps.svg" alt="แผนภาพการทำงานของเว็บไซต์แบบพื้นฐาน 5 ขั้นตอน" style="width:100%; height:440px; object-fit:contain; border-radius:12px; background:#FFFFFF;">
                </div>

                <div class="card purple" id="webFlowDetailCard" style="justify-content:space-between;">
                    <div>
                        <div style="display:inline-flex; align-items:center; gap:8px; background:var(--primary); color:#FFFFFF; padding:5px 14px; border-radius:999px; font-size:21px; font-weight:700;" id="simStepBadge">
                            ขั้นตอนที่ 1 จาก 5
                        </div>
                        <h3 class="card-title" id="simStepTitle" style="margin-top:10px; color:#1E40AF;">
                            1. ผู้ใช้งานเปิดเว็บเบราว์เซอร์
                        </h3>
                        <p class="body-text" id="simStepDesc" style="margin-top:10px;">
                            ผู้ใช้งานเปิดโปรแกรมเว็บเบราว์เซอร์ (เช่น Google Chrome) พิมพ์ <strong>URL ของเว็บไซต์ร้านกาแฟ</strong> จากนั้นระบบ <strong>DNS</strong> จะช่วยค้นหาที่อยู่หมายเลข IP ของเซิร์ฟเวอร์ปลายทาง
                        </p>
                    </div>

                    <div style="background:#EFF6FF; border:2px solid #93C5FD; border-radius:14px; padding:14px 18px;" id="simStepRoleBox">
                        <div class="caption-text" style="font-weight:700; color:#1D4ED8;"><i class="fa-solid fa-microchip"></i> สิ่งที่เกิดขึ้นในขั้นตอนนี้:</div>
                        <div class="card-text" id="simStepTech" style="margin-top:4px; font-weight:600; color:#18243D;">
                            พิมพ์ URL ร้านกาแฟ ➔ ค้นหาที่อยู่เซิร์ฟเวอร์ผ่านระบบ DNS (Domain Name System)
                        </div>
                    </div>

                    <div style="display:flex; justify-content:space-between; gap:10px;">
                        <button type="button" class="ctrl-btn" id="simPrevStepBtn" style="font-size:21px; padding:8px 16px;"><i class="fa-solid fa-arrow-left"></i> ขั้นก่อนหน้า</button>
                        <button type="button" class="ctrl-btn primary" id="simNextStepBtn" style="font-size:21px; padding:8px 18px;">ขั้นถัดไป <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 6: 3.2 อธิบายแต่ละขั้นตอน (ขั้นตอนที่ 1 – 3)
    // =========================================================================
    {
        slideId: "u1w2-s06",
        slideNumber: 6,
        title: "เจาะลึกขั้นตอนที่ 1–3: จากการระบุ URL สู่การจัดการคำขอที่เซิร์ฟเวอร์",
        section: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        layoutType: "Detailed Explanations",
        teachingTime: 7,
        timeGuide: "7 นาที (ชั่วโมงที่ 1: อธิบายละเอียดขั้นตอนที่ 1, 2 และ 3)",
        kicker: "ส่วนที่ 1 การทำงานของเว็บไซต์ • หัวข้อที่ 3.2 (รายละเอียดขั้นตอนที่ 1–3)",
        badge: "ขาไปของคำขอ (Browser ➔ Server)",
        content: [
            "ขั้นตอนที่ 1 ผู้ใช้งานระบุเว็บไซต์ที่ต้องการเปิด: เปิดเว็บเบราว์เซอร์ เช่น Google Chrome แล้วพิมพ์ URL ลงในช่องที่อยู่ เบราว์เซอร์ใช้ข้อมูลจาก URL เพื่อทราบว่าต้องติดต่อกับเว็บไซต์ใด หากใช้ชื่อโดเมน ระบบ DNS (Domain Name System) จะช่วยค้นหาหมายเลข IP Address ที่เกี่ยวข้องกับเซิร์ฟเวอร์ปลายทาง",
            "ขั้นตอนที่ 2 เบราว์เซอร์ส่งคำขอ (Request): เมื่อทราบปลายทางแล้ว เบราว์เซอร์จะสร้างการเชื่อมต่อและส่งคำขอไปยังเซิร์ฟเวอร์ เช่น ขอเปิดหน้าแรกของเว็บไซต์ หรือขอข้อมูลรูปภาพสินค้า",
            "ขั้นตอนที่ 3 เว็บเซิร์ฟเวอร์รับและจัดการคำขอ: เซิร์ฟเวอร์ตรวจสอบว่าผู้ใช้งานต้องการข้อมูลใด หากเป็นเว็บไซต์ทั่วไปอาจส่งไฟล์ที่จัดเก็บไว้กลับไปได้ทันที แต่หากมีระบบสมาชิกหรือระบบสั่งซื้อ อาจต้องประมวลผลและดึงข้อมูลจากฐานข้อมูลก่อน"
        ],
        visualAssets: ["assets/diagrams/browser-server-5steps.svg"],
        interactiveType: "Glossary Quick Triggers",
        speakerNotes: {
            objective: "อธิบายรายละเอียดเชิงลึกของขั้นตอนที่ 1, 2 และ 3 โดยเฉพาะบทบาทของ DNS และความต่างของการประมวลผลบนเซิร์ฟเวอร์",
            explanationGuide: "มาดูรายละเอียด 3 ขั้นตอนแรกครับ ขั้นที่ 1 พอเราพิมพ์ URL ใน Google Chrome ถ้า URL นั้นเป็นชื่อโดเมน ระบบ DNS จะช่วยค้นหาหมายเลข IP Address ของเซิร์ฟเวอร์ปลายทางให้ก่อน ขั้นที่ 2 พอรู้ปลายทางแล้ว เบราว์เซอร์จะสร้างการเชื่อมต่อและส่งคำขอ (Request) ไป เช่น ขอเปิดหน้าแรกหรือขอรูปสินค้า ขั้นที่ 3 พอเซิร์ฟเวอร์รับคำขอ ถ้าเป็นเว็บข้อมูลทั่วไป เซิร์ฟเวอร์หยิบไฟล์ที่เก็บไว้ส่งกลับได้ทันที แต่ถ้าเป็นเว็บที่มีระบบสมาชิกหรือระบบสั่งซื้อ เซิร์ฟเวอร์จะต้องประมวลผลและดึงข้อมูลจากฐานข้อมูล (Database) ก่อนครับ",
            extraExamples: "เหมือนเราถามพนักงานร้านกาแฟว่า 'ร้านปิดกี่โมง' พนักงานตอบได้ทันที (เหมือนเว็บทั่วไปส่งไฟล์กลับทันที) แต่ถ้าถามว่า 'แต้มสะสมของฉันเหลือกี่แต้ม' พนักงานต้องไปค้นในระบบฐานข้อมูลสมาชิกก่อนตอบ",
            guidingQuestion: "ถ้าระบบ DNS ไม่ทำงาน นักเรียนคิดว่าเมื่อเราพิมพ์ชื่อโดเมนของร้านกาแฟ เบราว์เซอร์จะส่ง Request ไปถูกเซิร์ฟเวอร์ไหมครับ เพราะอะไร?",
            expectedAnswer: "ส่งไปไม่ถูก เพราะเบราว์เซอร์จะไม่ทราบหมายเลข IP Address ของเครื่องเซิร์ฟเวอร์ปลายทาง",
            interactiveGuide: "ครูคลิกที่คำว่า DNS, Request และ Web Server เพื่อทบทวนความหมายให้นักเรียน",
            transitionNote: "เมื่อเซิร์ฟเวอร์เตรียมข้อมูลเสร็จแล้ว ขากลับในขั้นตอนที่ 4 และ 5 จะส่งอะไรกลับมาบ้าง ไปดูในสไลด์ที่ 7 ครับ"
        },
        html: `
            <div class="grid-3">
                <div class="card blue">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><span style="font-weight:800; font-family:var(--font-en);">1</span></div>
                            <div>
                                <h3 class="card-title">ระบุเว็บไซต์ที่ต้องการเปิด</h3>
                                <p class="caption-text">URL &amp; ระบบค้นหา <span class="glossary-term" data-glossary="DNS">DNS</span></p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:12px;">
                            ผู้ใช้งานเปิดเว็บเบราว์เซอร์ เช่น <strong>Google Chrome</strong> แล้วพิมพ์ <strong>URL</strong> ลงในช่องที่อยู่ เบราว์เซอร์จะใช้ข้อมูลจาก URL เพื่อทราบว่าต้องติดต่อกับเว็บไซต์ใด
                        </p>
                    </div>
                    <div style="background:#EFF6FF; border:1.5px solid #93C5FD; border-radius:14px; padding:14px 16px;">
                        <div class="caption-text" style="color:#1E40AF; font-weight:700;"><i class="fa-solid fa-address-book"></i> บทบาทของระบบ DNS:</div>
                        <p class="caption-text" style="color:#18243D; margin-top:4px;">
                            หาก URL ใช้ชื่อโดเมน ระบบ <strong>DNS (Domain Name System)</strong> จะช่วยค้นหาหมายเลข <strong>IP Address</strong> ที่เกี่ยวข้องกับเซิร์ฟเวอร์ปลายทาง
                        </p>
                    </div>
                </div>

                <div class="card purple">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box purple"><span style="font-weight:800; font-family:var(--font-en);">2</span></div>
                            <div>
                                <h3 class="card-title">เบราว์เซอร์ส่งคำขอ</h3>
                                <p class="caption-text">สร้างการเชื่อมต่อ &amp; ส่ง <span class="glossary-term" data-glossary="Request">Request</span></p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:12px;">
                            เมื่อทราบปลายทางแล้ว เบราว์เซอร์จะ<strong>สร้างการเชื่อมต่อ</strong>และส่งคำขอ (Request) ไปยังเซิร์ฟเวอร์ผ่านเครือข่ายอินเทอร์เน็ต
                        </p>
                    </div>
                    <div style="background:#F5F3FF; border:1.5px solid #C4B5FD; border-radius:14px; padding:14px 16px;">
                        <div class="caption-text" style="color:#5B21B6; font-weight:700;"><i class="fa-solid fa-paper-plane"></i> ตัวอย่างคำขอที่ส่งไป:</div>
                        <p class="caption-text" style="color:#18243D; margin-top:4px;">
                            • ขอเปิด<strong>หน้าแรกของเว็บไซต์</strong><br>
                            • หรือขอ<strong>ข้อมูลรูปภาพสินค้าและเมนูเครื่องดื่ม</strong>
                        </p>
                    </div>
                </div>

                <div class="card mint" style="padding:16px 20px;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box mint"><span style="font-weight:800; font-family:var(--font-en);">3</span></div>
                            <div>
                                <h3 class="card-title" style="font-size:29px;">เซิร์ฟเวอร์รับและจัดการคำขอ</h3>
                                <p class="caption-text">การประมวลผลของ <span class="glossary-term" data-glossary="Web Server">Web Server</span></p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:8px;">
                            เซิร์ฟเวอร์จะตรวจสอบว่าผู้ใช้งานต้องการข้อมูลใด โดยมีลักษณะการทำงาน 2 กรณีตามความซับซ้อนของเว็บไซต์:
                        </p>
                    </div>
                    <div style="background:#ECFDF5; border:1.5px solid #6EE7B7; border-radius:14px; padding:12px 14px;">
                        <p class="caption-text" style="color:#065F46;">
                            <strong>1) เว็บไซต์ทั่วไป:</strong> ส่งไฟล์ที่จัดเก็บไว้กลับไปได้ทันที<br>
                            <strong>2) เว็บที่มีระบบสมาชิก/สั่งซื้อ:</strong> ต้องประมวลผลและ<strong>ดึงข้อมูลจากฐานข้อมูล</strong>ก่อน
                        </p>
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-route"></i> สรุปขาไป (ขั้นตอนที่ 1–3)</span>
                <span class="easy-explain-text">พิมพ์ URL ➔ <strong>DNS</strong> แปลงชื่อเป็นเลข IP ➔ ส่ง <strong>Request</strong> ไปหาเซิร์ฟเวอร์ ➔ <strong>เซิร์ฟเวอร์</strong> ค้นหาไฟล์หรือดึงข้อมูลจากฐานข้อมูล</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 7: 3.2 อธิบายแต่ละขั้นตอน (ขั้นตอนที่ 4 – 5)
    // =========================================================================
    {
        slideId: "u1w2-s07",
        slideNumber: 7,
        title: "เจาะลึกขั้นตอนที่ 4–5: เซิร์ฟเวอร์ส่งข้อมูลกลับและการแสดงผลหน้าเว็บ",
        section: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        layoutType: "Detailed Explanations (Interactive Layer Preview)",
        teachingTime: 7,
        timeGuide: "7 นาที (ชั่วโมงที่ 1: อธิบายขั้นตอนที่ 4 Response และขั้นตอนที่ 5 แสดงผล)",
        kicker: "ส่วนที่ 1 การทำงานของเว็บไซต์ • หัวข้อที่ 3.2 (รายละเอียดขั้นตอนที่ 4–5)",
        badge: "ขากลับและการแสดงผล (Server ➔ Browser)",
        content: [
            "ขั้นตอนที่ 4 เซิร์ฟเวอร์ส่งข้อมูลกลับ (Response): ข้อมูลที่ส่งกลับมาอาจประกอบด้วยไฟล์ HTML ซึ่งกำหนดโครงสร้างหน้าเว็บ ไฟล์ CSS ที่กำหนดรูปแบบและสีสัน ไฟล์ JavaScript ที่เพิ่มความสามารถในการโต้ตอบ และไฟล์รูปภาพหรือสื่ออื่น ๆ",
            "ขั้นตอนที่ 5 เบราว์เซอร์ประมวลผลและแสดงหน้าเว็บ: เบราว์เซอร์นำข้อมูลที่ได้รับมาประมวลผลและแสดงบนหน้าจอ ทำให้ผู้ใช้งานมองเห็นข้อความ รูปภาพ เมนู และปุ่มต่าง ๆ ตามที่เว็บไซต์ออกแบบไว้"
        ],
        visualAssets: ["assets/images/ref-web-frameworks.png"],
        interactiveType: "Interactive Layer Builder",
        speakerNotes: {
            objective: "อธิบายองค์ประกอบของข้อมูลที่เซิร์ฟเวอร์ส่งกลับมาในขั้นตอนที่ 4 (HTML, CSS, JavaScript, รูปภาพ) และการประมวลผลแสดงหน้าเว็บในขั้นตอนที่ 5",
            explanationGuide: "พอเซิร์ฟเวอร์เตรียมข้อมูลเสร็จ ก็เข้าสู่ขั้นตอนที่ 4 คือส่งข้อมูลกลับหรือ Response ครับ สิ่งที่ส่งกลับมาไม่ได้มาเป็นรูปภาพหน้าเว็บแผ่นเดียวนะครับ แต่ส่งไฟล์แยกหน้าที่กันมา 4 อย่าง คือ 1) ไฟล์ HTML กำหนดโครงสร้างหน้าเว็บ 2) ไฟล์ CSS กำหนดรูปแบบและสีสันให้สวยงาม 3) ไฟล์ JavaScript เพิ่มความสามารถในการโต้ตอบ และ 4) ไฟล์รูปภาพหรือสื่ออื่น ๆ จากนั้นในขั้นตอนที่ 5 เบราว์เซอร์ของเราจะนำทั้งหมดนี้มาประกอบร่างและแสดงผลบนหน้าจอให้เราเห็นข้อความ รูปภาพ เมนู และปุ่มต่าง ๆ ครับ",
            extraExamples: "เปรียบเหมือนการสร้างร้านกาแฟ: HTML คือโครงเสาและผนังร้าน, CSS คือการทาสีและตกแต่งไฟให้สวย, JavaScript คือระบบประตูอัตโนมัติและเครื่องชงกาแฟที่กดปุ่มแล้วทำงานได้",
            guidingQuestion: "ถ้าเซิร์ฟเวอร์ส่งเฉพาะไฟล์ HTML กลับมาอย่างเดียวโดยไม่มีไฟล์ CSS หน้าเว็บที่ปรากฏบนเบราว์เซอร์จะเป็นอย่างไรครับ?",
            expectedAnswer: "มีเฉพาะโครงสร้างและข้อความเรียงลงมาธรรมดา ไม่มีสีสันหรือการจัดรูปแบบที่สวยงาม",
            interactiveGuide: "ครูสามารถคลิกปุ่มสลับดูบทบาทของ HTML, CSS, JavaScript และรูปภาพในการประกอบกันเป็นหน้าเว็บในขั้นตอนที่ 5",
            transitionNote: "เมื่อเข้าใจครบ 5 ขั้นตอนแล้ว เราไปสรุปความหมายและข้อสังเกตสำคัญของคำว่า Request และ Response ในสไลด์ที่ 8 กันครับ"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><span style="font-weight:800; font-family:var(--font-en);">4</span></div>
                            <div>
                                <h3 class="card-title">เซิร์ฟเวอร์ส่งข้อมูลกลับ (<span class="glossary-term" data-glossary="Response">Response</span>)</h3>
                                <p class="caption-text">องค์ประกอบสำคัญ 4 ส่วนที่ส่งกลับมาให้เบราว์เซอร์</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            ข้อมูลที่เซิร์ฟเวอร์ส่งกลับมาประกอบด้วยไฟล์แต่ละชนิดที่ทำหน้าที่ร่วมกัน ดังนี้:
                        </p>
                    </div>

                    <div class="grid-2" style="gap:12px; flex:0 0 auto;">
                        <div style="background:#EFF6FF; border:2px solid #93C5FD; border-radius:14px; padding:12px 16px;">
                            <div style="font-size:25px; font-weight:800; color:#1D4ED8;"><i class="fa-brands fa-html5"></i> 1. ไฟล์ HTML</div>
                            <p class="caption-text" style="color:#18243D;">กำหนด<strong>โครงสร้างหน้าเว็บ</strong> หัวข้อ เนื้อหา และตำแหน่งส่วนต่าง ๆ</p>
                        </div>
                        <div style="background:#F5F3FF; border:2px solid #C4B5FD; border-radius:14px; padding:12px 16px;">
                            <div style="font-size:25px; font-weight:800; color:#6D28D9;"><i class="fa-brands fa-css3-alt"></i> 2. ไฟล์ CSS</div>
                            <p class="caption-text" style="color:#18243D;">กำหนด<strong>รูปแบบ สีสัน ขนาดตัวอักษร</strong> และการจัดวางให้สวยงาม</p>
                        </div>
                        <div style="background:#FEF3C7; border:2px solid #FCD34D; border-radius:14px; padding:12px 16px;">
                            <div style="font-size:25px; font-weight:800; color:#B45309;"><i class="fa-brands fa-js"></i> 3. ไฟล์ JavaScript</div>
                            <p class="caption-text" style="color:#18243D;">เพิ่ม<strong>ความสามารถในการโต้ตอบ</strong> เช่น การคลิกปุ่มหรือเปิดเมนู</p>
                        </div>
                        <div style="background:#ECFDF5; border:2px solid #6EE7B7; border-radius:14px; padding:12px 16px;">
                            <div style="font-size:25px; font-weight:800; color:#047857;"><i class="fa-regular fa-images"></i> 4. รูปภาพและสื่ออื่น ๆ</div>
                            <p class="caption-text" style="color:#18243D;">ไฟล์รูปภาพสินค้า โลโก้ร้าน แบนเนอร์ หรือวิดีโอประกอบ</p>
                        </div>
                    </div>
                </div>

                <div class="card mint" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box mint"><span style="font-weight:800; font-family:var(--font-en);">5</span></div>
                            <div>
                                <h3 class="card-title">เบราว์เซอร์ประมวลผลและแสดงหน้าเว็บ</h3>
                                <p class="caption-text">ประกอบร่างข้อมูลทั้งหมดขึ้นบนหน้าจอผู้ใช้งาน</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            เบราว์เซอร์นำข้อมูลที่ได้รับมาประมวลผลและแสดงบนหน้าจอ ทำให้ผู้ใช้งานมองเห็น<strong>ข้อความ รูปภาพ เมนู และปุ่มต่าง ๆ</strong> ตามที่เว็บไซต์ออกแบบไว้
                        </p>
                    </div>

                    <div style="background:#FFFFFF; border:2px solid #6EE7B7; border-radius:16px; padding:16px 20px;">
                        <div class="caption-text" style="font-weight:700; color:#065F46; margin-bottom:8px;">
                            <i class="fa-solid fa-wand-magic-sparkles"></i> ทดลองคลิกดูผลลัพธ์การประกอบร่างหน้าเว็บในเบราว์เซอร์:
                        </div>
                        <div style="display:flex; gap:8px; margin-bottom:10px;" id="renderLayerBtns">
                            <button type="button" class="ctrl-btn render-layer-btn" data-layer="html" style="font-size:19px;">เฉพาะ HTML</button>
                            <button type="button" class="ctrl-btn render-layer-btn" data-layer="css" style="font-size:19px;">HTML + CSS</button>
                            <button type="button" class="ctrl-btn primary render-layer-btn" data-layer="full" style="font-size:19px;">ครบทั้ง HTML + CSS + JS + รูปภาพ</button>
                        </div>
                        <div id="renderLayerPreview" style="background:#F8FAFF; border:2px solid #93C5FD; border-radius:12px; padding:14px 16px;">
                            <div style="display:flex; align-items:center; justify-content:space-between;">
                                <div>
                                    <div style="font-size:24px; font-weight:800; color:#1E40AF;">☕ บ้านกาแฟแพร่ — อเมริกาโน่น้ำผึ้ง 50 บาท</div>
                                    <div class="caption-text" style="color:#047857;">✓ มีโครงสร้าง (HTML) + สีสันสวยงาม (CSS) + รูปภาพ + ปุ่มกดโต้ตอบได้จริง (JS)</div>
                                </div>
                                <span style="background:#4778F5; color:#FFF; padding:6px 14px; border-radius:8px; font-size:20px; font-weight:700;">สั่งซื้อเลย</span>
                            </div>
                        </div>
                    </div>

                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-check-double"></i> ผลลัพธ์ขั้นที่ 5</span>
                        <span class="easy-explain-text">ผู้ใช้งานมองเห็นหน้าเว็บที่สมบูรณ์และคลิกโต้ตอบกับเมนูหรือปุ่มต่าง ๆ ได้ทันที</span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 8: 3.3 ความหมายของ Request และ Response & ข้อสังเกตสำคัญ
    // =========================================================================
    {
        slideId: "u1w2-s08",
        slideNumber: 8,
        title: "3.3 ความหมายของ Request และ Response (และข้อสังเกตสำคัญ)",
        section: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        layoutType: "Core Concepts (Interactive Comparison Demo)",
        teachingTime: 6,
        timeGuide: "6 นาที (ชั่วโมงที่ 1: ทดลองเปรียบเทียบการคลิกที่ส่ง Request vs ทำงานใน Browser)",
        kicker: "ส่วนที่ 1 การทำงานของเว็บไซต์ • หัวข้อที่ 3.3",
        badge: "ทดลองคลิกปุ่ม 2 รูปแบบบนสไลด์",
        content: [
            "คำว่า Request หมายถึง คำขอที่ส่งจากผู้ใช้งานหรือเบราว์เซอร์ไปยังเซิร์ฟเวอร์ ส่วน Response หมายถึง ข้อมูลหรือผลการตอบกลับจากเซิร์ฟเวอร์",
            "ตัวอย่างเช่น เมื่อนักเรียนคลิกเมนู “สินค้าทั้งหมด” เบราว์เซอร์อาจส่งคำขอไปยังเซิร์ฟเวอร์เพื่อรับข้อมูลสินค้า แล้วนำข้อมูลมาแสดงบนหน้าเว็บ",
            "อย่างไรก็ตาม ไม่ใช่ทุกครั้งที่คลิกปุ่มแล้วจะต้องส่งคำขอไปยังเซิร์ฟเวอร์ เพราะบางการทำงาน เช่น การเปิดเมนูหรือซ่อนข้อความ สามารถทำงานภายในเบราว์เซอร์ได้โดยตรง"
        ],
        visualAssets: ["assets/diagrams/browser-server-5steps.svg"],
        interactiveType: "Step-by-Step Simulation",
        speakerNotes: {
            objective: "ให้นักเรียนสรุปความหมายของ Request และ Response ได้ และเข้าใจว่าบางการทำงานเกิดขึ้นในเบราว์เซอร์ได้โดยตรงโดยไม่ต้องส่ง Request ไปเซิร์ฟเวอร์",
            explanationGuide: "มาสรุปคำสำคัญ 2 คำกันครับ คำว่า Request คือคำขอที่ส่งจากผู้ใช้งานหรือเบราว์เซอร์ไปยังเซิร์ฟเวอร์ ส่วน Response คือข้อมูลหรือผลการตอบกลับจากเซิร์ฟเวอร์ เช่นพอนักเรียนคลิกเมนู 'สินค้าทั้งหมด' เบราว์เซอร์จะส่ง Request ไปขอข้อมูลสินค้าจากเซิร์ฟเวอร์มาแสดง แต่มีข้อสังเกตสำคัญมากข้อหนึ่งครับ! ไม่ใช่ทุกครั้งที่เราคลิกปุ่มแล้วจะต้องส่ง Request ไปเซิร์ฟเวอร์เสมอไป เพราะบางอย่าง เช่น การคลิกเปิดเมนูย่อย หรือการกดซ่อน/แสดงข้อความที่มีอยู่แล้วในหน้าเว็บ เบราว์เซอร์สามารถทำเองได้โดยตรงด้วย JavaScript และ CSS ครับ",
            extraExamples: "เหมือนเราอ่านแผ่นพับเมนูที่วางอยู่บนโต๊ะเราแล้ว การเปิดพลิกหน้าแผ่นพับดูรายละเอียดเพิ่ม เราทำที่โต๊ะได้เลย (ใน Browser) ไม่ต้องเดินไปขอพนักงานใหม่ แต่ถ้าจะสั่งเมนูพิเศษที่ไม่มีในแผ่นพับ ต้องเรียกพนักงาน (ส่ง Request ไป Server)",
            guidingQuestion: "ระหว่าง 'การกดปุ่มซ่อน/แสดงคำอธิบายสินค้าที่โหลดมาแล้ว' กับ 'การกดปุ่มค้นหาสินค้าใหม่ในร้าน' อันไหนต้องส่ง Request ไปยังเซิร์ฟเวอร์ครับ?",
            expectedAnswer: "การกดปุ่มค้นหาสินค้าใหม่ต้องส่ง Request ไปยังเซิร์ฟเวอร์เพื่อดึงข้อมูลสินค้า ส่วนการซ่อน/แสดงข้อความทำงานในเบราว์เซอร์ได้โดยตรง",
            interactiveGuide: "คลิกปุ่มทดลองทั้ง 2 ปุ่มด้านล่างของการ์ดแต่ละฝั่ง เพื่อดูความต่างระหว่างการทำงานที่ส่ง Request ไปเซิร์ฟเวอร์ กับการทำงานในเบราว์เซอร์ทันที",
            transitionNote: "ต่อไปในหัวข้อที่ 4 เราจะนำความรู้สัปดาห์ที่ 1 เรื่อง URL, โดเมน, โฮสติ้ง และ HTTPS มาเชื่อมโยงกันในสไลด์ที่ 9 ครับ"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><i class="fa-solid fa-right-left"></i></div>
                            <div>
                                <h3 class="card-title">กรณีที่ 1: คลิกแล้วส่ง <span class="glossary-term" data-glossary="Request">Request</span> ไปเซิร์ฟเวอร์</h3>
                                <p class="caption-text">เมื่อต้องการข้อมูลหน้าใหม่หรือข้อมูลจากเซิร์ฟเวอร์</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            <strong>Request</strong> หมายถึง คำขอที่ส่งจากเบราว์เซอร์ไปยังเซิร์ฟเวอร์ ส่วน <strong>Response</strong> หมายถึง ข้อมูลผลการตอบกลับจากเซิร์ฟเวอร์
                        </p>
                        <p class="card-text" style="margin-top:8px;">
                            <strong>ตัวอย่าง:</strong> เมื่อคลิกเมนู <strong>“สินค้าทั้งหมด”</strong> เบราว์เซอร์จะส่งคำขอไปยังเซิร์ฟเวอร์เพื่อรับข้อมูลสินค้า แล้วนำมาแสดงบนหน้าเว็บ
                        </p>
                    </div>

                    <div style="background:#EFF6FF; border:2px solid #93C5FD; border-radius:14px; padding:14px 18px;">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
                            <span class="caption-text" style="font-weight:700; color:#1E40AF;">ทดลองคลิกเมนูที่ต้องดึงข้อมูลจากเซิร์ฟเวอร์:</span>
                            <button type="button" class="ctrl-btn primary" id="btnDemoServerReq" style="font-size:21px; padding:7px 16px;">
                                <i class="fa-solid fa-cloud-arrow-down"></i> คลิกเมนู “สินค้าทั้งหมด”
                            </button>
                        </div>
                        <div id="demoServerReqOutput" class="caption-text" style="margin-top:8px; background:#FFFFFF; padding:10px 14px; border-radius:10px; color:#18243D; font-weight:600;">
                            สถานะ: รอผู้ใช้งานคลิกปุ่มเพื่อส่ง Request ไปยัง Web Server...
                        </div>
                    </div>
                </div>

                <div class="card purple" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-window-maximize"></i></div>
                            <div>
                                <h3 class="card-title">กรณีที่ 2: ทำงานภายในเบราว์เซอร์โดยตรง</h3>
                                <p class="caption-text">ไม่ต้องส่งคำขอ (Request) ไปยังเซิร์ฟเวอร์ทุกครั้ง</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            <strong>ข้อสังเกตสำคัญ:</strong> ไม่ใช่ทุกครั้งที่คลิกปุ่มแล้วจะต้องส่งคำขอไปยังเซิร์ฟเวอร์เสมอไป!
                        </p>
                        <p class="card-text" style="margin-top:8px;">
                            <strong>ตัวอย่าง:</strong> การคลิก<strong>เปิดเมนูนำทาง</strong> หรือการกด<strong>ซ่อน/แสดงข้อความ</strong>ที่มีอยู่แล้วในหน้าเว็บ สามารถทำงานภายในเบราว์เซอร์ได้โดยตรงทันที
                        </p>
                    </div>

                    <div style="background:#F5F3FF; border:2px solid #C4B5FD; border-radius:14px; padding:14px 18px;">
                        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
                            <span class="caption-text" style="font-weight:700; color:#5B21B6;">ทดลองคลิกปุ่มที่ทำงานในเบราว์เซอร์ทันที:</span>
                            <button type="button" class="ctrl-btn accent" id="btnDemoLocalToggle" style="font-size:21px; padding:7px 16px;">
                                <i class="fa-solid fa-eye-slash"></i> ซ่อน/แสดงข้อความเมนูย่อย
                            </button>
                        </div>
                        <div id="demoLocalToggleOutput" class="caption-text" style="margin-top:8px; background:#FFFFFF; padding:10px 14px; border-radius:10px; color:#065F46; font-weight:600;">
                            ⚡ แสดงข้อความทันทีในเบราว์เซอร์ (0 ms — ไม่มีการส่ง Request ไปยังเซิร์ฟเวอร์)
                        </div>
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-key"></i> จำง่าย ๆ</span>
                <span class="easy-explain-text">ขอข้อมูลใหม่จากแม่ข่าย = <strong>ส่ง Request ไป Server</strong> | เปิดเมนูหรือซ่อนข้อความในหน้าเดิม = <strong>ทำงานใน Browser ได้เลย</strong></span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 9: 4. ความสัมพันธ์ระหว่าง URL โดเมน โฮสติ้ง และ HTTPS
    // =========================================================================
    {
        slideId: "u1w2-s09",
        slideNumber: 9,
        title: "4. ความสัมพันธ์ระหว่าง URL โดเมน โฮสติ้ง และ HTTPS",
        section: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        layoutType: "Core Concepts & Visual Examples (Interactive Diagram)",
        teachingTime: 7,
        timeGuide: "7 นาที (ชั่วโมงที่ 1: เชื่อมโยงความรู้สัปดาห์ที่ 1 และผ่าโครงสร้าง URL ร้านกาแฟ)",
        kicker: "ส่วนที่ 1 การทำงานของเว็บไซต์ • หัวข้อที่ 4 (Interactive URL Anatomy)",
        badge: "คลิกแต่ละส่วนของ URL เพื่อดูหน้าที่",
        content: [
            "ในสัปดาห์ที่ 1 นักเรียนได้รู้จักคำศัพท์เหล่านี้แล้ว สัปดาห์นี้จะนำความรู้มาเชื่อมโยงเพื่อให้เข้าใจว่าทั้งหมดทำงานร่วมกันอย่างไร",
            "URL: ที่อยู่สำหรับเข้าถึงหน้าเว็บหรือทรัพยากร | Domain: ชื่อที่ช่วยให้จดจำและเข้าถึงเว็บไซต์ | Hosting: บริการพื้นที่และทรัพยากรสำหรับเว็บไซต์ | HTTPS: การเชื่อมต่อที่เข้ารหัสข้อมูล",
            "ตัวอย่าง URL สมมติของร้านกาแฟ: https://www.baancoffee.example/menu โดย https:// แสดงรูปแบบการเชื่อมต่อแบบเข้ารหัส, www.baancoffee.example เป็นชื่อโฮสต์ที่ใช้เข้าถึงเว็บไซต์, /menu เป็นเส้นทางไปยังหน้าเมนูเครื่องดื่ม และโฮสติ้งเป็นบริการที่รองรับการจัดเก็บหรือให้บริการข้อมูลเว็บไซต์"
        ],
        visualAssets: ["assets/diagrams/url-domain-hosting-https.svg"],
        interactiveType: "Interactive Diagram",
        speakerNotes: {
            objective: "อธิบายความสัมพันธ์และการทำงานร่วมกันของ URL, โดเมน, โฮสติ้ง และ HTTPS ผ่านตัวอย่าง URL สมมติของร้านกาแฟ",
            explanationGuide: "สัปดาห์ที่ 1 เรารู้จักคำศัพท์ 4 คำนี้แยกกันไปแล้ว สัปดาห์นี้เรามาดูว่าพอมันมาทำงานร่วมกันในเว็บไซต์ร้านกาแฟจริง ๆ มันเชื่อมกันอย่างไร ดูตัวอย่าง URL สมมตินี้ครับ https://www.baancoffee.example/menu ส่วนแรก https:// คือการเชื่อมต่อแบบเข้ารหัสข้อมูล ส่วนที่สอง www.baancoffee.example คือชื่อโฮสต์และโดเมนที่ใช้เข้าถึงเว็บไซต์ ส่วนที่สาม /menu คือเส้นทางที่พาเดินตรงไปยังหน้าเมนูเครื่องดื่ม ส่วนไฟล์หน้าเว็บและรูปเครื่องดื่มทั้งหมดถูกเก็บไว้บนบริการที่เรียกว่า โฮสติ้ง (Hosting) ครับ",
            extraExamples: "ถ้าเปรียบกับร้านกาแฟจริง: Domain คือป้ายชื่อร้าน 'บ้านกาแฟ', URL (/menu) คือป้ายบอกทางเดินไปที่บอร์ดเมนูเครื่องดื่ม, Hosting คือที่ดินและตัวอาคารร้านกาแฟ และ HTTPS คือระบบรักษาความปลอดภัยระหว่างลูกค้ากับร้าน",
            guidingQuestion: "จาก URL https://www.baancoffee.example/menu ถ้าลูกค้าอยากเปลี่ยนไปดูหน้า 'ติดต่อเรา' ส่วนใดของ URL ที่มักจะเปลี่ยนไปครับ?",
            expectedAnswer: "ส่วนเส้นทางท้าย URL จาก /menu อาจเปลี่ยนเป็น /contact",
            interactiveGuide: "คลิกที่ปุ่มแยกส่วนของ URL (https://, www.baancoffee.example, /menu, และ Hosting) เพื่อแสดงคำอธิบายเน้นแต่ละส่วน",
            transitionNote: "หลายคนสงสัยว่าทำไมเว็บไซต์ธุรกิจถึงต้องใช้ https:// ไม่ใช้ http:// ธรรมดา? ไปหาคำตอบในสไลด์ที่ 10 กันครับ"
        },
        html: `
            <div class="col-split-6-4">
                <div class="card blue" style="padding:16px; justify-content:space-between;">
                    <img src="assets/diagrams/url-domain-hosting-https.svg" alt="ความสัมพันธ์ระหว่าง URL โดเมน โฮสติ้ง และ HTTPS" style="width:100%; height:400px; object-fit:contain; background:#FFFFFF; border-radius:12px;">
                    <div style="display:flex; gap:8px; justify-content:center;" id="urlAnatomyBtns">
                        <button type="button" class="ctrl-btn primary url-part-btn" data-part="https" style="font-size:20px;">1. https://</button>
                        <button type="button" class="ctrl-btn url-part-btn" data-part="host" style="font-size:20px;">2. www.baancoffee.example</button>
                        <button type="button" class="ctrl-btn url-part-btn" data-part="path" style="font-size:20px;">3. /menu</button>
                        <button type="button" class="ctrl-btn url-part-btn" data-part="hosting" style="font-size:20px;">4. บริการ Hosting</button>
                    </div>
                </div>

                <div class="card purple" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-link"></i></div>
                            <div>
                                <h3 class="card-title">เปรียบเทียบกับร้านค้าจริง</h3>
                                <p class="caption-text">การทำงานร่วมกันเมื่อเปิด URL ร้านกาแฟ</p>
                            </div>
                        </div>
                        <div class="step-list" style="margin-top:10px; gap:10px;">
                            <div class="step-item" style="padding:10px 14px;">
                                <div class="step-num">U</div>
                                <div class="step-content">
                                    <h4><span class="glossary-term" data-glossary="URL">URL</span> — ที่อยู่สำหรับเข้าถึงหน้าเว็บ</h4>
                                    <p>ระบุที่อยู่เต็มและเส้นทาง <code>/menu</code> ไปยังหน้าเมนูเครื่องดื่ม</p>
                                </div>
                            </div>
                            <div class="step-item" style="padding:10px 14px;">
                                <div class="step-num">D</div>
                                <div class="step-content">
                                    <h4><span class="glossary-term" data-glossary="Domain">Domain</span> — ชื่อที่ช่วยให้จดจำและเข้าถึง</h4>
                                    <p><code>www.baancoffee.example</code> เป็นชื่อโฮสต์ที่ใช้เข้าถึงเว็บไซต์</p>
                                </div>
                            </div>
                            <div class="step-item" style="padding:10px 14px;">
                                <div class="step-num">H</div>
                                <div class="step-content">
                                    <h4><span class="glossary-term" data-glossary="Hosting">Hosting</span> — บริการพื้นที่และทรัพยากร</h4>
                                    <p>รองรับการจัดเก็บหรือให้บริการข้อมูลและไฟล์ทั้งหมดของเว็บไซต์</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="urlPartExplainBox" style="background:#ECFDF5; border:2px solid #10B981; border-radius:14px; padding:14px 18px;">
                        <div class="caption-text" style="font-weight:700; color:#065F46;"><i class="fa-solid fa-magnifying-glass"></i> คำอธิบายส่วนที่เลือก: <strong>https://</strong></div>
                        <p class="caption-text" style="color:#18243D; margin-top:4px;">
                            แสดงรูปแบบการเชื่อมต่อแบบเข้ารหัสข้อมูล (<span class="glossary-term" data-glossary="HTTPS">HTTPS</span>) ช่วยปกป้องข้อมูลที่รับส่งระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์
                        </p>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 10: 4.1 เหตุใดเว็บไซต์ธุรกิจจึงควรใช้ HTTPS?
    // =========================================================================
    {
        slideId: "u1w2-s10",
        slideNumber: 10,
        title: "4.1 เหตุใดเว็บไซต์ธุรกิจจึงควรใช้ HTTPS? (และข้อควรระวัง)",
        section: "ส่วนที่ 1: การทำงานของเว็บไซต์",
        layoutType: "Detailed Explanations (Before / After Security)",
        teachingTime: 6,
        timeGuide: "6 นาที (ชั่วโมงที่ 1: อธิบายการเข้ารหัส TLS และข้อควรระวังเรื่องความน่าเชื่อถือของผู้ขาย)",
        kicker: "ส่วนที่ 1 การทำงานของเว็บไซต์ • หัวข้อที่ 4.1",
        badge: "ความปลอดภัย & ความน่าเชื่อถือ",
        content: [
            "เว็บไซต์ธุรกิจมักมีการรับส่งข้อมูล เช่น ชื่อผู้ติดต่อ เบอร์โทรศัพท์ ที่อยู่จัดส่ง และรายละเอียดคำสั่งซื้อ หากข้อมูลถูกส่งผ่านเครือข่ายโดยไม่มีการเข้ารหัส อาจมีความเสี่ยงที่บุคคลอื่นจะดักอ่านหรือแก้ไขข้อมูลได้",
            "HTTPS ใช้การเข้ารหัส TLS เพื่อช่วยปกป้องข้อมูลระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์",
            "แต่การใช้ HTTPS ไม่ได้ยืนยันว่าเจ้าของเว็บไซต์เป็นผู้ขายที่สุจริตเสมอไป นักเรียนจึงควรตรวจสอบชื่อโดเมน ข้อมูลร้านค้า และความน่าเชื่อถือของเว็บไซต์ร่วมด้วย"
        ],
        visualAssets: ["assets/diagrams/url-domain-hosting-https.svg"],
        interactiveType: "Before / After Comparison",
        speakerNotes: {
            objective: "อธิบายความสำคัญของ HTTPS/TLS ต่อการปกป้องข้อมูลลูกค้า และปลูกฝังความเข้าใจที่ถูกต้องว่ามี HTTPS แล้วก็ยังต้องตรวจสอบความสุจริตของร้านค้าร่วมด้วย",
            explanationGuide: "ทำไมเว็บไซต์ธุรกิจถึงต้องใช้ HTTPS ครับ? เพราะเว็บธุรกิจต้องรับส่งข้อมูลสำคัญของลูกค้า เช่น ชื่อผู้ติดต่อ เบอร์โทรศัพท์ ที่อยู่จัดส่ง และรายละเอียดคำสั่งซื้อ ถ้าส่งไปแบบไม่เข้ารหัส อาจมีคนดักอ่านหรือแอบแก้ไขข้อมูลกลางทางได้ HTTPS จึงใช้การเข้ารหัสที่เรียกว่า TLS เพื่อล็อกข้อมูลระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์ แต่มีเรื่องสำคัญมากที่ครูต้องย้ำครับ! การที่เว็บมีรูปแม่กุญแจหรือใช้ HTTPS แปลว่า 'ข้อมูลระหว่างส่งถูกเข้ารหัส' เท่านั้น ไม่ได้แปลว่าเจ้าของเว็บเป็นคนดีหรือผู้ขายที่สุจริตเสมอไป! มิจฉาชีพก็ทำเว็บ HTTPS ได้ ดังนั้นต้องตรวจชื่อโดเมน ข้อมูลร้านค้า และความน่าเชื่อถือร่วมด้วยเสมอครับ",
            extraExamples: "เปรียบเหมือนการส่งจดหมายในซองปิดผนึกอย่างดี (HTTPS) ไม่มีใครแอบเปิดอ่านระหว่างทางได้ แต่ถ้าคนรับปลายทางเป็นร้านค้าปลอม เราก็ยังโดนหลอกได้อยู่ดี จึงต้องเช็กตัวตนร้านค้าด้วย",
            guidingQuestion: "ถ้าเราเจอเว็บไซต์ขายรองเท้าราคาถูกผิดปกติ แต่หน้าเว็บมีสัญลักษณ์แม่กุญแจ HTTPS เราควรโอนเงินซื้อทันทีไหมครับ? ต้องตรวจอะไรเพิ่ม?",
            expectedAnswer: "ไม่ควรโอนทันที เพราะ HTTPS ไม่ได้ยืนยันว่าผู้ขายสุจริต ต้องตรวจสอบชื่อโดเมน ข้อมูลร้านค้า ช่องทางติดต่อ และความน่าเชื่อถือของเว็บไซต์ร่วมด้วย",
            interactiveGuide: "ชี้เปรียบเทียบการ์ดด้านซ้าย (ประโยชน์ของ HTTPS และ TLS) กับการ์ดด้านขวา (ข้อควรระวังสำคัญสำหรับผู้บริโภคและนักวิเคราะห์เว็บ)",
            transitionNote: "จบส่วนที่ 1 เรื่องการทำงานของเว็บไซต์แล้ว ต่อไปเข้าสู่ส่วนที่ 2 ประเภทและความสามารถของเว็บไซต์ในสไลด์ที่ 11 ครับ"
        },
        html: `
            <div class="grid-2">
                <div class="card mint" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box mint"><i class="fa-solid fa-shield-halved"></i></div>
                            <div>
                                <h3 class="card-title">ทำไมเว็บไซต์ธุรกิจต้องใช้ <span class="glossary-term" data-glossary="HTTPS">HTTPS</span>?</h3>
                                <p class="caption-text">ปกป้องข้อมูลสำคัญของลูกค้าระหว่างการรับส่ง</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:12px;">
                            เว็บไซต์ธุรกิจมักมีการรับส่งข้อมูลสำคัญของลูกค้า ได้แก่:
                        </p>
                        <div class="grid-2" style="gap:10px; margin-top:10px; flex:0 0 auto;">
                            <div style="background:#FFFFFF; border:1.5px solid #6EE7B7; border-radius:10px; padding:10px 14px; font-size:23px; font-weight:700; color:#065F46;">
                                <i class="fa-solid fa-user"></i> 1. ชื่อผู้ติดต่อ
                            </div>
                            <div style="background:#FFFFFF; border:1.5px solid #6EE7B7; border-radius:10px; padding:10px 14px; font-size:23px; font-weight:700; color:#065F46;">
                                <i class="fa-solid fa-phone"></i> 2. เบอร์โทรศัพท์
                            </div>
                            <div style="background:#FFFFFF; border:1.5px solid #6EE7B7; border-radius:10px; padding:10px 14px; font-size:23px; font-weight:700; color:#065F46;">
                                <i class="fa-solid fa-location-dot"></i> 3. ที่อยู่จัดส่ง
                            </div>
                            <div style="background:#FFFFFF; border:1.5px solid #6EE7B7; border-radius:10px; padding:10px 14px; font-size:23px; font-weight:700; color:#065F46;">
                                <i class="fa-solid fa-receipt"></i> 4. รายละเอียดคำสั่งซื้อ
                            </div>
                        </div>
                    </div>

                    <div style="background:#ECFDF5; border:2px solid #10B981; border-radius:14px; padding:14px 18px;">
                        <div style="font-size:25px; font-weight:800; color:#065F46;"><i class="fa-solid fa-lock"></i> การเข้ารหัสด้วยมาตรฐาน TLS</div>
                        <p class="caption-text" style="color:#18243D; margin-top:4px;">
                            หากส่งข้อมูลโดยไม่มีการเข้ารหัส อาจมีความเสี่ยงที่บุคคลอื่นจะ<strong>ดักอ่านหรือแก้ไขข้อมูล</strong>ได้ <strong>HTTPS</strong> จึงใช้การเข้ารหัส <strong>TLS</strong> เพื่อปกป้องข้อมูลระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์
                        </p>
                    </div>
                </div>

                <div class="card amber" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box amber"><i class="fa-solid fa-triangle-exclamation"></i></div>
                            <div>
                                <h3 class="card-title" style="color:#B45309;">ข้อควรระวังสำคัญที่ต้องรู้!</h3>
                                <p class="caption-text">มี HTTPS ≠ ผู้ขายสุจริตเสมอไป</p>
                            </div>
                        </div>
                        <div style="background:#FFFBEB; border:2px solid #F59E0B; border-radius:16px; padding:16px 20px; margin-top:12px;">
                            <p class="body-text" style="color:#78350F; font-weight:700;">
                                “การใช้ HTTPS ไม่ได้ยืนยันว่าเจ้าของเว็บไซต์เป็นผู้ขายที่สุจริตเสมอไป”
                            </p>
                            <p class="caption-text" style="color:#92400E; margin-top:6px;">
                                เพราะ HTTPS ยืนยันเพียงว่าข้อมูลระหว่างรับส่งถูกเข้ารหัส แต่เว็บไซต์หลอกลวงก็สามารถติดตั้ง HTTPS ได้เช่นกัน
                            </p>
                        </div>
                    </div>

                    <div>
                        <div class="caption-text" style="font-weight:700; color:#18243D; margin-bottom:8px;">
                            <i class="fa-solid fa-magnifying-glass-check" style="color:#4778F5;"></i> สิ่งที่นักเรียนควรตรวจสอบร่วมด้วยเสมอ:
                        </div>
                        <div class="step-list" style="gap:8px;">
                            <div class="step-item" style="padding:8px 14px;">
                                <div class="step-num">1</div>
                                <div class="step-content"><p style="font-size:23px; color:#18243D;">ตรวจสอบ<strong>ชื่อโดเมน</strong>ว่าสะกดถูกต้อง ไม่เลียนแบบแบรนด์อื่น</p></div>
                            </div>
                            <div class="step-item" style="padding:8px 14px;">
                                <div class="step-num">2</div>
                                <div class="step-content"><p style="font-size:23px; color:#18243D;">ตรวจสอบ<strong>ข้อมูลร้านค้า ที่ตั้ง และช่องทางติดต่อ</strong>ว่ามีอยู่จริง</p></div>
                            </div>
                            <div class="step-item" style="padding:8px 14px;">
                                <div class="step-num">3</div>
                                <div class="step-content"><p style="font-size:23px; color:#18243D;">พิจารณา<strong>ความน่าเชื่อถือของเว็บไซต์</strong>และรีวิวจากผู้ใช้งานจริง</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 11: ส่วนที่ 2 ประเภทและความสามารถของเว็บไซต์ — 5.1 เว็บไซต์แบบข้อมูล
    // =========================================================================
    {
        slideId: "u1w2-s11",
        slideNumber: 11,
        title: "5.1 เว็บไซต์แบบข้อมูล (Informational Website)",
        section: "ส่วนที่ 2: ประเภทและความสามารถของเว็บไซต์",
        layoutType: "Core Concepts & Visual Examples",
        teachingTime: 6,
        timeGuide: "6 นาที (ชั่วโมงที่ 1: รู้จักเว็บไซต์แบบข้อมูลและตัวอย่างร้านกาแฟในจังหวัดแพร่)",
        kicker: "ส่วนที่ 2 ประเภทและความสามารถของเว็บไซต์ • หัวข้อที่ 5 และ 5.1",
        badge: "Informational Website",
        content: [
            "เว็บไซต์ที่เราใช้งานในชีวิตประจำวันไม่ได้มีความสามารถเหมือนกันทั้งหมด การเข้าใจความแตกต่างช่วยให้เลือกแนวทางสร้างเว็บไซต์ให้เหมาะกับธุรกิจได้",
            "5.1 เว็บไซต์แบบข้อมูล (Informational Website): มุ่งนำเสนอเนื้อหาให้ผู้เข้าชมอ่านหรือศึกษา เช่น ประวัติร้านค้า รายละเอียดสินค้า เวลาเปิด–ปิด และช่องทางติดต่อ",
            "ตัวอย่างเช่น ร้านกาแฟในจังหวัดแพร่ต้องการให้ลูกค้าทราบว่าร้านตั้งอยู่ที่ไหน เปิดบริการเวลาใด และมีเมนูเครื่องดื่มอะไรบ้าง เจ้าของร้านสามารถสร้างเว็บไซต์ที่ประกอบด้วยหน้าแรก หน้าเมนู หน้าเกี่ยวกับร้าน และหน้าติดต่อเรา โดยไม่จำเป็นต้องมีระบบสั่งซื้อออนไลน์",
            "ลักษณะสำคัญ: เน้นการนำเสนอข้อมูลให้ชัดเจน ใช้งานง่าย และไม่จำเป็นต้องมีระบบประมวลผลข้อมูลผู้ใช้งานที่ซับซ้อน"
        ],
        visualAssets: ["assets/images/ref-informational-site.png", "assets/diagrams/informational-vs-webapp.svg"],
        interactiveType: "Glossary Quick Triggers",
        speakerNotes: {
            objective: "อธิบายความหมาย ลักษณะสำคัญ และตัวอย่างการใช้งานจริงของเว็บไซต์แบบข้อมูล (Informational Website)",
            explanationGuide: "เข้าสู่ส่วนที่ 2 ครับ เว็บไซต์ในชีวิตประจำวันไม่ได้มีความสามารถเหมือนกันหมด เราแบ่งออกเป็น 2 กลุ่มใหญ่ ๆ เพื่อให้ง่ายต่อการเลือกสร้างให้เหมาะกับธุรกิจ กลุ่มแรกคือ 5.1 เว็บไซต์แบบข้อมูล (Informational Website) เว็บประเภทนี้เน้นนำเสนอเนื้อหาให้ลูกค้าเข้ามาอ่านหรือศึกษา เช่น ประวัติร้าน รายละเอียดสินค้า เวลาเปิด–ปิด และช่องทางติดต่อ ดูตัวอย่างร้านกาแฟในจังหวัดแพร่ครับ เจ้าของร้านอยากให้คนรู้ว่าร้านอยู่ที่ไหน เปิดกี่โมง มีเมนูอะไรบ้าง ก็สร้างเว็บที่มี 4 หน้าคือ หน้าแรก หน้าเมนู หน้าเกี่ยวกับร้าน และหน้าติดต่อเรา โดยไม่ต้องมีระบบตะกร้าสั่งซื้อออนไลน์ที่ซับซ้อนเลยครับ",
            extraExamples: "นอกจากร้านกาแฟแล้ว เว็บไซต์แนะนำโรงแรมขนาดเล็ก เว็บไซต์คลินิกทำฟันที่บอกเวลาทำการ หรือเว็บไซต์แนะนำแหล่งท่องเที่ยวในชุมชน ก็มักเริ่มจากเว็บไซต์แบบข้อมูล",
            guidingQuestion: "ทำไมร้านกาแฟในจังหวัดแพร่ที่เน้นให้ลูกค้ามานั่งดื่มที่ร้าน ถึงเหมาะกับเว็บไซต์แบบข้อมูลมากกว่าการลงทุนทำระบบตะกร้าสั่งซื้อขนาดใหญ่ครับ?",
            expectedAnswer: "เพราะเป้าหมายหลักคือให้ลูกค้ารู้พิกัดร้าน เวลาเปิด-ปิด และเมนูเครื่องดื่มเพื่อเดินทางมาที่ร้านหรือโทรสอบถาม จึงสร้างได้ง่าย รวดเร็ว และประหยัดค่าใช้จ่าย",
            interactiveGuide: "ชี้ให้เห็นโครงสร้าง 4 หน้าหลักของเว็บไซต์ร้านกาแฟจังหวัดแพร่ในการ์ดด้านซ้าย และภาพตัวอย่างหน้าเว็บแบบข้อมูลด้านขวา",
            transitionNote: "แล้วถ้าร้านกาแฟอยากให้ลูกค้ากดสั่งกาแฟ เลือกความหวาน แล้วจ่ายเงินผ่านหน้าเว็บได้เลยล่ะ? ต้องใช้เว็บประเภทไหน ไปดูในสไลด์ที่ 12 ครับ"
        },
        html: `
            <div class="col-split-6-4">
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><i class="fa-solid fa-circle-info"></i></div>
                            <div>
                                <h3 class="card-title"><span class="glossary-term" data-glossary="Informational Website">เว็บไซต์แบบข้อมูล (Informational Website)</span></h3>
                                <p class="caption-text">มุ่งนำเสนอเนื้อหาให้ผู้เข้าชมอ่านหรือศึกษาอย่างชัดเจน</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            เป็นเว็บไซต์ที่นำเสนอข้อมูลสำคัญของธุรกิจ เช่น <strong>ประวัติร้านค้า รายละเอียดสินค้า เวลาเปิด–ปิด และช่องทางติดต่อ</strong>
                        </p>
                    </div>

                    <div style="background:#EFF6FF; border:2px solid #93C5FD; border-radius:16px; padding:16px 20px;">
                        <h4 style="font-size:26px; font-weight:800; color:#1E40AF; margin-bottom:8px;">
                            <i class="fa-solid fa-store"></i> ตัวอย่างจริง: ร้านกาแฟในจังหวัดแพร่
                        </h4>
                        <p class="card-text">
                            ต้องการให้ลูกค้าทราบว่า<strong>ร้านตั้งอยู่ที่ไหน เปิดบริการเวลาใด และมีเมนูเครื่องดื่มอะไรบ้าง</strong> โดยประกอบด้วย 4 หน้าหลัก (ไม่ต้องมีระบบสั่งซื้อออนไลน์):
                        </p>
                        <div class="grid-4" style="gap:10px; margin-top:10px; flex:0 0 auto;">
                            <div style="background:#FFFFFF; border:1.5px solid #93C5FD; border-radius:10px; padding:8px; text-align:center; font-size:22px; font-weight:700; color:#1D4ED8;">1. หน้าแรก</div>
                            <div style="background:#FFFFFF; border:1.5px solid #93C5FD; border-radius:10px; padding:8px; text-align:center; font-size:22px; font-weight:700; color:#1D4ED8;">2. หน้าเมนู</div>
                            <div style="background:#FFFFFF; border:1.5px solid #93C5FD; border-radius:10px; padding:8px; text-align:center; font-size:22px; font-weight:700; color:#1D4ED8;">3. เกี่ยวกับร้าน</div>
                            <div style="background:#FFFFFF; border:1.5px solid #93C5FD; border-radius:10px; padding:8px; text-align:center; font-size:22px; font-weight:700; color:#1D4ED8;">4. ติดต่อเรา</div>
                        </div>
                    </div>

                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-star"></i> ลักษณะสำคัญ</span>
                        <span class="easy-explain-text">เน้นการนำเสนอข้อมูลให้ชัดเจน ใช้งานง่าย และไม่จำเป็นต้องมีระบบประมวลผลข้อมูลผู้ใช้งานที่ซับซ้อน</span>
                    </div>
                </div>

                <div class="card purple" style="justify-content:space-between; padding:18px;">
                    <img src="assets/images/ref-informational-site.png" alt="ตัวอย่างหน้าเว็บไซต์แบบข้อมูลที่มุ่งนำเสนอเนื้อหาและบริการของธุรกิจ" style="width:100%; height:360px; object-fit:cover; border-radius:14px; border:2px solid #DBEAFE;">
                    <div style="background:#F5F3FF; border:1.5px solid #C4B5FD; border-radius:12px; padding:12px 16px;">
                        <div class="caption-text" style="color:#5B21B6; font-weight:700;"><i class="fa-solid fa-eye"></i> จุดสังเกตบนหน้าเว็บแบบข้อมูล:</div>
                        <p class="caption-text" style="color:#18243D; margin-top:4px;">
                            จัดวางหัวข้อ รูปภาพ และรายละเอียดให้อ่านง่าย ลูกค้าดูข้อมูลจบแล้วสามารถโทรติดต่อหรือเดินทางไปที่ร้านได้ทันที
                        </p>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 12: 5.2 เว็บแอปพลิเคชัน (Web Application — Interactive Coffee Order Mockup)
    // =========================================================================
    {
        slideId: "u1w2-s12",
        slideNumber: 12,
        title: "5.2 เว็บแอปพลิเคชัน (Web Application)",
        section: "ส่วนที่ 2: ประเภทและความสามารถของเว็บไซต์",
        layoutType: "Core Concepts & Interactive Simulation",
        teachingTime: 7,
        timeGuide: "7 นาที (ชั่วโมงที่ 1: รู้จักเว็บแอปพลิเคชันและทดลองสั่งกาแฟออนไลน์จำลอง)",
        kicker: "ส่วนที่ 2 ประเภทและความสามารถของเว็บไซต์ • หัวข้อที่ 5.2 (Interactive Web App Demo)",
        badge: "ทดลองเลือกระดับความหวาน & กดสั่งกาแฟ",
        content: [
            "เว็บแอปพลิเคชัน (Web Application) คือ ระบบซอฟต์แวร์ที่ผู้ใช้งานเข้าถึงผ่านเว็บเบราว์เซอร์ และสามารถทำกิจกรรมต่าง ๆ ผ่านหน้าเว็บได้ เช่น เข้าสู่ระบบ บันทึกข้อมูล ค้นหาสินค้า สั่งซื้อสินค้า หรือจัดการข้อมูลส่วนตัว",
            "ตัวอย่างเช่น ร้านกาแฟต้องการให้ลูกค้าสามารถเลือกเครื่องดื่ม กำหนดระดับความหวาน เพิ่มสินค้าลงในตะกร้า และส่งคำสั่งซื้อไปยังร้านได้ ระบบลักษณะนี้ต้องรองรับการโต้ตอบและการจัดการข้อมูลมากกว่าเว็บไซต์ที่แสดงเมนูเพียงอย่างเดียว",
            "ลักษณะสำคัญ คือ มีฟังก์ชันการทำงานตามความต้องการของผู้ใช้งาน และอาจมีการเชื่อมต่อฐานข้อมูล ระบบสมาชิก หรือบริการอื่น ๆ"
        ],
        visualAssets: ["assets/images/ref-web-application.png"],
        interactiveType: "Step-by-Step Simulation",
        speakerNotes: {
            objective: "อธิบายความหมาย ลักษณะสำคัญ และการทำงานของเว็บแอปพลิเคชัน พร้อมให้นักเรียนทดลองใช้งานระบบสั่งกาแฟจำลองบนสไลด์",
            explanationGuide: "มาดูกลุ่มที่สองคือ 5.2 เว็บแอปพลิเคชัน (Web Application) ครับ มันคือระบบซอฟต์แวร์ที่เราเปิดผ่านเว็บเบราว์เซอร์ แต่ผู้ใช้งานสามารถทำกิจกรรมต่าง ๆ ผ่านหน้าเว็บได้จริง เช่น เข้าสู่ระบบ บันทึกข้อมูล ค้นหาสินค้า สั่งซื้อสินค้า หรือจัดการข้อมูลส่วนตัว ดูตัวอย่างร้านกาแฟเดิมครับ ถ้าเจ้าของร้านอยากให้ลูกค้าเลือกเครื่องดื่ม กำหนดระดับความหวาน กดเพิ่มลงในตะกร้า แล้วส่งคำสั่งซื้อเข้ามาที่ร้านได้เลย แบบนี้ไม่ใช่แค่เว็บแสดงข้อมูลแล้ว แต่เป็น 'เว็บแอปพลิเคชัน' ที่ต้องมีการประมวลผลและเชื่อมต่อฐานข้อมูลครับ",
            extraExamples: "เว็บไซต์อย่าง Shopee, Lazada, Canva, Google Docs หรือระบบจองตั๋วหนังออนไลน์ ล้วนเป็นเว็บแอปพลิเคชันทั้งหมด",
            guidingQuestion: "เมื่อลูกค้าเลือกระดับความหวาน 50% แล้วกดปุ่ม 'เพิ่มลงตะกร้าและส่งคำสั่งซื้อ' ข้อมูลคำสั่งซื้อนี้จะถูกส่งไปเก็บไว้ที่ไหนครับ?",
            expectedAnswer: "ส่งผ่าน Request ไปประมวลผลที่เว็บเซิร์ฟเวอร์และบันทึกไว้ในฐานข้อมูล (Database) ของร้านกาแฟ",
            interactiveGuide: "ให้นักเรียนลองคลิกเลือกเมนูเครื่องดื่ม เลือกระดับความหวาน และกดปุ่ม 'เพิ่มลงตะกร้า' ในกล่องจำลองด้านขวา เพื่อสัมผัสความต่างของ Web Application",
            transitionNote: "ทีนี้เรานำทั้งสองแบบมาวางเทียบกันแบบหมัดต่อหมัดในตารางเปรียบเทียบสไลด์ที่ 13 กันครับ"
        },
        html: `
            <div class="col-split-6-4">
                <div class="card purple" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-laptop-code"></i></div>
                            <div>
                                <h3 class="card-title"><span class="glossary-term" data-glossary="Web Application">เว็บแอปพลิเคชัน (Web Application)</span></h3>
                                <p class="caption-text">ระบบซอฟต์แวร์ที่เข้าถึงผ่านเบราว์เซอร์และทำกิจกรรมโต้ตอบได้จริง</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            ผู้ใช้งานสามารถทำกิจกรรมต่าง ๆ ผ่านหน้าเว็บได้ เช่น <strong>เข้าสู่ระบบ บันทึกข้อมูล ค้นหาสินค้า สั่งซื้อสินค้า หรือจัดการข้อมูลส่วนตัว</strong>
                        </p>
                    </div>

                    <div style="background:#F5F3FF; border:2px solid #C4B5FD; border-radius:16px; padding:14px 18px;">
                        <h4 style="font-size:25px; font-weight:800; color:#5B21B6; margin-bottom:6px;">
                            <i class="fa-solid fa-mug-saucer"></i> ตัวอย่าง: ระบบสั่งกาแฟออนไลน์
                        </h4>
                        <p class="card-text">
                            ลูกค้าสามารถ<strong>เลือกเครื่องดื่ม กำหนดระดับความหวาน เพิ่มสินค้าลงในตะกร้า และส่งคำสั่งซื้อไปยังร้านได้</strong> โดยต้องรองรับการโต้ตอบและการจัดการข้อมูลมากกว่าเว็บแสดงเมนูทั่วไป
                        </p>
                    </div>

                    <div style="display:flex; align-items:center; gap:14px; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:14px; padding:10px 14px;">
                        <img src="assets/images/ref-web-application.png" alt="ตัวอย่างระบบเว็บแอปพลิเคชันอีคอมเมิร์ซ" style="width:110px; height:68px; object-fit:cover; border-radius:8px; flex-shrink:0;">
                        <div class="caption-text" style="color:#18243D;">
                            <strong>ลักษณะสำคัญ:</strong> มีฟังก์ชันการทำงานตามความต้องการของผู้ใช้ และเชื่อมต่อ<strong>ฐานข้อมูล ระบบสมาชิก หรือบริการอื่น ๆ</strong>
                        </div>
                    </div>
                </div>

                <div class="card mint" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box mint"><i class="fa-solid fa-cart-plus"></i></div>
                            <div>
                                <h3 class="card-title">ทดลองใช้งาน Web App สั่งกาแฟ</h3>
                                <p class="caption-text">คลิกเลือกความหวานและกดเพิ่มลงตะกร้า</p>
                            </div>
                        </div>
                    </div>

                    <div style="background:#FFFFFF; border:2px solid #10B981; border-radius:16px; padding:16px 18px; display:flex; flex-direction:column; gap:12px;">
                        <div>
                            <label for="coffeeMenuSelect" class="caption-text" style="font-weight:700; color:#065F46; display:block; margin-bottom:4px;">1. เลือกเครื่องดื่ม:</label>
                            <select id="coffeeMenuSelect" style="width:100%; padding:8px 12px; font-family:var(--font-thai); font-size:23px; font-weight:700; border:2px solid #10B981; border-radius:10px; color:#18243D;">
                                <option value="อเมริกาโน่น้ำผึ้ง|50">☕ อเมริกาโน่น้ำผึ้ง (50 บาท)</option>
                                <option value="ลาเต้เย็นเมล็ดคั่วกลาง|55">🧋 ลาเต้เย็นเมล็ดคั่วกลาง (55 บาท)</option>
                                <option value="มัทฉะลาเต้พรีเมียม|60">🍵 มัทฉะลาเต้พรีเมียม (60 บาท)</option>
                            </select>
                        </div>

                        <div>
                            <span class="caption-text" style="font-weight:700; color:#065F46; display:block; margin-bottom:4px;">2. กำหนดระดับความหวาน:</span>
                            <div style="display:flex; gap:8px;" id="sweetnessBtnGroup">
                                <button type="button" class="ctrl-btn sweet-btn" data-sweet="ไม่หวาน (0%)" style="flex:1; justify-content:center; font-size:20px;">0%</button>
                                <button type="button" class="ctrl-btn primary sweet-btn" data-sweet="หวานน้อย (50%)" style="flex:1; justify-content:center; font-size:20px;">50%</button>
                                <button type="button" class="ctrl-btn sweet-btn" data-sweet="หวานปกติ (100%)" style="flex:1; justify-content:center; font-size:20px;">100%</button>
                            </div>
                        </div>

                        <button type="button" id="btnAddCoffeeCart" class="ctrl-btn primary" style="justify-content:center; padding:10px; font-size:23px; background:#059669; border-color:#059669;">
                            <i class="fa-solid fa-cart-shopping"></i> เพิ่มลงตะกร้า &amp; ส่งคำสั่งซื้อไปที่ร้าน
                        </button>

                        <div id="coffeeCartStatus" style="background:#ECFDF5; border:1.5px solid #6EE7B7; border-radius:10px; padding:10px 12px; font-size:21px; color:#065F46; font-weight:600;">
                            🛒 ตะกร้าปัจจุบัน: อเมริกาโน่น้ำผึ้ง • หวานน้อย (50%) — พร้อมส่งเข้าฐานข้อมูลร้าน!
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 13: 5.3 ตารางเปรียบเทียบ เว็บไซต์แบบข้อมูล vs เว็บแอปพลิเคชัน
    // =========================================================================
    {
        slideId: "u1w2-s13",
        slideNumber: 13,
        title: "5.3 ตารางเปรียบเทียบ: เว็บไซต์แบบข้อมูล vs เว็บแอปพลิเคชัน",
        section: "ส่วนที่ 2: ประเภทและความสามารถของเว็บไซต์",
        layoutType: "Detailed Explanations (Comparison Table)",
        teachingTime: 6,
        timeGuide: "6 นาที (ชั่วโมงที่ 1: สรุปตารางเปรียบเทียบ 5 ประเด็นและแนวคิดเว็บไซต์แบบผสมผสาน)",
        kicker: "ส่วนที่ 2 ประเภทและความสามารถของเว็บไซต์ • หัวข้อที่ 5.3",
        badge: "ตารางเปรียบเทียบ 5 ประเด็นหลัก",
        content: [
            "วัตถุประสงค์หลัก: นำเสนอข้อมูล vs ให้ผู้ใช้ทำงานผ่านระบบ",
            "ตัวอย่าง: เว็บไซต์แนะนำร้านกาแฟ vs ระบบสั่งกาแฟออนไลน์",
            "การโต้ตอบ: มักไม่ซับซ้อน vs มีการโต้ตอบและประมวลผลมากกว่า",
            "การจัดเก็บข้อมูล: อาจไม่จำเป็นต้องมีฐานข้อมูล vs มักมีการจัดการข้อมูล",
            "ความซับซ้อน: โดยทั่วไปน้อยกว่า vs โดยทั่วไปมากกว่า",
            "ข้อสรุปสำคัญ: เว็บไซต์แบบข้อมูลและเว็บแอปพลิเคชันไม่ใช่ประเภทที่แยกจากกันอย่างเด็ดขาด เว็บไซต์หนึ่งแห่งอาจมีทั้งหน้าสำหรับแสดงข้อมูลและระบบที่ให้ผู้ใช้งานทำงานต่าง ๆ ได้"
        ],
        visualAssets: ["assets/diagrams/informational-vs-webapp.svg"],
        interactiveType: "None",
        speakerNotes: {
            objective: "เปรียบเทียบความแตกต่างระหว่างเว็บไซต์แบบข้อมูลและเว็บแอปพลิเคชันใน 5 ประเด็นหลัก และอธิบายว่าเว็บไซต์หนึ่งแห่งสามารถมีทั้งสองส่วนร่วมกันได้",
            explanationGuide: "สไลด์ที่ 13 นี้สรุปเปรียบเทียบให้เห็นชัด ๆ 5 ประเด็นครับ 1) วัตถุประสงค์หลัก: เว็บแบบข้อมูลเน้นนำเสนอข้อมูล ส่วนเว็บแอปให้ผู้ใช้ทำงานผ่านระบบ 2) ตัวอย่าง: เว็บแนะนำร้านกาแฟ เทียบกับ ระบบสั่งกาแฟออนไลน์ 3) การโต้ตอบ: ไม่ซับซ้อน เทียบกับ โต้ตอบและประมวลผลมากกว่า 4) การจัดเก็บข้อมูล: อาจไม่ต้องมีฐานข้อมูล เทียบกับ มักมีการจัดการฐานข้อมูล และ 5) ความซับซ้อน: น้อยกว่า เทียบกับ มากกว่า แต่อย่าลืมข้อความด้านล่างสุดนะครับ! ทั้งสองแบบนี้ไม่ได้แยกขาดจากกันอย่างเด็ดขาด เว็บไซต์ร้านกาแฟ 1 แห่ง อาจมีหน้าแรกและหน้าประวัติร้านที่เป็นเว็บแบบข้อมูล และมีหน้าสั่งเครื่องดื่มที่เป็นเว็บแอปพลิเคชันอยู่ในเว็บไซต์เดียวกันได้ครับ",
            extraExamples: "เหมือนเว็บไซต์โรงพยาบาลที่มีหน้าบทความสุขภาพให้อ่านฟรี (เว็บแบบข้อมูล) และมีปุ่ม 'นัดหมายแพทย์ออนไลน์' ที่ผู้ป่วยล็อกอินเข้าไปจองคิวได้ (เว็บแอปพลิเคชัน)",
            guidingQuestion: "ถ้าธุรกิจเพิ่งเริ่มต้นและมีงบประมาณจำกัด เราสามารถเริ่มจากเว็บไซต์แบบข้อมูลก่อน แล้วค่อยต่อยอดเพิ่มระบบเว็บแอปพลิเคชันภายหลังได้ไหมครับ?",
            expectedAnswer: "ทำได้ และเป็นแนวทางที่ธุรกิจจำนวนมากนิยมใช้ คือเริ่มจากหน้าเว็บแนะนำร้านและช่องทางติดต่อก่อน แล้วจึงเพิ่มระบบสั่งซื้อเมื่อมีลูกค้ามากขึ้น",
            interactiveGuide: "ชี้ไล่ทีละแถวของตารางเปรียบเทียบเพื่อให้ผู้เรียนเห็นความแตกต่างชัดเจนบนจอโปรเจกเตอร์",
            transitionNote: "คราวนี้เรามาลองฝึกวิเคราะห์กรณีศึกษาธุรกิจในสไลด์ที่ 14 กันครับว่าแต่ละร้านควรเลือกใช้เว็บแบบไหน"
        },
        html: `
            <div class="table-container">
                <table class="edu-table" aria-label="ตารางเปรียบเทียบเว็บไซต์แบบข้อมูลกับเว็บแอปพลิเคชัน">
                    <thead>
                        <tr>
                            <th style="width:24%;">ประเด็นเปรียบเทียบ</th>
                            <th style="width:38%;"><i class="fa-solid fa-book-open"></i> เว็บไซต์แบบข้อมูล (Informational Website)</th>
                            <th style="width:38%;"><i class="fa-solid fa-gears"></i> เว็บแอปพลิเคชัน (Web Application)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. วัตถุประสงค์หลัก</strong></td>
                            <td>นำเสนอข้อมูลให้ผู้เข้าชมอ่านหรือศึกษา</td>
                            <td>ให้ผู้ใช้งานทำกิจกรรมและทำงานผ่านระบบ</td>
                        </tr>
                        <tr>
                            <td><strong>2. ตัวอย่างการใช้งาน</strong></td>
                            <td>เว็บไซต์แนะนำร้านกาแฟ (ประวัติ เมนู เวลาเปิด–ปิด)</td>
                            <td>ระบบสั่งกาแฟออนไลน์ (เลือกความหวาน ใส่ตะกร้า สั่งซื้อ)</td>
                        </tr>
                        <tr>
                            <td><strong>3. การโต้ตอบ (Interaction)</strong></td>
                            <td>มักไม่ซับซ้อน (เปิดอ่านหน้าเว็บและคลิกลิงก์ทั่วไป)</td>
                            <td>มีการโต้ตอบและประมวลผลตามการกระทำของผู้ใช้มากกว่า</td>
                        </tr>
                        <tr>
                            <td><strong>4. การจัดเก็บข้อมูล</strong></td>
                            <td>อาจไม่จำเป็นต้องมีระบบฐานข้อมูลที่ซับซ้อน</td>
                            <td>มักมีการจัดการข้อมูลและเชื่อมต่อฐานข้อมูล (Database)</td>
                        </tr>
                        <tr>
                            <td><strong>5. ความซับซ้อนในการพัฒนา</strong></td>
                            <td>โดยทั่วไปน้อยกว่า สร้างและดูแลรักษาง่าย</td>
                            <td>โดยทั่วไปมากกว่า ต้องดูแลทั้งระบบหน้าบ้านและหลังบ้าน</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-layer-group"></i> ข้อสังเกตสำคัญ</span>
                <span class="easy-explain-text">เว็บไซต์แบบข้อมูลและเว็บแอปพลิเคชัน<strong>ไม่ใช่ประเภทที่แยกจากกันอย่างเด็ดขาด</strong> เว็บไซต์หนึ่งแห่งอาจมีทั้งหน้าแสดงข้อมูลและระบบให้ผู้ใช้ทำงานร่วมกันได้</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 14: 5.4 ตัวอย่างการเลือกใช้ให้เหมาะกับธุรกิจ (Interactive Scenario-Based Learning)
    // =========================================================================
    {
        slideId: "u1w2-s14",
        slideNumber: 14,
        title: "5.4 ตัวอย่างการเลือกใช้ให้เหมาะกับธุรกิจ (กรณีศึกษา 1–4)",
        section: "ส่วนที่ 2: ประเภทและความสามารถของเว็บไซต์",
        layoutType: "Real-World Applications (Scenario-Based Learning)",
        teachingTime: 7,
        timeGuide: "7 นาที (ชั่วโมงที่ 1: วิเคราะห์สถานการณ์ธุรกิจ 4 กรณีศึกษา)",
        kicker: "ส่วนที่ 2 ประเภทและความสามารถของเว็บไซต์ • หัวข้อที่ 5.4 (Scenario-Based Learning)",
        badge: "คลิกเลือกกรณีศึกษา 1–4 เพื่อวิเคราะห์",
        content: [
            "กรณีศึกษา 1 จาก 4 (จากเอกสารต้นฉบับ): ร้านขายเสื้อผ้าต้องการแสดงรูปสินค้า ราคา และเบอร์ติดต่อ ➔ เว็บไซต์แบบข้อมูล เพราะธุรกิจต้องการประชาสัมพันธ์และให้ลูกค้าติดต่อ โดยยังไม่ต้องมีระบบรับคำสั่งซื้อ",
            "กรณีศึกษา 2 จาก 4: ร้านกาแฟต้องการให้ลูกค้าเลือกเมนู กำหนดความหวาน เพิ่มลงตะกร้า และส่งออเดอร์ ➔ เว็บแอปพลิเคชัน",
            "กรณีศึกษา 3 จาก 4: ร้านกาแฟในจังหวัดแพร่ต้องการแจ้งพิกัดร้าน เวลาเปิด–ปิด และแสดงเมนูเครื่องดื่ม ➔ เว็บไซต์แบบข้อมูล",
            "กรณีศึกษา 4 จาก 4: ร้านค้าที่ต้องการทั้งหน้าแนะนำประวัติร้าน และระบบล็อกอินสมาชิกเพื่อเช็กสถานะคำสั่งซื้อ ➔ ผสมผสานทั้งสองรูปแบบ"
        ],
        visualAssets: ["assets/diagrams/informational-vs-webapp.svg"],
        interactiveType: "Scenario-Based Learning",
        speakerNotes: {
            objective: "ให้นักเรียนฝึกวิเคราะห์สถานการณ์ธุรกิจจริงและเลือกแนวทางการสร้างเว็บไซต์ (เว็บไซต์แบบข้อมูล หรือ เว็บแอปพลิเคชัน) พร้อมอธิบายเหตุผลได้",
            explanationGuide: "มาฝึกวิเคราะห์สถานการณ์ธุรกิจในหัวข้อ 5.4 กันครับ ดูกรณีศึกษาที่ 1 จากบทเรียนก่อนเลย: 'ร้านขายเสื้อผ้าต้องการแสดงรูปสินค้า ราคา และเบอร์ติดต่อ' แบบนี้ควรเลือกสร้างเว็บไซต์แบบไหนครับ? คำตอบคือ 'เว็บไซต์แบบข้อมูล' เพราะธุรกิจต้องการประชาสัมพันธ์และให้ลูกค้าติดต่อสอบถาม โดยยังไม่ต้องมีระบบรับคำสั่งซื้อออนไลน์ ครูมีให้ลองวิเคราะห์ครบทั้ง 4 กรณีศึกษา ลองกดสลับดูทีละเคสแล้วช่วยกันทายคำตอบก่อนกดเฉลยนะครับ",
            extraExamples: "การเลือกประเภทเว็บไซต์ให้ตรงกับความต้องการจริงของร้านค้า ช่วยไม่ให้เจ้าของร้านเสียเงินและเวลาทำระบบใหญ่โตเกินความจำเป็นในระยะเริ่มต้น",
            guidingQuestion: "ในกรณีศึกษาที่ 1 ถ้านานไปร้านขายเสื้อผ้ามีลูกค้าต่างจังหวัดสั่งซื้อวันละ 100 ออเดอร์จนตอบแชตไม่ทัน ร้านควรปรับปรุงเว็บไซต์ไปในทิศทางใดครับ?",
            expectedAnswer: "ควรพัฒนาต่อยอดเป็นเว็บแอปพลิเคชันที่มีระบบตะกร้าสินค้า เลือกไซซ์เสื้อ ชำระเงิน และตรวจสอบสถานะการจัดส่งได้",
            interactiveGuide: "คลิกปุ่ม 'กรณีศึกษา 1' ถึง 'กรณีศึกษา 4' ด้านบน และคลิกปุ่มเลือกคำตอบเพื่อดูเหตุผลประกอบ",
            transitionNote: "เมื่อเลือกประเภทเว็บไซต์เป็นแล้ว ต่อไปในส่วนที่ 3 (สไลด์ที่ 15) เราจะมาดูกันว่าภายในเว็บไซต์ธุรกิจ 1 เว็บ ควรมีองค์ประกอบอะไรบ้าง"
        },
        html: `
            <div class="sim-stepper-bar" id="bizCaseTabs" role="tablist" aria-label="เลือกกรณีศึกษาธุรกิจ 1 ถึง 4">
                <button type="button" class="sim-step-btn active" data-case="1">กรณีศึกษา 1 (ร้านเสื้อผ้า)</button>
                <button type="button" class="sim-step-btn" data-case="2">กรณีศึกษา 2 (สั่งกาแฟออนไลน์)</button>
                <button type="button" class="sim-step-btn" data-case="3">กรณีศึกษา 3 (ร้านกาแฟ จ.แพร่)</button>
                <button type="button" class="sim-step-btn" data-case="4">กรณีศึกษา 4 (เว็บผสมผสาน)</button>
            </div>

            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div style="display:inline-flex; align-items:center; gap:8px; background:var(--accent-blue); color:#1E40AF; padding:5px 14px; border-radius:999px; font-size:21px; font-weight:700;" id="bizCaseBadge">
                            ตัวอย่างสถานการณ์ธุรกิจ • กรณีศึกษา 1 จาก 4
                        </div>
                        <h3 class="card-title" id="bizCaseTitle" style="margin-top:12px;">
                            ร้านขายเสื้อผ้าต้องการแสดงรูปสินค้า ราคา และเบอร์ติดต่อ
                        </h3>
                        <p class="body-text" id="bizCaseGoal" style="margin-top:10px; color:var(--text-secondary);">
                            <strong>ความต้องการของธุรกิจ:</strong> ต้องการประชาสัมพันธ์คอลเลกชันเสื้อผ้าให้ลูกค้าเห็นรูปและราคาชัดเจน พร้อมแสดงเบอร์โทรศัพท์และลิงก์ติดต่อร้าน โดยยังไม่ต้องมีระบบตะกร้ารับคำสั่งซื้อในหน้าเว็บ
                        </p>
                    </div>

                    <div style="background:#EFF6FF; border:2px solid #93C5FD; border-radius:14px; padding:14px 18px;">
                        <div class="caption-text" style="font-weight:700; color:#1E40AF; margin-bottom:8px;">
                            <i class="fa-solid fa-circle-question"></i> นักเรียนคิดว่าสถานการณ์นี้เหมาะกับเว็บไซต์ประเภทใด?
                        </div>
                        <div style="display:flex; gap:10px;">
                            <button type="button" class="ctrl-btn primary biz-ans-btn" data-ans="info" style="flex:1; justify-content:center; font-size:21px; padding:10px;">เว็บไซต์แบบข้อมูล</button>
                            <button type="button" class="ctrl-btn biz-ans-btn" data-ans="app" style="flex:1; justify-content:center; font-size:21px; padding:10px;">เว็บแอปพลิเคชัน</button>
                            <button type="button" class="ctrl-btn biz-ans-btn" data-ans="hybrid" style="flex:1; justify-content:center; font-size:21px; padding:10px;">แบบผสมผสาน</button>
                        </div>
                    </div>
                </div>

                <div class="card mint" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box mint"><i class="fa-solid fa-clipboard-check"></i></div>
                            <div>
                                <h3 class="card-title">ผลการวิเคราะห์และเหตุผลประกอบ</h3>
                                <p class="caption-text">แนวทางการเลือกประเภทเว็บไซต์ให้ตรงเป้าหมายธุรกิจ</p>
                            </div>
                        </div>

                        <div id="bizCaseResultBox" style="background:#ECFDF5; border:2px solid #10B981; border-radius:16px; padding:18px 20px; margin-top:14px;">
                            <div style="font-size:28px; font-weight:800; color:#065F46;" id="bizCaseRecommend">
                                ✅ แนวทางที่เหมาะสม: เว็บไซต์แบบข้อมูล (Informational Website)
                            </div>
                            <p class="body-text" id="bizCaseReason" style="margin-top:8px; color:#18243D;">
                                <strong>เหตุผล:</strong> ธุรกิจต้องการประชาสัมพันธ์และให้ลูกค้าติดต่อ โดยยังไม่ต้องมีระบบรับคำสั่งซื้อหรือระบบประมวลผลฐานข้อมูลที่ซับซ้อน
                            </p>
                        </div>
                    </div>

                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-lightbulb"></i> หลักการคิด</span>
                        <span class="easy-explain-text">เลือกประเภทเว็บไซต์จาก <strong>“กิจกรรมที่ต้องการให้ลูกค้าทำบนหน้าเว็บ”</strong> เป็นหลัก</span>
                    </div>
                </div>
            </div>
        `
    }
];

// =============================================================================
// SLIDES 15 – 28 (ส่วนที่ 3, ส่วนที่ 4, ส่วนที่ 5 กิจกรรมฝึกปฏิบัติ, แบบทดสอบ & สรุป)
// =============================================================================
SLIDES_DATA.push(
    // =========================================================================
    // SLIDE 15: ส่วนที่ 3 การวิเคราะห์องค์ประกอบเว็บไซต์ธุรกิจ — ภาพรวม 7 องค์ประกอบ
    // =========================================================================
    {
        slideId: "u1w2-s15",
        slideNumber: 15,
        title: "6. องค์ประกอบที่ควรตรวจสอบเมื่อสำรวจเว็บไซต์ธุรกิจ (7 ส่วนหลัก)",
        section: "ส่วนที่ 3: การวิเคราะห์องค์ประกอบเว็บไซต์ธุรกิจ",
        layoutType: "Core Concepts & Interactive Diagram",
        teachingTime: 6,
        timeGuide: "6 นาที (ชั่วโมงที่ 2: สำรวจแผนผัง Wireframe ทั้ง 7 องค์ประกอบของหน้าเว็บธุรกิจ)",
        kicker: "ส่วนที่ 3 การวิเคราะห์องค์ประกอบเว็บไซต์ธุรกิจ • หัวข้อที่ 6 (Interactive Wireframe)",
        badge: "คลิกหมายเลข 1–7 เพื่อสำรวจแต่ละส่วน",
        content: [
            "เว็บไซต์ธุรกิจที่ดีไม่จำเป็นต้องมีองค์ประกอบเหมือนกันทุกแห่ง แต่ควรมีส่วนที่ช่วยให้ผู้ใช้งานค้นหาข้อมูลและดำเนินการตามเป้าหมายได้อย่างสะดวก",
            "องค์ประกอบหลัก 7 ส่วน ได้แก่: 6.1 ส่วนหัวเว็บไซต์ (Header), 6.2 เมนูนำทาง (Navigation), 6.3 ส่วนแนะนำหลัก (Hero Section), 6.4 ส่วนสินค้าและบริการ (Product/Service), 6.5 ปุ่มกระตุ้นการดำเนินการ (CTA), 6.6 ช่องทางติดต่อ (Contact), 6.7 ส่วนท้ายเว็บไซต์ (Footer)"
        ],
        visualAssets: ["assets/diagrams/website-7-components-wireframe.svg", "assets/images/ref-wireframe-annotations.png"],
        interactiveType: "Interactive Diagram",
        speakerNotes: {
            objective: "ให้นักเรียนเห็นภาพรวมตำแหน่งและความสัมพันธ์ขององค์ประกอบทั้ง 7 ส่วนบนหน้าเว็บไซต์ธุรกิจผ่านแผนผัง Wireframe",
            explanationGuide: "เข้าสู่ชั่วโมงที่ 2 ในส่วนที่ 3 ครับ เวลาเราได้รับมอบหมายให้ไปสำรวจหรือวิเคราะห์เว็บไซต์ธุรกิจ เราจะต้องดูส่วนไหนบ้าง? เว็บไซต์ธุรกิจที่ดีไม่จำเป็นต้องหน้าตาเหมือนกันเป๊ะทุกเว็บนะครับ แต่ควรมีส่วนสำคัญ 7 ส่วนนี้ที่ช่วยให้ลูกค้าค้นหาข้อมูลและทำตามเป้าหมายได้สะดวก คือ 1) Header ส่วนหัว 2) Navigation เมนูนำทาง 3) Hero Section ส่วนแนะนำหลัก 4) Product/Service สินค้าและบริการ 5) ปุ่ม CTA 6) Contact ช่องทางติดต่อ และ 7) Footer ส่วนท้ายเว็บไซต์ครับ",
            extraExamples: "นักออกแบบเว็บมืออาชีพมักวาดโครงร่างพร้อมคำอธิบายกำกับ (Wireframe Annotations) เพื่อวางตำแหน่งทั้ง 7 ส่วนนี้ก่อนลงมือสร้างเว็บจริง",
            guidingQuestion: "จากแผนผังโครงร่างหน้าเว็บ (Wireframe) ส่วนใดที่อยู่ด้านบนสุดและช่วยให้ลูกค้ารู้ทันทีว่ากำลังเข้ามาที่เว็บไซต์ของร้านอะไรครับ?",
            expectedAnswer: "ส่วนหัวเว็บไซต์ (Header) ที่แสดงชื่อร้านและโลโก้",
            interactiveGuide: "คลิกปุ่มหมายเลข 1 ถึง 7 เพื่อดูคำอธิบายตำแหน่งและหน้าที่ของแต่ละองค์ประกอบบนโครงร่างเว็บไซต์",
            transitionNote: "ไปเจาะลึกรายละเอียดและข้อควรระวังของแต่ละส่วน เริ่มจาก 6.1 Header และ 6.2 Navigation ในสไลด์ที่ 16 ครับ"
        },
        html: `
            <div class="col-split-6-4">
                <div class="card blue" style="padding:14px; justify-content:space-between;">
                    <img src="assets/diagrams/website-7-components-wireframe.svg" alt="โครงร่าง 7 องค์ประกอบสำคัญของเว็บไซต์ธุรกิจ" style="width:100%; height:395px; object-fit:contain; background:#FFFFFF; border-radius:12px;">
                    <div style="display:flex; gap:6px; justify-content:center; flex-wrap:wrap;" id="wireframeHotspotBtns">
                        <button type="button" class="ctrl-btn primary wf-btn" data-part="1" style="font-size:18px; padding:5px 10px;">1. Header</button>
                        <button type="button" class="ctrl-btn wf-btn" data-part="2" style="font-size:18px; padding:5px 10px;">2. Navigation</button>
                        <button type="button" class="ctrl-btn wf-btn" data-part="3" style="font-size:18px; padding:5px 10px;">3. Hero Section</button>
                        <button type="button" class="ctrl-btn wf-btn" data-part="4" style="font-size:18px; padding:5px 10px;">4. Product/Service</button>
                        <button type="button" class="ctrl-btn wf-btn" data-part="5" style="font-size:18px; padding:5px 10px;">5. ปุ่ม CTA</button>
                        <button type="button" class="ctrl-btn wf-btn" data-part="6" style="font-size:18px; padding:5px 10px;">6. Contact</button>
                        <button type="button" class="ctrl-btn wf-btn" data-part="7" style="font-size:18px; padding:5px 10px;">7. Footer</button>
                    </div>
                </div>

                <div class="card purple" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-compass-drafting"></i></div>
                            <div>
                                <h3 class="card-title">สำรวจโครงร่างเว็บไซต์ธุรกิจ</h3>
                                <p class="caption-text">คลิกปุ่ม 1–7 ด้านซ้ายเพื่อดูหน้าที่ของแต่ละส่วน</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            เว็บไซต์ธุรกิจที่ดีไม่จำเป็นต้องมีองค์ประกอบเหมือนกันทุกแห่ง แต่ควรมีส่วนที่ช่วยให้ผู้ใช้งาน<strong>ค้นหาข้อมูลและดำเนินการตามเป้าหมายได้อย่างสะดวก</strong>
                        </p>
                    </div>

                    <div id="wireframePartDetail" style="background:#EFF6FF; border:2px solid #4778F5; border-radius:16px; padding:16px 18px;">
                        <div style="font-size:25px; font-weight:800; color:#1E40AF;" id="wfPartTitle">
                            ① 6.1 ส่วนหัวเว็บไซต์ (Header)
                        </div>
                        <p class="card-text" id="wfPartDesc" style="margin-top:6px; color:#18243D;">
                            อยู่ด้านบนสุดของหน้าเว็บ ทำหน้าที่แสดงตัวตนของธุรกิจ เช่น ชื่อร้านหรือโลโก้ เพื่อให้ผู้ใช้รู้ทันทีว่ากำลังเข้าชมเว็บไซต์ของธุรกิจใด
                        </p>
                    </div>

                    <div style="display:flex; align-items:center; gap:12px; background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:12px; padding:10px 14px;">
                        <img src="assets/images/ref-wireframe-annotations.png" alt="ตัวอย่างการเขียนคำอธิบายกำกับโครงร่างหน้าเว็บ (Wireframe Annotations)" style="width:96px; height:60px; object-fit:cover; border-radius:8px; flex-shrink:0;">
                        <div class="caption-text" style="color:#18243D;">
                            <strong>Wireframe Annotation:</strong> การชี้จุดและอธิบายหน้าที่ขององค์ประกอบแต่ละส่วนบนหน้าเว็บ
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 16: 6.1 ส่วนหัวเว็บไซต์ (Header) และ 6.2 เมนูนำทาง (Navigation)
    // =========================================================================
    {
        slideId: "u1w2-s16",
        slideNumber: 16,
        title: "6.1 ส่วนหัวเว็บไซต์ (Header) & 6.2 เมนูนำทาง (Navigation)",
        section: "ส่วนที่ 3: การวิเคราะห์องค์ประกอบเว็บไซต์ธุรกิจ",
        layoutType: "Detailed Explanations & Visual Examples",
        teachingTime: 6,
        timeGuide: "6 นาที (ชั่วโมงที่ 2: วิเคราะห์ส่วนหัวเว็บไซต์และปัญหาที่พบบ่อยในเมนูนำทาง)",
        kicker: "ส่วนที่ 3 การวิเคราะห์องค์ประกอบเว็บไซต์ธุรกิจ • หัวข้อที่ 6.1 และ 6.2",
        badge: "การแสดงตัวตน & การนำทาง",
        content: [
            "6.1 ส่วนหัวเว็บไซต์ (Header): มักอยู่ด้านบนของหน้าเว็บ ทำหน้าที่แสดงตัวตนของเว็บไซต์ เช่น ชื่อร้านหรือโลโก้ ผู้ใช้งานควรสามารถมองเห็นและเข้าใจได้ทันทีว่ากำลังเข้าชมเว็บไซต์ของธุรกิจใด ตัวอย่างเช่น เว็บไซต์ร้านกาแฟควรแสดงชื่อร้านให้ชัดเจน และอาจมีโลโก้ที่สอดคล้องกับภาพลักษณ์ของร้าน",
            "6.2 เมนูนำทาง (Navigation): ช่วยให้ผู้ใช้งานไปยังหน้าเว็บหรือส่วนต่าง ๆ ของเว็บไซต์ได้ เช่น หน้าแรก สินค้า เกี่ยวกับเรา และติดต่อเรา หากเมนูมีจำนวนมากเกินไป ใช้คำไม่ชัดเจน หรือมีลิงก์ที่กดแล้วไม่ทำงาน อาจทำให้ลูกค้าค้นหาข้อมูลที่ต้องการได้ยาก"
        ],
        visualAssets: ["assets/diagrams/website-7-components-wireframe.svg"],
        interactiveType: "Before / After Comparison",
        speakerNotes: {
            objective: "อธิบายหน้าที่และเกณฑ์การตรวจสอบส่วนหัวเว็บไซต์ (Header) และเมนูนำทาง (Navigation)",
            explanationGuide: "มาดู 2 ส่วนแรกที่อยู่ด้านบนสุดของหน้าเว็บครับ 6.1 ส่วนหัวเว็บไซต์ หรือ Header ทำหน้าที่แสดงตัวตนของเว็บไซต์ เช่น ชื่อร้านหรือโลโก้ ลูกค้าเปิดเว็บปุ๊บต้องรู้ทันทีว่านี่คือเว็บของร้านอะไร เช่น เว็บร้านกาแฟควรแสดงชื่อร้านชัดเจนและมีโลโก้ที่เข้ากับภาพลักษณ์ของร้าน ส่วนที่ 6.2 คือเมนูนำทาง (Navigation) ช่วยพาลูกค้าไปยังหน้าต่าง ๆ เช่น หน้าแรก สินค้า เกี่ยวกับเรา และติดต่อเรา เวลาเราไปสำรวจเว็บจริง ให้สังเกตว่าเมนูมีเยอะเกินไปไหม ใช้คำเข้าใจยากไหม หรือมีลิงก์ที่กดแล้วไม่ทำงานหรือเปล่า เพราะสิ่งเหล่านี้จะทำให้ลูกค้าหาข้อมูลได้ยากครับ",
            extraExamples: "ตัวอย่างเมนูที่ใช้คำไม่ชัดเจน เช่น แทนที่จะเขียนว่า 'เมนูเครื่องดื่ม' กลับเขียนศัพท์เฉพาะที่ลูกค้าทั่วไปไม่เข้าใจ ทำให้ลูกค้าไม่รู้ว่าต้องกดตรงไหนเพื่อดูราคา",
            guidingQuestion: "ถ้าเราเปิดเว็บไซต์ร้านค้าแห่งหนึ่งแล้วเจอเมนูนำทางเรียงกันอยู่ 18 เมนูและตัวอักษรเล็กมาก จะส่งผลต่อผู้ใช้งานอย่างไรครับ?",
            expectedAnswer: "ผู้ใช้งานจะตาลาย สับสน และค้นหาหน้าที่ต้องการได้ยาก จนอาจปิดเว็บไซต์ออกไปก่อน",
            interactiveGuide: "ชี้เปรียบเทียบตัวอย่างเมนูนำทางที่ดี (กระชับ ชัดเจน กดได้จริง) กับเมนูที่มีปัญหาในการ์ดด้านขวา",
            transitionNote: "ถัดลงมาจาก Header และเมนูนำทาง ก็คือพื้นที่เด่นที่สุดของหน้าแรก นั่นคือ 6.3 Hero Section และ 6.4 ส่วนสินค้าและบริการ ในสไลด์ที่ 17 ครับ"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><i class="fa-solid fa-id-badge"></i></div>
                            <div>
                                <h3 class="card-title">6.1 ส่วนหัวเว็บไซต์ (Header)</h3>
                                <p class="caption-text">แสดงตัวตนและภาพลักษณ์ของธุรกิจทันทีที่เปิดเว็บ</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:12px;">
                            ส่วนหัวมักอยู่<strong>ด้านบนของหน้าเว็บ</strong> ทำหน้าที่แสดงตัวตนของเว็บไซต์ เช่น <strong>ชื่อร้านหรือโลโก้</strong> ผู้ใช้งานควรสามารถมองเห็นและเข้าใจได้ทันทีว่ากำลังเข้าชมเว็บไซต์ของธุรกิจใด
                        </p>
                    </div>

                    <div style="background:#EFF6FF; border:2px solid #93C5FD; border-radius:16px; padding:16px 20px;">
                        <div class="caption-text" style="font-weight:700; color:#1E40AF;"><i class="fa-solid fa-mug-hot"></i> ตัวอย่างการออกแบบ Header ร้านกาแฟ:</div>
                        <div style="background:#FFFFFF; border:1.5px solid #BFDBFE; border-radius:12px; padding:12px 16px; margin-top:8px; display:flex; align-items:center; justify-content:space-between;">
                            <div style="font-size:25px; font-weight:800; color:#18243D;">☕ บ้านกาแฟแพร่ (Baan Phrae Coffee)</div>
                            <span class="caption-text" style="color:#047857; font-weight:700;">✓ ชื่อร้านชัด + โลโก้ตรงภาพลักษณ์</span>
                        </div>
                    </div>

                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-check"></i> จุดตรวจสอบ</span>
                        <span class="easy-explain-text">โลโก้และชื่อธุรกิจต้องมองเห็นชัดเจนตั้งแต่วินาทีแรกที่เปิดหน้าเว็บ</span>
                    </div>
                </div>

                <div class="card purple" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-compass"></i></div>
                            <div>
                                <h3 class="card-title">6.2 เมนูนำทาง (Navigation)</h3>
                                <p class="caption-text">พาลูกค้าไปยังหน้าหรือส่วนต่าง ๆ ของเว็บไซต์</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:12px;">
                            ช่วยให้ผู้ใช้งานไปยังหน้าเว็บต่าง ๆ ได้สะดวก เช่น <strong>หน้าแรก, สินค้า, เกี่ยวกับเรา และติดต่อเรา</strong>
                        </p>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <div style="background:#ECFDF5; border:2px solid #10B981; border-radius:14px; padding:12px 16px;">
                            <div style="font-size:23px; font-weight:800; color:#065F46;"><i class="fa-solid fa-circle-check"></i> เมนูนำทางที่ดี:</div>
                            <p class="caption-text" style="color:#18243D;">หน้าแรก | เมนูเครื่องดื่ม | เกี่ยวกับเรา | ติดต่อเรา (ใช้คำชัดเจน กดแล้วไปถูกหน้า)</p>
                        </div>

                        <div style="background:#FEF2F2; border:2px solid #EF4444; border-radius:14px; padding:12px 16px;">
                            <div style="font-size:23px; font-weight:800; color:#991B1B;"><i class="fa-solid fa-circle-xmark"></i> ปัญหาที่ทำให้ลูกค้าค้นหาข้อมูลได้ยาก:</div>
                            <p class="caption-text" style="color:#7F1D1D;">
                                • เมนูมี<strong>จำนวนมากเกินไป</strong>จนรกสายตา<br>
                                • ใช้<strong>คำไม่ชัดเจน</strong> หรือมี<strong>ลิงก์ที่กดแล้วไม่ทำงาน</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 17: 6.3 ส่วนแนะนำหลัก (Hero Section) และ 6.4 ส่วนสินค้าและบริการ (Product/Service)
    // =========================================================================
    {
        slideId: "u1w2-s17",
        slideNumber: 17,
        title: "6.3 ส่วนแนะนำหลัก (Hero Section) & 6.4 ส่วนสินค้าและบริการ",
        section: "ส่วนที่ 3: การวิเคราะห์องค์ประกอบเว็บไซต์ธุรกิจ",
        layoutType: "Detailed Explanations & Visual Examples",
        teachingTime: 6,
        timeGuide: "6 นาที (ชั่วโมงที่ 2: วิเคราะห์ Hero Section และความครบถ้วนของข้อมูลสินค้า)",
        kicker: "ส่วนที่ 3 การวิเคราะห์องค์ประกอบเว็บไซต์ธุรกิจ • หัวข้อที่ 6.3 และ 6.4",
        badge: "จุดเด่นของร้าน & ข้อมูลตัดสินใจซื้อ",
        content: [
            "6.3 ส่วนแนะนำหลัก (Hero Section): เป็นพื้นที่ที่มักอยู่ใกล้ส่วนบนของหน้าแรก ใช้แสดงข้อความสำคัญ ภาพสินค้า หรือจุดเด่นของธุรกิจ ตัวอย่างเช่น ร้านกาแฟอาจใช้ภาพเครื่องดื่มพร้อมข้อความ “กาแฟสดจากเมล็ดกาแฟคุณภาพของชุมชน” เพื่อสื่อสารจุดเด่นของร้านให้ลูกค้าเข้าใจได้อย่างรวดเร็ว",
            "6.4 ส่วนสินค้าและบริการ (Product/Service): เป็นพื้นที่สำหรับแสดงข้อมูลสินค้าและบริการ เช่น ชื่อสินค้า รูปภาพ ราคา และรายละเอียดสำคัญ เว็บไซต์ร้านค้าควรแสดงข้อมูลให้ถูกต้องและเพียงพอต่อการตัดสินใจ หากมีรูปสินค้าแต่ไม่มีราคา หรือรายละเอียดไม่ครบถ้วน ลูกค้าอาจต้องเสียเวลาสอบถามเพิ่มเติม"
        ],
        visualAssets: ["assets/diagrams/website-7-components-wireframe.svg"],
        interactiveType: "Glossary Quick Triggers",
        speakerNotes: {
            objective: "อธิบายหน้าที่ของส่วนแนะนำหลัก (Hero Section) และเกณฑ์การตรวจสอบความครบถ้วนของส่วนสินค้าและบริการ (Product/Service)",
            explanationGuide: "มาดูส่วนที่ 6.3 Hero Section หรือส่วนแนะนำหลักครับ พื้นที่นี้จะอยู่ใกล้ส่วนบนของหน้าแรก ใช้โชว์ข้อความสำคัญ ภาพสินค้าเด่น หรือจุดขายของธุรกิจ เช่น ร้านกาแฟใช้ภาพเครื่องดื่มสวย ๆ คู่กับข้อความว่า 'กาแฟสดจากเมล็ดกาแฟคุณภาพของชุมชน' ลูกค้าเห็นปุ๊บเข้าใจจุดเด่นของร้านทันที ส่วนที่ 6.4 คือส่วนสินค้าและบริการ (Product/Service) ใช้แสดงชื่อสินค้า รูปภาพ ราคา และรายละเอียดสำคัญ ข้อควรระวังคือ ถ้าลงแต่รูปสวย ๆ แต่ไม่ยอมบอกราคา หรือรายละเอียดไม่ครบ ลูกค้าจะต้องเสียเวลาทักแชตถามซ้ำ หรือบางคนอาจเปลี่ยนใจไปซื้อร้านอื่นที่บอกราคาชัดเจนแทนครับ",
            extraExamples: "เวลาเราเลื่อนดูสินค้าออนไลน์ ถ้าเว็บไหนบอกทั้งชื่อเมนู รูปจริง ราคา และขนาดแก้วชัดเจน เรามักตัดสินใจสั่งซื้อได้เร็วกว่าเว็บที่ต้องคอยทักไปถามราคาทีละชิ้น",
            guidingQuestion: "การที่เว็บไซต์ร้านค้าแสดงรูปภาพสินค้าสวยงามแต่ไม่ระบุราคาไว้เลย ส่งผลเสียต่อทั้งลูกค้าและเจ้าของร้านอย่างไรครับ?",
            expectedAnswer: "ลูกค้าตัดสินใจซื้อทันทีไม่ได้และต้องเสียเวลาสอบถามเพิ่มเติม ส่วนเจ้าของร้านก็ต้องเสียเวลาตอบคำถามเรื่องราคาซ้ำ ๆ",
            interactiveGuide: "เปรียบเทียบการ์ดสินค้า 2 แบบในการ์ดด้านขวา (แบบมีชื่อ รูป ราคา และรายละเอียดครบ vs แบบมีแต่รูปไม่มีราคา)",
            transitionNote: "เมื่อลูกค้าดูสินค้าแล้วสนใจ เราจะพาลูกค้าไปสั่งซื้อหรือติดต่อร้านได้อย่างไร? ไปดู 6.5 CTA, 6.6 Contact และ 6.7 Footer ในสไลด์ที่ 18 ครับ"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><i class="fa-solid fa-star"></i></div>
                            <div>
                                <h3 class="card-title">6.3 <span class="glossary-term" data-glossary="Hero Section">ส่วนแนะนำหลัก (Hero Section)</span></h3>
                                <p class="caption-text">สื่อสารจุดเด่นของธุรกิจให้ลูกค้าเข้าใจอย่างรวดเร็ว</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            เป็นพื้นที่บริเวณส่วนบนของหน้าแรก ใช้แสดง<strong>ข้อความสำคัญ ภาพสินค้า หรือจุดเด่นของธุรกิจ</strong>
                        </p>
                    </div>

                    <div style="background:linear-gradient(135deg, #1E3A8A 0%, #4778F5 100%); border-radius:16px; padding:22px; color:#FFFFFF;">
                        <div class="caption-text" style="color:#BFDBFE; font-weight:700;">ตัวอย่าง Hero Section ของร้านกาแฟ:</div>
                        <div style="font-size:28px; font-weight:800; color:#FFFFFF; margin-top:6px; line-height:1.3;">
                            “กาแฟสดจากเมล็ดกาแฟคุณภาพของชุมชน”
                        </div>
                        <p class="caption-text" style="color:#E2E8F0; margin-top:8px;">
                            แสดงภาพเครื่องดื่มคู่กับประโยคจุดขายชัดเจน ช่วยให้ลูกค้าเข้าใจเอกลักษณ์ของร้านได้ทันที
                        </p>
                    </div>
                </div>

                <div class="card mint" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box mint"><i class="fa-solid fa-tags"></i></div>
                            <div>
                                <h3 class="card-title">6.4 ส่วนสินค้าและบริการ (Product/Service)</h3>
                                <p class="caption-text">ข้อมูลต้องถูกต้องและเพียงพอต่อการตัดสินใจ</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            แสดง<strong>ชื่อสินค้า รูปภาพ ราคา และรายละเอียดสำคัญ</strong> หากมีแต่รูปสินค้าแต่ไม่มีราคาหรือรายละเอียดไม่ครบ ลูกค้าจะต้องเสียเวลาสอบถามเพิ่มเติม
                        </p>
                    </div>

                    <div class="grid-2" style="gap:12px; flex:0 0 auto;">
                        <div style="background:#ECFDF5; border:2px solid #10B981; border-radius:14px; padding:12px 14px;">
                            <div style="font-size:22px; font-weight:800; color:#065F46;">✓ ข้อมูลครบ ตัดสินใจง่าย</div>
                            <div style="font-size:23px; font-weight:700; color:#18243D; margin-top:4px;">☕ อเมริกาโน่น้ำผึ้ง — 50 บาท</div>
                            <p class="caption-text">เมล็ดกาแฟคั่วกลาง ผสมน้ำผึ้งแท้เดือนห้า (แก้ว 16 ออนซ์)</p>
                        </div>
                        <div style="background:#FEF2F2; border:2px solid #EF4444; border-radius:14px; padding:12px 14px;">
                            <div style="font-size:22px; font-weight:800; color:#991B1B;">✗ ข้อมูลไม่ครบ เสียเวลาถาม</div>
                            <div style="font-size:23px; font-weight:700; color:#18243D; margin-top:4px;">☕ กาแฟเย็น (ไม่ระบุราคา)</div>
                            <p class="caption-text" style="color:#991B1B;">มีแต่รูปภาพ ไม่มีราคาและไม่มีรายละเอียดเครื่องดื่ม</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 18: 6.5 ปุ่ม CTA, 6.6 ช่องทางติดต่อ (Contact) และ 6.7 ส่วนท้ายเว็บไซต์ (Footer)
    // =========================================================================
    {
        slideId: "u1w2-s18",
        slideNumber: 18,
        title: "6.5 ปุ่ม CTA, 6.6 ช่องทางติดต่อ (Contact) & 6.7 ส่วนท้าย (Footer)",
        section: "ส่วนที่ 3: การวิเคราะห์องค์ประกอบเว็บไซต์ธุรกิจ",
        layoutType: "Detailed Explanations & Visual Examples",
        teachingTime: 6,
        timeGuide: "6 นาที (ชั่วโมงที่ 2: วิเคราะห์ปุ่ม CTA ช่องทางติดต่อ และส่วนท้ายเว็บไซต์)",
        kicker: "ส่วนที่ 3 การวิเคราะห์องค์ประกอบเว็บไซต์ธุรกิจ • หัวข้อที่ 6.5, 6.6 และ 6.7",
        badge: "การกระตุ้นการตัดสินใจ & ข้อมูลติดต่อ",
        content: [
            "6.5 ปุ่มกระตุ้นการดำเนินการ (Call to Action: CTA): ปุ่มหรือลิงก์ที่ช่วยนำผู้ใช้งานไปสู่กิจกรรมที่ธุรกิจต้องการ เช่น “สั่งซื้อเลย” “ดูเมนูทั้งหมด” “จองคิว” หรือ “ติดต่อร้าน” ควรใช้ข้อความเข้าใจง่าย มองเห็นชัดเจน และเมื่อกดแล้วต้องนำไปสู่หน้าหรือการทำงานที่ถูกต้อง",
            "6.6 ช่องทางติดต่อ (Contact): ควรมีช่องทางให้ลูกค้าติดต่อได้จริง เช่น เบอร์โทรศัพท์ อีเมล ช่องทางแชต หรือแผนที่ร้าน หากผิดพลาดหรือไม่เป็นปัจจุบัน ลูกค้าอาจติดต่อร้านไม่ได้ ส่งผลต่อความน่าเชื่อถือและโอกาสในการขาย",
            "6.7 ส่วนท้ายเว็บไซต์ (Footer): แสดงข้อมูลเพิ่มเติม เช่น ที่อยู่ร้าน ช่องทางติดต่อ ลิงก์สำคัญ ข้อมูลลิขสิทธิ์ และนโยบายที่เกี่ยวข้อง"
        ],
        visualAssets: ["assets/diagrams/website-7-components-wireframe.svg"],
        interactiveType: "Glossary Quick Triggers",
        speakerNotes: {
            objective: "อธิบายหน้าที่และจุดตรวจสอบของปุ่ม CTA, ช่องทางติดต่อ (Contact) และส่วนท้ายเว็บไซต์ (Footer)",
            explanationGuide: "มาดู 3 องค์ประกอบสุดท้ายของส่วนที่ 3 ครับ 6.5 คือปุ่มกระตุ้นการดำเนินการ หรือ Call to Action (CTA) คือปุ่มที่พาลูกค้าไปทำกิจกรรมที่ธุรกิจต้องการ เช่น 'สั่งซื้อเลย', 'ดูเมนูทั้งหมด', 'จองคิว' หรือ 'ติดต่อร้าน' ปุ่ม CTA ที่ดีต้องใช้ข้อความเข้าใจง่าย สีสันมองเห็นชัดเจน และพอกดแล้วลิงก์ต้องใช้งานได้จริง ส่วนที่ 6.6 คือช่องทางติดต่อ (Contact) เช่น เบอร์โทรศัพท์ อีเมล แชต หรือแผนที่ร้าน ข้อมูลนี้ต้องเป็นปัจจุบัน ถ้าเบอร์ผิดหรือลิงก์แชตเสีย ร้านจะเสียโอกาสในการขายทันที และ 6.7 ส่วนท้ายเว็บไซต์ (Footer) แม้จะอยู่ล่างสุด แต่เป็นจุดสำคัญที่ลูกค้านิยมเลื่อนลงมาหาที่อยู่ร้าน ลิงก์สำคัญ ลิขสิทธิ์ และนโยบายต่าง ๆ ครับ",
            extraExamples: "เวลาเราเข้าเว็บธุรกิจแล้วอยากรู้ว่าบริษัทตั้งอยู่ที่ไหนจริง ๆ คนส่วนใหญ่มักเลื่อนลงไปดูที่ Footer ด้านล่างสุดของหน้าเว็บทันที",
            guidingQuestion: "ถ้าเว็บไซต์ร้านกาแฟมีปุ่ม CTA เขียนว่า 'ติดต่อร้าน' สวยงามมาก แต่พอลูกค้ากดปุ่มแล้วไม่มีอะไรเกิดขึ้นเลย จะเกิดผลกระทบอย่างไรครับ?",
            expectedAnswer: "ลูกค้าไม่สามารถติดต่อร้านได้ ทำให้ร้านดูไม่เป็นมืออาชีพ ขาดความน่าเชื่อถือ และสูญเสียโอกาสในการขาย",
            interactiveGuide: "ชี้ให้เห็นตัวอย่างข้อความปุ่ม CTA ทั้ง 4 แบบ และรายการข้อมูลที่ต้องมีในส่วน Contact และ Footer",
            transitionNote: "เมื่อเรารู้จักครบ 7 องค์ประกอบแล้ว ต่อไปในส่วนที่ 4 (สไลด์ที่ 19) เราจะมาดูเกณฑ์การประเมินคุณภาพเว็บไซต์ธุรกิจกันครับ"
        },
        html: `
            <div class="grid-3">
                <div class="card blue">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><i class="fa-solid fa-hand-pointer"></i></div>
                            <div>
                                <h3 class="card-title">6.5 ปุ่ม <span class="glossary-term" data-glossary="CTA">CTA</span></h3>
                                <p class="caption-text">Call to Action กระตุ้นการดำเนินการ</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            ปุ่มหรือลิงก์ที่นำผู้ใช้งานไปสู่กิจกรรมที่ธุรกิจต้องการ ควรใช้<strong>ข้อความเข้าใจง่าย มองเห็นชัดเจน</strong> และ<strong>กดแล้วนำไปสู่การทำงานที่ถูกต้อง</strong>
                        </p>
                    </div>
                    <div style="background:#EFF6FF; border:1.5px solid #93C5FD; border-radius:14px; padding:12px; display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <span style="background:#4778F5; color:#FFF; padding:8px; border-radius:8px; text-align:center; font-size:21px; font-weight:700;">สั่งซื้อเลย</span>
                        <span style="background:#8B5CF6; color:#FFF; padding:8px; border-radius:8px; text-align:center; font-size:21px; font-weight:700;">ดูเมนูทั้งหมด</span>
                        <span style="background:#059669; color:#FFF; padding:8px; border-radius:8px; text-align:center; font-size:21px; font-weight:700;">จองคิว</span>
                        <span style="background:#D97706; color:#FFF; padding:8px; border-radius:8px; text-align:center; font-size:21px; font-weight:700;">ติดต่อร้าน</span>
                    </div>
                </div>

                <div class="card purple">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-phone-volume"></i></div>
                            <div>
                                <h3 class="card-title">6.6 ช่องทางติดต่อ (Contact)</h3>
                                <p class="caption-text">ต้องติดต่อได้จริงและเป็นปัจจุบัน</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            ควรมีช่องทางให้ลูกค้าติดต่อได้จริง เช่น <strong>เบอร์โทรศัพท์ อีเมล ช่องทางแชต หรือแผนที่ร้าน</strong>
                        </p>
                    </div>
                    <div style="background:#FEF2F2; border:1.5px solid #FCA5A5; border-radius:14px; padding:14px 16px;">
                        <div class="caption-text" style="color:#991B1B; font-weight:700;"><i class="fa-solid fa-triangle-exclamation"></i> ผลเสียเมื่อข้อมูลติดต่อผิดพลาด:</div>
                        <p class="caption-text" style="color:#7F1D1D; margin-top:4px;">
                            หากข้อมูลไม่เป็นปัจจุบัน ลูกค้าจะติดต่อร้านไม่ได้ ส่งผลเสียต่อ<strong>ความน่าเชื่อถือและโอกาสในการขาย</strong>ทันที
                        </p>
                    </div>
                </div>

                <div class="card mint">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box mint"><i class="fa-solid fa-window-minimize"></i></div>
                            <div>
                                <h3 class="card-title">6.7 ส่วนท้ายเว็บไซต์ (Footer)</h3>
                                <p class="caption-text">แหล่งรวมข้อมูลอ้างอิงด้านล่างสุด</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            แม้จะอยู่ด้านล่างสุดของหน้าเว็บ แต่เป็นส่วนสำคัญที่ช่วยให้ผู้ใช้งานค้นหาข้อมูลเกี่ยวกับธุรกิจได้:
                        </p>
                    </div>
                    <div style="background:#ECFDF5; border:1.5px solid #6EE7B7; border-radius:14px; padding:14px 16px;">
                        <p class="caption-text" style="color:#065F46;">
                            • <strong>ที่อยู่ร้าน</strong> และช่องทางติดต่อ<br>
                            • <strong>ลิงก์สำคัญ</strong> ไปยังหน้าหลักต่าง ๆ<br>
                            • <strong>ข้อมูลลิขสิทธิ์</strong> และนโยบายที่เกี่ยวข้อง
                        </p>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 19: ส่วนที่ 4 การประเมินคุณภาพเว็บไซต์ธุรกิจ (7.1 ข้อมูลถูกต้อง & 7.2 ใช้งานง่าย)
    // =========================================================================
    {
        slideId: "u1w2-s19",
        slideNumber: 19,
        title: "7. เว็บไซต์ธุรกิจที่ดีควรมีลักษณะอย่างไร? (7.1 และ 7.2)",
        section: "ส่วนที่ 4: การประเมินคุณภาพเว็บไซต์ธุรกิจ",
        layoutType: "Core Concepts & Real-World Case",
        teachingTime: 6,
        timeGuide: "6 นาที (ชั่วโมงที่ 2: เกณฑ์ประเมินความถูกต้องของข้อมูลและ Usability)",
        kicker: "ส่วนที่ 4 การประเมินคุณภาพเว็บไซต์ธุรกิจ • หัวข้อที่ 7, 7.1 และ 7.2",
        badge: "ความถูกต้องของข้อมูล & Usability",
        content: [
            "การประเมินเว็บไซต์ไม่ควรพิจารณาเพียงความสวยงามเท่านั้น เพราะเว็บไซต์ที่มีสีสันสวยงามอาจใช้งานยาก ขณะที่เว็บไซต์ที่มีรูปแบบเรียบง่ายอาจช่วยให้ลูกค้าค้นหาข้อมูลและสั่งซื้อสินค้าได้สะดวกกว่า",
            "7.1 ข้อมูลถูกต้องและครบถ้วน: แสดงข้อมูลที่เป็นปัจจุบัน เช่น ชื่อสินค้า ราคา เวลาเปิด–ปิด และช่องทางติดต่อ ตัวอย่างเช่น หากร้านกาแฟเปลี่ยนราคาเครื่องดื่มจาก 45 บาทเป็น 50 บาท แต่เว็บไซต์ยังแสดงราคาเดิม ลูกค้าอาจเข้าใจผิดและเกิดปัญหาในการซื้อขาย",
            "7.2 ใช้งานง่าย (Usability): ผู้ใช้งานควรค้นหาสิ่งที่ต้องการได้โดยไม่ต้องใช้เวลามาก เมนูควรเข้าใจง่าย ตัวอักษรอ่านสะดวก และปุ่มต่าง ๆ ควรทำงานตรงตามความคาดหวัง"
        ],
        visualAssets: ["assets/diagrams/website-7-components-wireframe.svg"],
        interactiveType: "Glossary Quick Triggers",
        speakerNotes: {
            objective: "อธิบายเหตุผลที่ไม่ควรประเมินเว็บไซต์จากความสวยงามเพียงอย่างเดียว พร้อมอธิบายเกณฑ์ 7.1 ข้อมูลถูกต้องครบถ้วน และ 7.2 ใช้งานง่าย (Usability)",
            explanationGuide: "เข้าสู่ส่วนที่ 4 การประเมินคุณภาพเว็บไซต์ธุรกิจครับ ก่อนอื่นต้องจำหลักข้อนี้ให้แม่น: 'การประเมินเว็บไซต์ไม่ควรพิจารณาเพียงความสวยงามเท่านั้น' เพราะเว็บที่สีสันอลังการอาจใช้งานยากมาก ในขณะที่เว็บเรียบง่ายกลับช่วยให้ลูกค้าหาสินค้าและสั่งซื้อได้สะดวกกว่า มาดูเกณฑ์ข้อ 7.1 ข้อมูลถูกต้องและครบถ้วน เช่น ชื่อสินค้า ราคา เวลาเปิด-ปิด ต้องเป็นปัจจุบัน ยกตัวอย่างถ้าร้านกาแฟปรับราคาจาก 45 บาทเป็น 50 บาท แต่หน้าเว็บยังเขียน 45 บาทอยู่ ลูกค้ามาซื้อจริงก็จะเข้าใจผิดและเกิดปัญหาทันที ส่วนข้อ 7.2 คือใช้งานง่าย (Usability) ลูกค้าต้องหาสิ่งที่ต้องการเจอเร็ว เมนูเข้าใจง่าย ตัวอักษรอ่านสะดวก และกดปุ่มแล้วทำงานตรงตามที่คาดหวังครับ",
            extraExamples: "อีกตัวอย่างของข้อมูลไม่อัปเดต เช่น ร้านหยุดเทศกาลแต่หน้าเว็บยังขึ้นว่า 'เปิดบริการทุกวัน' ลูกค้าขับรถมาถึงหน้าร้านแล้วเจอร้านปิด ก็จะเสียความรู้สึกมาก",
            guidingQuestion: "ถ้าต้องเลือกระหว่าง 'เว็บไซต์ที่กราฟิกเคลื่อนไหวเยอะมากแต่หาปุ่มสั่งซื้อไม่เจอ' กับ 'เว็บไซต์ที่เรียบง่ายแต่อ่านราคาชัดและกดสั่งซื้อได้ใน 2 คลิก' นักเรียนคิดว่าเว็บไหนมี Usability ดีกว่ากันครับ?",
            expectedAnswer: "เว็บไซต์ที่เรียบง่ายแต่อ่านราคาชัดและกดสั่งซื้อได้สะดวก มีความง่ายในการใช้งาน (Usability) ดีกว่า",
            interactiveGuide: "ชี้ให้เห็นกรณีศึกษาเปรียบเทียบราคากาแฟ 45 บาท vs 50 บาทในการ์ดด้านซ้าย และองค์ประกอบ Usability 3 ข้อในการ์ดด้านขวา",
            transitionNote: "นอกจากข้อมูลถูกต้องและใช้งานง่ายบนคอมพิวเตอร์แล้ว ถ้าลูกค้าเปิดผ่านมือถือล่ะ? ไปดูหัวข้อ 7.3 ในสไลด์ที่ 20 ครับ"
        },
        html: `
            <div class="easy-explain" style="margin-bottom:4px;">
                <span class="easy-explain-badge"><i class="fa-solid fa-scale-balanced"></i> หลักคิดสำคัญ</span>
                <span class="easy-explain-text">ไม่ควรพิจารณาเพียง<strong>ความสวยงาม</strong>เท่านั้น เว็บที่เรียบง่ายแต่ค้นหาข้อมูลและสั่งซื้อสะดวก ย่อมมีคุณภาพดีกว่าเว็บที่สวยแต่ใช้งานยาก</span>
            </div>

            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><i class="fa-solid fa-circle-check"></i></div>
                            <div>
                                <h3 class="card-title">7.1 ข้อมูลถูกต้องและครบถ้วน</h3>
                                <p class="caption-text">ข้อมูลต้องเป็นปัจจุบันและตรงกับความเป็นจริง</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            เว็บไซต์ควรแสดงข้อมูลที่เป็นปัจจุบัน เช่น <strong>ชื่อสินค้า ราคา เวลาเปิด–ปิด และช่องทางติดต่อ</strong>
                        </p>
                    </div>

                    <div style="background:#FEF2F2; border:2px solid #FCA5A5; border-radius:16px; padding:16px 20px;">
                        <div style="font-size:24px; font-weight:800; color:#991B1B;"><i class="fa-solid fa-triangle-exclamation"></i> ตัวอย่างปัญหาข้อมูลไม่อัปเดต:</div>
                        <p class="card-text" style="color:#7F1D1D; margin-top:6px;">
                            หากร้านกาแฟเปลี่ยนราคาเครื่องดื่มจาก <strong>45 บาท เป็น 50 บาท</strong> แต่เว็บไซต์ยังแสดงราคาเดิม (45 บาท) ลูกค้าอาจเข้าใจผิดและเกิดปัญหาในการซื้อขาย
                        </p>
                    </div>
                </div>

                <div class="card purple" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-hand-sparkles"></i></div>
                            <div>
                                <h3 class="card-title">7.2 ใช้งานง่าย (<span class="glossary-term" data-glossary="Usability">Usability</span>)</h3>
                                <p class="caption-text">ค้นหาสิ่งที่ต้องการได้เร็วโดยไม่สับสน</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            ผู้ใช้งานควรค้นหาสิ่งที่ต้องการได้โดยไม่ต้องใช้เวลามาก โดยมีองค์ประกอบสำคัญ 3 ประการ:
                        </p>
                    </div>

                    <div class="step-list" style="gap:10px;">
                        <div class="step-item" style="padding:10px 14px;">
                            <div class="step-num">1</div>
                            <div class="step-content"><p style="font-size:24px; color:#18243D;"><strong>เมนูควรเข้าใจง่าย</strong> จัดหมวดหมู่ชัดเจน</p></div>
                        </div>
                        <div class="step-item" style="padding:10px 14px;">
                            <div class="step-num">2</div>
                            <div class="step-content"><p style="font-size:24px; color:#18243D;"><strong>ตัวอักษรอ่านสะดวก</strong> ขนาดและสีตัดกับพื้นหลังชัดเจน</p></div>
                        </div>
                        <div class="step-item" style="padding:10px 14px;">
                            <div class="step-num">3</div>
                            <div class="step-content"><p style="font-size:24px; color:#18243D;"><strong>ปุ่มต่าง ๆ ทำงานตรงตามความคาดหวัง</strong>ของผู้ใช้งาน</p></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 20: 7.3 รองรับโทรศัพท์มือถือ (Mobile-Friendly Comparison)
    // =========================================================================
    {
        slideId: "u1w2-s20",
        slideNumber: 20,
        title: "7.3 รองรับโทรศัพท์มือถือ (Mobile-Friendly)",
        section: "ส่วนที่ 4: การประเมินคุณภาพเว็บไซต์ธุรกิจ",
        layoutType: "Before / After Comparison",
        teachingTime: 6,
        timeGuide: "6 นาที (ชั่วโมงที่ 2: เปรียบเทียบเว็บไซต์ที่รองรับมือถือ vs ไม่เหมาะกับมือถือ)",
        kicker: "ส่วนที่ 4 การประเมินคุณภาพเว็บไซต์ธุรกิจ • หัวข้อที่ 7.3 (Before / After Mobile View)",
        badge: "เปรียบเทียบการแสดงผลบนสมาร์ตโฟน",
        content: [
            "ผู้ใช้งานจำนวนมากเข้าชมเว็บไซต์ผ่านโทรศัพท์มือถือ เว็บไซต์จึงควรแสดงผลให้เหมาะสมกับขนาดหน้าจอ โดยไม่ต้องเลื่อนหน้าจอในแนวนอนเพื่ออ่านข้อความทั่วไป และปุ่มควรมีขนาดเหมาะสมสำหรับการสัมผัส",
            "เว็บไซต์ที่รองรับมือถือ: ข้อความอ่านง่าย รูปภาพพอดีหน้าจอ และปุ่มกดสะดวก",
            "เว็บไซต์ที่ไม่เหมาะกับมือถือ: ตัวอักษรเล็ก องค์ประกอบล้นหน้าจอ และใช้งานลำบาก"
        ],
        visualAssets: ["assets/diagrams/mobile-friendly-comparison.svg", "assets/images/ref-mobile-friendly-good.png", "assets/images/ref-mobile-friendly-bad.png"],
        interactiveType: "Before / After Comparison",
        speakerNotes: {
            objective: "เปรียบเทียบความแตกต่างระหว่างเว็บไซต์ที่รองรับโทรศัพท์มือถือ (Mobile-Friendly) กับเว็บไซต์ที่ไม่เหมาะกับมือถือ",
            explanationGuide: "หัวข้อที่ 7.3 สำคัญมากสำหรับธุรกิจดิจิทัลยุคนี้ครับ เพราะลูกค้าส่วนใหญ่เปิดเว็บไซต์ผ่านโทรศัพท์มือถือ เว็บไซต์ที่ดีจึงต้องแสดงผลให้พอดีกับหน้าจอมือถือ ไม่ต้องให้ลูกค้าคอยเลื่อนหน้าจอไปทางซ้าย-ขวา (แนวนอน) เพื่ออ่านข้อความ และปุ่มกดต้องมีขนาดเหมาะกับการใช้นิ้วแตะ ดูภาพเปรียบเทียบทั้งสองฝั่งครับ ฝั่งซ้ายคือเว็บไซต์ที่รองรับมือถือ: ข้อความอ่านง่าย รูปภาพพอดีหน้าจอ ปุ่มกดสะดวก ส่วนฝั่งขวาคือเว็บไซต์ที่ไม่เหมาะกับมือถือ: ตัวอักษรเล็กจิ๋ว องค์ประกอบล้นหน้าจอ และใช้งานลำบากครับ",
            extraExamples: "ในกิจกรรมปฏิบัติช่วงบ่าย นักเรียนจะได้ทดลองเปิดเว็บไซต์บนมือถือจริง หรือใช้โหมดจำลองหน้าจอมือถือในเบราว์เซอร์เพื่อตรวจข้อนี้ด้วยตัวเอง",
            guidingQuestion: "ถ้าเราเปิดเว็บไซต์ร้านอาหารบนมือถือแล้วต้องคอยใช้นิ้วเลื่อนหน้าจอไปทางซ้าย-ขวาตลอดเวลาเพื่ออ่านราคาอาหาร แสดงว่าเว็บไซต์นั้นมีปัญหาเรื่องใดครับ?",
            expectedAnswer: "ไม่รองรับการแสดงผลบนโทรศัพท์มือถือ (ไม่เป็น Mobile-Friendly) เพราะองค์ประกอบกว้างล้นหน้าจอแนวนอน",
            interactiveGuide: "คลิกปุ่มสลับมุมมองด้านล่างเพื่อเปรียบเทียบภาพตัวอย่างเว็บไซต์ที่รองรับมือถือ และไม่เหมาะกับมือถือจากเอกสารบทเรียน",
            transitionNote: "ไปดูเกณฑ์คุณภาพอีก 3 ข้อที่เหลือ (7.4, 7.5 และ 7.6) ในสไลด์ที่ 21 กันครับ"
        },
        html: `
            <div class="col-split-6-4">
                <div class="card blue" style="padding:14px; justify-content:space-between;">
                    <img src="assets/diagrams/mobile-friendly-comparison.svg" alt="เปรียบเทียบเว็บไซต์ที่รองรับมือถือกับเว็บไซต์ที่ไม่เหมาะกับมือถือ" style="width:100%; height:440px; object-fit:contain; background:#FFFFFF; border-radius:12px;">
                </div>

                <div class="card purple" style="justify-content:space-between;">
                    <div>
                        <h3 class="card-title"><span class="glossary-term" data-glossary="Mobile-Friendly">รองรับโทรศัพท์มือถือ (Mobile-Friendly)</span></h3>
                        <p class="card-text" style="margin-top:8px;">
                            ผู้ใช้งานจำนวนมากเข้าชมเว็บไซต์ผ่านสมาร์ตโฟน เว็บไซต์จึงควรแสดงผลเหมาะสมกับหน้าจอ <strong>ไม่ต้องเลื่อนหน้าจอในแนวนอน</strong>เพื่ออ่านข้อความทั่วไป และปุ่มมีขนาดเหมาะกับการสัมผัส
                        </p>
                    </div>

                    <div class="grid-2" style="gap:12px; flex:0 0 auto;">
                        <div style="background:#ECFDF5; border:2px solid #10B981; border-radius:14px; padding:12px;">
                            <img src="assets/images/ref-mobile-friendly-good.png" alt="เว็บไซต์ที่รองรับมือถือ" style="width:100%; height:115px; object-fit:cover; border-radius:8px; margin-bottom:8px;">
                            <div style="font-size:22px; font-weight:800; color:#065F46;">✓ เว็บไซต์ที่รองรับมือถือ</div>
                            <p class="caption-text" style="color:#18243D;">ข้อความอ่านง่าย รูปภาพพอดีหน้าจอ และปุ่มกดสะดวก</p>
                        </div>

                        <div style="background:#FEF2F2; border:2px solid #EF4444; border-radius:14px; padding:12px;">
                            <img src="assets/images/ref-mobile-friendly-bad.png" alt="เว็บไซต์ที่ไม่เหมาะกับมือถือ" style="width:100%; height:115px; object-fit:cover; border-radius:8px; margin-bottom:8px;">
                            <div style="font-size:22px; font-weight:800; color:#991B1B;">✗ ไม่เหมาะกับมือถือ</div>
                            <p class="caption-text" style="color:#7F1D1D;">ตัวอักษรเล็ก องค์ประกอบล้นหน้าจอ และใช้งานลำบาก</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 21: 7.4 ความน่าเชื่อถือ/ปลอดภัย, 7.5 ความเร็วในการแสดงผล & 7.6 บรรลุเป้าหมายธุรกิจ
    // =========================================================================
    {
        slideId: "u1w2-s21",
        slideNumber: 21,
        title: "เกณฑ์คุณภาพ 7.4 ความน่าเชื่อถือ, 7.5 ความเร็ว & 7.6 บรรลุเป้าหมายธุรกิจ",
        section: "ส่วนที่ 4: การประเมินคุณภาพเว็บไซต์ธุรกิจ",
        layoutType: "Detailed Explanations",
        teachingTime: 6,
        timeGuide: "6 นาที (ชั่วโมงที่ 2: เกณฑ์ความน่าเชื่อถือ ความเร็วในการโหลด และการตอบโจทย์เป้าหมายธุรกิจ)",
        kicker: "ส่วนที่ 4 การประเมินคุณภาพเว็บไซต์ธุรกิจ • หัวข้อที่ 7.4, 7.5 และ 7.6",
        badge: "ครบ 6 เกณฑ์คุณภาพเว็บไซต์ธุรกิจ",
        content: [
            "7.4 มีความน่าเชื่อถือและคำนึงถึงความปลอดภัย: ควรใช้ HTTPS แสดงข้อมูลธุรกิจที่ตรวจสอบได้ และไม่ขอข้อมูลส่วนบุคคลเกินความจำเป็น สำหรับกิจกรรมทดลอง นักเรียนไม่ควรนำข้อมูลลูกค้าจริง รหัสผ่าน หรือข้อมูลสำคัญมาใช้โดยไม่ได้รับอนุญาต",
            "7.5 มีความเร็วในการแสดงผลที่เหมาะสม: เว็บที่ใช้เวลาโหลดนานอาจทำให้ผู้ใช้งานไม่อยากรอ สาเหตุอาจเกิดจากไฟล์รูปภาพขนาดใหญ่ ทรัพยากรจำนวนมาก หรือปัญหาจากระบบเครือข่ายและเซิร์ฟเวอร์",
            "7.6 ช่วยให้ธุรกิจบรรลุเป้าหมาย: ตอบสนองต่อวัตถุประสงค์ของธุรกิจ เช่น หากต้องการให้ลูกค้าติดต่อสอบถาม ควรมีปุ่มติดต่อที่มองเห็นง่าย หากต้องการขายสินค้าออนไลน์ ควรช่วยให้ค้นหาและสั่งซื้อได้สะดวก"
        ],
        visualAssets: ["assets/diagrams/hero-how-web-works.svg"],
        interactiveType: "None",
        speakerNotes: {
            objective: "อธิบายเกณฑ์การประเมินคุณภาพเว็บไซต์ข้อที่ 7.4 (ความน่าเชื่อถือและความปลอดภัยของข้อมูล), 7.5 (ความเร็วในการแสดงผล) และ 7.6 (การช่วยให้ธุรกิจบรรลุเป้าหมาย)",
            explanationGuide: "มาดูอีก 3 เกณฑ์คุณภาพสำคัญครับ ข้อ 7.4 มีความน่าเชื่อถือและคำนึงถึงความปลอดภัย คือใช้ HTTPS แสดงข้อมูลธุรกิจที่ตรวจสอบได้ และไม่ขอข้อมูลส่วนบุคคลเกินความจำเป็น และครูขอย้ำข้อปฏิบัติสำหรับการเรียนและทำกิจกรรมทดลองนะครับ: 'นักเรียนไม่ควรนำข้อมูลลูกค้าจริง รหัสผ่าน หรือข้อมูลสำคัญมาใช้โดยไม่ได้รับอนุญาตเด็ดขาด' ข้อ 7.5 มีความเร็วในการแสดงผลที่เหมาะสม ถ้าเว็บโหลดนานเกินไปลูกค้าจะปิดหนี สาเหตุมักมาจากไฟล์รูปภาพขนาดใหญ่เกินไป มีทรัพยากรมาก หรือปัญหาเครือข่าย/เซิร์ฟเวอร์ และข้อ 7.6 ช่วยให้ธุรกิจบรรลุเป้าหมาย เช่น ถ้าเน้นให้ลูกค้าติดต่อ ต้องมีปุ่มติดต่อที่มองเห็นง่าย ถ้าเน้นขายของออนไลน์ ต้องช่วยให้ค้นหาและสั่งซื้อได้สะดวกครับ",
            extraExamples: "เวลาเราทำเว็บส่งครูหรือทดลองกรอกฟอร์ม ให้ใช้ชื่อสมมติและเบอร์โทรสมมติ เช่น 08X-XXX-XXXX เสมอ เพื่อความปลอดภัยและเคารพสิทธิส่วนบุคคล",
            guidingQuestion: "ถ้าเจ้าของร้านกาแฟอัปโหลดรูปถ่ายเมล็ดกาแฟจากกล้องโปรขนาดไฟล์รูปละ 25 MB จำนวน 30 รูปขึ้นหน้าแรกของเว็บโดยไม่ย่อขนาดไฟล์ จะเกิดผลเสียข้อใดตามมาครับ?",
            expectedAnswer: "เกิดปัญหาตามข้อ 7.5 คือเว็บไซต์ใช้เวลาโหลดนานมากจนผู้ใช้งานไม่อยากรอและออกจากเว็บไซต์ไป",
            interactiveGuide: "ชี้เน้นป้ายเตือนสีเหลืองอำพันด้านล่างเกี่ยวกับการห้ามใช้ข้อมูลลูกค้าจริงหรือรหัสผ่านจริงในการทำกิจกรรมทดลอง",
            transitionNote: "ทีนี้เรามาดูตัวอย่างตารางการวิเคราะห์เว็บไซต์ธุรกิจจริงในหัวข้อที่ 8 (สไลด์ที่ 22) เพื่อดูเป็นต้นแบบก่อนลงมือทำใบงานครับ"
        },
        html: `
            <div class="grid-3">
                <div class="card mint">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box mint"><i class="fa-solid fa-user-shield"></i></div>
                            <div>
                                <h3 class="card-title">7.4 น่าเชื่อถือ &amp; ปลอดภัย</h3>
                                <p class="caption-text">HTTPS และคุ้มครองข้อมูลส่วนบุคคล</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            เว็บไซต์ควรใช้ <strong>HTTPS</strong> แสดงข้อมูลธุรกิจที่ตรวจสอบได้ และ<strong>ไม่ขอข้อมูลส่วนบุคคลเกินความจำเป็น</strong>
                        </p>
                    </div>
                    <div style="background:#FFFBEB; border:2px solid #F59E0B; border-radius:14px; padding:12px 14px;">
                        <div class="caption-text" style="color:#B45309; font-weight:700;"><i class="fa-solid fa-shield-exclamation"></i> ข้อควรระวังในการทำกิจกรรม:</div>
                        <p class="caption-text" style="color:#78350F; margin-top:4px;">
                            นักเรียน<strong>ไม่ควรนำข้อมูลลูกค้าจริง รหัสผ่าน หรือข้อมูลสำคัญ</strong>มาใช้ในการทดลองโดยไม่ได้รับอนุญาต
                        </p>
                    </div>
                </div>

                <div class="card blue">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><i class="fa-solid fa-gauge-high"></i></div>
                            <div>
                                <h3 class="card-title">7.5 ความเร็วในการแสดงผล</h3>
                                <p class="caption-text">โหลดไว ไม่ทำให้ลูกค้ารอนาน</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            เว็บไซต์ที่ใช้เวลาโหลดนานอาจทำให้ผู้ใช้งานไม่อยากรอ นักเรียนสามารถทดลองเปิดเว็บและสังเกตความเร็วในการแสดงผลได้
                        </p>
                    </div>
                    <div style="background:#EFF6FF; border:1.5px solid #93C5FD; border-radius:14px; padding:12px 14px;">
                        <div class="caption-text" style="color:#1E40AF; font-weight:700;"><i class="fa-solid fa-hourglass-half"></i> สาเหตุที่ทำให้เว็บโหลดช้า:</div>
                        <p class="caption-text" style="color:#18243D; margin-top:4px;">
                            • <strong>ไฟล์รูปภาพขนาดใหญ่เกินไป</strong><br>
                            • มีทรัพยากรจำนวนมากในหน้าเดียว<br>
                            • ปัญหาจากระบบเครือข่ายและเซิร์ฟเวอร์
                        </p>
                    </div>
                </div>

                <div class="card purple">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-flag-checkered"></i></div>
                            <div>
                                <h3 class="card-title">7.6 บรรลุเป้าหมายธุรกิจ</h3>
                                <p class="caption-text">ออกแบบให้ตรงกับวัตถุประสงค์ของร้าน</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            เว็บไซต์ควรตอบสนองต่อวัตถุประสงค์หลักของธุรกิจอย่างชัดเจน:
                        </p>
                    </div>
                    <div style="background:#F5F3FF; border:1.5px solid #C4B5FD; border-radius:14px; padding:12px 14px;">
                        <p class="caption-text" style="color:#4C1D95;">
                            • <strong>เน้นให้ติดต่อสอบถาม:</strong> ต้องมีปุ่มติดต่อที่มองเห็นง่าย<br>
                            • <strong>เน้นขายสินค้าออนไลน์:</strong> ต้องช่วยให้ลูกค้าค้นหาและสั่งซื้อสินค้าได้สะดวก
                        </p>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 22: 8. ตัวอย่างการวิเคราะห์เว็บไซต์ธุรกิจ (ตารางประเมินร้านกาแฟสมมติ)
    // =========================================================================
    {
        slideId: "u1w2-s22",
        slideNumber: 22,
        title: "8. ตัวอย่างการวิเคราะห์เว็บไซต์ธุรกิจ (กรณีศึกษาร้านกาแฟ)",
        section: "ส่วนที่ 4: การประเมินคุณภาพเว็บไซต์ธุรกิจ",
        layoutType: "Visual Examples (Analysis Table)",
        teachingTime: 7,
        timeGuide: "7 นาที (ชั่วโมงที่ 2: ศึกษาตัวอย่างตารางผลการสำรวจและข้อเสนอแนะ 6 รายการ)",
        kicker: "ส่วนที่ 4 การประเมินคุณภาพเว็บไซต์ธุรกิจ • หัวข้อที่ 8",
        badge: "ต้นแบบการเขียนผลการสำรวจ & ข้อเสนอแนะ",
        content: [
            "สมมติว่านักเรียนได้รับมอบหมายให้ประเมินเว็บไซต์ร้านกาแฟแห่งหนึ่ง และพบลักษณะดังต่อไปนี้:",
            "1. โลโก้และชื่อร้าน: แสดงชัดเจน ➔ คงรูปแบบเดิม",
            "2. เมนูนำทาง: มีเมนูครบ แต่ตัวอักษรเล็ก ➔ เพิ่มขนาดตัวอักษร",
            "3. รายการสินค้า: มีรูปภาพ แต่บางรายการไม่มีราคา ➔ เพิ่มราคาให้ครบ",
            "4. ปุ่มติดต่อ: มีปุ่ม แต่ลิงก์ไม่ทำงาน ➔ แก้ไขลิงก์",
            "5. การแสดงผลบนมือถือ: รูปภาพบางส่วนล้นหน้าจอ ➔ ปรับการแสดงผลให้เหมาะสม",
            "6. HTTPS: เว็บไซต์ใช้ HTTPS ➔ ตรวจสอบความปลอดภัยส่วนอื่นเพิ่มเติม",
            "สรุป: การวิเคราะห์เว็บไซต์ไม่ได้หมายถึงการบอกว่าสวยหรือไม่สวยเท่านั้น แต่ต้องอธิบายได้ว่า พบปัญหาอะไร ส่งผลต่อผู้ใช้งานอย่างไร และควรปรับปรุงด้วยวิธีใด"
        ],
        visualAssets: ["assets/diagrams/website-7-components-wireframe.svg"],
        interactiveType: "None",
        speakerNotes: {
            objective: "แสดงตัวอย่างการบันทึกผลการสำรวจและการเขียนข้อเสนอแนะในการวิเคราะห์เว็บไซต์ธุรกิจอย่างเป็นระบบ",
            explanationGuide: "ก่อนที่พวกเราจะลงมือสำรวจเว็บไซต์จริงในกิจกรรมฝึกปฏิบัติ มาดูตัวอย่างในหัวข้อที่ 8 กันก่อนครับ สมมติว่าเราไปประเมินเว็บไซต์ร้านกาแฟแห่งหนึ่งแล้วจดบันทึกมา 6 ข้อ ดูวิธีเขียนนะครับ เช่น 'เมนูนำทาง: มีเมนูครบ แต่ตัวอักษรเล็ก -> ข้อเสนอแนะ: เพิ่มขนาดตัวอักษร' หรือ 'รายการสินค้า: มีรูปภาพ แต่บางรายการไม่มีราคา -> ข้อเสนอแนะ: เพิ่มราคาให้ครบ' สังเกตประโยคสรุปด้านล่างให้ดีครับ การวิเคราะห์เว็บไซต์ไม่ใช่การเขียนสั้น ๆ แค่ว่า 'เว็บสวยดี' หรือ 'เว็บไม่สวย' แต่ต้องอธิบายให้ครบ 3 อย่างคือ 1) พบปัญหาอะไร 2) ปัญหานั้นส่งผลต่อผู้ใช้งานอย่างไร และ 3) ควรปรับปรุงด้วยวิธีใดครับ",
            extraExamples: "เวลาเขียนรายงานส่งครูในกิจกรรมที่ 9 ถ้านักเรียนเขียนแค่ว่า 'เมนูไม่ดี' จะยังไม่สมบูรณ์ ต้องเขียนให้ชัดแบบในตารางนี้ เช่น 'เมนูตัวอักษรเล็กมากบนมือถือ ทำให้กดยาก ควรเพิ่มขนาดตัวอักษรและระยะห่างปุ่ม'",
            guidingQuestion: "จากตารางตัวอย่าง ข้อใดที่ส่งผลกระทบโดยตรงทำให้ลูกค้าไม่สามารถติดต่อสั่งซื้อกับทางร้านได้สำเร็จ และควรแก้ไขอย่างไรครับ?",
            expectedAnswer: "ปุ่มติดต่อ เพราะมีปุ่มแต่ลิงก์ไม่ทำงาน ต้องแก้ไขลิงก์ให้สามารถกดติดต่อร้านได้จริง",
            interactiveGuide: "ชี้ไล่ดูแต่ละแถวของตารางเพื่อให้เห็นความเชื่อมโยงระหว่างสิ่งที่ตรวจสอบ ผลการสำรวจ และข้อเสนอแนะ",
            transitionNote: "จบภาคทฤษฎี 2 ชั่วโมงแรกแล้ว! ตอนนี้เข้าสู่ส่วนที่ 5 กิจกรรมฝึกปฏิบัติ 2 ชั่วโมง (สไลด์ที่ 23–25) สวมบทบาทนักวิเคราะห์เว็บไซต์ธุรกิจกันเลยครับ"
        },
        html: `
            <div class="table-container">
                <table class="edu-table" aria-label="ตารางตัวอย่างการวิเคราะห์เว็บไซต์ธุรกิจร้านกาแฟ">
                    <thead>
                        <tr>
                            <th style="width:26%;">สิ่งที่ตรวจสอบ</th>
                            <th style="width:37%;">ผลการสำรวจสมมติ</th>
                            <th style="width:37%;">ข้อเสนอแนะเพื่อการปรับปรุง</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. โลโก้และชื่อร้าน</strong></td>
                            <td><span style="color:#065F46; font-weight:700;">✓ แสดงชัดเจน</span></td>
                            <td>คงรูปแบบเดิม</td>
                        </tr>
                        <tr>
                            <td><strong>2. เมนูนำทาง</strong></td>
                            <td><span style="color:#B45309; font-weight:700;">⚠ มีเมนูครบ แต่ตัวอักษรเล็ก</span></td>
                            <td><strong>เพิ่มขนาดตัวอักษร</strong>ให้อ่านและกดง่ายขึ้น</td>
                        </tr>
                        <tr>
                            <td><strong>3. รายการสินค้า</strong></td>
                            <td><span style="color:#B45309; font-weight:700;">⚠ มีรูปภาพ แต่บางรายการไม่มีราคา</span></td>
                            <td><strong>เพิ่มราคาให้ครบทุกรายการ</strong>เพื่อช่วยการตัดสินใจ</td>
                        </tr>
                        <tr>
                            <td><strong>4. ปุ่มติดต่อ</strong></td>
                            <td><span style="color:#DC2626; font-weight:700;">✗ มีปุ่ม แต่ลิงก์ไม่ทำงาน</span></td>
                            <td><strong>แก้ไขลิงก์</strong>ให้เชื่อมไปยังหน้าหรือช่องทางติดต่อได้จริง</td>
                        </tr>
                        <tr>
                            <td><strong>5. การแสดงผลบนมือถือ</strong></td>
                            <td><span style="color:#DC2626; font-weight:700;">✗ รูปภาพบางส่วนล้นหน้าจอ</span></td>
                            <td><strong>ปรับการแสดงผลให้เหมาะสม</strong>กับขนาดหน้าจอมือถือ</td>
                        </tr>
                        <tr>
                            <td><strong>6. ระบบ HTTPS</strong></td>
                            <td><span style="color:#065F46; font-weight:700;">✓ เว็บไซต์ใช้ HTTPS</span></td>
                            <td>ตรวจสอบความปลอดภัยและความน่าเชื่อถือส่วนอื่นเพิ่มเติม</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-magnifying-glass-chart"></i> หัวใจของการวิเคราะห์</span>
                <span class="easy-explain-text">ไม่ใช่แค่บอกว่าสวยหรือไม่สวย แต่ต้องระบุให้ได้ว่า <strong>1) พบปัญหาอะไร ➔ 2) ส่งผลต่อผู้ใช้อย่างไร ➔ 3) ควรปรับปรุงด้วยวิธีใด</strong></span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 23: ส่วนที่ 5 กิจกรรมฝึกปฏิบัติ — 9. กิจกรรม: นักวิเคราะห์เว็บไซต์ธุรกิจ (ขั้นตอนที่ 1–3)
    // =========================================================================
    {
        slideId: "u1w2-s23",
        slideNumber: 23,
        title: "9. กิจกรรมฝึกปฏิบัติ: นักวิเคราะห์เว็บไซต์ธุรกิจ (ขั้นตอนที่ 1–3)",
        section: "ส่วนที่ 5: กิจกรรมฝึกปฏิบัติ",
        layoutType: "Practical Task / Workshop Guide",
        teachingTime: 15,
        timeGuide: "15 นาที (ชั่วโมงที่ 3: ชี้แจงสถานการณ์ร้านกาแฟ จ.แพร่ และเริ่มปฏิบัติขั้นตอนที่ 1–3)",
        kicker: "ส่วนที่ 5 กิจกรรมฝึกปฏิบัติ (2 ชั่วโมง) • หัวข้อที่ 9 (ขั้นตอนที่ 1–3)",
        badge: "ภารกิจสำรวจเว็บไซต์จริง 2 แห่ง",
        content: [
            "สถานการณ์: ร้านกาแฟในจังหวัดแพร่ต้องการสร้างเว็บไซต์เพื่อให้ลูกค้าสามารถดูเมนูเครื่องดื่มและติดต่อร้านได้สะดวก เจ้าของร้านจึงต้องการศึกษาตัวอย่างเว็บไซต์ธุรกิจที่มีอยู่ก่อนตัดสินใจสร้างเว็บไซต์ของตนเอง",
            "ภารกิจของนักเรียน: สำรวจเว็บไซต์ธุรกิจจริงจำนวน 2 แห่ง และวิเคราะห์ว่าเว็บไซต์เหล่านั้นมีองค์ประกอบและคุณสมบัติที่เหมาะสมต่อการนำมาใช้เป็นแนวทางสร้างเว็บไซต์ร้านกาแฟหรือไม่",
            "ขั้นตอนที่ 1 เลือกเว็บไซต์ธุรกิจ: เลือกเว็บไซต์ธุรกิจจริง 2 แห่ง (ร้านอาหาร ร้านกาแฟ ร้านค้าออนไลน์ โรงแรม หรือธุรกิจบริการ) บันทึกชื่อเว็บไซต์และ URL ให้ครบถ้วน",
            "ขั้นตอนที่ 2 สำรวจองค์ประกอบเว็บไซต์: ตรวจสอบส่วนหัว เมนูนำทาง เนื้อหา สินค้าหรือบริการ ปุ่มติดต่อ และส่วนท้ายเว็บไซต์",
            "ขั้นตอนที่ 3 ตรวจสอบการแสดงผลบนมือถือ: เปิดผ่านโทรศัพท์มือถือ หรือใช้เครื่องมือจำลองหน้าจอมือถือของเบราว์เซอร์"
        ],
        visualAssets: ["assets/diagrams/mobile-friendly-comparison.svg"],
        interactiveType: "None",
        speakerNotes: {
            objective: "ชี้แจงสถานการณ์จำลอง ภารกิจ และแนวทางปฏิบัติขั้นตอนที่ 1 ถึง 3 ของกิจกรรม 'นักวิเคราะห์เว็บไซต์ธุรกิจ'",
            explanationGuide: "มาถึงช่วงลงมือปฏิบัติจริง 2 ชั่วโมงครับ! อ่านสถานการณ์ร่วมกันนะครับ: 'ร้านกาแฟในจังหวัดแพร่ต้องการสร้างเว็บไซต์เพื่อให้ลูกค้าดูเมนูเครื่องดื่มและติดต่อร้านได้สะดวก เจ้าของร้านจึงอยากศึกษาตัวอย่างเว็บไซต์ธุรกิจที่มีอยู่ก่อนตัดสินใจสร้างเว็บของตัวเอง' ภารกิจของพวกเราคือ สำรวจเว็บไซต์ธุรกิจจริง 2 แห่ง เริ่มจากขั้นตอนที่ 1 เลือกเว็บธุรกิจจริงมา 2 เว็บ จะเป็นร้านกาแฟ ร้านอาหาร ร้านค้าออนไลน์ โรงแรม หรือธุรกิจบริการก็ได้ จดชื่อเว็บและ URL ให้ครบ ขั้นตอนที่ 2 เปิดเว็บทั้ง 2 แห่งแล้วสำรวจองค์ประกอบตั้งแต่ส่วนหัว เมนู เนื้อหา สินค้า ปุ่มติดต่อ ไปจนถึงส่วนท้าย และขั้นตอนที่ 3 ทดลองเปิดบนมือถือจริง หรือกด F12 ใน Chrome แล้วกดปุ่ม Toggle Device Toolbar เพื่อจำลองหน้าจอมือถือครับ",
            extraExamples: "แนะนำให้นักเรียนเลือก 2 เว็บไซต์ที่มีลักษณะต่างกันเล็กน้อย เช่น เว็บแบรนด์ใหญ่ 1 เว็บ กับเว็บธุรกิจท้องถิ่นหรือ SME 1 เว็บ จะทำให้เห็นจุดเปรียบเทียบที่ชัดเจนมาก",
            guidingQuestion: "ถ้าเราไม่มีโทรศัพท์มือถือเชื่อมต่ออินเทอร์เน็ตในห้องคอมพิวเตอร์ เราสามารถตรวจสอบการแสดงผลบนมือถือในขั้นตอนที่ 3 ด้วยวิธีใดครับ?",
            expectedAnswer: "ใช้เครื่องมือจำลองหน้าจอมือถือของเว็บเบราว์เซอร์ (Developer Tools / กด F12 แล้วเลือกไอคอนรูปโทรศัพท์มือถือ)",
            interactiveGuide: "ครูเดินแนะนำการเลือกเว็บไซต์ 2 แห่งและการเปิดโหมดจำลองหน้าจอมือถือบนเบราว์เซอร์ให้นักเรียนแต่ละกลุ่ม",
            transitionNote: "เมื่อเลือกเว็บและสำรวจตามขั้นตอนที่ 1–3 แล้ว ให้นำผลมาบันทึกลงในตารางเปรียบเทียบขั้นตอนที่ 4 ในสไลด์ที่ 24 ครับ"
        },
        html: `
            <div style="background:linear-gradient(90deg, #1E3A8A 0%, #4778F5 100%); color:#FFFFFF; border-radius:16px; padding:14px 22px; display:flex; align-items:center; justify-content:space-between; gap:16px; flex-shrink:0;">
                <div>
                    <div class="caption-text" style="color:#BFDBFE; font-weight:700;"><i class="fa-solid fa-mug-hot"></i> สถานการณ์และภารกิจของนักเรียน:</div>
                    <div style="font-size:24px; font-weight:700; line-height:1.35;">
                        <strong>ร้านกาแฟในจังหวัดแพร่</strong>ต้องการสร้างเว็บไซต์ให้ลูกค้าดูเมนูและติดต่อสะดวก ➔ <strong>ภารกิจ:</strong> สำรวจเว็บไซต์ธุรกิจจริง <strong>2 แห่ง</strong> เพื่อวิเคราะห์แนวทางที่เหมาะสม
                    </div>
                </div>
            </div>

            <div class="grid-3">
                <div class="card blue">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><span style="font-weight:800; font-family:var(--font-en);">1</span></div>
                            <div>
                                <h3 class="card-title">เลือกเว็บไซต์ธุรกิจ</h3>
                                <p class="caption-text">เลือกเว็บไซต์ธุรกิจจริง 2 แห่ง</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            เลือกเว็บไซต์ธุรกิจจริง <strong>2 แห่ง</strong> เช่น ร้านอาหาร, ร้านกาแฟ, ร้านค้าออนไลน์, โรงแรม หรือธุรกิจบริการ
                        </p>
                    </div>
                    <div style="background:#EFF6FF; border:1.5px solid #93C5FD; border-radius:12px; padding:12px 14px;">
                        <p class="caption-text" style="color:#1E40AF; font-weight:700;">
                            <i class="fa-solid fa-pen-to-square"></i> สิ่งที่ต้องบันทึก: ชื่อเว็บไซต์และที่อยู่ URL ทั้ง 2 แห่งให้ครบถ้วน
                        </p>
                    </div>
                </div>

                <div class="card purple">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box purple"><span style="font-weight:800; font-family:var(--font-en);">2</span></div>
                            <div>
                                <h3 class="card-title">สำรวจองค์ประกอบเว็บ</h3>
                                <p class="caption-text">ตรวจสอบครบทุกส่วนของหน้าเว็บ</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            เปิดเว็บไซต์แต่ละแห่งและตรวจสอบ <strong>ส่วนหัว, เมนูนำทาง, เนื้อหา, สินค้าหรือบริการ, ปุ่มติดต่อ และส่วนท้ายเว็บไซต์</strong>
                        </p>
                    </div>
                    <div style="background:#F5F3FF; border:1.5px solid #C4B5FD; border-radius:12px; padding:12px 14px;">
                        <p class="caption-text" style="color:#5B21B6; font-weight:700;">
                            <i class="fa-solid fa-clipboard-question"></i> วิเคราะห์ว่าช่วยให้ผู้ใช้งานทำกิจกรรมต่าง ๆ ได้สะดวกหรือไม่
                        </p>
                    </div>
                </div>

                <div class="card mint">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box mint"><span style="font-weight:800; font-family:var(--font-en);">3</span></div>
                            <div>
                                <h3 class="card-title">ตรวจการแสดงผลมือถือ</h3>
                                <p class="caption-text">ทดสอบบนมือถือหรือโหมดจำลอง</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:10px;">
                            ทดลองเปิดเว็บไซต์ผ่าน<strong>โทรศัพท์มือถือ</strong> หรือใช้<strong>เครื่องมือจำลองหน้าจอมือถือของเบราว์เซอร์</strong> (กด <kbd>F12</kbd> ➔ Device Toolbar)
                        </p>
                    </div>
                    <div style="background:#ECFDF5; border:1.5px solid #6EE7B7; border-radius:12px; padding:12px 14px;">
                        <p class="caption-text" style="color:#065F46; font-weight:700;">
                            <i class="fa-solid fa-mobile-screen-button"></i> สังเกตว่าข้อความ รูปภาพ เมนู และปุ่มแสดงผลเหมาะสมหรือไม่
                        </p>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 24: 9. กิจกรรมฝึกปฏิบัติ — ขั้นตอนที่ 4 เปรียบเทียบเว็บไซต์ (Interactive Worksheet)
    // =========================================================================
    {
        slideId: "u1w2-s24",
        slideNumber: 24,
        title: "ขั้นตอนที่ 4: ตารางเปรียบเทียบเว็บไซต์ธุรกิจ 2 แห่ง (10 รายการตรวจสอบ)",
        section: "ส่วนที่ 5: กิจกรรมฝึกปฏิบัติ",
        layoutType: "Interactive Learning Activity (Comparison Table)",
        teachingTime: 45,
        timeGuide: "45 นาที (ชั่วโมงที่ 3–4: นักเรียนลงมือสำรวจและบันทึกตารางเปรียบเทียบ 10 รายการ)",
        kicker: "ส่วนที่ 5 กิจกรรมฝึกปฏิบัติ • หัวข้อที่ 9 ขั้นตอนที่ 4 (Interactive Comparison Worksheet)",
        badge: "ทดลองพิมพ์บันทึกผลเปรียบเทียบได้บนสไลด์",
        content: [
            "ขั้นตอนที่ 4 เปรียบเทียบเว็บไซต์: ใช้ตารางบันทึกผลการสำรวจเปรียบเทียบระหว่าง เว็บไซต์ที่ 1 และ เว็บไซต์ที่ 2 ครบ 10 รายการตรวจสอบ ได้แก่:",
            "1. ชื่อเว็บไซต์และ URL | 2. ประเภทเว็บไซต์ | 3. มีโลโก้และชื่อธุรกิจชัดเจน | 4. เมนูนำทางใช้งานง่าย | 5. ข้อมูลสินค้าหรือบริการครบถ้วน | 6. มีช่องทางติดต่อ | 7. รองรับโทรศัพท์มือถือ | 8. ใช้ HTTPS | 9. จุดเด่นของเว็บไซต์ | 10. จุดที่ควรปรับปรุง"
        ],
        visualAssets: ["assets/diagrams/website-7-components-wireframe.svg"],
        interactiveType: "Mini Challenge",
        speakerNotes: {
            objective: "ให้นักเรียนใช้ตารางมาตรฐาน 10 รายการตรวจสอบในการบันทึกและเปรียบเทียบผลการสำรวจเว็บไซต์ธุรกิจจริงทั้ง 2 แห่ง",
            explanationGuide: "ในขั้นตอนที่ 4 นี้ ให้นักเรียนนำผลการสำรวจเว็บไซต์ทั้ง 2 แห่งมาบันทึกลงในตารางเปรียบเทียบครบทั้ง 10 รายการตามสไลด์นี้ครับ ตั้งแต่ชื่อเว็บไซต์และ URL, ประเภทเว็บไซต์ (เว็บข้อมูล หรือ เว็บแอปพลิเคชัน), โลโก้และชื่อธุรกิจชัดเจนไหม, เมนูนำทางใช้งานง่ายไหม, ข้อมูลสินค้าหรือบริการครบถ้วนไหม, มีช่องทางติดต่อไหม, รองรับโทรศัพท์มือถือไหม, ใช้ HTTPS หรือไม่ ไปจนถึงสรุปจุดเด่นของเว็บไซต์ และจุดที่ควรปรับปรุง บนหน้าจอนี้ครูสามารถพิมพ์ตัวอย่างของกลุ่มตัวแทนขึ้นจอโปรเจกเตอร์ให้เพื่อน ๆ ดูไปพร้อมกันได้เลยครับ",
            extraExamples: "อย่าลืมแคปภาพหน้าจอ (Screenshot) ของเว็บไซต์ทั้ง 2 แห่งเก็บไว้ด้วยนะครับ เพราะเป็นหนึ่งในผลงานที่ต้องส่งท้ายคาบ",
            guidingQuestion: "จากการสำรวจทั้ง 10 ข้อ นักเรียนพบว่าเว็บไซต์ที่ 1 และเว็บไซต์ที่ 2 มีความแตกต่างกันชัดเจนที่สุดในเรื่องใดครับ?",
            expectedAnswer: "นักเรียนตอบตามผลการสำรวจจริง เช่น เว็บที่ 1 มีระบบตะกร้าสั่งซื้อและบอกราคาครบถ้วน ส่วนเว็บที่ 2 เป็นเว็บให้ข้อมูลและบางเมนูยังไม่มีราคา",
            interactiveGuide: "ครูหรือตัวแทนนักเรียนสามารถพิมพ์ชื่อเว็บไซต์ เลือกประเภท และบันทึกจุดเด่น/จุดที่ควรปรับปรุงลงในช่องกรอกบนสไลด์ได้โดยตรง",
            transitionNote: "เมื่อบันทึกตารางครบทั้ง 2 เว็บไซต์แล้ว ไปดูขั้นตอนที่ 5 (แลกเปลี่ยนกับเพื่อน) และขั้นตอนที่ 6 (วาดผัง Browser-Server) ในสไลด์ที่ 25 ครับ"
        },
        html: `
            <div class="col-split-6-4">
                <div class="table-container">
                    <table class="edu-table" aria-label="ตารางแนวทางบันทึกผลการสำรวจเปรียบเทียบเว็บไซต์ 2 แห่ง">
                        <thead>
                            <tr>
                                <th style="width:42%;">รายการตรวจสอบ (ครบ 10 ประเด็น)</th>
                                <th style="width:29%;">เว็บไซต์ที่ 1</th>
                                <th style="width:29%;">เว็บไซต์ที่ 2</th>
                            </tr>
                        </thead>
                        <tbody style="font-size:21px;">
                            <tr><td><strong>1. ชื่อเว็บไซต์และ URL</strong></td><td>ระบุชื่อและ URL เต็ม</td><td>ระบุชื่อและ URL เต็ม</td></tr>
                            <tr><td><strong>2. ประเภทเว็บไซต์</strong></td><td>เว็บข้อมูล / เว็บแอป</td><td>เว็บข้อมูล / เว็บแอป</td></tr>
                            <tr><td><strong>3. มีโลโก้และชื่อธุรกิจชัดเจน</strong></td><td>✓ ชัดเจน / ควรปรับปรุง</td><td>✓ ชัดเจน / ควรปรับปรุง</td></tr>
                            <tr><td><strong>4. เมนูนำทางใช้งานง่าย</strong></td><td>✓ หาง่าย / ลิงก์เสีย</td><td>✓ หาง่าย / ลิงก์เสีย</td></tr>
                            <tr><td><strong>5. ข้อมูลสินค้า/บริการครบถ้วน</strong></td><td>✓ มีรูป+ราคาครบ / ขาดราคา</td><td>✓ มีรูป+ราคาครบ / ขาดราคา</td></tr>
                            <tr><td><strong>6. มีช่องทางติดต่อ</strong></td><td>✓ เบอร์โทร/แชต/แผนที่</td><td>✓ เบอร์โทร/แชต/แผนที่</td></tr>
                            <tr><td><strong>7. รองรับโทรศัพท์มือถือ</strong></td><td>✓ พอดีจอ / ✗ ล้นจอ</td><td>✓ พอดีจอ / ✗ ล้นจอ</td></tr>
                            <tr><td><strong>8. ใช้ HTTPS</strong></td><td>🔒 ใช้ HTTPS / ไม่ใช้</td><td>🔒 ใช้ HTTPS / ไม่ใช้</td></tr>
                            <tr><td><strong>9. จุดเด่นของเว็บไซต์</strong></td><td>สรุปสิ่งที่ทำได้ดี</td><td>สรุปสิ่งที่ทำได้ดี</td></tr>
                            <tr><td><strong>10. จุดที่ควรปรับปรุง</strong></td><td>ปัญหา + วิธีแก้ไข</td><td>ปัญหา + วิธีแก้ไข</td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="card purple" style="justify-content:space-between; padding:18px 20px;">
                    <div>
                        <h3 class="card-title" style="font-size:28px;"><i class="fa-solid fa-pen-to-square"></i> ทดลองบันทึกผลเปรียบเทียบ</h3>
                        <p class="caption-text">สำหรับสาธิตบันทึกผลของกลุ่มตัวแทนหน้าชั้นเรียน</p>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:10px; background:#FFFFFF; border:2px solid #C4B5FD; border-radius:14px; padding:14px;">
                        <div>
                            <label for="wsSite1Input" class="caption-text" style="font-weight:700; color:#1E40AF;">เว็บไซต์ที่ 1 (ชื่อ &amp; URL):</label>
                            <input type="text" id="wsSite1Input" value="ร้านกาแฟ A (https://example-coffee1.com)" style="width:100%; min-width:0; padding:6px 10px; border:1.5px solid #93C5FD; border-radius:8px; font-family:var(--font-thai); font-size:20px;">
                        </div>
                        <div>
                            <label for="wsSite2Input" class="caption-text" style="font-weight:700; color:#5B21B6;">เว็บไซต์ที่ 2 (ชื่อ &amp; URL):</label>
                            <input type="text" id="wsSite2Input" value="ร้านเบเกอรี B (https://example-bakery2.com)" style="width:100%; min-width:0; padding:6px 10px; border:1.5px solid #C4B5FD; border-radius:8px; font-family:var(--font-thai); font-size:20px;">
                        </div>
                        <div>
                            <label for="wsFixInput" class="caption-text" style="font-weight:700; color:#065F46;">จุดที่ควรปรับปรุง &amp; แนวทางนำไปใช้กับร้านกาแฟ จ.แพร่:</label>
                            <input type="text" id="wsFixInput" value="เพิ่มราคาสินค้าให้ครบทุกเมนู และทำปุ่มโทร/แผนที่ให้กดง่ายบนมือถือ" style="width:100%; min-width:0; padding:6px 10px; border:1.5px solid #6EE7B7; border-radius:8px; font-family:var(--font-thai); font-size:20px;">
                        </div>
                    </div>

                    <div class="easy-explain" style="padding:10px 14px;">
                        <span class="easy-explain-badge"><i class="fa-solid fa-camera"></i> อย่าลืม!</span>
                        <span class="easy-explain-text" style="font-size:21px;">บันทึก<strong>ภาพหน้าจอ (Screenshot)</strong> ของเว็บไซต์ที่สำรวจไว้ประกอบการส่งงานด้วย</span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 25: 9. กิจกรรมฝึกปฏิบัติ — ขั้นตอนที่ 5–6 และผลงานที่ต้องส่งครบ 5 ชิ้นงาน
    // =========================================================================
    {
        slideId: "u1w2-s25",
        slideNumber: 25,
        title: "ขั้นตอนที่ 5–6 และสรุปผลงานที่ต้องส่ง (ครบ 5 รายการ)",
        section: "ส่วนที่ 5: กิจกรรมฝึกปฏิบัติ",
        layoutType: "Practical Task / Deliverables Checklist",
        teachingTime: 35,
        timeGuide: "35 นาที (ชั่วโมงที่ 4: แลกเปลี่ยนตรวจทานกับเพื่อน วาดผัง Browser-Server และตรวจเช็กชิ้นงาน)",
        kicker: "ส่วนที่ 5 กิจกรรมฝึกปฏิบัติ • หัวข้อที่ 9 (ขั้นตอนที่ 5–6 และการส่งมอบงาน)",
        badge: "Checklist ผลงานที่ต้องส่ง 5 ชิ้น",
        content: [
            "ขั้นตอนที่ 5 ทดสอบและปรับปรุงข้อเสนอแนะ: แลกเปลี่ยนผลการสำรวจกับเพื่อน และให้เพื่อนตรวจสอบข้อค้นพบ โดยบันทึกข้อผิดพลาดหรือประเด็นที่ควรปรับปรุงอย่างน้อย 2 ประเด็น จากนั้นปรับปรุงตารางวิเคราะห์หรือข้อเสนอแนะให้ชัดเจนยิ่งขึ้น",
            "ขั้นตอนที่ 6 วาดผังการทำงานของเว็บไซต์: วาดแผนภาพแสดงขั้นตอนการทำงานเมื่อผู้ใช้งานเปิดเว็บไซต์ โดยต้องมีองค์ประกอบสำคัญ ได้แก่ ผู้ใช้งาน, เว็บเบราว์เซอร์, คำขอ (Request), เว็บเซิร์ฟเวอร์, ข้อมูลตอบกลับ (Response) และการแสดงผลหน้าเว็บ",
            "ผลงานที่ต้องส่ง (5 รายการ): 1) ตารางวิเคราะห์เปรียบเทียบเว็บไซต์ธุรกิจ 2 แห่ง 2) ภาพหน้าจอเว็บไซต์ที่สำรวจ 3) ผังแสดงการรับส่งข้อมูลระหว่าง Browser และ Server 4) บันทึกข้อผิดพลาดอย่างน้อย 2 ประเด็น พร้อมแนวทางปรับปรุง 5) สรุปว่าองค์ประกอบใดควรนำไปใช้กับเว็บไซต์ร้านกาแฟในกรณีศึกษา พร้อมอธิบายเหตุผล"
        ],
        visualAssets: ["assets/diagrams/browser-server-5steps.svg"],
        interactiveType: "None",
        speakerNotes: {
            objective: "ให้นักเรียนแลกเปลี่ยนตรวจสอบผลงานกับเพื่อน วาดผังการทำงาน Browser–Server และตรวจสอบความครบถ้วนของผลงานทั้ง 5 รายการก่อนส่ง",
            explanationGuide: "เมื่อทำตารางเปรียบเทียบเสร็จแล้ว มาต่อที่ขั้นตอนที่ 5 และ 6 ครับ ขั้นตอนที่ 5 ให้แลกเปลี่ยนผลการสำรวจกับเพื่อนข้าง ๆ ให้เพื่อนช่วยตรวจข้อค้นพบ และบันทึกข้อผิดพลาดหรือประเด็นที่ควรปรับปรุงอย่างน้อย 2 ประเด็น แล้วนำมาปรับปรุงตารางของเราให้ชัดเจนขึ้น ขั้นตอนที่ 6 ให้นักเรียนวาดผังแสดงขั้นตอนการทำงานเมื่อผู้ใช้งานเปิดเว็บไซต์ โดยในผังต้องมีองค์ประกอบสำคัญครบ 6 คำนี้คือ: ผู้ใช้งาน, เว็บเบราว์เซอร์, คำขอ (Request), เว็บเซิร์ฟเวอร์, ข้อมูลตอบกลับ (Response) และการแสดงผลหน้าเว็บ สุดท้ายตรวจเช็กผลงานที่ต้องส่งในการ์ดด้านขวาให้ครบทั้ง 5 ชิ้นงานนะครับ",
            extraExamples: "ในรายการส่งงานข้อที่ 5 อย่าลืมสรุปเชื่อมโยงกลับไปที่โจทย์ด้วยว่า 'องค์ประกอบใดจากเว็บที่สำรวจที่ควรนำไปใช้กับเว็บไซต์ร้านกาแฟในจังหวัดแพร่ และเพราะเหตุใด'",
            guidingQuestion: "ในการวาดผังขั้นตอนที่ 6 ลูกศรที่ชี้จาก 'เว็บเบราว์เซอร์' ไปยัง 'เว็บเซิร์ฟเวอร์' ต้องเขียนกำกับว่าอะไร และลูกศรขากลับต้องเขียนกำกับว่าอะไรครับ?",
            expectedAnswer: "ขาไปเขียนกำกับว่า คำขอ (Request) และขากลับเขียนกำกับว่า ข้อมูลตอบกลับ (Response)",
            interactiveGuide: "ใช้ Checklist ด้านขวาให้นักเรียนตรวจสอบชิ้นงานของกลุ่มตนเองทีละข้อก่อนส่งมอบ",
            transitionNote: "เมื่อทำใบงานครบแล้ว เรามาทดสอบความรู้ท้ายบทเรียนด้วยกันในสไลด์ที่ 26 ครับ"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box"><span style="font-weight:800; font-family:var(--font-en);">5</span></div>
                            <div>
                                <h3 class="card-title">ทดสอบและปรับปรุงข้อเสนอแนะ</h3>
                                <p class="caption-text">แลกเปลี่ยนตรวจสอบผลการสำรวจกับเพื่อน</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:8px;">
                            แลกเปลี่ยนผลการสำรวจกับเพื่อนเพื่อตรวจสอบข้อค้นพบ โดย<strong>บันทึกข้อผิดพลาดหรือประเด็นที่ควรปรับปรุงอย่างน้อย 2 ประเด็น</strong> แล้วนำมาปรับปรุงตารางวิเคราะห์ให้ชัดเจนยิ่งขึ้น
                        </p>
                    </div>

                    <div style="border-top:2px dashed #93C5FD; padding-top:12px;">
                        <div class="card-icon-header">
                            <div class="icon-box purple"><span style="font-weight:800; font-family:var(--font-en);">6</span></div>
                            <div>
                                <h3 class="card-title">วาดผังการทำงานของเว็บไซต์</h3>
                                <p class="caption-text">แสดงขั้นตอนเมื่อผู้ใช้งานเปิดเว็บไซต์</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:8px;">
                            วาดแผนภาพโดยต้องมีองค์ประกอบสำคัญครบทั้ง 6 ส่วน:
                        </p>
                        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:8px;">
                            <span style="background:#DDEBFF; color:#1E40AF; padding:5px 12px; border-radius:8px; font-size:21px; font-weight:700;">1. ผู้ใช้งาน</span>
                            <span style="background:#DDEBFF; color:#1E40AF; padding:5px 12px; border-radius:8px; font-size:21px; font-weight:700;">2. เว็บเบราว์เซอร์</span>
                            <span style="background:#EDE5FF; color:#5B21B6; padding:5px 12px; border-radius:8px; font-size:21px; font-weight:700;">3. คำขอ (Request)</span>
                            <span style="background:#EDE5FF; color:#5B21B6; padding:5px 12px; border-radius:8px; font-size:21px; font-weight:700;">4. เว็บเซิร์ฟเวอร์</span>
                            <span style="background:#D5F5E8; color:#065F46; padding:5px 12px; border-radius:8px; font-size:21px; font-weight:700;">5. ข้อมูลตอบกลับ (Response)</span>
                            <span style="background:#D5F5E8; color:#065F46; padding:5px 12px; border-radius:8px; font-size:21px; font-weight:700;">6. การแสดงผลหน้าเว็บ</span>
                        </div>
                    </div>
                </div>

                <div class="card mint" style="justify-content:space-between;">
                    <div class="card-icon-header">
                        <div class="icon-box mint"><i class="fa-solid fa-list-check"></i></div>
                        <div>
                            <h3 class="card-title">ผลงานที่ต้องส่ง (ครบ 5 รายการ)</h3>
                            <p class="caption-text">ตรวจสอบความครบถ้วนก่อนส่งมอบงาน</p>
                        </div>
                    </div>

                    <div class="step-list" style="gap:8px;">
                        <div class="step-item" style="padding:8px 14px;">
                            <div class="step-num">1</div>
                            <div class="step-content"><p style="font-size:23px; color:#18243D;"><strong>ตารางวิเคราะห์เปรียบเทียบ</strong>เว็บไซต์ธุรกิจ 2 แห่ง</p></div>
                        </div>
                        <div class="step-item" style="padding:8px 14px;">
                            <div class="step-num">2</div>
                            <div class="step-content"><p style="font-size:23px; color:#18243D;"><strong>ภาพหน้าจอ (Screenshot)</strong> ของเว็บไซต์ที่สำรวจ</p></div>
                        </div>
                        <div class="step-item" style="padding:8px 14px;">
                            <div class="step-num">3</div>
                            <div class="step-content"><p style="font-size:23px; color:#18243D;"><strong>ผังแสดงการรับส่งข้อมูล</strong>ระหว่าง Browser และ Server</p></div>
                        </div>
                        <div class="step-item" style="padding:8px 14px;">
                            <div class="step-num">4</div>
                            <div class="step-content"><p style="font-size:23px; color:#18243D;"><strong>บันทึกข้อผิดพลาดอย่างน้อย 2 ประเด็น</strong> พร้อมแนวทางปรับปรุง</p></div>
                        </div>
                        <div class="step-item" style="padding:8px 14px;">
                            <div class="step-num">5</div>
                            <div class="step-content"><p style="font-size:23px; color:#18243D;"><strong>สรุปว่าองค์ประกอบใดควรนำไปใช้กับเว็บไซต์ร้านกาแฟในกรณีศึกษา</strong> พร้อมอธิบายเหตุผล</p></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 26: แบบทดสอบทบทวนความรู้ท้ายสัปดาห์ที่ 2 (Interactive Knowledge Check 10 ข้อ)
    // =========================================================================
    {
        slideId: "u1w2-s26",
        slideNumber: 26,
        title: "แบบทดสอบทบทวนความรู้ประจำสัปดาห์ที่ 2 (10 ข้อ)",
        section: "สรุปและประเมินผลการเรียนรู้",
        layoutType: "Knowledge Check (Interactive Quiz)",
        teachingTime: 10,
        timeGuide: "10 นาที (ชั่วโมงที่ 4: ทดสอบความเข้าใจครบทั้ง 5 จุดประสงค์การเรียนรู้)",
        kicker: "การประเมินผลการเรียนรู้ • แบบทดสอบปรนัย 10 ข้อ พร้อมเฉลยและคำอธิบาย",
        badge: "ตรวจคำตอบ & ดูเหตุผลได้ทันที",
        content: [
            "แบบทดสอบทบทวนความรู้ 10 ข้อ ครอบคลุมการทำงานระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์, ระบบ DNS, Request/Response, ความสัมพันธ์ของ URL/Domain/Hosting/HTTPS, ความต่างของเว็บไซต์แบบข้อมูลกับเว็บแอปพลิเคชัน และการวิเคราะห์คุณภาพเว็บไซต์ธุรกิจ"
        ],
        visualAssets: [],
        interactiveType: "Knowledge Check",
        speakerNotes: {
            objective: "ประเมินความเข้าใจของนักเรียนตามจุดประสงค์การเรียนรู้ทั้ง 5 ข้อผ่านแบบทดสอบ Interactive 10 ข้อ",
            explanationGuide: "มาทดสอบความเข้าใจกันด้วยแบบทดสอบ 10 ข้อครับ! นักเรียนช่วยกันอ่านโจทย์และเลือกคำตอบ ก, ข, ค หรือ ง ได้เลย พอกดเลือกปุ๊บ ระบบจะตรวจคำตอบทันทีพร้อมอธิบายเหตุผลว่าทำไมข้อนั้นถึงถูก และสามารถกดปุ่มหมายเลขข้อ 1–10 ด้านซ้ายมือเพื่อข้ามไปข้อที่ต้องการ หรือกด 'เริ่มทำใหม่' เพื่อทบทวนซ้ำได้ตลอดเวลาครับ",
            extraExamples: "ครูสามารถให้นักเรียนยกมือโหวตคำตอบก่อนที่ครูจะคลิกตัวเลือกบนหน้าจอโปรเจกเตอร์เพื่อสร้างการมีส่วนร่วมทั้งชั้นเรียน",
            guidingQuestion: "ข้อใดใน 10 ข้อนี้ที่นักเรียนคิดว่าต้องระวังสับสนมากที่สุด?",
            expectedAnswer: "ข้อที่เกี่ยวกับความเข้าใจว่า 'ไม่ใช่ทุกการคลิกต้องส่ง Request ไปเซิร์ฟเวอร์' และ 'การใช้ HTTPS ไม่ได้ยืนยันว่าผู้ขายสุจริตเสมอไป'",
            interactiveGuide: "คลิกตัวเลือกคำตอบในแต่ละข้อ หรือคลิกปุ่ม 'เฉลยทุกข้อ' เพื่อสรุปคำตอบทั้งหมด",
            transitionNote: "หลังจากทำแบบทดสอบเสร็จแล้ว เราไปสรุปภาพรวมความรู้ทั้งหมดของสัปดาห์ที่ 2 ในสไลด์ที่ 27 กันครับ"
        },
        html: `
            <div class="quiz-wrapper" id="quizApp">
                <div class="quiz-sidebar">
                    <div class="quiz-score-card">
                        <div class="caption-text" style="color:#E0E7FF;">คะแนนรวมของคุณ</div>
                        <div class="quiz-score-num"><span id="quizScoreVal">0</span> / 10</div>
                        <div id="quizProgressText" class="caption-text" style="color:#F1F5F9;">ตอบแล้ว 0/10 ข้อ</div>
                    </div>

                    <div>
                        <div class="caption-text" style="font-weight:700; margin-bottom:6px; color:#18243D;">เลือกข้อคำถาม (1–10):</div>
                        <div class="quiz-nav-grid" id="quizNavDots"></div>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <button type="button" id="btnQuizCheckAll" class="ctrl-btn primary" style="justify-content:center; padding:8px; font-size:21px;">
                            <i class="fa-solid fa-check-double"></i> เฉลยทุกข้อ
                        </button>
                        <button type="button" id="btnQuizReset" class="ctrl-btn" style="justify-content:center; padding:8px; font-size:21px;">
                            <i class="fa-solid fa-rotate-left"></i> เริ่มทำใหม่
                        </button>
                    </div>
                </div>

                <div class="quiz-main">
                    <div>
                        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                            <span id="quizQBadge" style="background:var(--accent-blue); color:#1E40AF; padding:4px 14px; border-radius:999px; font-size:21px; font-weight:700;">ข้อที่ 1 จาก 10</span>
                            <span id="quizQStatus" class="caption-text" style="font-weight:700;">เลือกคำตอบที่ถูกต้องที่สุด</span>
                        </div>
                        <h3 class="quiz-question-title" id="quizQuestionText">กำลังโหลดคำถาม...</h3>
                    </div>

                    <div class="quiz-options" id="quizOptionsBox"></div>

                    <div class="quiz-explanation" id="quizExplanationBox" style="display:none;"></div>

                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <button type="button" id="btnQuizPrev" class="ctrl-btn" style="font-size:21px; padding:7px 16px;"><i class="fa-solid fa-arrow-left"></i> ข้อก่อนหน้า</button>
                        <button type="button" id="btnQuizNext" class="ctrl-btn primary" style="font-size:21px; padding:7px 16px;">ข้อถัดไป <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 27: สรุปสาระสำคัญประจำสัปดาห์ที่ 2 (Lesson Summary)
    // =========================================================================
    {
        slideId: "u1w2-s27",
        slideNumber: 27,
        title: "สรุปสาระสำคัญ: การทำงานของเว็บไซต์และการวิเคราะห์เว็บธุรกิจ",
        section: "สรุปและประเมินผลการเรียนรู้",
        layoutType: "Lesson Summary",
        teachingTime: 5,
        timeGuide: "5 นาที (ชั่วโมงที่ 4: สรุปรวบยอดทั้ง 5 ส่วนของบทเรียน)",
        kicker: "สรุปบทเรียนประจำสัปดาห์ที่ 2 • Mind Map 5 แกนความรู้สำคัญ",
        badge: "Lesson Summary",
        content: [
            "ส่วนที่ 1 การทำงานของเว็บไซต์: 5 ขั้นตอน (เปิดเบราว์เซอร์/DNS ➔ ส่ง Request ➔ เซิร์ฟเวอร์ประมวลผล ➔ ส่งกลับ Response HTML/CSS/JS/รูป ➔ แสดงผล) และความสัมพันธ์ของ URL, Domain, Hosting และ HTTPS (TLS)",
            "ส่วนที่ 2 ประเภทของเว็บไซต์: เว็บไซต์แบบข้อมูล (เน้นให้อ่านข้อมูลชัดเจน) vs เว็บแอปพลิเคชัน (โต้ตอบ ทำกิจกรรม สั่งซื้อ เชื่อมฐานข้อมูล) ซึ่งสามารถอยู่ร่วมกันในเว็บไซต์เดียวได้",
            "ส่วนที่ 3 องค์ประกอบเว็บไซต์ธุรกิจ 7 ส่วน: Header, Navigation, Hero Section, Product/Service, CTA, Contact และ Footer",
            "ส่วนที่ 4 เกณฑ์ประเมินคุณภาพ 6 ด้าน: ข้อมูลถูกต้องครบถ้วน, ใช้งานง่าย (Usability), รองรับมือถือ (Mobile-Friendly), น่าเชื่อถือและปลอดภัย, โหลดเร็ว และบรรลุเป้าหมายธุรกิจ"
        ],
        visualAssets: ["assets/diagrams/hero-how-web-works.svg"],
        interactiveType: "None",
        speakerNotes: {
            objective: "สรุปเชื่อมโยงเนื้อหาทั้ง 5 ส่วนของสัปดาห์ที่ 2 ให้นักเรียนเห็นภาพรวมอย่างเป็นระบบ",
            explanationGuide: "มาสรุปภาพรวมของสัปดาห์ที่ 2 กันในหน้าเดียวครับ วันนี้เราได้เรียนรู้ครบทั้ง 4 แกนทฤษฎีและ 1 กิจกรรมปฏิบัติ: 1) การทำงาน 5 ขั้นตอนระหว่าง Browser กับ Server และบทบาทของ URL, Domain, Hosting, HTTPS 2) การแยกแยะเว็บไซต์แบบข้อมูลกับเว็บแอปพลิเคชันเพื่อเลือกใช้ให้เหมาะกับธุรกิจ 3) การตรวจสอบองค์ประกอบเว็บไซต์ทั้ง 7 ส่วน และ 4) การประเมินคุณภาพเว็บไซต์ธุรกิจ 6 ด้าน โดยจำไว้เสมอว่าการวิเคราะห์เว็บต้องบอกให้ได้ว่า พบปัญหาอะไร ส่งผลต่อผู้ใช้อย่างไร และควรปรับปรุงอย่างไรครับ",
            extraExamples: "ความรู้ทั้งหมดในสัปดาห์ที่ 1 และ 2 นี้ คือรากฐานสำคัญที่สุดก่อนที่เราจะเริ่มลงมือวางแผนและสร้างหน้าเว็บไซต์ของจริงในหน่วยถัดไป",
            guidingQuestion: "ถ้าต้องสรุปสั้น ๆ 1 ประโยคว่า 'เว็บไซต์ธุรกิจที่ดีคืออะไร' นักเรียนจะสรุปว่าอย่างไรครับ?",
            expectedAnswer: "คือเว็บไซต์ที่แสดงข้อมูลถูกต้องครบถ้วน ใช้งานง่ายทั้งบนคอมและมือถือ ปลอดภัย และช่วยให้ลูกค้าติดต่อหรือสั่งซื้อสินค้าได้ตามเป้าหมายของธุรกิจ",
            interactiveGuide: "ทบทวนทั้ง 4 การ์ดสรุปหลักบนสไลด์ร่วมกับนักเรียน",
            transitionNote: "ไปปิดท้ายคาบเรียนด้วยคำถามสะท้อนคิด (Reflection Questions) ในสไลด์ที่ 28 กันครับ"
        },
        html: `
            <div class="grid-2" style="gap:16px;">
                <div class="card blue" style="padding:14px 20px; gap:6px;">
                    <div class="card-icon-header">
                        <div class="icon-box" style="width:44px; height:44px; font-size:21px;"><i class="fa-solid fa-server"></i></div>
                        <div>
                            <h3 class="card-title" style="font-size:28px;">1. การทำงานของเว็บ &amp; URL / HTTPS</h3>
                            <p class="caption-text" style="font-size:20px;">กลไกเบื้องหลังการเปิดหน้าเว็บ</p>
                        </div>
                    </div>
                    <p class="card-text" style="font-size:23px;">
                        • <strong>5 ขั้นตอน:</strong> เปิดเบราว์เซอร์ (ค้นหา IP ผ่าน DNS) ➔ ส่งคำขอ (<strong>Request</strong>) ➔ เว็บเซิร์ฟเวอร์รับคำขอ ➔ ส่งข้อมูลกลับ (<strong>Response</strong>: HTML, CSS, JS, รูปภาพ) ➔ เบราว์เซอร์แสดงผล<br>
                        • <strong>URL + Domain + Hosting + HTTPS (TLS):</strong> ทำงานร่วมกันเพื่อระบุตำแหน่ง จัดเก็บไฟล์ และเข้ารหัสข้อมูล (ตรวจความน่าเชื่อถือผู้ขายร่วมด้วยเสมอ)
                    </p>
                </div>

                <div class="card purple" style="padding:14px 20px; gap:6px;">
                    <div class="card-icon-header">
                        <div class="icon-box purple" style="width:44px; height:44px; font-size:21px;"><i class="fa-solid fa-layer-group"></i></div>
                        <div>
                            <h3 class="card-title" style="font-size:28px;">2. เว็บไซต์แบบข้อมูล vs เว็บแอปพลิเคชัน</h3>
                            <p class="caption-text" style="font-size:20px;">เลือกประเภทให้เหมาะกับความต้องการธุรกิจ</p>
                        </div>
                    </div>
                    <p class="card-text" style="font-size:23px;">
                        • <strong>เว็บไซต์แบบข้อมูล:</strong> มุ่งนำเสนอข้อมูลให้อ่านชัดเจน (เช่น เว็บแนะนำร้านกาแฟ จ.แพร่)<br>
                        • <strong>เว็บแอปพลิเคชัน:</strong> ผู้ใช้ทำกิจกรรมผ่านระบบได้ เช่น เลือกความหวาน ใส่ตะกร้า สั่งซื้อ และเชื่อมฐานข้อมูล<br>
                        • เว็บไซต์หนึ่งแห่งสามารถ<strong>ผสมผสานทั้งสองรูปแบบ</strong>เข้าด้วยกันได้
                    </p>
                </div>

                <div class="card mint" style="padding:14px 20px; gap:6px;">
                    <div class="card-icon-header">
                        <div class="icon-box mint" style="width:44px; height:44px; font-size:21px;"><i class="fa-solid fa-table-columns"></i></div>
                        <div>
                            <h3 class="card-title" style="font-size:28px;">3. องค์ประกอบสำคัญ 7 ส่วน</h3>
                            <p class="caption-text" style="font-size:20px;">โครงสร้างที่ช่วยให้ลูกค้าใช้งานสะดวก</p>
                        </div>
                    </div>
                    <p class="card-text" style="font-size:23px;">
                        <strong>1) Header</strong> (ชื่อร้าน/โลโก้) • <strong>2) Navigation</strong> (เมนูนำทางชัดเจน) • <strong>3) Hero Section</strong> (จุดเด่นร้าน) • <strong>4) Product/Service</strong> (รูป+ราคาครบ) • <strong>5) ปุ่ม CTA</strong> (กระตุ้นการตัดสินใจ) • <strong>6) Contact</strong> (ติดต่อได้จริง) • <strong>7) Footer</strong> (ที่อยู่/ลิงก์/ลิขสิทธิ์)
                    </p>
                </div>

                <div class="card amber" style="padding:14px 20px; gap:6px;">
                    <div class="card-icon-header">
                        <div class="icon-box amber" style="width:44px; height:44px; font-size:21px;"><i class="fa-solid fa-award"></i></div>
                        <div>
                            <h3 class="card-title" style="font-size:28px;">4. เกณฑ์คุณภาพเว็บไซต์ธุรกิจ 6 ด้าน</h3>
                            <p class="caption-text" style="font-size:20px;">มากกว่าความสวยงามคือการใช้งานได้จริง</p>
                        </div>
                    </div>
                    <p class="card-text" style="font-size:23px;">
                        <strong>7.1</strong> ข้อมูลถูกต้องและเป็นปัจจุบัน • <strong>7.2</strong> ใช้งานง่าย (Usability) • <strong>7.3</strong> รองรับโทรศัพท์มือถือ (Mobile-Friendly) • <strong>7.4</strong> น่าเชื่อถือและปลอดภัย • <strong>7.5</strong> แสดงผลรวดเร็ว • <strong>7.6</strong> ช่วยให้ธุรกิจบรรลุเป้าหมาย
                    </p>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 28: คำถามสะท้อนคิดท้ายบทเรียน & จบการนำเสนอ (Reflection & End Slide)
    // =========================================================================
    {
        slideId: "u1w2-s28",
        slideNumber: 28,
        title: "คำถามสะท้อนคิด (Reflection) & เตรียมพร้อมสู่การสร้างเว็บไซต์จริง",
        section: "สรุปและประเมินผลการเรียนรู้",
        layoutType: "Reflection Questions & End Slide",
        teachingTime: 5,
        timeGuide: "5 นาที (ชั่วโมงที่ 4: อภิปรายสรุปผลการสำรวจเว็บไซต์จริงและเชื่อมโยงสัปดาห์ถัดไป)",
        kicker: "ท้ายคาบเรียนสัปดาห์ที่ 2 • อภิปรายแลกเปลี่ยนเรียนรู้",
        badge: "จบหน่วยที่ 1 (สัปดาห์ที่ 2)",
        content: [
            "คำถามสะท้อนคิดข้อที่ 1: จากการสำรวจเว็บไซต์ธุรกิจจริง 2 แห่ง ปัญหาใดที่นักเรียนพบเหมือนกันมากที่สุด และส่งผลต่อลูกค้าอย่างไร?",
            "คำถามสะท้อนคิดข้อที่ 2: หากนักเรียนต้องออกแบบเว็บไซต์ให้ร้านกาแฟในจังหวัดแพร่ นักเรียนจะนำองค์ประกอบเด่นข้อใดจากเว็บที่สำรวจมาใช้เป็นอันดับแรก?",
            "คำถามสะท้อนคิดข้อที่ 3: ทำไมผู้พัฒนาเว็บไซต์จึงต้องเข้าใจทั้งมุมมองการทำงานของระบบ (Browser-Server) และมุมมองของผู้ใช้งาน (Usability & Mobile-Friendly)?"
        ],
        visualAssets: ["assets/diagrams/hero-how-web-works.svg"],
        interactiveType: "None",
        speakerNotes: {
            objective: "กระตุ้นให้นักเรียนสะท้อนคิดจากประสบการณ์การสำรวจเว็บไซต์จริง 2 แห่ง และเชื่อมโยงไปสู่การลงมือออกแบบและสร้างเว็บไซต์ในหน่วยถัดไป",
            explanationGuide: "ก่อนจบคาบเรียนในสัปดาห์ที่ 2 นี้ ครูฝากคำถามสะท้อนคิด 3 ข้อให้ตัวแทนแต่ละกลุ่มช่วยกันแชร์ครับ ข้อ 1 จากเว็บจริง 2 แห่งที่เราสำรวจวันนี้ ปัญหาอะไรที่เจอบ่อยที่สุด? ข้อ 2 ถ้าเราจะทำเว็บให้ร้านกาแฟในจังหวัดแพร่ เราจะหยิบจุดเด่นอะไรมาใช้เป็นอันดับแรก? และข้อ 3 ทำไมคนทำเว็บอย่างพวกเราถึงต้องเข้าใจทั้งระบบหลังบ้าน (Browser-Server) และความรู้สึกของลูกค้าหน้าบ้านไปพร้อมกัน? ขอบคุณนักเรียนทุกคนที่ตั้งใจเรียนและทำกิจกรรมวิเคราะห์เว็บไซต์ในวันนี้ครับ อย่าลืมส่งผลงานทั้ง 5 รายการให้ครบถ้วน แล้วพบกันในสัปดาห์ถัดไปครับ!",
            extraExamples: "ครูสามารถนำผลงานการวิเคราะห์ที่โดดเด่นของนักเรียน 1–2 กลุ่มมาชื่นชมหน้าชั้นเรียนเพื่อเป็นแรงบันดาลใจ",
            guidingQuestion: "องค์ประกอบใดที่ทุกกลุ่มเห็นตรงกันว่า 'ขาดไม่ได้เลย' สำหรับเว็บไซต์ร้านกาแฟในจังหวัดแพร่?",
            expectedAnswer: "ส่วนแนะนำเมนูเครื่องดื่มพร้อมราคาที่ชัดเจน ปุ่มติดต่อร้าน/แผนที่ที่กดใช้งานได้จริง และหน้าเว็บที่เปิดอ่านบนมือถือได้สะดวก",
            interactiveGuide: "สามารถกดปุ่ม Save as PDF บนแถบด้านบนเพื่อบันทึกสไลด์ทั้งหมดเป็นเอกสารทบทวนได้ทันที",
            transitionNote: "จบการนำเสนอประจำสัปดาห์ที่ 2"
        },
        html: `
            <div class="grid-3">
                <div class="card blue">
                    <div class="card-icon-header">
                        <div class="icon-box"><i class="fa-solid fa-comments"></i></div>
                        <h3 class="card-title">คำถามชวนคิดที่ 1</h3>
                    </div>
                    <p class="body-text">
                        จากการสำรวจเว็บไซต์ธุรกิจจริง 2 แห่งในวันนี้ <strong>ปัญหาใดที่กลุ่มของนักเรียนพบมากที่สุด</strong> และปัญหานั้นส่งผลกระทบต่อลูกค้าอย่างไร?
                    </p>
                    <div style="background:#EFF6FF; border-radius:12px; padding:12px 14px;" class="caption-text">
                        เช่น ไม่มีราคาสินค้า, ตัวอักษรบนมือถือเล็กเกินไป หรือลิงก์ติดต่อใช้งานไม่ได้
                    </div>
                </div>

                <div class="card purple">
                    <div class="card-icon-header">
                        <div class="icon-box purple"><i class="fa-solid fa-lightbulb"></i></div>
                        <h3 class="card-title">คำถามชวนคิดที่ 2</h3>
                    </div>
                    <p class="body-text">
                        หากต้องสร้างเว็บไซต์ให้<strong>ร้านกาแฟในจังหวัดแพร่</strong> นักเรียนจะนำ<strong>องค์ประกอบเด่นข้อใด</strong>จากเว็บไซต์ที่สำรวจมาประยุกต์ใช้เป็นอันดับแรก เพราะเหตุใด?
                    </p>
                    <div style="background:#F5F3FF; border-radius:12px; padding:12px 14px;" class="caption-text">
                        เชื่อมโยงสู่ผลงานที่ต้องส่งในรายการที่ 5 ของใบงาน
                    </div>
                </div>

                <div class="card mint">
                    <div class="card-icon-header">
                        <div class="icon-box mint"><i class="fa-solid fa-rocket"></i></div>
                        <h3 class="card-title">คำถามชวนคิดที่ 3</h3>
                    </div>
                    <p class="body-text">
                        ทำไมผู้สร้างเว็บไซต์ธุรกิจจึงต้องเข้าใจทั้ง<strong>การทำงานเบื้องหลัง (Browser–Server)</strong> และ<strong>คุณภาพการใช้งานหน้าบ้าน (Usability &amp; Mobile-Friendly)</strong> ควบคู่กัน?
                    </p>
                    <div style="background:#ECFDF5; border-radius:12px; padding:12px 14px;" class="caption-text">
                        เพื่อให้สร้างเว็บไซต์ที่ทำงานได้จริง ปลอดภัย และตอบโจทย์ลูกค้า
                    </div>
                </div>
            </div>

            <div style="background:linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%); color:#FFFFFF; border-radius:16px; padding:16px 24px; display:flex; align-items:center; justify-content:space-between;">
                <div>
                    <div style="font-size:26px; font-weight:800;"><i class="fa-solid fa-circle-check"></i> จบการเรียนรู้ หน่วยที่ 1 (สัปดาห์ที่ 2): การทำงานของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจ</div>
                    <div class="caption-text" style="color:#E0E7FF;">รายวิชา 21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล • ระดับประกาศนียบัตรวิชาชีพ (ปวช.2)</div>
                </div>
                <button type="button" class="ctrl-btn" onclick="window.scrollTo(0,0); document.getElementById('btnFirst').click();" style="font-size:20px; padding:10px 18px;">
                    <i class="fa-solid fa-rotate-left"></i> กลับสู่สไลด์แรก
                </button>
            </div>
        `
    }
);

// =============================================================================
// QUIZ QUESTIONS (10 ข้อ ครอบคลุมครบทุกหัวข้อและจุดประสงค์การเรียนรู้)
// =============================================================================
const QUIZ_QUESTIONS = [
    {
        id: 1,
        question: "1. เมื่อผู้ใช้งานพิมพ์ชื่อโดเมนของเว็บไซต์ลงในเว็บเบราว์เซอร์ ระบบใดทำหน้าที่ค้นหาหมายเลข IP Address ของเซิร์ฟเวอร์ปลายทาง?",
        options: [
            "ก. ระบบ CSS",
            "ข. ระบบ DNS (Domain Name System)",
            "ค. ระบบ HTML",
            "ง. ระบบ Call to Action (CTA)"
        ],
        correctIndex: 1,
        explanation: "ระบบ DNS (Domain Name System) ทำหน้าที่แปลงชื่อโดเมนของเว็บไซต์ให้เป็นหมายเลข IP Address ที่เกี่ยวข้องกับเซิร์ฟเวอร์ปลายทาง เพื่อให้เบราว์เซอร์ติดต่อได้ถูกต้อง"
    },
    {
        id: 2,
        question: "2. ข้อใดเรียงลำดับขั้นตอนการทำงานพื้นฐานของเว็บไซต์ได้ถูกต้อง?",
        options: [
            "ก. เปิดเบราว์เซอร์/DNS ➔ ส่งคำขอ (Request) ➔ เซิร์ฟเวอร์รับคำขอ ➔ ส่งข้อมูลกลับ (Response) ➔ เบราว์เซอร์แสดงผล",
            "ข. เซิร์ฟเวอร์ส่ง Response ➔ เปิดเบราว์เซอร์ ➔ ส่ง Request ➔ ค้นหา DNS ➔ แสดงผล",
            "ค. เปิดเบราว์เซอร์ ➔ แสดงผลหน้าเว็บ ➔ ส่ง Request ➔ เซิร์ฟเวอร์ส่ง Response",
            "ง. ส่งข้อมูลกลับ (Response) ➔ ส่งคำขอ (Request) ➔ ค้นหา DNS ➔ เบราว์เซอร์แสดงผล"
        ],
        correctIndex: 0,
        explanation: "ลำดับการทำงาน 5 ขั้นตอนคือ 1) ผู้ใช้เปิดเบราว์เซอร์พิมพ์ URL และค้นหาผ่าน DNS 2) เบราว์เซอร์ส่งคำขอ (Request) 3) เว็บเซิร์ฟเวอร์รับและจัดการคำขอ 4) เซิร์ฟเวอร์ส่งข้อมูลกลับ (Response) และ 5) เบราว์เซอร์ประมวลผลและแสดงผลเว็บไซต์"
    },
    {
        id: 3,
        question: "3. ในขั้นตอนที่เซิร์ฟเวอร์ส่งข้อมูลกลับ (Response) ไฟล์ชนิดใดทำหน้าที่กำหนด 'โครงสร้างหน้าเว็บ' และไฟล์ชนิดใดกำหนด 'รูปแบบและสีสัน' ตามลำดับ?",
        options: [
            "ก. CSS และ HTML",
            "ข. JavaScript และ DNS",
            "ค. HTML และ CSS",
            "ง. HTTPS และ HTML"
        ],
        correctIndex: 2,
        explanation: "ไฟล์ HTML ทำหน้าที่กำหนดโครงสร้างหน้าเว็บ ส่วนไฟล์ CSS ทำหน้าที่กำหนดรูปแบบและสีสัน (และไฟล์ JavaScript เพิ่มความสามารถในการโต้ตอบ)"
    },
    {
        id: 4,
        question: "4. ข้อใดกล่าวถูกต้องเกี่ยวกับการคลิกปุ่มบนหน้าเว็บไซต์และการส่งคำขอ (Request) ไปยังเซิร์ฟเวอร์?",
        options: [
            "ก. ทุกครั้งที่คลิกปุ่มใด ๆ บนหน้าเว็บ จะต้องส่งคำขอ (Request) ไปยังเซิร์ฟเวอร์เสมอ",
            "ข. ไม่ใช่ทุกครั้งที่คลิกปุ่มต้องส่งคำขอไปเซิร์ฟเวอร์ เพราะบางการทำงาน เช่น เปิดเมนูหรือซ่อนข้อความ ทำงานในเบราว์เซอร์ได้โดยตรง",
            "ค. การคลิกปุ่มบนเว็บไซต์ไม่เคยส่งคำขอไปยังเซิร์ฟเวอร์เลย",
            "ง. เฉพาะเว็บไซต์ที่ไม่มีรูปภาพเท่านั้นที่ส่งคำขอไปยังเซิร์ฟเวอร์ได้"
        ],
        correctIndex: 1,
        explanation: "ตามเนื้อหาข้อ 3.3 ไม่ใช่ทุกครั้งที่คลิกปุ่มแล้วจะต้องส่งคำขอไปยังเซิร์ฟเวอร์ เพราะบางการทำงาน เช่น การเปิดเมนูหรือซ่อนข้อความ สามารถทำงานภายในเบราว์เซอร์ได้โดยตรง"
    },
    {
        id: 5,
        question: "5. จาก URL สมมติ https://www.baancoffee.example/menu ส่วนใดคือเส้นทางที่ระบุหน้าเมนูเครื่องดื่ม และส่วนใดแสดงรูปแบบการเชื่อมต่อแบบเข้ารหัส?",
        options: [
            "ก. www.baancoffee.example และ /menu",
            "ข. /menu และ https://",
            "ค. https:// และ www.baancoffee.example",
            "ง. .example และ www"
        ],
        correctIndex: 1,
        explanation: "/menu เป็นเส้นทางไปยังหน้าเมนูเครื่องดื่ม ส่วน https:// แสดงรูปแบบการเชื่อมต่อแบบเข้ารหัสข้อมูล"
    },
    {
        id: 6,
        question: "6. ข้อใดกล่าวถูกต้องที่สุดเกี่ยวกับการใช้ HTTPS บนเว็บไซต์ธุรกิจ?",
        options: [
            "ก. เว็บไซต์ที่ใช้ HTTPS ยืนยันได้ 100% ว่าเจ้าของร้านเป็นผู้ขายที่สุจริตแน่นอน",
            "ข. HTTPS ใช้การเข้ารหัส TLS เพื่อปกป้องข้อมูลระหว่างรับส่ง แต่ไม่ได้ยืนยันว่าผู้ขายสุจริตเสมอไป จึงต้องตรวจข้อมูลร้านค้าร่วมด้วย",
            "ค. HTTPS มีไว้เพื่อทำให้รูปภาพในเว็บไซต์มีขนาดไฟล์ใหญ่ขึ้น",
            "ง. เว็บไซต์ที่มีการรับส่งชื่อ เบอร์โทรศัพท์ และที่อยู่จัดส่ง ไม่จำเป็นต้องใช้ HTTPS"
        ],
        correctIndex: 1,
        explanation: "HTTPS ใช้การเข้ารหัส TLS เพื่อปกป้องข้อมูลระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์ แต่ไม่ได้ยืนยันว่าเจ้าของเว็บไซต์เป็นผู้ขายที่สุจริตเสมอไป จึงควรตรวจสอบชื่อโดเมน ข้อมูลร้านค้า และความน่าเชื่อถือร่วมด้วย"
    },
    {
        id: 7,
        question: "7. ร้านกาแฟในจังหวัดแพร่ต้องการสร้างเว็บไซต์เพื่อแสดงประวัติร้าน เวลาเปิด–ปิด แผนที่ และรายการเมนูเครื่องดื่ม โดยยังไม่ต้องมีระบบสั่งซื้อออนไลน์ ควรเลือกสร้างเว็บไซต์ประเภทใด?",
        options: [
            "ก. เว็บไซต์แบบข้อมูล (Informational Website)",
            "ข. ระบบฐานข้อมูลธนาคารออนไลน์",
            "ค. เกมออนไลน์สามมิติ",
            "ง. ระบบปฏิบัติการเครือข่าย"
        ],
        correctIndex: 0,
        explanation: "เว็บไซต์แบบข้อมูล (Informational Website) เหมาะสำหรับธุรกิจที่มุ่งนำเสนอเนื้อหาให้ผู้เข้าชมอ่าน เช่น ประวัติร้าน รายละเอียดสินค้า เวลาเปิด–ปิด และช่องทางติดต่อ โดยไม่จำเป็นต้องมีระบบประมวลผลซับซ้อน"
    },
    {
        id: 8,
        question: "8. ปุ่มหรือลิงก์ที่ช่วยนำผู้ใช้งานไปสู่กิจกรรมที่ธุรกิจต้องการ เช่น 'สั่งซื้อเลย' 'ดูเมนูทั้งหมด' หรือ 'จองคิว' เรียกว่าองค์ประกอบใด?",
        options: [
            "ก. ส่วนท้ายเว็บไซต์ (Footer)",
            "ข. ปุ่มกระตุ้นการดำเนินการ (Call to Action: CTA)",
            "ค. ระบบค้นหาชื่อโดเมน (DNS)",
            "ง. ส่วนหัวเว็บไซต์ (Header)"
        ],
        correctIndex: 1,
        explanation: "Call to Action (CTA) คือปุ่มหรือลิงก์ที่ช่วยนำผู้ใช้งานไปสู่กิจกรรมที่ธุรกิจต้องการ เช่น 'สั่งซื้อเลย' 'ดูเมนูทั้งหมด' 'จองคิว' หรือ 'ติดต่อร้าน'"
    },
    {
        id: 9,
        question: "9. ลักษณะในข้อใดแสดงว่าเว็บไซต์นั้น 'รองรับโทรศัพท์มือถือ (Mobile-Friendly)'?",
        options: [
            "ก. ตัวอักษรขนาดเล็กมากและต้องเลื่อนหน้าจอในแนวนอนตลอดเวลาเพื่ออ่านข้อความ",
            "ข. รูปภาพสินค้าล้นออกนอกขอบจอมือถือ",
            "ค. ข้อความอ่านง่าย รูปภาพพอดีหน้าจอ และปุ่มมีขนาดเหมาะสมสำหรับการสัมผัส",
            "ง. เปิดดูได้เฉพาะบนคอมพิวเตอร์ตั้งโต๊ะเท่านั้น"
        ],
        correctIndex: 2,
        explanation: "เว็บไซต์ที่รองรับมือถือ (Mobile-Friendly) จะแสดงข้อความอ่านง่าย รูปภาพพอดีหน้าจอ ไม่ต้องเลื่อนหน้าจอแนวนอนเพื่ออ่านข้อความทั่วไป และปุ่มกดสัมผัสได้สะดวก"
    },
    {
        id: 10,
        question: "10. ในการทำกิจกรรมวิเคราะห์เว็บไซต์ธุรกิจ ข้อใดคือหลักการวิเคราะห์ที่ถูกต้องที่สุด?",
        options: [
            "ก. บอกเพียงสั้น ๆ ว่าเว็บไซต์สีสวยหรือไม่สวย",
            "ข. นำข้อมูลลูกค้าจริงและรหัสผ่านจริงของผู้อื่นมาทดลองกรอกในเว็บไซต์",
            "ค. อธิบายได้ว่าพบปัญหาอะไร ปัญหานั้นส่งผลต่อผู้ใช้งานอย่างไร และควรปรับปรุงด้วยวิธีใด",
            "ง. ตรวจสอบเฉพาะหน้าแรกเพียงส่วนเดียวโดยไม่ต้องดูเมนูหรือช่องทางติดต่อ"
        ],
        correctIndex: 2,
        explanation: "การวิเคราะห์เว็บไซต์ไม่ได้หมายถึงการบอกว่าสวยหรือไม่สวยเท่านั้น แต่ต้องอธิบายได้ว่า พบปัญหาอะไร ส่งผลต่อผู้ใช้งานอย่างไร และควรปรับปรุงด้วยวิธีใด (และห้ามนำข้อมูลลูกค้าจริงหรือรหัสผ่านจริงมาใช้โดยไม่ได้รับอนุญาต)"
    }
];
