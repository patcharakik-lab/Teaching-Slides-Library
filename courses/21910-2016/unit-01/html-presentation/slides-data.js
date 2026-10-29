/**
 * slides-data.js
 * รายวิชา: 21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล
 * ระดับชั้น: ประกาศนียบัตรวิชาชีพ (ปวช.) สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล
 * หน่วยที่ 1: ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล (เวลาเรียนรวม 60 นาที — 26 สไลด์)
 */

const VOCABULARY_LIST = [
    {
        key: "Website",
        term: "Website (เว็บไซต์)",
        formal: "กลุ่มของหน้าเว็บเพจที่มีเนื้อหาเกี่ยวข้องกัน เชื่อมโยงถึงกันผ่านระบบอินเทอร์เน็ต และเข้าถึงได้ผ่านชื่อโดเมนเดียวกัน",
        easy: "เปรียบเหมือน 'หนังสือทั้งเล่ม' หรือ 'ห้างสรรพสินค้าออนไลน์ทั้งหลัง' ที่ข้างในมีห้องหรือหน้าย่อย ๆ หลายหน้ารวมกัน",
        example: "เช่น เว็บไซต์ร้านค้า Shopee (shopee.co.th) หรือเว็บไซต์ของวิทยาลัยที่รวมหน้าข่าวสาร หน้าหลักสูตร และหน้าติดต่อไว้ด้วยกัน"
    },
    {
        key: "Webpage",
        term: "Web Page (เว็บเพจ)",
        formal: "หน้าเอกสารอิเล็กทรอนิกส์หนึ่งหน้าที่แสดงผลผ่านเว็บเบราว์เซอร์ ประกอบด้วยข้อความ รูปภาพ วิดีโอ ตาราง หรือแบบฟอร์ม",
        easy: "เปรียบเหมือน 'กระดาษ 1 หน้า' ที่อยู่ในหนังสือเล่มใหญ่ เวลาเราคลิกเปลี่ยนเมนูไปหน้าสินค้า หน้าติดต่อ แต่ละหน้าคือ 1 เว็บเพจ",
        example: "เช่น หน้าแรก (Home), หน้ารายการสินค้า (Products), หน้าเกี่ยวกับเรา (About Us), หน้าติดต่อเรา (Contact)"
    },
    {
        key: "URL",
        term: "URL (Uniform Resource Locator)",
        formal: "ที่อยู่ของทรัพยากรบนอินเทอร์เน็ต เช่น หน้าเว็บ รูปภาพ หรือไฟล์ ทำหน้าที่บอกเบราว์เซอร์ว่าต้องเรียกข้อมูลจากที่ใดและสื่อสารแบบใด",
        easy: "เปรียบเหมือน 'พิกัดบ้านเลขที่ + ซอย + ห้อง' แบบละเอียดครบถ้วน ที่พิมพ์ปุ๊บ เบราว์เซอร์วิ่งไปเปิดหน้านั้นหรือรูปนั้นให้ปั๊บ",
        example: "เช่น https://www.example.com/products/shoes.html (ระบุครบว่าเข้าเว็บไหน โฟลเดอร์ไหน และเปิดไฟล์หน้าไหน)"
    },
    {
        key: "Domain",
        term: "Domain Name (ชื่อโดเมน)",
        formal: "ชื่อที่ใช้ระบุเว็บไซต์บนอินเทอร์เน็ต แทนการจดจำหมายเลข IP Address ของเซิร์ฟเวอร์ที่เป็นตัวเลขยาว ๆ",
        easy: "เปรียบเหมือน 'ชื่อร้านหรือชื่อผู้ติดต่อในมือถือ' เราจำชื่อ google.com ได้ง่ายกว่าจำตัวเลข IP อย่าง 142.250.199.14",
        example: "เช่น google.com, youtube.com, baanhomdessert.com (ชื่อสมมติร้านขนมโฮมเมด)"
    },
    {
        key: "Hosting",
        term: "Web Hosting (โฮสติ้ง)",
        formal: "บริการพื้นที่และทรัพยากรบนเซิร์ฟเวอร์สำหรับจัดเก็บไฟล์ HTML รูปภาพ วิดีโอ และฐานข้อมูลของเว็บไซต์เพื่อให้ออนไลน์ตลอดเวลา",
        easy: "ถ้า Domain คือ 'ป้ายชื่อร้าน' โฮสติ้งก็คือ 'ที่ดินและตัวอาคารร้านค้า' ที่ใช้เก็บของและวางสินค้าจริง ถ้าไม่มีโฮสติ้งก็ไม่มีที่เก็บไฟล์เว็บ",
        example: "เช่น บริการ Shared Hosting, VPS Hosting, Cloud Hosting หรือแพลตฟอร์มเผยแพร่เว็บฟรีสำหรับนักเรียน"
    },
    {
        key: "Browser",
        term: "Web Browser (เว็บเบราว์เซอร์)",
        formal: "โปรแกรมหรือแอปพลิเคชันฝั่งผู้ใช้งานที่ใช้เปิด ประมวลผลโค้ด และแสดงผลหน้าเว็บไซต์บนคอมพิวเตอร์หรือสมาร์ตโฟน",
        easy: "เปรียบเหมือน 'แว่นตาหรือยานพาหนะ' ที่ใช้เปิดดูเว็บไซต์ (ระวังสับสน! Chrome คือโปรแกรมเบราว์เซอร์ ส่วน Google Search คือเว็บไซต์ค้นหาข้อมูล)",
        example: "เช่น Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari"
    },
    {
        key: "Server",
        term: "Web Server (เว็บเซิร์ฟเวอร์)",
        formal: "เครื่องคอมพิวเตอร์หรือซอฟต์แวร์ระบบที่ทำหน้าที่รอรับคำขอ (Request) จากเว็บเบราว์เซอร์ และส่งข้อมูลเว็บไซต์ (Response) กลับไปยังผู้ใช้งาน",
        easy: "เปรียบเหมือน 'พนักงานประจำร้าน + ห้องครัว' พอเบราว์เซอร์ลูกค้าสั่งเมนูมา (Request) เซิร์ฟเวอร์ก็จัดอาหารส่งกลับไปให้หน้าจอลูกค้า (Response)",
        example: "เมื่อลูกค้าคลิกดูหมวดกระเป๋า เบราว์เซอร์ส่งคำขอไปที่ Web Server แล้ว Server ส่งรูปกระเป๋าและราคากลับมาแสดงผล"
    },
    {
        key: "HTTP",
        term: "HTTP (Hypertext Transfer Protocol)",
        formal: "ข้อกำหนดหรือรูปแบบการสื่อสารข้อมูลบนเว็บแบบพื้นฐานที่ไม่มีการเข้ารหัสข้อมูลด้วย TLS ระหว่างรับส่ง",
        easy: "เปรียบเหมือน 'การส่งโปสการ์ดแบบเปิดโล่ง' ใครแอบหยิบดูระหว่างทางก็อ่านข้อความออกทั้งหมด จึงไม่เหมาะกับการส่งรหัสผ่านหรือข้อมูลลูกค้า",
        example: "URL ที่ขึ้นต้นด้วย http:// เบราว์เซอร์ยุคใหม่มักเตือนว่า 'ไม่ปลอดภัย (Not Secure)'"
    },
    {
        key: "HTTPS",
        term: "HTTPS (Hypertext Transfer Protocol Secure)",
        formal: "รูปแบบการสื่อสารระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์ที่มีการเข้ารหัสข้อมูลด้วย TLS ป้องกันการดักอ่านหรือแก้ไขข้อมูลระหว่างทาง",
        easy: "เปรียบเหมือน 'การใส่ข้อมูลลงในตู้เซฟล็อกรหัส' ก่อนส่งออกไป ต่อให้มีคนดักกลางทางก็อ่านไม่ออก ช่วยสร้างความมั่นใจให้ลูกค้า",
        example: "URL ที่ขึ้นต้นด้วย https:// และมีสัญลักษณ์ความปลอดภัยหน้าช่องที่อยู่เว็บไซต์"
    },
    {
        key: "Header",
        term: "Header (ส่วนหัวเว็บไซต์)",
        formal: "พื้นที่ส่วนบนสุดของหน้าเว็บเพจที่มักแสดงโลโก้ ชื่อเว็บไซต์หรือแบรนด์ และแถบเมนูนำทางหลัก",
        easy: "เปรียบเหมือน 'ป้ายหน้าร้านด้านบนสุด' ที่ลูกค้าเข้าเว็บมาปุ๊บต้องเห็นทันทีว่าร้านนี้ชื่ออะไร และมีเมนูไปหน้าไหนได้บ้าง",
        example: "แถบบนสุดของเว็บ My Shop ที่มีโลโก้ร้านและเมนู หน้าแรก | สินค้า | ติดต่อ"
    },
    {
        key: "Navigation",
        term: "Navigation Menu (เมนูนำทาง)",
        formal: "ชุดลิงก์หรือปุ่มเมนูที่ช่วยให้ผู้ใช้งานคลิกเปลี่ยนไปยังหน้าเว็บเพจต่าง ๆ ภายในเว็บไซต์ได้อย่างสะดวกรวดเร็ว",
        easy: "เปรียบเหมือน 'ป้ายบอกทางในห้าง' ช่วยให้ลูกค้าไม่หลงทาง อยากไปดูสินค้าหรืออยากติดต่อร้านก็คลิกได้ทันที",
        example: "แถบเมนู: หน้าแรก (Home) | สินค้า (Products) | เกี่ยวกับเรา (About Us) | ติดต่อเรา (Contact)"
    },
    {
        key: "Hero Section",
        term: "Hero Section / Hero Banner (แบนเนอร์หลัก)",
        formal: "พื้นที่ขนาดใหญ่ส่วนบนของหน้าเว็บถัดจาก Header ใช้แสดงภาพเด่น ข้อความสำคัญ หรือโปรโมชันเพื่อดึงดูดสายตาผู้เข้าชมทันที",
        easy: "เปรียบเหมือน 'ตู้โชว์หุ่นหน้าร้านใบใหญ่สุด' ที่เอาสินค้าไฮไลต์หรือโปรโมชันเด็ดที่สุดมาโชว์ให้คนหยุดดูภายใน 3 วินาทีแรก",
        example: "แบนเนอร์ภาพกาแฟคั่วสดพร้อมข้อความ 'สินค้าคุณภาพ ราคาคุ้มค่า เลือกซื้อสินค้าที่เหมาะกับคุณ'"
    },
    {
        key: "Footer",
        term: "Footer (ส่วนท้ายเว็บไซต์)",
        formal: "พื้นที่ด้านล่างสุดของหน้าเว็บเพจ ใช้แสดงข้อมูลติดต่อ ที่อยู่ ช่องทางโซเชียลมีเดีย แผนผังลิงก์สำคัญ และข้อความลิขสิทธิ์",
        easy: "เปรียบเหมือน 'นามบัตรท้ายเล่ม' เวลาลูกค้าเลื่อนลงมาสุดหน้าจอ จะเจอเบอร์โทร แผนที่ร้าน เพจเฟซบุ๊ก และเครื่องหมาย © ลิขสิทธิ์",
        example: "แถบล่างสุด: ติดต่อร้าน | ที่อยู่ | ช่องทางโซเชียล | © My Shop"
    },
    {
        key: "Responsive Design",
        term: "Responsive Design (การออกแบบที่รองรับทุกหน้าจอ)",
        formal: "เทคนิคการออกแบบและพัฒนาเว็บไซต์ให้ปรับขนาดและจัดเรียงองค์ประกอบอัตโนมัติตามขนาดหน้าจอของอุปกรณ์ทั้งคอมพิวเตอร์ แท็บเล็ต และมือถือ",
        easy: "เปรียบเหมือน 'น้ำที่ปรับรูปร่างตามภาชนะ' เปิดในจอคอมก็เรียงสวย เปิดในจอมือถือตัวหนังสือก็ไม่เล็กจิ๋ว ไม่ต้องคอยถ่างนิ้วซูม",
        example: "เว็บไซต์ร้านกาแฟที่ลูกค้าเปิดสั่งผ่านสมาร์ตโฟนได้สะดวกเท่ากับเปิดบนโน้ตบุ๊ก"
    },
    {
        key: "E-Commerce",
        term: "E-Commerce Website (เว็บไซต์พาณิชย์อิเล็กทรอนิกส์)",
        formal: "เว็บไซต์เพื่อการซื้อขายสินค้าหรือบริการออนไลน์แบบครบวงจร มีระบบแค็ตตาล็อกสินค้า ตะกร้าสินค้า การสั่งซื้อ และการชำระเงิน",
        easy: "คือ 'เว็บขายของออนไลน์เต็มรูปแบบ' ที่ลูกค้ากดหยิบใส่ตะกร้า จ่ายเงิน และรอรับของที่บ้านได้เลย",
        example: "เช่น Shopee, Lazada หรือเว็บไซต์ร้านขายเสื้อผ้าออนไลน์ที่มีระบบตะกร้าสินค้า"
    },
    {
        key: "CTA",
        term: "CTA / Call to Action (ปุ่มกระตุ้นการตัดสินใจ)",
        formal: "ปุ่มหรือลิงก์ที่ออกแบบให้โดดเด่นเพื่อเชิญชวนให้ผู้เข้าชมเว็บไซต์กระทำกิจกรรมตามเป้าหมายของธุรกิจทันที",
        easy: "เปรียบเหมือน 'คำเชิญปิดการขายของพนักงาน' เช่น ปุ่มสีเด่น ๆ ที่เขียนว่า 'สั่งซื้อเลย' หรือ 'สมัครรับส่วนลดทันที'",
        example: "ปุ่ม 'สั่งซื้อสินค้า', 'ลงทะเบียนรับส่วนลด', 'จองคิวตอนนี้', 'ติดต่อเรา'"
    }
];

