/**
 * slides-data.js (MASTER PROMPT V5 — BRIGHT PREMIUM EDUCATIONAL PRESENTATION)
 * รายวิชา: 21910-2007 โปรแกรมกราฟิกเพื่อสร้างสื่อดิจิทัล
 * ระดับชั้น: ประกาศนียบัตรวิชาชีพ (ปวช.) สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล
 * หน่วยที่ 1: ความรู้พื้นฐานเกี่ยวกับภาพกราฟิกดิจิทัลและการเตรียมงานออกแบบ (เวลาเรียนรวม 60 นาที — 28 สไลด์)
 */

const VOCABULARY_LIST = [
    {
        key: "Digital Graphics",
        term: "Digital Graphics (ภาพกราฟิกดิจิทัล)",
        formal: "ภาพที่สร้างขึ้นหรือจัดเก็บด้วยเทคโนโลยีดิจิทัล ใช้ในการสื่อสารข้อมูล ประชาสัมพันธ์ โฆษณา ออกแบบผลิตภัณฑ์ และสร้างสื่อธุรกิจ",
        easy: "คือ 'ภาพทุกชนิดที่อยู่ในจอคอมหรือมือถือ' ไม่ว่าจะเป็นภาพถ่ายขนม โลโก้ร้าน หรือโปสเตอร์โฆษณาที่เราทำในโปรแกรมกราฟิก",
        example: "เช่น ภาพโพสต์ขายขนมบน Facebook, โลโก้ร้านขนมบ้านเรา, แบนเนอร์โฆษณาออนไลน์"
    },
    {
        key: "Raster",
        term: "Raster Graphics / Bitmap (ภาพราสเตอร์ / บิตแมป)",
        formal: "ภาพดิจิทัลที่ประกอบขึ้นจากจุดสีขนาดเล็กจำนวนมาก (Pixel) เรียงต่อกัน เหมาะกับภาพถ่ายที่มีการไล่ระดับสีและแสงเงาซับซ้อน",
        easy: "เปรียบเหมือน 'ภาพปักครอสติชหรือโมเสก' ที่เอาเม็ดสีเล็ก ๆ มาเรียงต่อกัน ภาพสวยเหมือนจริงมาก แต่ถ้าดึงขยายใหญ่เกินไปจะเห็นเป็นตารางสี่เหลี่ยมแตก ๆ",
        example: "เช่น ภาพถ่ายขนมชั้น ภาพถ่ายสินค้า ภาพอาหาร (ไฟล์ JPEG, PNG จากโปรแกรม Photoshop, GIMP)"
    },
    {
        key: "Vector",
        term: "Vector Graphics (ภาพเวกเตอร์)",
        formal: "ภาพที่สร้างจากจุด เส้น เส้นโค้ง และรูปทรงเรขาคณิตโดยใช้สมการทางคณิตศาสตร์คำนวณตำแหน่งและสี ย่อหรือขยายได้โดยไม่สูญเสียความคมชัด",
        easy: "เปรียบเหมือน 'การวาดเส้นด้วยสูตรคณิตศาสตร์' จะย่อเล็กติดสติกเกอร์กล่องขนม หรือขยายใหญ่ทำป้ายหน้าร้าน 10 เมตร เส้นก็ยังคมกริบไม่แตกเลย",
        example: "เช่น โลโก้ร้าน ไอคอน ตัวการ์ตูน สัญลักษณ์ (ไฟล์ SVG, AI, EPS จากโปรแกรม Illustrator, Inkscape)"
    },
    {
        key: "Pixel",
        term: "Pixel (พิกเซล)",
        formal: "หน่วยย่อยเล็กที่สุดของภาพดิจิทัลแบบ Raster โดยแต่ละพิกเซลเก็บข้อมูลสีของตนเอง เมื่อเรียงต่อกันแนวตั้งและแนวนอนจะเกิดเป็นภาพ",
        easy: "คือ 'เม็ดสีสี่เหลี่ยมจิ๋ว ๆ 1 จุด' ในภาพดิจิทัล ยิ่งมีเม็ดพิกเซลเยอะ ภาพก็ยิ่งละเอียดคมชัด",
        example: "เช่น ภาพขนาด 1080 × 1080 px มีจุดพิกเซลเรียงกันทั้งหมด 1,166,400 จุด"
    },
    {
        key: "Image Dimensions",
        term: "Image Dimensions (ขนาดภาพ)",
        formal: "จำนวนพิกเซลของภาพในแนวกว้างและแนวสูง เขียนในรูปแบบ ความกว้าง × ความสูง (Width × Height)",
        easy: "คือ 'ขนาดความกว้างคูณความสูงเป็นจำนวนพิกเซล' เพื่อให้รู้ว่าภาพใบนี้กว้างและสูงกี่จุดสี",
        example: "เช่น 1080 × 1080 px (กว้าง 1,080 พิกเซล และสูง 1,080 พิกเซล)"
    },
    {
        key: "Aspect Ratio",
        term: "Aspect Ratio (สัดส่วนภาพ)",
        formal: "ความสัมพันธ์ระหว่างความกว้างและความสูงของภาพ ช่วยกำหนดรูปร่างของพื้นที่ทำงานให้เหมาะกับแต่ละแพลตฟอร์ม",
        easy: "คือ 'ทรงของกรอบรูป' เช่น ทรงจัตุรัส (1:1) ทรงแนวนอนเหมือนจอทีวี (16:9) หรือทรงแนวตั้งเต็มจอมือถือ (9:16)",
        example: "เช่น 1:1 โพสต์สี่เหลี่ยมจัตุรัส, 4:5 โพสต์แนวตั้ง, 16:9 สไลด์/วิดีโอ, 9:16 Story/Reels/TikTok"
    },
    {
        key: "PPI",
        term: "PPI (Pixels Per Inch)",
        formal: "จำนวนพิกเซลต่อความยาว 1 นิ้วของภาพ อธิบายความหนาแน่นของพิกเซลเมื่อแสดงผลหรือกำหนดขนาดสำหรับพิมพ์",
        easy: "คือ 'ความอัดแน่นของเม็ดพิกเซลใน 1 นิ้ว' ถ้าอัดแน่นถึง 300 จุดต่อนิ้ว (300 PPI) เวลาพิมพ์ออกมาบนกระดาษจะคมกริบเลย",
        example: "เช่น ภาพกว้าง 1,200 px หากตั้งพิมพ์ที่ 300 PPI จะได้ขนาดพิมพ์จริงกว้าง 4 นิ้ว (1,200 ÷ 300 = 4)"
    },
    {
        key: "DPI",
        term: "DPI (Dots Per Inch)",
        formal: "จำนวนจุดหมึกที่เครื่องพิมพ์สามารถพ่นหรือสร้างได้ในระยะความยาว 1 นิ้ว (เป็นค่าของอุปกรณ์พิมพ์ ต่างจาก PPI ที่เป็นค่าของไฟล์ภาพ)",
        easy: "คือ 'ความละเอียดของหัวพ่นหมึกเครื่องปริ้นเตอร์ใน 1 นิ้ว' (จำง่าย ๆ: PPI คือจุดในไฟล์ภาพ ส่วน DPI คือหยดหมึกของเครื่องพิมพ์)",
        example: "เช่น เครื่องพิมพ์อิงก์เจ็ตความละเอียดสูงพ่นหมึกได้ 1,200 DPI หรือ 2,400 DPI"
    },
    {
        key: "RGB",
        term: "RGB Color Mode (ระบบสี RGB)",
        formal: "ระบบสีที่ใช้หลักการผสมแสงสีแดง (Red), สีเขียว (Green) และสีน้ำเงิน (Blue) สำหรับแสดงผลบนหน้าจอดิจิทัล",
        easy: "คือ 'ระบบสีของแสงไฟหน้าจอ' ยิ่งผสมแสงครบ 3 สีสว่างสุดจะได้สีขาว ถ้าปิดไฟมืดสนิทจะได้สีดำ ใช้กับงานออนไลน์ทุกชนิด",
        example: "เช่น ภาพโฆษณาขนมโพสต์ Facebook, แบนเนอร์เว็บไซต์, สไลด์นำเสนอ (ค่าสี 0–255 เช่น RGB(255,0,0) คือสีแดงสด)"
    },
    {
        key: "CMYK",
        term: "CMYK Color Mode (ระบบสี CMYK)",
        formal: "ระบบสีสำหรับงานพิมพ์ที่ผสมหมึก 4 สี ได้แก่ Cyan (ฟ้าอมเขียว), Magenta (ม่วงแดง), Yellow (เหลือง) และ Key (สีดำ)",
        easy: "คือ 'ระบบผสมหมึกพิมพ์ลงบนกระดาษหรือไวนิล' ยิ่งผสมหมึกเยอะยิ่งเข้ม โดยใช้หมึกสีดำ (K) ช่วยเพิ่มความคมชัดและประหยัดหมึกสีอื่น",
        example: "เช่น โปสเตอร์หน้าร้าน ป้ายไวนิล แผ่นพับ โบรชัวร์ กล่องบรรจุภัณฑ์ขนม"
    },
    {
        key: "Color Gamut",
        term: "Color Gamut (ขอบเขตสี)",
        formal: "ช่วงหรือขอบเขตของสีที่อุปกรณ์แสดงผลหรือระบบการพิมพ์หนึ่ง ๆ สามารถแสดงหรือผลิตซ้ำออกมาได้",
        easy: "คือ 'ขีดจำกัดของสีที่ทำได้จริง' หน้าจอมือถือ (RGB) แสดงสีสะท้อนแสงสด ๆ ได้กว้างกว่าหมึกพิมพ์บนกระดาษ (CMYK)",
        example: "เช่น สีชมพูบานเย็นหรือเขียวนีออนบนจอมือถือ อาจดูหม่นลงเมื่อนำไปพิมพ์ลงกระดาษจริง"
    },
    {
        key: "JPEG",
        term: "JPEG / JPG (Joint Photographic Experts Group)",
        formal: "รูปแบบไฟล์ภาพ Raster ที่ใช้การบีบอัดแบบสูญเสียข้อมูลบางส่วน (Lossy Compression) เพื่อลดขนาดไฟล์ให้เล็กลง",
        easy: "คือ 'ไฟล์ภาพถ่ายยอดฮิต' ไฟล์เล็ก โหลดไว โพสต์ลงโซเชียลได้ทุกที่ แต่เจาะพื้นหลังใสไม่ได้ และถ้าย่อ-เซฟซ้ำบ่อย ๆ ภาพจะเริ่มแตก",
        example: "เช่น ภาพถ่ายขนมไทย ภาพบรรยากาศร้าน ภาพถ่ายสินค้าสำหรับโพสต์ Facebook"
    },
    {
        key: "PNG",
        term: "PNG (Portable Network Graphics)",
        formal: "รูปแบบไฟล์ภาพ Raster ที่บีบอัดแบบไม่สูญเสียข้อมูล (Lossless Compression) และรองรับพื้นหลังโปร่งใส (Alpha Transparency)",
        easy: "คือ 'ไฟล์ภาพกราฟิกคมชัดที่เจาะพื้นหลังใสได้' ตัวหนังสือและขอบโลโก้ไม่แตก เหมาะเอาไปวางซ้อนบนภาพอื่น",
        example: "เช่น โลโก้ร้านพื้นหลังโปร่งใส (ไดคัตฉากหลังออกแล้ว) หรือภาพโฆษณาที่มีตัวอักษรคมชัด"
    },
    {
        key: "SVG",
        term: "SVG (Scalable Vector Graphics)",
        formal: "รูปแบบไฟล์ภาพเวกเตอร์ที่ใช้โค้ด XML อธิบายรูปทรง เส้น และสี ขยายขนาดได้ไม่จำกัดโดยไม่สูญเสียความคมชัด",
        easy: "คือ 'ไฟล์เวกเตอร์มาตรฐานสำหรับเว็บและงานออกแบบ' ขยายยังไงก็ไม่แตก แก้สีแก้ทรงได้ง่าย",
        example: "เช่น โลโก้ร้านต้นฉบับ ไอคอนเมนูเว็บไซต์ ภาพประกอบเวกเตอร์"
    },
    {
        key: "PDF",
        term: "PDF (Portable Document Format)",
        formal: "รูปแบบไฟล์เอกสารมาตรฐานที่บรรจุได้ทั้งข้อความ ภาพ Raster และภาพ Vector โดยรักษาโครงสร้างการจัดวางให้เหมือนต้นฉบับ",
        easy: "คือ 'ไฟล์แพ็กเกจรวมมิตรพร้อมส่งโรงพิมพ์หรือส่งครู' เปิดเครื่องไหนฟอนต์ก็ไม่เพี้ยน เก็บได้ทั้งหน้าเดียวและหลายหน้า",
        example: "เช่น ไฟล์แบบป้ายหน้าร้านส่งโรงพิมพ์ แค็ตตาล็อกขนม หรือไฟล์ตารางเปรียบเทียบส่งครู"
    },
    {
        key: "Design Brief",
        term: "Design Brief & Visual Hierarchy (โจทย์การออกแบบและลำดับความสำคัญทางสายตา)",
        formal: "เอกสารสรุปความต้องการของงานออกแบบ และการวางลำดับจุดเด่น-จุดรองเพื่อให้ผู้ชมเห็นข้อมูลสำคัญตามลำดับ",
        easy: "Design Brief คือ 'ใบสั่งงานที่ชัดเจนก่อนลงมือทำ' ส่วน Visual Hierarchy คือ 'การจัดคิวสายตา' ให้ลูกค้าเห็นภาพขนมกับราคาก่อนเป็นอันดับแรก",
        example: "เช่น สรุปโจทย์ร้านขนมบ้านเรา (โทนสีครีม-น้ำตาลทอง ขนาด 1080×1080 px เน้นภาพขนมใหญ่ + ราคาเด่น)"
    }
];

