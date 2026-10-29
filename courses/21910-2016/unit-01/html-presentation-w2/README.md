# 21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล — หน่วยที่ 1 (สัปดาห์ที่ 2)
## เรื่อง: การทำงานของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจ (Interactive Web Presentation)

- **รหัสวิชา:** `21910-2016`
- **ชื่อรายวิชา:** การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล
- **ระดับชั้น:** ประกาศนียบัตรวิชาชีพ (ปวช.2) สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล
- **หน่วยที่:** หน่วยที่ 1 ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล (สัปดาห์ที่ 2)
- **เรื่อง:** การทำงานของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจ
- **จำนวนชั่วโมงเรียน:** 4 ชั่วโมง (ภาคทฤษฎี 2 ชั่วโมง / ภาคปฏิบัติ 2 ชั่วโมง)
- **จำนวนสไลด์ทั้งหมด:** 28 สไลด์ (อัตราส่วน 16:9 ขนาดอ้างอิง `1600 × 900 px`)

---

## 1. วิธีเปิดใช้งาน (Local HTTP Server & XAMPP)

### กรณีเปิดผ่าน XAMPP (Apache)
- เปิดใช้งานได้ที่ URL:
  `http://localhost/learning/21910-2016/unit-1-week-2/`
- แยกออกจาก URL ของหน่วยที่ 1 สัปดาห์ที่ 1 (`http://localhost/learning/21910-2016/`) อย่างชัดเจน ไม่ทับซ้อนกัน

### กรณีรันผ่าน Local HTTP Server ทั่วไป
```bash
cd c:/xampp/htdocs/learning/21910-2016/unit-1-week-2
npx serve -l 8080
# หรือ python -m http.server 8080
```
แล้วเปิดเบราว์เซอร์ที่ `http://localhost:8080/`

---

## 2. โครงสร้างไฟล์ในโฟลเดอร์ (Central Library Compatible)

```text
learning/21910-2016/unit-1-week-2/
├── index.html                # Entry Point หลักของ Presentation
├── style.css                 # ระบบ Responsive 16:9 (1600×900), Bright Light Theme, Universal Zoom และ @media print
├── slides-data.js            # ข้อมูลเนื้อหาทั้ง 28 สไลด์, คลังคำศัพท์ (VOCAB_DATA) และแบบทดสอบ 10 ข้อ
├── custom-assets-data.js     # ข้อมูลภาพประกอบเพิ่มเติมที่นำเข้าสู่โปรเจกต์ (รองรับการคัดลอกไปยังคลังสื่อกลาง)
├── app.js                    # ระบบควบคุมสไลด์, Image URL Import, Universal Visual Zoom, Presenter Mode และ QA Audit
├── asset-manager.php         # ระบบ Backend เสริมสำหรับ XAMPP เพื่อบันทึกไฟล์ภาพลง assets/images/ อย่างปลอดภัย (ป้องกัน SSRF)
├── presentation-meta.json    # Metadata สำหรับนำเข้าสู่ Central Teaching Presentation Library
├── README.md                 # คู่มือการใช้งานและโครงสร้างโปรเจกต์
└── assets/
    ├── images/               # ภาพประกอบบทเรียนและไฟล์ภาพ Local Asset ที่นำเข้าเพิ่มเติม
    ├── diagrams/             # แผนภาพ Infographic และ Wireframe แบบ SVG ความละเอียดสูง
    └── thumbnails/           # ภาพปกตัวอย่างสำหรับระบบคลังสื่อกลาง
```

---

## 3. ปุ่มควบคุมและคีย์ลัดสำหรับผู้สอน

| ปุ่ม / คีย์ลัด | การทำงาน |
| :--- | :--- |
| `→` หรือ `Spacebar` | ไปยังสไลด์ถัดไป |
| `←` | ย้อนกลับสไลด์ก่อนหน้า |
| `Home` / `End` | ข้ามไปยังสไลด์แรก / สไลด์สุดท้าย |
| `I` | เปิดเครื่องมือ **เพิ่มภาพจาก URL & จัดการสื่อภาพประกอบ (Image URL Import & Asset Manager)** |
| `คลิกที่รูปภาพใดก็ได้` | เปิด **Universal Visual Zoom & Lightbox** (ซูมเข้า/ออก, พอดีจอ, ลากเลื่อนดูรายละเอียด, กด `ESC` เพื่อปิด) |
| `G` | เปิดคลังคำศัพท์เทคนิค (Interactive Glossary) |
| `N` | เปิด/ปิดลิ้นชักบันทึกการสอนสำหรับครู (Speaker Notes พร้อมแก้ไขและส่งออกไฟล์ได้) |
| `P` | เปิดโหมดผู้สอน 2 หน้าจอ (Teacher Presenter Console + ปุ่มเปิดจอโปรเจกเตอร์ Audience View) |
| `F` | เปิด/ปิดโหมดเต็มหน้าจอ (Fullscreen) |
| ปุ่ม **Save as PDF** | พิมพ์หรือบันทึกเป็นไฟล์ PDF ขนาด 16:9 (1 สไลด์ต่อ 1 หน้า ไม่มีแถบควบคุมบดบัง) |

---

## 4. แหล่งอ้างอิงภาพประกอบจากเอกสารต้นฉบับ

- ภาพประกอบแนวคิดพัฒนาเว็บและเฟรมเวิร์ก: `assets/images/ref-web-frameworks.png` (อ้างอิงจากเอกสารบทเรียน `apponix.com`)
- ภาพตัวอย่างเว็บไซต์แบบข้อมูล (Informational Website): `assets/images/ref-informational-site.png` (อ้างอิงจากเอกสารบทเรียน `mineledgerai.com`)
- ภาพตัวอย่างเว็บแอปพลิเคชันอีคอมเมิร์ซ (Web Application): `assets/images/ref-web-application.png` (อ้างอิงจากเอกสารบทเรียน `devimus.com`)
- ภาพตัวอย่างคำอธิบายโครงร่างหน้าเว็บ (Wireframe Annotations): `assets/images/ref-wireframe-annotations.png` (อ้างอิงจากเอกสารบทเรียน `balsamiq.com`)
- ภาพเปรียบเทียบเว็บไซต์ที่รองรับมือถือและไม่เหมาะกับมือถือ: `assets/images/ref-mobile-friendly-good.png`, `assets/images/ref-mobile-friendly-bad.png` (อ้างอิงจากเอกสารบทเรียน `onrampfunds.com` และ `spark`)
- แผนภาพ Infographic ภาษาไทยสำหรับประกอบการสอน: ออกแบบเฉพาะสำหรับรายวิชาใน `assets/diagrams/*.svg`