const QUIZ_QUESTIONS = [
    {
        id: 1,
        question: "1. ข้อใดอธิบายความหมายของเว็บไซต์ (Website) ได้ถูกต้องที่สุด?",
        options: [
            "ก. โปรแกรมสำหรับพิมพ์เอกสาร",
            "ข. กลุ่มของหน้าเว็บที่เชื่อมโยงกัน",
            "ค. อุปกรณ์สำหรับเชื่อมต่ออินเทอร์เน็ต",
            "ง. พื้นที่สำหรับจัดเก็บข้อมูลเท่านั้น"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. เว็บไซต์ (Website) คือกลุ่มของหน้าเว็บเพจที่มีเนื้อหาเกี่ยวข้องกันและเชื่อมโยงถึงกันผ่านอินเทอร์เน็ต เปรียบเหมือนหนังสือทั้งเล่ม"
    },
    {
        id: 2,
        question: "2. ข้อใดเป็นความแตกต่างระหว่างเว็บไซต์ (Website) กับเว็บเพจ (Web Page)?",
        options: [
            "ก. เว็บไซต์เป็นกลุ่มของหน้าเว็บ ส่วนเว็บเพจเป็นหน้าเดียว",
            "ข. เว็บไซต์ใช้ได้เฉพาะคอมพิวเตอร์",
            "ค. เว็บเพจไม่สามารถแสดงรูปภาพได้",
            "ง. เว็บไซต์ไม่จำเป็นต้องมีข้อมูล"
        ],
        correctIndex: 0,
        explanation: "เฉลย ก. เว็บไซต์เปรียบเหมือนหนังสือทั้งเล่มที่รวมหลายหน้าเข้าด้วยกัน ส่วนเว็บเพจคือหน้าเอกสารเพียง 1 หน้าภายในเว็บไซต์นั้น"
    },
    {
        id: 3,
        question: "3. URL (Uniform Resource Locator) มีหน้าที่สำคัญอย่างไร?",
        options: [
            "ก. ตกแต่งหน้าเว็บไซต์",
            "ข. ป้องกันไวรัสทั้งหมด",
            "ค. ระบุที่อยู่ของทรัพยากรบนอินเทอร์เน็ต",
            "ง. เพิ่มความเร็วคอมพิวเตอร์"
        ],
        correctIndex: 2,
        explanation: "เฉลย ค. URL ทำหน้าที่ระบุที่อยู่ของทรัพยากรบนอินเทอร์เน็ต (เช่น หน้าเว็บหรือรูปภาพ) เพื่อให้เบราว์เซอร์ดึงข้อมูลมาแสดงผลได้ถูกต้อง"
    },
    {
        id: 4,
        question: "4. บริการใดใช้จัดเก็บไฟล์และข้อมูลของเว็บไซต์เพื่อให้บริการออนไลน์?",
        options: [
            "ก. Web Browser",
            "ข. Search Engine",
            "ค. Domain Name",
            "ง. Web Hosting"
        ],
        correctIndex: 3,
        explanation: "เฉลย ง. Web Hosting คือบริการพื้นที่บนเซิร์ฟเวอร์สำหรับจัดเก็บไฟล์ HTML รูปภาพ วิดีโอ และฐานข้อมูล เพื่อให้เว็บไซต์ออนไลน์ได้ตลอด 24 ชม."
    },
    {
        id: 5,
        question: "5. ข้อใดเป็นเว็บเบราว์เซอร์ (Web Browser)?",
        options: [
            "ก. Microsoft Excel",
            "ข. Google Chrome",
            "ค. Adobe Photoshop",
            "ง. Microsoft Word"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. Google Chrome เป็นโปรแกรมเว็บเบราว์เซอร์สำหรับเปิดและแสดงผลเว็บไซต์ (รวมถึง Microsoft Edge, Firefox และ Safari)"
    },
    {
        id: 6,
        question: "6. เว็บเซิร์ฟเวอร์ (Web Server) มีหน้าที่หลักอะไร?",
        options: [
            "ก. รับคำขอและส่งข้อมูลเว็บไซต์กลับไป",
            "ข. ออกแบบโลโก้ให้ร้านค้า",
            "ค. สร้างชื่อโดเมนโดยอัตโนมัติ",
            "ง. แก้ไขภาพถ่ายสินค้า"
        ],
        correctIndex: 0,
        explanation: "เฉลย ก. เว็บเซิร์ฟเวอร์ทำหน้าที่รอรับคำขอ (Request) จากเว็บเบราว์เซอร์ ประมวลผล และส่งข้อมูลเว็บไซต์ (Response) กลับไปแสดงผลให้ผู้ใช้งาน"
    },
    {
        id: 7,
        question: "7. HTTPS มีประโยชน์สำคัญอย่างไรต่อเว็บไซต์ธุรกิจ?",
        options: [
            "ก. ทำให้สินค้าขายดีเสมอ",
            "ข. ทำให้เว็บไซต์ไม่ต้องใช้โฮสติ้ง",
            "ค. เข้ารหัสข้อมูลระหว่างการรับส่ง",
            "ง. ทำให้เว็บไซต์ไม่มีวันถูกโจมตี"
        ],
        correctIndex: 2,
        explanation: "เฉลย ค. HTTPS ใช้เทคโนโลยี TLS เข้ารหัสข้อมูลระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์ ช่วยป้องกันการดักอ่านหรือแก้ไขข้อมูลสำคัญของลูกค้า"
    },
    {
        id: 8,
        question: "8. เว็บไซต์ที่มีระบบตะกร้าสินค้าและสั่งซื้อออนไลน์จัดอยู่ในประเภทใด?",
        options: [
            "ก. เว็บไซต์แสดงผลงาน (Portfolio)",
            "ข. เว็บไซต์ข่าวสาร (Content/Blog)",
            "ค. เว็บไซต์องค์กรทั่วไป (Corporate)",
            "ง. เว็บไซต์พาณิชย์อิเล็กทรอนิกส์ (E-Commerce)"
        ],
        correctIndex: 3,
        explanation: "เฉลย ง. เว็บไซต์พาณิชย์อิเล็กทรอนิกส์ (E-Commerce Website) มุ่งเน้นการซื้อขายสินค้าออนไลน์ มีระบบแสดงสินค้า ตะกร้าสินค้า และการชำระเงิน"
    },
    {
        id: 9,
        question: "9. องค์ประกอบใดของหน้าเว็บช่วยให้ผู้ใช้งานเปลี่ยนไปยังหน้าเว็บต่าง ๆ ได้สะดวก?",
        options: [
            "ก. Footer",
            "ข. Navigation Menu",
            "ค. Web Hosting",
            "ง. HTTPS"
        ],
        correctIndex: 1,
        explanation: "เฉลย ข. เมนูนำทาง (Navigation Menu) เป็นชุดลิงก์สำคัญที่ช่วยให้ผู้ใช้คลิกเลือกไปยังหน้าแรก หน้าสินค้า หรือหน้าติดต่อเราได้ง่าย"
    },
    {
        id: 10,
        question: "10. ข้อใดเป็นแนวทางออกแบบเว็บไซต์ธุรกิจที่เหมาะสม?",
        options: [
            "ก. ใช้ตัวอักษรขนาดเล็กมากเพื่อประหยัดพื้นที่",
            "ข. ซ่อนข้อมูลติดต่อจากลูกค้า",
            "ค. จัดข้อมูลให้อ่านง่ายและรองรับมือถือ",
            "ง. ใช้ภาพขนาดใหญ่ทุกภาพโดยไม่ปรับแต่ง"
        ],
        correctIndex: 2,
        explanation: "เฉลย ค. เว็บไซต์ธุรกิจที่ดีต้องเลือกสีและตัวอักษรที่อ่านง่าย จัดวางเป็นระเบียบ โหลดไว และแสดงผลได้ดีทั้งคอมพิวเตอร์และสมาร์ตโฟน"
    }
];

const SLIDES_DATA = [
    // =========================================================================
    // SLIDE 1: TITLE SLIDE (2 นาที)
    // =========================================================================
    {
        id: 1,
        isCover: true,
        theme: "dark",
        slideType: "Title Slide",
        layout: "Title Slide",
        section: "บทนำรายวิชา",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 0–2)",
        title: "ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล",
        subtitle: "รหัสวิชา 21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล",
        learningObjective: "เข้าใจภาพรวมของรายวิชาและบทบาทของเว็บไซต์ต่อการดำเนินธุรกิจดิจิทัล",
        content: "ปฐมนิเทศหน่วยที่ 1 ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล สำหรับนักเรียนระดับชั้น ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล",
        keyPoints: ["เว็บไซต์คือหน้าร้านออนไลน์ 24 ชั่วโมง", "เข้าใจโครงสร้างการทำงานของเว็บ", "วางแผนสร้างเว็บธุรกิจได้จริง"],
        image: "assets/images/hero-web-business.svg",
        infographic: "3D Browser & Mobile E-Commerce Mockup",
        animation: "slideEnter",
        interactiveElement: "inline-glossary",
        glossary: ["Website", "E-Commerce", "Hosting"],
        speakerNotes: {
            whatToSay: "สวัสดีครับ/ค่ะนักเรียนทุกคน ยินดีต้อนรับเข้าสู่วิชา 21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล วันนี้เราจะเรียนหน่วยที่ 1 กันในเวลา 60 นาที เพื่อไขความลับว่าเวลาเราเข้าเว็บซื้อของหรือดูคลิป เบื้องหลังมันทำงานอย่างไร และถ้าเราจะเปิดร้านออนไลน์ของตัวเองต้องรู้อะไรบ้าง",
            realLifeExample: "ลองนึกถึงเวลาเราหิวดึก ๆ ตอนเที่ยงคืน ร้านค้าแถวบ้านปิดหมดแล้ว แต่เรายังเข้าเว็บไซต์สั่งของหรือดูเมนูร้านได้ตลอดเวลา",
            guidingQuestion: "วันนี้ใครตื่นมาแล้วเปิดเข้าเว็บไซต์หรือแอปออนไลน์ไปแล้วบ้าง เข้าไปทำอะไรกันครับ?",
            expectedAnswer: "เข้าดู YouTube, ค้นหาข้อมูลใน Google, เช็กราคาของใน Shopee หรือเข้าเว็บวิทยาลัย",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="cover-grid">
                <div>
                    <div class="cover-badges">
                        <span class="cover-pill"><i class="fa-solid fa-code"></i> รหัสวิชา 21910-2016</span>
                        <span class="cover-pill cyan"><i class="fa-solid fa-user-graduate"></i> ปวช. เทคโนโลยีธุรกิจดิจิทัล</span>
                        <span class="cover-pill purple"><i class="fa-regular fa-clock"></i> แผนการสอน 60 นาที</span>
                    </div>
                    <div class="cover-unit-no">หน่วยการเรียนรู้ที่ 1 • UNIT 01</div>
                    <h1 class="cover-main-title">ความรู้พื้นฐานเกี่ยวกับ<br><span style="color:#22D3EE;">เว็บไซต์</span>และ<span style="color:#C4B5FD;">ธุรกิจดิจิทัล</span></h1>
                    <div class="cover-quote-box">
                        “การสร้างเว็บไซต์ไม่ได้เริ่มจากการเขียนโค้ดเพียงอย่างเดียว แต่เริ่มจากการเข้าใจว่า <strong>เว็บไซต์ทำงานอย่างไร</strong> สร้างขึ้นเพื่อใคร และช่วยขับเคลื่อน <strong>ธุรกิจดิจิทัล</strong> ได้อย่างไร”
                    </div>
                    <div class="cover-meta-list">
                        <div class="cover-meta-item">
                            <i class="fa-solid fa-globe"></i>
                            <div><strong>ระบบเว็บครบวงจร</strong><br><span class="caption-text" style="color:#CBD5E1;">Website, Webpage, URL, Domain</span></div>
                        </div>
                        <div class="cover-meta-item">
                            <i class="fa-solid fa-server"></i>
                            <div><strong>การทำงาน & ความปลอดภัย</strong><br><span class="caption-text" style="color:#CBD5E1;">Hosting, Browser, Server, HTTPS</span></div>
                        </div>
                        <div class="cover-meta-item">
                            <i class="fa-solid fa-store"></i>
                            <div><strong>เว็บไซต์เพื่อธุรกิจดิจิทัล</strong><br><span class="caption-text" style="color:#CBD5E1;">6 ประเภทเว็บ & 8 องค์ประกอบ</span></div>
                        </div>
                        <div class="cover-meta-item">
                            <i class="fa-solid fa-laptop-code"></i>
                            <div><strong>ปฏิบัติจริง & ทดสอบ</strong><br><span class="caption-text" style="color:#CBD5E1;">กรณีศึกษา + กิจกรรม + Quiz 10 ข้อ</span></div>
                        </div>
                    </div>
                </div>
                <div class="img-frame" style="height: 700px; border-color: rgba(34,211,238,0.45); background: transparent;">
                    <img src="assets/images/hero-web-business.svg" alt="ภาพประกอบสถาปัตยกรรมเว็บไซต์และธุรกิจดิจิทัล">
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 2: 1. สาระสำคัญ (2 นาที)
    // =========================================================================
    {
        id: 2,
        theme: "light",
        slideType: "Infographic",
        layout: "Infographic",
        section: "1. สาระสำคัญ",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 2–4)",
        kicker: "ส่วนที่ 1 • สาระสำคัญของบทเรียน",
        title: "ทำไม “เว็บไซต์” จึงเป็นหัวใจสำคัญของโลกยุคดิจิทัล?",
        badge: "Core Concept",
        learningObjective: "อธิบายความสำคัญของอินเทอร์เน็ตและเว็บไซต์ในชีวิตประจำวันและการทำธุรกิจได้",
        content: "อินเทอร์เน็ตและเว็บไซต์ช่วยให้ผู้คนเข้าถึงข้อมูลและทำกิจกรรมออนไลน์ได้สะดวก และเป็นหน้าร้านออนไลน์ที่ช่วยขยายโอกาสทางธุรกิจ",
        keyPoints: ["เครื่องมือในชีวิตประจำวัน", "หน้าร้านออนไลน์ของธุรกิจ", "พื้นฐานเทคโนโลยีที่ต้องรู้ก่อนสร้างเว็บ"],
        speakerNotes: {
            whatToSay: "ก่อนจะลงมือทำเว็บ เราต้องเห็นภาพใหญ่ก่อนครับว่า ปัจจุบันเว็บไซต์มีบทบาท 3 มิติหลัก คือ 1) ต่อชีวิตประจำวันของเราทุกคน 2) ต่อเจ้าของธุรกิจที่ใช้เป็นหน้าร้านออนไลน์ไม่ต้องรอลูกค้าเดินผ่าน และ 3) ต่อตัวเราในฐานะคนสร้างเว็บที่ต้องรู้พื้นฐานตั้งแต่ URL ไปจนถึง HTTPS",
            realLifeExample: "ร้านขายขนมที่อยู่ในซอยลึก ถ้าไม่มีเว็บไซต์จะมีแค่คนในซอยรู้จัก แต่พอมีเว็บไซต์ ลูกค้าจากต่างจังหวัดก็ค้นเจอและสั่งซื้อได้",
            guidingQuestion: "ถ้าธุรกิจหนึ่งไม่มีตัวตนบนโลกออนไลน์เลย นักเรียนคิดว่าจะเสียโอกาสอะไรบ้าง?",
            expectedAnswer: "ลูกค้าค้นหาใน Google ไม่เจอ ขาดความน่าเชื่อถือ และขายได้เฉพาะคนที่เดินผ่านหน้าร้านเท่านั้น",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-3">
                <div class="card blue">
                    <div class="card-icon-header">
                        <div class="icon-box blue"><i class="fa-solid fa-wifi"></i></div>
                        <h3 class="card-title">1. บทบาทในชีวิตประจำวัน</h3>
                    </div>
                    <p class="card-text">อินเทอร์เน็ตและ <span class="glossary-term" data-glossary="Website">Website</span> ช่วยให้ผู้คนเข้าถึงข้อมูลและทำกิจกรรมออนไลน์ได้สะดวกรวดเร็วทุกที่ทุกเวลา</p>
                    <div class="step-list">
                        <div class="step-item"><div class="step-num">1</div><div class="step-content"><h4>ค้นหาข้อมูล & เรียนรู้</h4><p>ค้นคว้าบทเรียนและข่าวสารได้ทันที</p></div></div>
                        <div class="step-item"><div class="step-num">2</div><div class="step-content"><h4>ติดต่อ & ซื้อขายออนไลน์</h4><p>สั่งซื้อสินค้าและรับบริการได้สะดวก</p></div></div>
                    </div>
                </div>

                <div class="card purple">
                    <div class="card-icon-header">
                        <div class="icon-box purple"><i class="fa-solid fa-shop"></i></div>
                        <h3 class="card-title">2. หน้าร้านบนโลกออนไลน์</h3>
                    </div>
                    <p class="card-text">เว็บไซต์เปรียบเสมือน <strong>“หน้าร้านออนไลน์”</strong> ที่เปิดให้ลูกค้าชมสินค้า เปรียบเทียบราคา และสั่งซื้อได้โดยไม่ต้องเดินทางมาที่ร้าน</p>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#8B5CF6;"><div class="step-num" style="background:#8B5CF6;"><i class="fa-solid fa-bullhorn"></i></div><div class="step-content"><h4>สร้างความน่าเชื่อถือ</h4><p>ทำให้ธุรกิจดูเป็นมืออาชีพ มีตัวตนชัดเจน</p></div></div>
                        <div class="step-item" style="border-left-color:#8B5CF6;"><div class="step-num" style="background:#8B5CF6;"><i class="fa-solid fa-chart-line"></i></div><div class="step-content"><h4>ขยายโอกาสทางธุรกิจ</h4><p>เข้าถึงลูกค้าใหม่ได้ทั่วประเทศ 24 ชม.</p></div></div>
                    </div>
                </div>

                <div class="card cyan">
                    <div class="card-icon-header">
                        <div class="icon-box cyan"><i class="fa-solid fa-gears"></i></div>
                        <h3 class="card-title">3. พื้นฐานของนักสร้างเว็บ</h3>
                    </div>
                    <p class="card-text">การสร้างเว็บไซต์ธุรกิจให้ประสบความสำเร็จ ต้องเข้าใจทั้งเทคโนโลยีเบื้องหลังและการออกแบบที่ตอบโจทย์ผู้ใช้</p>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#0891B2;"><div class="step-num" style="background:#0891B2;"><i class="fa-solid fa-network-wired"></i></div><div class="step-content"><h4>เข้าใจเทคโนโลยีเว็บ</h4><p><span class="glossary-term" data-glossary="URL">URL</span>, <span class="glossary-term" data-glossary="Domain">Domain</span>, <span class="glossary-term" data-glossary="Hosting">Hosting</span>, <span class="glossary-term" data-glossary="HTTPS">HTTPS</span></p></div></div>
                        <div class="step-item" style="border-left-color:#0891B2;"><div class="step-num" style="background:#0891B2;"><i class="fa-solid fa-palette"></i></div><div class="step-content"><h4>ออกแบบให้ใช้งานง่าย</h4><p>สวยงาม ปลอดภัย และตรงใจลูกค้า</p></div></div>
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-lightbulb"></i> เคล็ดลับการเรียน</span>
                <span class="easy-explain-text"><strong>คลิกที่คำศัพท์ภาษาอังกฤษที่มีเส้นประ</strong> ในทุกสไลด์ เพื่อเปิดอ่านคำอธิบายภาษาพูดเข้าใจง่ายได้ทันที!</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 3: 2. จุดประสงค์การเรียนรู้ (2 นาที)
    // =========================================================================
    {
        id: 3,
        theme: "light",
        slideType: "Infographic",
        layout: "Infographic",
        section: "2. จุดประสงค์การเรียนรู้",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 4–6)",
        kicker: "ส่วนที่ 2 • เป้าหมายการเรียนรู้ประจำหน่วยที่ 1",
        title: "จุดประสงค์การเรียนรู้ (Learning Objectives)",
        badge: "6 เป้าหมายสำคัญ",
        learningObjective: "ทราบเป้าหมายการเรียนรู้ทั้ง 6 ข้อที่จะบรรลุเมื่อเรียนจบหน่วยที่ 1",
        content: "เมื่อเรียนจบหน่วยนี้ นักเรียนสามารถอธิบายความหมาย จำแนกความแตกต่าง อธิบายหน้าที่เทคโนโลยีเว็บ วิเคราะห์องค์ประกอบ และวางแผนสร้างเว็บไซต์ธุรกิจเบื้องต้นได้",
        keyPoints: ["อธิบาย Website & Digital Business", "แยก Website vs Webpage", "เข้าใจ URL, Domain, Hosting, Browser, Server, HTTPS", "วางแผนเว็บธุรกิจได้"],
        speakerNotes: {
            whatToSay: "มาดูกันครับว่าจบคาบเรียน 60 นาทีนี้ นักเรียนจะทำอะไรได้บ้าง ทั้งหมดมี 6 ข้อด้วยกัน ตั้งแต่เข้าใจความหมาย แยกแยะคำศัพท์เทคนิคได้ ไปจนถึงสามารถวางแผนออกแบบโครงร่างเว็บไซต์ให้ธุรกิจจริงได้ด้วยตัวเองครับ",
            realLifeExample: "เหมือนเวลาเราจะสร้างบ้าน เราต้องอ่านพิมพ์เขียวและรู้จักวัสดุก่อสร้างแต่ละชิ้นก่อนลงมือก่ออิฐ",
            guidingQuestion: "ใน 6 ข้อนี้ นักเรียนเคยได้ยินคำศัพท์ไหนมาบ้างแล้ว เช่น คำว่า Domain หรือ Hosting เคยได้ยินไหมครับ?",
            expectedAnswer: "เคยได้ยินคำว่า URL หรือ .com เวลาเข้าเว็บ แต่ยังไม่แน่ใจว่า Hosting กับ Server ต่างกันอย่างไร",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-3">
                <div class="card blue">
                    <div class="card-icon-header">
                        <div class="icon-box blue">01</div>
                        <h3 class="card-title">เว็บไซต์ & ธุรกิจดิจิทัล</h3>
                    </div>
                    <p class="card-text">อธิบายความหมายและบทบาทของ <strong>เว็บไซต์ (Website)</strong> และ <strong>ธุรกิจดิจิทัล (Digital Business)</strong> ได้อย่างถูกต้อง</p>
                </div>

                <div class="card purple">
                    <div class="card-icon-header">
                        <div class="icon-box purple">02</div>
                        <h3 class="card-title">Website vs Web Page</h3>
                    </div>
                    <p class="card-text">จำแนกความแตกต่างและความสัมพันธ์ระหว่าง <strong>เว็บไซต์ (Website)</strong> กับ <strong>เว็บเพจ (Web Page)</strong> พร้อมยกตัวอย่างได้</p>
                </div>

                <div class="card cyan">
                    <div class="card-icon-header">
                        <div class="icon-box cyan">03</div>
                        <h3 class="card-title">กลไกเทคโนโลยีเว็บ</h3>
                    </div>
                    <p class="card-text">อธิบายหน้าที่ของ <strong>URL, โดเมน, โฮสติ้ง, เว็บเบราว์เซอร์, เว็บเซิร์ฟเวอร์ และ HTTPS</strong> ได้ครบถ้วน</p>
                </div>

                <div class="card emerald">
                    <div class="card-icon-header">
                        <div class="icon-box emerald">04</div>
                        <h3 class="card-title">ประเภทเว็บไซต์ธุรกิจ</h3>
                    </div>
                    <p class="card-text">จำแนกประเภทเว็บไซต์ธุรกิจทั้ง <strong>6 รูปแบบ</strong> และเลือกใช้ให้ตรงกับเป้าหมายของกิจการได้</p>
                </div>

                <div class="card amber">
                    <div class="card-icon-header">
                        <div class="icon-box amber">05</div>
                        <h3 class="card-title">องค์ประกอบหน้าเว็บ</h3>
                    </div>
                    <p class="card-text">วิเคราะห์ <strong>8 องค์ประกอบสำคัญของหน้าเว็บ</strong> และหลักการออกแบบเว็บไซต์ธุรกิจที่ดีได้</p>
                </div>

                <div class="card rose">
                    <div class="card-icon-header">
                        <div class="icon-box rose">06</div>
                        <h3 class="card-title">วางแผนเว็บไซต์ธุรกิจ</h3>
                    </div>
                    <p class="card-text">นำความรู้ทั้งหมดไปวิเคราะห์และ<strong>วางแผนโครงร่างเว็บไซต์สำหรับธุรกิจขนาดเล็ก</strong>ได้จริง</p>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-compass"></i> แผนการเรียน 60 นาที</span>
                <span class="easy-explain-text"><strong>โครงสร้างเวลาเรียน:</strong> เนื้อหาและแผนภาพ Interactive (45 นาที) → กรณีศึกษา & กิจกรรม (10 นาที) → แบบทดสอบ 10 ข้อ & สรุป (5 นาที)</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 4: 3.1.1 ความหมายของเว็บไซต์ (Website) (2.5 นาที)
    // =========================================================================
    {
        id: 4,
        theme: "light",
        slideType: "Two Columns",
        layout: "Two Columns",
        section: "3.1 ความรู้พื้นฐานเกี่ยวกับเว็บไซต์",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 6–8.5)",
        kicker: "หัวข้อที่ 3.1.1 • ความหมายของเว็บไซต์",
        title: "เว็บไซต์ (Website) คืออะไร?",
        badge: "3.1.1 Website",
        learningObjective: "อธิบายความหมายของเว็บไซต์และยกตัวอย่างเว็บไซต์ในชีวิตประจำวันได้",
        content: "เว็บไซต์ คือ กลุ่มของหน้าเว็บที่มีเนื้อหาเกี่ยวข้องกัน และเชื่อมโยงถึงกันผ่านระบบอินเทอร์เน็ต เข้าถึงผ่านเว็บเบราว์เซอร์ด้วย URL และชื่อโดเมน",
        keyPoints: ["กลุ่มของหน้าเว็บที่เชื่อมโยงกัน", "เปิดผ่าน Web Browser", "เข้าถึงด้วย URL / ชื่อโดเมน", "ตัวอย่างเว็บในชีวิตประจำวัน"],
        speakerNotes: {
            whatToSay: "เริ่มที่คำแรกที่สำคัญที่สุดคือคำว่า 'เว็บไซต์ (Website)' ครับ ให้จำง่าย ๆ เลยว่า เว็บไซต์ไม่ใช่หน้าเดียวโดด ๆ แต่คือ 'กลุ่มของหน้าเว็บหลาย ๆ หน้าที่มีเนื้อหาเรื่องเดียวกัน และเชื่อมโยงถึงกันผ่านอินเทอร์เน็ต' เวลาจะเข้าดู เราต้องเปิดผ่านโปรแกรม Web Browser เช่น Chrome หรือ Safari แล้วพิมพ์ที่อยู่ URL หรือชื่อโดเมนครับ",
            realLifeExample: "เวลาเราเข้าเว็บขายของ เราเริ่มจากหน้าแรก แล้วคลิกไปดูหน้ารูปสินค้า ดูราคา และไปหน้าวิธีสั่งซื้อ ทุกหน้านี้รวมอยู่ในเว็บไซต์เดียวกัน",
            guidingQuestion: "นอกจาก Google, YouTube และ Shopee แล้ว เว็บไซต์ของสถานศึกษาของเรามีไว้ทำอะไรบ้างครับ?",
            expectedAnswer: "ใช้ประชาสัมพันธ์ข่าวสารของวิทยาลัย ประกาศตารางเรียน และให้บริการข้อมูลสำหรับนักเรียน",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="grid-2-asym">
                <div class="card blue">
                    <div class="card-icon-header">
                        <div class="icon-box blue"><i class="fa-solid fa-globe"></i></div>
                        <h3 class="card-title">นิยามของ เว็บไซต์ (<span class="glossary-term" data-glossary="Website">Website</span>)</h3>
                    </div>
                    <p class="body-text">
                        <strong>เว็บไซต์ (Website)</strong> คือ <strong>กลุ่มของหน้าเว็บที่มีเนื้อหาเกี่ยวข้องกัน</strong> และเชื่อมโยงถึงกันผ่านอินเทอร์เน็ต โดยเปิดใช้งานผ่านโปรแกรม <span class="glossary-term" data-glossary="Browser">Browser</span> เช่น Chrome, Edge หรือ Safari
                    </p>
                    <div class="step-list">
                        <div class="step-item">
                            <div class="step-num"><i class="fa-solid fa-link"></i></div>
                            <div class="step-content">
                                <h4>เข้าถึงด้วย <span class="glossary-term" data-glossary="URL">URL</span> และ <span class="glossary-term" data-glossary="Domain">Domain</span></h4>
                                <p>มีที่อยู่เฉพาะตัว และใช้ชื่อโดเมนช่วยให้จดจำง่าย</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-num"><i class="fa-solid fa-bag-shopping"></i></div>
                            <div class="step-content">
                                <h4>เชื่อมโยงหลายหน้าในเว็บเดียว</h4>
                                <p>เช่น หน้าแรก → หน้าสินค้า → หน้าวิธีสั่งซื้อและชำระเงิน</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card" style="background:#0F172A; color:#FFFFFF; border-color:#334155;">
                    <h3 class="card-title" style="color:#22D3EE;"><i class="fa-solid fa-star"></i> ตัวอย่างเว็บไซต์ในชีวิตประจำวัน</h3>
                    <div class="grid-2" style="gap:16px;">
                        <div class="card" style="background:#1E293B; border-color:#3B82F6; color:#FFF; padding:16px;">
                            <div style="font-size:32px; color:#60A5FA;"><i class="fa-brands fa-google"></i> <strong>Google</strong></div>
                            <p class="card-text" style="color:#E2E8F0;">เว็บไซต์ค้นหาข้อมูล รูปภาพ และเว็บไซต์ทั่วโลก</p>
                        </div>
                        <div class="card" style="background:#1E293B; border-color:#F43F5E; color:#FFF; padding:16px;">
                            <div style="font-size:32px; color:#FB7185;"><i class="fa-brands fa-youtube"></i> <strong>YouTube</strong></div>
                            <p class="card-text" style="color:#E2E8F0;">เว็บไซต์รับชมวิดีโอ ความบันเทิง และสื่อการเรียนรู้</p>
                        </div>
                        <div class="card" style="background:#1E293B; border-color:#F59E0B; color:#FFF; padding:16px;">
                            <div style="font-size:32px; color:#FBBF24;"><i class="fa-solid fa-cart-shopping"></i> <strong>Shopee</strong></div>
                            <p class="card-text" style="color:#E2E8F0;">เว็บไซต์ซื้อขายสินค้าและเปรียบเทียบราคาออนไลน์</p>
                        </div>
                        <div class="card" style="background:#1E293B; border-color:#10B981; color:#FFF; padding:16px;">
                            <div style="font-size:32px; color:#34D399;"><i class="fa-solid fa-school"></i> <strong>เว็บวิทยาลัย</strong></div>
                            <p class="card-text" style="color:#E2E8F0;">ประชาสัมพันธ์ข่าวสารและบริการข้อมูลนักเรียน</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-key"></i> จุดสังเกตสำคัญ</span>
                <span class="easy-explain-text">เว็บไซต์เปรียบเหมือน <strong>“อาคารร้านค้าทั้งหลัง”</strong> ที่ภายในแบ่งเป็นห้องต้อนรับ ห้องแสดงสินค้า และห้องติดต่อสอบถามที่เชื่อมถึงกัน</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 5: ประโยชน์ของเว็บไซต์ (Interactive Click-to-Reveal) (2 นาที)
    // =========================================================================
    {
        id: 5,
        theme: "light",
        slideType: "Interactive Activity",
        layout: "Interactive Activity",
        section: "3.1 ความรู้พื้นฐานเกี่ยวกับเว็บไซต์",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 8.5–10.5)",
        kicker: "หัวข้อที่ 3.1.1 • ประโยชน์ของเว็บไซต์ (Interactive Click-to-Reveal)",
        title: "ประโยชน์ของเว็บไซต์ต่อผู้ใช้งานและธุรกิจ",
        badge: "คลิกการ์ดเพื่อดูตัวอย่าง",
        learningObjective: "อธิบายประโยชน์ของเว็บไซต์ทั้ง 4 ด้านพร้อมยกตัวอย่างการนำไปใช้ในธุรกิจได้",
        content: "เว็บไซต์ช่วยเผยแพร่ข้อมูลได้อย่างรวดเร็ว เข้าถึงได้จากหลายสถานที่ นำเสนอสินค้าและบริการได้ตลอด 24 ชั่วโมง และเป็นช่องทางติดต่อสื่อสารกับลูกค้า",
        keyPoints: ["เผยแพร่ข้อมูลรวดเร็ว", "เข้าถึงได้จากหลายสถานที่", "นำเสนอสินค้าได้ 24 ชั่วโมง", "ช่องทางติดต่อสื่อสารกับลูกค้า"],
        interactiveElement: "click-to-reveal",
        speakerNotes: {
            whatToSay: "ทำไมทุกธุรกิจถึงอยากมีเว็บไซต์? ในสไลด์นี้ครูมีปุ่ม Interactive 4 ข้อ ให้พวกเราลองช่วยกันทายก่อนว่าแต่ละข้อช่วยธุรกิจได้อย่างไร แล้วครูจะคลิกเปิดคำอธิบายเพิ่มเติมให้ดูครับ",
            realLifeExample: "เวลาที่ร้านค้าเปลี่ยนราคาโปรโมชัน ถ้าพิมพ์ใบปลิวต้องเสียเงินพิมพ์ใหม่หมด แต่ถ้ามีเว็บไซต์ แก้ไขข้อความแค่ไม่กี่วินาที ลูกค้าทุกคนก็เห็นราคาใหม่ทันที",
            guidingQuestion: "ข้อดีเรื่อง 'เปิด 24 ชั่วโมง' ช่วยร้านค้าขนาดเล็กที่มีเจ้าของคนเดียวได้อย่างไรครับ?",
            expectedAnswer: "แม้ตอนกลางคืนที่เจ้าของร้านนอนหลับ ลูกค้าก็ยังเข้ามาดูรายละเอียดสินค้าและกดสั่งซื้อทิ้งไว้ได้",
            timeRecommended: "2 นาที"
        },
        html: `
            <div style="display:flex; align-items:center; justify-content:space-between; background:#EFF6FF; border:2px solid #93C5FD; padding:10px 22px; border-radius:14px; flex-shrink:0;">
                <span class="caption-text" style="font-weight:700; color:#1E40AF;"><i class="fa-solid fa-hand-pointer"></i> คลิกที่แต่ละหัวข้อเพื่อเปิดดูตัวอย่างการนำไปใช้ในธุรกิจจริง</span>
                <button class="reveal-btn reveal-all-trigger" type="button"><i class="fa-solid fa-eye"></i> เปิด/ปิดตัวอย่างทั้งหมด</button>
            </div>

            <div class="grid-2">
                <div class="reveal-card revealed">
                    <div class="reveal-header">
                        <div class="card-icon-header">
                            <div class="icon-box blue"><i class="fa-solid fa-bolt"></i></div>
                            <div>
                                <h3 class="card-title">1. เผยแพร่ข้อมูลรวดเร็ว</h3>
                                <p class="caption-text">อัปเดตข่าวสารและโปรโมชันถึงลูกค้าทันที</p>
                            </div>
                        </div>
                        <button class="reveal-btn" type="button"><i class="fa-solid fa-chevron-up"></i> ซ่อนตัวอย่าง</button>
                    </div>
                    <div class="reveal-placeholder"><i class="fa-regular fa-hand-pointer"></i> คลิกปุ่ม “ดูตัวอย่าง” เพื่อเปิดอ่านกรณีศึกษา</div>
                    <div class="reveal-body">
                        <strong><i class="fa-solid fa-circle-check" style="color:#059669;"></i> ตัวอย่างจริง:</strong> ร้านค้าอัปเดตโปรโมชันลดราคาหรือสินค้าใหม่ขึ้นหน้าเว็บได้ในไม่กี่นาที โดยไม่ต้องพิมพ์ใบปลิวใหม่
                    </div>
                </div>

                <div class="reveal-card">
                    <div class="reveal-header">
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-map-location-dot"></i></div>
                            <div>
                                <h3 class="card-title">2. เข้าถึงได้จากหลายสถานที่</h3>
                                <p class="caption-text">อยู่ต่างอำเภอหรือต่างจังหวัดก็เปิดดูข้อมูลได้</p>
                            </div>
                        </div>
                        <button class="reveal-btn" type="button"><i class="fa-solid fa-chevron-down"></i> ดูตัวอย่าง</button>
                    </div>
                    <div class="reveal-placeholder"><i class="fa-regular fa-hand-pointer"></i> คลิกปุ่ม “ดูตัวอย่าง” เพื่อเปิดอ่านกรณีศึกษา</div>
                    <div class="reveal-body">
                        <strong><i class="fa-solid fa-circle-check" style="color:#059669;"></i> ตัวอย่างจริง:</strong> ร้านสินค้า OTOP ในชุมชนสามารถรับคำสั่งซื้อจากลูกค้าทั่วประเทศได้โดยลูกค้าไม่ต้องเดินทางมาหน้าร้าน
                    </div>
                </div>

                <div class="reveal-card">
                    <div class="reveal-header">
                        <div class="card-icon-header">
                            <div class="icon-box emerald"><i class="fa-solid fa-clock"></i></div>
                            <div>
                                <h3 class="card-title">3. นำเสนอสินค้าได้ 24 ชั่วโมง</h3>
                                <p class="caption-text">หน้าร้านออนไลน์ไม่เคยปิดทำการ</p>
                            </div>
                        </div>
                        <button class="reveal-btn" type="button"><i class="fa-solid fa-chevron-down"></i> ดูตัวอย่าง</button>
                    </div>
                    <div class="reveal-placeholder"><i class="fa-regular fa-hand-pointer"></i> คลิกปุ่ม “ดูตัวอย่าง” เพื่อเปิดอ่านกรณีศึกษา</div>
                    <div class="reveal-body">
                        <strong><i class="fa-solid fa-circle-check" style="color:#059669;"></i> ตัวอย่างจริง:</strong> ลูกค้าที่เลิกงานดึกเวลา 23.00 น. สามารถเข้ามาดูแค็ตตาล็อกและกดสั่งซื้อสินค้าไว้ล่วงหน้าได้ทันที
                    </div>
                </div>

                <div class="reveal-card">
                    <div class="reveal-header">
                        <div class="card-icon-header">
                            <div class="icon-box amber"><i class="fa-solid fa-comments"></i></div>
                            <div>
                                <h3 class="card-title">4. ช่องทางติดต่อสื่อสารกับลูกค้า</h3>
                                <p class="caption-text">รวมแผนที่ เบอร์โทร และโซเชียลไว้ครบถ้วน</p>
                            </div>
                        </div>
                        <button class="reveal-btn" type="button"><i class="fa-solid fa-chevron-down"></i> ดูตัวอย่าง</button>
                    </div>
                    <div class="reveal-placeholder"><i class="fa-regular fa-hand-pointer"></i> คลิกปุ่ม “ดูตัวอย่าง” เพื่อเปิดอ่านกรณีศึกษา</div>
                    <div class="reveal-body">
                        <strong><i class="fa-solid fa-circle-check" style="color:#059669;"></i> ตัวอย่างจริง:</strong> ลูกค้ากรอกฟอร์มสอบถาม ดูแผนที่ร้าน หรือกดปุ่มทักแชต Line / Facebook ของร้านได้จากหน้าเว็บไซต์
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 6: 3.1.2 ความหมายของเว็บเพจ & โครงสร้างเว็บ (Interactive Diagram) (2.5 นาที)
    // =========================================================================
    {
        id: 6,
        theme: "light",
        slideType: "Process Diagram",
        layout: "Process Diagram",
        section: "3.1 ความรู้พื้นฐานเกี่ยวกับเว็บไซต์",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 10.5–13)",
        kicker: "หัวข้อที่ 3.1.2 • ความหมายของเว็บเพจ (Interactive Sitemap)",
        title: "เว็บเพจ (Web Page) และโครงสร้างเว็บไซต์ร้านค้าออนไลน์",
        badge: "คลิกสำรวจแต่ละเว็บเพจ",
        learningObjective: "อธิบายความหมายของเว็บเพจและโครงสร้างการเชื่อมโยงเว็บเพจภายในเว็บไซต์ได้",
        content: "เว็บเพจ คือ หน้าเอกสารหนึ่งหน้าที่แสดงข้อมูลผ่านเว็บเบราว์เซอร์ ภายในประกอบด้วยข้อความ รูปภาพ วิดีโอ ตาราง ปุ่มกด หรือแบบฟอร์ม",
        keyPoints: ["หน้าเอกสารหนึ่งหน้าบนเว็บเบราว์เซอร์", "ประกอบด้วยข้อความ รูปภาพ วิดีโอ ปุ่ม แบบฟอร์ม", "หลายเว็บเพจรวมกันเป็น 1 เว็บไซต์"],
        interactiveElement: "interactive-sitemap",
        speakerNotes: {
            whatToSay: "ต่อมาคือคำว่า 'เว็บเพจ (Web Page)' คำว่า Page แปลว่า 'หน้า' ดังนั้นเว็บเพจก็คือ หน้าเอกสารเพียง 1 หน้าที่เปิดแสดงผลบนเบราว์เซอร์ ข้างในหน้านั้นอาจจะมีข้อความ รูปภาพ วิดีโอ ตาราง ปุ่มกด หรือแบบฟอร์มต่าง ๆ ลองดูแผนภาพโครงสร้างร้าน www.example-shop.com ด้านล่างนี้ครับ เว็บไซต์ 1 แห่งประกอบด้วยเว็บเพจ 4 หน้า เดี๋ยวครูคลิกแต่ละหน้าให้ดูว่าแต่ละหน้าเก็บข้อมูลอะไร",
            realLifeExample: "เหมือนสมุดเมนูอาหารของร้าน ที่หน้าแรกเป็นปกร้าน หน้าสองเป็นเมนูน้ำ หน้าสามเป็นประวัติร้าน และหน้าสี่เป็นเบอร์โทรร้าน",
            guidingQuestion: "ถ้าลูกค้าอยากรู้ว่าร้านขายเสื้อผ้าตั้งอยู่ที่ไหนและมีเบอร์โทรอะไร ลูกค้าควรคลิกไปที่เว็บเพจหน้าไหนครับ?",
            expectedAnswer: "หน้าติดต่อเรา (Contact)",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="card blue auto-h" style="padding:16px 24px;">
                <p class="body-text">
                    <strong>เว็บเพจ (<span class="glossary-term" data-glossary="Webpage">Webpage</span>)</strong> คือ <strong>หน้าเอกสารหนึ่งหน้าที่แสดงข้อมูลผ่านเว็บเบราว์เซอร์</strong> ภายในประกอบด้วยข้อความ รูปภาพ วิดีโอ ตาราง ปุ่มกด หรือแบบฟอร์ม โดยหลายเว็บเพจเชื่อมโยงรวมกันเป็น 1 เว็บไซต์
                </p>
            </div>

            <div class="interactive-diagram-box" id="sitemapDiagram">
                <div style="text-align:center;">
                    <div style="display:inline-flex; align-items:center; gap:14px; background:#0B1026; color:#FFF; padding:12px 28px; border-radius:14px; border:2px solid #22D3EE;">
                        <i class="fa-solid fa-sitemap" style="color:#22D3EE; font-size:28px;"></i>
                        <span class="body-text" style="color:#FFFFFF;"><strong>เว็บไซต์ (1 Website): <span style="color:#22D3EE;">www.example-shop.com</span></strong></span>
                        <span class="caption-text" style="background:#2563EB; color:#FFF; padding:4px 14px; border-radius:999px; font-weight:700;">คลิกดูทั้ง 4 เว็บเพจ</span>
                    </div>
                </div>

                <div class="grid-4" style="flex:0 0 auto;">
                    <button type="button" class="hotspot-btn active sitemap-tab" data-page="home" style="justify-content:center; flex-direction:column; padding:16px;">
                        <i class="fa-solid fa-house" style="font-size:32px;"></i>
                        <span>1. หน้าแรก (Home)</span>
                    </button>
                    <button type="button" class="hotspot-btn sitemap-tab" data-page="products" style="justify-content:center; flex-direction:column; padding:16px;">
                        <i class="fa-solid fa-shirt" style="font-size:32px;"></i>
                        <span>2. หน้าสินค้า (Products)</span>
                    </button>
                    <button type="button" class="hotspot-btn sitemap-tab" data-page="about" style="justify-content:center; flex-direction:column; padding:16px;">
                        <i class="fa-solid fa-users" style="font-size:32px;"></i>
                        <span>3. เกี่ยวกับเรา (About Us)</span>
                    </button>
                    <button type="button" class="hotspot-btn sitemap-tab" data-page="contact" style="justify-content:center; flex-direction:column; padding:16px;">
                        <i class="fa-solid fa-phone-volume" style="font-size:32px;"></i>
                        <span>4. ติดต่อเรา (Contact)</span>
                    </button>
                </div>

                <div class="diagram-detail-panel" id="sitemapDetailPanel">
                    <div class="icon-box blue" style="width:68px; height:68px; font-size:32px;"><i class="fa-solid fa-house"></i></div>
                    <div>
                        <h3 class="section-heading" style="color:#1D4ED8;">เว็บเพจที่ 1: หน้าแรก (Home Page — index.html)</h3>
                        <p class="body-text" style="color:#1E293B;">หน้าต้อนรับหลักของเว็บไซต์ แสดงแบนเนอร์โปรโมชัน สินค้าขายดีแนะนำ และเมนูนำทางเพื่อเชื่อมต่อไปยังเว็บเพจหน้าอื่น ๆ ของร้าน</p>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 7: ความแตกต่างระหว่าง Website vs Web Page (2.5 นาที)
    // =========================================================================
    {
        id: 7,
        theme: "dark",
        slideType: "Comparison",
        layout: "Comparison",
        section: "3.1 ความรู้พื้นฐานเกี่ยวกับเว็บไซต์",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 13–15.5)",
        kicker: "หัวข้อที่ 3.1.2 • ตารางเปรียบเทียบชัด ๆ (ประเด็นสำคัญออกสอบ!)",
        title: "ความแตกต่างระหว่าง เว็บไซต์ (Website) กับ เว็บเพจ (Web Page)",
        badge: "Website vs Web Page",
        learningObjective: "เปรียบเทียบความแตกต่างและความสัมพันธ์ระหว่างเว็บไซต์กับเว็บเพจได้ถูกต้อง",
        content: "เว็บไซต์เปรียบเหมือนหนังสือทั้งเล่มที่เป็นกลุ่มของหน้าเว็บที่เชื่อมโยงกัน ส่วนเว็บเพจเปรียบเหมือนหน้าหนึ่งของหนังสือที่เป็นเอกสารหน้าเดียว",
        keyPoints: ["กลุ่มของหน้าเว็บ vs หน้าเดียว", "หนังสือทั้งเล่ม vs หน้าหนึ่งของหนังสือ", "เว็บเพจเป็นส่วนประกอบของเว็บไซต์"],
        speakerNotes: {
            whatToSay: "สไลด์นี้ดอกจันไว้เลยครับ ออกสอบแน่นอน! หลายคนมักพูดสลับกันระหว่าง Website กับ Web Page ให้พวกเราจำภาพเปรียบเทียบนี้ไว้เลย: 'เว็บไซต์ (Website) เปรียบเหมือนหนังสือทั้งเล่ม' ส่วน 'เว็บเพจ (Web Page) เปรียบเหมือนกระดาษหน้าหนึ่งของหนังสือเล่มนั้น' ทั้งสองอย่างสัมพันธ์กันโดยเว็บเพจเป็นส่วนประกอบย่อยของเว็บไซต์ และเชื่อมหากันด้วยลิงก์ (Hyperlink)",
            realLifeExample: "หนังสือการ์ตูน 1 เล่ม มี 100 หน้า = 1 Website ที่มี 100 Web Pages",
            guidingQuestion: "ถ้าครูเปิดดู 'หน้ารายละเอียดรองเท้าวิ่งรุ่น A' เพียงหน้าเดียว สิ่งที่อยู่บนหน้าจอครูตอนนี้เรียกว่า Website หรือ Web Page ครับ?",
            expectedAnswer: "เรียกว่า Web Page (เว็บเพจ) ซึ่งอยู่ภายใน Website ของร้านขายรองเท้า",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card" style="border:2.5px solid #22D3EE; background:rgba(14,116,144,0.22);">
                    <div class="card-icon-header">
                        <div class="icon-box cyan"><i class="fa-solid fa-book"></i></div>
                        <div>
                            <h3 class="card-title" style="color:#22D3EE;">เว็บไซต์ (Website)</h3>
                            <p class="caption-text" style="color:#A5F3FC;">เปรียบเหมือน “หนังสือทั้งเล่ม”</p>
                        </div>
                    </div>
                    <div class="step-list">
                        <div class="step-item"><div class="step-num" style="background:#0891B2;">1</div><div class="step-content"><h4>กลุ่มของหน้าเว็บที่เชื่อมโยงกัน</h4><p>รวบรวมเนื้อหาทั้งหมดของธุรกิจไว้ภายใต้โดเมนเดียวกัน</p></div></div>
                        <div class="step-item"><div class="step-num" style="background:#0891B2;">2</div><div class="step-content"><h4>ประกอบด้วยหลายหน้า</h4><p>มีตั้งแต่ไม่กี่หน้าไปจนถึงหลายพันหน้าตามขนาดธุรกิจ</p></div></div>
                        <div class="step-item"><div class="step-num" style="background:#0891B2;">3</div><div class="step-content"><h4>ตัวอย่าง: เว็บไซต์ร้านค้าทั้งระบบ</h4><p>เช่น เว็บไซต์ร้านขายเสื้อผ้าออนไลน์ (www.example-shop.com)</p></div></div>
                    </div>
                </div>

                <div class="card" style="border:2.5px solid #C4B5FD; background:rgba(109,40,217,0.22);">
                    <div class="card-icon-header">
                        <div class="icon-box purple"><i class="fa-solid fa-file-lines"></i></div>
                        <div>
                            <h3 class="card-title" style="color:#DDD6FE;">เว็บเพจ (Web Page)</h3>
                            <p class="caption-text" style="color:#DDD6FE;">เปรียบเหมือน “หน้าหนึ่งของหนังสือ”</p>
                        </div>
                    </div>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#A78BFA;"><div class="step-num" style="background:#7C3AED;">1</div><div class="step-content"><h4>หน้าเอกสารหนึ่งหน้าภายในเว็บไซต์</h4><p>แสดงเนื้อหาเฉพาะเรื่องในหน้านั้น ๆ ผ่านเว็บเบราว์เซอร์</p></div></div>
                        <div class="step-item" style="border-left-color:#A78BFA;"><div class="step-num" style="background:#7C3AED;">2</div><div class="step-content"><h4>เป็นเพียงหน้าเดียว</h4><p>วางลิงก์ (Hyperlink) เพื่อเชื่อมต่อไปยังเว็บเพจหน้าอื่นได้</p></div></div>
                        <div class="step-item" style="border-left-color:#A78BFA;"><div class="step-num" style="background:#7C3AED;">3</div><div class="step-content"><h4>ตัวอย่าง: หน้ารายละเอียดสินค้า</h4><p>เช่น หน้าแสดงข้อมูลเสื้อยืดรุ่นพิเศษ หรือหน้าติดต่อเรา</p></div></div>
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-link"></i> ความสัมพันธ์</span>
                <span class="easy-explain-text"><strong>สรุปจำง่าย:</strong> เว็บเพจหลาย ๆ หน้า (Web Pages) เป็นส่วนประกอบย่อยที่เชื่อมโยงกันด้วยลิงก์ จนกลายเป็นเว็บไซต์ (Website) หนึ่งแห่ง</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 8: 3.2 ความรู้พื้นฐานเกี่ยวกับธุรกิจดิจิทัล (2.5 นาที)
    // =========================================================================
    {
        id: 8,
        theme: "light",
        slideType: "Comparison",
        layout: "Comparison",
        section: "3.2 ความรู้พื้นฐานเกี่ยวกับธุรกิจดิจิทัล",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 15.5–18)",
        kicker: "หัวข้อที่ 3.2 • ความรู้พื้นฐานเกี่ยวกับธุรกิจดิจิทัล",
        title: "ธุรกิจดิจิทัล (Digital Business) คืออะไร?",
        badge: "3.2 Digital Business",
        learningObjective: "อธิบายความหมายของธุรกิจดิจิทัลและเปรียบเทียบกับธุรกิจแบบดั้งเดิมได้",
        content: "ธุรกิจดิจิทัล คือ การดำเนินธุรกิจที่นำเทคโนโลยีดิจิทัลมาใช้สนับสนุนกระบวนการทำงาน เช่น การขาย การประชาสัมพันธ์ การรับชำระเงิน การจัดการข้อมูลลูกค้า และบริการหลังการขาย",
        keyPoints: ["นำเทคโนโลยีดิจิทัลมาสนับสนุนการทำงาน", "ไม่ใช่แค่ขายออนไลน์ แต่รวมถึงการจัดการระบบ", "เปรียบเทียบร้านกาแฟดั้งเดิม vs ร้านกาแฟดิจิทัล"],
        speakerNotes: {
            whatToSay: "ทีนี้เรามาดูคำว่า 'ธุรกิจดิจิทัล (Digital Business)' กันบ้างครับ นักเรียนหลายคนคิดว่าธุรกิจดิจิทัลแปลว่าต้องขายของในเน็ตอย่างเดียว จริง ๆ แล้วกว้างกว่านั้นครับ! ธุรกิจดิจิทัลคือการนำเทคโนโลยีดิจิทัลมาช่วยในทุกขั้นตอน ตั้งแต่การโฆษณา การรับออเดอร์ การจ่ายเงินสแกน QR การเก็บประวัติลูกค้า ไปจนถึงบริการหลังการขาย",
            realLifeExample: "ดูตัวอย่างร้านกาแฟในสไลด์ครับ เดิมลูกค้าต้องเดินมาต่อคิวหน้าร้านอย่างเดียว พอเปลี่ยนเป็นธุรกิจดิจิทัล ร้านสร้างเว็บให้ลูกค้าดูเมนู สั่งกาแฟล่วงหน้าและจ่ายเงินออนไลน์ พอเดินมาถึงร้านก็รับแก้วไปได้เลย ไม่ต้องรอคิว!",
            guidingQuestion: "การที่ร้านกาแฟให้ลูกค้าสั่งและชำระเงินล่วงหน้าผ่านเว็บไซต์ ช่วยแก้ปัญหาอะไรให้ร้านในตอนเช้าที่คนแน่น ๆ ได้บ้างครับ?",
            expectedAnswer: "ช่วยลดคิวหน้าร้าน บาริสต้าเตรียมเครื่องดื่มได้แม่นยำขึ้น ไม่ต้องทอนเงินสด และลูกค้าไม่ต้องรอนาน",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="card blue auto-h" style="padding:14px 22px;">
                <p class="body-text">
                    <strong>ธุรกิจดิจิทัล (Digital Business)</strong> คือ การนำเทคโนโลยีดิจิทัลมาสนับสนุนกระบวนการทำงาน เช่น <strong>การขาย การประชาสัมพันธ์ การรับชำระเงิน การจัดการข้อมูลลูกค้า และบริการหลังการขาย</strong> ให้สะดวกรวดเร็วขึ้น
                </p>
            </div>

            <div class="grid-2">
                <div class="card rose">
                    <div class="card-icon-header">
                        <div class="icon-box rose"><i class="fa-solid fa-person-walking"></i></div>
                        <div>
                            <h3 class="card-title">1. ธุรกิจแบบดั้งเดิม (Traditional)</h3>
                            <p class="caption-text" style="color:#9F1239;">พึ่งพาหน้าร้านจริงเพียงช่องทางเดียว</p>
                        </div>
                    </div>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#E11D48;"><div class="step-num" style="background:#E11D48;">1</div><div class="step-content"><h4>ต้องเดินทางมาที่หน้าร้าน</h4><p>ลูกค้าไม่ทราบเมนูหรือโปรโมชันหากไม่ได้เดินผ่านร้าน</p></div></div>
                        <div class="step-item" style="border-left-color:#E11D48;"><div class="step-num" style="background:#E11D48;">2</div><div class="step-content"><h4>รอคิวสั่งและจ่ายเงินสดที่เคาน์เตอร์</h4><p>ใช้เวลานานในชั่วโมงเร่งด่วน และจำกัดเฉพาะเวลาเปิดร้าน</p></div></div>
                    </div>
                </div>

                <div class="card emerald">
                    <div class="card-icon-header">
                        <div class="icon-box emerald"><i class="fa-solid fa-laptop-mobile"></i></div>
                        <div>
                            <h3 class="card-title">2. ธุรกิจดิจิทัล (Digital Business)</h3>
                            <p class="caption-text" style="color:#065F46;">เชื่อมหน้าร้านจริงเข้ากับเว็บไซต์และระบบออนไลน์</p>
                        </div>
                    </div>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#059669;"><div class="step-num" style="background:#059669;">1</div><div class="step-content"><h4>ดูเมนูและราคาผ่านเว็บไซต์ได้ทันที</h4><p>ลูกค้าเลือกชมเครื่องดื่มและโปรโมชันจากมือถือได้ทุกที่</p></div></div>
                        <div class="step-item" style="border-left-color:#059669;"><div class="step-num" style="background:#059669;">2</div><div class="step-content"><h4>สั่งล่วงหน้า & ชำระเงินออนไลน์</h4><p>ลดคิวหน้าร้าน และบันทึกข้อมูลยอดขายอัตโนมัติ</p></div></div>
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-mug-hot"></i> ตัวอย่างร้านกาแฟ</span>
                <span class="easy-explain-text">จากเดิมที่ลูกค้าต้องยืนต่อคิวหน้าร้าน → เปลี่ยนมาใช้ <strong>เว็บไซต์แสดงเมนู + สั่งล่วงหน้า + ชำระเงินออนไลน์</strong> ช่วยเพิ่มยอดขายได้จริง!</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 9: บทบาทของเว็บไซต์ต่อธุรกิจดิจิทัล (2 นาที)
    // =========================================================================
    {
        id: 9,
        theme: "light",
        slideType: "Infographic",
        layout: "Infographic",
        section: "3.2 ความรู้พื้นฐานเกี่ยวกับธุรกิจดิจิทัล",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 18–20)",
        kicker: "หัวข้อที่ 3.2 • บทบาทของเว็บไซต์และการเชื่อมต่อระบบธุรกิจ",
        title: "บทบาทของเว็บไซต์ต่อธุรกิจดิจิทัล",
        badge: "Business Hub",
        learningObjective: "อธิบายบทบาทของเว็บไซต์ในการสร้างความน่าเชื่อถือ เพิ่มยอดขาย และเชื่อมต่อกับระบบอื่น ๆ ของธุรกิจได้",
        content: "เว็บไซต์ช่วยนำเสนอสินค้า สร้างภาพลักษณ์ที่น่าเชื่อถือ เพิ่มช่องทางการขาย ช่วยให้ลูกค้าติดต่อสะดวก และเชื่อมต่อกับระบบชำระเงิน ระบบจัดการสินค้า และระบบบันทึกข้อมูลการสั่งซื้อ",
        keyPoints: ["นำเสนอสินค้า & สร้างความน่าเชื่อถือ", "เพิ่มช่องทางการขาย & ติดต่อสะดวก", "เชื่อมต่อระบบชำระเงิน สต็อกสินค้า และข้อมูลคำสั่งซื้อ"],
        speakerNotes: {
            whatToSay: "นอกจากเป็นหน้าร้านให้ลูกค้าดูข้อมูลแล้ว เว็บไซต์ยุคใหม่ยังทำหน้าที่เป็น 'ศูนย์กลาง (Hub)' ที่เชื่อมต่อกับระบบหลังบ้านของธุรกิจด้วยครับ เช่น เชื่อมกับระบบชำระเงินออนไลน์ เชื่อมกับระบบตัดสต็อกสินค้า และระบบบันทึกประวัติการสั่งซื้อ ทำให้เจ้าของร้านบริหารงานได้ง่ายขึ้นมาก",
            realLifeExample: "เวลาเรากดสั่งเสื้อ 1 ตัวบนเว็บ ระบบเว็บจะแจ้งยอดเงินไปที่ระบบชำระเงิน พอเราจ่ายปุ๊บ ระบบจะไปตัดสต็อกเสื้อลดลง 1 ตัว และออกใบสั่งซื้อให้ร้านเตรียมแพ็กของทันที",
            guidingQuestion: "ถ้าเว็บไซต์ร้านค้าเชื่อมต่อกับระบบจัดการสต็อกสินค้าอัตโนมัติ จะช่วยป้องกันปัญหาอะไรไม่ให้เกิดกับลูกค้าครับ?",
            expectedAnswer: "ป้องกันปัญหาลูกค้ากดสั่งซื้อและโอนเงินแล้ว แต่ปรากฏว่าสินค้าหมดสต็อก",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-4">
                <div class="card blue">
                    <div class="icon-box blue"><i class="fa-solid fa-award"></i></div>
                    <h3 class="card-title">1. นำเสนอสินค้า</h3>
                    <p class="card-text">แสดงรูปภาพ จุดเด่น และราคาให้ลูกค้ารู้จักอย่างชัดเจน</p>
                </div>
                <div class="card purple">
                    <div class="icon-box purple"><i class="fa-solid fa-shield-heart"></i></div>
                    <h3 class="card-title">2. สร้างความน่าเชื่อถือ</h3>
                    <p class="card-text">มีเว็บไซต์ทางการช่วยให้ลูกค้ามั่นใจว่าธุรกิจมีตัวตนจริง</p>
                </div>
                <div class="card emerald">
                    <div class="icon-box emerald"><i class="fa-solid fa-sack-dollar"></i></div>
                    <h3 class="card-title">3. เพิ่มช่องทางขาย</h3>
                    <p class="card-text">ขยายฐานลูกค้าจากหน้าร้านเดิมสู่ลูกค้าออนไลน์ทั่วประเทศ</p>
                </div>
                <div class="card amber">
                    <div class="icon-box amber"><i class="fa-solid fa-headset"></i></div>
                    <h3 class="card-title">4. ติดต่อได้สะดวก</h3>
                    <p class="card-text">รวมเบอร์โทร แผนที่ และโซเชียลมีเดียไว้ในที่เดียว</p>
                </div>
            </div>

            <div class="card" style="background:linear-gradient(135deg, #0B1026, #1E1B4B); color:#FFFFFF; border-color:#8B5CF6; padding:20px 26px;">
                <h3 class="card-title" style="color:#22D3EE;"><i class="fa-solid fa-plug-circle-check"></i> การเชื่อมต่อเว็บไซต์เข้ากับระบบหลังบ้านของธุรกิจ</h3>
                <div class="grid-3" style="gap:18px;">
                    <div style="background:rgba(255,255,255,0.09); border:1.5px solid rgba(34,211,238,0.4); border-radius:14px; padding:14px 18px;">
                        <h4 class="step-content" style="color:#38BDF8; font-size:28px; font-weight:700;"><i class="fa-solid fa-credit-card"></i> 1. ระบบชำระเงิน</h4>
                        <p class="card-text" style="color:#E2E8F0;">โอนเงิน สแกน QR หรือบัตรเครดิต พร้อมเช็กยอดอัตโนมัติ</p>
                    </div>
                    <div style="background:rgba(255,255,255,0.09); border:1.5px solid rgba(167,139,250,0.4); border-radius:14px; padding:14px 18px;">
                        <h4 class="step-content" style="color:#C4B5FD; font-size:28px; font-weight:700;"><i class="fa-solid fa-boxes-stacked"></i> 2. ระบบจัดการสินค้า</h4>
                        <p class="card-text" style="color:#E2E8F0;">ตัดสต็อกสินค้าเรียลไทม์ แจ้งเตือนเมื่อสินค้าใกล้หมด</p>
                    </div>
                    <div style="background:rgba(255,255,255,0.09); border:1.5px solid rgba(52,211,153,0.4); border-radius:14px; padding:14px 18px;">
                        <h4 class="step-content" style="color:#6EE7B7; font-size:28px; font-weight:700;"><i class="fa-solid fa-clipboard-list"></i> 3. ระบบข้อมูลคำสั่งซื้อ</h4>
                        <p class="card-text" style="color:#E2E8F0;">บันทึกรายการสั่งซื้อและที่อยู่ลูกค้าเพื่อจัดส่งแม่นยำ</p>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 10: 3.3 URL (Uniform Resource Locator) - Interactive URL Anatomy (2.5 นาที)
    // =========================================================================
    {
        id: 10,
        theme: "dark",
        slideType: "Process Diagram",
        layout: "Process Diagram",
        section: "3.3 URL (ที่อยู่บนอินเทอร์เน็ต)",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 20–22.5)",
        kicker: "หัวข้อที่ 3.3 • แผนภาพผ่าโครงสร้าง URL แบบโต้ตอบ (Interactive Diagram)",
        title: "URL (Uniform Resource Locator) และส่วนประกอบสำคัญ",
        badge: "คลิกแต่ละส่วนของ URL",
        learningObjective: "อธิบายหน้าที่และแยกส่วนประกอบทั้ง 3 ส่วนของ URL (Protocol, Domain Name, Path) ได้",
        content: "URL คือ ที่อยู่ของทรัพยากรบนอินเทอร์เน็ต เช่น หน้าเว็บ รูปภาพ หรือไฟล์ ทำหน้าที่บอกเว็บเบราว์เซอร์ว่าจะต้องไปเรียกข้อมูลจากที่ใดและใช้วิธีการสื่อสารแบบใด",
        keyPoints: ["Protocol (https://)", "Domain Name (www.example.com)", "Path (/products/shoes.html)"],
        interactiveElement: "url-anatomy",
        speakerNotes: {
            whatToSay: "มาถึงหัวข้อที่ 3.3 คำว่า URL ย่อมาจาก Uniform Resource Locator แปลตรงตัวคือ 'ตัวชี้ตำแหน่งของทรัพยากรบนอินเทอร์เน็ต' ไม่ว่าจะเป็นหน้าเว็บ รูปภาพ หรือไฟล์ดาวน์โหลด ทุกชิ้นจะมี URL ของตัวเองเสมอ ลองดูตัวอย่างบนจอครับ https://www.example.com/products/shoes.html แบ่งออกเป็น 3 ส่วนชัดเจน เดี๋ยวครูคลิกทีละส่วนให้ดูครับ",
            realLifeExample: "เปรียบเหมือนการเดินทางไปหาเพื่อน: Protocol คือ 'วิธีเดินทางที่ปลอดภัย' + Domain Name คือ 'ชื่อคอนโด' + Path คือ 'ชั้นและเลขห้องของเพื่อน'",
            guidingQuestion: "จากตัวอย่าง https://www.example.com/products/shoes.html ส่วนไหนที่บอกเบราว์เซอร์ว่าเรากำลังเปิดไฟล์หน้ารองเท้าอยู่ครับ?",
            expectedAnswer: "ส่วน Path คือ /products/shoes.html",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="card auto-h" style="background:rgba(30,41,59,0.88); border-color:#38BDF8; padding:14px 22px;">
                <p class="body-text" style="color:#F8FAFC;">
                    <strong><span class="glossary-term" data-glossary="URL">URL</span> (Uniform Resource Locator)</strong> คือ <strong>ที่อยู่ของทรัพยากรบนอินเทอร์เน็ต</strong> บอกเบราว์เซอร์ว่าต้องเรียกข้อมูลจากที่ใดและสื่อสารแบบใด (คลิกแต่ละส่วนด้านล่างเพื่อสำรวจ)
                </p>
            </div>

            <div class="interactive-diagram-box" id="urlAnatomyBox">
                <div class="url-interactive-bar">
                    <button type="button" class="url-part-btn protocol active" data-urlpart="protocol">
                        <span>https://</span>
                        <span class="part-tag">1. Protocol (ข้อกำหนดการสื่อสาร)</span>
                    </button>
                    <button type="button" class="url-part-btn domain" data-urlpart="domain">
                        <span>www.example.com</span>
                        <span class="part-tag">2. Domain Name (ชื่อเว็บไซต์)</span>
                    </button>
                    <button type="button" class="url-part-btn path" data-urlpart="path">
                        <span>/products/shoes.html</span>
                        <span class="part-tag">3. Path (เส้นทางไปยังไฟล์)</span>
                    </button>
                </div>

                <div class="diagram-detail-panel" id="urlDetailPanel">
                    <div class="icon-box emerald" style="width:66px; height:66px; font-size:30px;"><i class="fa-solid fa-lock"></i></div>
                    <div>
                        <h3 class="section-heading" style="color:#34D399;">ส่วนที่ 1: Protocol — <code>https://</code></h3>
                        <p class="body-text" style="color:#F8FAFC;">คือ <strong>รูปแบบหรือข้อกำหนดในการสื่อสารข้อมูล</strong> ใช้เชื่อมต่อและรับส่งข้อมูลกับเว็บไซต์อย่างมีการเข้ารหัสปลอดภัย (TLS)</p>
                    </div>
                </div>

                <div class="grid-3" style="flex:0 0 auto;">
                    <div class="card" style="padding:14px 18px; border-left:5px solid #10B981;">
                        <strong class="card-text" style="color:#34D399;">1. Protocol (https://)</strong>
                        <span class="caption-text" style="color:#E2E8F0;">กำหนดวิธีรับส่งข้อมูลอย่างปลอดภัย</span>
                    </div>
                    <div class="card" style="padding:14px 18px; border-left:5px solid #22D3EE;">
                        <strong class="card-text" style="color:#22D3EE;">2. Domain (www.example.com)</strong>
                        <span class="caption-text" style="color:#E2E8F0;">ระบุชื่อเว็บไซต์ปลายทางที่ต้องการติดต่อ</span>
                    </div>
                    <div class="card" style="padding:14px 18px; border-left:5px solid #A78BFA;">
                        <strong class="card-text" style="color:#C4B5FD;">3. Path (/products/shoes.html)</strong>
                        <span class="caption-text" style="color:#E2E8F0;">ระบุหมวดหมู่และไฟล์หน้าเว็บที่ต้องการเปิด</span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 11 (SLIDE A): 3.4 ประเภทของโดเมน (Domain Name & Extensions Table) (2 นาที)
    // =========================================================================
    {
        id: 11,
        theme: "light",
        slideType: "Table",
        layout: "Table",
        section: "3.4 โดเมน (Domain Name)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 22.5–24.5)",
        kicker: "หัวข้อที่ 3.4 (ตอนที่ 1/2) • ความหมายและประเภทของนามสกุลโดเมน",
        title: "โดเมน (Domain Name) และประเภทของโดเมน",
        badge: "Slide A • ประเภทโดเมน",
        learningObjective: "อธิบายหน้าที่ของชื่อโดเมนแทน IP Address และจำแนกส่วนขยายโดเมน (.com, .org, .net, .ac.th, .co.th, .go.th) ได้",
        content: "โดเมน คือ ชื่อที่ใช้ระบุเว็บไซต์บนอินเทอร์เน็ตแทนการจำหมายเลข IP Address ของเซิร์ฟเวอร์ พร้อมตารางเปรียบเทียบส่วนขยายโดเมนยอดนิยมทั้ง 6 ประเภท",
        keyPoints: ["ใช้จำชื่อเว็บง่าย ๆ แทนหมายเลข IP Address", "ตารางโดเมน .com, .org, .net", "ตารางโดเมนประเทศไทย .ac.th, .co.th, .go.th"],
        speakerNotes: {
            whatToSay: "ทำไมเราต้องมี Domain Name? เพราะคอมพิวเตอร์คุยกันด้วยหมายเลข IP Address เช่น 142.250.199.14 ซึ่งคนเราจำได้ยากมาก จึงมีระบบ Domain Name ให้ตั้งเป็นชื่อที่อ่านเข้าใจง่าย เช่น google.com หรือ youtube.com มาดูตารางประเภทของนามสกุลโดเมนทั้ง 6 ตัวบนสไลด์นี้กันครับ แต่ละนามสกุลบอกประเภทขององค์กรได้ชัดเจนเลย",
            realLifeExample: "เหมือนสมุดโทรศัพท์ในมือถือ เราเมมชื่อว่า 'แม่' แทนการท่องเบอร์ 10 หลัก เวลาจะโทรก็กดที่ชื่อได้เลย",
            guidingQuestion: "ถ้าวิทยาลัยอาชีวศึกษาต้องการจดโดเมนของสถานศึกษาในประเทศไทย ควรใช้ส่วนขยายโดเมนอะไรครับ?",
            expectedAnswer: ".ac.th (ใช้กับสถาบันการศึกษาในประเทศไทยที่เข้าเกณฑ์)",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2-asym" style="grid-template-columns: minmax(0, 1.32fr) minmax(0, 0.68fr);">
                <div style="height:100%;">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th style="width:28%;"><i class="fa-solid fa-globe"></i> ส่วนขยาย</th>
                                <th>ประเภทองค์กรและการใช้งานที่พบได้บ่อย</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span style="display:inline-flex; align-items:center; gap:10px; font-weight:800; color:#1D4ED8; font-size:28px;"><i class="fa-solid fa-store"></i> .com</span></td>
                                <td><strong>ธุรกิจการค้าและเว็บไซต์ทั่วไป</strong> (Commercial) เช่น google.com</td>
                            </tr>
                            <tr>
                                <td><span style="display:inline-flex; align-items:center; gap:10px; font-weight:800; color:#6D28D9; font-size:28px;"><i class="fa-solid fa-hand-holding-heart"></i> .org</span></td>
                                <td><strong>องค์กรไม่แสวงหาผลกำไร</strong> มูลนิธิ หรือสมาคม (Organization)</td>
                            </tr>
                            <tr>
                                <td><span style="display:inline-flex; align-items:center; gap:10px; font-weight:800; color:#0E7490; font-size:28px;"><i class="fa-solid fa-network-wired"></i> .net</span></td>
                                <td><strong>ผู้ให้บริการเครือข่าย เทคโนโลยี</strong> และเว็บทั่วไป (Network)</td>
                            </tr>
                            <tr>
                                <td><span style="display:inline-flex; align-items:center; gap:10px; font-weight:800; color:#047857; font-size:28px;"><i class="fa-solid fa-Graduation-cap"></i> .ac.th</span></td>
                                <td><strong>สถาบันการศึกษาในประเทศไทย</strong> ตามเกณฑ์ (Academic TH)</td>
                            </tr>
                            <tr>
                                <td><span style="display:inline-flex; align-items:center; gap:10px; font-weight:800; color:#B45309; font-size:28px;"><i class="fa-solid fa-building"></i> .co.th</span></td>
                                <td><strong>บริษัท/ธุรกิจที่จดทะเบียนในไทย</strong> ตามเกณฑ์ (Company TH)</td>
                            </tr>
                            <tr>
                                <td><span style="display:inline-flex; align-items:center; gap:10px; font-weight:800; color:#BE123C; font-size:28px;"><i class="fa-solid fa-landmark-dome"></i> .go.th</span></td>
                                <td><strong>หน่วยงานภาครัฐของประเทศไทย</strong> (Government TH)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card blue" style="background:linear-gradient(160deg, #0B1026 0%, #1E3A8A 100%); color:#FFFFFF; border-color:#38BDF8;">
                    <div class="card-icon-header">
                        <div class="icon-box cyan"><i class="fa-solid fa-id-card"></i></div>
                        <h3 class="card-title" style="color:#22D3EE;">หน้าที่ของ <span class="glossary-term" data-glossary="Domain">Domain</span></h3>
                    </div>
                    <p class="card-text" style="color:#F1F5F9;">
                        ช่วยให้ผู้ใช้งาน<strong>จดจำและเข้าถึงเว็บไซต์ได้ง่าย</strong> โดยไม่ต้องจำหมายเลข IP Address ของเซิร์ฟเวอร์
                    </p>
                    <div style="background:rgba(15,23,42,0.85); border:2px solid rgba(34,211,238,0.45); border-radius:16px; padding:18px; text-align:center;">
                        <div class="caption-text" style="color:#FDA4AF; font-weight:700;"><i class="fa-solid fa-xmark"></i> จำยาก (IP Address)</div>
                        <div style="font-family:'Inter',monospace; font-size:30px; font-weight:800; color:#F87171; margin:4px 0 10px 0;">142.250.199.14</div>
                        <div style="font-size:28px; color:#22D3EE;"><i class="fa-solid fa-arrow-down"></i> แปลงเป็นชื่อที่จำง่าย</div>
                        <div class="caption-text" style="color:#6EE7B7; font-weight:700; margin-top:6px;"><i class="fa-solid fa-check"></i> จำง่าย (Domain Name)</div>
                        <div style="font-family:'Inter',monospace; font-size:34px; font-weight:800; color:#34D399; margin-top:4px;">google.com</div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 12 (SLIDE B): 3.4 การเลือกชื่อโดเมนสำหรับธุรกิจ & กิจกรรม (2 นาที)
    // =========================================================================
    {
        id: 12,
        theme: "light",
        slideType: "Infographic",
        layout: "Infographic",
        section: "3.4 โดเมน (Domain Name)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 24.5–26.5)",
        kicker: "หัวข้อที่ 3.4 (ตอนที่ 2/2) • หลักการตั้งชื่อโดเมนและกิจกรรมฝึกคิดชื่อโดเมน",
        title: "การเลือกชื่อโดเมนสำหรับธุรกิจ & ตัวอย่างร้านขนมออนไลน์",
        badge: "Slide B • การเลือกโดเมนธุรกิจ",
        learningObjective: "ประยุกต์ใช้หลักการเลือกชื่อโดเมนสำหรับธุรกิจ และทดลองตั้งชื่อโดเมนให้กับธุรกิจของตนเองได้",
        content: "หลักการเลือกชื่อโดเมน 4 ข้อ (สั้นจำง่าย, สื่อถึงร้าน/สินค้า, ไม่ซ้ำคู่แข่ง, ตรวจสอบสถานะว่าง) พร้อม Infographic ตัวอย่างร้านขนมออนไลน์ baanhomdessert.com และกิจกรรมลองตั้งชื่อโดเมน",
        keyPoints: ["4 หลักการตั้งชื่อโดเมนธุรกิจ", "ตัวอย่าง Infographic: baanhomdessert.com", "กิจกรรมให้นักเรียนลองคิดชื่อโดเมนธุรกิจของตนเอง"],
        interactiveElement: "domain-activity-checker",
        speakerNotes: {
            whatToSay: "พอเรารู้จักนามสกุลโดเมนแล้ว เวลาเราจะตั้งชื่อโดเมนให้ร้านค้าของตัวเอง ต้องยึดหลัก 4 ข้อนี้ครับ 1) สั้น กระชับ จำง่าย 2) สื่อถึงชื่อร้านหรือสินค้า 3) ไม่คล้ายร้านอื่นจนลูกค้าจำสลับ และ 4) ต้องเช็กสถานะว่างก่อนจดทะเบียน ดูตัวอย่างร้านขายขนมโฮมเมด 'บ้านหอม' เขาตั้งว่า baanhomdessert.com เห็นปุ๊บรู้เลยว่าขายขนม! ตอนนี้ให้นักเรียนลองพิมพ์ชื่อโดเมนธุรกิจในฝันของตัวเองลงในกล่องกิจกรรมด้านขวาได้เลยครับ",
            realLifeExample: "ชื่อ baanhomdessert.com มาจากคำว่า baanhom (ชื่อร้านบ้านหอม) + dessert (ประเภทสินค้าขนมหวาน) + .com (ธุรกิจการค้า)",
            guidingQuestion: "ไหนใครลองตั้งชื่อโดเมนร้านของตัวเองเสร็จแล้วบ้าง ลองบอกชื่อโดเมนและเหตุผลที่เลือกชื่อนี้ให้เพื่อนฟังหน่อยครับ!",
            expectedAnswer: "นักเรียนยกตัวอย่างชื่อโดเมนที่สั้น จำง่าย และสื่อถึงประเภทธุรกิจของตนเอง เช่น smarthubpc.com หรือ lamooncafe.com",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-2">
                <!-- Left: 4 Principles + Large Domain Infographic -->
                <div class="card blue" style="justify-content:space-between;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box blue"><i class="fa-solid fa-check-double"></i></div>
                            <h3 class="card-title">4 หลักการเลือกชื่อโดเมนธุรกิจ</h3>
                        </div>
                        <div class="grid-2" style="gap:12px; margin-top:12px; flex:0 0 auto;">
                            <div style="background:#FFFFFF; border:1.5px solid #93C5FD; border-radius:12px; padding:12px 14px;">
                                <strong class="card-text" style="color:#1D4ED8;">1. สั้นและจดจำง่าย</strong>
                                <p class="caption-text">สะกดง่าย พิมพ์ไม่ผิดพลาด</p>
                            </div>
                            <div style="background:#FFFFFF; border:1.5px solid #93C5FD; border-radius:12px; padding:12px 14px;">
                                <strong class="card-text" style="color:#1D4ED8;">2. สื่อถึงร้าน/สินค้า</strong>
                                <p class="caption-text">รู้ทันทีว่าขายอะไรหรือแบรนด์ใด</p>
                            </div>
                            <div style="background:#FFFFFF; border:1.5px solid #93C5FD; border-radius:12px; padding:12px 14px;">
                                <strong class="card-text" style="color:#1D4ED8;">3. ไม่คล้ายธุรกิจอื่น</strong>
                                <p class="caption-text">ป้องกันลูกค้าสับสนกับร้านคู่แข่ง</p>
                            </div>
                            <div style="background:#FFFFFF; border:1.5px solid #93C5FD; border-radius:12px; padding:12px 14px;">
                                <strong class="card-text" style="color:#1D4ED8;">4. เช็กสถานะว่าง</strong>
                                <p class="caption-text">ตรวจสอบก่อนว่ายังไม่มีผู้จดซ้ำ</p>
                            </div>
                        </div>
                    </div>

                    <!-- Large Domain Infographic Breakdown: ร้านขายขนมออนไลน์ -->
                    <div style="background:#0B1026; border:2px solid #F59E0B; border-radius:16px; padding:16px 20px; color:#FFFFFF;">
                        <div class="caption-text" style="color:#FCD34D; font-weight:700; margin-bottom:6px;">
                            <i class="fa-solid fa-cookie-bite"></i> ตัวอย่าง Infographic: ร้านขายขนมโฮมเมดออนไลน์ “บ้านหอม”
                        </div>
                        <div style="display:flex; align-items:center; justify-content:center; gap:6px; background:#1E293B; padding:12px 16px; border-radius:12px; font-family:'Inter',monospace; font-size:34px; font-weight:800;">
                            <span style="color:#38BDF8;">baanhom</span>
                            <span style="color:#F472B6;">dessert</span>
                            <span style="color:#34D399;">.com</span>
                        </div>
                        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; text-align:center; margin-top:8px;">
                            <span class="caption-text" style="color:#7DD3FC;">ชื่อแบรนด์ (บ้านหอม)</span>
                            <span class="caption-text" style="color:#F9A8D4;">สินค้า (ขนมหวาน)</span>
                            <span class="caption-text" style="color:#6EE7B7;">นามสกุลธุรกิจการค้า</span>
                        </div>
                    </div>
                </div>

                <!-- Right: Interactive Student Domain Naming Activity -->
                <div class="card purple" style="justify-content:space-between; gap:10px; padding:18px 22px;">
                    <div>
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-lightbulb"></i></div>
                            <div>
                                <h3 class="card-title">กิจกรรม: ลองคิดชื่อโดเมนธุรกิจของคุณ!</h3>
                                <p class="caption-text" style="color:#6D28D9;">ฝึกตั้งชื่อโดเมนให้สั้น จำง่าย และสื่อถึงธุรกิจ</p>
                            </div>
                        </div>
                        <p class="card-text" style="margin-top:6px;">
                            ให้นักเรียนสมมติธุรกิจของตนเอง 1 ร้าน แล้วทดลองพิมพ์ชื่อโดเมนเพื่อตรวจสอบความเหมาะสม:
                        </p>
                    </div>

                    <div style="background:#FFFFFF; border:2px solid #C4B5FD; border-radius:16px; padding:14px 18px; display:flex; flex-direction:column; gap:10px;">
                        <div>
                            <label for="domainIdeaInput" class="caption-text" style="font-weight:700; color:#4C1D95; display:block; margin-bottom:4px;">พิมพ์ชื่อโดเมนสมมติของคุณ (ภาษาอังกฤษ):</label>
                            <div style="display:flex; gap:10px;">
                                <input type="text" id="domainIdeaInput" value="aromahomcafe" placeholder="เช่น aromahomcafe" style="flex:1; min-width:0; width:100%; padding:8px 14px; font-family:'Inter','Prompt',sans-serif; font-size:26px; font-weight:700; border:2px solid #8B5CF6; border-radius:12px; color:#0F172A;">
                                <select id="domainExtSelect" style="padding:8px 14px; font-family:'Inter',sans-serif; font-size:26px; font-weight:700; border:2px solid #8B5CF6; border-radius:12px; background:#F5F3FF; color:#5B21B6;">
                                    <option value=".com">.com</option>
                                    <option value=".co.th">.co.th</option>
                                    <option value=".net">.net</option>
                                    <option value=".org">.org</option>
                                </select>
                            </div>
                        </div>

                        <div id="domainPreviewResult" style="background:#ECFDF5; border:2px solid #10B981; border-radius:12px; padding:10px 14px;">
                            <div class="caption-text" style="color:#065F46; font-weight:700;"><i class="fa-solid fa-circle-check"></i> ตัวอย่าง URL ร้านของคุณ:</div>
                            <div id="domainLiveUrl" style="font-family:'Inter',monospace; font-size:28px; font-weight:800; color:#047857; word-break:break-all;">https://www.aromahomcafe.com</div>
                            <div id="domainFeedbackMsg" class="caption-text" style="color:#065F46; margin-top:2px;">✅ ความยาวเหมาะสม จดจำง่าย และพร้อมนำไปเช็กสถานะว่าง!</div>
                        </div>
                    </div>

                    <div class="easy-explain" style="padding:10px 16px;">
                        <span class="easy-explain-badge"><i class="fa-solid fa-comments"></i> ชวนคิด</span>
                        <span class="easy-explain-text">ชื่อโดเมนที่ดีช่วยให้ลูกค้าพิมพ์เข้าเว็บเราได้ทันทีโดยไม่ต้องค้นหาซ้ำ</span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 13: 3.5 โฮสติ้ง (Web Hosting) & เปรียบเทียบ Domain vs Hosting (2.5 นาที)
    // =========================================================================
    {
        id: 13,
        theme: "light",
        slideType: "Text + Image",
        layout: "Text + Image",
        section: "3.5 โฮสติ้ง (Web Hosting)",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 26.5–29)",
        kicker: "หัวข้อที่ 3.5 • พื้นที่จัดเก็บเว็บไซต์ออนไลน์",
        title: "โฮสติ้ง (Web Hosting) เปรียบเทียบชัด ๆ กับ โดเมน (Domain)",
        badge: "3.5 Web Hosting",
        learningObjective: "อธิบายความหมายของโฮสติ้งและเปรียบเทียบความแตกต่างระหว่างโดเมนกับโฮสติ้งได้",
        content: "โฮสติ้ง คือ บริการพื้นที่และทรัพยากรบนเซิร์ฟเวอร์สำหรับจัดเก็บไฟล์และข้อมูลที่ใช้ในการทำงานของเว็บไซต์ เช่น ไฟล์ HTML รูปภาพ วิดีโอ ฐานข้อมูล และไฟล์โปรแกรมต่าง ๆ",
        keyPoints: ["พื้นที่บนเซิร์ฟเวอร์เก็บไฟล์ HTML รูปภาพ วิดีโอ ฐานข้อมูล", "Domain = ชื่อและที่อยู่ร้าน", "Hosting = พื้นที่ตั้งร้านและเก็บของในร้าน"],
        image: "assets/images/domain-hosting-analogy.svg",
        speakerNotes: {
            whatToSay: "นักเรียนหลายคนมักถามครูว่า 'จดชื่อโดเมนเสร็จแล้ว เปิดเว็บได้เลยไหมครับ?' คำตอบคือ ยังไม่ได้ครับ! เพราะเรามีแค่ป้ายชื่อร้าน แต่ยังไม่มีที่ดินและตัวตึกสำหรับเก็บไฟล์เว็บไซต์เลย สิ่งที่ทำหน้าที่เป็นพื้นที่เก็บไฟล์ HTML รูปภาพ วิดีโอ และฐานข้อมูล เพื่อให้คนทั่วโลกเปิดดูได้ตลอดเวลา เรียกว่า 'โฮสติ้ง (Web Hosting)' ครับ",
            realLifeExample: "ดูภาพประกอบฝั่งขวามือครับ: Domain เปรียบเหมือนป้ายชื่อร้านและบ้านเลขที่ ส่วน Hosting เปรียบเหมือนที่ดินและอาคารร้านค้าที่ใช้เก็บสต็อกสินค้าจริง",
            guidingQuestion: "ถ้าเรามีแต่ชื่อโดเมน แต่ไม่มีบริการโฮสติ้งสำหรับเก็บไฟล์ จะเกิดอะไรขึ้นเมื่อลูกค้าพิมพ์ชื่อเว็บเราครับ?",
            expectedAnswer: "ผู้ใช้งานจะไม่สามารถเปิดดูเนื้อหาเว็บไซต์ได้ เพราะไม่มีพื้นที่เซิร์ฟเวอร์คอยเก็บและส่งไฟล์หน้าเว็บมาให้",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="grid-2">
                <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between; height:100%;">
                    <div class="card purple auto-h">
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-hard-drive"></i></div>
                            <h3 class="card-title">โฮสติ้ง (<span class="glossary-term" data-glossary="Hosting">Hosting</span>) คืออะไร?</h3>
                        </div>
                        <p class="card-text">
                            คือ <strong>บริการพื้นที่และทรัพยากรบนเซิร์ฟเวอร์</strong> สำหรับจัดเก็บไฟล์และข้อมูลทั้งหมดของเว็บไซต์ เพื่อให้เปิดเข้าชมผ่านอินเทอร์เน็ตได้ตลอด 24 ชม.
                        </p>
                    </div>

                    <div class="card blue" style="flex:1;">
                        <h3 class="card-title"><i class="fa-solid fa-folder-open" style="color:#2563EB;"></i> ไฟล์ที่จัดเก็บไว้บนโฮสติ้ง</h3>
                        <div class="grid-2" style="gap:12px;">
                            <div style="background:#EFF6FF; padding:12px 14px; border-radius:10px;" class="card-text"><strong>1. ไฟล์หน้าเว็บ:</strong> HTML, CSS, JS</div>
                            <div style="background:#EFF6FF; padding:12px 14px; border-radius:10px;" class="card-text"><strong>2. รูปภาพ & สื่อ:</strong> ภาพสินค้า, วิดีโอ</div>
                            <div style="background:#EFF6FF; padding:12px 14px; border-radius:10px;" class="card-text"><strong>3. ฐานข้อมูล:</strong> สต็อก & สมาชิก</div>
                            <div style="background:#EFF6FF; padding:12px 14px; border-radius:10px;" class="card-text"><strong>4. โปรแกรมระบบ:</strong> ตะกร้าสั่งซื้อ</div>
                        </div>
                    </div>

                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-triangle-exclamation"></i> ข้อควรจำ</span>
                        <span class="easy-explain-text">หากมีเฉพาะ <strong>Domain</strong> แต่ไม่มี <strong>Hosting</strong> ผู้ใช้จะไม่สามารถเปิดดูเนื้อหาเว็บไซต์ได้เลย!</span>
                    </div>
                </div>

                <div class="img-frame" style="background:#F8FAFC; border-color:#93C5FD; padding:10px;">
                    <img src="assets/images/domain-hosting-analogy.svg" alt="แผนภาพเปรียบเทียบ Domain Name กับ Web Hosting">
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 14: ประเภทของโฮสติ้งเบื้องต้น (2 นาที)
    // =========================================================================
    {
        id: 14,
        theme: "light",
        slideType: "Infographic",
        layout: "Infographic",
        section: "3.5 โฮสติ้ง (Web Hosting)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 29–31)",
        kicker: "หัวข้อที่ 3.5 • ประเภทของโฮสติ้งและการเลือกใช้งาน",
        title: "ประเภทของโฮสติ้งเบื้องต้น (Shared, VPS, Cloud Hosting)",
        badge: "3 ประเภทหลัก",
        learningObjective: "จำแนกความแตกต่างของ Shared Hosting, VPS Hosting และ Cloud Hosting ได้",
        content: "โฮสติ้งแบ่งออกเป็น Shared Hosting (แชร์ทรัพยากร เหมาะกับเว็บเล็ก-กลาง), VPS Hosting (เซิร์ฟเวอร์เสมือน แบ่งทรัพยากรชัดเจน) และ Cloud Hosting (ปรับขนาดตามการใช้งานได้)",
        keyPoints: ["Shared Hosting: ประหยัด เหมาะกับเว็บขนาดเล็ก-กลาง", "VPS Hosting: แบ่งทรัพยากรชัดเจน ควบคุมระบบได้มากขึ้น", "Cloud Hosting: ยืดหยุ่น ปรับขนาดตามปริมาณผู้เข้าชมได้", "แพลตฟอร์มฟรีสำหรับนักเรียน"],
        speakerNotes: {
            whatToSay: "เวลาธุรกิจจะเช่าโฮสติ้ง เขามีให้เลือกหลายขนาดตามขนาดร้านครับ เริ่มจาก 1) Shared Hosting เปรียบเหมือนเช่าแผงในตลาดนัดรวมกับคนอื่น ราคาประหยัด เหมาะกับเว็บเริ่มต้น 2) VPS Hosting เปรียบเหมือนทาวน์โฮมที่กั้นห้องแบ่งน้ำไฟชัดเจน และ 3) Cloud Hosting เปรียบเหมือนอาคารอัจฉริยะที่ขยายพื้นที่ได้ทันทีเมื่อมีลูกค้าแห่เข้ามาพร้อมกันเยอะ ๆ ส่วนพวกเราที่เป็นนักเรียนเริ่มต้น สามารถใช้บริการแพลตฟอร์มเผยแพร่เว็บฟรีเพื่อฝึกนำเว็บขึ้นใช้งานจริงก่อนได้ครับ",
            realLifeExample: "ช่วงโปรโมชัน 11.11 ที่คนเข้าเว็บซื้อของพร้อมกันนับแสนคน ธุรกิจมักใช้ Cloud Hosting เพื่อให้เว็บไม่ล่ม",
            guidingQuestion: "ถ้านักเรียนเพิ่งเริ่มเปิดร้านขายเสื้อผ้าเล็ก ๆ มีงบประมาณจำกัด ควรเริ่มต้นด้วยโฮสติ้งประเภทใดครับ?",
            expectedAnswer: "Shared Hosting หรือแพลตฟอร์มเผยแพร่เว็บไซต์ที่มีแผนใช้งานฟรี",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-3">
                <div class="card blue">
                    <div class="card-icon-header">
                        <div class="icon-box blue"><i class="fa-solid fa-people-roof"></i></div>
                        <div>
                            <h3 class="card-title">1. Shared Hosting</h3>
                            <span class="caption-text" style="color:#1D4ED8; font-weight:700;">แชร์ทรัพยากรร่วมกัน</span>
                        </div>
                    </div>
                    <p class="card-text">ใช้ทรัพยากรของเซิร์ฟเวอร์เครื่องเดียวกันร่วมกับเว็บไซต์อื่น ๆ หลายเว็บไซต์</p>
                    <div style="background:#EFF6FF; border:1.5px solid #93C5FD; padding:14px 16px; border-radius:12px;" class="card-text">
                        <div><strong><i class="fa-solid fa-building"></i> เปรียบเหมือน:</strong> เช่าแผงในตลาดนัด</div>
                        <div style="margin-top:6px; color:#1E40AF;"><strong><i class="fa-solid fa-thumbs-up"></i> เหมาะกับ:</strong> เว็บไซต์ขนาดเล็ก–กลาง ประหยัดงบ</div>
                    </div>
                </div>

                <div class="card purple">
                    <div class="card-icon-header">
                        <div class="icon-box purple"><i class="fa-solid fa-server"></i></div>
                        <div>
                            <h3 class="card-title">2. VPS Hosting</h3>
                            <span class="caption-text" style="color:#6D28D9; font-weight:700;">เซิร์ฟเวอร์เสมือนส่วนตัว</span>
                        </div>
                    </div>
                    <p class="card-text">แบ่งพื้นที่และทรัพยากรของแต่ละเว็บไซต์ออกจากกันอย่างชัดเจน มีอิสระสูงขึ้น</p>
                    <div style="background:#F5F3FF; border:1.5px solid #C4B5FD; padding:14px 16px; border-radius:12px;" class="card-text">
                        <div><strong><i class="fa-solid fa-house-lock"></i> เปรียบเหมือน:</strong> ทาวน์โฮมกั้นห้องชัดเจน</div>
                        <div style="margin-top:6px; color:#5B21B6;"><strong><i class="fa-solid fa-thumbs-up"></i> เหมาะกับ:</strong> เว็บธุรกิจที่เติบโตและต้องการความเสถียร</div>
                    </div>
                </div>

                <div class="card cyan">
                    <div class="card-icon-header">
                        <div class="icon-box cyan"><i class="fa-solid fa-cloud-arrow-up"></i></div>
                        <div>
                            <h3 class="card-title">3. Cloud Hosting</h3>
                            <span class="caption-text" style="color:#0E7490; font-weight:700;">ยืดหยุ่นสูงบนระบบคลาวด์</span>
                        </div>
                    </div>
                    <p class="card-text">ใช้ทรัพยากรจากเซิร์ฟเวอร์หลายเครื่องบนคลาวด์ทำงานร่วมกัน ปรับขยายขนาดได้ทันที</p>
                    <div style="background:#ECFEFF; border:1.5px solid #67E8F9; padding:14px 16px; border-radius:12px;" class="card-text">
                        <div><strong><i class="fa-solid fa-maximize"></i> เปรียบเหมือน:</strong> อาคารอัจฉริยะขยายพื้นที่ได้</div>
                        <div style="margin-top:6px; color:#155E75;"><strong><i class="fa-solid fa-thumbs-up"></i> เหมาะกับ:</strong> เว็บที่มีผู้เข้าชมจำนวนมากหรือจัดแคมเปญใหญ่</div>
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-graduation-cap"></i> สำหรับนักเรียน ปวช.</span>
                <span class="easy-explain-text">ผู้เริ่มต้นสามารถใช้ <strong>แพลตฟอร์มเผยแพร่เว็บที่มีแผนใช้งานฟรี</strong> (เช่น GitHub Pages, Netlify) เพื่อฝึกนำเว็บขึ้นออนไลน์จริงได้!</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 15: 3.6 เว็บเบราว์เซอร์ (Web Browser) (2 นาที)
    // =========================================================================
    {
        id: 15,
        theme: "light",
        slideType: "Infographic",
        layout: "Infographic",
        section: "3.6 เว็บเบราว์เซอร์ (Web Browser)",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 31–33)",
        kicker: "หัวข้อที่ 3.6 • โปรแกรมสำหรับเปิดและแสดงผลเว็บไซต์",
        title: "เว็บเบราว์เซอร์ (Web Browser) และหน้าที่สำคัญ",
        badge: "3.6 Web Browser",
        learningObjective: "อธิบายหน้าที่ของเว็บเบราว์เซอร์ ยกตัวอย่างเบราว์เซอร์ยอดนิยม และแยกความแตกต่างระหว่าง Browser กับ Search Engine ได้",
        content: "เว็บเบราว์เซอร์ คือ โปรแกรมหรือแอปพลิเคชันที่ใช้เปิดและแสดงผลเว็บไซต์บนคอมพิวเตอร์ มือถือ และแท็บเล็ต เช่น Chrome, Edge, Firefox, Safari",
        keyPoints: ["โปรแกรมเปิดแสดงผลเว็บไซต์", "Chrome, Edge, Firefox, Safari", "แสดงสื่อ คลิกโต้ตอบ บันทึกบุ๊กมาร์ก มีเครื่องมือพัฒนาเว็บ", "Browser ไม่ใช่ Website!"],
        speakerNotes: {
            whatToSay: "หัวข้อที่ 3.6 เว็บเบราว์เซอร์ (Web Browser) คือแอปหรือโปรแกรมในเครื่องคอมและมือถือของเราที่ใช้เปิดดูเว็บไซต์ครับ เช่น Google Chrome, Microsoft Edge, Mozilla Firefox และ Safari หน้าที่ของมันคือติดต่อขอข้อมูลจากเซิร์ฟเวอร์แล้วแปลงโค้ดให้กลายเป็นหน้าเว็บสวย ๆ ที่สำคัญคือ นักเรียนต้องไม่สับสนนะ! 'Google Chrome' คือโปรแกรมเบราว์เซอร์ ส่วน 'Google Search (www.google.com)' คือเว็บไซต์สำหรับค้นหาข้อมูลครับ",
            realLifeExample: "ถ้ากดปุ่ม F12 บนเบราว์เซอร์ Chrome หรือ Edge เราจะเห็นเครื่องมือ Developer Tools ที่นักพัฒนาเว็บใช้ตรวจสอบโค้ดหน้าเว็บด้วย",
            guidingQuestion: "ในโทรศัพท์มือถือของนักเรียนตอนนี้ ใช้โปรแกรม Web Browser ตัวไหนเปิดเว็บไซต์เป็นประจำครับ?",
            expectedAnswer: "Google Chrome (บน Android) หรือ Safari (บน iPhone/iPad)",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="grid-4" style="flex:0 0 auto;">
                <div class="card blue" style="align-items:center; text-align:center; padding:14px 16px;">
                    <div class="icon-box blue"><i class="fa-brands fa-chrome"></i></div>
                    <h3 class="card-title">Google Chrome</h3>
                    <p class="caption-text">นิยมสูงสุดทั้งคอมและมือถือ</p>
                </div>
                <div class="card cyan" style="align-items:center; text-align:center; padding:14px 16px;">
                    <div class="icon-box cyan"><i class="fa-brands fa-edge"></i></div>
                    <h3 class="card-title">Microsoft Edge</h3>
                    <p class="caption-text">เบราว์เซอร์มาตรฐานบน Windows</p>
                </div>
                <div class="card amber" style="align-items:center; text-align:center; padding:14px 16px;">
                    <div class="icon-box amber"><i class="fa-brands fa-firefox-browser"></i></div>
                    <h3 class="card-title">Mozilla Firefox</h3>
                    <p class="caption-text">โดดเด่นด้านความเป็นส่วนตัว</p>
                </div>
                <div class="card purple" style="align-items:center; text-align:center; padding:14px 16px;">
                    <div class="icon-box purple"><i class="fa-brands fa-safari"></i></div>
                    <h3 class="card-title">Apple Safari</h3>
                    <p class="caption-text">เบราว์เซอร์หลักบน iPhone & Mac</p>
                </div>
            </div>

            <div class="grid-2">
                <div class="card emerald">
                    <h3 class="card-title"><i class="fa-solid fa-list-check" style="color:#059669;"></i> หน้าที่สำคัญของ <span class="glossary-term" data-glossary="Browser">Browser</span></h3>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#059669;"><div class="step-num" style="background:#059669;">1</div><div class="step-content"><h4>แสดงผลหน้าเว็บ & สื่อมัลติมีเดีย</h4><p>ประมวลผลข้อความ รูปภาพ และวิดีโอออกสู่หน้าจอ</p></div></div>
                        <div class="step-item" style="border-left-color:#059669;"><div class="step-num" style="background:#059669;">2</div><div class="step-content"><h4>รองรับการโต้ตอบ & เครื่องมือนักพัฒนา</h4><p>คลิกลิงก์ กรอกฟอร์ม บันทึก Bookmark และตรวจโค้ดเว็บ</p></div></div>
                    </div>
                </div>

                <div class="card rose">
                    <div class="card-icon-header">
                        <div class="icon-box rose"><i class="fa-solid fa-circle-exclamation"></i></div>
                        <h3 class="card-title">ระวังสับสน! Browser ≠ Website</h3>
                    </div>
                    <p class="card-text"><strong>เว็บเบราว์เซอร์ไม่ใช่เว็บไซต์</strong> แต่เป็นโปรแกรมสำหรับใช้เปิดดูเว็บไซต์:</p>
                    <div style="background:#FFFFFF; border:2px solid #FDA4AF; border-radius:14px; padding:14px 18px;" class="card-text">
                        <div style="margin-bottom:8px;"><strong style="color:#1D4ED8;"><i class="fa-brands fa-chrome"></i> Google Chrome</strong> = โปรแกรม <strong>Web Browser</strong> ในเครื่อง</div>
                        <div><strong style="color:#047857;"><i class="fa-solid fa-magnifying-glass"></i> Google Search</strong> = บริการค้นหาข้อมูลบน <strong>Website</strong></div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 16: 3.7 เว็บเซิร์ฟเวอร์ & กระบวนการ Request-Response (Interactive) (2.5 นาที)
    // =========================================================================
    {
        id: 16,
        theme: "dark",
        slideType: "Process Diagram",
        layout: "Process Diagram",
        section: "3.7 เว็บเซิร์ฟเวอร์ (Web Server)",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 33–35.5)",
        kicker: "หัวข้อที่ 3.7 • กระบวนการทำงานของเว็บไซต์ (Interactive Flow Simulator)",
        title: "เว็บเซิร์ฟเวอร์ (Web Server) และวงจร Request ↔ Response",
        badge: "คลิกจำลองการรับ-ส่งข้อมูล",
        learningObjective: "อธิบายหน้าที่ของเว็บเซิร์ฟเวอร์และลำดับการทำงานระหว่าง Browser กับ Web Server ได้",
        content: "เว็บเซิร์ฟเวอร์ คือ ระบบที่ทำหน้าที่รับคำขอ (Request) จากเว็บเบราว์เซอร์ ประมวลผล และส่งข้อมูลเว็บไซต์ (Response) กลับไปยังผู้ใช้งาน",
        keyPoints: ["ผู้ใช้งานเลือกดูสินค้าบน Browser", "Browser ส่ง Request ไปยัง Web Server", "Web Server ประมวลผลและส่ง Response กลับมาแสดงผล"],
        image: "assets/images/web-architecture.svg",
        interactiveElement: "request-response-sim",
        speakerNotes: {
            whatToSay: "มาดูหัวใจของการทำงานบนเว็บในหัวข้อ 3.7 ครับ 'เว็บเซิร์ฟเวอร์ (Web Server)' คือระบบคอมพิวเตอร์หรือซอฟต์แวร์ฝั่งผู้ให้บริการที่คอยเปิดรอรับคำขอจากลูกค้าตลอด 24 ชั่วโมง เมื่อเราเปิดเบราว์เซอร์แล้วคลิกเลือกดูสินค้าหมวด 'กระเป๋า' จะเกิดวงจร 4 ขั้นตอนที่เรียกว่า Request และ Response เดี๋ยวครูคลิกปุ่มจำลองการทำงานทีละขั้นให้ดูครับ!",
            realLifeExample: "เหมือนเราไปนั่งร้านอาหาร: เรา (ผู้ใช้) บอกพนักงานเสิร์ฟ (Browser) ว่าขอเมนูกระเป๋า พนักงานเดินไปส่งใบสั่งอาหาร (Request) ให้พ่อครัวในครัว (Web Server) พ่อครัวจัดจานเสร็จแล้วส่งอาหารกลับมา (Response) ให้พนักงานวางเสิร์ฟบนโต๊ะเรา",
            guidingQuestion: "ถ้าเครื่อง Web Server ของร้านค้าออนไลน์ดับหรืออินเทอร์เน็ตฝั่งเซิร์ฟเวอร์หลุด ลูกค้าที่เปิด Browser จะเจออะไรครับ?",
            expectedAnswer: "หน้าเว็บจะไม่สามารถโหลดข้อมูลมาแสดงผลได้ (ขึ้นข้อความว่าไม่สามารถเข้าถึงเว็บไซต์นี้ได้)",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="grid-2-asym">
                <div class="interactive-diagram-box" id="reqResSimulator">
                    <h3 class="card-title" style="color:#22D3EE;"><i class="fa-solid fa-arrows-left-right"></i> คลิกจำลองเมื่อลูกค้าเลือกดู “สินค้ากระเป๋า”</h3>

                    <div class="hotspot-tabs">
                        <button type="button" class="hotspot-btn active sim-step-btn" data-step="1">ขั้นที่ 1: ผู้ใช้คลิกเลือกสินค้า</button>
                        <button type="button" class="hotspot-btn sim-step-btn" data-step="2">ขั้นที่ 2: ส่งคำขอ (Request)</button>
                        <button type="button" class="hotspot-btn sim-step-btn" data-step="3">ขั้นที่ 3: Server ประมวลผล</button>
                        <button type="button" class="hotspot-btn sim-step-btn" data-step="4">ขั้นที่ 4: ส่งกลับ (Response)</button>
                    </div>

                    <div class="diagram-detail-panel" id="simDetailPanel">
                        <div class="icon-box cyan" style="width:64px; height:64px; font-size:30px;">1</div>
                        <div>
                            <h3 class="section-heading" style="color:#22D3EE;">ขั้นตอนที่ 1: ผู้ใช้งานเลือกดูสินค้าบน Browser</h3>
                            <p class="body-text" style="color:#F8FAFC;">นักเรียนเปิดเว็บไซต์ร้านค้าบนเว็บเบราว์เซอร์ แล้วคลิกเลือกดูหมวดหมู่สินค้าประเภท <strong>“กระเป๋า”</strong></p>
                        </div>
                    </div>

                    <div class="card auto-h" style="padding:14px 20px; background:rgba(15,23,42,0.92); border-color:#8B5CF6;">
                        <p class="card-text" style="color:#E2E8F0;">
                            <strong><span class="glossary-term" data-glossary="Server">Server</span> (เว็บเซิร์ฟเวอร์):</strong> ระบบคอมพิวเตอร์หรือซอฟต์แวร์ที่ทำหน้าที่รับคำขอ (Request) จากเบราว์เซอร์และส่งข้อมูลเว็บไซต์ (Response) กลับไปยังผู้ใช้
                        </p>
                    </div>
                </div>

                <div class="img-frame" style="border-color:#8B5CF6; background:#0F172A; padding:8px;">
                    <img src="assets/images/web-architecture.svg" alt="แผนภาพการรับส่งข้อมูล Request และ Response ระหว่าง Browser กับ Web Server">
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 17: 3.8 HTTPS (Hypertext Transfer Protocol Secure) (2.5 นาที)
    // =========================================================================
    {
        id: 17,
        theme: "light",
        slideType: "Comparison",
        layout: "Comparison",
        section: "3.8 HTTPS (ความปลอดภัยบนเว็บ)",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 35.5–38)",
        kicker: "หัวข้อที่ 3.8 • ความปลอดภัยในการรับส่งข้อมูลเว็บไซต์ธุรกิจ",
        title: "HTTPS (Hypertext Transfer Protocol Secure) คืออะไร?",
        badge: "3.8 HTTPS & TLS",
        learningObjective: "เปรียบเทียบความแตกต่างระหว่าง HTTP กับ HTTPS และอธิบายความสำคัญต่อเว็บไซต์ธุรกิจพร้อมข้อควรระวังได้",
        content: "HTTPS คือ รูปแบบการสื่อสารระหว่างเว็บเบราว์เซอร์กับเว็บเซิร์ฟเวอร์ที่มีการเข้ารหัสข้อมูลด้วย TLS เพื่อป้องกันบุคคลอื่นดักอ่านหรือแก้ไขข้อมูลระหว่างการรับส่ง",
        keyPoints: ["HTTP ไม่มีการเข้ารหัส TLS เสี่ยงถูกดักอ่าน", "HTTPS เข้ารหัสด้วย TLS ปกป้องข้อมูลลูกค้า", "มี HTTPS ไม่ได้แปลว่าร้านค้าจะไม่โกง ต้องเช็กความน่าเชื่อถือผู้ขายร่วมด้วย"],
        speakerNotes: {
            whatToSay: "เวลาทำเว็บไซต์ธุรกิจ ลูกค้าต้องกรอกทั้งชื่อ ที่อยู่ เบอร์โทร และข้อมูลการโอนเงินใช่ไหมครับ ถ้าเราใช้ HTTP แบบเก่า ข้อมูลจะวิ่งไปแบบเปลือย ๆ เสี่ยงถูกแฮกเกอร์ดักอ่านกลางทางได้ จึงต้องใช้ 'HTTPS' ซึ่งมีตัว S (Secure) เพิ่มเข้ามา โดยเข้ารหัสข้อมูลด้วยเทคโนโลยี TLS ทำให้คนกลางอ่านข้อมูลไม่ออก แต่ข้อควรระวังที่ครูอยากย้ำมาก ๆ คือ การที่เว็บมี HTTPS แปลว่า 'สายส่งข้อมูลมีการเข้ารหัส' เท่านั้น ไม่ได้การันตีว่าเจ้าของร้านจะไม่โกง! ก่อนโอนเงินต้องเช็กชื่อโดเมนและประวัติผู้ขายเสมอครับ",
            realLifeExample: "มิจฉาชีพยุคนี้ก็สามารถทำเว็บปลอมที่มี https:// ได้ ดังนั้นนอกจากดู https:// แล้ว ต้องดูว่าชื่อโดเมนสะกดถูกไหม เช่น ต้องไม่ใช่ sh0pee-free.com",
            guidingQuestion: "ถ้าเราเข้าเว็บไซต์ร้านค้าแห่งหนึ่งแล้วเบราว์เซอร์แจ้งเตือนว่า 'ไม่ปลอดภัย (Not Secure - HTTP)' เราควรกรอกรหัสผ่านหรือข้อมูลบัตรเครดิตลงไปไหมครับ เพราะอะไร?",
            expectedAnswer: "ไม่ควรกรอกเด็ดขาด เพราะข้อมูลไม่ได้เข้ารหัสด้วย TLS อาจถูกดักอ่านระหว่างส่งข้อมูลผ่านเครือข่ายได้",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card rose">
                    <div class="card-icon-header">
                        <div class="icon-box rose"><i class="fa-solid fa-lock-open"></i></div>
                        <div>
                            <h3 class="card-title"><span class="glossary-term" data-glossary="HTTP">HTTP</span> (ไม่เข้ารหัส)</h3>
                            <span class="caption-text" style="color:#BE123C; font-weight:700;">http://example.com — มีความเสี่ยงสูง</span>
                        </div>
                    </div>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#E11D48;"><div class="step-num" style="background:#E11D48;"><i class="fa-solid fa-xmark"></i></div><div class="step-content"><h4>ไม่มีการเข้ารหัสแบบ TLS</h4><p>ข้อมูลวิ่งผ่านเครือข่ายในรูปแบบข้อความปกติที่อ่านได้ทันที</p></div></div>
                        <div class="step-item" style="border-left-color:#E11D48;"><div class="step-num" style="background:#E11D48;"><i class="fa-solid fa-user-secret"></i></div><div class="step-content"><h4>เสี่ยงถูกดักอ่านหรือแก้ไขข้อมูล</h4><p>รหัสผ่าน เบอร์โทร หรือข้อมูลชำระเงินอาจรั่วไหลระหว่างทาง</p></div></div>
                    </div>
                </div>

                <div class="card emerald">
                    <div class="card-icon-header">
                        <div class="icon-box emerald"><i class="fa-solid fa-shield-halved"></i></div>
                        <div>
                            <h3 class="card-title"><span class="glossary-term" data-glossary="HTTPS">HTTPS</span> (เข้ารหัสปลอดภัย)</h3>
                            <span class="caption-text" style="color:#047857; font-weight:700;">https://example.com — มาตรฐานเว็บธุรกิจ</span>
                        </div>
                    </div>
                    <div class="step-list">
                        <div class="step-item" style="border-left-color:#059669;"><div class="step-num" style="background:#059669;"><i class="fa-solid fa-check"></i></div><div class="step-content"><h4>เข้ารหัสการรับส่งข้อมูลด้วย TLS</h4><p>แปลงข้อมูลเป็นรหัสลับระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์</p></div></div>
                        <div class="step-item" style="border-left-color:#059669;"><div class="step-num" style="background:#059669;"><i class="fa-solid fa-user-shield"></i></div><div class="step-content"><h4>ปกป้องข้อมูลลูกค้า & สร้างความมั่นใจ</h4><p>ป้องกันบุคคลอื่นดักอ่านข้อมูลสั่งซื้อและข้อมูลส่วนบุคคล</p></div></div>
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-triangle-exclamation"></i> ข้อควรระวังสำคัญ</span>
                <span class="easy-explain-text">การมี <strong>HTTPS</strong> ยืนยันว่าสายส่งข้อมูลเข้ารหัส แต่<strong>ไม่ได้แปลว่าร้านค้าจะไม่โกงเสมอไป</strong> ต้องตรวจสอบชื่อโดเมนและความน่าเชื่อถือผู้ขายร่วมด้วย!</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 18: 3.9 ประเภทของเว็บไซต์ธุรกิจ (ตอนที่ 1: ประเภทที่ 1–3) (2.5 นาที)
    // =========================================================================
    {
        id: 18,
        theme: "light",
        slideType: "Infographic",
        layout: "Infographic",
        section: "3.9 ประเภทของเว็บไซต์ธุรกิจ",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 38–40.5)",
        kicker: "หัวข้อที่ 3.9 • ประเภทของเว็บไซต์ธุรกิจตามวัตถุประสงค์ (ตอนที่ 1/2)",
        title: "ประเภทของเว็บไซต์ธุรกิจ (1–3): องค์กร, ค้าปลีก และบริการจองคิว",
        badge: "ประเภทที่ 1–3",
        learningObjective: "จำแนกความแตกต่างและวัตถุประสงค์ของ Corporate Website, E-Commerce Website และ Service/Booking Website ได้",
        content: "เว็บไซต์ธุรกิจแบ่งตามวัตถุประสงค์ได้แก่ 1. เว็บไซต์องค์กร (Corporate), 2. เว็บไซต์พาณิชย์อิเล็กทรอนิกส์ (E-Commerce), 3. เว็บไซต์บริการและจองคิว (Service and Booking)",
        keyPoints: ["1. เว็บไซต์องค์กร (Corporate Website)", "2. เว็บไซต์พาณิชย์อิเล็กทรอนิกส์ (E-Commerce Website)", "3. เว็บไซต์บริการและจองคิว (Service & Booking Website)"],
        speakerNotes: {
            whatToSay: "เวลาเจ้าของกิจการมาจ้างเราทำเว็บ เราต้องถามเขาก่อนว่า 'อยากทำเว็บไปเพื่อเป้าหมายอะไร?' เพราะเว็บไซต์ธุรกิจมีถึง 6 ประเภทหลัก มาดู 3 ประเภทแรกกันครับ 1) Corporate Website เน้นสร้างความน่าเชื่อถือและแนะนำบริษัท 2) E-Commerce Website เน้นขายของ มีตะกร้าสินค้าและจ่ายเงินออนไลน์ และ 3) Service & Booking Website เน้นให้ลูกค้าเช็กตารางว่างและจองคิวล่วงหน้า เช่น โรงแรม คลินิก หรือร้านตัดผม",
            realLifeExample: "โรงงานผลิตชิ้นส่วนรถยนต์ต้องการให้คู่ค้าเชื่อถือ จะทำ Corporate Website ส่วนร้านขายเสื้อผ้าแฟชั่นที่อยากให้ลูกค้ากดซื้อทันที จะทำ E-Commerce Website",
            guidingQuestion: "ถ้าพี่สาวของนักเรียนเปิดร้านทำเล็บและเสริมสวย อยากให้ลูกค้าเลือกช่างและเลือกเวลาทำเล็บล่วงหน้าผ่านเว็บ ควรทำเว็บไซต์ประเภทใดครับ?",
            expectedAnswer: "ประเภทที่ 3 เว็บไซต์บริการและจองคิว (Service and Booking Website)",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="grid-3">
                <div class="card blue">
                    <div class="card-icon-header">
                        <div class="icon-box blue"><i class="fa-solid fa-building"></i></div>
                        <div>
                            <h3 class="card-title">1. เว็บไซต์องค์กร</h3>
                            <span class="caption-text" style="color:#1D4ED8; font-weight:700;">Corporate Website</span>
                        </div>
                    </div>
                    <p class="card-text">ใช้แนะนำบริษัท ประวัติองค์กร วิสัยทัศน์ สินค้า บริการ และข้อมูลติดต่อ เพื่อ<strong>สร้างภาพลักษณ์และความน่าเชื่อถือ</strong></p>
                    <div style="background:#EFF6FF; border:1.5px solid #93C5FD; padding:14px 16px; border-radius:12px;" class="card-text">
                        <strong><i class="fa-solid fa-industry" style="color:#2563EB;"></i> ตัวอย่าง:</strong> เว็บไซต์บริษัท, ธนาคาร, โรงงานอุตสาหกรรม
                    </div>
                </div>

                <div class="card emerald">
                    <div class="card-icon-header">
                        <div class="icon-box emerald"><i class="fa-solid fa-cart-shopping"></i></div>
                        <div>
                            <h3 class="card-title">2. พาณิชย์อิเล็กทรอนิกส์</h3>
                            <span class="caption-text" style="color:#047857; font-weight:700;"><span class="glossary-term" data-glossary="E-Commerce">E-Commerce</span> Website</span>
                        </div>
                    </div>
                    <p class="card-text">มุ่งเน้น<strong>การซื้อขายสินค้าออนไลน์ครบวงจร</strong> มีระบบแค็ตตาล็อก ตะกร้าสินค้า การสั่งซื้อ และชำระเงิน</p>
                    <div style="background:#ECFDF5; border:1.5px solid #6EE7B7; padding:14px 16px; border-radius:12px;" class="card-text">
                        <strong><i class="fa-solid fa-bag-shopping" style="color:#059669;"></i> ตัวอย่าง:</strong> เว็บขายเสื้อผ้าออนไลน์, ร้านอุปกรณ์ไอที
                    </div>
                </div>

                <div class="card purple">
                    <div class="card-icon-header">
                        <div class="icon-box purple"><i class="fa-solid fa-calendar-check"></i></div>
                        <div>
                            <h3 class="card-title">3. บริการและจองคิว</h3>
                            <span class="caption-text" style="color:#6D28D9; font-weight:700;">Service & Booking</span>
                        </div>
                    </div>
                    <p class="card-text">ช่วยให้ลูกค้า<strong>เลือกบริการ ตรวจสอบวัน-เวลาว่าง และจองคิวรับบริการล่วงหน้า</strong>ได้อย่างสะดวก</p>
                    <div style="background:#F5F3FF; border:1.5px solid #C4B5FD; padding:14px 16px; border-radius:12px;" class="card-text">
                        <strong><i class="fa-solid fa-hotel" style="color:#7C3AED;"></i> ตัวอย่าง:</strong> เว็บจองโรงแรม, ร้านเสริมสวย, คลินิก
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-bullseye"></i> เทคนิคจำง่าย</span>
                <span class="easy-explain-text"><strong>Corporate</strong> = เน้นภาพลักษณ์บริษัท • <strong>E-Commerce</strong> = เน้นตะกร้าสั่งซื้อ • <strong>Booking</strong> = เน้นจองวันและเวลา</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 19: 3.9 ประเภทของเว็บไซต์ธุรกิจ (ตอนที่ 2: ประเภทที่ 4–6) (2.5 นาที)
    // =========================================================================
    {
        id: 19,
        theme: "light",
        slideType: "Infographic",
        layout: "Infographic",
        section: "3.9 ประเภทของเว็บไซต์ธุรกิจ",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 40.5–43)",
        kicker: "หัวข้อที่ 3.9 • ประเภทของเว็บไซต์ธุรกิจตามวัตถุประสงค์ (ตอนที่ 2/2)",
        title: "ประเภทของเว็บไซต์ธุรกิจ (4–6): บทความ, แสดงผลงาน และหน้าโปรโมชัน",
        badge: "ครบ 6 ประเภทเว็บธุรกิจ",
        learningObjective: "จำแนกความแตกต่างของ Content/Blog Website, Portfolio Website, Landing Page และการผสมผสานหลายประเภทในเว็บเดียวได้",
        content: "4. เว็บไซต์เนื้อหาและบทความ (Content/Blog), 5. เว็บไซต์แสดงผลงาน (Portfolio), 6. เว็บไซต์หน้าโปรโมชัน (Landing Page) และการรวมหลายประเภทเข้าด้วยกัน",
        keyPoints: ["4. เว็บไซต์เนื้อหาและบทความ (Content or Blog Website)", "5. เว็บไซต์แสดงผลงาน (Portfolio Website)", "6. เว็บไซต์หน้าโปรโมชัน (Landing Page)", "การผสมผสานหลายประเภทในเว็บเดียว"],
        speakerNotes: {
            whatToSay: "มาดูอีก 3 ประเภทที่เหลือครับ 4) Content หรือ Blog Website เน้นให้ความรู้และบทความดี ๆ เพื่อดึงดูดคนที่สนใจเรื่องนั้นเข้ามาอ่านแล้วค่อยรู้จักแบรนด์เรา 5) Portfolio Website คือเว็บโชว์ผลงาน เหมาะกับพวกเราเวลาเรียนจบหรือรับงานฟรีแลนซ์ เช่น ช่างภาพ กราฟิกดีไซเนอร์ และ 6) Landing Page คือหน้าเว็บหน้าเดียวที่ออกแบบมาเพื่อภารกิจเฉพาะกิจ เช่น ลงทะเบียนรับส่วนลด หรือเปิดตัวสินค้าใหม่ และในชีวิตจริง เว็บไซต์ 1 แห่งสามารถรวมหลายประเภทไว้ด้วยกันได้ด้วยครับ!",
            realLifeExample: "เว็บไซต์โรงแรมแห่งหนึ่ง มีทั้งหน้าประวัติโรงแรม (Corporate) + บทความแนะนำที่เที่ยวรอบโรงแรม (Content/Blog) + ระบบจองห้องพักออนไลน์ (Booking) อยู่ในเว็บเดียวกัน",
            guidingQuestion: "ถ้านักเรียนรับงานฟรีแลนซ์ถ่ายภาพรับปริญญาและออกแบบโปสเตอร์ อยากมีเว็บให้ลูกค้าดูตัวอย่างภาพที่เคยถ่าย ควรสร้างเว็บประเภทไหนครับ?",
            expectedAnswer: "ประเภทที่ 5 เว็บไซต์แสดงผลงาน (Portfolio Website)",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="grid-3">
                <div class="card cyan">
                    <div class="card-icon-header">
                        <div class="icon-box cyan"><i class="fa-solid fa-newspaper"></i></div>
                        <div>
                            <h3 class="card-title">4. เนื้อหาและบทความ</h3>
                            <span class="caption-text" style="color:#0E7490; font-weight:700;">Content / Blog Website</span>
                        </div>
                    </div>
                    <p class="card-text">เผยแพร่บทความ ข่าวสาร หรือความรู้ เพื่อ<strong>ดึงดูดผู้ที่สนใจเข้ามาอ่านและรู้จักแบรนด์สินค้า</strong></p>
                    <div style="background:#ECFEFF; border:1.5px solid #67E8F9; padding:14px 16px; border-radius:12px;" class="card-text">
                        <strong>ตัวอย่าง:</strong> เว็บรีวิวไอที, บล็อกสอนทำขนมของร้านเบเกอรี่
                    </div>
                </div>

                <div class="card amber">
                    <div class="card-icon-header">
                        <div class="icon-box amber"><i class="fa-solid fa-palette"></i></div>
                        <div>
                            <h3 class="card-title">5. เว็บไซต์แสดงผลงาน</h3>
                            <span class="caption-text" style="color:#B45309; font-weight:700;">Portfolio Website</span>
                        </div>
                    </div>
                    <p class="card-text">รวบรวม<strong>ตัวอย่างผลงาน ความสามารถ และประสบการณ์</strong> เพื่อนำเสนอให้ลูกค้าตัดสินใจจ้างงาน</p>
                    <div style="background:#FFFBEB; border:1.5px solid #FCD34D; padding:14px 16px; border-radius:12px;" class="card-text">
                        <strong>ตัวอย่าง:</strong> เว็บโชว์ผลงานช่างภาพ, นักออกแบบกราฟิก
                    </div>
                </div>

                <div class="card rose">
                    <div class="card-icon-header">
                        <div class="icon-box rose"><i class="fa-solid fa-rocket"></i></div>
                        <div>
                            <h3 class="card-title">6. หน้าโปรโมชันเฉพาะกิจ</h3>
                            <span class="caption-text" style="color:#BE123C; font-weight:700;">Landing Page</span>
                        </div>
                    </div>
                    <p class="card-text">ออกแบบให้ผู้เข้าชม<strong>ทำกิจกรรมตามเป้าหมายเดียวที่ชัดเจน</strong> เหมาะกับแคมเปญโปรโมชัน</p>
                    <div style="background:#FFF1F2; border:1.5px solid #FDA4AF; padding:14px 16px; border-radius:12px;" class="card-text">
                        <strong>ตัวอย่าง:</strong> หน้าลงทะเบียนรับส่วนลด, หน้าเปิดตัวสินค้าใหม่
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-layer-group"></i> การประยุกต์ใช้จริง</span>
                <span class="easy-explain-text"><strong>1 เว็บไซต์รวมหลายประเภทได้:</strong> เช่น <strong>เว็บไซต์โรงแรม</strong> มีทั้งข้อมูลบริษัท + บทความท่องเที่ยว + ระบบจองห้องพักในเว็บเดียว!</span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 20: 3.10 องค์ประกอบสำคัญของหน้าเว็บ (Interactive Browser Wireframe) (2.5 นาที)
    // =========================================================================
    {
        id: 20,
        theme: "dark",
        slideType: "Interactive Activity",
        layout: "Interactive Activity",
        section: "3.10 องค์ประกอบสำคัญของหน้าเว็บ",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 43–45.5)",
        kicker: "หัวข้อที่ 3.10 • แผนภาพจำลองโครงสร้างหน้าเว็บธุรกิจ (Interactive Wireframe)",
        title: "สำรวจโครงสร้างหน้าเว็บไซต์ร้านค้า (My Shop Interactive Anatomy)",
        badge: "คลิกแต่ละส่วนของหน้าเว็บจำลอง",
        learningObjective: "ระบุตำแหน่งและหน้าที่ของ Header, Navigation, Hero Banner, Main Content, CTA และ Footer บนหน้าเว็บได้",
        content: "จำลองโครงสร้างหน้าเว็บไซต์ร้านค้า My Shop ประกอบด้วย 1. Header + Navigation, 2. Hero Banner, 3. Main Content, 4. Call to Action (CTA), 5. Footer",
        keyPoints: ["1. Header + Navigation Menu", "2. Hero Banner", "3. Main Content (สินค้าแนะนำ)", "4. Call to Action (CTA)", "5. Footer"],
        interactiveElement: "wireframe-anatomy",
        speakerNotes: {
            whatToSay: "พอเราจะเริ่มออกแบบหน้าเว็บ 1 หน้า เราต้องรู้จักชื่อเรียกของแต่ละโซนก่อนครับ ในสไลด์นี้ครูจำลองหน้าเว็บ 'My Shop' มาให้แล้ว นักเรียนสามารถคลิกที่แต่ละส่วนของหน้าเว็บจำลองทางซ้ายมือได้เลย ตั้งแต่ส่วนบนสุดคือ Header + Navigation ถัดลงมาเป็นป้ายใหญ่ Hero Banner ตรงกลางคือ Main Content แสดงสินค้ากระเป๋าผ้า แก้วกาแฟ สมุดโน้ต มีปุ่ม CTA 'สั่งซื้อเลย' และปิดท้ายด้านล่างสุดด้วย Footer ครับ",
            realLifeExample: "เหมือนการจัดวางโซนในร้านสะดวกซื้อ: ป้ายชื่อร้านอยู่ข้างบน ตู้โปรโมชันอยู่หน้าประตู ชั้นวางสินค้าอยู่ตรงกลาง และเคาน์เตอร์คิดเงินคือปุ่ม CTA",
            guidingQuestion: "ทำไมปุ่ม 'สั่งซื้อเลย' (Call to Action: CTA) ถึงต้องใช้สีที่ตัดกับพื้นหลังและมองเห็นเด่นชัดที่สุดครับ?",
            expectedAnswer: "เพื่อดึงดูดสายตาและกระตุ้นให้ลูกค้าคลิกดำเนินการตามเป้าหมายของธุรกิจได้ทันทีโดยไม่ต้องเสียเวลาหาปุ่ม",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="grid-2-asym">
                <!-- Left: Interactive Browser Mockup (My Shop) -->
                <div class="wireframe-browser" id="myShopWireframe">
                    <div class="wireframe-topbar">
                        <span class="wf-dot" style="background:#F43F5E;"></span>
                        <span class="wf-dot" style="background:#F59E0B;"></span>
                        <span class="wf-dot" style="background:#10B981;"></span>
                        <span style="margin-left:8px; font-family:'Inter',monospace; color:#38BDF8;">🔒 https://www.myshop-example.com</span>
                        <span style="margin-left:auto; color:#FBBF24;"><i class="fa-solid fa-hand-pointer"></i> คลิกแต่ละโซน</span>
                    </div>

                    <!-- Zone 1: Header + Navigation -->
                    <div class="wf-zone active" data-wf="header" style="display:flex; justify-content:space-between; align-items:center; background:#EFF6FF;">
                        <div class="card-text"><strong style="color:#1D4ED8;">🛍️ My Shop</strong> <span class="caption-text" style="background:#DBEAFE; color:#1E40AF; padding:2px 8px; border-radius:6px;">1. Header</span></div>
                        <div class="caption-text" style="font-weight:700; color:#1E3A8A;">หน้าแรก | สินค้า | ติดต่อ <span style="background:#C7D2FE; padding:2px 8px; border-radius:6px;">2. Navigation</span></div>
                    </div>

                    <!-- Zone 2: Hero Banner -->
                    <div class="wf-zone" data-wf="hero" style="background:linear-gradient(90deg, #1E3A8A, #2563EB); color:#FFF; text-align:center;">
                        <div class="caption-text" style="color:#93C5FD; font-weight:700;">3. HERO BANNER (แบนเนอร์แนะนำหลัก)</div>
                        <div class="card-text" style="color:#FFFFFF; font-weight:700;">สินค้าคุณภาพ ราคาคุ้มค่า — เลือกซื้อสินค้าที่เหมาะกับคุณ</div>
                    </div>

                    <!-- Zone 3: Main Content -->
                    <div class="wf-zone" data-wf="content" style="background:#F8FAFC;">
                        <div class="caption-text" style="font-weight:700; color:#1E293B; margin-bottom:6px;">4. MAIN CONTENT — เนื้อหาหลัก & รูปภาพสินค้า</div>
                        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px;">
                            <div style="background:#FFF; border:1.5px solid #CBD5E1; padding:8px; border-radius:8px; text-align:center;" class="caption-text">
                                <strong>กระเป๋าผ้า</strong> • <span style="color:#059669; font-weight:700;">฿190</span>
                            </div>
                            <div style="background:#FFF; border:1.5px solid #CBD5E1; padding:8px; border-radius:8px; text-align:center;" class="caption-text">
                                <strong>แก้วกาแฟ</strong> • <span style="color:#059669; font-weight:700;">฿250</span>
                            </div>
                            <div style="background:#FFF; border:1.5px solid #CBD5E1; padding:8px; border-radius:8px; text-align:center;" class="caption-text">
                                <strong>สมุดโน้ต</strong> • <span style="color:#059669; font-weight:700;">฿85</span>
                            </div>
                        </div>
                    </div>

                    <!-- Zone 4: CTA + Form -->
                    <div class="wf-zone" data-wf="cta" style="display:flex; align-items:center; justify-content:space-between; background:#ECFDF5;">
                        <div class="caption-text" style="color:#065F46; font-weight:700;">5. Call to Action (CTA) & แบบฟอร์มสั่งซื้อ</div>
                        <span class="caption-text" style="background:#059669; color:#FFF; padding:4px 16px; border-radius:999px; font-weight:700;">🛒 สั่งซื้อเลย!</span>
                    </div>

                    <!-- Zone 5: Footer -->
                    <div class="wf-zone" data-wf="footer" style="background:#0F172A; color:#E2E8F0; display:flex; justify-content:space-between;" class="caption-text">
                        <span class="caption-text" style="color:#E2E8F0;"><strong>6. Footer:</strong> ติดต่อร้าน | ที่อยู่ | โซเชียล</span>
                        <span class="caption-text" style="color:#38BDF8;">© My Shop</span>
                    </div>
                </div>

                <!-- Right: Explanation Panel when user clicks any zone -->
                <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between; height:100%;">
                    <div class="card" id="wfDetailCard" style="border:2.5px solid #22D3EE; background:rgba(15,23,42,0.92); flex:1; justify-content:flex-start;">
                        <div class="card-icon-header">
                            <div class="icon-box cyan"><i class="fa-solid fa-compass"></i></div>
                            <h3 class="card-title" id="wfDetailTitle" style="color:#22D3EE;">1. Header & 2. Navigation</h3>
                        </div>
                        <p class="card-text" id="wfDetailDesc" style="margin-top:8px; color:#F8FAFC;">
                            <strong><span class="glossary-term" data-glossary="Header">Header</span>:</strong> อยู่ด้านบนสุด แสดงชื่อร้าน โลโก้ และเมนูหลัก<br><br>
                            <strong><span class="glossary-term" data-glossary="Navigation">Navigation</span>:</strong> ชุดเมนูช่วยให้ผู้ใช้คลิกไปหน้าสินค้าหรือหน้าติดต่อได้ง่าย ไม่ซับซ้อน
                        </p>
                    </div>

                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-lightbulb"></i> มาตรฐานสากล</span>
                        <span class="easy-explain-text">การจัดวางตามตำแหน่งที่ผู้ใช้คุ้นเคย ช่วยให้ลูกค้าหาสินค้าและกดสั่งซื้อได้ทันที</span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 21: สรุปครบทั้ง 8 องค์ประกอบสำคัญของหน้าเว็บ (2.5 นาที)
    // =========================================================================
    {
        id: 21,
        theme: "light",
        slideType: "Infographic",
        layout: "Infographic",
        section: "3.10 องค์ประกอบสำคัญของหน้าเว็บ",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 45.5–48)",
        kicker: "หัวข้อที่ 3.10 • สรุปครบทั้ง 8 องค์ประกอบสำคัญของหน้าเว็บ",
        title: "เจาะลึก 8 องค์ประกอบสำคัญของหน้าเว็บ (Web Page Elements)",
        badge: "ครบทั้ง 8 องค์ประกอบ",
        learningObjective: "อธิบายหน้าที่และข้อควรคำนึงขององค์ประกอบหน้าเว็บทั้ง 8 ส่วนได้ครบถ้วน",
        content: "1. Header, 2. Navigation Menu, 3. Hero Banner, 4. Main Content, 5. Call to Action (CTA), 6. Footer, 7. Images & Multimedia, 8. Forms",
        keyPoints: ["Header & Navigation", "Hero Banner & Main Content", "CTA & Footer", "Images/Multimedia & Forms (ขอเฉพาะข้อมูลที่จำเป็น)"],
        speakerNotes: {
            whatToSay: "นอกจาก 6 โซนหลักที่เราคลิกดูในหน้าเว็บจำลองเมื่อสักครู่แล้ว ในหน้าเว็บยังมีอีก 2 องค์ประกอบสำคัญรวมเป็น 8 ข้อ คือ ข้อ 7 'รูปภาพและสื่อมัลติมีเดีย' ซึ่งช่วยดึงดูดสายตาแต่ต้องระวังอย่าใช้ไฟล์ภาพใหญ่เกินไปจนเว็บโหลดช้า และข้อ 8 'แบบฟอร์ม (Forms)' ที่ใช้รับข้อมูลสั่งซื้อหรือสมัครสมาชิก โดยหลักการสำคัญคือ ควรขอเฉพาะข้อมูลที่จำเป็นและปกป้องข้อมูลส่วนบุคคลของลูกค้าอย่างเหมาะสมครับ",
            realLifeExample: "เวลาเรากรอกฟอร์มสั่งของ ร้านควรขอแค่ ชื่อ ที่อยู่จัดส่ง และเบอร์โทรติดต่อ ไม่ควรบังคับถามข้อมูลส่วนตัวที่ไม่เกี่ยวข้องกับการส่งของ",
            guidingQuestion: "ถ้าเราใส่รูปภาพสินค้าความละเอียดสูงมาก ๆ ไฟล์ละ 20 MB จำนวน 50 รูปในหน้าแรกหน้าเดียว จะเกิดผลเสียอย่างไรกับเว็บไซต์ครับ?",
            expectedAnswer: "ทำให้เว็บไซต์โหลดช้ามาก ลูกค้าอาจรอนานจนกดปิดเว็บไซต์หนีไปก่อน",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="grid-4">
                <div class="card blue" style="padding:16px 18px;">
                    <div class="card-text" style="color:#1D4ED8; font-weight:800;">1. <span class="glossary-term" data-glossary="Header">Header</span></div>
                    <p class="card-text">ส่วนหัวด้านบนสุด แสดงชื่อเว็บไซต์ โลโก้ และเมนูหลัก</p>
                </div>
                <div class="card blue" style="padding:16px 18px;">
                    <div class="card-text" style="color:#1D4ED8; font-weight:800;">2. <span class="glossary-term" data-glossary="Navigation">Navigation</span></div>
                    <p class="card-text">เมนูนำทางไปหน้าต่าง ๆ ชื่อเมนูต้องชัดเจน เข้าใจง่าย</p>
                </div>
                <div class="card purple" style="padding:16px 18px;">
                    <div class="card-text" style="color:#6D28D9; font-weight:800;">3. <span class="glossary-term" data-glossary="Hero Section">Hero Section</span></div>
                    <p class="card-text">แบนเนอร์ภาพเด่นและโปรโมชันหลัก ดึงดูดสายตาทันที</p>
                </div>
                <div class="card purple" style="padding:16px 18px;">
                    <div class="card-text" style="color:#6D28D9; font-weight:800;">4. Main Content</div>
                    <p class="card-text">เนื้อหาหลัก แสดงรายละเอียดสินค้า ราคา และบริการ</p>
                </div>
                <div class="card emerald" style="padding:16px 18px;">
                    <div class="card-text" style="color:#047857; font-weight:800;">5. ปุ่ม <span class="glossary-term" data-glossary="CTA">CTA</span></div>
                    <p class="card-text">ปุ่มกระตุ้นการตัดสินใจ เช่น “สั่งซื้อเลย” หรือ “ติดต่อเรา”</p>
                </div>
                <div class="card emerald" style="padding:16px 18px;">
                    <div class="card-text" style="color:#047857; font-weight:800;">6. <span class="glossary-term" data-glossary="Footer">Footer</span></div>
                    <p class="card-text">ส่วนท้ายเว็บ แสดงที่อยู่ เบอร์โทร โซเชียล และลิขสิทธิ์</p>
                </div>
                <div class="card amber" style="padding:16px 18px;">
                    <div class="card-text" style="color:#B45309; font-weight:800;">7. รูปภาพและสื่อ</div>
                    <p class="card-text">ภาพสินค้าคมชัด ขนาดไฟล์เหมาะสม ไม่ทำให้เว็บโหลดช้า</p>
                </div>
                <div class="card rose" style="padding:16px 18px;">
                    <div class="card-text" style="color:#BE123C; font-weight:800;">8. แบบฟอร์ม (Forms)</div>
                    <p class="card-text">รับข้อมูลสั่งซื้อ ขอเฉพาะที่จำเป็นและปกป้องข้อมูลลูกค้า</p>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-user-check"></i> หัวใจสำคัญ</span>
                <span class="easy-explain-text">การจัดวางทั้ง 8 องค์ประกอบอย่างเป็นระเบียบ ช่วยให้ลูกค้า <strong>ค้นหาข้อมูลเร็ว ตัดสินใจง่าย และมั่นใจในร้านค้า</strong></span>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 22: 3.11 หลักการออกแบบเว็บไซต์ธุรกิจเบื้องต้น (Before / After Slider) (2 นาที)
    // =========================================================================
    {
        id: 22,
        theme: "light",
        slideType: "Comparison",
        layout: "Comparison",
        section: "3.11 หลักการออกแบบเว็บไซต์ธุรกิจเบื้องต้น",
        teachingTime: 2,
        timeGuide: "2 นาที (นาทีที่ 48–50)",
        kicker: "หัวข้อที่ 3.11 • หลักการออกแบบเว็บธุรกิจ (Interactive Before / After Slider)",
        title: "หลักการออกแบบเว็บไซต์ธุรกิจ: เปรียบเทียบเว็บที่ไม่เหมาะสม vs เว็บที่ดี",
        badge: "เลื่อนแถบเพื่อเปรียบเทียบ",
        learningObjective: "วิเคราะห์หลักการออกแบบเว็บไซต์ธุรกิจที่ดี 6 ประการ และเปรียบเทียบความแตกต่างระหว่างเว็บที่ออกแบบดีกับไม่เหมาะสมได้",
        content: "หลักการสำคัญ ได้แก่ สีและตัวอักษรอ่านง่าย จัดวางเป็นระเบียบ เมนูไม่ซับซ้อน รองรับโทรศัพท์มือถือ รูปภาพสัมพันธ์เนื้อหา และโหลดรวดเร็ว",
        keyPoints: ["สีและตัวอักษรอ่านง่าย", "จัดวางเป็นระเบียบ เมนูไม่ซับซ้อน", "รองรับโทรศัพท์มือถือ (Responsive Design)", "รูปภาพชัดเจน โหลดไว มีปุ่มสั่งซื้อชัดเจน"],
        interactiveElement: "before-after-slider",
        speakerNotes: {
            whatToSay: "มาถึงหัวข้อ 3.11 หลักการออกแบบเว็บไซต์ธุรกิจเบื้องต้นครับ เว็บไซต์ที่ดีไม่ได้ดูแค่ความสวยงามอลังการอย่างเดียว แต่ต้อง 'ใช้งานง่าย (Usability)' ด้วย บนสไลด์นี้ครูมีตัวเลื่อนเปรียบเทียบ Before & After ให้ดูครับ ฝั่งซ้าย (Before) คือเว็บขายอาหารที่ออกแบบไม่เหมาะสม ตัวหนังสือเล็ก สีแสบตา ไม่มีราคาบอก ส่วนฝั่งขวา (After) คือเว็บที่ออกแบบดี มีภาพอาหารชัดเจน แสดงราคาครบถ้วน มีปุ่มสั่งซื้อมองเห็นง่าย และรองรับการเปิดบนมือถือ เดี๋ยวครูเลื่อนสไลเดอร์ให้ดูความแตกต่างครับ!",
            realLifeExample: "เวลาเราหิวแล้วเปิดเว็บสั่งข้าว ถ้าเจอเว็บที่ต้องถ่างนิ้วซูมหาเมนูและไม่บอกราคา เราก็กดปิดไปสั่งร้านอื่นทันที",
            guidingQuestion: "สำหรับเว็บไซต์ขายอาหาร อะไรคือสิ่งสำคัญที่สุดที่ลูกค้าอยากเห็นทันทีที่เปิดหน้าเว็บครับ?",
            expectedAnswer: "ภาพอาหารที่ชัดเจนน่าทาน แสดงราคาครบถ้วน มีปุ่มสั่งซื้อที่มองเห็นง่าย และมีช่องทางติดต่อร้านที่เข้าถึงสะดวก",
            timeRecommended: "2 นาที"
        },
        html: `
            <div class="ba-comparison-container">
                <div class="ba-control-row">
                    <span class="caption-text" style="font-weight:700; color:#BE123C;"><i class="fa-solid fa-circle-xmark"></i> BEFORE: ออกแบบไม่เหมาะสม</span>
                    <input type="range" id="baSliderInput" class="ba-slider" min="5" max="95" value="48" aria-label="ตัวเลื่อนเปรียบเทียบเว็บไซต์ Before และ After">
                    <span class="caption-text" style="font-weight:700; color:#047857;"><i class="fa-solid fa-circle-check"></i> AFTER: ออกแบบดี เหมาะกับธุรกิจ</span>
                </div>

                <div class="ba-stage" id="baStage">
                    <!-- AFTER PANE (Good Web Design) -->
                    <div class="ba-pane ba-after-pane">
                        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #BBF7D0; padding-bottom:10px;">
                            <strong class="section-heading" style="color:#065F46;"><i class="fa-solid fa-bowl-food"></i> ร้านครัวไทยโฮมเมด (After — ออกแบบดี)</strong>
                            <span class="caption-text" style="background:#10B981; color:#FFF; padding:4px 16px; border-radius:999px; font-weight:700;">หน้าแรก | เมนูอาหาร | ติดต่อร้าน</span>
                        </div>
                        <div class="grid-3" style="gap:18px; margin:12px 0;">
                            <div style="background:#FFFFFF; border:2px solid #6EE7B7; border-radius:14px; padding:16px;">
                                <div class="card-text" style="font-weight:700; color:#065F46;">🍛 ข้าวผัดกะเพราทะเล</div>
                                <p class="caption-text" style="margin:6px 0;">กุ้งและปลาหมึกสดใหม่ ผัดพริกขี้หนูสวน</p>
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
                                    <strong class="card-text" style="color:#059669;">ราคา 89 บาท</strong>
                                    <span class="caption-text" style="background:#059669; color:#FFF; padding:4px 14px; border-radius:8px; font-weight:700;">สั่งซื้อเลย</span>
                                </div>
                            </div>
                            <div style="background:#FFFFFF; border:2px solid #6EE7B7; border-radius:14px; padding:16px;">
                                <div class="card-text" style="font-weight:700; color:#065F46;">🍲 ต้มยำกุ้งน้ำข้น</div>
                                <p class="caption-text" style="margin:6px 0;">รสจัดจ้านถึงเครื่องต้มยำแท้ เสิร์ฟร้อน</p>
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
                                    <strong class="card-text" style="color:#059669;">ราคา 150 บาท</strong>
                                    <span class="caption-text" style="background:#059669; color:#FFF; padding:4px 14px; border-radius:8px; font-weight:700;">สั่งซื้อเลย</span>
                                </div>
                            </div>
                            <div style="background:#ECFDF5; border:2px solid #34D399; border-radius:14px; padding:16px;">
                                <div class="card-text" style="font-weight:700; color:#065F46;">✅ หลักการออกแบบที่ดี</div>
                                <p class="caption-text" style="color:#064E3B; margin-top:6px;">
                                    • สีและตัวอักษรอ่านง่าย<br>
                                    • บอกราคาและปุ่มสั่งซื้อชัดเจน<br>
                                    • รองรับจอมือถือ (<span class="glossary-term" data-glossary="Responsive Design">Responsive Design</span>)
                                </p>
                            </div>
                        </div>
                        <div class="caption-text" style="background:#064E3B; color:#D1FAE5; padding:10px 18px; border-radius:10px; display:flex; justify-content:space-between;">
                            <span>📞 โทรสั่งด่วน: 02-xxx-xxxx | Line: @kruathai</span>
                            <span>⚡ โหลดรวดเร็ว • ใช้งานง่ายทั้งคอมและสมาร์ตโฟน</span>
                        </div>
                    </div>

                    <!-- BEFORE PANE (Bad Web Design - Clipped by slider) -->
                    <div class="ba-pane ba-before-pane" id="baBeforePane">
                        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #991B1B; padding-bottom:10px;">
                            <strong class="section-heading" style="color:#FCA5A5;"><i class="fa-solid fa-triangle-exclamation"></i> เว็บที่ไม่เหมาะสม (Before — ลูกค้าสับสน)</strong>
                            <span class="caption-text" style="background:#7F1D1D; color:#FECACA; padding:4px 12px; border-radius:6px;">เมนูซับซ้อน | ลิงก์เสีย | ???</span>
                        </div>
                        <div class="grid-3" style="gap:18px; margin:12px 0;">
                            <div style="background:#450A0A; border:2px dashed #F87171; border-radius:14px; padding:16px;">
                                <div class="card-text" style="font-weight:700; color:#FCA5A5;">❌ สีกลืนพื้นหลัง & อ่านยาก</div>
                                <p class="caption-text" style="color:#FECACA; margin-top:6px;">ตัวหนังสือติดกันเป็นพรืด ไม่แบ่งหมวดหมู่ และไม่ระบุราคาอาหาร</p>
                            </div>
                            <div style="background:#450A0A; border:2px dashed #F87171; border-radius:14px; padding:16px;">
                                <div class="card-text" style="font-weight:700; color:#FCA5A5;">❌ ภาพใหญ่เกินไป & โหลดช้า</div>
                                <p class="caption-text" style="color:#FECACA; margin-top:6px;">ใช้ภาพไม่ปรับขนาดทำให้หน้าเว็บค้าง และไม่มีปุ่มสั่งซื้อที่ชัดเจน</p>
                            </div>
                            <div style="background:#450A0A; border:2px dashed #F87171; border-radius:14px; padding:16px;">
                                <div class="card-text" style="font-weight:700; color:#FCA5A5;">❌ ไม่รองรับมือถือ & ไร้เบอร์ร้าน</div>
                                <p class="caption-text" style="color:#FECACA; margin-top:6px;">เปิดในสมาร์ตโฟนแล้วข้อความล้นจอ และซ่อนช่องทางติดต่อร้าน</p>
                            </div>
                        </div>
                        <div class="caption-text" style="background:#7F1D1D; color:#FEE2E2; padding:10px 18px; border-radius:10px;">
                            ⚠️ ลากแถบสไลเดอร์ด้านบนไปทางซ้าย–ขวา เพื่อเปรียบเทียบความแตกต่าง!
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 23: 4. ตัวอย่างการนำความรู้ไปใช้จริง (กรณีศึกษาร้านกาแฟชุมชน) (2.5 นาที)
    // =========================================================================
    {
        id: 23,
        theme: "light",
        slideType: "Table",
        layout: "Table",
        section: "4. ตัวอย่างการนำความรู้ไปใช้จริง",
        teachingTime: 2.5,
        timeGuide: "2.5 นาที (นาทีที่ 50–52.5)",
        kicker: "ส่วนที่ 4 • กรณีศึกษาการวางแผนเว็บไซต์ธุรกิจจริง (Case Study)",
        title: "กรณีศึกษา: การวางแผนสร้างเว็บไซต์ “ร้านกาแฟชุมชน”",
        badge: "baan-coffee.example",
        learningObjective: "นำความรู้ทั้งหมดในหน่วยที่ 1 มาวิเคราะห์และวางแผนองค์ประกอบเว็บไซต์สำหรับธุรกิจร้านกาแฟได้",
        content: "วิเคราะห์สิ่งที่ต้องวางแผนสำหรับร้านกาแฟชุมชน: ประเภทเว็บไซต์, ชื่อโดเมน (baan-coffee.example), โฮสติ้ง, หน้าแรก, หน้าเมนู, หน้าติดต่อ, HTTPS และการแสดงผลบนมือถือ",
        keyPoints: ["ประเภทเว็บ: ข้อมูลร้าน + รายการสินค้า", "โดเมนสมมติ: baan-coffee.example", "หน้าแรก + หน้าเมนู + หน้าติดต่อ", "ใช้ HTTPS และรองรับทั้งคอม-มือถือ"],
        image: "assets/images/coffee-shop-wireframe.svg",
        speakerNotes: {
            whatToSay: "ทีนี้เรามาลองสวมหมวกเป็น 'ที่ปรึกษาด้านเว็บไซต์ธุรกิจดิจิทัล' กันครับ! สมมติว่ามีร้านกาแฟชุมชนแห่งหนึ่งต้องการเพิ่มช่องทางประชาสัมพันธ์และรับออเดอร์จากลูกค้า ก่อนที่เราจะไปเริ่มเขียนโค้ด HTML เราต้องวางแผนทั้ง 8 ข้อนี้ให้เจ้าของร้านดูก่อน ตั้งแต่เลือกประเภทเว็บ ตั้งชื่อโดเมนสมมติว่า baan-coffee.example เลือกโฮสติ้ง กำหนดว่าจะทำ 3 หน้าเพจหลัก ใช้ HTTPS และออกแบบให้เปิดได้ทั้งคอมและมือถือครับ",
            realLifeExample: "ดูภาพจำลองหน้าเว็บ Baan Coffee ทางขวามือครับ เห็นไหมว่าพอวางแผนครบทั้ง 8 ข้อ เวลาลงมือสร้างจริงจะเห็นภาพชัดเจนทันที",
            guidingQuestion: "ทำไมเราจึงต้องวางแผนวัตถุประสงค์ กลุ่มลูกค้า และข้อมูลที่ต้องการนำเสนอก่อนเริ่มลงมือเขียนโค้ดสร้างเว็บไซต์ครับ?",
            expectedAnswer: "เพื่อให้เว็บไซต์ที่สร้างขึ้นตอบสนองความต้องการของธุรกิจและกลุ่มลูกค้าได้ตรงจุด ไม่ต้องเสียเวลารื้อแก้โค้ดใหม่ภายหลัง",
            timeRecommended: "2.5 นาที"
        },
        html: `
            <div class="grid-2-asym" style="grid-template-columns: minmax(0, 1.22fr) minmax(0, 0.78fr);">
                <div style="height:100%;">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th style="width:34%;">หัวข้อที่ต้องวางแผน</th>
                                <th>แนวทางสำหรับ “ร้านกาแฟชุมชน”</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>1. ประเภทเว็บไซต์</strong></td>
                                <td>เว็บธุรกิจแสดงข้อมูลร้านและรายการเครื่องดื่ม</td>
                            </tr>
                            <tr>
                                <td><strong>2. ชื่อโดเมน & โฮสติ้ง</strong></td>
                                <td><code style="color:#1D4ED8; font-weight:700;">baan-coffee.example</code> + โฮสติ้งสำหรับร้านขนาดเล็ก</td>
                            </tr>
                            <tr>
                                <td><strong>3. เว็บเพจ: หน้าแรก</strong></td>
                                <td>ภาพบรรยากาศร้าน ข้อความต้อนรับ และเมนูแนะนำ</td>
                            </tr>
                            <tr>
                                <td><strong>4. เว็บเพจ: หน้าเมนู</strong></td>
                                <td>รูปเครื่องดื่มชัดเจน ชื่อเมนู และราคาครบถ้วน</td>
                            </tr>
                            <tr>
                                <td><strong>5. เว็บเพจ: หน้าติดต่อ</strong></td>
                                <td>ที่ตั้งร้าน เวลาเปิด–ปิด เบอร์โทร และแผนที่</td>
                            </tr>
                            <tr>
                                <td><strong>6. ความปลอดภัย & หน้าจอ</strong></td>
                                <td>เข้ารหัส <strong>HTTPS (TLS)</strong> และรองรับทั้ง<strong>คอม + มือถือ</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="display:flex; flex-direction:column; gap:16px; justify-content:space-between; height:100%;">
                    <div class="img-frame" style="flex:1; border-color:#F59E0B;">
                        <img src="assets/images/coffee-shop-wireframe.svg" alt="ภาพจำลองโครงร่างเว็บไซต์ร้านกาแฟชุมชน baan-coffee.example">
                    </div>
                    <div class="card amber auto-h" style="padding:14px 18px;">
                        <p class="caption-text" style="color:#78350F;">
                            <strong><i class="fa-solid fa-compass-drafting"></i> บทเรียนสำคัญ:</strong> ก่อนเริ่มเขียนโค้ด ต้องวางแผน <strong>วัตถุประสงค์ กลุ่มลูกค้า และโครงสร้างหน้าเว็บ</strong> ให้ชัดเจนเสมอ!
                        </p>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 24: 5. กิจกรรมการเรียนรู้ (2 กิจกรรมปฏิบัติในชั้นเรียน) (3 นาที)
    // =========================================================================
    {
        id: 24,
        theme: "light",
        slideType: "Interactive Activity",
        layout: "Interactive Activity",
        section: "5. กิจกรรมการเรียนรู้",
        teachingTime: 3,
        timeGuide: "3 นาที (นาทีที่ 52.5–55.5)",
        kicker: "ส่วนที่ 5 • กิจกรรมฝึกปฏิบัติการคิดวิเคราะห์และวางแผนเว็บไซต์",
        title: "กิจกรรมการเรียนรู้ประจำหน่วยที่ 1 (Active Learning Workshop)",
        badge: "2 กิจกรรมฝึกปฏิบัติ",
        learningObjective: "สำรวจวิเคราะห์องค์ประกอบเว็บไซต์ธุรกิจจริง และออกแบบโครงร่างหน้าแรกของเว็บไซต์ธุรกิจขนาดเล็กได้",
        content: "กิจกรรมที่ 1 สำรวจเว็บไซต์ธุรกิจ และ กิจกรรมที่ 2 ออกแบบโครงร่างเว็บไซต์ธุรกิจขนาดเล็ก (ร้านกาแฟ ร้านเสื้อผ้า ร้านขนม หรือร้านคอมพิวเตอร์)",
        keyPoints: ["กิจกรรมที่ 1: สำรวจเว็บธุรกิจจริง บันทึก URL ประเภท และองค์ประกอบ", "กิจกรรมที่ 2: สวมบทบาทเจ้าของธุรกิจ ออกแบบโครงร่างหน้าแรก (Wireframe)"],
        interactiveElement: "interactive-activity-planner",
        speakerNotes: {
            whatToSay: "มาถึงช่วงลงมือทำกิจกรรม 2 กิจกรรมครับ! กิจกรรมที่ 1 ให้นักเรียนเลือกเว็บไซต์ธุรกิจที่สนใจ 1 เว็บ เช่น ร้านค้าออนไลน์ ร้านอาหาร หรือโรงแรม แล้วสำรวจว่าเขามี URL อะไร เป็นเว็บประเภทไหน และมีองค์ประกอบครบไหม ส่วนกิจกรรมที่ 2 ให้สมมติว่าตัวเองเป็นเจ้าของธุรกิจขนาดเล็ก เช่น ร้านกาแฟ ร้านเสื้อผ้า ร้านขนม หรือร้านคอมพิวเตอร์ แล้วออกแบบโครงร่างหน้าแรกได้เลยครับ",
            realLifeExample: "นักเรียนที่ชอบประกอบคอม อาจเลือกทำร้านขายอุปกรณ์เกมมิ่งเกียร์และรับจัดสเปกคอมพิวเตอร์",
            guidingQuestion: "ในกิจกรรมที่ 2 นักเรียนแต่ละกลุ่มเลือกเปิดธุรกิจอะไร และตั้งชื่อปุ่ม Call to Action (CTA) บนหน้าแรกว่าอะไรกันบ้างครับ?",
            expectedAnswer: "เช่น ร้านขายขนมปังโฮมเมด ใช้ปุ่ม CTA ว่า 'สั่งอบสดใหม่วันนี้' หรือร้านคอมพิวเตอร์ใช้ปุ่มว่า 'จัดสเปกคอมพร้อมเช็กราคา'",
            timeRecommended: "3 นาที"
        },
        html: `
            <div class="grid-2">
                <div class="card blue">
                    <div class="card-icon-header">
                        <div class="icon-box blue"><i class="fa-solid fa-magnifying-glass-chart"></i></div>
                        <div>
                            <h3 class="card-title">กิจกรรมที่ 1: สำรวจเว็บไซต์ธุรกิจ</h3>
                            <span class="caption-text" style="color:#1D4ED8; font-weight:700;">วิเคราะห์จากเว็บไซต์จริงบนเบราว์เซอร์</span>
                        </div>
                    </div>
                    <p class="card-text">เลือกเว็บไซต์ธุรกิจที่สนใจ 1 แห่ง (เช่น ร้านค้าออนไลน์ ร้านอาหาร หรือโรงแรม) แล้วบันทึกผลการสำรวจ:</p>
                    <div class="step-list">
                        <div class="step-item"><div class="step-num">1</div><div class="step-content"><h4>ข้อมูลพื้นฐานของเว็บไซต์</h4><p>ระบุชื่อเว็บไซต์, ที่อยู่ URL และประเภทเว็บไซต์ธุรกิจ</p></div></div>
                        <div class="step-item"><div class="step-num">2</div><div class="step-content"><h4>องค์ประกอบสำคัญที่พบ</h4><p>สำรวจโลโก้ เมนูนำทาง รูปสินค้า ปุ่มสั่งซื้อ และข้อมูลติดต่อ</p></div></div>
                        <div class="step-item"><div class="step-num">3</div><div class="step-content"><h4>บทบาทต่อธุรกิจ</h4><p>สรุปว่าเว็บไซต์ช่วยสนับสนุนธุรกิจนั้นอย่างไร</p></div></div>
                    </div>
                </div>

                <div class="card purple">
                    <div class="card-icon-header">
                        <div class="icon-box purple"><i class="fa-solid fa-pen-ruler"></i></div>
                        <div>
                            <h3 class="card-title">กิจกรรมที่ 2: ออกแบบโครงร่างหน้าเว็บ</h3>
                            <span class="caption-text" style="color:#6D28D9; font-weight:700;">สวมบทบาทเจ้าของธุรกิจขนาดเล็ก</span>
                        </div>
                    </div>
                    <p class="card-text">สมมติธุรกิจของตนเอง (เช่น <strong>ร้านกาแฟ, ร้านเสื้อผ้า, ร้านขนม หรือร้านคอมพิวเตอร์</strong>) แล้ววางแผนโครงร่างหน้าแรก:</p>
                    
                    <div style="background:#F5F3FF; border:2px solid #C4B5FD; border-radius:14px; padding:16px; display:flex; flex-direction:column; gap:12px;">
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                            <input type="text" id="actShopName" placeholder="ชื่อร้าน (เช่น Baan Bakery)" style="width:100%; min-width:0; box-sizing:border-box; padding:10px 14px; border-radius:10px; border:2px solid #8B5CF6; font-family:'Prompt',sans-serif; font-size:24px;">
                            <input type="text" id="actDomain" placeholder="โดเมน (baanbakery.com)" style="width:100%; min-width:0; box-sizing:border-box; padding:10px 14px; border-radius:10px; border:2px solid #8B5CF6; font-family:'Prompt',sans-serif; font-size:24px;">
                        </div>
                        <div class="caption-text" style="color:#1E293B; display:grid; grid-template-columns:1fr 1fr; gap:6px;">
                            <label><input type="checkbox" checked style="width:20px;height:20px;"> 1. ชื่อร้าน & โลโก้ (Header)</label>
                            <label><input type="checkbox" checked style="width:20px;height:20px;"> 2. เมนูนำทาง (Navigation)</label>
                            <label><input type="checkbox" checked style="width:20px;height:20px;"> 3. แบนเนอร์หลัก (Hero)</label>
                            <label><input type="checkbox" checked style="width:20px;height:20px;"> 4. ข้อมูลสินค้า (Content)</label>
                            <label><input type="checkbox" checked style="width:20px;height:20px;"> 5. ปุ่มสั่งซื้อ (CTA)</label>
                            <label><input type="checkbox" checked style="width:20px;height:20px;"> 6. ข้อมูลติดต่อ (Footer)</label>
                        </div>
                    </div>

                    <div class="easy-explain">
                        <span class="easy-explain-badge"><i class="fa-solid fa-star"></i> เป้าหมาย</span>
                        <span class="easy-explain-text">ฝึกวางแผนองค์ประกอบหน้าเว็บให้ครบถ้วนก่อนเริ่มเขียนโค้ดจริง</span>
                    </div>
                </div>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 25: 6. แบบทดสอบทบทวนความรู้ท้ายหน่วย (Interactive Quiz 10 ข้อ) (3 นาที)
    // =========================================================================
    {
        id: 25,
        theme: "light",
        slideType: "Quiz",
        layout: "Quiz",
        section: "6. แบบทดสอบท้ายหน่วย (10 ข้อ)",
        teachingTime: 3,
        timeGuide: "3 นาที (นาทีที่ 55.5–58.5)",
        kicker: "ส่วนที่ 6 • แบบทดสอบทบทวนความรู้ท้ายหน่วย (Interactive Quiz 10 ข้อ)",
        title: "แบบทดสอบทบทวนความรู้ท้ายหน่วยที่ 1 (10 ข้อ)",
        badge: "ตรวจคำตอบ & เฉลยทันที",
        learningObjective: "ประเมินความเข้าใจเนื้อหาหน่วยที่ 1 ผ่านแบบทดสอบปรนัย 10 ข้อ พร้อมรับทราบเหตุผลของเฉลย",
        content: "แบบทดสอบ 10 ข้อ เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว ตรวจคำตอบทันที แสดงเหตุผลของเฉลย คำนวณคะแนนรวม และกดทำใหม่ได้",
        keyPoints: ["ครบทั้ง 10 ข้อตามบทเรียน", "คลิกเลือกคำตอบและตรวจได้ทันที", "มีคำอธิบายเหตุผลของเฉลยทุกข้อ", "กดเริ่มทำใหม่ได้ตลอดเวลา"],
        interactiveElement: "quiz-10-questions",
        speakerNotes: {
            whatToSay: "มาทดสอบความเข้าใจกันด้วยแบบทดสอบท้ายหน่วย 10 ข้อครับ! นักเรียนสามารถคลิกเลือกคำตอบ ก, ข, ค หรือ ง บนหน้าจอได้เลย ระบบจะตรวจคำตอบทันทีพร้อมอธิบายเหตุผลว่าทำไมข้อนั้นถึงถูก และรวมคะแนนให้ด้านซ้ายมือ ถ้าอยากทบทวนใหม่ก็กดปุ่ม 'เริ่มทำใหม่' ได้ตลอดเวลาครับ",
            realLifeExample: "ครูสามารถให้นักเรียนในห้องยกมือโหวตคำตอบแต่ละข้อ แล้วคลิกเฉลยไปพร้อมกันทั้งห้องเรียนได้เลย",
            guidingQuestion: "ใครได้คะแนนเต็ม 10/10 หรือได้ตั้งแต่ 8 คะแนนขึ้นไปบ้างครับ? ข้อไหนที่เพื่อน ๆ ลังเลมากที่สุด?",
            expectedAnswer: "นักเรียนตอบคำถามทั้ง 10 ข้อและเข้าใจเหตุผลของเฉลยทุกข้อ",
            timeRecommended: "3 นาที"
        },
        html: `
            <!-- Interactive Quiz Interface (Screen Mode) -->
            <div class="quiz-wrapper" id="quizApp">
                <div class="quiz-sidebar">
                    <div class="quiz-score-card">
                        <div class="caption-text" style="color:#A5F3FC;">คะแนนรวมของคุณ</div>
                        <div class="quiz-score-num"><span id="quizScoreVal">0</span> / 10</div>
                        <div id="quizProgressText" class="caption-text" style="color:#CBD5E1;">ตอบแล้ว 0/10 ข้อ</div>
                    </div>

                    <div>
                        <div class="caption-text" style="font-weight:700; margin-bottom:8px; color:#1E293B;">เลือกข้อคำถาม (1–10):</div>
                        <div class="quiz-nav-grid" id="quizNavDots">
                            <!-- Injected by app.js -->
                        </div>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:10px;">
                        <button type="button" id="btnQuizCheckAll" class="ctrl-btn primary" style="justify-content:center; padding:10px; font-size:23px;">
                            <i class="fa-solid fa-check-double"></i> เฉลยทุกข้อ
                        </button>
                        <button type="button" id="btnQuizReset" class="ctrl-btn" style="justify-content:center; padding:10px; font-size:23px; background:#F1F5F9; color:#0F172A; border-color:#CBD5E1;">
                            <i class="fa-solid fa-rotate-right"></i> เริ่มทำใหม่
                        </button>
                    </div>
                </div>

                <div class="quiz-main-card">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                            <span id="quizQBadge" class="caption-text" style="background:#DBEAFE; color:#1D4ED8; padding:4px 16px; border-radius:999px; font-weight:700;">ข้อที่ 1 จาก 10</span>
                            <div style="display:flex; gap:10px;">
                                <button type="button" id="btnQuizPrevQ" class="ctrl-btn" style="background:#F1F5F9; color:#0F172A; border-color:#CBD5E1; font-size:22px;"><i class="fa-solid fa-arrow-left"></i> ข้อก่อนหน้า</button>
                                <button type="button" id="btnQuizNextQ" class="ctrl-btn" style="background:#2563EB; color:#FFFFFF; border-color:#2563EB; font-size:22px;">ข้อถัดไป <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <h3 class="quiz-q-title" id="quizQText">1. ข้อใดอธิบายความหมายของเว็บไซต์ได้ถูกต้องที่สุด?</h3>
                        <div class="quiz-options-list" id="quizOptionsList">
                            <!-- Injected by app.js -->
                        </div>
                    </div>

                    <div class="quiz-feedback-box" id="quizFeedbackBox">
                        <span><i class="fa-solid fa-circle-info" style="color:#2563EB;"></i> คลิกเลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว ระบบจะตรวจคำตอบและแสดงเหตุผลทันที</span>
                    </div>
                </div>
            </div>

            <!-- Printable All-10-Questions View (Visible in @media print / Save as PDF) -->
            <div class="quiz-print-all">
                ${QUIZ_QUESTIONS.map(q => `
                    <div style="border:1.5px solid #CBD5E1; border-radius:10px; padding:8px 14px; background:#FFFFFF; font-size:20px; line-height:1.3;">
                        <strong style="color:#0B1026;">${q.question}</strong>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2px 12px; margin-top:4px; color:#334155;">
                            ${q.options.map((opt, idx) => `<span style="${idx === q.correctIndex ? 'color:#047857;font-weight:700;' : ''}">${opt} ${idx === q.correctIndex ? '✓' : ''}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `
    },

    // =========================================================================
    // SLIDE 26: 7. สรุปท้ายหน่วย (Unit Summary) (1.5 นาที)
    // =========================================================================
    {
        id: 26,
        theme: "dark",
        slideType: "Infographic",
        layout: "Infographic",
        section: "7. สรุปท้ายหน่วย",
        teachingTime: 1.5,
        timeGuide: "1.5 นาที (นาทีที่ 58.5–60)",
        kicker: "ส่วนที่ 7 • สรุปสาระสำคัญประจำหน่วยที่ 1",
        title: "สรุปท้ายหน่วยที่ 1: ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล",
        badge: "Unit 1 Wrap-Up",
        learningObjective: "สรุปความเชื่อมโยงของระบบเว็บไซต์ทั้งหมดและการนำไปวางแผนสร้างเว็บไซต์ธุรกิจดิจิทัล",
        content: "สรุปความเชื่อมโยงของ Website, Web Page, URL, Domain, Hosting, Browser, Server, HTTPS, ประเภทเว็บไซต์ธุรกิจ และองค์ประกอบหน้าเว็บ",
        keyPoints: ["ความเชื่อมโยงของระบบเทคโนโลยีเว็บไซต์", "การเลือกประเภทและจัดองค์ประกอบให้ตรงกลุ่มลูกค้า", "การสร้างเว็บเริ่มจากการเข้าใจเป้าหมายและผู้ใช้งาน ไม่ใช่แค่เริ่มเขียนโค้ด"],
        speakerNotes: {
            whatToSay: "ก่อนจบคาบเรียน 60 นาทีในวันนี้ เรามาสรุปภาพรวมทั้งหมดในหน้าเดียวครับ! เว็บไซต์ประกอบด้วยเว็บเพจหลายหน้าที่เชื่อมโยงกัน ลูกค้าเข้าถึงผ่าน URL และ Web Browser โดยมี Domain ช่วยให้จำชื่อเว็บง่าย มี Hosting เก็บไฟล์ มี Web Server คอยรับคำขอและส่งข้อมูลกลับ และมี HTTPS ช่วยเข้ารหัสความปลอดภัย สิ่งที่ครูอยากฝากไว้ทิ้งท้ายคือ 'การสร้างเว็บไซต์ไม่ได้เริ่มต้นจากการเขียนโค้ดเพียงอย่างเดียว แต่เริ่มจากการเข้าใจว่าจะสร้างเว็บไปเพื่ออะไร ใครคือผู้ใช้งาน และควรนำเสนอข้อมูลอย่างไรให้เกิดประโยชน์สูงสุดต่อธุรกิจ' พบกันใหม่หน่วยที่ 2 สวัสดีครับ/ค่ะ!",
            realLifeExample: "เหมือนสถาปนิกที่เข้าใจความต้องการของผู้อยู่อาศัยก่อนลงมือวาดแบบแปลนตึก",
            guidingQuestion: "คำถามสุดท้ายก่อนเลิกเรียน: ถ้าเพื่อนถามว่า Domain กับ Hosting ต่างกันอย่างไร ตอบสั้น ๆ ให้เข้าใจง่ายที่สุดว่าอย่างไรครับ?",
            expectedAnswer: "Domain คือป้ายชื่อและที่อยู่ร้าน ส่วน Hosting คือที่ดินและอาคารร้านค้าสำหรับเก็บไฟล์เว็บไซต์",
            timeRecommended: "1.5 นาที"
        },
        html: `
            <div class="grid-3">
                <div class="card" style="border-top:5px solid #22D3EE;">
                    <div class="card-icon-header">
                        <div class="icon-box cyan"><i class="fa-solid fa-diagram-project"></i></div>
                        <h3 class="card-title" style="color:#22D3EE;">1. กลไกของเว็บไซต์</h3>
                    </div>
                    <ul style="padding-left:24px; color:#F1F5F9; line-height:1.48;" class="card-text">
                        <li><strong>Website</strong> รวมหลาย <strong>Web Page</strong></li>
                        <li>เข้าถึงด้วย <strong>URL</strong> ผ่าน <strong>Browser</strong></li>
                        <li><strong>Domain</strong> ช่วยจำชื่อเว็บง่าย</li>
                        <li><strong>Hosting</strong> เก็บไฟล์เว็บไซต์</li>
                        <li><strong>Server</strong> รับ Request ส่ง Response</li>
                        <li><strong>HTTPS</strong> เข้ารหัสปลอดภัย (TLS)</li>
                    </ul>
                </div>

                <div class="card" style="border-top:5px solid #8B5CF6;">
                    <div class="card-icon-header">
                        <div class="icon-box purple"><i class="fa-solid fa-briefcase"></i></div>
                        <h3 class="card-title" style="color:#C4B5FD;">2. เว็บไซต์กับธุรกิจ</h3>
                    </div>
                    <p class="card-text" style="color:#F1F5F9;">
                        เลือกประเภทเว็บไซต์ทั้ง <strong>6 รูปแบบ</strong> (องค์กร, E-Commerce, จองคิว, บทความ, แสดงผลงาน, หน้าโปรโมชัน) และจัดวาง <strong>8 องค์ประกอบหน้าเว็บ</strong> ให้ตรงกับความต้องการของลูกค้า
                    </p>
                </div>

                <div class="card" style="border-top:5px solid #10B981;">
                    <div class="card-icon-header">
                        <div class="icon-box emerald"><i class="fa-solid fa-lightbulb"></i></div>
                        <h3 class="card-title" style="color:#6EE7B7;">3. หัวใจสำคัญ</h3>
                    </div>
                    <div class="step-list">
                        <div class="step-item"><div class="step-num" style="background:#059669;">Why</div><div class="step-content"><h4>สร้างขึ้นเพื่ออะไร?</h4><p>กำหนดเป้าหมายธุรกิจที่ชัดเจน</p></div></div>
                        <div class="step-item"><div class="step-num" style="background:#059669;">Who</div><div class="step-content"><h4>ใครคือผู้ใช้งาน?</h4><p>เข้าใจลูกค้าและอุปกรณ์ที่ใช้</p></div></div>
                        <div class="step-item"><div class="step-num" style="background:#059669;">How</div><div class="step-content"><h4>นำเสนออย่างไร?</h4><p>อ่านง่าย โหลดไว และปลอดภัย</p></div></div>
                    </div>
                </div>
            </div>

            <div class="easy-explain">
                <span class="easy-explain-badge"><i class="fa-solid fa-graduation-cap"></i> จบหน่วยที่ 1</span>
                <span class="easy-explain-text"><strong>พร้อมก้าวสู่หน่วยถัดไป:</strong> เมื่อเข้าใจโครงสร้างและการวางแผนแล้ว ในหน่วยต่อไปเราจะเริ่มลงมือสร้างหน้าเว็บจริง!</span>
            </div>
        `
    }
];