const QUIZ_QUESTIONS = [
    {
        id: 1,
        question: "1. ข้อใดอธิบายความแตกต่างระหว่างภาพ Raster และ Vector ได้ถูกต้องที่สุด?",
        options: [
            "ก. Raster สร้างจากเส้นคณิตศาสตร์ ส่วน Vector สร้างจากพิกเซล",
            "ข. Raster เหมาะกับภาพถ่ายมีแสงเงา ส่วน Vector เหมาะกับโลโก้ที่ย่อ-ขยายได้คมชัด",
            "ค. Raster ขยายขนาดใหญ่แค่ไหนก็ไม่แตก ส่วน Vector ขยายแล้วเบลอ",
            "ง. ภาพกราฟิก 1 ชิ้นห้ามใช้ Raster และ Vector ร่วมกันโดยเด็ดขาด"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. ภาพ Raster ประกอบด้วยพิกเซลเหมาะกับภาพถ่ายที่มีแสงเงาซับซ้อน (เช่น ภาพถ่ายขนม) ส่วนภาพ Vector สร้างจากเส้นและรูปทรงคณิตศาสตร์ ย่อ-ขยายได้ไม่สูญเสียความคมชัด เหมาะกับงานโลโก้และไอคอน"
    },
    {
        id: 2,
        question: "2. ภาพขนาด 1080 × 1080 px หมายถึงอะไร และมีสัดส่วนภาพ (Aspect Ratio) เท่าใด?",
        options: [
            "ก. กว้าง 1,080 นิ้ว สูง 1,080 นิ้ว สัดส่วน 16:9",
            "ข. กว้าง 1,080 พิกเซล สูง 1,080 พิกเซล สัดส่วน 1:1 (ภาพจัตุรัส)",
            "ค. มีจำนวนพิกเซลรวมทั้งหมด 2,160 พิกเซล สัดส่วน 4:5",
            "ง. เป็นขนาดสำหรับวิดีโอแนวตั้ง TikTok สัดส่วน 9:16"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. 1080 × 1080 px หมายถึงความกว้าง 1,080 พิกเซล และความสูง 1,080 พิกเซล (พื้นที่รวม 1,166,400 พิกเซล) เป็นสัดส่วน 1:1 หรือสี่เหลี่ยมจัตุรัส นิยมใช้โพสต์ภาพสินค้าออนไลน์"
    },
    {
        id: 3,
        question: "3. ค่าความละเอียด PPI (Pixels Per Inch) มีความสำคัญต่อการเตรียมภาพสำหรับงานพิมพ์อย่างไร?",
        options: [
            "ก. บอกความหนาแน่นของพิกเซลต่อ 1 นิ้ว หากตั้งพิมพ์ที่ 300 PPI ภาพกว้าง 1,200 px จะพิมพ์ได้กว้าง 4 นิ้วคมชัด",
            "ข. แค่พิมพ์เปลี่ยนตัวเลข 72 PPI เป็น 300 PPI ภาพที่เบลอจะชัดขึ้นทันทีโดยไม่ต้องเพิ่มพิกเซล",
            "ค. PPI คือจำนวนหยดหมึกของเครื่องพิมพ์เท่านั้น ไม่เกี่ยวกับไฟล์ภาพ",
            "ง. งานพิมพ์คุณภาพสูงควรใช้ค่า PPI ต่ำที่สุดเพื่อประหยัดหมึก"
        ],
        correctIndex: 0,
        explanation: "เฉลย ก. PPI คือจำนวนพิกเซลต่อ 1 นิ้ว มีความสัมพันธ์กับขนาดพิมพ์จริง เช่น ภาพกว้าง 1,200 px พิมพ์ที่ 300 PPI จะได้ขนาด 4 นิ้ว ทั้งนี้การเปลี่ยนแต่ค่า PPI โดยไม่เพิ่มจำนวนพิกเซลไม่ได้ทำให้รายละเอียดภาพเพิ่มขึ้น"
    },
    {
        id: 4,
        question: "4. ระบบสี RGB และ CMYK แตกต่างกันอย่างไร และควรเลือกใช้กับงานประเภทใด?",
        options: [
            "ก. RGB เป็นการผสมหมึกสำหรับงานพิมพ์ ส่วน CMYK เป็นการผสมแสงสำหรับหน้าจอ",
            "ข. RGB ผสมแสง (แดง-เขียว-น้ำเงิน) สำหรับงานหน้าจอ ส่วน CMYK ผสมหมึก (ฟ้า-ม่วงแดง-เหลือง-ดำ) สำหรับงานพิมพ์",
            "ค. ทั้ง RGB และ CMYK ผสมแสงสีขาวเหมือนกัน ใช้แทนกันได้โดยสีไม่เพี้ยน",
            "ง. โพสต์ภาพขายขนมบน Facebook ควรตั้งค่าเป็น CMYK เสมอ"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. RGB ใช้การผสมแสงเหมาะกับหน้าจอคอมพิวเตอร์และมือถือ (เช่น โพสต์ Facebook) ส่วน CMYK ใช้การผสมหมึกบนวัสดุพิมพ์ เช่น โปสเตอร์ โบรชัวร์ และป้ายหน้าร้าน"
    },
    {
        id: 5,
        question: "5. หากต้องการบันทึกไฟล์ “โลโก้ร้านขนม” ให้มีพื้นหลังโปร่งใส (เจาะฉากหลังออก) เพื่อนำไปวางทับบนภาพถ่ายขนม ควรส่งออกเป็นไฟล์ Raster ชนิดใด?",
        options: [
            "ก. JPEG (.jpg)",
            "ข. PNG (.png)",
            "ค. MP4 (.mp4)",
            "ง. TXT (.txt)"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. ไฟล์ PNG รองรับการบีบอัดแบบไม่สูญเสียข้อมูล (Lossless) และรองรับความโปร่งใส (Alpha Transparency) จึงเหมาะกับโลโก้พื้นหลังใสและกราฟิกที่ต้องการขอบตัวอักษรคมชัด (ส่วน JPEG ไม่รองรับพื้นหลังโปร่งใส)"
    },
    {
        id: 6,
        question: "6. เพราะเหตุใดร้านขนมพื้นเมืองจึงควรจัดเก็บไฟล์โลโก้ต้นฉบับเป็นรูปแบบ Vector (เช่น AI หรือ SVG)?",
        options: [
            "ก. เพราะทำให้ภาพถ่ายขนมมีแสงเงาเหมือนจริงมากขึ้น",
            "ข. เพราะนำไปย่อทำสติกเกอร์ติดกล่องขนม หรือขยายใหญ่ทำป้ายหน้าร้านได้โดยรูปทรงยังคมชัดไม่แตก",
            "ค. เพราะไฟล์ Vector ไม่สามารถแก้ไขสีหรือรูปทรงได้อีกเลย",
            "ง. เพราะบังคับให้ต้องใช้โปรแกรมตกแต่งภาพถ่ายเท่านั้น"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. ภาพ Vector คำนวณวาดเส้นใหม่ตามสมการคณิตศาสตร์ จึงสามารถนำไปใช้ได้ทุกขนาด ตั้งแต่รูปโปรไฟล์เล็ก ๆ สติกเกอร์ติดกล่อง ไปจนถึงป้ายหน้าร้านขนาดใหญ่โดยไม่สูญเสียความคมชัด"
    },
    {
        id: 7,
        question: "7. ข้อใดจับคู่ชนิดไฟล์ (JPEG, PNG, SVG, PDF) กับงานของร้านขนมพื้นเมืองได้เหมาะสมที่สุด?",
        options: [
            "ก. JPEG = โลโก้พื้นหลังใส / SVG = ภาพถ่ายขนม",
            "ข. JPEG = ภาพถ่ายขนมไฟล์เล็กโพสต์เพจ / PNG = โลโก้พื้นหลังใส / SVG = โลโก้เวกเตอร์ขยายได้ / PDF = ไฟล์ส่งโรงพิมพ์",
            "ค. PNG = ไฟล์เอกสารหลายหน้า / PDF = ไฟล์ภาพถ่ายจากกล้องเท่านั้น",
            "ง. SVG = บีบอัดภาพถ่ายแบบสูญเสียข้อมูล"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. JPEG เหมาะกับภาพถ่ายสินค้าขนาดไฟล์เล็ก, PNG เหมาะกับกราฟิก/โลโก้พื้นหลังใส, SVG เหมาะกับโลโก้และไอคอนเวกเตอร์ และ PDF เหมาะกับจัดเก็บเอกสารและกราฟิกเพื่อส่งร้านพิมพ์"
    },
    {
        id: 8,
        question: "8. ก่อนเปิดโปรแกรมออกแบบภาพประชาสัมพันธ์ร้านค้า ขั้นตอนแรกสุดที่นักออกแบบควรทำคืออะไร?",
        options: [
            "ก. ใส่เอฟเฟกต์และฟอนต์ให้เยอะที่สุดเท่าที่มีในเครื่อง",
            "ข. วิเคราะห์วัตถุประสงค์ กลุ่มเป้าหมาย ช่องทางเผยแพร่ ขนาดสื่อ และสรุปเป็น Design Brief",
            "ค. ดาวน์โหลดภาพจากเว็บไซต์ทั่วไปมาใช้ขายของทันทีโดยไม่ต้องตรวจลิขสิทธิ์",
            "ง. ส่งไฟล์ให้โรงพิมพ์ผลิตจริงจำนวนมากโดยไม่ต้องตรวจสอบตัวอย่างสี"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. การออกแบบที่มีประสิทธิภาพต้องเริ่มจากการวางแผน กำหนดวัตถุประสงค์ วิเคราะห์กลุ่มเป้าหมาย ช่องทาง ขนาด สิทธิ์การใช้ภาพ และสรุปเป็น Design Brief ก่อนลงมือทำ"
    },
    {
        id: 9,
        question: "9. หากผลงานโฆษณาชิ้นแรกได้รับข้อเสนอแนะว่า “ตัวอักษรเล็กอ่านยาก สีข้อความกลืนกับพื้นหลัง และราคาไม่ชัดเจน” นักเรียนควรปรับปรุงตามหลักการใด?",
        options: [
            "ก. ลดขนาดภาพขนมให้เล็กลงแล้วพิมพ์ข้อความเพิ่มให้เต็มพื้นที่",
            "ข. เพิ่มขนาดตัวอักษร เพิ่มความตัดกันของสี (Contrast) และจัดลำดับความสำคัญ (Visual Hierarchy) ให้ราคาเด่นชัด",
            "ค. ลบชื่อร้านและราคาออกทั้งหมดเหลือแต่สีพื้นหลัง",
            "ง. เปลี่ยนนามสกุลไฟล์จาก PNG เป็น JPEG โดยไม่แก้การออกแบบ"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. การใช้หลักความแตกต่าง (Contrast), ลำดับความสำคัญ (Visual Hierarchy) และพื้นที่ว่าง (White Space) ช่วยให้อ่านง่าย เห็นชื่อสินค้าและราคาชัดเจนขึ้น"
    },
    {
        id: 10,
        question: "10. เพราะเหตุใดในการส่งมอบงานออกแบบ นักเรียนจึงต้องส่งทั้ง “ไฟล์ต้นฉบับ (Source File)” และ “ไฟล์ผลงานสำเร็จ”?",
        options: [
            "ก. เพื่อให้ไฟล์มีขนาดใหญ่เต็มพื้นที่คอมพิวเตอร์",
            "ข. ไฟล์ผลงานสำเร็จ (PNG/JPEG/PDF) ใช้เผยแพร่หรือส่งพิมพ์ได้ทันที ส่วนไฟล์ต้นฉบับ (PSD/AI/SVG) ใช้เปิดแก้ไขข้อความหรือปรับขนาดในอนาคตได้สะดวก",
            "ค. เพราะไฟล์ต้นฉบับสามารถโพสต์ลง Facebook ได้โดยตรงทุกนามสกุล",
            "ง. เพื่อไม่ต้องบันทึกผลการปรับปรุงผลงาน"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. ไฟล์ต้นฉบับยังแยกชั้นเลเยอร์และองค์ประกอบไว้ จึงกลับมาแก้ไขราคา เปลี่ยนโปรโมชั่น หรือปรับขนาดใหม่ได้ง่าย ส่วนไฟล์ผลงานสำเร็จพร้อมนำไปโพสต์ออนไลน์หรือใช้งานจริงได้ทันที"
    }
];

const SLIDES_DATA = [
    // =========================================================================
    // SLIDE 1: HERO IMAGE + TITLE (2 นาที) — Layout B: Large Photo + Explanation
    // =========================================================================
    {
        id: 1,
        isCover: true,
        theme: "light",
        slideType: "Title Slide",
        layout: "hero-image-title",
        section: "บทนำรายวิชา",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 0–2)",
        title: "ความรู้พื้นฐานเกี่ยวกับภาพกราฟิกดิจิทัลและการเตรียมงานออกแบบ",
        subtitle: "รหัสวิชา 21910-2007 โปรแกรมกราฟิกเพื่อสร้างสื่อดิจิทัล",
        learningObjective: "เข้าใจภาพรวมของหน่วยที่ 1 และความสำคัญของกราฟิกดิจิทัลต่อการสร้างสื่อธุรกิจ",
        content: [
            "เปรียบเทียบโครงสร้างภาพ Raster (Pixel) และ Vector (เส้นคณิตศาสตร์)",
            "เข้าใจขนาดภาพ 1080×1080 px, Aspect Ratio และความละเอียด 300 PPI",
            "เลือกระบบสี RGB สำหรับหน้าจอ และ CMYK สำหรับงานพิมพ์",
            "เลือกชนิดไฟล์ JPEG, PNG, SVG, PDF และฝึกออกแบบสื่อร้านขนมพื้นเมือง"
        ],
        keyPoints: ["Raster vs Vector", "Pixel, Aspect Ratio & 300 PPI", "ระบบสี RGB vs CMYK", "ไฟล์ JPEG, PNG, SVG, PDF & การวางแผน"],
        image: {
            src: "assets/images/hero-graphic-studio-real.jpg",
            alt: "สตูดิโอออกแบบกราฟิกดิจิทัลพร้อมจอภาพแสดงงานออกแบบร้านขนมไทย กล้องถ่ายภาพ และชาร์ตสี Pantone",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        interactive: {
            type: "inline-glossary"
        },
        glossary: ["Digital Graphics", "Raster", "Vector", "RGB", "CMYK"],
        speakerNotes: {
            whatToSay: "สวัสดีครับ/ค่ะนักเรียนทุกคน ยินดีต้อนรับเข้าสู่รายวิชา 21910-2007 โปรแกรมกราฟิกเพื่อสร้างสื่อดิจิทัล วันนี้เราจะเรียนหน่วยที่ 1 เรื่อง ความรู้พื้นฐานเกี่ยวกับภาพกราฟิกดิจิทัลและการเตรียมงานออกแบบ ในเวลา 60 นาทีนี้ นักเรียนจะได้เห็นภาพจริงจากสตูดิโอออกแบบว่า ทำไมภาพถ่ายขนมต้องใช้ Raster ทำไมโลโก้ร้านต้องใช้ Vector และทำไมสีบนจอมือถือกับสีที่พิมพ์ออกมาถึงไม่เหมือนกัน",
            realLifeExample: "สังเกตภาพสตูดิโอด้านขวา นักออกแบบต้องทำงานร่วมกันทั้งภาพถ่ายสินค้าจากกล้องจริง (Raster) โลโก้เวกเตอร์ (Vector) และเทียบชาร์ตสีก่อนส่งโรงพิมพ์",
            guidingQuestion: "นักเรียนเคยเจอปัญหาส่งรูปไปให้เพื่อนหรือเอาไปปริ้นท์ แล้วภาพแตกเบลอ หรือสีเพี้ยนไปจากหน้าจอมือถือไหมครับ?",
            expectedAnswer: "เคยครับ/ค่ะ เช่น เอารูปเล็ก ๆ ไปขยายใหญ่แล้วเป็นสี่เหลี่ยมมัว ๆ หรือปริ้นท์รูปสีสด ๆ ออกมาแล้วสีดูมืดลง",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="cover-grid">
                <div>
                    <div class="cover-badges">
                        <span class="cover-pill"><i class="fa-solid fa-palette"></i> รหัสวิชา 21910-2007</span>
                        <span class="cover-pill cyan"><i class="fa-solid fa-user-graduate"></i> ปวช. เทคโนโลยีธุรกิจดิจิทัล</span>
                        <span class="cover-pill purple"><i class="fa-regular fa-clock"></i> แผนการสอน 60 นาที</span>
                    </div>
                    <div class="cover-unit-no"><i class="fa-solid fa-sparkles"></i> หน่วยการเรียนรู้ที่ 1 • UNIT 01</div>
                    <h1 class="cover-main-title">ความรู้พื้นฐานเกี่ยวกับ<br><span style="color:#155EEF;">ภาพกราฟิกดิจิทัล</span>และ<span style="color:#7C3AED;">การเตรียมงานออกแบบ</span></h1>
                    <div class="cover-quote-box">
                        “การสร้างสื่อดิจิทัลที่มีคุณภาพไม่ได้เริ่มจากการเปิดโปรแกรมแล้วแต่งภาพทันที แต่เริ่มจากการเข้าใจ <strong>ธรรมชาติของภาพ ระบบสี ชนิดไฟล์</strong> และการวางแผนให้ตรงใจลูกค้า”
                    </div>
                    <div class="cover-meta-list">
                        <div class="cover-meta-item">
                            <i class="fa-solid fa-camera-retro"></i>
                            <div><strong>1. Raster vs Vector</strong><br><span class="caption-text">ภาพถ่ายพิกเซล &amp; โลโก้เวกเตอร์คมชัด</span></div>
                        </div>
                        <div class="cover-meta-item">
                            <i class="fa-solid fa-ruler-combined" style="background:linear-gradient(135deg,#9333EA,#EC4899);"></i>
                            <div><strong>2. Pixel, สัดส่วน &amp; 300 PPI</strong><br><span class="caption-text">1080×1080 px &amp; คำนวณขนาดพิมพ์จริง</span></div>
                        </div>
                        <div class="cover-meta-item">
                            <i class="fa-solid fa-eye-dropper" style="background:linear-gradient(135deg,#059669,#10B981);"></i>
                            <div><strong>3. RGB &amp; CMYK + ชนิดไฟล์</strong><br><span class="caption-text">เลือกใช้ JPEG, PNG, SVG และ PDF</span></div>
                        </div>
                        <div class="cover-meta-item">
                            <i class="fa-solid fa-store" style="background:linear-gradient(135deg,#D97706,#F59E0B);"></i>
                            <div><strong>4. ปฏิบัติจริง: ร้านขนมพื้นเมือง</strong><br><span class="caption-text">เขียน Design Brief + ออกแบบ 2 แนวทาง</span></div>
                        </div>
                    </div>
                </div>
                <div class="photo-showcase-card" style="height: 700px;">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge"><i class="fa-solid fa-camera"></i> สตูดิโอออกแบบกราฟิกธุรกิจดิจิทัล</span>
                        <img src="assets/images/hero-graphic-studio-real.jpg" alt="สตูดิโอออกแบบกราฟิกดิจิทัลพร้อมจอภาพแสดงงานออกแบบร้านขนมไทย กล้องถ่ายภาพ และชาร์ตสี Pantone" style="object-position: center;">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-wand-magic-sparkles" style="color:#155EEF;"></i> งานกราฟิกธุรกิจจริง:</strong> ผสานภาพถ่ายสินค้า (Raster) + โลโก้คมชัด (Vector) + การตั้งค่าสีที่ถูกต้อง
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 2: จุดประสงค์การเรียนรู้ (2 นาที) — Layout A: Three Premium Cards
    // =========================================================================
    {
        id: 2,
        theme: "light",
        slideType: "Learning Objectives",
        layout: "three-photo-cards",
        section: "จุดประสงค์การเรียนรู้",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 2–4)",
        kicker: "OBJECTIVES | เป้าหมายการเรียนรู้",
        title: "เป้าหมายการเรียนรู้: เรียนจบหน่วยนี้ทำอะไรได้บ้าง?",
        badge: "สมรรถนะประจำหน่วย",
        learningObjective: "ทราบเป้าหมายการเรียนรู้ทั้งภาคทฤษฎี (5.1) และภาคปฏิบัติ (5.2)",
        content: [
            "1. แยกแยะประเภทภาพ Raster กับ Vector และคำนวณความละเอียด Pixel, Aspect Ratio, PPI ได้",
            "2. เลือกระบบสี RGB / CMYK และเลือกชนิดไฟล์ JPEG, PNG, SVG, PDF ให้เหมาะกับงานจริง",
            "3. วางแผน Design Brief และสร้างสื่อประชาสัมพันธ์ร้านขนมพื้นเมือง 1080×1080 px ได้"
        ],
        keyPoints: ["แยกแยะ Raster กับ Vector", "เข้าใจ Pixel, PPI, RGB, CMYK", "เลือกไฟล์ JPEG, PNG, SVG, PDF", "วางแผนและสร้างสื่อร้านขนมพื้นเมือง"],
        image: {
            src: "assets/images/raster-thai-dessert-closeup.jpg",
            alt: "ภาพถ่ายขนมไทยความละเอียดสูงและงานออกแบบโลโก้",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "มาดูเป้าหมาย 3 ด้านหลักของเรากันครับ วันนี้เราแบ่งการเรียนเป็น 2 ช่วงใหญ่ ๆ คือ ช่วงทฤษฎี (หัวข้อ 5.1) ความรู้พื้นฐานเรื่องภาพ สี ไฟล์ และช่วงปฏิบัติ (หัวข้อ 5.2) ที่ทุกคนจะได้สวมบทบาทเป็นนักออกแบบกราฟิกให้กับ 'ร้านขนมพื้นเมือง' ครับ",
            realLifeExample: "เหมือนเวลาลูกค้ามาจ้างเราทำภาพโปรโมตเพจกับทำป้ายหน้าร้าน ถ้าเรารู้ครบทั้ง 3 ด้านนี้ เราจะรับงานและส่งไฟล์ได้แบบมืออาชีพทันที",
            guidingQuestion: "ใน 3 ด้านบนหน้าจอ ด้านไหนที่นักเรียนคิดว่าเป็นเรื่องใหม่หรืออยากลองทำมากที่สุดครับ?",
            expectedAnswer: "การเลือกชนิดไฟล์ให้เหมาะกับงาน และการลงมือออกแบบภาพโฆษณาร้านขนม 1080×1080 px",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="three-photo-grid">
                <div class="v5-info-card theme-blue">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">1</span>
                            <h3 class="v5-card-title">โครงสร้าง &amp; ความละเอียดภาพ</h3>
                        </div>
                        <span class="v5-sub-pill">หัวข้อ 5.1.1 – 5.1.2 (Raster, Vector &amp; PPI)</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/raster-thai-dessert-closeup.jpg" alt="ภาพถ่ายขนมไทยแสดงรายละเอียดพิกเซลและแสงเงา" loading="lazy">
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-shapes"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-blue">แยกประเภทภาพ:</strong> เปรียบเทียบ <span class="glossary-term" data-glossary="Raster">Raster</span> และ <span class="glossary-term" data-glossary="Vector">Vector</span> ได้ชัดเจน</div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-ruler-combined"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-blue">คำนวณขนาด:</strong> เข้าใจ <span class="glossary-term" data-glossary="Pixel">Pixel</span>, สัดส่วน <span class="glossary-term" data-glossary="Aspect Ratio">Aspect Ratio</span> และ <span class="glossary-term" data-glossary="PPI">PPI</span></div>
                        </div>
                    </div>
                </div>

                <div class="v5-info-card theme-purple">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">2</span>
                            <h3 class="v5-card-title">เลือกระบบสี &amp; ชนิดไฟล์</h3>
                        </div>
                        <span class="v5-sub-pill">หัวข้อ 5.1.3 – 5.1.4 (RGB, CMYK &amp; File Formats)</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/cmyk-print-shop-proof.jpg" alt="การเปรียบเทียบระบบสีหน้าจอ RGB และงานพิมพ์ CMYK" loading="lazy">
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-palette"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-purple">ตั้งค่าระบบสี:</strong> เลือก <span class="glossary-term" data-glossary="RGB">RGB</span> สำหรับจอ และ <span class="glossary-term" data-glossary="CMYK">CMYK</span> สำหรับพิมพ์</div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-file-export"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-purple">เลือกชนิดไฟล์:</strong> ใช้ <span class="glossary-term" data-glossary="JPEG">JPEG</span>, <span class="glossary-term" data-glossary="PNG">PNG</span>, <span class="glossary-term" data-glossary="SVG">SVG</span>, <span class="glossary-term" data-glossary="PDF">PDF</span> ตรงตามงาน</div>
                        </div>
                    </div>
                </div>

                <div class="v5-info-card theme-emerald">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">3</span>
                            <h3 class="v5-card-title">วางแผน &amp; สร้างสื่อธุรกิจ</h3>
                        </div>
                        <span class="v5-sub-pill">หัวข้อ 5.1.5 &amp; 5.2 (Design Brief &amp; Workshop)</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/student-designing-canvas.jpg" alt="การออกแบบสื่อประชาสัมพันธ์ร้านขนมไทยขนาด 1080x1080 px บนคอมพิวเตอร์" loading="lazy">
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-compass-drafting"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-emerald">เขียนแผนงาน:</strong> สรุปโจทย์ <span class="glossary-term" data-glossary="Design Brief">Design Brief</span> ก่อนเปิดโปรแกรม</div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-emerald">ออกแบบจริง:</strong> สร้างสื่อร้านขนม <strong>1080×1080 px</strong> จำนวน 2 แบบ</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 3: บทนำ — ความสำคัญของภาพกราฟิกในธุรกิจดิจิทัล (2 นาที) — Layout B: Large Photo + Explanation
    // =========================================================================
    {
        id: 3,
        theme: "light",
        slideType: "Real-world Example",
        layout: "photo-key-takeaways",
        section: "บทนำ: กราฟิกกับธุรกิจดิจิทัล",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 4–6)",
        kicker: "BUSINESS VALUE | ความสำคัญต่อธุรกิจ",
        title: "ภาพกราฟิกดิจิทัล: หัวใจสำคัญที่เปลี่ยนคนดูเป็นลูกค้า",
        badge: "Visual Marketing",
        learningObjective: "ตระหนักถึงบทบาทของภาพกราฟิกดิจิทัลในการสร้างมูลค่าเพิ่มและสื่อสารแบรนด์",
        content: [
            "ดึงดูดสายตาใน 3 วินาทีแรกบนฟีดโซเชียลมีเดียด้วยภาพถ่ายสินค้าที่สีสันน่ากิน",
            "สร้างความน่าเชื่อถือและจดจำแบรนด์ด้วยโลโก้ ป้ายหน้าร้าน และบรรจุภัณฑ์ที่คมชัด",
            "สื่อสารข้อมูลสินค้า ราคา และโปรโมชั่นได้ครบถ้วนภายในภาพเดียว"
        ],
        keyPoints: ["ดึงดูดสายตาใน 3 วินาที", "สร้างภาพลักษณ์แบรนด์", "เพิ่มยอดขายออนไลน์และหน้าร้าน"],
        image: {
            src: "assets/images/thai-dessert-shop-real.jpg",
            alt: "หน้าร้านขนมไทยร่วมสมัยพร้อมป้ายร้านตู้โชว์ขนมและแท็บเล็ตจัดการคำสั่งซื้อออนไลน์",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "ก่อนเข้าสู่เนื้อหาเทคนิค ครูอยากให้ดูภาพร้านขนมไทยร้านนี้ครับ ในยุคธุรกิจดิจิทัล ลูกค้าไม่ได้เดินผ่านหน้าร้านอย่างเดียว แต่เห็นร้านเราผ่านจอมือถือเป็นอันดับแรก ภาพกราฟิกจึงทำหน้าที่เป็น 'พนักงานขายด่านหน้า' ตลอด 24 ชั่วโมง",
            realLifeExample: "ร้านขนมไทยที่มีภาพถ่ายขนมชั้นสีสวยคมชัด มีโลโก้ร้านดูสะอาดตา และระบุราคาชัดเจน ย่อมมียอดสั่งซื้อสูงกว่าร้านที่ถ่ายภาพมืด ๆ เบลอ ๆ",
            guidingQuestion: "เวลาเลื่อนฟีดสั่งอาหารหรือขนม อะไรในภาพโฆษณาที่ทำให้นักเรียนตัดสินใจกดสั่งซื้อเร็วที่สุดครับ?",
            expectedAnswer: "ภาพขนมที่ดูสดใหม่น่ากิน สีสันชัดเจน และมีป้ายบอกราคาชัดเจนไม่ต้องทักแชทถาม",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2-asym">
                <div class="photo-showcase-card">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge"><i class="fa-solid fa-store"></i> ธุรกิจจริง: ร้านขนมไทยยุคดิจิทัล</span>
                        <img src="assets/images/thai-dessert-shop-real.jpg" alt="หน้าร้านขนมไทยร่วมสมัยพร้อมป้ายร้านตู้โชว์ขนมและแท็บเล็ตจัดการคำสั่งซื้อออนไลน์" loading="lazy">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-bullseye" style="color:#155EEF;"></i> สื่อกราฟิกในร้านเดียว:</strong> ป้ายชื่อร้าน (Vector) + ภาพถ่ายขนม (Raster) + โพสต์โปรโมตบนแท็บเล็ต (RGB)
                    </div>
                </div>

                <div class="card blue" style="justify-content:space-between;">
                    <h3 class="section-heading"><i class="fa-solid fa-chart-line" style="color:#155EEF;"></i> 3 บทบาทของกราฟิกต่อธุรกิจ</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <div class="step-num">1</div>
                            <div class="step-content">
                                <h4>หยุดนิ้วคนดูใน 3 วินาทีแรก</h4>
                                <p>ภาพถ่ายสินค้าที่คมชัด แสงสวย ช่วยดึงดูดสายตาลูกค้าบนโซเชียลมีเดียได้เร็วกว่าข้อความล้วน</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">2</div>
                            <div class="step-content">
                                <h4>สร้างความน่าเชื่อถือให้แบรนด์</h4>
                                <p>โลโก้ที่คมกริบ โทนสีที่เป็นเอกลักษณ์ ทำให้ร้านดูเป็นมืออาชีพและเพิ่มมูลค่าให้สินค้า</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#059669;">
                            <div class="step-num" style="background:linear-gradient(135deg,#059669,#10B981);">3</div>
                            <div class="step-content">
                                <h4>ปิดการขายได้ไวขึ้น</h4>
                                <p>การจัดวางชื่อเมนู จุดเด่น และราคาที่อ่านง่าย ช่วยให้ลูกค้าตัดสินใจสั่งซื้อได้ทันที</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 4 (RASTER SLIDE A): Raster Graphics คืออะไร + Interactive Zoom (3 นาที)
    // Layout F: Interactive Infographic
    // =========================================================================
    {
        id: 4,
        theme: "light",
        slideType: "Interactive Zoom",
        layout: "interactive-zoom",
        section: "5.1.1 ประเภทของภาพกราฟิก (Raster vs Vector)",
        teachingTime: 3,
        timeGuide: "3 นาที (นาทีที่ 6–9)",
        kicker: "RASTER GRAPHICS | ภาพพิกเซล (1/3)",
        title: "Raster Graphics (Bitmap) คืออะไร? สำรวจโครงสร้างระดับพิกเซล",
        badge: "Interactive Pixel Zoom",
        learningObjective: "อธิบายโครงสร้างของภาพ Raster ที่เกิดจากตารางพิกเซล (Pixel Grid) และทดลองซูมดูเม็ดสีจริง",
        content: [
            "ภาพกราฟิกแบบ Raster (หรือ Bitmap) คือภาพที่ประกอบขึ้นจากจุดสีสี่เหลี่ยมเล็ก ๆ ที่เรียกว่า พิกเซล (Pixel) เรียงต่อกันเป็นตาราง",
            "แต่ละพิกเซลเก็บข้อมูลสีของตนเองอย่างอิสระ ทำให้แสดงแสงเงาและการไล่สีของอาหารและธรรมชาติได้สมจริงที่สุด",
            "ทดลองกดปุ่มซูม 1×, 4× และ 12× ด้านขวาเพื่อดูความแตกต่างระหว่างภาพถ่ายปกติกับตารางพิกเซล"
        ],
        keyPoints: ["เกิดจากตารางจุดสี (Pixel Grid)", "แต่ละพิกเซลเก็บค่าสีเฉพาะตัว", "ซูมขยายมากจะเห็นเป็นบล็อกสี่เหลี่ยม"],
        image: {
            src: "assets/images/raster-thai-dessert-closeup.jpg",
            alt: "ภาพถ่ายขนมไทยความละเอียดสูงสำหรับสาธิตการซูมดูตารางพิกเซล",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        interactive: {
            type: "image-zoom"
        },
        glossary: ["Raster", "Pixel"],
        speakerNotes: {
            whatToSay: "เข้าสู่หัวข้อ 5.1.1 เรื่องแรกคือ ภาพกราฟิกแบบ Raster หรือเรียกอีกชื่อว่า Bitmap ครับ นักเรียนจำง่าย ๆ ว่าภาพ Raster เหมือน 'ภาพปักครอสติชหรือกระเบื้องโมเสก' ที่เกิดจากเม็ดสีสี่เหลี่ยมเล็ก ๆ ที่เรียกว่า Pixel มาเรียงต่อกัน เดี๋ยวครูจะกดปุ่มซูมภาพขนมไทยด้านขวาจาก 1 เท่า ไปที่ 4 เท่า และ 12 เท่า ให้ดูครับ เห็นไหมครับว่าพอขยาย 12 เท่า เนื้อขนมเนียน ๆ กลายเป็นตารางสี่เหลี่ยมที่มีรหัสสีของใครของมันทันที!",
            realLifeExample: "รูปถ่ายขนมที่เราถ่ายด้วยกล้องมือถือทุกใบ หรือภาพอาหารในแอปสั่งอาหาร ล้วนเป็นภาพแบบ Raster ทั้งหมด",
            guidingQuestion: "เมื่อเรากดซูมภาพขนมที่ 12× นักเรียนสังเกตเห็นอะไรเปลี่ยนแปลงไปจากตอนดูที่ 1× ครับ?",
            expectedAnswer: "เห็นเป็นตารางสี่เหลี่ยมเล็ก ๆ เรียงกัน และแต่ละช่องสี่เหลี่ยมมีสีแตกต่างกัน",
            timeRecommended: "3 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header" style="margin-bottom:8px;">
                            <div class="icon-box blue"><i class="fa-solid fa-table-cells"></i></div>
                            <h3 class="card-title">โครงสร้างของภาพ <span class="glossary-term" data-glossary="Raster">Raster</span> (Bitmap)</h3>
                        </div>
                        <p class="body-text">คือภาพดิจิทัลที่เกิดจากจุดสีสี่เหลี่ยมขนาดเล็กที่เรียกว่า <span class="glossary-term" data-glossary="Pixel">Pixel</span> เรียงต่อกันเป็นตารางแนวตั้งและแนวนอน (Pixel Grid)</p>
                    </div>

                    <div class="step-list" style="flex:0 0 auto;">
                        <div class="step-item">
                            <div class="step-num">1</div>
                            <div class="step-content">
                                <h4>1 พิกเซล = 1 ค่าสีเฉพาะตัว</h4>
                                <p>แต่ละช่องพิกเซลเก็บค่าสีของตนเองแยกกันอย่างอิสระ</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#059669;">
                            <div class="step-num" style="background:linear-gradient(135deg,#059669,#10B981);">2</div>
                            <div class="step-content">
                                <h4>เมื่อมองระยะปกติ (1×)</h4>
                                <p>จุดสีนับล้านจุดผสานกันจนตาเราเห็นเป็นภาพถ่ายที่มีแสงเงาเนียนสมจริง</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#E11D48;">
                            <div class="step-num" style="background:linear-gradient(135deg,#E11D48,#F43F5E);">3</div>
                            <div class="step-content">
                                <h4>เมื่อซูมขยายระดับสูง (4× – 12×)</h4>
                                <p>จะมองเห็นขอบตารางสี่เหลี่ยมชัดเจน (เรียกว่าอาการภาพแตก / Pixelated)</p>
                            </div>
                        </div>
                    </div>

                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-hand-pointer"></i> ลองกดซูม!</span>
                        <span class="easy-explain-text">คลิกปุ่ม <strong>1× / 4× / 12×</strong> หรือเลื่อนเมาส์บนภาพขนมด้านขวาเพื่อส่องดูเม็ดพิกเซลและค่าสี RGB จริง</span>
                    </div>
                </div>

                <div class="pixel-zoom-widget" id="rasterPixelZoomWidget">
                    <div class="pixel-zoom-toolbar">
                        <span style="color:#155EEF; font-weight:800; font-size:24px;"><i class="fa-solid fa-magnifying-glass-plus"></i> Interactive Pixel Inspector</span>
                        <div class="zoom-btn-group">
                            <button type="button" class="zoom-level-btn active" data-zoom="1">1× ภาพปกติ</button>
                            <button type="button" class="zoom-level-btn" data-zoom="4">4× ซูมใกล้</button>
                            <button type="button" class="zoom-level-btn" data-zoom="12">12× เห็นตาราง Pixel</button>
                        </div>
                    </div>
                    <div class="pixel-zoom-stage" id="pixelZoomStage">
                        <img id="pixelZoomSourceImg" src="assets/images/raster-thai-dessert-closeup.jpg" alt="ภาพถ่ายขนมไทยความละเอียดสูงสำหรับสาธิตการซูมดูตารางพิกเซล">
                        <canvas id="pixelZoomCanvas" class="pixel-zoom-canvas" width="680" height="460"></canvas>
                    </div>
                    <div class="pixel-inspector-bar">
                        <span id="pixelZoomStatusText"><i class="fa-solid fa-eye" style="color:#155EEF;"></i> มุมมอง 1×: ภาพถ่ายขนมชั้นและทองหยิบคมชัดสมจริง</span>
                        <span class="rgb-swatch-pill" id="pixelRgbReadout">
                            <span class="rgb-color-dot" id="pixelColorDot" style="background:#2E8B57;"></span>
                            <span id="pixelColorCode">RGB(46, 139, 87)</span>
                        </span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 5 (RASTER SLIDE B 1/2): ลักษณะสำคัญของ Raster ข้อ 1–3 (2 นาที)
    // Layout D: Before / After Comparison (1x Real Photo vs 8x Pixelated)
    // =========================================================================
    {
        id: 5,
        theme: "light",
        slideType: "Concept Explanation",
        layout: "before-after-comparison",
        section: "5.1.1 ประเภทของภาพกราฟิก (Raster vs Vector)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 9–11)",
        kicker: "RASTER PROPERTIES | ลักษณะสำคัญ (1/2)",
        title: "Raster Graphics (1/2): โครงสร้าง แสงเงา และข้อจำกัดการขยาย",
        badge: "ลักษณะสำคัญ ข้อ 1–3",
        learningObjective: "เข้าใจลักษณะสำคัญ 3 ข้อแรกของภาพ Raster ได้แก่ ตารางพิกเซล ความสมจริงของแสงเงา และการแตกเบลอเมื่อขยายเกินขนาด",
        content: [
            "1. โครงสร้างเป็นตารางพิกเซล (Pixel Grid): ความละเอียดขึ้นอยู่กับจำนวนพิกเซลที่บันทึกมาตั้งแต่ต้น",
            "2. เด่นเรื่องแสงเงาและการไล่สีซับซ้อน: แสดงพื้นผิวขนม ความฉ่ำวาว และสีธรรมชาติได้เหมือนจริง",
            "3. ขยายเกินขนาดจริงแล้วภาพแตก (Resolution Dependent): หากรั้งภาพเล็กให้ใหญ่เกินพิกเซลเดิม ขอบภาพจะเบลอและเป็นรอยหยัก"
        ],
        keyPoints: ["1. โครงสร้างตารางพิกเซล", "2. แสงเงาและสีสมจริง", "3. ขยายเกินขนาดจริงแล้วภาพแตก"],
        image: {
            src: "assets/images/raster-macarons.png",
            alt: "ภาพถ่ายขนมมาการองของจริงเปรียบเทียบระหว่างความละเอียดปกติกับเมื่อขยายใหญ่จนเห็นพิกเซล",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "มาดูสรุปลักษณะสำคัญ 6 ข้อของภาพ Raster กันครับ เพื่อให้อ่านง่ายและเห็นภาพชัดเจน เราแบ่งเป็น 2 สไลด์ สไลด์แรกนี้คือข้อ 1 ถึงข้อ 3 ที่เกี่ยวกับคุณภาพของภาพโดยตรง คือ 1) โครงสร้างเป็นตารางพิกเซล 2) เก่งเรื่องการไล่สีและแสงเงาเหมือนจริง และ 3) มีข้อจำกัดสำคัญคือ ถ้านำภาพขนาดเล็กไปดึงขยายใหญ่เกินขนาดจริง ภาพจะแตกเป็นสี่เหลี่ยมเหมือนภาพเปรียบเทียบด้านขวาครับ",
            realLifeExample: "เหมือนเวลาเราเซฟรูปขนมขนาดเล็กจากแชท LINE แล้วเอาไปขยายเต็มหน้ากระดาษโปสเตอร์ ภาพจะมัวและเห็นเป็นเม็ดสี่เหลี่ยมทันที",
            guidingQuestion: "ทำไมภาพถ่ายอาหารถึงต้องใช้แบบ Raster แทนที่จะวาดด้วยเส้น Vector ครับ?",
            expectedAnswer: "เพราะอาหารมีแสงเงา ความมันวาว และการไล่ระดับสีธรรมชาติหลายแสนเฉดสี ซึ่งพิกเซลของ Raster เก็บรายละเอียดเหล่านี้ได้เหมือนจริงที่สุด",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <h3 class="section-heading"><i class="fa-solid fa-list-check" style="color:#155EEF;"></i> ลักษณะสำคัญของ Raster (ข้อ 1–3)</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <div class="step-num">1</div>
                            <div class="step-content">
                                <h4>โครงสร้างเป็นตารางพิกเซล (Pixel Grid)</h4>
                                <p>ประกอบด้วยจุดสีเรียงกันเป็นแถวและคอลัมน์ ยิ่งจำนวนพิกเซลมาก ภาพยิ่งมีความคมชัดสูง</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#059669;">
                            <div class="step-num" style="background:linear-gradient(135deg,#059669,#10B981);">2</div>
                            <div class="step-content">
                                <h4>เด่นเรื่องแสงเงาและการไล่ระดับสี</h4>
                                <p>เก็บรายละเอียดพื้นผิว ความฉ่ำวาวของขนม และสีสันธรรมชาติที่ซับซ้อนได้สมจริงที่สุด</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#E11D48;">
                            <div class="step-num" style="background:linear-gradient(135deg,#E11D48,#F43F5E);">3</div>
                            <div class="step-content">
                                <h4>ขยายเกินขนาดจริงแล้วภาพแตก (Pixelated)</h4>
                                <p>เมื่อดึงขยายภาพให้ใหญ่กว่าจำนวนพิกเซลเดิม โปรแกรมต้องเดาสีเพิ่ม ทำให้ขอบภาพเบลอและเป็นหยัก</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card purple" style="justify-content:space-between;">
                    <h3 class="section-heading" style="color:#6D28D9;"><i class="fa-solid fa-clone"></i> เปรียบเทียบ: ขนาดปกติ vs ขยายเกินขนาด</h3>
                    <div class="grid-2" style="gap:16px; flex:1; min-height:0;">
                        <div class="photo-showcase-card" style="border-color:#6EE7B7;">
                            <div class="photo-media-wrap">
                                <span class="photo-floating-badge emerald"><i class="fa-solid fa-check"></i> แสดงที่ขนาด 100%</span>
                                <img src="assets/images/raster-macarons.png" alt="ภาพถ่ายขนมมาการองความละเอียดสูงที่ขนาดปกติ 100%" loading="lazy">
                            </div>
                            <div class="photo-caption-bar" style="background:#ECFDF5; color:#065F46; border-top-color:#A7F3D0;">
                                <strong style="color:#047857;">คมชัดสมจริง:</strong> พิกเซลเรียงตัวแน่น เห็นผิวขนมเนียนสวย
                            </div>
                        </div>

                        <div class="photo-showcase-card" style="border-color:#FDA4AF;">
                            <div class="photo-media-wrap" style="overflow:hidden;">
                                <span class="photo-floating-badge pink"><i class="fa-solid fa-triangle-exclamation"></i> ดึงขยาย 800%</span>
                                <img src="assets/images/raster-macarons.png" alt="ภาพถ่ายขนมเมื่อถูกดึงขยายใหญ่เกินขนาดจริงจนเห็นรอยหยักพิกเซล" style="transform: scale(4.2); transform-origin: 55% 45%; filter: contrast(1.08);" loading="lazy">
                            </div>
                            <div class="photo-caption-bar" style="background:#FFF1F2; color:#9F1239; border-top-color:#FECDD3;">
                                <strong style="color:#BE123C;">ภาพแตกเบลอ:</strong> เมื่อขยายเกินจำนวนพิกเซลที่มีในไฟล์
                            </div>
                        </div>
                    </div>
                    <div class="easy-explain">
                        <span class="easy-explain-badge">กฎเหล็กข้อที่ 1</span>
                        <span class="easy-explain-text">ห้ามนำภาพถ่ายขนาดเล็กไปดึงขยายใหญ่เกินขนาดจริง ให้เตรียมภาพที่มีพิกเซลเพียงพอตั้งแต่ต้น</span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 6 (RASTER SLIDE B 2/2): ลักษณะสำคัญของ Raster ข้อ 4–6 (2 นาที)
    // Layout B: Large Photo + Explanation
    // =========================================================================
    {
        id: 6,
        theme: "light",
        slideType: "Concept Explanation",
        layout: "text-left-photo-right",
        section: "5.1.1 ประเภทของภาพกราฟิก (Raster vs Vector)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 11–13)",
        kicker: "RASTER PROPERTIES | ลักษณะสำคัญ (2/2)",
        title: "Raster Graphics (2/2): ขนาดไฟล์ นามสกุลไฟล์ และโปรแกรมที่ใช้",
        badge: "ลักษณะสำคัญ ข้อ 4–6",
        learningObjective: "เข้าใจความสัมพันธ์ระหว่างจำนวนพิกเซลกับขนาดไฟล์ รู้จักนามสกุลไฟล์ Raster และโปรแกรมสำหรับตกแต่งภาพ",
        content: [
            "4. ขนาดไฟล์ขึ้นอยู่กับจำนวนพิกเซล: ยิ่งภาพมีขนาดพิกเซลกว้าง×สูงมาก ข้อมูลสีที่ต้องเก็บยิ่งมาก ทำให้ไฟล์มีขนาดใหญ่ (MB)",
            "5. นามสกุลไฟล์ที่พบบ่อย: JPEG (.jpg), PNG (.png), GIF (.gif), TIFF (.tif), BMP และไฟล์ต้นฉบับ PSD",
            "6. โปรแกรมที่ใช้สร้างและตกแต่ง: Adobe Photoshop, GIMP, Photopea, Canva, Lightroom และ Procreate"
        ],
        keyPoints: ["4. พิกเซลมาก = ไฟล์ใหญ่", "5. ไฟล์ JPEG, PNG, GIF, TIFF, PSD", "6. โปรแกรม Photoshop, GIMP, Photopea"],
        image: {
            src: "assets/images/raster-eclairs.png",
            alt: "ภาพถ่ายขนมเอแคลร์ความละเอียดสูงจากกล้องดิจิทัลสำหรับงานรีทัชและออกแบบสื่อ",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        glossary: ["Raster", "JPEG", "PNG"],
        speakerNotes: {
            whatToSay: "ต่อกันที่ลักษณะสำคัญข้อ 4 ถึงข้อ 6 ของภาพ Raster ครับ ข้อ 4 คือ ยิ่งภาพมีจำนวนพิกเซลเยอะ ขนาดไฟล์ก็จะยิ่งใหญ่ตามไปด้วย ข้อ 5 คือนามสกุลไฟล์ที่เราเจอบ่อยที่สุด ได้แก่ JPEG, PNG, GIF, TIFF และ PSD ส่วนข้อ 6 คือโปรแกรมที่ใช้แต่งภาพกลุ่มนี้ เช่น Adobe Photoshop, GIMP หรือเว็บฟรีอย่าง Photopea และ Canva ครับ",
            realLifeExample: "ภาพถ่ายขนมเอแคลร์ความละเอียดสูงจากกล้องโปรอาจมีขนาดไฟล์ 15 MB แต่เมื่อเราแต่งสีใน Photoshop เสร็จแล้วเซฟเป็น JPEG โพสต์ลงเพจ ไฟล์จะลดเหลือไม่ถึง 1 MB",
            guidingQuestion: "ถ้านักเรียนไม่มีโปรแกรม Photoshop ในเครื่องที่บ้าน สามารถใช้โปรแกรมหรือเว็บฟรีตัวไหนแต่งภาพ Raster แทนได้ครับ?",
            expectedAnswer: "ใช้ GIMP, Photopea (เปิดบนเว็บได้เลย) หรือ Canva ครับ/ค่ะ",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <h3 class="section-heading"><i class="fa-solid fa-sliders" style="color:#155EEF;"></i> ลักษณะสำคัญของ Raster (ข้อ 4–6)</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <div class="step-num">4</div>
                            <div class="step-content">
                                <h4>ขนาดไฟล์แปรผันตามจำนวนพิกเซล</h4>
                                <p>ยิ่งความละเอียดสูง (พิกเซลเยอะ) คอมพิวเตอร์ยิ่งต้องจำค่าสีหลายล้านจุด ทำให้ไฟล์มีขนาดใหญ่ขึ้น</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">5</div>
                            <div class="step-content">
                                <h4>นามสกุลไฟล์มาตรฐานที่พบบ่อย</h4>
                                <p><span class="glossary-term" data-glossary="JPEG">JPEG</span>, <span class="glossary-term" data-glossary="PNG">PNG</span>, <strong>GIF, TIFF, BMP</strong> และไฟล์ต้นฉบับแยกเลเยอร์ <strong>PSD</strong></p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#059669;">
                            <div class="step-num" style="background:linear-gradient(135deg,#059669,#10B981);">6</div>
                            <div class="step-content">
                                <h4>โปรแกรมสำหรับสร้างและตกแต่งภาพ</h4>
                                <p><strong>Adobe Photoshop, GIMP, Photopea</strong>, Lightroom, Procreate และ Canva</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="photo-showcase-card">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge"><i class="fa-solid fa-camera-retro"></i> ภาพถ่ายต้นฉบับความละเอียดสูง (RAW / JPEG / PSD)</span>
                        <img src="assets/images/raster-eclairs.png" alt="ภาพถ่ายขนมเอแคลร์ความละเอียดสูงจากกล้องดิจิทัลสำหรับงานรีทัชและออกแบบสื่อ" loading="lazy">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-wand-magic-sparkles" style="color:#155EEF;"></i> งานตกแต่งภาพ Raster:</strong> ปรับแสงสี รีทัชพื้นผิวขนม และไดคัตฉากหลังในโปรแกรม Photoshop หรือ Photopea
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 7 (RASTER SLIDE C): Raster ในธุรกิจดิจิทัล — 3 ภาพถ่ายจริง (2 นาที)
    // Layout E: Realistic Photo Gallery (3 V5 Info Cards)
    // =========================================================================
    {
        id: 7,
        theme: "light",
        slideType: "Real-world Example",
        layout: "three-photo-cards",
        section: "5.1.1 ประเภทของภาพกราฟิก (Raster vs Vector)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 13–15)",
        kicker: "RASTER IN BUSINESS | การประยุกต์ใช้งานจริง",
        title: "Raster ในธุรกิจดิจิทัล: งานแบบไหนต้องใช้ภาพถ่ายพิกเซล?",
        badge: "3 ตัวอย่างภาพจริง",
        learningObjective: "ยกตัวอย่างการนำภาพ Raster ไปใช้ในธุรกิจดิจิทัล 3 รูปแบบหลัก พร้อมอธิบายเหตุผลที่เหมาะสม",
        content: [
            "1. ภาพถ่ายสินค้าและบรรจุภัณฑ์ (Product Packshot): โชว์พื้นผิวกล่อง ริบบิ้น และตัวสินค้าจริงเพื่อลงขายใน E-Commerce",
            "2. ภาพอาหารสำหรับโฆษณา (Food Advertising): โชว์ความฉ่ำวาว สีสันของขนมชั้นและทองหยิบเพื่อกระตุ้นความอยากอาหาร",
            "3. ภาพไลฟ์สไตล์สำหรับโซเชียลมีเดียและเว็บไซต์ (Social Media & Web): สร้างบรรยากาศการใช้งานจริงบน Facebook, IG และแบนเนอร์เว็บ"
        ],
        keyPoints: ["1. ภาพถ่ายสินค้า (Product Packshot)", "2. ภาพอาหารโฆษณา (Food Photo)", "3. ภาพโซเชียลมีเดีย & เว็บไซต์"],
        image: {
            src: "assets/images/raster-product-packshot.jpg",
            alt: "ภาพถ่ายสินค้ากล่องของขวัญขนมไทยในสตูดิโอ",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "มาดูสไลด์ที่ 3 ของเรื่อง Raster กันครับ ว่าในธุรกิจจริง เราใช้ภาพ Raster กับงานอะไรบ้าง บนจอมีภาพถ่ายจริง 3 ประเภท คือ 1) ภาพถ่ายสินค้าและแพ็กเกจจิงในสตูดิโอ 2) ภาพอาหารระยะใกล้ที่โชว์ความฉ่ำน่ากิน และ 3) ภาพไลฟ์สไตล์สำหรับโพสต์โซเชียลมีเดียและเว็บไซต์ ทั้ง 3 งานนี้ต้องใช้ Raster เพราะลูกค้าต้องการเห็น 'ของจริง แสงเงาจริง และพื้นผิวจริง' ก่อนตัดสินใจซื้อครับ",
            realLifeExample: "เวลาเราซื้อกล่องของขวัญขนมไทยใน Shopee หรือสั่งผ่านเพจ Facebook เราอยากเห็นรูปถ่ายขนมจริง ๆ ไม่ใช่รูปวาดการ์ตูน",
            guidingQuestion: "ถ้าร้านขนมใช้รูปวาดการ์ตูนแทนภาพถ่ายขนมจริงทั้งหมดในเมนูสั่งอาหาร ลูกค้าจะรู้สึกอย่างไรครับ?",
            expectedAnswer: "ลูกค้าจะไม่เห็นหน้าตาขนมจริง ไม่แน่ใจว่าของจริงน่ากินไหม และอาจไม่กล้าสั่งซื้อ",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="three-photo-grid">
                <div class="v5-info-card theme-blue">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">1</span>
                            <h3 class="v5-card-title">ภาพถ่ายสินค้า (Packshot)</h3>
                        </div>
                        <span class="v5-sub-pill">Product &amp; Packaging Photography</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/raster-product-packshot.jpg" alt="ภาพถ่ายสินค้ากล่องของขวัญขนมไทยในสตูดิโอพร้อมการจัดไฟ" loading="lazy">
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-box-open"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-blue">โชว์พื้นผิวจริง:</strong> แสดงลวดลายกล่องไม้ไผ่ ริบบิ้นทอง และหน้าตาขนมอย่างซื่อสัตย์</div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-cart-shopping"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-blue">ช่องทางใช้งาน:</strong> ลงขายในแค็ตตาล็อก Shopee, Lazada และเว็บ E-Commerce</div>
                        </div>
                    </div>
                </div>

                <div class="v5-info-card theme-amber">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">2</span>
                            <h3 class="v5-card-title">ภาพอาหารเพื่อการโฆษณา</h3>
                        </div>
                        <span class="v5-sub-pill">Food Advertising &amp; Menu</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/raster-thai-dessert-closeup.jpg" alt="ภาพถ่ายระยะใกล้ของขนมชั้นและทองหยิบที่แสดงความฉ่ำวาวของน้ำเชื่อม" loading="lazy">
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-utensils"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-amber">สีสันชวนหิว:</strong> พิกเซลเก็บความฉ่ำวาวของน้ำเชื่อมและชั้นใบเตยได้เหมือนจริง</div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-fire"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-amber">กระตุ้นยอดขาย:</strong> ดึงดูดสายตาลูกค้าบนป้ายเมนูและโฆษณาโปรโมชั่น</div>
                        </div>
                    </div>
                </div>

                <div class="v5-info-card theme-emerald">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">3</span>
                            <h3 class="v5-card-title">ภาพโซเชียลมีเดีย &amp; เว็บ</h3>
                        </div>
                        <span class="v5-sub-pill">Social Media &amp; Web Banner</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/raster-social-lifestyle.jpg" alt="ภาพถ่ายไลฟ์สไตล์สมาร์ตโฟนแสดงโพสต์ร้านขนมคู่กับขนมและกาแฟบนโต๊ะไม้" loading="lazy">
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-emerald">สร้างบรรยากาศ:</strong> ถ่ายทอด Mood &amp; Tone ของร้านขนมโฮมเมดให้อบอุ่น</div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-share-nodes"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-emerald">แชร์ต่อได้ง่าย:</strong> เหมาะสำหรับโพสต์ Facebook, IG และ Hero Banner เว็บไซต์</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 8: 5.1.1 ภาพกราฟิกแบบ Vector คืออะไร? (3 นาที)
    // Layout B: Large Photo + Explanation
    // =========================================================================
    {
        id: 8,
        theme: "light",
        slideType: "Concept Explanation",
        layout: "text-left-photo-right",
        section: "5.1.1 ประเภทของภาพกราฟิก (Raster vs Vector)",
        teachingTime: 3,
        timeGuide: "3 นาที (นาทีที่ 15–18)",
        kicker: "VECTOR GRAPHICS | ภาพเวกเตอร์ (1/2)",
        title: "ภาพกราฟิกแบบ Vector: คมกริบด้วยสมการคณิตศาสตร์",
        badge: "Mathematical Paths",
        learningObjective: "อธิบายหลักการทำงานของภาพ Vector ที่สร้างจากจุด (Anchor Point) เส้น (Path) และสมการคณิตศาสตร์",
        content: [
            "1. สร้างจากสมการคณิตศาสตร์: ใช้จุดยึด (Anchor Point), เส้นตรง, เส้นโค้ง (Bézier Curve) และรูปทรงเรขาคณิตแทนตารางพิกเซล",
            "2. ย่อ-ขยายได้ไม่จำกัดโดยไม่แตก (Resolution Independent): เมื่อขยายขนาด โปรแกรมจะคำนวณวาดเส้นใหม่ให้คมกริบเสมอ",
            "3. ไฟล์ที่พบบ่อยและโปรแกรม: ไฟล์ AI, EPS, SVG, PDF สร้างด้วย Adobe Illustrator, Inkscape, CorelDRAW หรือ Figma"
        ],
        keyPoints: ["สร้างจากจุดและเส้นคณิตศาสตร์", "ย่อ-ขยายไม่แตก 100%", "ไฟล์ AI, SVG, EPS, PDF"],
        image: {
            src: "assets/images/vector-pen-tool.png",
            alt: "ภาพหน้าจอการดัดเส้นโค้งเวกเตอร์ด้วยเครื่องมือ Pen Tool พร้อมจุด Anchor Point และแขนควบคุมทิศทาง",
            fit: "cover",
            focalPoint: "center",
            type: "mockup"
        },
        glossary: ["Vector", "SVG"],
        speakerNotes: {
            whatToSay: "คราวนี้มาดูฝั่งตรงข้ามกับ Raster คือ 'ภาพกราฟิกแบบ Vector' ครับ ถ้า Raster คือการเรียงเม็ดสี Vector ก็คือ 'การวาดเส้นด้วยสูตรคณิตศาสตร์' ดูภาพหน้าจอจริงด้านขวาครับ เวลาเราวาดภาพด้วยเครื่องมือ Pen Tool คอมพิวเตอร์จะจำตำแหน่งจุดสี่เหลี่ยม (Anchor Point) และองศาความโค้งของเส้น เวลาเราดึงขยายใหญ่ขึ้น 100 เท่า โปรแกรมจะคำนวณวาดเส้นใหม่ทันที ทำให้ขอบภาพคมกริบ 100% ไม่มีวันแตกเป็นสี่เหลี่ยมเลย!",
            realLifeExample: "โลโก้ร้านกาแฟ ตัวอักษรบนป้าย หรือสติกเกอร์ไลน์แบบเวกเตอร์ จะย่อเล็กเท่าเหรียญบาทหรือขยายเท่าตึก 3 ชั้นก็ยังคมชัดเท่าเดิม",
            guidingQuestion: "ถ้าเราต้องออกแบบ 'โลโก้ร้านขนมบ้านเรา' ทำไมจึงควรสร้างเป็นไฟล์ Vector ครับ?",
            expectedAnswer: "เพราะโลโก้ต้องนำไปใช้หลายขนาด ทั้งติดสติกเกอร์ดวงเล็ก ๆ บนกล่องขนม วางบนเพจ และขยายใหญ่ทำป้ายไวนิลหน้าร้าน",
            timeRecommended: "3 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card purple" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header" style="margin-bottom:8px;">
                            <div class="icon-box purple"><i class="fa-solid fa-bezier-curve"></i></div>
                            <h3 class="card-title">โครงสร้างของภาพ <span class="glossary-term" data-glossary="Vector">Vector</span></h3>
                        </div>
                        <p class="body-text">สร้างจาก<strong>จุดยึด (Anchor Points), เส้น (Paths), เส้นโค้ง และรูปทรงเรขาคณิต</strong> โดยอ้างอิงตำแหน่งและสีด้วยสมการทางคณิตศาสตร์</p>
                    </div>

                    <div class="step-list" style="flex:0 0 auto;">
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">1</div>
                            <div class="step-content">
                                <h4>ย่อหรือขยายขนาดใดก็ได้ ไม่สูญเสียความคมชัด</h4>
                                <p>เมื่อขยายขนาด โปรแกรมจะคำนวณสมการวาดเส้นขอบใหม่ให้คมกริบเสมอ</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">2</div>
                            <div class="step-content">
                                <h4>ขนาดไฟล์เล็ก &amp; แก้ไขสี/รูปทรงได้อิสระ</h4>
                                <p>เปลี่ยนสีกลีบบัว ดัดเส้นโค้ง หรือแยกชิ้นส่วนโลโก้ไปใช้งานต่อได้ทันที</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">3</div>
                            <div class="step-content">
                                <h4>นามสกุลไฟล์ &amp; โปรแกรมที่ใช้</h4>
                                <p>ไฟล์ <span class="glossary-term" data-glossary="SVG">SVG</span>, <strong>AI, EPS, PDF</strong> • โปรแกรม <strong>Illustrator, Inkscape, Figma</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="photo-showcase-card">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge purple"><i class="fa-solid fa-pen-nib"></i> หน้าจอทำงานจริง: เส้น Path &amp; จุด Anchor Point</span>
                        <img src="assets/images/vector-pen-tool.png" alt="ภาพหน้าจอการดัดเส้นโค้งเวกเตอร์ด้วยเครื่องมือ Pen Tool พร้อมจุด Anchor Point และแขนควบคุมทิศทาง" loading="lazy">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-compass-drafting" style="color:#9333EA;"></i> Bézier Curve &amp; Anchor Points:</strong> เส้นสีฟ้าและแขนดัดโค้งคำนวณด้วยคณิตศาสตร์ ขยายกี่เท่าเส้นก็ยังเรียบคมกริบ
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 9: Vector ในธุรกิจดิจิทัล — โลโก้เดียวใช้ได้ทุกขนาด (2 นาที)
    // Layout B: Large Photo + Explanation
    // =========================================================================
    {
        id: 9,
        theme: "light",
        slideType: "Real-world Example",
        layout: "photo-key-takeaways",
        section: "5.1.1 ประเภทของภาพกราฟิก (Raster vs Vector)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 18–20)",
        kicker: "VECTOR IN BUSINESS | โลโก้ขยายได้ทุกขนาด",
        title: "Vector ในธุรกิจจริง: โลโก้ไฟล์เดียว ขยายได้ตั้งแต่สติกเกอร์ถึงป้ายร้าน",
        badge: "Scalable Brand Assets",
        learningObjective: "เห็นภาพการนำไฟล์ Vector ต้นฉบับไปผลิตสื่อธุรกิจขนาดเล็ก กลาง และใหญ่โดยไม่สูญเสียความคมชัด",
        content: [
            "ขนาดเล็ก (3 ซม.): พิมพ์สติกเกอร์ติดกล่องขนมไทยและไอคอนโปรไฟล์โซเชียลมีเดีย",
            "ขนาดกลาง (10–30 ซม.): สกรีนลงแก้วกาแฟ ถุงกระดาษ เมนูหน้าร้าน และป้ายตั้งโต๊ะ",
            "ขนาดใหญ่ (2–10 เมตร): ตัดสติกเกอร์หรือผลิตป้ายอะคริลิกหน้าร้านขนาดใหญ่โดยเส้นโค้งยังคมชัด 100%"
        ],
        keyPoints: ["สติกเกอร์ติดกล่องขนม", "สกรีนแก้วและถุงกระดาษ", "ป้ายหน้าร้านขนาดใหญ่"],
        image: {
            src: "assets/images/vector-logo-scale-showcase.jpg",
            alt: "การนำโลโก้เวกเตอร์รูปดอกบัวสีทองไปใช้บนสติกเกอร์กล่องขนม แก้วเครื่องดื่ม และป้ายอะคริลิกหน้าร้านขนาดใหญ่",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "ดูภาพตัวอย่างการใช้งานจริงของร้านขนมไทยบนสไลด์นี้ครับ เมื่อเราออกแบบโลโก้รูปดอกบัวสีทองเป็นไฟล์ Vector เพียงไฟล์เดียว เราสามารถย่อลงมาพิมพ์สติกเกอร์ติดกล่องขนมขนาด 3 เซนติเมตร สกรีนลงข้างแก้ว หรือขยายใหญ่ทำป้ายอะคริลิกติดผนังหน้าร้านขนาดใหญ่ โดยที่เส้นกลีบบัวและตัวอักษรคมกริบทุกขนาด!",
            realLifeExample: "โรงพิมพ์ป้ายและโรงงานทำกล่องแพ็กเกจจิงจะขอไฟล์โลโก้เป็น AI, EPS หรือ PDF แบบ Vector เสมอ เพื่อนำไปเข้าเครื่องตัดหรือพิมพ์ความละเอียดสูง",
            guidingQuestion: "ถ้าเจ้าของร้านส่งไฟล์โลโก้ที่เป็นรูปแคปหน้าจอมือถือเล็ก ๆ ไปให้ร้านทำป้ายหน้าร้าน 3 เมตร จะเกิดปัญหาอะไรขึ้นครับ?",
            expectedAnswer: "ป้ายหน้าร้านจะมีขอบโลโก้แตกเบลอเป็นขั้นบันได ดูไม่สวยงามและไม่เป็นมืออาชีพ",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2-asym">
                <div class="photo-showcase-card">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge amber"><i class="fa-solid fa-maximize"></i> 1 ไฟล์ Vector ต้นฉบับ = ใช้ได้ทุกขนาดสื่อ</span>
                        <img src="assets/images/vector-logo-scale-showcase.jpg" alt="การนำโลโก้เวกเตอร์รูปดอกบัวสีทองไปใช้บนสติกเกอร์กล่องขนม แก้วเครื่องดื่ม และป้ายอะคริลิกหน้าร้านขนาดใหญ่" loading="lazy">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-award" style="color:#9333EA;"></i> Brand Identity:</strong> โลโก้ดอกบัวทองไฟล์ Vector เดียวกัน ใช้ได้ตั้งแต่ดวงตรา 3 ซม. ไปจนถึงป้ายผนังร้าน
                    </div>
                </div>

                <div class="card purple" style="justify-content:space-between;">
                    <h3 class="section-heading"><i class="fa-solid fa-layer-group" style="color:#9333EA;"></i> งานที่ต้องใช้ Vector เสมอ</h3>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">1</div>
                            <div class="step-content">
                                <h4>โลโก้แบรนด์ &amp; ตราสัญลักษณ์</h4>
                                <p>ต้องย่อ-ขยายไปวางบนสื่อทุกขนาดและส่งโรงพิมพ์ทำบล็อกสกรีนหรือไดคัต</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">2</div>
                            <div class="step-content">
                                <h4>ไอคอน UI, แผนที่ &amp; อินโฟกราฟิก</h4>
                                <p>ไฟล์ <span class="glossary-term" data-glossary="SVG">SVG</span> แสดงผลบนหน้าจอมือถือและจอ 4K ได้คมชัดโดยขนาดไฟล์เล็กมาก</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">3</div>
                            <div class="step-content">
                                <h4>ฟอนต์ตัวอักษร &amp; ลายเส้นบรรจุภัณฑ์</h4>
                                <p>ตัวอักษรและเส้นขอบกล่องขนมต้องคมกริบเมื่อพิมพ์จริง ไม่เบลอเป็นเม็ดสี</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 10: ตารางเปรียบเทียบ Raster vs Vector & การผสานใช้งานจริง (2 นาที)
    // Layout D: Before / After Comparison Table
    // =========================================================================
    {
        id: 10,
        theme: "light",
        slideType: "Comparison Table",
        layout: "before-after-comparison",
        section: "5.1.1 ประเภทของภาพกราฟิก (Raster vs Vector)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 20–22)",
        kicker: "COMPARISON | เปรียบเทียบ Raster vs Vector",
        title: "เปรียบเทียบหมัดต่อหมัด: Raster vs Vector และการผสานใช้งานจริง",
        badge: "Comparison Matrix",
        learningObjective: "เปรียบเทียบความแตกต่างทั้ง 5 มิติระหว่าง Raster กับ Vector และอธิบายการนำมาใช้ร่วมกันในงานเดียว",
        content: [
            "โครงสร้าง: Raster เกิดจากพิกเซล (Pixel) vs Vector เกิดจากจุดและเส้นคณิตศาสตร์ (Path)",
            "การขยายขนาด: Raster ขยายเกินขนาดจริงแล้วแตกเบลอ vs Vector ย่อ-ขยายได้ไม่จำกัดโดยคมชัดเสมอ",
            "การใช้งานร่วมกัน: ชิ้นงานโฆษณา 1 ชิ้น มักใช้ภาพถ่ายสินค้า (Raster) ร่วมกับโลโก้และป้ายราคา (Vector)"
        ],
        keyPoints: ["เปรียบเทียบ 5 ประเด็นหลัก", "งานจริงต้องผสานทั้งคู่", "ภาพถ่าย=Raster / โลโก้=Vector"],
        image: {
            src: "assets/images/bitmap-vs-svg-wikimedia.svg",
            alt: "แผนภาพเปรียบเทียบการขยายภาพ Bitmap ที่แตกเป็นพิกเซล กับภาพ Vector ที่เส้นคมชัด",
            fit: "contain",
            focalPoint: "center",
            type: "diagram"
        },
        speakerNotes: {
            whatToSay: "สไลด์นี้สรุปตารางเปรียบเทียบที่นักเรียนต้องใช้ทำใบงานในขั้นตอนที่ 2 ครับ ดูตารางด้านซ้ายและแผนภาพขยายด้านขวา ครูย้ำประเด็นสำคัญที่สุดว่า ในการทำงานจริง เราไม่ได้เลือกใช้อย่างใดอย่างหนึ่งแยกกันเด็ดขาด แต่โปสเตอร์ร้านขนม 1 ใบ จะใช้ภาพถ่ายขนมที่เป็น Raster วางคู่กับโลโก้ร้านและกรอบป้ายราคาที่เป็น Vector เสมอครับ",
            realLifeExample: "ภาพโพสต์ขายขนมชั้นบน Facebook: รูปขนมชั้นตรงกลางเป็น Raster ส่วนโลโก้ร้านมุมบนและป้ายราคา 45 บาทเป็น Vector",
            guidingQuestion: "ถ้าต้องทำโปสเตอร์ร้านขนม 1 ใบ ส่วนไหนควรเป็น Raster และส่วนไหนควรเป็น Vector ครับ?",
            expectedAnswer: "ภาพถ่ายขนมเป็น Raster ส่วนโลโก้ร้าน ไอคอน และข้อความราคาเป็น Vector",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2-asym">
                <div>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th style="width:24%;">ประเด็นเปรียบเทียบ</th>
                                <th style="width:38%;">ภาพ Raster (Bitmap)</th>
                                <th style="width:38%;">ภาพ Vector</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>1. โครงสร้างภาพ</strong></td>
                                <td>จุดพิกเซล (<span class="glossary-term" data-glossary="Pixel">Pixel</span>) เรียงเป็นตาราง</td>
                                <td>จุด เส้น และรูปทรงจากสมการคณิตศาสตร์</td>
                            </tr>
                            <tr>
                                <td><strong>2. เมื่อขยายใหญ่</strong></td>
                                <td style="color:#BE123C; font-weight:700;">ภาพแตก เห็นเป็นบล็อกสี่เหลี่ยม</td>
                                <td style="color:#047857; font-weight:700;">คมชัดเหมือนเดิมทุกขนาด 100%</td>
                            </tr>
                            <tr>
                                <td><strong>3. จุดเด่นของภาพ</strong></td>
                                <td>แสงเงาและการไล่สีสมจริงเหมือนภาพถ่าย</td>
                                <td>เส้นขอบคมกริบ แก้ไขสีและรูปทรงง่าย</td>
                            </tr>
                            <tr>
                                <td><strong>4. ไฟล์ &amp; โปรแกรม</strong></td>
                                <td>JPEG, PNG, PSD (Photoshop, GIMP)</td>
                                <td>AI, SVG, EPS (Illustrator, Inkscape)</td>
                            </tr>
                            <tr>
                                <td><strong>5. งานที่เหมาะสม</strong></td>
                                <td><strong>ภาพถ่ายขนม, ภาพสินค้า, ภาพรีทัช</strong></td>
                                <td><strong>โลโก้ร้าน, ไอคอน, ป้ายร้าน, ตัวอักษร</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card blue" style="justify-content:space-between;">
                    <h3 class="section-heading" style="font-size:32px;"><i class="fa-solid fa-magnifying-glass" style="color:#155EEF;"></i> เปรียบเทียบเมื่อซูมขยาย</h3>
                    <div class="img-frame" style="height:310px; background:#FFFFFF; padding:12px;">
                        <img src="assets/images/bitmap-vs-svg-wikimedia.svg" alt="แผนภาพเปรียบเทียบการขยายภาพ Bitmap ที่แตกเป็นพิกเซล กับภาพ Vector ที่เส้นคมชัด" loading="lazy">
                    </div>
                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-lightbulb"></i> สรุปใช้งานจริง</span>
                        <span class="easy-explain-text">สื่อโฆษณา 1 ชิ้น ผสานทั้งคู่เสมอ: <strong>ภาพถ่ายขนม (Raster) + โลโก้ร้านและป้ายราคา (Vector)</strong></span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 11: 5.1.2 ความละเอียดของภาพ: Pixel, 1080×1080 px & Aspect Ratio (3 นาที)
    // Layout F: Interactive Infographic + Realistic 4-Format Photo
    // =========================================================================
    {
        id: 11,
        theme: "light",
        slideType: "Interactive Diagram",
        layout: "interactive-zoom",
        section: "5.1.2 ความละเอียดและขนาดภาพ (Pixel, Aspect Ratio & PPI)",
        teachingTime: 3,
        timeGuide: "3 นาที (นาทีที่ 22–25)",
        kicker: "ASPECT RATIO | ขนาดและสัดส่วนภาพ",
        title: "ขนาดภาพ (Image Dimensions) และสัดส่วนภาพ (Aspect Ratio)",
        badge: "Interactive Ratio Explorer",
        learningObjective: "คำนวณจำนวนพิกเซลจากขนาดความกว้าง×ความสูง และเลือกสัดส่วนภาพ (1:1, 4:5, 16:9, 9:16) ให้ตรงกับแพลตฟอร์ม",
        content: [
            "ขนาดภาพ (Image Dimensions): บอกความกว้าง × ความสูงเป็นพิกเซล เช่น 1080 × 1080 px มีพิกเซลรวม 1,166,400 จุด",
            "สัดส่วนภาพ (Aspect Ratio): ความสัมพันธ์ระหว่างความกว้างและความสูง เช่น 1:1 (จัตุรัส), 4:5 (แนวตั้งโซเชียล), 16:9 (สไลด์/วิดีโอ), 9:16 (Story/Reels/TikTok)"
        ],
        keyPoints: ["1080 × 1080 px = 1,166,400 พิกเซล", "1:1 โพสต์สินค้าจัตุรัส", "16:9 สไลด์/YouTube, 9:16 TikTok/Reels"],
        image: {
            src: "assets/images/aspect-ratio-4-formats-real.jpg",
            alt: "ภาพถ่ายเปรียบเทียบขนมไทยในกรอบสัดส่วน 1:1, 4:5, 16:9 และ 9:16 บนอุปกรณ์จริง",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        glossary: ["Pixel", "Image Dimensions", "Aspect Ratio"],
        speakerNotes: {
            whatToSay: "มาต่อที่หัวข้อ 5.1.2 เรื่อง ขนาดภาพและสัดส่วนภาพครับ เวลาเราสร้างกระดาษใหม่ในโปรแกรมกราฟิก เราจะเจอตัวเลขเช่น '1080 × 1080 px' ตัวเลขแรกคือความกว้าง 1,080 พิกเซล ตัวเลขหลังคือความสูง 1,080 พิกเซล เมื่อคูณกันจะได้เม็ดสีรวมถึง 1,166,400 จุด! ลองคลิกปุ่มสัดส่วน 1:1, 4:5, 16:9 และ 9:16 บนจอควบคู่กับดูภาพถ่ายกรอบทั้ง 4 ทรงทางด้านขวา เพื่อดูว่าแต่ละทรงเหมาะกับแพลตฟอร์มไหนครับ",
            realLifeExample: "ในกิจกรรมท้ายบทเรียนวันนี้ เราจะตั้งค่าหน้ากระดาษขนาด 1080 × 1080 px (สัดส่วน 1:1) เพราะเป็นขนาดมาตรฐานยอดนิยมสำหรับโพสต์ขายสินค้าบน Facebook และ Instagram",
            guidingQuestion: "ถ้าต้องการทำภาพโปรโมตลง TikTok หรือ IG Story เต็มจอมือถือแนวตั้ง ควรใช้สัดส่วนเท่าใดครับ?",
            expectedAnswer: "สัดส่วน 9:16 (เช่น ขนาด 1080 × 1920 px)",
            timeRecommended: "3 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="interactive-diagram-box">
                    <div style="display:flex; align-items:center; justify-content:space-between;">
                        <h3 class="section-heading"><i class="fa-solid fa-crop-simple" style="color:#155EEF;"></i> คลิกเลือกสัดส่วนภาพ (<span class="glossary-term" data-glossary="Aspect Ratio">Aspect Ratio</span>)</h3>
                        <span class="kicker-pill"><i class="fa-solid fa-hand-pointer"></i> Interactive</span>
                    </div>

                    <div class="hotspot-tabs">
                        <button type="button" class="hotspot-btn ratio-tab active" data-ratio="1:1">
                            <i class="fa-regular fa-square"></i> <strong>1:1</strong> (1080 × 1080 px)
                        </button>
                        <button type="button" class="hotspot-btn ratio-tab" data-ratio="4:5">
                            <i class="fa-solid fa-mobile-screen"></i> <strong>4:5</strong> (1080 × 1350 px)
                        </button>
                        <button type="button" class="hotspot-btn ratio-tab" data-ratio="16:9">
                            <i class="fa-solid fa-desktop"></i> <strong>16:9</strong> (1920 × 1080 px)
                        </button>
                        <button type="button" class="hotspot-btn ratio-tab" data-ratio="9:16">
                            <i class="fa-solid fa-film"></i> <strong>9:16</strong> (1080 × 1920 px)
                        </button>
                    </div>

                    <div class="diagram-detail-panel" id="ratioDetailPanel">
                        <div class="icon-box blue" style="width:66px; height:66px; font-size:28px;">1:1</div>
                        <div>
                            <h3 class="section-heading" style="color:#155EEF; font-size:28px;">ขนาด 1080 × 1080 px (สัดส่วน 1:1 ภาพจัตุรัส)</h3>
                            <p class="body-text" style="color:#334155;">กว้าง 1,080 px × สูง 1,080 px (พื้นที่รวม <strong>1,166,400 พิกเซล</strong>) นิยมใช้สำหรับ<strong>โพสต์ภาพสินค้า</strong>บน Facebook และ Instagram (ใช้ในกิจกรรมฝึกปฏิบัติของหน่วยนี้)</p>
                        </div>
                    </div>

                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-calculator"></i> สูตรจำง่าย</span>
                        <span class="easy-explain-text">จำนวนพิกเซลทั้งหมด = <strong>ความกว้าง (Width) × ความสูง (Height)</strong></span>
                    </div>
                </div>

                <div class="photo-showcase-card">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge"><i class="fa-solid fa-clone"></i> ภาพเดียวกันใน 4 สัดส่วนมาตรฐาน (1:1 • 4:5 • 16:9 • 9:16)</span>
                        <img src="assets/images/aspect-ratio-4-formats-real.jpg" alt="ภาพถ่ายเปรียบเทียบขนมไทยในกรอบสัดส่วน 1:1, 4:5, 16:9 และ 9:16 บนอุปกรณ์จริง" loading="lazy">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-mobile-screen-button" style="color:#155EEF;"></i> เลือกกรอบให้ตรงแพลตฟอร์ม:</strong> 1:1 โพสต์สินค้าจัตุรัส • 4:5 โพสต์แนวตั้ง • 16:9 สไลด์/วิดีโอ • 9:16 Reels/TikTok
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 12: ความละเอียด PPI vs DPI และการคำนวณขนาดพิมพ์จริง @ 300 PPI (2 นาที)
    // Layout F: Interactive Calculator
    // =========================================================================
    {
        id: 12,
        theme: "light",
        slideType: "Concept Explanation",
        layout: "text-left-photo-right",
        section: "5.1.2 ความละเอียดและขนาดภาพ (Pixel, Aspect Ratio & PPI)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 25–27)",
        kicker: "PRINT RESOLUTION | ความละเอียด PPI & DPI",
        title: "เข้าใจค่า PPI กับ DPI และการคำนวณขนาดพิมพ์จริงที่ 300 PPI",
        badge: "Print Resolution",
        learningObjective: "แยกแยะความหมายของ PPI กับ DPI และคำนวณขนาดพิมพ์จริงจากจำนวนพิกเซลที่ความละเอียด 300 PPI ได้",
        content: [
            "PPI (Pixels Per Inch): จำนวนพิกเซลต่อความยาว 1 นิ้วของภาพ (งานพิมพ์มาตรฐานใช้ 300 PPI)",
            "DPI (Dots Per Inch): จำนวนจุดหมึกที่เครื่องพิมพ์พ่นได้ใน 1 นิ้ว (เป็นค่าของเครื่องพิมพ์)",
            "สูตรคำนวณขนาดพิมพ์ (นิ้ว) = จำนวนพิกเซล ÷ ค่า PPI เช่น ภาพกว้าง 1,200 px พิมพ์ที่ 300 PPI จะได้ขนาดกว้าง 4 นิ้ว"
        ],
        keyPoints: ["งานหน้าจอเน้นขนาด Pixel (72–96 PPI)", "งานพิมพ์คุณภาพสูงใช้ 300 PPI", "1,200 px ÷ 300 PPI = กว้าง 4 นิ้ว"],
        image: {
            src: "assets/images/cmyk-print-shop-proof.jpg",
            alt: "นักออกแบบตรวจสอบความคมชัดของโปสเตอร์งานพิมพ์ 300 PPI เทียบกับหน้าจอ",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        glossary: ["PPI", "DPI"],
        speakerNotes: {
            whatToSay: "อีกคำศัพท์ที่นักเรียนมักสับสนคือ PPI กับ DPI ครับ จำง่าย ๆ ว่า PPI (Pixels Per Inch) คือจำนวนเม็ดพิกเซลใน 1 นิ้วของไฟล์ภาพ ส่วน DPI (Dots Per Inch) คือหยดหมึกของเครื่องปริ้นเตอร์ สำหรับงานพิมพ์คุณภาพสูง เราต้องตั้งค่าที่ 300 PPI ลองคลิกปุ่มคำนวณด้านขวาดูครับ ถ้าภาพเรากว้าง 1,200 พิกเซล นำไปพิมพ์ที่ 300 PPI จะได้ความกว้างจริงเท่ากับ 1,200 หารด้วย 300 เท่ากับ 4 นิ้วพอดี!",
            realLifeExample: "ข้อควรระวังสำคัญมาก: ถ้าเรามีรูปที่เบลออยู่แล้ว การไปพิมพ์แก้ตัวเลขจาก 72 PPI เป็น 300 PPI เฉย ๆ โดยไม่ได้เพิ่มจำนวนพิกเซล ภาพจะไม่ชัดขึ้นนะครับ ต้องใช้ภาพต้นฉบับที่มีพิกเซลสูงตั้งแต่แรก",
            guidingQuestion: "ถ้าต้องการพิมพ์รูปขนมให้กว้าง 10 นิ้ว ที่ความละเอียด 300 PPI ภาพของเราต้องมีความกว้างกี่พิกเซลครับ?",
            expectedAnswer: "3,000 พิกเซล (10 นิ้ว × 300 PPI = 3,000 px)",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <h3 class="section-heading"><i class="fa-solid fa-print" style="color:#155EEF;"></i> ความแตกต่างระหว่าง PPI และ DPI</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <div class="step-num">PPI</div>
                            <div class="step-content">
                                <h4><span class="glossary-term" data-glossary="PPI">PPI</span> (Pixels Per Inch) — ค่าของไฟล์ภาพ</h4>
                                <p>จำนวนพิกเซลต่อความยาว 1 นิ้ว • <strong>งานพิมพ์มาตรฐานใช้ 300 PPI</strong> (ส่วนงานหน้าจอเน้นจำนวน px เช่น 1080×1080 px โดยค่าอ้างอิงเดิมคือ 72–96 PPI)</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">DPI</div>
                            <div class="step-content">
                                <h4><span class="glossary-term" data-glossary="DPI">DPI</span> (Dots Per Inch) — ค่าของเครื่องพิมพ์</h4>
                                <p>จำนวนจุดหมึกที่หัวพิมพ์พ่นได้ใน 1 นิ้ว (เป็นสเปกของเครื่องปริ้นเตอร์ เช่น 1,200 DPI)</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#E11D48;">
                            <div class="step-num" style="background:linear-gradient(135deg,#E11D48,#F43F5E);"><i class="fa-solid fa-triangle-exclamation"></i></div>
                            <div class="step-content">
                                <h4>ข้อควรระวังเรื่องการเปลี่ยนตัวเลข PPI</h4>
                                <p>การเปลี่ยนแต่ตัวเลข PPI โดยไม่เพิ่มจำนวนพิกเซล <strong>ไม่ได้ทำให้ภาพที่เบลอชัดขึ้น</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card emerald" style="justify-content:space-between;">
                    <div>
                        <h3 class="section-heading" style="color:#065F46;"><i class="fa-solid fa-ruler-horizontal"></i> ทดลองคำนวณขนาดพิมพ์จริง @ 300 PPI</h3>
                        <p class="card-text" style="margin-top:4px;">คลิกเลือกความกว้างพิกเซลเพื่อดูขนาดพิมพ์จริงบนกระดาษ (<code>พิกเซล ÷ 300 = นิ้ว</code>)</p>
                    </div>

                    <div class="grid-3" style="gap:12px; flex:0 0 auto;">
                        <button type="button" class="hotspot-btn ppi-btn active" data-px="1200" style="justify-content:center;">1,200 px</button>
                        <button type="button" class="hotspot-btn ppi-btn" data-px="1080" style="justify-content:center;">1,080 px</button>
                        <button type="button" class="hotspot-btn ppi-btn" data-px="3000" style="justify-content:center;">3,000 px</button>
                    </div>

                    <div class="diagram-detail-panel" id="ppiResultPanel" style="background:#FFFFFF;">
                        <div class="icon-box blue" style="width:70px; height:70px; font-size:28px;">4"</div>
                        <div>
                            <h3 class="section-heading" style="color:#155EEF; font-size:28px;">ภาพกว้าง 1,200 พิกเซล @ 300 PPI = กว้าง 4 นิ้ว</h3>
                            <p class="card-text">คำนวณจาก <code>1,200 px ÷ 300 PPI = 4 นิ้ว</code> ได้ภาพพิมพ์ขนาดการ์ดหรือรูปถ่ายที่คมชัดมาก</p>
                        </div>
                    </div>

                    <div class="easy-explain">
                        <span class="easy-explain-badge">จำขึ้นใจ!</span>
                        <span class="easy-explain-text"><strong>งานออนไลน์</strong> ดูที่ขนาดพิกเซล (เช่น 1080×1080 px) • <strong>งานพิมพ์</strong> ตั้งค่าความละเอียด <strong>300 PPI</strong></span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 13: 5.1.3 ระบบสี RGB — การผสมแสงสำหรับหน้าจอดิจิทัล (2 นาที)
    // Layout B: Large Photo + Explanation
    // =========================================================================
    {
        id: 13,
        theme: "light",
        slideType: "Concept Explanation",
        layout: "text-left-photo-right",
        section: "5.1.3 ระบบสีสำหรับงานดิจิทัลและงานพิมพ์ (RGB & CMYK)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 27–29)",
        kicker: "COLOR MODE | ระบบสีหน้าจอ RGB",
        title: "ระบบสี RGB: การผสมแสงสีแดง เขียว น้ำเงิน บนหน้าจอดิจิทัล",
        badge: "Additive Color (0–255)",
        learningObjective: "อธิบายหลักการผสมแสงของระบบสี RGB ค่าความเข้ม 0–255 และการนำไปใช้กับสื่อออนไลน์ทุกชนิด",
        content: [
            "RGB ย่อมาจาก Red (แสงสีแดง), Green (แสงสีเขียว) และ Blue (แสงสีน้ำเงิน) เป็นระบบสีแบบผสมแสง (Additive Color)",
            "เมื่อผสมแสงทั้ง 3 สีด้วยความเข้มสูงสุด RGB(255, 255, 255) จะได้แสงสีขาว และหากปิดแสงทั้งหมด RGB(0, 0, 0) จะเป็นสีดำ",
            "ใช้สำหรับงานที่แสดงผลบนหน้าจอทุกชนิด เช่น โพสต์ Facebook, Instagram, เว็บไซต์, แอปพลิเคชัน, วิดีโอ และสไลด์นำเสนอ"
        ],
        keyPoints: ["Red + Green + Blue (ผสมแสง)", "รวมกันครบได้แสงสีขาว", "ใช้กับงานหน้าจอและโซเชียลมีเดีย"],
        image: {
            src: "assets/images/rgb-subpixels.png",
            alt: "ภาพถ่ายมาโครขยายเม็ดไฟ Subpixel สีแดง เขียว น้ำเงิน บนหน้าจอ LCD จริง",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        glossary: ["RGB"],
        speakerNotes: {
            whatToSay: "เข้าสู่หัวข้อ 5.1.3 เรื่องระบบสีครับ ระบบแรกคือ RGB ย่อมาจาก Red (แดง), Green (เขียว), Blue (น้ำเงิน) เป็นระบบสีของ 'แสงไฟจากหน้าจอ' ดูภาพถ่ายมาโครขยายหน้าจอทีวีของจริงด้านขวาครับ ถ้าเราเอาแว่นขยายส่องจอมือถือหรือจอคอม เราจะเห็นหลอดไฟจิ๋ว ๆ 3 สี คือ แดง เขียว น้ำเงิน เรียงกันอยู่ ยิ่งเปิดไฟสว่างสุดพร้อมกัน 3 สี (ค่า 255, 255, 255) ตาเราจะเห็นเป็นสีขาว ดังนั้น งานอะไรก็ตามที่ทำเพื่อโชว์บนหน้าจอ ต้องตั้งค่าสีเป็น RGB เสมอครับ",
            realLifeExample: "ภาพโฆษณาร้านขนมสำหรับโพสต์ Facebook, แบนเนอร์เว็บไซต์, คลิป TikTok และสไลด์ที่เรากำลังเรียนอยู่นี้ ใช้โหมดสี RGB ทั้งหมด",
            guidingQuestion: "ถ้าเราตั้งค่าสี RGB(255, 0, 0) ในโปรแกรมกราฟิก เราจะได้สีอะไรออกมาครับ?",
            expectedAnswer: "สีแดงสด เพราะเปิดไฟสีแดงเต็มที่ (255) และปิดไฟสีเขียวกับน้ำเงิน (0)",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header" style="margin-bottom:8px;">
                            <div class="icon-box cyan"><i class="fa-solid fa-lightbulb"></i></div>
                            <h3 class="card-title">ระบบสี <span class="glossary-term" data-glossary="RGB">RGB</span> (Additive Color)</h3>
                        </div>
                        <p class="body-text">เกิดจากการผสม<strong>แสงสีหลัก 3 สี</strong> ได้แก่ <strong>Red (แดง), Green (เขียว), Blue (น้ำเงิน)</strong> โดยแต่ละสีมีค่าความสว่างตั้งแต่ <strong>0 ถึง 255</strong></p>
                    </div>

                    <div class="step-list" style="flex:0 0 auto;">
                        <div class="step-item" style="border-left-color:#EF4444;">
                            <div class="step-num" style="background:linear-gradient(135deg,#EF4444,#F43F5E);">R</div>
                            <div class="step-content">
                                <h4>ผสมแสงครบ 3 สีเต็มที่ = สีขาว</h4>
                                <p><code>RGB(255, 255, 255)</code> คือสีขาวสว่าง • <code>RGB(0, 0, 0)</code> คือสีดำมืดสนิท</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#10B981;">
                            <div class="step-num" style="background:linear-gradient(135deg,#059669,#10B981);">G</div>
                            <div class="step-content">
                                <h4>ให้ขอบเขตสีที่สดใสและสว่างมาก</h4>
                                <p>เพราะมีแหล่งกำเนิดแสงจากหลอดไฟ Backlight ของหน้าจอโดยตรง</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#2563EB;">
                            <div class="step-num" style="background:linear-gradient(135deg,#155EEF,#2563EB);">B</div>
                            <div class="step-content">
                                <h4>งานที่ต้องตั้งค่าเป็น RGB</h4>
                                <p>โพสต์ Facebook/IG, เว็บไซต์, แบนเนอร์ออนไลน์, ยูทูบ และสไลด์นำเสนอ</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid-2" style="grid-template-columns:1fr; grid-template-rows: 1.15fr 0.85fr; gap:16px;">
                    <div class="photo-showcase-card">
                        <div class="photo-media-wrap">
                            <span class="photo-floating-badge"><i class="fa-solid fa-microscope"></i> ภาพถ่ายมาโครของจริง: เม็ดไฟ RGB บนหน้าจอ</span>
                            <img src="assets/images/rgb-subpixels.png" alt="ภาพถ่ายมาโครขยายเม็ดไฟ Subpixel สีแดง เขียว น้ำเงิน บนหน้าจอ LCD จริง" loading="lazy">
                        </div>
                        <div class="photo-caption-bar">
                            <strong><i class="fa-solid fa-tv" style="color:#155EEF;"></i> เม็ดไฟ Subpixels จริงบนหน้าจอ:</strong> แท่งไฟสีแดง เขียว น้ำเงิน เรียงชิดกันเพื่อผสมแสงเข้าสู่ตาเรา
                        </div>
                    </div>

                    <div class="photo-showcase-card">
                        <div class="photo-media-wrap contain-mode" style="background:#F8FAFF; padding:10px;">
                            <span class="photo-floating-badge purple">การซ้อนทับของแสง RGB (รวมกันได้สีขาว)</span>
                            <img src="assets/images/rgb-color-mixing.png" alt="แผนภาพการผสมแสงสีแดง เขียว น้ำเงิน ได้แสงสีขาวตรงกลาง" loading="lazy">
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 14: ระบบสี CMYK & Color Gamut (2 นาที)
    // Layout B: Large Photo + Explanation
    // =========================================================================
    {
        id: 14,
        theme: "light",
        slideType: "Concept Explanation",
        layout: "text-left-photo-right",
        section: "5.1.3 ระบบสีสำหรับงานดิจิทัลและงานพิมพ์ (RGB & CMYK)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 29–31)",
        kicker: "COLOR MODE | ระบบสีงานพิมพ์ CMYK",
        title: "ระบบสี CMYK: สาเหตุที่สีพิมพ์จริงแตกต่างจากหน้าจอ",
        badge: "Print & Color Gamut",
        learningObjective: "อธิบายหลักการผสมหมึก 4 สี (CMYK) และสาเหตุที่สีบนหน้าจอ (RGB) อาจดูหม่นลงเมื่อพิมพ์จริงเนื่องจากขอบเขตสี (Color Gamut)",
        content: [
            "CMYK เป็นระบบผสมหมึกพิมพ์ 4 สี: Cyan (ฟ้าอมเขียว), Magenta (ม่วงแดง), Yellow (เหลือง) และ Key (สีดำ)",
            "ใช้หมึกสีดำ (K) ช่วยเพราะการผสม C+M+Y ล้วนจะได้สีน้ำตาลเข้มเกือบดำ หมึก K จึงช่วยให้ตัวอักษรคมชัดและประหยัดหมึกสี",
            "ขอบเขตสี (Color Gamut) ของหน้าจอ RGB กว้างกว่าหมึก CMYK ดังนั้นสีสดจัด ๆ บนจออาจดูดรอปลงเมื่อพิมพ์ลงกระดาษ"
        ],
        keyPoints: ["Cyan, Magenta, Yellow, Key (Black)", "ใช้กับโปสเตอร์ ป้ายร้าน บรรจุภัณฑ์", "RGB มีขอบเขตสี (Gamut) กว้างกว่า CMYK"],
        image: {
            src: "assets/images/cmyk-print-shop-proof.jpg",
            alt: "นักออกแบบกำลังเทียบแผ่นพิมพ์ตัวอย่าง CMYK กับหน้าจอคอมพิวเตอร์ RGB พร้อมขวดหมึก 4 สีและชาร์ตเทียบสี",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        glossary: ["CMYK", "Color Gamut", "RGB"],
        speakerNotes: {
            whatToSay: "แล้วถ้าเราจะทำป้ายไวนิลหน้าร้าน หรือพิมพ์กล่องขนมล่ะครับ? เครื่องพิมพ์ไม่ได้พ่นแสงไฟ แต่พ่น 'หมึกพิมพ์ 4 สี' ที่เรียกว่า CMYK ได้แก่ Cyan (ฟ้า), Magenta (ม่วงแดง), Yellow (เหลือง) และ K (Key หรือสีดำ) ดูภาพถ่ายด้านขวาครับ นักออกแบบกำลังถือแผ่นโปสเตอร์ที่พิมพ์ออกมาเทียบกับหน้าจอคอม สาเหตุที่สีบนกระดาษดูเข้มหรือหม่นกว่าบนจอ เป็นเพราะขอบเขตสี (Color Gamut) ของแสง RGB กว้างกว่าหมึก CMYK นั่นเองครับ",
            realLifeExample: "ถ้าเราเลือกสีเขียวนีออนสะท้อนแสงบนจอคอม พอสั่งปริ้นท์ลงกระดาษจริง สีจะกลายเป็นเขียวธรรมดา เพราะหมึก CMYK ไม่มีไฟส่องสว่างในตัวเอง",
            guidingQuestion: "ทำไมในระบบสี CMYK ถึงต้องมีหมึกสีดำ (K) แยกออกมาต่างหาก ไม่เอา C+M+Y ผสมกันเลยครับ?",
            expectedAnswer: "เพราะหมึก C+M+Y ผสมกันจริงจะได้แค่สีน้ำตาลคล้ำ ๆ ไม่ดำสนิท การใช้หมึกดำ K ช่วยให้ตัวหนังสือคมกริบ เปลืองหมึกน้อยลง และกระดาษไม่เปียกชุ่มเกินไป",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card amber" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header" style="margin-bottom:8px;">
                            <div class="icon-box amber"><i class="fa-solid fa-fill-drip"></i></div>
                            <h3 class="card-title">ระบบสี <span class="glossary-term" data-glossary="CMYK">CMYK</span> &amp; <span class="glossary-term" data-glossary="Color Gamut">Color Gamut</span></h3>
                        </div>
                        <p class="body-text">ระบบสีสำหรับ<strong>งานพิมพ์ทุกชนิด</strong> เกิดจากการผสมหมึก 4 สีลงบนวัสดุพิมพ์ ได้แก่ <strong>Cyan (ฟ้า), Magenta (ม่วงแดง), Yellow (เหลือง) และ Key (ดำ)</strong></p>
                    </div>

                    <div class="step-list" style="flex:0 0 auto;">
                        <div class="step-item" style="border-left-color:#D97706;">
                            <div class="step-num" style="background:linear-gradient(135deg,#D97706,#F59E0B);">1</div>
                            <div class="step-content">
                                <h4>ทำไมต้องมีหมึกสีดำ (K - Key)?</h4>
                                <p>เพราะหมึก C+M+Y ผสมกันจะได้สีน้ำตาลเข้มเกือบดำ หมึก K จึงช่วยให้สีดำลึกคมชัดและประหยัดหมึกสี</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">2</div>
                            <div class="step-content">
                                <h4>ทำไมสีพิมพ์จริงจึงต่างจากหน้าจอ? (Color Gamut)</h4>
                                <p>ขอบเขตสีของแสง <strong>RGB กว้างกว่าหมึก CMYK</strong> สีสะท้อนแสงบนจอจึงดูหม่นลงเมื่อพิมพ์บนกระดาษ</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#059669;">
                            <div class="step-num" style="background:linear-gradient(135deg,#059669,#10B981);">3</div>
                            <div class="step-content">
                                <h4>วิธีป้องกันสีเพี้ยนก่อนส่งโรงพิมพ์</h4>
                                <p>ตั้งโหมดสีไฟล์งานพิมพ์เป็น <strong>CMYK</strong> และตรวจสอบสีตัวอย่าง (Proof) ก่อนผลิตจริงจำนวนมาก</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="photo-showcase-card">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge amber"><i class="fa-solid fa-print"></i> ภาพถ่ายการเทียบสีจริง: หน้าจอ RGB vs งานพิมพ์ CMYK</span>
                        <img src="assets/images/cmyk-print-shop-proof.jpg" alt="นักออกแบบกำลังเทียบแผ่นพิมพ์ตัวอย่าง CMYK กับหน้าจอคอมพิวเตอร์ RGB พร้อมขวดหมึก 4 สีและชาร์ตเทียบสี" loading="lazy">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-swatchbook" style="color:#D97706;"></i> ขั้นตอนตรวจปรู๊ฟสี (Color Proofing):</strong> เทียบสีแผ่นพิมพ์ CMYK กับจอภาพและชาร์ตสีก่อนสั่งพิมพ์จริง
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 15: 5.1.4 รูปแบบไฟล์ภาพ Raster: JPEG vs PNG (2 นาที)
    // Layout D: Before / After Comparison
    // =========================================================================
    {
        id: 15,
        theme: "light",
        slideType: "Concept Explanation",
        layout: "before-after-comparison",
        section: "5.1.4 รูปแบบไฟล์ภาพและการเลือกใช้งาน (JPEG, PNG, SVG, PDF)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 31–33)",
        kicker: "FILE FORMATS | เปรียบเทียบ JPEG vs PNG",
        title: "เปรียบเทียบไฟล์ JPEG vs PNG: เลือกใช้อย่างไรให้เหมาะกับงาน?",
        badge: "Lossy vs Lossless",
        learningObjective: "เปรียบเทียบคุณสมบัติการบีบอัดและความโปร่งใสของไฟล์ JPEG และ PNG เพื่อเลือกใช้งานได้ถูกต้อง",
        content: [
            "JPEG (.jpg): บีบอัดแบบสูญเสียข้อมูลบางส่วน (Lossy) ขนาดไฟล์เล็ก โหลดไว เหมาะกับภาพถ่ายขนมและภาพสินค้า แต่ไม่รองรับพื้นหลังโปร่งใส",
            "PNG (.png): บีบอัดแบบไม่สูญเสียข้อมูล (Lossless) ขอบตัวอักษรคมชัด และรองรับพื้นหลังโปร่งใส (Alpha Transparency) เหมาะกับโลโก้ที่ต้องการวางซ้อนบนภาพอื่น"
        ],
        keyPoints: ["JPEG: ไฟล์เล็ก เหมาะกับภาพถ่าย ไม่ใส", "PNG: คมชัด รองรับพื้นหลังโปร่งใส", "ห้ามเซฟ JPEG ซ้ำหลายครั้งเพราะภาพจะดรอป"],
        image: {
            src: "assets/images/png-vs-jpeg-mockup.jpg",
            alt: "หน้าจอโปรแกรมกราฟิกเปรียบเทียบไฟล์โลโก้ JPEG ที่ติดพื้นหลังสีขาว กับไฟล์ PNG ที่พื้นหลังโปร่งใสวางซ้อนบนภาพขนมไทย",
            fit: "cover",
            focalPoint: "center",
            type: "mockup"
        },
        glossary: ["JPEG", "PNG"],
        speakerNotes: {
            whatToSay: "มาถึงหัวข้อ 5.1.4 เรื่องรูปแบบไฟล์ภาพที่นักเรียนต้องใช้ทุกวันครับ คู่แรกคือ JPEG กับ PNG ดูภาพหน้าจอเปรียบเทียบด้านขวาครับ ถ้าเราเซฟโลโก้ร้านเป็นไฟล์ JPEG มันจะติดกรอบสี่เหลี่ยมสีขาวทึบ ๆ มาด้วย เอาไปวางทับบนรูปขนมแล้วบังรูปขนมเสียสวยเลย แต่ถ้าเราเซฟเป็นไฟล์ PNG ซึ่งรองรับพื้นหลังโปร่งใส (สังเกตตารางหมากรุกเทา-ขาว) เวลาเอาโลโก้ไปวางซ้อนบนภาพขนม จะเห็นเฉพาะตัวโลโก้ลอยขึ้นมาสวยงามครับ!",
            realLifeExample: "เวลาโพสต์รูปถ่ายขนมทั่วไปใช้ JPEG เพื่อให้ไฟล์เล็กโหลดไว แต่ถ้าเป็นไฟล์โลโก้ร้านหรือภาพโฆษณาที่มีตัวหนังสือเยอะ ๆ ให้ใช้ PNG เพื่อให้ตัวอักษรคมกริบไม่เป็นขี้กลาก",
            guidingQuestion: "ถ้าเราเอาไฟล์ JPEG มาเปิดแก้ไขแล้วกด Save ทับซ้ำ ๆ กัน 20 รอบ จะเกิดอะไรขึ้นกับคุณภาพของภาพครับ?",
            expectedAnswer: "ภาพจะค่อย ๆ สูญเสียรายละเอียดและเกิดรอยแตกมัว ๆ (Compression Artifacts) เพราะ JPEG บีบอัดแบบ Lossy",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <h3 class="section-heading"><i class="fa-solid fa-file-image" style="color:#155EEF;"></i> ความแตกต่างระหว่าง JPEG กับ PNG</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <div class="step-num">JPG</div>
                            <div class="step-content">
                                <h4><span class="glossary-term" data-glossary="JPEG">JPEG / JPG</span> — ขวัญใจภาพถ่ายไฟล์เล็ก</h4>
                                <p>• บีบอัดแบบสูญเสียข้อมูลบางส่วน (<strong>Lossy</strong>) ทำให้ไฟล์เล็ก โหลดเร็ว<br>• <strong>ไม่รองรับพื้นหลังโปร่งใส</strong> (จะกลายเป็นพื้นสีขาวทึบ)<br>• เหมาะกับ: ภาพถ่ายขนม ภาพสินค้า ภาพกิจกรรมโพสต์เพจ</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#059669;">
                            <div class="step-num" style="background:linear-gradient(135deg,#059669,#10B981);">PNG</div>
                            <div class="step-content">
                                <h4><span class="glossary-term" data-glossary="PNG">PNG</span> — คมกริบ &amp; เจาะพื้นหลังโปร่งใสได้</h4>
                                <p>• บีบอัดแบบไม่สูญเสียข้อมูล (<strong>Lossless</strong>) ขอบตัวอักษรคมชัด<br>• <strong>รองรับพื้นหลังโปร่งใส (Transparency)</strong> วางซ้อนทับภาพอื่นได้ทันที<br>• เหมาะกับ: โลโก้พื้นหลังใส ป้ายราคา และภาพโฆษณาที่มีข้อความ</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="photo-showcase-card">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge emerald"><i class="fa-solid fa-chess-board"></i> เปรียบเทียบจริง: โลโก้ JPEG (ติดพื้นขาว) vs PNG (พื้นหลังใส)</span>
                        <img src="assets/images/png-vs-jpeg-mockup.jpg" alt="หน้าจอโปรแกรมกราฟิกเปรียบเทียบไฟล์โลโก้ JPEG ที่ติดพื้นหลังสีขาว กับไฟล์ PNG ที่พื้นหลังโปร่งใสวางซ้อนบนภาพขนมไทย" loading="lazy">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-circle-check" style="color:#059669;"></i> สังเกตความต่าง:</strong> ฝั่งซ้าย (JPEG) ติดกรอบสีขาวบังภาพขนม • ฝั่งขวา (PNG) พื้นหลังโปร่งใสวางทับภาพขนมได้แนบเนียน
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 16: ไฟล์ SVG & PDF + กิจกรรมจับคู่ไฟล์ 4 สถานการณ์จริง (3 นาที)
    // Layout F: Interactive Scenario Matcher
    // =========================================================================
    {
        id: 16,
        theme: "light",
        slideType: "Interactive Diagram",
        layout: "text-left-photo-right",
        section: "5.1.4 รูปแบบไฟล์ภาพและการเลือกใช้งาน (JPEG, PNG, SVG, PDF)",
        teachingTime: 3,
        timeGuide: "3 นาที (นาทีที่ 33–36)",
        kicker: "FILE FORMATS | ไฟล์ SVG & PDF + กิจกรรมจับคู่",
        title: "รู้จักไฟล์ SVG และ PDF: ฝึกเลือกไฟล์ให้ตรงกับงานจริง",
        badge: "4 Scenarios Activity",
        learningObjective: "อธิบายคุณสมบัติของไฟล์ SVG และ PDF และเลือกชนิดไฟล์ให้ตรงกับสถานการณ์ของร้านขนมพื้นเมืองทั้ง 4 ข้อได้",
        content: [
            "SVG (Scalable Vector Graphics): ไฟล์ภาพเวกเตอร์มาตรฐานสำหรับเว็บไซต์และงานออกแบบ ย่อ-ขยายได้ไม่จำกัดโดยไม่แตก",
            "PDF (Portable Document Format): ไฟล์เอกสารมาตรฐานที่รวมข้อความ ภาพ Raster และ Vector ไว้ด้วยกันโดยโครงสร้างไม่เพี้ยน เหมาะส่งโรงพิมพ์และส่งครู"
        ],
        keyPoints: ["SVG: เวกเตอร์คมชัดสำหรับเว็บ/โลโก้", "PDF: ไฟล์มาตรฐานส่งร้านพิมพ์", "ฝึกจับคู่ 4 สถานการณ์จริง"],
        image: {
            src: "assets/images/vector-logo-scale-showcase.jpg",
            alt: "การเลือกใช้ไฟล์กราฟิกให้เหมาะสมกับสถานการณ์ธุรกิจ",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        glossary: ["SVG", "PDF", "JPEG", "PNG"],
        speakerNotes: {
            whatToSay: "นอกจาก JPEG และ PNG แล้ว ยังมีอีก 2 นามสกุลสำคัญคือ SVG ซึ่งเป็นไฟล์เวกเตอร์สำหรับเว็บไซต์และโลโก้ที่ขยายยังไงก็ไม่แตก และ PDF ซึ่งเป็นไฟล์เอกสารมาตรฐานที่รวมได้ทั้งรูปภาพและตัวหนังสือ ส่งไปเปิดที่ร้านพิมพ์ไหนฟอนต์ก็ไม่เพี้ยน คราวนี้เรามาลองเล่นเกมจับคู่ 4 สถานการณ์ของร้านขนมทางด้านขวามือกันครับ ให้นักเรียนช่วยครูเลือกไฟล์ที่ถูกต้อง!",
            realLifeExample: "ทั้ง 4 สถานการณ์ในกล่องกิจกรรมด้านขวา คือคำถามเดียวกับที่นักเรียนจะต้องเขียนตอบลงในตารางเปรียบเทียบส่งครูในขั้นตอนที่ 2 ครับ",
            guidingQuestion: "สถานการณ์ที่ 1: ถ้าร้านต้องการโพสต์ภาพถ่ายขนมบน Facebook ให้ไฟล์ไม่ใหญ่เกินไป ควรคลิกเลือกปุ่มไหนครับ?",
            expectedAnswer: "เลือก JPEG ครับ/ค่ะ",
            timeRecommended: "3 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card purple" style="justify-content:space-between;">
                    <h3 class="section-heading"><i class="fa-solid fa-file-shield" style="color:#9333EA;"></i> คุณสมบัติของไฟล์ SVG และ PDF</h3>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">SVG</div>
                            <div class="step-content">
                                <h4><span class="glossary-term" data-glossary="SVG">SVG</span> (Scalable Vector Graphics)</h4>
                                <p>• ไฟล์เวกเตอร์ที่เก็บข้อมูลเป็นโค้ด XML คำนวณรูปทรงและสี<br>• <strong>ย่อ-ขยายได้ทุกขนาดโดยไม่สูญเสียความคมชัด</strong><br>• เหมาะกับ: โลโก้ร้านต้นฉบับ ไอคอนเว็บไซต์ และกราฟิกเวกเตอร์</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#D97706;">
                            <div class="step-num" style="background:linear-gradient(135deg,#D97706,#F59E0B);">PDF</div>
                            <div class="step-content">
                                <h4><span class="glossary-term" data-glossary="PDF">PDF</span> (Portable Document Format)</h4>
                                <p>• บรรจุได้ทั้ง<strong>ข้อความ ภาพ Raster และภาพ Vector</strong> ในไฟล์เดียว<br>• รักษาการจัดวางและฟอนต์ไม่ให้เพี้ยน รองรับงานหลายหน้า<br>• เหมาะกับ: <strong>ส่งไฟล์ป้ายร้านให้โรงพิมพ์</strong> แค็ตตาล็อก และส่งรายงานครู</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="interactive-diagram-box" style="justify-content:space-between;">
                    <div style="display:flex; align-items:center; justify-content:space-between;">
                        <span class="kicker-pill" id="scenarioStepBadge">สถานการณ์ที่ 1 จาก 4</span>
                        <div style="display:flex; gap:8px;">
                            <button type="button" class="nav-btn" id="btnScenarioPrev"><i class="fa-solid fa-chevron-left"></i> ข้อก่อนหน้า</button>
                            <button type="button" class="nav-btn primary" id="btnScenarioNext">ข้อถัดไป <i class="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>

                    <div style="background:linear-gradient(135deg,#EFF6FF,#F5F3FF); border:1.5px solid #93C5FD; border-radius:18px; padding:16px 20px;">
                        <p class="section-heading" id="scenarioQuestionText" style="font-size:28px; color:#101936;">“1. ร้านต้องการโพสต์ภาพถ่ายขนมบน Facebook โดยให้ไฟล์ไม่ใหญ่เกินไป ควรเลือกใช้ไฟล์ชนิดใด?”</p>
                    </div>

                    <div class="hotspot-tabs">
                        <button type="button" class="hotspot-btn fmt-choice-btn" data-fmt="JPEG"><i class="fa-regular fa-file-image"></i> <strong>JPEG (.jpg)</strong></button>
                        <button type="button" class="hotspot-btn fmt-choice-btn" data-fmt="PNG"><i class="fa-solid fa-chess-board"></i> <strong>PNG (.png)</strong></button>
                        <button type="button" class="hotspot-btn fmt-choice-btn" data-fmt="SVG"><i class="fa-solid fa-bezier-curve"></i> <strong>SVG (.svg)</strong></button>
                        <button type="button" class="hotspot-btn fmt-choice-btn" data-fmt="PDF"><i class="fa-regular fa-file-pdf"></i> <strong>PDF (.pdf)</strong></button>
                    </div>

                    <div class="diagram-detail-panel" id="scenarioFeedbackBox" style="min-height:92px;">
                        คลิกเลือกชนิดไฟล์ (JPEG, PNG, SVG หรือ PDF) เพื่อตรวจคำตอบ
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 17: 5.1.5 การวางแผนก่อนออกแบบสื่อ (1/2) (2 นาที)
    // Layout C: Full Photo + Floating Info Cards
    // =========================================================================
    {
        id: 17,
        theme: "light",
        slideType: "Concept Explanation",
        layout: "full-image-overlay",
        section: "5.1.5 การวางแผนก่อนออกแบบสื่อดิจิทัล",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 36–38)",
        kicker: "DESIGN PLANNING | การวางแผนก่อนออกแบบ (1/2)",
        title: "ก่อนเปิดโปรแกรมกราฟิก: 6 คำถามสำคัญที่ต้องวางแผน",
        badge: "Pre-Design Planning",
        learningObjective: "วิเคราะห์วัตถุประสงค์ กลุ่มเป้าหมาย ช่องทาง ขนาด เนื้อหาสำคัญ และลิขสิทธิ์ก่อนเริ่มออกแบบ",
        content: [
            "1. วัตถุประสงค์ของสื่อ & กลุ่มเป้าหมาย: ทำไปเพื่ออะไร (แนะนำร้านใหม่/โปรโมชั่น) และใครคือคนดู (วัยรุ่น/คนทำงาน/ครอบครัว)",
            "2. ช่องทางเผยแพร่ & ขนาดสื่อ: โพสต์ออนไลน์ (RGB 1080×1080 px) หรือพิมพ์โปสเตอร์หน้าร้าน (CMYK 300 PPI)",
            "3. ข้อมูลสำคัญ & ลิขสิทธิ์: เตรียมชื่อสินค้า ราคา ช่องทางติดต่อ และใช้ภาพ/ฟอนต์ที่ไม่ละเมิดลิขสิทธิ์"
        ],
        keyPoints: ["1. วัตถุประสงค์ & กลุ่มเป้าหมาย", "2. ช่องทาง & ขนาดสื่อ", "3. เนื้อหาสำคัญ & ลิขสิทธิ์ภาพ/ฟอนต์"],
        image: {
            src: "assets/images/design-planning-workspace.jpg",
            alt: "โต๊ะทำงานของนักออกแบบที่มีสมุดสเก็ตช์โครงร่าง Wireframe แถบสีครีม-ทอง และแท็บเล็ตวางแผนงาน",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        glossary: ["Design Brief"],
        speakerNotes: {
            whatToSay: "เข้าสู่หัวข้อสุดท้ายของภาคทฤษฎี 5.1.5 การวางแผนก่อนออกแบบสื่อครับ นักออกแบบมืออาชีพจะไม่เปิดโปรแกรมมาถึงแล้วลากรูปใส่ทันที แต่จะวางแผนบนสมุดสเก็ตช์หรือใบ Design Brief ก่อนเสมอ โดยตอบคำถาม 3 กลุ่มหลักบนหน้าจอ ได้แก่ 1) ทำเพื่ออะไรและใครดู 2) เอาไปลงช่องทางไหน ขนาดเท่าไร และ 3) ต้องมีข้อความอะไรบ้าง และภาพกับฟอนต์ที่ใช้ถูกลิขสิทธิ์หรือไม่",
            realLifeExample: "ถ้าร้านขนมไปก๊อปปี้รูปขนมของร้านอื่นจาก Google มาใส่โลโก้ตัวเองแล้วโพสต์ขาย นอกจากลูกค้าจะเข้าใจผิดแล้ว ยังผิดกฎหมายลิขสิทธิ์ด้วย",
            guidingQuestion: "ทำไมเราต้องรู้ 'ช่องทางเผยแพร่' ก่อนเริ่มสร้างไฟล์งานในโปรแกรมครับ?",
            expectedAnswer: "เพื่อจะได้ตั้งค่าขนาดพิกเซล สัดส่วนภาพ และโหมดสี (RGB หรือ CMYK) ได้ถูกต้องตั้งแต่เริ่มสร้างไฟล์ ไม่ต้องรื้อทำใหม่ทีหลัง",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="full-image-overlay-stage">
                <span class="photo-floating-badge"><i class="fa-solid fa-compass-drafting"></i> ขั้นตอนการวางแผนโครงร่าง (Wireframe &amp; Moodboard)</span>
                <img src="assets/images/design-planning-workspace.jpg" alt="โต๊ะทำงานของนักออกแบบที่มีสมุดสเก็ตช์โครงร่าง Wireframe แถบสีครีม-ทอง และแท็บเล็ตวางแผนงาน" loading="lazy">
                <div class="full-image-overlay-panel">
                    <div class="card blue">
                        <h3 class="section-heading" style="color:#155EEF; font-size:28px;"><i class="fa-solid fa-bullseye"></i> 1. เป้าหมาย &amp; กลุ่มลูกค้า</h3>
                        <p class="card-text">กำหนด<strong>วัตถุประสงค์</strong> (เปิดตัวสินค้า/โปรโมชั่น) และวิเคราะห์<strong>กลุ่มเป้าหมาย</strong> เพื่อเลือกโทนสีและอารมณ์ภาพให้ตรงใจคนซื้อ</p>
                    </div>
                    <div class="card purple">
                        <h3 class="section-heading" style="color:#7C3AED; font-size:28px;"><i class="fa-solid fa-sliders"></i> 2. ช่องทาง &amp; ค่าทางเทคนิค</h3>
                        <p class="card-text">ระบุช่องทางให้ชัด เช่น โพสต์ Facebook ใช้ <strong>1080×1080 px (RGB)</strong> หรือพิมพ์ป้ายร้านใช้ <strong>CMYK 300 PPI</strong></p>
                    </div>
                    <div class="card emerald">
                        <h3 class="section-heading" style="color:#059669; font-size:28px;"><i class="fa-solid fa-copyright"></i> 3. เนื้อหา &amp; ลิขสิทธิ์</h3>
                        <p class="card-text">เตรียมชื่อร้าน จุดเด่น ราคา เบอร์ติดต่อ และตรวจสอบ<strong>สิทธิ์การใช้งานรูปภาพและฟอนต์</strong>ให้ถูกต้องเสมอ</p>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 18: 5.1.5 หลักการจัดวางองค์ประกอบพื้นฐาน (2/2) (2 นาที)
    // Layout A: Three Premium Cards (using new visual-hierarchy-poster-real.jpg)
    // =========================================================================
    {
        id: 18,
        theme: "light",
        slideType: "Concept Explanation",
        layout: "three-photo-cards",
        section: "5.1.5 การวางแผนก่อนออกแบบสื่อดิจิทัล",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 38–40)",
        kicker: "VISUAL COMPOSITION | หลักการจัดวางองค์ประกอบ (2/2)",
        title: "หลักการจัดวางองค์ประกอบ: สื่ออ่านง่าย สวยงาม และน่าซื้อ",
        badge: "Visual Composition",
        learningObjective: "ประยุกต์ใช้หลัก Visual Hierarchy, Contrast, Alignment และ White Space ในการจัดวางสื่อประชาสัมพันธ์",
        content: [
            "1. ลำดับความสำคัญทางสายตา (Visual Hierarchy): ให้ภาพขนมและชื่อเมนูเด่นที่สุด ตามด้วยราคา และข้อมูลติดต่อ",
            "2. ความแตกต่างชัดเจน (Contrast): สีตัวอักษรต้องตัดกับพื้นหลัง เช่น พื้นครีมอ่อนใช้ตัวอักษรสีน้ำตาลเข้มให้อ่านง่าย",
            "3. การจัดแนวและพื้นที่ว่าง (Alignment & White Space): จัดข้อความให้เป็นระเบียบและเว้นพื้นที่ว่างไม่ให้ภาพอัดแน่นเกินไป"
        ],
        keyPoints: ["1. Visual Hierarchy (จุดเด่น-จุดรอง)", "2. Contrast (สีตัดกันอ่านง่าย)", "3. Alignment & White Space (เว้นช่องไฟ)"],
        image: {
            src: "assets/images/visual-hierarchy-poster-real.jpg",
            alt: "โปสเตอร์โฆษณาขนมไทยแสดงลำดับความสำคัญทางสายตา Visual Hierarchy อย่างชัดเจน",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        glossary: ["Design Brief"],
        speakerNotes: {
            whatToSay: "เมื่อเราวางแผนเสร็จแล้ว ตอนนำรูปขนมและตัวหนังสือมาจัดวางบนหน้ากระดาษ มีคาถา 3 ข้อที่ช่วยให้ผลงานของนักเรียนดูสวยเหมือนมืออาชีพทันทีครับ ข้อ 1 คือ Visual Hierarchy จัดคิวสายตาว่าอะไรคือพระเอก (เช่น ภาพขนมกับราคา 49 บาทต้องใหญ่ชัดเหมือนโปสเตอร์ในการ์ดใบแรก) ข้อ 2 คือ Contrast สีตัวหนังสือต้องตัดกับสีพื้นหลังให้อ่านง่าย และข้อ 3 คือ Alignment & White Space จัดแนวให้ตรงและเว้นที่ว่างให้ภาพดูสบายตา ไม่ยัดตัวหนังสือจนแน่นเต็มขอบครับ",
            realLifeExample: "ถ้าเราเอาตัวหนังสือสีเหลืองอ่อนไปวางบนพื้นหลังสีครีม ลูกค้าจะอ่านไม่ออกเลย ต้องเปลี่ยนเป็นตัวหนังสือสีน้ำตาลเข้มบนพื้นครีมจึงจะเกิด Contrast ที่ชัดเจน",
            guidingQuestion: "ในภาพโฆษณาขายขนม อะไรควรเป็นจุดเด่นอันดับ 1 ที่ใหญ่ที่สุดในภาพครับ?",
            expectedAnswer: "ภาพถ่ายขนม (จุดเด่นหลัก) คู่กับชื่อสินค้าและราคาที่ชัดเจน",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="three-photo-grid">
                <div class="v5-info-card theme-blue">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">1</span>
                            <h3 class="v5-card-title">ลำดับความสำคัญสายตา</h3>
                        </div>
                        <span class="v5-sub-pill">Visual Hierarchy (จุดเด่น – จุดรอง)</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/visual-hierarchy-poster-real.jpg" alt="โปสเตอร์โฆษณาขนมไทยแสดงลำดับความสำคัญทางสายตา Visual Hierarchy อย่างชัดเจน" loading="lazy">
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-eye"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-blue">จุดเด่นอันดับ 1:</strong> ภาพขนมขนาดใหญ่และพาดหัวชื่อเมนูต้องสะดุดตาทันที</div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-tags"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-blue">จุดเด่นอันดับ 2–3:</strong> ป้ายราคาเด่นชัด ตามด้วยช่องทางติดต่อด้านล่าง</div>
                        </div>
                    </div>
                </div>

                <div class="v5-info-card theme-amber">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">2</span>
                            <h3 class="v5-card-title">ความตัดกันให้อ่านง่าย</h3>
                        </div>
                        <span class="v5-sub-pill">Contrast &amp; Typography (ไม่เกิน 2 ฟอนต์)</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/thai-dessert-bulandanmek.jpg" alt="ภาพถ่ายขนมบุหลันดั้นเมฆที่มีสีน้ำเงินอัญชันตัดกับสีเหลืองทองตรงกลางอย่างชัดเจน" loading="lazy">
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-circle-half-stroke"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-amber">สีตัดกันชัดเจน:</strong> พื้นหลังสีอ่อนต้องใช้ตัวอักษรสีเข้ม (เช่น น้ำตาลเข้มบนพื้นครีม)</div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-font"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-amber">ฟอนต์อ่านง่าย:</strong> ใช้ฟอนต์ไทยหัวชัด ไม่เกิน 1–2 รูปแบบในชิ้นงานเดียว</div>
                        </div>
                    </div>
                </div>

                <div class="v5-info-card theme-emerald">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">3</span>
                            <h3 class="v5-card-title">การจัดแนว &amp; พื้นที่ว่าง</h3>
                        </div>
                        <span class="v5-sub-pill">Alignment &amp; White Space</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/raster-social-lifestyle.jpg" alt="การจัดวางโพสต์โซเชียลมีเดียที่มีพื้นที่ว่างสะอาดตาและจัดแนวเป็นระเบียบ" loading="lazy">
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-align-left"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-emerald">จัดแนวเป็นระเบียบ:</strong> ชิดซ้ายหรือกึ่งกลางให้เป็นแนวเดียวกัน ไม่วางสะเปะสะปะ</div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-expand"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-emerald">เว้นพื้นที่ว่าง:</strong> มีระยะห่างจากขอบภาพ (Safe Margin) ไม่ยัดข้อความจนแน่น</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 19: 5.2 กิจกรรมฝึกปฏิบัติ: โจทย์ “ร้านขนมพื้นเมือง” (2 นาที)
    // Layout B: Large Photo + Explanation
    // =========================================================================
    {
        id: 19,
        theme: "light",
        slideType: "Case Study",
        layout: "photo-key-takeaways",
        section: "5.2 กระบวนการจัดการเรียนรู้และฝึกปฏิบัติ",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 40–42)",
        kicker: "WORKSHOP BRIEF | โจทย์ฝึกปฏิบัติจริง",
        title: "โจทย์สถานการณ์จริง: ออกแบบสื่อโปรโมต “ร้านขนมพื้นเมือง”",
        badge: "Workshop 20 นาที",
        learningObjective: "เข้าใจโจทย์สถานการณ์จำลองของร้านขนมพื้นเมือง และภารกิจ 5 ขั้นตอนที่ต้องลงมือทำ",
        content: [
            "สถานการณ์: ร้านขนมพื้นเมืองในชุมชนชื่อ 'ร้านขนมบ้านเรา' ต้องการเริ่มโปรโมตสินค้าบนเพจ Facebook และทำป้ายหน้าร้าน",
            "ภารกิจของนักเรียน: วางแผนและออกแบบภาพประชาสัมพันธ์ขนาด 1080 × 1080 px (สัดส่วน 1:1, โหมดสี RGB) จำนวน 2 แนวทาง",
            "องค์ประกอบบังคับครบ 5 ส่วน: 1) ชื่อร้าน/โลโก้ 2) ภาพสินค้า 3) จุดเด่นสั้น ๆ 4) ราคา 5) ช่องทางติดต่อ"
        ],
        keyPoints: ["ร้านขนมบ้านเรา (ขนมไทยโฮมเมด)", "ขนาด 1080 × 1080 px (RGB)", "ครบ 5 องค์ประกอบ ออกแบบ 2 แนวทาง"],
        image: {
            src: "assets/images/thai-dessert-shop-real.jpg",
            alt: "หน้าร้านขนมบ้านเราที่มีขนมไทยโฮมเมดจัดแสดงในตู้กระจก",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "จบภาคทฤษฎีแล้ว คราวนี้ถึงเวลาที่ทุกคนจะได้ลงมือปฏิบัติจริงในหัวข้อ 5.2 ครับ! โจทย์ของเราวันนี้คือ มีร้านขนมพื้นเมืองในชุมชนชื่อ 'ร้านขนมบ้านเรา' เพิ่งเปิดเพจ Facebook ใหม่ อยากให้นักเรียนช่วยวางแผนและออกแบบภาพโปรโมตขนมขนาด 1080 × 1080 พิกเซล จำนวน 2 แบบ เพื่อคัดเลือกแบบที่ดีที่สุดไปใช้งานจริงครับ",
            realLifeExample: "โจทย์นี้เหมือนกับงานฟรีแลนซ์จริง ๆ ที่ลูกค้า SME มักจ้างทำภาพโพสต์ขายของบนเพจในราคาชิ้นละ 300–800 บาท",
            guidingQuestion: "ในโจทย์กำหนดให้ต้องมีข้อมูลบังคับครบกี่ส่วนในภาพครับ?",
            expectedAnswer: "5 ส่วน ได้แก่ 1. ชื่อร้านหรือโลโก้ 2. ภาพสินค้า 3. จุดเด่นสั้น ๆ 4. ราคา และ 5. ช่องทางติดต่อ",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2-asym">
                <div class="photo-showcase-card">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge"><i class="fa-solid fa-store"></i> ลูกค้าของคุณ: “ร้านขนมบ้านเรา” (ขนมไทยโฮมเมด)</span>
                        <img src="assets/images/thai-dessert-shop-real.jpg" alt="หน้าร้านขนมบ้านเราที่มีขนมไทยโฮมเมดจัดแสดงในตู้กระจก" loading="lazy">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-bullhorn" style="color:#155EEF;"></i> โจทย์ธุรกิจ:</strong> ร้านต้องการภาพโพสต์ Facebook ขนาด <strong>1080 × 1080 px (1:1)</strong> ที่ดูอบอุ่น น่ากิน และเห็นราคาชัดเจน
                    </div>
                </div>

                <div class="card blue" style="justify-content:space-between;">
                    <h3 class="section-heading" style="color:#155EEF;"><i class="fa-solid fa-clipboard-check"></i> ภารกิจ 5 ขั้นตอนของนักเรียน</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <div class="step-num">1–2</div>
                            <div class="step-content">
                                <h4>สำรวจสื่อ &amp; สร้างตารางเปรียบเทียบ</h4>
                                <p>แยกแยะองค์ประกอบ Raster/Vector และสรุปตารางเลือกไฟล์ 4 สถานการณ์</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">3</div>
                            <div class="step-content">
                                <h4>เขียนใบวางแผนงานออกแบบ (Design Brief)</h4>
                                <p>กำหนดกลุ่มเป้าหมาย โทนสี ขนาด 1080×1080 px และโครงร่าง 2 แนวทาง</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#059669;">
                            <div class="step-num" style="background:linear-gradient(135deg,#059669,#10B981);">4–5</div>
                            <div class="step-content">
                                <h4>สร้างชิ้นงาน 2 แบบ &amp; ปรับปรุงผลงาน</h4>
                                <p>ใส่ครบ 5 องค์ประกอบ (โลโก้, ภาพขนม, จุดเด่น, ราคา, ติดต่อ) และปรับปรุงจากคำแนะนำ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 20: ขั้นตอนที่ 1 — สำรวจและวิเคราะห์ตัวอย่างสื่อจริง (2 นาที)
    // Layout G: Step-by-Step Process
    // =========================================================================
    {
        id: 20,
        theme: "light",
        slideType: "Process Step-by-Step",
        layout: "step-photo-tutorial",
        section: "5.2 กระบวนการจัดการเรียนรู้และฝึกปฏิบัติ",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 42–44)",
        kicker: "STEP 1 OF 5 | สำรวจและวิเคราะห์สื่อ",
        title: "ขั้นตอนที่ 1: สำรวจตัวอย่างสื่อและแยกองค์ประกอบ Raster vs Vector",
        badge: "Step 1 of 5",
        learningObjective: "วิเคราะห์ตัวอย่างสื่อของร้านขนมเพื่อระบุว่าส่วนใดใช้ Raster ส่วนใดใช้ Vector และตั้งค่าสีอย่างไร",
        content: [
            "สำรวจองค์ประกอบที่ 1 (ภาพถ่ายขนมไทย): ใช้ภาพ Raster เพราะต้องการโชว์สีสันของใบเตย ทองหยิบ และความฉ่ำวาวเหมือนจริง",
            "สำรวจองค์ประกอบที่ 2 (โลโก้ร้านและป้ายราคา): ใช้ภาพ Vector เพื่อให้ขอบโลโก้และตัวเลขราคาคมกริบ ย่อ-ขยายไปทำป้ายหน้าร้านต่อได้",
            "วิเคราะห์การตั้งค่าสื่อ: โพสต์ออนไลน์ใช้โหมดสี RGB ส่วนป้ายหน้าร้านและเมนูพิมพ์ใช้โหมดสี CMYK ที่ 300 PPI"
        ],
        keyPoints: ["ภาพถ่ายขนม = Raster", "โลโก้และป้ายราคา = Vector", "โพสต์เพจ = RGB / ป้ายร้าน = CMYK"],
        image: {
            src: "assets/images/raster-thai-dessert-closeup.jpg",
            alt: "การแยกองค์ประกอบภาพถ่ายขนมแบบ Raster และโลโก้ร้านแบบ Vector",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "เริ่มขั้นตอนที่ 1 กันเลยครับ ให้แต่ละกลุ่มดูตัวอย่างสื่อของร้านขนมบนหน้าจอ แล้วช่วยกันวิเคราะห์ 2 ส่วนนี้ครับ ส่วนซ้ายคือภาพถ่ายขนมชั้นและทองหยิบ ส่วนขวาคือโลโก้ดอกบัวทองของร้านและป้ายแสดงหน้าร้าน เพื่อตรวจว่าเราแยกประเภทภาพและระบบสีถูกต้องไหมครับ",
            realLifeExample: "การฝึกมองสื่อโฆษณาแล้วแยกแยะออกทันทีว่าส่วนไหนคือภาพถ่ายไดคัต ส่วนไหนคือเวกเตอร์ จะช่วยให้เราสร้างเลเยอร์ในโปรแกรมได้ถูกต้อง",
            guidingQuestion: "ทำไมตัวเลขราคา 'กล่องละ 45 บาท' บนภาพโฆษณาจึงควรสร้างด้วยเครื่องมือ Text/Vector แทนการเขียนติดลงไปในรูปถ่ายตั้งแต่แรกครับ?",
            expectedAnswer: "เพราะทำให้ตัวเลขคมชัดอ่านง่าย และถ้าอนาคตร้านจัดโปรโมชั่นลดราคา ก็สามารถเปิดไฟล์ต้นฉบับมาพิมพ์แก้ตัวเลขได้ทันที",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="real-photo-card">
                    <div class="real-photo-thumb" style="height:290px;">
                        <span class="photo-floating-badge"><i class="fa-solid fa-camera"></i> องค์ประกอบที่ 1: ภาพถ่ายขนมไทย</span>
                        <img src="assets/images/raster-thai-dessert-closeup.jpg" alt="ภาพถ่ายขนมชั้นและทองหยิบสำหรับใช้เป็นภาพหลักในสื่อโฆษณา" loading="lazy">
                    </div>
                    <div class="real-photo-body">
                        <h3>1. ภาพถ่ายขนมชั้น &amp; ทองหยิบ</h3>
                        <p>• <strong>ประเภทภาพ:</strong> <span class="glossary-term" data-glossary="Raster">Raster</span> (ไฟล์ JPEG หรือ PNG ไดคัตพื้นหลัง)<br>• <strong>เหตุผล:</strong> แสดงสีเขียวใบเตยธรรมชาติและแสงเงาความฉ่ำวาวได้สมจริงที่สุด</p>
                    </div>
                </div>

                <div class="real-photo-card">
                    <div class="real-photo-thumb" style="height:290px;">
                        <span class="photo-floating-badge amber"><i class="fa-solid fa-bezier-curve"></i> องค์ประกอบที่ 2: โลโก้ร้าน &amp; สื่อสิ่งพิมพ์</span>
                        <img src="assets/images/vector-logo-scale-showcase.jpg" alt="โลโก้ร้านขนมแบบเวกเตอร์ที่นำไปใช้บนกล่องขนมและป้ายหน้าร้าน" loading="lazy">
                    </div>
                    <div class="real-photo-body">
                        <h3>2. โลโก้ร้าน ป้ายราคา &amp; ป้ายหน้าร้าน</h3>
                        <p>• <strong>ประเภทภาพ:</strong> <span class="glossary-term" data-glossary="Vector">Vector</span> (ต้นฉบับ AI / SVG ส่งออกเป็น PNG พื้นใสหรือ PDF)<br>• <strong>เหตุผล:</strong> ย่อติดสติกเกอร์กล่องขนมหรือขยายทำป้ายหน้าร้านได้คมกริบไม่แตก</p>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 21: ขั้นตอนที่ 2 — สรุปตารางเปรียบเทียบและเลือกไฟล์ 4 สถานการณ์ (2 นาที)
    // Layout G: Step-by-Step Tutorial Table
    // =========================================================================
    {
        id: 21,
        theme: "light",
        slideType: "Comparison Table",
        layout: "step-photo-tutorial",
        section: "5.2 กระบวนการจัดการเรียนรู้และฝึกปฏิบัติ",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 44–46)",
        kicker: "STEP 2 OF 5 | ตารางเลือกใช้ไฟล์",
        title: "ขั้นตอนที่ 2: สร้างตารางเลือกใช้ไฟล์ 4 สถานการณ์ของร้านขนม",
        badge: "Step 2 of 5",
        learningObjective: "จัดทำตารางสรุปการเลือกชนิดไฟล์และโหมดสีสำหรับ 4 สถานการณ์ของร้านขนมพื้นเมืองได้อย่างถูกต้อง",
        content: [
            "สถานการณ์ที่ 1: โพสต์ภาพถ่ายขนมบน Facebook -> เลือกไฟล์ JPEG (RGB) เพราะไฟล์เล็ก โหลดเร็ว สีสดใสบนหน้าจอ",
            "สถานการณ์ที่ 2: บันทึกโลโก้พื้นหลังโปร่งใสวางซ้อนบนภาพขนม -> เลือกไฟล์ PNG (RGB) เพราะรองรับ Alpha Transparency",
            "สถานการณ์ที่ 3: เก็บไฟล์โลโก้และไอคอนเวกเตอร์ต้นฉบับ -> เลือกไฟล์ SVG / AI เพราะย่อ-ขยายได้ไม่แตก",
            "สถานการณ์ที่ 4: ส่งไฟล์แบบป้ายหน้าร้านให้ร้านพิมพ์ -> เลือกไฟล์ PDF (CMYK, 300 PPI) เพราะรักษาโครงสร้างและฟอนต์ไม่เพี้ยน"
        ],
        keyPoints: ["1. โพสต์รูปขนม = JPEG", "2. โลโก้พื้นใส = PNG", "3. โลโก้ขยายได้ = SVG", "4. ส่งร้านพิมพ์ = PDF"],
        image: {
            src: "assets/images/png-vs-jpeg-mockup.jpg",
            alt: "ตารางสรุปการเลือกใช้ไฟล์ภาพทั้ง 4 สถานการณ์ของร้านขนม",
            fit: "cover",
            focalPoint: "center",
            type: "mockup"
        },
        speakerNotes: {
            whatToSay: "ในขั้นตอนที่ 2 นักเรียนต้องสร้างตารางสรุป 1 หน้าเพื่อส่งเป็นหลักฐานชิ้นที่ 1 ครับ นอกจากการเปรียบเทียบ Raster กับ Vector แล้ว ในตารางต้องตอบคำถาม 4 สถานการณ์ของร้านขนมตามตารางบนหน้าจอนี้ให้ครบถ้วน พร้อมระบุเหตุผลสั้น ๆ ว่าทำไมถึงเลือกไฟล์ชนิดนั้นครับ",
            realLifeExample: "ตารางนี้เปรียบเสมือนคัมภีร์ประจำตัวเวลาทำงานส่งลูกค้า จะได้ไม่สับสนว่าตอนไหนต้องส่ง JPG, PNG, SVG หรือ PDF",
            guidingQuestion: "ในสถานการณ์ที่ 4 ที่ต้องส่งไฟล์แบบป้ายหน้าร้านให้โรงพิมพ์ นอกจากเลือกไฟล์ PDF แล้ว ควรตั้งค่าโหมดสีและความละเอียดเท่าไรครับ?",
            expectedAnswer: "ตั้งโหมดสีเป็น CMYK และความละเอียด 300 PPI",
            timeRecommended: "2 นาที"
        },
        html: `
            <div style="display:flex; flex-direction:column; gap:14px; height:100%; justify-content:space-between;">
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th style="width:36%;">สถานการณ์ของร้านขนมพื้นเมือง</th>
                            <th style="width:18%;">ไฟล์ที่เลือก</th>
                            <th style="width:16%;">ระบบสี / ค่า</th>
                            <th style="width:30%;">เหตุผลประกอบการตัดสินใจ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. โพสต์ภาพถ่ายขนมบน Facebook</strong></td>
                            <td><span style="background:#DBEAFE; color:#1E40AF; padding:4px 12px; border-radius:8px; font-weight:700;">JPEG (.jpg)</span></td>
                            <td>RGB (1080×1080)</td>
                            <td>บีบอัดไฟล์ให้เล็ก โหลดไว แสดงแสงเงาภาพถ่ายขนมได้สวย</td>
                        </tr>
                        <tr>
                            <td><strong>2. โลโก้ร้านพื้นหลังโปร่งใสวางทับภาพ</strong></td>
                            <td><span style="background:#D1FAE5; color:#065F46; padding:4px 12px; border-radius:8px; font-weight:700;">PNG (.png)</span></td>
                            <td>RGB (Alpha)</td>
                            <td>รองรับพื้นหลังใส (Transparency) ขอบโลโก้คมชัดไม่ติดกรอบขาว</td>
                        </tr>
                        <tr>
                            <td><strong>3. เก็บโลโก้และไอคอนที่ขยายได้ไม่แตก</strong></td>
                            <td><span style="background:#EDE9FE; color:#5B21B6; padding:4px 12px; border-radius:8px; font-weight:700;">SVG (.svg) / AI</span></td>
                            <td>Vector Path</td>
                            <td>คำนวณด้วยสมการคณิตศาสตร์ ย่อ-ขยายไปใช้กับสื่อทุกขนาดได้คมกริบ</td>
                        </tr>
                        <tr>
                            <td><strong>4. ส่งแบบป้ายหน้าร้านให้ร้านพิมพ์</strong></td>
                            <td><span style="background:#FEF3C7; color:#92400E; padding:4px 12px; border-radius:8px; font-weight:700;">PDF (.pdf)</span></td>
                            <td>CMYK (300 PPI)</td>
                            <td>รวมภาพและฟอนต์ไว้ครบถ้วน เปิดที่ร้านพิมพ์แล้วโครงสร้างไม่เพี้ยน</td>
                        </tr>
                    </tbody>
                </table>

                <div class="easy-explain">
                    <span class="easy-explain-badge"><i class="fa-solid fa-file-circle-check"></i> ชิ้นงานส่งครู #1</span>
                    <span class="easy-explain-text">บันทึกตารางเปรียบเทียบ Raster vs Vector และการเลือกใช้ไฟล์ 4 สถานการณ์นี้เป็นไฟล์เอกสาร 1 หน้า</span>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 22: ขั้นตอนที่ 3 — เขียนใบวางแผนงานออกแบบ (Design Brief) (2 นาที)
    // Layout G: Step-by-Step Process
    // =========================================================================
    {
        id: 22,
        theme: "light",
        slideType: "Process Step-by-Step",
        layout: "step-photo-tutorial",
        section: "5.2 กระบวนการจัดการเรียนรู้และฝึกปฏิบัติ",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 46–48)",
        kicker: "STEP 3 OF 5 | ใบวางแผนงานออกแบบ",
        title: "ขั้นตอนที่ 3: เขียนใบวางแผนงานออกแบบ (Design Brief) 1 หน้า",
        badge: "Step 3 of 5",
        learningObjective: "เขียนใบวางแผนงานออกแบบ (Design Brief) ที่มีรายละเอียดครบทั้ง 9 หัวข้อสำหรับร้านขนมพื้นเมือง",
        content: [
            "ส่วนที่ 1 ข้อมูลการตลาด: ชื่อผลงาน/หัวข้อสื่อ, กลุ่มเป้าหมาย (วัยเรียน/วัยทำงาน/ผู้ซื้อของฝาก), ช่องทางเผยแพร่ (Facebook Page)",
            "ส่วนที่ 2 แนวคิดและเนื้อหา: โทนสีและอารมณ์ของงาน (ครีม-น้ำตาลทอง-เขียวใบเตย), ข้อความสำคัญ (ชื่อร้าน, จุดเด่น, ราคา 45 บาท, เบอร์โทร)",
            "ส่วนที่ 3 ข้อมูลเทคนิค: ขนาดงาน 1080×1080 px (1:1), ระบบสี RGB, ชนิดไฟล์ส่งออก PNG + ไฟล์ต้นฉบับ PSD/AI และร่างโครงสร้าง 2 แนวทาง"
        ],
        keyPoints: ["กำหนดกลุ่มเป้าหมายและโทนสี", "ระบุขนาด 1080×1080 px โหมด RGB", "ร่างแนวคิดการจัดวาง 2 แนวทาง"],
        image: {
            src: "assets/images/design-planning-workspace.jpg",
            alt: "ตัวอย่างการเขียนใบวางแผนงานออกแบบ Design Brief และเลือกโทนสี",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        glossary: ["Design Brief"],
        speakerNotes: {
            whatToSay: "มาถึงขั้นตอนที่ 3 ก่อนเปิดโปรแกรมกราฟิก ให้นักเรียนเขียน 'ใบวางแผนงานออกแบบ (Design Brief)' ความยาว 1 หน้าครับ ดูตัวอย่างของร้านขนมบ้านเราบนหน้าจอ เราต้องระบุให้ครบตั้งแต่ ชื่อหัวข้อ กลุ่มเป้าหมาย โทนสีครีม-น้ำตาลทอง-เขียวใบเตย ข้อความบังคับ 5 ส่วน ไปจนถึงขนาด 1080×1080 px ระบบสี RGB และการร่างแนวคิด 2 แบบครับ",
            realLifeExample: "เมื่อเรามีใบ Design Brief ที่ชัดเจน ตอนเปิดโปรแกรมสร้างงาน เราจะใช้เวลาเร็วขึ้นมากเพราะรู้แล้วว่าจะวางอะไรตรงไหนและใช้สีอะไร",
            guidingQuestion: "โทนสีแบบไหนที่เหมาะกับ 'ร้านขนมไทยโฮมเมด' เพื่อให้ดูอบอุ่นและน่ากินครับ?",
            expectedAnswer: "โทนสีครีม น้ำตาลทอง เขียวใบเตย หรือสีเอิร์ธโทนที่ดูเป็นธรรมชาติและขับให้สีขนมดูโดดเด่น",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <h3 class="section-heading"><i class="fa-solid fa-file-signature" style="color:#155EEF;"></i> ตัวอย่าง <span class="glossary-term" data-glossary="Design Brief">Design Brief</span>: ร้านขนมบ้านเรา</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <div class="step-num">1</div>
                            <div class="step-content">
                                <h4>ชื่อผลงาน &amp; กลุ่มเป้าหมาย</h4>
                                <p><strong>“ขนมไทยบ้านเรา หอมสดใหม่ทุกเช้า”</strong> • เป้าหมาย: วัยเรียน วัยทำงาน และผู้ซื้อของฝากในชุมชน</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#D97706;">
                            <div class="step-num" style="background:linear-gradient(135deg,#D97706,#F59E0B);">2</div>
                            <div class="step-content">
                                <h4>โทนสี &amp; ข้อความบังคับ 5 ส่วน</h4>
                                <p>โทนสี<strong>ครีมอ่อน-น้ำตาลทอง-เขียวใบเตย</strong> • ข้อความ: โลโก้ร้าน, ภาพขนมชั้น, “ทำสดใหม่ หวานน้อย”, <strong>กล่องละ 45.-</strong>, โทร/Line</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#059669;">
                            <div class="step-num" style="background:linear-gradient(135deg,#059669,#10B981);">3</div>
                            <div class="step-content">
                                <h4>ข้อกำหนดทางเทคนิค (Technical Spec)</h4>
                                <p>ช่องทาง Facebook • ขนาด <strong>1080 × 1080 px (1:1)</strong> • ระบบสี <strong>RGB</strong> • ไฟล์ส่งออก <strong>PNG</strong> + ต้นฉบับแยกเลเยอร์</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="photo-showcase-card">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge amber"><i class="fa-solid fa-palette"></i> การวางแผนโทนสีและร่างโครงสร้าง 2 แนวทาง</span>
                        <img src="assets/images/design-planning-workspace.jpg" alt="ตัวอย่างการเขียนใบวางแผนงานออกแบบ Design Brief และเลือกโทนสีครีม-น้ำตาลทอง-เขียวใบเตย" loading="lazy">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-check-double" style="color:#059669;"></i> ชิ้นงานส่งครู #2:</strong> ใบวางแผนงานออกแบบ (Design Brief) ความยาว 1 หน้า พร้อมร่างแนวคิดการจัดวาง 2 แบบ
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 23: ขั้นตอนที่ 4 (1/2) — ตั้งค่าหน้ากระดาษ 1080×1080 px และจัดองค์ประกอบ 5 ส่วน (3 นาที)
    // Layout G: Step-by-Step Photo Tutorial
    // =========================================================================
    {
        id: 23,
        theme: "light",
        slideType: "Process Step-by-Step",
        layout: "step-photo-tutorial",
        section: "5.2 กระบวนการจัดการเรียนรู้และฝึกปฏิบัติ",
        teachingTime: 3,
        timeGuide: "3 นาที (นาทีที่ 48–51)",
        kicker: "STEP 4 OF 5 | สร้างชิ้นงานจริง (1/2)",
        title: "ขั้นตอนที่ 4: ตั้งค่าหน้ากระดาษ 1080 × 1080 px และจัดวาง 5 องค์ประกอบ",
        badge: "Step 4 of 5",
        learningObjective: "ตั้งค่าหน้ากระดาษในโปรแกรมกราฟิกขนาด 1080×1080 px โหมดสี RGB และแยกเลเยอร์องค์ประกอบทั้ง 5 ส่วนได้",
        content: [
            "1. ตั้งค่าไฟล์ใหม่ (New Document): Width = 1080 px, Height = 1080 px (1:1), Color Mode = RGB",
            "2. จัดวางองค์ประกอบบังคับครบ 5 ส่วนบนเลเยอร์ที่แยกกัน: โลโก้ร้าน (Vector), ภาพขนม (Raster), จุดเด่นสั้น ๆ, ราคา และช่องทางติดต่อ",
            "3. บันทึกไฟล์ต้นฉบับแยกเลเยอร์ (เช่น .psd, .ai, .xcf หรือลิงก์โปรเจกต์) เพื่อให้แก้ไขภายหลังได้สะดวก"
        ],
        keyPoints: ["ตั้งค่า 1080 × 1080 px (RGB)", "แยกเลเยอร์ครบ 5 องค์ประกอบ", "เซฟทั้งไฟล์ต้นฉบับและไฟล์ PNG"],
        image: {
            src: "assets/images/student-designing-canvas.jpg",
            alt: "ภาพหน้าจอการออกแบบสื่อร้านขนมไทยขนาด 1080x1080 พิกเซลในโปรแกรมกราฟิก",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "มาถึงขั้นตอนที่ 4 ลงมือสร้างชิ้นงานในโปรแกรมกราฟิกครับ ขั้นแรกให้ทุกคนกด New Document ตั้งค่าความกว้าง 1080 พิกเซล ความสูง 1080 พิกเซล และเลือก Color Mode เป็น RGB จากนั้นนำองค์ประกอบทั้ง 5 ส่วนมาจัดวางโดยแยกชั้น Layer ออกจากกัน เพื่อให้ขยับปรับขนาดแต่ละชิ้นได้อิสระเหมือนภาพหน้าจอทำงานจริงด้านขวาครับ",
            realLifeExample: "การแยก Layer เหมือนการวางแผ่นใสซ้อนกัน ถ้าเราอยากขยายแต่ป้ายราคาให้ใหญ่ขึ้น เราก็คลิกที่ Layer ป้ายราคาแล้วขยายได้ทันทีโดยไม่กระทบภาพขนมข้างหลัง",
            guidingQuestion: "ถ้าเราเผลอรวมเลเยอร์ (Flatten Image) แล้วเซฟทับไฟล์ต้นฉบับไปเลย เวลามาแก้ราคาในวันพรุ่งนี้จะเกิดปัญหาอะไรครับ?",
            expectedAnswer: "จะไม่สามารถคลิกแก้ตัวเลขราคาหรือขยับข้อความแยกชิ้นได้ ต้องลบทำใหม่",
            timeRecommended: "3 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card emerald" style="justify-content:space-between;">
                    <h3 class="section-heading" style="color:#065F46;"><i class="fa-solid fa-sliders"></i> เช็กลิสต์ตั้งค่าไฟล์ &amp; 5 องค์ประกอบบังคับ</h3>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#059669;">
                            <div class="step-num" style="background:linear-gradient(135deg,#059669,#10B981);">1</div>
                            <div class="step-content">
                                <h4>ตั้งค่าหน้ากระดาษ (Canvas Setup)</h4>
                                <p>ขนาด <strong>1080 × 1080 px</strong> (อัตราส่วน 1:1) • ระบบสี <strong>RGB Color</strong></p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#155EEF;">
                            <div class="step-num">2</div>
                            <div class="step-content">
                                <h4>ใส่ข้อมูลครบ 5 องค์ประกอบ (แยก Layer)</h4>
                                <p>① <strong>ชื่อร้าน/โลโก้</strong> (Vector) ② <strong>ภาพขนม</strong> (Raster) ③ <strong>ข้อความจุดเด่น</strong> ④ <strong>ราคา</strong> ⑤ <strong>ช่องทางติดต่อ</strong></p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">3</div>
                            <div class="step-content">
                                <h4>บันทึกไฟล์ 2 รูปแบบเสมอ</h4>
                                <p>เก็บ<strong>ไฟล์ต้นฉบับ</strong> (.psd / .ai / .svg) และส่งออก<strong>ไฟล์ผลงานสำเร็จ</strong> (.png / .jpg)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="photo-showcase-card">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge emerald"><i class="fa-solid fa-desktop"></i> หน้าจอปฏิบัติงานจริง: ออกแบบ 2 แนวทางเทียบกัน</span>
                        <img src="assets/images/student-designing-canvas.jpg" alt="ภาพหน้าจอการออกแบบสื่อร้านขนมไทยขนาด 1080x1080 พิกเซลในโปรแกรมกราฟิก" loading="lazy">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-layer-group" style="color:#059669;"></i> การทำงานแบบมืออาชีพ:</strong> แยกเลเยอร์ภาพถ่ายขนม (Raster) ออกจากโลโก้และป้ายราคา (Vector)
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 24: ขั้นตอนที่ 4 (2/2) — เปรียบเทียบ 2 แนวทางการจัดวาง (Layout A vs Layout B) (2 นาที)
    // Layout D: Before / After Comparison (using new two-ad-layouts-mockup-real.jpg)
    // =========================================================================
    {
        id: 24,
        theme: "light",
        slideType: "Before / After Comparison",
        layout: "before-after-comparison",
        section: "5.2 กระบวนการจัดการเรียนรู้และฝึกปฏิบัติ",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 51–53)",
        kicker: "STEP 4 OF 5 | เปรียบเทียบ 2 แนวทาง (2/2)",
        title: "เปรียบเทียบการจัดวาง 2 แนวทาง: แบบที่ 1 vs แบบที่ 2",
        badge: "Layout Variations",
        learningObjective: "ออกแบบสื่อประชาสัมพันธ์อย่างน้อย 2 แนวทางที่มีการจัดวางแตกต่างกันเพื่อเปรียบเทียบและคัดเลือกแบบที่เหมาะสมที่สุด",
        content: [
            "แนวทางที่ 1 (Hero Center Layout): เน้นภาพขนมขนาดใหญ่ตรงกลาง วางโลโก้ด้านบน และป้ายราคาวงกลมสีทองเด่นชัดมุมขวาล่าง",
            "แนวทางที่ 2 (Split Grid Layout): แบ่งครึ่งซ้าย-ขวา ฝั่งซ้ายโชว์ภาพถ่ายขนมระยะใกล้ ฝั่งขวาเป็นกล่องข้อความสีครีมเรียงลำดับชื่อร้าน จุดเด่น ราคา และเบอร์โทร"
        ],
        keyPoints: ["แบบที่ 1: เน้นภาพขนมเต็มตาตรงกลาง", "แบบที่ 2: แบ่งครึ่งภาพกับกล่องข้อมูล", "เปรียบเทียบเพื่อเลือกแบบที่อ่านง่ายที่สุด"],
        image: {
            src: "assets/images/two-ad-layouts-mockup-real.jpg",
            alt: "หน้าจอแสดงการเปรียบเทียบสื่อโฆษณาร้านขนมบ้านเราขนาด 1080x1080 px ทั้ง 2 แนวทาง (Layout A vs Layout B)",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "ทำไมโจทย์ถึงให้นักเรียนออกแบบ 2 แนวทาง (แบบที่ 1 และแบบที่ 2) ครับ? เพราะในการทำงานจริง นักออกแบบจะไม่ทำแบบเดียวแล้วจบ แต่จะลองจัดวางอย่างน้อย 2 สไตล์เหมือนบนหน้าจอคอมพิวเตอร์ด้านซ้าย เช่น แบบที่ 1 (Layout A) เน้นภาพขนมใหญ่เต็มตรงกลาง กับแบบที่ 2 (Layout B) แบ่งครึ่งซ้ายเป็นรูปขนม ครึ่งขวาเป็นกล่องข้อความ แล้วนำมาวางเทียบกันว่าแบบไหนอ่านง่ายและดึงดูดลูกค้าได้ดีกว่ากันครับ",
            realLifeExample: "เวลาส่งงานลูกค้าในชีวิตจริง การมีทางเลือก A และ B พร้อมอธิบายเหตุผล จะทำให้ลูกค้าประทับใจและอนุมัติงานง่ายขึ้นมาก",
            guidingQuestion: "ระหว่างแบบที่ 1 (เน้นภาพใหญ่ตรงกลาง) กับแบบที่ 2 (แบ่งครึ่งซ้าย-ขวา) นักเรียนชอบแบบไหนมากกว่ากัน เพราะอะไรครับ?",
            expectedAnswer: "ตอบได้ทั้งสองแบบ เช่น ชอบแบบที่ 1 เพราะเห็นขนมชัดเต็มตา หรือชอบแบบที่ 2 เพราะข้อความแยกเป็นสัดส่วนอ่านง่าย",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2-asym">
                <div class="photo-showcase-card">
                    <div class="photo-media-wrap">
                        <span class="photo-floating-badge"><i class="fa-solid fa-table-columns"></i> เปรียบเทียบ 2 แนวทางบนขนาด 1080 × 1080 px (1:1)</span>
                        <img src="assets/images/two-ad-layouts-mockup-real.jpg" alt="หน้าจอแสดงการเปรียบเทียบสื่อโฆษณาร้านขนมบ้านเราขนาด 1080x1080 px ทั้ง 2 แนวทาง (Layout A vs Layout B)" loading="lazy">
                    </div>
                    <div class="photo-caption-bar">
                        <strong><i class="fa-solid fa-wand-magic-sparkles" style="color:#155EEF;"></i> ชิ้นงานส่งครู #3 และ #4:</strong> ออกแบบอย่างน้อย 2 แนวทางที่มีการจัดวางต่างกันอย่างชัดเจน
                    </div>
                </div>

                <div class="card blue" style="justify-content:space-between;">
                    <h3 class="section-heading" style="font-size:31px;"><i class="fa-solid fa-compass-drafting" style="color:#155EEF;"></i> วิเคราะห์ 2 แนวทางการออกแบบ</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <div class="step-num">A</div>
                            <div class="step-content">
                                <h4>แบบที่ 1: Hero Center Layout</h4>
                                <p>วางภาพขนมขนาดใหญ่ตรงกลาง ดึงดูดสายตาทันที พร้อมป้ายราคาวงกลมสีตัดกันชัดเจน</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#9333EA;">
                            <div class="step-num" style="background:linear-gradient(135deg,#9333EA,#EC4899);">B</div>
                            <div class="step-content">
                                <h4>แบบที่ 2: Split Grid Layout</h4>
                                <p>แบ่งพื้นที่ซ้าย-ขวา ฝั่งซ้ายโชว์ภาพถ่ายขนมเต็มกรอบ ฝั่งขวาจัดเรียงข้อความบนพื้นสีครีมสะอาดตา</p>
                            </div>
                        </div>
                    </div>
                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-star"></i> เคล็ดลับ</span>
                        <span class="easy-explain-text">เลือก <strong>1 แบบที่ดีที่สุด</strong> เป็นผลงานหลัก แล้วนำมาปรับปรุงในขั้นตอนที่ 5</span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 25: ขั้นตอนที่ 5 — นำเสนอ รับข้อเสนอแนะ และปรับปรุงผลงาน (2 นาที)
    // Layout D: Interactive Before / After Comparison Slider (Bright Pastel)
    // =========================================================================
    {
        id: 25,
        theme: "light",
        slideType: "Before / After Comparison",
        layout: "before-after-comparison",
        section: "5.2 กระบวนการจัดการเรียนรู้และฝึกปฏิบัติ",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 53–55)",
        kicker: "STEP 5 OF 5 | ปรับปรุงผลงาน (Before vs After)",
        title: "ขั้นตอนที่ 5: รับข้อเสนอแนะและปรับปรุงผลงาน (Before vs After)",
        badge: "Interactive Slider",
        learningObjective: "วิเคราะห์จุดบกพร่องของงานออกแบบฉบับร่าง (Before) และปรับปรุงตามหลัก Contrast และ Visual Hierarchy จนได้ผลงานที่สมบูรณ์ (After)",
        content: [
            "ก่อนปรับปรุง (Before): ตัวอักษรสีอ่อนกลืนไปกับพื้นหลัง ขนาดราคาเล็กมองไม่เห็น และวางข้อความทับจุดสำคัญของภาพขนม",
            "หลังปรับปรุง (After): เพิ่ม Contrast สีข้อความให้เข้มคมชัด ขยายป้ายราคา 45 บาทให้เด่น และจัดพื้นที่ว่าง (White Space) ให้อ่านง่ายใน 3 วินาที"
        ],
        keyPoints: ["ลากแถบเปรียบเทียบ Before vs After", "แก้ปัญหาสีกลืนและตัวหนังสือเล็ก", "บันทึกผลการปรับปรุงส่งครู"],
        image: {
            src: "assets/images/thai-dessert-khanom-chan.jpg",
            alt: "การเปรียบเทียบผลงานก่อนและหลังการปรับปรุงตามข้อเสนอแนะ",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "มาถึงขั้นตอนที่ 5 ซึ่งเป็นหัวใจของการพัฒนาฝีมือครับ หลังจากเพื่อนและครูช่วยกันดูผลงานฉบับแรก (Before) แล้วให้คำแนะนำ เช่น 'ตัวหนังสือเล็กไป สีกลืนกับพื้นหลัง ราคาไม่เด่น' นักเรียนจะนำคำแนะนำนั้นมาปรับปรุงเป็นฉบับแก้ไข (After) ลองลากแถบเลื่อน Before / After บนหน้าจอเพื่อดูความแตกต่างระหว่างฉบับที่มีปัญหา กับฉบับที่ปรับปรุงตามหลัก Visual Hierarchy และ Contrast แล้วครับ!",
            realLifeExample: "อย่ากลัวคำติชมในการทำงานกราฟิกครับ เพราะการปรับแก้ (Revision) ตามเหตุผลทางการออกแบบคือสิ่งที่ทำให้งานของเราน่าซื้อขึ้นจริง ๆ",
            guidingQuestion: "จากภาพเปรียบเทียบ ฉบับ After ได้ปรับปรุงแก้ไขตรงจุดไหนบ้างจนทำให้อ่านง่ายขึ้นครับ?",
            expectedAnswer: "เปลี่ยนสีข้อความให้ตัดกับพื้นหลัง (Contrast) ขยายขนาดป้ายราคาให้ใหญ่ชัดเจน และจัดวางไม่ให้บังหน้าขนม",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="ba-comparison-container">
                <div class="ba-stage">
                    <!-- AFTER PANE (Bottom Layer) -->
                    <div class="ba-pane ba-after-pane">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span class="kicker-pill" style="background:linear-gradient(135deg,#059669,#10B981); color:#FFFFFF; padding:6px 18px; border-radius:999px; font-weight:700;"><i class="fa-solid fa-circle-check"></i> AFTER: หลังปรับปรุงตามข้อเสนอแนะ (อ่านง่าย คมชัด)</span>
                            <span style="font-weight:800; color:#047857;">1080 × 1080 px • RGB • PNG</span>
                        </div>

                        <div class="grid-2" style="align-items:center; gap:24px; margin:auto 0;">
                            <div class="photo-showcase-card" style="height:365px; border-color:#6EE7B7;">
                                <div class="photo-media-wrap">
                                    <span class="photo-floating-badge emerald">ภาพขนมสว่างคมชัด ไม่ถูกข้อความบัง</span>
                                    <img src="assets/images/thai-dessert-khanom-chan.jpg" alt="ภาพขนมชั้นใบเตยที่จัดวางอย่างโดดเด่นในฉบับปรับปรุง" loading="lazy">
                                </div>
                            </div>
                            <div style="display:flex; flex-direction:column; gap:14px;">
                                <div style="font-size:24px; font-weight:700; color:#B45309;"><i class="fa-solid fa-award"></i> ร้านขนมบ้านเรา (โลโก้ Vector คมชัด)</div>
                                <h3 style="font-size:40px; font-weight:800; color:#064E3B; line-height:1.18;">ขนมชั้นใบเตยแท้ 100%<br><span style="color:#047857; font-size:30px;">หอมนุ่ม ทำสดใหม่ทุกเช้า หวานน้อย</span></h3>
                                <div style="display:flex; align-items:center; gap:16px;">
                                    <span style="background:linear-gradient(135deg,#D97706,#F59E0B); color:#FFFFFF; font-size:34px; font-weight:800; padding:8px 24px; border-radius:14px; box-shadow:0 6px 16px rgba(217,119,6,0.3);">กล่องละ 45 บาท</span>
                                    <span style="font-size:25px; font-weight:700; color:#101936;">พิเศษ! 3 กล่อง 120.-</span>
                                </div>
                                <div style="background:#FFFFFF; border:2px solid #6EE7B7; padding:10px 18px; border-radius:14px; font-size:24px; color:#065F46; font-weight:700;">
                                    <i class="fa-brands fa-line"></i> สั่งซื้อ Line: @kanombaanrao • โทร. 089-xxx-xxxx
                                </div>
                            </div>
                        </div>

                        <div style="font-size:23px; color:#047857; font-weight:700;">
                            <i class="fa-solid fa-wand-magic-sparkles"></i> สิ่งที่ปรับปรุง: 1) เพิ่ม Contrast สีตัวอักษรเข้มบนพื้นอ่อน 2) ขยายป้ายราคา 45 บาทให้เด่นชัด 3) เว้น White Space ไม่ทับภาพขนม
                        </div>
                    </div>

                    <!-- BEFORE PANE (Clipped Top Layer - Bright Rose Pastel) -->
                    <div class="ba-pane ba-before-pane" id="baBeforePane">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span class="kicker-pill" style="background:linear-gradient(135deg,#E11D48,#F43F5E); color:#FFFFFF; padding:6px 18px; border-radius:999px; font-weight:700;"><i class="fa-solid fa-circle-xmark"></i> BEFORE: ฉบับร่างก่อนปรับปรุง (สีกลืน อ่านยาก)</span>
                            <span style="font-weight:800; color:#BE123C;">พบจุดควรปรับปรุง 3 จุด</span>
                        </div>

                        <div class="grid-2" style="align-items:center; gap:24px; margin:auto 0;">
                            <div class="photo-showcase-card" style="height:365px; border-color:#FDA4AF;">
                                <div class="photo-media-wrap">
                                    <span class="photo-floating-badge pink">ภาพมืด &amp; ถูกข้อความทับกลางภาพ</span>
                                    <img src="assets/images/thai-dessert-khanom-chan.jpg" alt="ภาพขนมฉบับร่างที่มืดและจัดวางข้อความทับ" style="filter: brightness(0.75) contrast(0.88);" loading="lazy">
                                </div>
                            </div>
                            <div style="display:flex; flex-direction:column; gap:14px;">
                                <div style="font-size:24px; color:#475569; font-weight:600;">ร้านขนมบ้านเรา (โลโก้ JPEG ติดขอบขาวแตก ๆ)</div>
                                <h3 style="font-size:31px; font-weight:600; color:#475569; line-height:1.3;">ขนมชั้นใบเตยแท้หอมนุ่มทำสดใหม่ทุกเช้าหวานน้อยอร่อยมากสั่งได้เลยวันนี้</h3>
                                <div style="font-size:24px; color:#9F1239; font-weight:700;">ราคา 45 บาท (ตัวเล็กและสีกลืนกับพื้นหลัง)</div>
                                <div style="background:#FFFFFF; border:2px dashed #FB7185; padding:12px 18px; border-radius:14px; font-size:24px; color:#9F1239; font-weight:600;">
                                    <i class="fa-solid fa-triangle-exclamation" style="color:#BE123C;"></i> <strong>ข้อเสนอแนะจากครูและเพื่อน:</strong> สีตัวอักษรกลืนกับพื้นหลัง ขาดลำดับจุดเด่น (Visual Hierarchy) และราคาเล็กเกินไป
                                </div>
                            </div>
                        </div>

                        <div style="font-size:23px; color:#BE123C; font-weight:700;">
                            <i class="fa-solid fa-arrows-left-right"></i> ลากแถบเลื่อนด้านล่างไปทางซ้ายเพื่อดูผลงานหลังปรับปรุง (AFTER)
                        </div>
                    </div>
                </div>

                <div class="ba-control-row">
                    <span style="font-weight:700; color:#047857;"><i class="fa-solid fa-check"></i> ดูฉบับปรับปรุง (After)</span>
                    <input type="range" min="0" max="100" value="50" class="ba-slider" id="baSliderInput" aria-label="แถบเลื่อนเปรียบเทียบก่อนและหลังปรับปรุง">
                    <span style="font-weight:700; color:#BE123C;">ดูฉบับร่างเดิม (Before) <i class="fa-solid fa-triangle-exclamation"></i></span>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 26: การจัดเก็บไฟล์ส่งครู (7 รายการ) และเกณฑ์การประเมินผล (2 นาที)
    // Layout G: Interactive Checklist Left + Assessment Rubric Right
    // =========================================================================
    {
        id: 26,
        theme: "light",
        slideType: "Checklist & Rubric",
        layout: "text-left-photo-right",
        section: "5.2 กระบวนการจัดการเรียนรู้และฝึกปฏิบัติ",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 55–57)",
        kicker: "DELIVERABLES | ชิ้นงานส่งครูและเกณฑ์ประเมิน",
        title: "รายการชิ้นงานส่งครู (7 รายการ) และเกณฑ์การประเมินผล",
        badge: "Submission Checklist",
        learningObjective: "ตรวจสอบความครบถ้วนของชิ้นงานทั้ง 7 รายการ และทราบเกณฑ์การให้คะแนนทั้งด้านความรู้ ทักษะ และเจตคติ",
        content: [
            "ชิ้นงานภาคทฤษฎีและวางแผน: 1) ตารางเปรียบเทียบ Raster/Vector และการเลือกไฟล์ 4 สถานการณ์ 2) ใบวางแผนงานออกแบบ (Design Brief) 1 หน้า",
            "ชิ้นงานกราฟิกและไฟล์ต้นฉบับ: 3) ภาพโฆษณาแบบที่ 1 4) ภาพโฆษณาแบบที่ 2 5) ผลงานฉบับปรับปรุงแล้ว 6) ไฟล์ต้นฉบับ (PSD/AI) 7) บันทึกผลการปรับปรุงสั้น ๆ"
        ],
        keyPoints: ["ตรวจเช็ก 7 ชิ้นงานก่อนส่ง", "ส่งทั้งไฟล์ต้นฉบับและไฟล์ PNG/JPEG", "ประเมินครบ 3 ด้าน (K-P-A)"],
        image: {
            src: "assets/images/student-designing-canvas.jpg",
            alt: "การตรวจสอบไฟล์งานออกแบบก่อนส่งมอบ",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "ก่อนส่งงานท้ายชั่วโมง ให้ทุกคนคลิกเช็กรายการส่งงานทั้ง 7 รายการทางด้านซ้ายมือให้ครบนะครับ สังเกตว่าครูให้ส่งทั้งไฟล์ภาพสำเร็จ (PNG/JPEG) และไฟล์ต้นฉบับ (Source File) รวมถึงบันทึกสั้น ๆ ว่าเราปรับปรุงอะไรไปบ้างในขั้นตอนที่ 5 ส่วนด้านขวาคือเกณฑ์การให้คะแนนทั้งด้านความรู้ ทักษะปฏิบัติ และเจตคติในการทำงานครับ",
            realLifeExample: "การตรวจเช็กลิสต์ก่อนส่งมอบงานให้ลูกค้า ช่วยป้องกันปัญหาส่งไฟล์ไม่ครบหรือตั้งชื่อไฟล์ผิด",
            guidingQuestion: "ทำไมครูถึงกำหนดให้ส่งทั้ง 'ผลงานฉบับแรก' และ 'ผลงานฉบับปรับปรุงแล้ว' คู่กันครับ?",
            expectedAnswer: "เพื่อให้เห็นพัฒนาการและการนำข้อเสนอแนะมาปรับปรุงตามหลักการออกแบบอย่างเป็นระบบ",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card blue" style="justify-content:space-between;">
                    <div style="display:flex; align-items:center; justify-content:space-between;">
                        <h3 class="section-heading" style="font-size:30px;"><i class="fa-solid fa-list-check" style="color:#155EEF;"></i> เช็กลิสต์ชิ้นงานส่งครู (คลิกติ๊กถูก)</h3>
                        <span class="kicker-pill" id="checklistCounterBadge">0 / 7 รายการ</span>
                    </div>

                    <div id="interactiveChecklist" style="display:grid; grid-template-columns:1fr; gap:7px;">
                        <div class="check-item" style="padding:7px 14px; font-size:23px;"><i class="fa-regular fa-square"></i> <span>1. ตารางเปรียบเทียบ Raster/Vector &amp; การเลือกไฟล์ 4 สถานการณ์</span></div>
                        <div class="check-item" style="padding:7px 14px; font-size:23px;"><i class="fa-regular fa-square"></i> <span>2. ใบวางแผนงานออกแบบ (<span class="glossary-term" data-glossary="Design Brief">Design Brief</span>) ความยาว 1 หน้า</span></div>
                        <div class="check-item" style="padding:7px 14px; font-size:23px;"><i class="fa-regular fa-square"></i> <span>3. ภาพประชาสัมพันธ์ <strong>แบบที่ 1</strong> (1080×1080 px)</span></div>
                        <div class="check-item" style="padding:7px 14px; font-size:23px;"><i class="fa-regular fa-square"></i> <span>4. ภาพประชาสัมพันธ์ <strong>แบบที่ 2</strong> (จัดวางต่างจากแบบแรก)</span></div>
                        <div class="check-item" style="padding:7px 14px; font-size:23px;"><i class="fa-regular fa-square"></i> <span>5. <strong>ผลงานฉบับปรับปรุงแล้ว</strong> (Final Revised Version)</span></div>
                        <div class="check-item" style="padding:7px 14px; font-size:23px;"><i class="fa-regular fa-square"></i> <span>6. <strong>ไฟล์ต้นฉบับ</strong> (.psd/.ai/.svg) + <strong>ไฟล์ส่งออก</strong> (.png/.jpg)</span></div>
                        <div class="check-item" style="padding:7px 14px; font-size:23px;"><i class="fa-regular fa-square"></i> <span>7. บันทึกผลการปรับปรุงผลงานสั้น ๆ (แก้จุดใด เพราะเหตุใด)</span></div>
                    </div>
                </div>

                <div class="card emerald" style="justify-content:space-between;">
                    <h3 class="section-heading" style="color:#065F46; font-size:30px;"><i class="fa-solid fa-medal"></i> เกณฑ์การประเมินผล (100 คะแนน)</h3>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#155EEF;">
                            <div class="step-num">30%</div>
                            <div class="step-content">
                                <h4>1. ด้านความรู้ (Knowledge) — 30 คะแนน</h4>
                                <p>ความถูกต้องของตารางเปรียบเทียบ Raster/Vector, PPI, RGB/CMYK, ชนิดไฟล์ และแบบทดสอบท้ายหน่วย</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#059669;">
                            <div class="step-num" style="background:linear-gradient(135deg,#059669,#10B981);">50%</div>
                            <div class="step-content">
                                <h4>2. ด้านทักษะปฏิบัติ (Skills) — 50 คะแนน</h4>
                                <p>ความครบถ้วนของ Design Brief, การตั้งค่า 1080×1080 px (RGB), องค์ประกอบครบ 5 ส่วน และการปรับปรุงงาน</p>
                            </div>
                        </div>
                        <div class="step-item" style="border-left-color:#D97706;">
                            <div class="step-num" style="background:linear-gradient(135deg,#D97706,#F59E0B);">20%</div>
                            <div class="step-content">
                                <h4>3. กิจนิสัยและการทำงาน (Attitude) — 20 คะแนน</h4>
                                <p>ความรอบคอบในการจัดการไฟล์ การเคารพลิขสิทธิ์ภาพ/ฟอนต์ การรับฟังความคิดเห็น และส่งงานตรงเวลา</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 27: สรุปสาระสำคัญประจำหน่วยที่ 1 (1 นาที)
    // Layout H: Summary Infographic (Matching Reference Image media_1792639890272.jpg)
    // =========================================================================
    {
        id: 27,
        theme: "light",
        slideType: "Summary",
        layout: "three-photo-cards",
        section: "สรุปสาระสำคัญและวัดผลท้ายหน่วย",
        teachingTime: 1,
        timeGuide: "1 นาที (นาทีที่ 57–58)",
        kicker: "TAKEAWAYS | สรุปบทเรียน",
        title: "สรุปหัวใจสำคัญ: เตรียมงานกราฟิกอย่างไรให้คมชัดและขายดี?",
        badge: "Unit 1 Wrap-Up",
        learningObjective: "ทบทวนหลักการสำคัญทั้ง 3 แกนหลักก่อนทำแบบทดสอบท้ายหน่วยเรียน",
        content: [
            "1. เลือกประเภทภาพและขนาดให้ถูก: ภาพถ่ายสินค้าใช้ Raster (พิกเซลพอเพียง) โลโก้ใช้ Vector (ย่อ-ขยายไม่แตก) โพสต์สินค้าใช้ 1080×1080 px (1:1)",
            "2. ตั้งค่าระบบสีและชนิดไฟล์ให้ตรงช่องทาง: งานหน้าจอใช้ RGB (JPEG/PNG/SVG) งานพิมพ์ใช้ CMYK 300 PPI (PDF)",
            "3. วางแผนก่อนทำเสมอ: เขียน Design Brief จัดลำดับความสำคัญสายตา (Visual Hierarchy) และเพิ่ม Contrast ให้อ่านง่าย"
        ],
        keyPoints: ["ภาพถ่าย=Raster / โลโก้=Vector", "จอ=RGB / พิมพ์=CMYK 300 PPI", "วางแผน Design Brief ก่อนทำเสมอ"],
        image: {
            src: "assets/images/vector-logo-scale-showcase.jpg",
            alt: "สรุปหลักการสำคัญของภาพกราฟิกดิจิทัลและการเตรียมงานออกแบบ",
            fit: "cover",
            focalPoint: "center",
            type: "photo"
        },
        speakerNotes: {
            whatToSay: "ก่อนที่เราจะทำแบบทดสอบ 10 ข้อในสไลด์สุดท้าย ครูขอสรุปคาถาประจำหน่วยที่ 1 สั้น ๆ 3 ข้อครับ ข้อ 1 ภาพถ่ายใช้ Raster โลโก้ใช้ Vector ข้อ 2 งานหน้าจอตั้งค่าเป็น RGB (เซฟเป็น JPEG, PNG, SVG) ส่วนงานส่งโรงพิมพ์ตั้งค่าเป็น CMYK ความละเอียด 300 PPI (เซฟเป็น PDF) และข้อ 3 วางแผน Design Brief และจัดลำดับจุดเด่น-จุดรองทุกครั้งก่อนลงมือทำครับ!",
            realLifeExample: "จำ 3 การ์ดนี้ไว้ใช้ได้ตลอดทั้งเทอมในรายวิชาโปรแกรมกราฟิกเพื่อสร้างสื่อดิจิทัลเลยครับ",
            guidingQuestion: "ทุกคนพร้อมทำแบบทดสอบวัดความเข้าใจ 10 ข้อหรือยังครับ?",
            expectedAnswer: "พร้อมแล้วครับ/ค่ะ!",
            timeRecommended: "1 นาที"
        },
        html: `
            <div class="three-photo-grid">
                <div class="v5-info-card theme-blue">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">1</span>
                            <h3 class="v5-card-title">ประเภทภาพ &amp; ความละเอียด</h3>
                        </div>
                        <span class="v5-sub-pill">1. Raster คู่กับ Vector</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/vector-logo-scale-showcase.jpg" alt="สรุปการเลือกใช้ภาพถ่าย Raster และโลโก้ Vector" loading="lazy">
                        <div class="v5-inset-zoom-circle">
                            <img src="assets/images/raster-thai-dessert-closeup.jpg" alt="ซูมดูพิกเซลของภาพ Raster" loading="lazy">
                            <span class="v5-inset-zoom-label">Pixel Grid</span>
                        </div>
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-image"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-blue">ภาพถ่ายขนม:</strong> ใช้ <span class="glossary-term" data-glossary="Raster">Raster</span> (ห้ามดึงขยายเกินพิกเซลจริง)</div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-bezier-curve"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-blue">โลโก้ร้าน:</strong> ใช้ <span class="glossary-term" data-glossary="Vector">Vector</span> ขยายได้ไม่แตก • โพสต์จัตุรัสใช้ <strong>1080 × 1080 px (1:1)</strong></div>
                        </div>
                    </div>
                </div>

                <div class="v5-info-card theme-purple">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">2</span>
                            <h3 class="v5-card-title">ระบบสี &amp; ชนิดไฟล์</h3>
                        </div>
                        <span class="v5-sub-pill">2. สีตรงจอ พิมพ์ตรงปก</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/cmyk-print-shop-proof.jpg" alt="สรุปการเลือกระบบสี RGB สำหรับหน้าจอ และ CMYK สำหรับงานพิมพ์" loading="lazy">
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-desktop"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-purple">งานหน้าจอ (<span class="glossary-term" data-glossary="RGB">RGB</span>):</strong> ภาพถ่ายใช้ <strong>JPEG</strong>, โลโก้พื้นใสใช้ <strong>PNG</strong>, เวกเตอร์เว็บใช้ <strong>SVG</strong></div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-print"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-purple">งานพิมพ์ (<span class="glossary-term" data-glossary="CMYK">CMYK</span>):</strong> ตั้งค่าความละเอียด <strong>300 PPI</strong> ส่งไฟล์ <strong>PDF</strong></div>
                        </div>
                    </div>
                </div>

                <div class="v5-info-card theme-emerald">
                    <div class="v5-card-top">
                        <div class="v5-card-header-row">
                            <span class="v5-num-circle">3</span>
                            <h3 class="v5-card-title">การวางแผน &amp; ปรับปรุงงาน</h3>
                        </div>
                        <span class="v5-sub-pill">3. วางแผนดี งานมีชัยไปกว่าครึ่ง</span>
                    </div>
                    <div class="v5-card-photo">
                        <img src="assets/images/student-designing-canvas.jpg" alt="สรุปการวางแผน Design Brief และการออกแบบสื่อประชาสัมพันธ์" loading="lazy">
                    </div>
                    <div class="v5-bullet-list">
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-clipboard-list"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-emerald">เขียน <span class="glossary-term" data-glossary="Design Brief">Design Brief</span>:</strong> วางแผนกลุ่มเป้าหมายและโทนสีก่อนเปิดโปรแกรม</div>
                        </div>
                        <div class="v5-bullet-row">
                            <div class="v5-bullet-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                            <div class="v5-bullet-text"><strong class="lead-emerald">ใช้หลักการออกแบบ:</strong> <strong>Visual Hierarchy, Contrast, White Space</strong> และเก็บไฟล์ต้นฉบับเสมอ</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 28: แบบทดสอบท้ายหน่วยเรียน (Interactive Quiz 10 ข้อ) (2 นาที)
    // =========================================================================
    {
        id: 28,
        theme: "light",
        slideType: "Interactive Quiz",
        layout: "Interactive Quiz",
        section: "สรุปสาระสำคัญและวัดผลท้ายหน่วย",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 58–60)",
        kicker: "FINAL QUIZ | แบบทดสอบท้ายบทเรียน",
        title: "แบบทดสอบท้ายบทเรียน: พื้นฐานกราฟิกดิจิทัลและการเตรียมงานออกแบบ",
        badge: "10 ข้อ • ตรวจผลทันที",
        learningObjective: "ทำแบบทดสอบวัดความรู้ความเข้าใจจำนวน 10 ข้อ พร้อมตรวจสอบเหตุผลเฉลยได้ทันที",
        content: [
            "แบบทดสอบปรนัย 4 ตัวเลือก จำนวน 10 ข้อ ครอบคลุมเนื้อหา Raster vs Vector, Pixel, Aspect Ratio, PPI, RGB vs CMYK, ชนิดไฟล์ และกระบวนการออกแบบ",
            "คลิกเลือกคำตอบเพื่อตรวจผลและอ่านคำอธิบายเฉลยได้ทันที หรือคลิกปุ่มเฉลยทั้งหมดเมื่อต้องการสรุปหน้าชั้นเรียน"
        ],
        keyPoints: ["แบบทดสอบ 10 ข้อ", "ตรวจคำตอบพร้อมเหตุผลทันที", "รองรับการพิมพ์สรุปลง PDF"],
        speakerNotes: {
            whatToSay: "มาถึงสไลด์สุดท้ายในนาทีที่ 58 ถึง 60 ครับ เรามาทดสอบความเข้าใจด้วย Interactive Quiz 10 ข้อกัน นักเรียนสามารถคลิกเลือกข้อ 1 ถึง 10 จากแผงด้านซ้าย คลิกตัวเลือก ก ข ค หรือ ง เพื่อดูผลตรวจและคำอธิบายเฉลยด้านล่างได้ทันทีครับ!",
            realLifeExample: "คำถามทั้ง 10 ข้อนี้ตรงกับเนื้อหาสำคัญในการสอบประจำหน่วยและสถานการณ์จริงของร้านขนมพื้นเมือง",
            guidingQuestion: "ข้อที่ 1: ข้อใดอธิบายความแตกต่างระหว่างภาพ Raster และ Vector ได้ถูกต้องที่สุด?",
            expectedAnswer: "ข. Raster เหมาะกับภาพถ่ายมีแสงเงา ส่วน Vector เหมาะกับโลโก้ที่ย่อ-ขยายได้คมชัด",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="quiz-wrapper">
                <div class="quiz-sidebar">
                    <div class="quiz-score-card">
                        <div style="font-size:21px; opacity:0.95;">คะแนนของคุณ</div>
                        <div class="quiz-score-num"><span id="quizScoreVal">0</span> / 10</div>
                        <div id="quizProgressText" style="font-size:19px; color:#E0E7FF; margin-top:4px;">ตอบแล้ว 0/10 ข้อ</div>
                    </div>

                    <div>
                        <div style="font-weight:800; font-size:21px; margin-bottom:8px; color:#101936;">เลือกข้อคำถาม (1–10):</div>
                        <div class="quiz-nav-grid" id="quizNavDots"></div>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <button type="button" class="nav-btn primary" id="btnQuizCheckAll" style="justify-content:center; padding:10px; font-size:20px;">
                            <i class="fa-solid fa-check-double"></i> เฉลยคำตอบทั้งหมด
                        </button>
                        <button type="button" class="nav-btn" id="btnQuizReset" style="justify-content:center; padding:10px; font-size:20px;">
                            <i class="fa-solid fa-rotate-right"></i> เริ่มทำใหม่
                        </button>
                    </div>
                </div>

                <div class="quiz-main-card">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                            <span class="kicker-pill" id="quizQBadge">ข้อที่ 1 จาก 10</span>
                            <div style="display:flex; gap:8px;">
                                <button type="button" class="nav-btn" id="btnQuizPrevQ" style="font-size:20px;"><i class="fa-solid fa-arrow-left"></i> ข้อก่อนหน้า</button>
                                <button type="button" class="nav-btn primary" id="btnQuizNextQ" style="font-size:20px;">ข้อถัดไป <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <h3 class="quiz-q-title" id="quizQText"></h3>
                        <div class="quiz-options-list" id="quizOptionsList"></div>
                    </div>

                    <div class="quiz-feedback-box" id="quizFeedbackBox"></div>
                </div>
            </div>

            <!-- Printable 10-question summary for PDF Export -->
            <div class="quiz-print-all">
                ${QUIZ_QUESTIONS.map((q) => `
                    <div style="border:1.5px solid #CBD5E1; border-radius:10px; padding:10px 14px; background:#FFFFFF; font-size:20px; line-height:1.3;">
                        <div style="font-weight:700; color:#101936; margin-bottom:4px;">${q.question}</div>
                        <div style="color:#047857; font-weight:600;">${q.explanation}</div>
                    </div>
                `).join("")}
            </div>
        `
    }
];
