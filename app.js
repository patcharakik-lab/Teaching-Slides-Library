/**
 * Teaching Presentation Library - Central Application Engine
 * Pure Vanilla JavaScript (GitHub Pages Compatible)
 * Supports Dual Presentation Modes:
 *   - Type A: Image-Slides (Full-Image 16:9 Viewer with Presenter Mode)
 *   - Type B: HTML-Interactive (Preserves Full Native Interactive Decks & Quizzes)
 */

(function () {
  'use strict';

  // Constants
  const ASPECT_RATIO = 16 / 9;

  // Embedded fallback database for standalone file:// execution without web server
  const EMBEDDED_CATALOG_DATA = {
    "courses/21910-2007/course.json":  {
                                           "courseId":  "21910-2007",
                                           "courseName":  "โปรแกรมกราฟิกเพื่อสร้างสื่อดิจิทัล",
                                           "status":  "พร้อมใช้งาน",
                                           "description":  "หลักสูตร ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล — ความรู้พื้นฐานเกี่ยวกับภาพกราฟิกดิจิทัลและการเตรียมงานออกแบบ",
                                           "units":  [
                                                         {
                                                             "unitId":  "unit-01",
                                                             "unitNumber":  1,
                                                             "title":  "ความรู้พื้นฐานเกี่ยวกับภาพกราฟิกดิจิทัลและการเตรียมงานออกแบบ",
                                                             "status":  "พร้อมใช้งาน",
                                                             "slideCount":  28,
                                                             "presentations":  [
                                                                                   {
                                                                                       "id":  "21910-2007-u01-html",
                                                                                       "title":  "สไลด์สื่อการสอน HTML Interactive",
                                                                                       "presentationType":  "html-interactive",
                                                                                       "slideCount":  28,
                                                                                       "entryPoint":  "courses/21910-2007/unit-01/html-presentation/index.html",
                                                                                       "features":  [
                                                                                                        "Interactive Quiz",
                                                                                                        "Interactive Glossary",
                                                                                                        "Before/After Slider",
                                                                                                        "Interactive Diagram",
                                                                                                        "Speaker Notes",
                                                                                                        "Presentation Timer",
                                                                                                        "PDF Export"
                                                                                                    ]
                                                                                   }
                                                                               ]
                                                         }
                                                     ]
                                       },
    "courses/21910-2016/course.json":  {
                                           "courseId":  "21910-2016",
                                           "courseName":  "การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล",
                                           "status":  "พร้อมใช้งาน",
                                           "description":  "หลักสูตร ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล — ความรู้พื้นฐานเกี่ยวกับเว็บไซต์ โครงสร้างสถาปัตยกรรมเว็บ และธุรกิจดิจิทัล",
                                           "units":  [
                                                         {
                                                             "unitId":  "unit-01",
                                                             "unitNumber":  1,
                                                             "title":  "ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล",
                                                             "status":  "พร้อมใช้งาน",
                                                             "slideCount":  54,
                                                             "presentations":  [
                                                                                   {
                                                                                       "id":  "21910-2016-u01-html",
                                                                                       "title":  "สไลด์สื่อการสอน HTML Interactive (สัปดาห์ที่ 1: ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล)",
                                                                                       "presentationType":  "html-interactive",
                                                                                       "slideCount":  26,
                                                                                       "entryPoint":  "courses/21910-2016/unit-01/html-presentation/index.html",
                                                                                       "features":  [
                                                                                                        "Interactive Quiz",
                                                                                                        "Interactive Glossary",
                                                                                                        "Before/After Slider",
                                                                                                        "Interactive Diagram",
                                                                                                        "Speaker Notes",
                                                                                                        "Presentation Timer",
                                                                                                        "PDF Export"
                                                                                                    ]
                                                                                   },
                                                                                   {
                                                                                       "id":  "21910-2016-u01-w02-html",
                                                                                       "title":  "สไลด์สื่อการสอน HTML Interactive (สัปดาห์ที่ 2: การทำงานของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจ)",
                                                                                       "presentationType":  "html-interactive",
                                                                                       "slideCount":  28,
                                                                                       "entryPoint":  "courses/21910-2016/unit-01/html-presentation-w2/index.html",
                                                                                       "features":  [
                                                                                                        "Universal Visual Zoom \u0026 Lightbox",
                                                                                                        "Universal Image URL Import",
                                                                                                        "Dual-Screen Presenter Mode",
                                                                                                        "Editable Speaker Notes",
                                                                                                        "Interactive Architecture \u0026 Diagrams"
                                                                                                    ]
                                                                                   }
                                                                               ]
                                                         }
                                                     ]
                                       },
    "courses/21910-1002/unit-01/slides-manifest.json":  {
                                                            "courseId":  "21910-1002",
                                                            "unitId":  "unit-01",
                                                            "unitNumber":  1,
                                                            "unitTitle":  "ความรู้พื้นฐานเกี่ยวกับความต้องการทางธุรกิจ",
                                                            "status":  "พร้อมใช้งาน",
                                                            "totalSlides":  7,
                                                            "slidesDir":  "slides/",
                                                            "slides":  [
                                                                           {
                                                                               "id":  "21910-1002-u01-s01",
                                                                               "order":  1,
                                                                               "fileName":  "slide-01.png",
                                                                               "path":  "slides/slide-01.png",
                                                                               "dimensions":  "1672x941",
                                                                               "fileSize":  1784675,
                                                                               "sha256":  "393ca3460e9d0d4e165c616e8b7a9781093a046177bdd68261a7e32b4502e704",
                                                                               "status":  "ready"
                                                                           },
                                                                           {
                                                                               "id":  "21910-1002-u01-s02",
                                                                               "order":  2,
                                                                               "fileName":  "slide-02.png",
                                                                               "path":  "slides/slide-02.png",
                                                                               "dimensions":  "1672x941",
                                                                               "fileSize":  1830962,
                                                                               "sha256":  "36bd6fa85cbcbd2749dd8bc317c7662d521e70898f44346026d0df42122cd72f",
                                                                               "status":  "ready"
                                                                           },
                                                                           {
                                                                               "id":  "21910-1002-u01-s03",
                                                                               "order":  3,
                                                                               "fileName":  "slide-03.png",
                                                                               "path":  "slides/slide-03.png",
                                                                               "dimensions":  "1672x941",
                                                                               "fileSize":  1854781,
                                                                               "sha256":  "ea934e96df78f9a2c591488b2590208b340fa01270931b1646d0f4fa219175c7",
                                                                               "status":  "ready"
                                                                           },
                                                                           {
                                                                               "id":  "21910-1002-u01-s04",
                                                                               "order":  4,
                                                                               "fileName":  "slide-04.png",
                                                                               "path":  "slides/slide-04.png",
                                                                               "dimensions":  "1672x941",
                                                                               "fileSize":  1675286,
                                                                               "sha256":  "65e3716581dfc132c0ff2b7a93907c4a8179eb17dace63682ab7ddefdc5eca97",
                                                                               "status":  "ready"
                                                                           },
                                                                           {
                                                                               "id":  "21910-1002-u01-s05",
                                                                               "order":  5,
                                                                               "fileName":  "slide-05.png",
                                                                               "path":  "slides/slide-05.png",
                                                                               "dimensions":  "1672x941",
                                                                               "fileSize":  1717658,
                                                                               "sha256":  "31a74d0b67120c87fdf275a2a12a168997d6c1691b51b9aa46b3495092196bbc",
                                                                               "status":  "ready"
                                                                           },
                                                                           {
                                                                               "id":  "21910-1002-u01-s06",
                                                                               "order":  6,
                                                                               "fileName":  "slide-06.png",
                                                                               "path":  "slides/slide-06.png",
                                                                               "dimensions":  "1672x941",
                                                                               "fileSize":  1779472,
                                                                               "sha256":  "65a590e10b185e9f501ac2fa0aa7af389330382fde1d7e097ddf9ebd6aa408de",
                                                                               "status":  "ready"
                                                                           },
                                                                           {
                                                                               "id":  "21910-1002-u01-s07",
                                                                               "order":  7,
                                                                               "fileName":  "slide-07.png",
                                                                               "path":  "slides/slide-07.png",
                                                                               "dimensions":  "1672x941",
                                                                               "fileSize":  1756057,
                                                                               "sha256":  "ee909979b4bb0570019921efa3db3ff5ee6dfb0611c37ff598ebecd92905bb54",
                                                                               "status":  "ready"
                                                                           }
                                                                       ]
                                                        },
    "courses/21910-1002/course.json":  {
                                           "courseId":  "21910-1002",
                                           "courseName":  "การวิเคราะห์ความต้องการทางธุรกิจ",
                                           "status":  "พร้อมใช้งาน",
                                           "description":  "หลักสูตร ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล — การวิเคราะห์ความต้องการทางธุรกิจและการวิเคราะห์ข้อมูล",
                                           "units":  [
                                                         {
                                                             "unitId":  "unit-01",
                                                             "unitNumber":  1,
                                                             "title":  "ความรู้พื้นฐานเกี่ยวกับความต้องการทางธุรกิจ",
                                                             "status":  "พร้อมใช้งาน",
                                                             "slideCount":  49,
                                                             "presentations":  [
                                                                                   {
                                                                                       "id":  "21910-1002-u01-html",
                                                                                       "title":  "สไลด์สื่อการสอน HTML Interactive",
                                                                                       "presentationType":  "html-interactive",
                                                                                       "slideCount":  42,
                                                                                       "entryPoint":  "courses/21910-1002/unit-01/html-presentation/index.html",
                                                                                       "features":  [
                                                                                                        "Interactive Quiz",
                                                                                                        "Before/After Slider",
                                                                                                        "Interactive Diagram",
                                                                                                        "Speaker Notes",
                                                                                                        "Presentation Timer",
                                                                                                        "PDF Export"
                                                                                                    ]
                                                                                   },
                                                                                   {
                                                                                       "id":  "21910-1002-u01-png",
                                                                                       "title":  "สไลด์ภาพ Full-Image PNG",
                                                                                       "presentationType":  "image-slides",
                                                                                       "slideCount":  7,
                                                                                       "manifestPath":  "unit-01/slides-manifest.json",
                                                                                       "speakerNotesPath":  "unit-01/speaker-notes.json",
                                                                                       "features":  [
                                                                                                        "Full-Image 16:9",
                                                                                                        "Slide Organizer",
                                                                                                        "Presenter Mode Dual-Window",
                                                                                                        "Teacher Notes Editor",
                                                                                                        "PDF Export"
                                                                                                    ]
                                                                                   }
                                                                               ]
                                                         }
                                                     ]
                                       },
    "courses/21910-1002/unit-01/speaker-notes.json":  {
                                                          "courseId":  "21910-1002",
                                                          "unitId":  "unit-01",
                                                          "unitTitle":  "ความรู้พื้นฐานเกี่ยวกับความต้องการทางธุรกิจ",
                                                          "notes":  [
                                                                        {
                                                                            "slideId":  "21910-1002-u01-s01",
                                                                            "slideOrder":  1,
                                                                            "title":  "หน้าปกและภาพรวมรายวิชา",
                                                                            "content":  "กล่าวต้อนรับผู้เรียนเข้าสู่รายวิชา 21910-1002 การวิเคราะห์ความต้องการทางธุรกิจ ชี้แจงวัตถุประสงค์การเรียนรู้ในภาพรวม แนะนำโครงสร้างรายวิชา และภาพรวมของหน่วยที่ 1"
                                                                        },
                                                                        {
                                                                            "slideId":  "21910-1002-u01-s02",
                                                                            "slideOrder":  2,
                                                                            "title":  "ผลลัพธ์การเรียนรู้ประจำหน่วย",
                                                                            "content":  "เน้นย้ำสมรรถนะการวิเคราะห์สถานการณ์ \u0027ร้านเครื่องดื่มชุมชน\u0027 การฝึกสังเกตปัญหาจริง และค้นหาความต้องการที่แท้จริงของผู้ประกอบการ"
                                                                        },
                                                                        {
                                                                            "slideId":  "21910-1002-u01-s03",
                                                                            "slideOrder":  3,
                                                                            "title":  "นิยาม: ปัญหา vs ความต้องการ vs แนวทางแก้ไข",
                                                                            "content":  "อธิบายให้นักเรียนเห็นความแตกต่างอย่างชัดเจนระหว่าง Pain Point (ปัญหา), Business Need (ความต้องการ) และ Solution (ทางออก) เพื่อป้องกันการด่วนสรุปวิธีแก้ก่อนเข้าใจปัญหาที่แท้จริง"
                                                                        },
                                                                        {
                                                                            "slideId":  "21910-1002-u01-s04",
                                                                            "slideOrder":  4,
                                                                            "title":  "มาตรฐานสมรรถนะ ICT-JBSI-001B",
                                                                            "content":  "เชื่อมโยงกับเกณฑ์มาตรฐานอาชีพนักวิเคราะห์ความต้องการทางธุรกิจ ระดับ 3 เน้นเกณฑ์ความถูกต้อง ครบถ้วน มีเหตุผล และสามารถตรวจสอบย้อนกลับได้"
                                                                        },
                                                                        {
                                                                            "slideId":  "21910-1002-u01-s05",
                                                                            "slideOrder":  5,
                                                                            "title":  "กรณีศึกษาและตัวอย่างในชุมชน",
                                                                            "content":  "เปิดประเด็นอภิปรายกลุ่ม โดยยกตัวอย่างปัญหาของร้านค้าใกล้ตัว ให้นักเรียนช่วยกันระบุผลกระทบและผู้มีส่วนได้ส่วนเสีย (Stakeholders)"
                                                                        },
                                                                        {
                                                                            "slideId":  "21910-1002-u01-s06",
                                                                            "slideOrder":  6,
                                                                            "title":  "หลักฐานการปฏิบัติงานและความรู้",
                                                                            "content":  "ชี้แจงแบบฟอร์มการบันทึกปัญหา วิธีสังเกตหน้างาน และแนวทางการสัมภาษณ์ผู้ประกอบการอย่างมืออาชีพ"
                                                                        },
                                                                        {
                                                                            "slideId":  "21910-1002-u01-s07",
                                                                            "slideOrder":  7,
                                                                            "title":  "สรุปเนื้อหาและมอบหมายใบงาน",
                                                                            "content":  "สรุปประเด็นสำคัญของหน่วยที่ 1 ชี้แจงใบงานประจำหน่วย และเปิดโอกาสให้ผู้เรียนซักถามข้อสงสัยก่อนเริ่มทำกิจกรรม"
                                                                        }
                                                                    ]
                                                      },
    "courses/21910-2008/course.json":  {
                                           "courseId":  "21910-2008",
                                           "courseName":  "การผลิตสื่อดิจิทัล",
                                           "status":  "พร้อมใช้งาน",
                                           "description":  "หลักสูตร ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล — การผลิตสื่อดิจิทัล การวางแผน บรีฟ และออกแบบสตอรี่บอร์ด",
                                           "units":  [
                                                         {
                                                             "unitId":  "unit-01",
                                                             "unitNumber":  1,
                                                             "title":  "หลักการและประเภทของสื่อดิจิทัล",
                                                             "status":  "รอการยืนยัน",
                                                             "slideCount":  0,
                                                             "presentations":  [

                                                                               ]
                                                         },
                                                         {
                                                             "unitId":  "unit-02",
                                                             "unitNumber":  2,
                                                             "title":  "การวางแผนและออกแบบสื่อดิจิทัล",
                                                             "status":  "พร้อมใช้งาน",
                                                             "slideCount":  32,
                                                             "presentations":  [
                                                                                   {
                                                                                       "id":  "21910-2008-u02-html",
                                                                                       "title":  "สไลด์สื่อการสอน HTML Interactive",
                                                                                       "presentationType":  "html-interactive",
                                                                                       "slideCount":  32,
                                                                                       "entryPoint":  "courses/21910-2008/unit-02/html-presentation/index.html",
                                                                                       "features":  [
                                                                                                        "Interactive Quiz",
                                                                                                        "Interactive Glossary",
                                                                                                        "Before/After Slider",
                                                                                                        "Interactive Diagram",
                                                                                                        "Speaker Notes",
                                                                                                        "Presentation Timer",
                                                                                                        "PDF Export"
                                                                                                    ]
                                                                                   }
                                                                               ]
                                                         }
                                                     ]
                                       },
    "courses.json":  {
                         "courses":  [
                                         {
                                             "id":  "21910-1002",
                                             "code":  "21910-1002",
                                             "title":  "การวิเคราะห์ความต้องการทางธุรกิจ",
                                             "description":  "หลักสูตร ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล — การวิเคราะห์ความต้องการทางธุรกิจและการวิเคราะห์ข้อมูล",
                                             "path":  "courses/21910-1002/course.json",
                                             "status":  "พร้อมใช้งาน"
                                         },
                                         {
                                             "id":  "21910-1004",
                                             "code":  "21910-1004",
                                             "title":  "พาณิชย์อิเล็กทรอนิกส์เบื้องต้น",
                                             "description":  "หลักสูตร ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล — ความรู้พื้นฐานเกี่ยวกับพาณิชย์อิเล็กทรอนิกส์และแพลตฟอร์มการค้าออนไลน์",
                                             "path":  "courses/21910-1004/course.json",
                                             "status":  "พร้อมใช้งาน"
                                         },
                                         {
                                             "id":  "21910-2007",
                                             "code":  "21910-2007",
                                             "title":  "โปรแกรมกราฟิกเพื่อสร้างสื่อดิจิทัล",
                                             "description":  "หลักสูตร ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล — ความรู้พื้นฐานเกี่ยวกับภาพกราฟิกดิจิทัลและการเตรียมงานออกแบบ",
                                             "path":  "courses/21910-2007/course.json",
                                             "status":  "พร้อมใช้งาน"
                                         },
                                         {
                                             "id":  "21910-2008",
                                             "code":  "21910-2008",
                                             "title":  "การผลิตสื่อดิจิทัล",
                                             "description":  "หลักสูตร ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล — การผลิตสื่อดิจิทัล การวางแผน บรีฟ และออกแบบสตอรี่บอร์ด",
                                             "path":  "courses/21910-2008/course.json",
                                             "status":  "พร้อมใช้งาน"
                                         },
                                         {
                                             "id":  "21910-2016",
                                             "code":  "21910-2016",
                                             "title":  "การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล",
                                             "description":  "หลักสูตร ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล — ความรู้พื้นฐานเกี่ยวกับเว็บไซต์ โครงสร้างสถาปัตยกรรมเว็บ และธุรกิจดิจิทัล",
                                             "path":  "courses/21910-2016/course.json",
                                             "status":  "พร้อมใช้งาน"
                                         }
                                     ]
                     },
    "courses/21910-1004/course.json":  {
                                           "courseId":  "21910-1004",
                                           "courseName":  "พาณิชย์อิเล็กทรอนิกส์เบื้องต้น",
                                           "status":  "พร้อมใช้งาน",
                                           "description":  "หลักสูตร ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล — ความรู้พื้นฐานเกี่ยวกับพาณิชย์อิเล็กทรอนิกส์และแพลตฟอร์มการค้าออนไลน์",
                                           "units":  [
                                                         {
                                                             "unitId":  "unit-01",
                                                             "unitNumber":  1,
                                                             "title":  "ความรู้พื้นฐานและประเภทของพาณิชย์อิเล็กทรอนิกส์",
                                                             "status":  "พร้อมใช้งาน",
                                                             "slideCount":  32,
                                                             "presentations":  [
                                                                                   {
                                                                                       "id":  "21910-1004-u01-html",
                                                                                       "title":  "สไลด์สื่อการสอน HTML Interactive (ความรู้พื้นฐานและประเภทของพาณิชย์อิเล็กทรอนิกส์)",
                                                                                       "presentationType":  "html-interactive",
                                                                                       "slideCount":  32,
                                                                                       "entryPoint":  "courses/21910-1004/unit-01/html-presentation/index.html",
                                                                                       "features":  [
                                                                                                        "Interactive Quiz",
                                                                                                        "Interactive Glossary",
                                                                                                        "Before/After Slider",
                                                                                                        "Interactive Diagram",
                                                                                                        "Speaker Notes",
                                                                                                        "Presentation Timer",
                                                                                                        "PDF Export"
                                                                                                    ]
                                                                                   }
                                                                               ]
                                                         },
                                                         {
                                                             "unitId":  "unit-02",
                                                             "unitNumber":  2,
                                                             "title":  "กระบวนการซื้อขายและการทำธุรกรรมออนไลน์",
                                                             "status":  "พร้อมใช้งาน",
                                                             "slideCount":  32,
                                                             "presentations":  [
                                                                                   {
                                                                                       "id":  "21910-1004-u02-html",
                                                                                       "title":  "สไลด์สื่อการสอน HTML Interactive (กระบวนการซื้อขายและการทำธุรกรรมออนไลน์)",
                                                                                       "presentationType":  "html-interactive",
                                                                                       "slideCount":  32,
                                                                                       "entryPoint":  "courses/21910-1004/unit-02/html-presentation/index.html",
                                                                                       "features":  [
                                                                                                        "Universal Visual Zoom \u0026 Lightbox",
                                                                                                        "Interactive Buying Journey",
                                                                                                        "Shopping Cart Calculator",
                                                                                                        "OMS State Explorer",
                                                                                                        "Payment Gateway Simulation",
                                                                                                        "Interactive Quiz 10 ข้อ",
                                                                                                        "Speaker Notes"
                                                                                                    ]
                                                                                   }
                                                                               ]
                                                         }
                                                     ]
                                       }
};

async function safeFetchJson(url) {
    const resource = new URL(url, document.baseURI);
    const base = new URL('.', document.baseURI);
    const cleanUrl = decodeURI(resource.pathname.slice(base.pathname.length)).replace(/\\/g, '/');
    // Local files cannot be fetched by browsers. Use the bundled snapshot only there.
    if (resource.protocol === 'file:' && Object.prototype.hasOwnProperty.call(EMBEDDED_CATALOG_DATA, cleanUrl)) {
      return JSON.parse(JSON.stringify(EMBEDDED_CATALOG_DATA[cleanUrl]));
    }
    try {
      const resp = await fetch(resource.href, { cache: 'no-store' });
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return JSON.parse((await resp.text()).replace(/^\uFEFF/, ''));
    } catch (cause) {
      // HTTP failures must remain visible rather than silently using stale data.
      throw new Error('Cannot load JSON: ' + resource.href + ' (' + cause.message + ')', { cause });
    }
  }

  // Global State
  const state = {
    courses: [],
    currentCourse: null,
    currentUnit: null,
    currentPresentation: null,
    currentManifest: null,
    currentNotes: {},
    currentSlideIndex: 0, // 0-based
    viewMode: 'catalog', // 'catalog', 'course', 'viewer', 'presenter', 'audience', 'html-viewer'
    timer: {
      seconds: 0,
      interval: null,
      isRunning: false
    },
    syncChannel: null,
    searchQuery: '',
    statusFilter: 'all'
  };

  // Broadcast Channel for Dual-Window Synchronization
  if ('BroadcastChannel' in window) {
    try {
      state.syncChannel = new BroadcastChannel('teaching_presentation_sync');
      state.syncChannel.onmessage = handleSyncMessage;
    } catch (e) {
      console.warn('BroadcastChannel not supported, falling back to localStorage events', e);
    }
  }

  // LocalStorage storage event fallback for cross-window sync
  window.addEventListener('storage', (e) => {
    if (e.key === 'teaching_presentation_sync_event' && e.newValue) {
      try {
        const data = JSON.parse(e.newValue);
        handleSyncMessage({ data });
      } catch (err) {}
    }
  });

  function broadcastSlideChange(courseId, unitId, slideIndex) {
    const payload = {
      type: 'SLIDE_CHANGE',
      courseId,
      unitId,
      slideIndex,
      timestamp: Date.now()
    };
    if (state.syncChannel) {
      try { state.syncChannel.postMessage(payload); } catch (e) {}
    }
    // Also trigger localStorage for fallback
    try {
      localStorage.setItem('teaching_presentation_sync_event', JSON.stringify(payload));
    } catch (e) {}
  }

  function handleSyncMessage(event) {
    const data = event.data;
    if (!data || data.type !== 'SLIDE_CHANGE') return;
    
    // Only sync if in the same course & unit and in image viewer mode
    if (state.currentCourse && state.currentUnit &&
        state.currentCourse.id === data.courseId &&
        state.currentUnit.unitId === data.unitId &&
        (state.viewMode === 'viewer' || state.viewMode === 'presenter' || state.viewMode === 'audience')) {
      if (state.currentSlideIndex !== data.slideIndex) {
        goToSlide(data.slideIndex, false); // false = do not rebroadcast
      }
    }
  }

  // ---------------- DOM Element References ----------------
  const dom = {
    mainHeader: document.getElementById('main-header'),
    breadcrumbs: document.getElementById('breadcrumbs'),
    brandHomeBtn: document.getElementById('brand-home-btn'),
    searchInput: document.getElementById('course-search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    resultsCountText: document.getElementById('results-count-text'),
    
    // Stats
    statCourses: document.getElementById('stat-courses-count'),
    statUnits: document.getElementById('stat-units-count'),
    statHtml: document.getElementById('stat-html-count'),
    statSlides: document.getElementById('stat-slides-count'),

    // Views
    catalogView: document.getElementById('catalog-view'),
    courseView: document.getElementById('course-view'),
    viewerView: document.getElementById('viewer-view'),
    presenterView: document.getElementById('presenter-view'),
    audienceView: document.getElementById('audience-view'),
    htmlViewerView: document.getElementById('html-viewer-view'),

    // Catalog & Course Details
    coursesGrid: document.getElementById('courses-grid'),
    backToCatalogBtn: document.getElementById('back-to-catalog-btn'),
    courseDetailCode: document.getElementById('course-detail-code'),
    courseDetailTitle: document.getElementById('course-detail-title'),
    courseDetailDesc: document.getElementById('course-detail-desc'),
    courseUnitsCountBadge: document.getElementById('course-units-count-badge'),
    unitsList: document.getElementById('units-list'),

    // Presentation Viewer (Full-Image PNG)
    viewerExitBtn: document.getElementById('viewer-exit-btn'),
    viewerCourseId: document.getElementById('viewer-course-id'),
    viewerUnitTitle: document.getElementById('viewer-unit-title'),
    currentSlideNum: document.getElementById('current-slide-num'),
    totalSlidesNum: document.getElementById('total-slides-num'),
    navPrevBtn: document.getElementById('nav-prev-btn'),
    navNextBtn: document.getElementById('nav-next-btn'),
    navFirstBtn: document.getElementById('nav-first-btn'),
    navLastBtn: document.getElementById('nav-last-btn'),
    hotspotPrev: document.getElementById('hotspot-prev'),
    hotspotNext: document.getElementById('hotspot-next'),
    activeSlideImage: document.getElementById('active-slide-image'),
    slideProgressBar: document.getElementById('slide-progress-bar'),
    slideLoading: document.getElementById('slide-loading'),
    fullscreenToggleBtn: document.getElementById('fullscreen-toggle-btn'),
    exportPdfBtn: document.getElementById('export-pdf-btn'),

    // Timer
    timerText: document.getElementById('timer-text'),
    timerToggleBtn: document.getElementById('timer-toggle-btn'),
    timerResetBtn: document.getElementById('timer-reset-btn'),

    // Notes Drawer
    notesToggleBtn: document.getElementById('notes-toggle-btn'),
    notesDrawer: document.getElementById('notes-drawer'),
    notesCloseBtn: document.getElementById('notes-close-btn'),
    notesSlideId: document.getElementById('notes-slide-id'),
    notesSlideTitle: document.getElementById('notes-slide-title'),
    notesTextarea: document.getElementById('notes-textarea'),
    notesSaveIndicator: document.getElementById('notes-save-indicator'),
    notesResetBtn: document.getElementById('notes-reset-btn'),
    notesExportBtn: document.getElementById('notes-export-btn'),
    notesImportInput: document.getElementById('notes-import-input'),

    // Slide Organizer
    organizerToggleBtn: document.getElementById('organizer-toggle-btn'),
    organizerModal: document.getElementById('organizer-modal'),
    organizerCloseBtn: document.getElementById('organizer-close-btn'),
    organizerTotalBadge: document.getElementById('organizer-total-badge'),
    organizerGrid: document.getElementById('organizer-grid'),

    // Table of Contents
    tocToggleBtn: document.getElementById('toc-toggle-btn'),
    tocPopover: document.getElementById('toc-popover'),
    tocCloseBtn: document.getElementById('toc-close-btn'),
    tocList: document.getElementById('toc-list'),

    // Presenter Mode
    presenterModeBtn: document.getElementById('presenter-mode-btn'),
    presenterCloseBtn: document.getElementById('presenter-close-btn'),
    presenterOpenAudienceBtn: document.getElementById('presenter-open-audience-btn'),
    presenterCourseInfo: document.getElementById('presenter-course-info'),
    presenterTimerDisplay: document.getElementById('presenter-timer-display'),
    presenterTimerToggle: document.getElementById('presenter-timer-toggle'),
    presenterTimerReset: document.getElementById('presenter-timer-reset'),
    presenterCurrentIdx: document.getElementById('presenter-current-idx'),
    presenterCurrNum: document.getElementById('presenter-curr-num'),
    presenterTotalNum: document.getElementById('presenter-total-num'),
    presenterCurrentImg: document.getElementById('presenter-current-img'),
    presenterNextImg: document.getElementById('presenter-next-img'),
    presenterEndNotice: document.getElementById('presenter-end-notice'),
    presenterNotesTextarea: document.getElementById('presenter-notes-textarea'),
    presenterPrevBtn: document.getElementById('presenter-prev-btn'),
    presenterNextBtn: document.getElementById('presenter-next-btn'),

    // Audience View
    audienceSlideImg: document.getElementById('audience-slide-img'),

    // HTML Interactive Viewer View
    htmlViewerExitBtn: document.getElementById('html-viewer-exit-btn'),
    htmlViewerCourseBadge: document.getElementById('html-viewer-course-badge'),
    htmlViewerTitle: document.getElementById('html-viewer-title'),
    htmlViewerNewtabBtn: document.getElementById('html-viewer-newtab-btn'),
    htmlViewerFullscreenBtn: document.getElementById('html-viewer-fullscreen-btn'),
    htmlPresentationFrame: document.getElementById('html-presentation-frame'),

    // Print
    printContainer: document.getElementById('print-container')
  };

  // ---------------- Application Initialization ----------------
  async function initApp() {
    setupEventListeners();

    // Show protocol indicator if running on file://
    if (window.location.protocol === 'file:') {
      const notice = document.createElement('div');
      notice.className = 'file-protocol-notice';
      notice.innerHTML = '<span>💡 เปิดไฟล์ในโหมดออฟไลน์ หากต้องการข้อมูลล่าสุด เปิด <a href="http://localhost:8080/">http://localhost:8080/</a></span>';
      const hero = document.querySelector('.section-hero');
      if (hero && hero.parentNode) {
        hero.parentNode.insertBefore(notice, hero);
      }
    }

    await loadCoursesCatalog();
    handleUrlRouting();
  }

  // ---------------- Data Loading ----------------
  async function loadCoursesCatalog() {
    try {
      const data = await safeFetchJson('courses.json');
      state.courses = data.courses || [];

      // Fetch detail for each course to calculate accurate stats
      let totalUnits = 0;
      let totalHtmlDecks = 0;
      let totalPngSlides = 0;

      for (const c of state.courses) {
        try {
          const cData = await safeFetchJson(c.path);
            c.details = cData;
            const units = cData.units || [];
            totalUnits += units.length;

            for (const u of units) {
              const presentations = u.presentations || [];
              if (presentations.length > 0) {
                for (const p of presentations) {
                  if (p.presentationType === 'html-interactive') {
                    totalHtmlDecks++;
                  } else if (p.presentationType === 'image-slides') {
                    totalPngSlides += (p.slideCount || 0);
                  }
                }
              } else if (u.slideCount && (u.status || '').includes('พร้อมใช้งาน')) {
                totalPngSlides += u.slideCount;
              }
            }
        } catch (e) {
          console.warn(`Could not load details for course ${c.id}`, e);
        }
      }

      // Update Header Stats
      dom.statCourses.textContent = state.courses.length;
      dom.statUnits.textContent = totalUnits;
      dom.statHtml.textContent = totalHtmlDecks;
      dom.statSlides.textContent = totalPngSlides;

      renderCoursesCatalog();
    } catch (err) {
      console.error('Failed to load courses catalog:', err);
      dom.coursesGrid.innerHTML = `
        <div class="error-box">
          <p>⚠️ ไม่สามารถโหลดข้อมูลรายวิชาได้ (โปรดตรวจสอบไฟล์ courses.json)</p>
        </div>
      `;
    }
  }

  // ---------------- Catalog Rendering ----------------
  function renderCoursesCatalog() {
    dom.coursesGrid.innerHTML = '';

    const query = state.searchQuery.toLowerCase().trim();
    const filter = state.statusFilter;

    const filtered = state.courses.filter(course => {
      const matchesSearch = !query ||
        course.id.toLowerCase().includes(query) ||
        (course.code && course.code.toLowerCase().includes(query)) ||
        (course.title && course.title.toLowerCase().includes(query)) ||
        (course.description && course.description.toLowerCase().includes(query));

      const isReady = (course.status || '').includes('พร้อมใช้งาน');
      const matchesFilter = filter === 'all' ||
        (filter === 'ready' && isReady) ||
        (filter === 'pending' && !isReady);

      return matchesSearch && matchesFilter;
    });

    dom.resultsCountText.textContent = `แสดง ${filtered.length} จาก ${state.courses.length} รายวิชา`;

    if (filtered.length === 0) {
      dom.coursesGrid.innerHTML = `
        <div class="empty-results-box" style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">🔍 ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
          <p style="font-size: 0.9rem;">ลองเปลี่ยนคำค้นหาหรือตัวกรองสถานะ</p>
        </div>
      `;
      return;
    }

    const pastelVariants = ['pastel-sky', 'pastel-mint', 'pastel-pink', 'pastel-yellow', 'pastel-lavender'];

    filtered.forEach((course, index) => {
      const details = course.details || {};
      const units = details.units || [];
      const isReady = (course.status || '').includes('พร้อมใช้งาน');

      let htmlDecks = 0;
      let pngSlides = 0;

      units.forEach(u => {
        (u.presentations || []).forEach(p => {
          if (p.presentationType === 'html-interactive') htmlDecks++;
          else if (p.presentationType === 'image-slides') pngSlides += (p.slideCount || 0);
        });
      });

      const mediaSummaryParts = [];
      if (htmlDecks > 0) mediaSummaryParts.push(`🖥️ HTML ${htmlDecks} ชุด`);
      if (pngSlides > 0) mediaSummaryParts.push(`🖼️ PNG ${pngSlides} สไลด์`);
      const mediaSummary = mediaSummaryParts.length > 0 ? mediaSummaryParts.join(' • ') : '⏳ รอการนำเข้าสื่อ';

      const pastelClass = pastelVariants[index % pastelVariants.length];
      const card = document.createElement('div');
      card.className = `course-card ${pastelClass}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      card.innerHTML = `
        <div class="card-inner-top">
          <div class="card-top">
            <span class="course-code-pill">${escapeHtml(course.code || course.id)}</span>
            <span class="status-badge ${isReady ? 'ready' : 'pending'}">${escapeHtml(course.status || 'พร้อมใช้งาน')}</span>
          </div>
          <h3 class="course-title">${escapeHtml(course.title)}</h3>
          <p class="course-desc">${escapeHtml(course.description || 'ไม่มีคำอธิบาย')}</p>
        </div>
        <div class="card-footer">
          <span class="card-meta-text">📁 ${units.length} หน่วย (${mediaSummary})</span>
          <span class="card-action-text">เข้าสู่รายวิชา →</span>
        </div>
      `;

      card.addEventListener('click', () => selectCourse(course.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectCourse(course.id);
        }
      });

      dom.coursesGrid.appendChild(card);
    });
  }

  // ---------------- Course Detail & Units ----------------
  async function selectCourse(courseId) {
    const course = state.courses.find(c => c.id === courseId);
    if (!course) return;

    state.currentCourse = course;

    // Load full course details if not present
    if (!course.details) {
      try {
        course.details = await safeFetchJson(course.path);
      } catch (e) {
        console.error('Error fetching course details', e);
      }
    }

    dom.courseDetailCode.textContent = course.code || course.id;
    dom.courseDetailTitle.textContent = course.title;
    dom.courseDetailDesc.textContent = course.description || '';

    const units = (course.details && course.details.units) || [];
    dom.courseUnitsCountBadge.textContent = `${units.length} หน่วย`;

    renderUnitsList(units);
    switchView('course');
    updateBreadcrumbs([
      { label: 'คลังสื่อการสอน', action: () => switchView('catalog') },
      { label: course.code || course.id, active: true }
    ]);

    window.location.hash = `#course=${course.id}`;
  }

  function renderUnitsList(units) {
    dom.unitsList.innerHTML = '';

    if (units.length === 0) {
      dom.unitsList.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 2rem; text-align: center; color: var(--text-muted); background: var(--bg-secondary); border-radius: var(--radius-md);">
          ยังไม่มีข้อมูลหน่วยการเรียนรู้ในรายวิชานี้
        </div>
      `;
      return;
    }

    units.forEach(unit => {
      const card = document.createElement('div');
      card.className = 'unit-card';
      const isReady = (unit.status || '').includes('พร้อมใช้งาน');
      const presentations = unit.presentations || [];

      // Check for real thumbnail image
      let thumbnailHtml = '';
      const imagePres = presentations.find(p => p.presentationType === 'image-slides');
      if (unit.thumbnail) {
        thumbnailHtml = `
          <div class="unit-thumbnail-wrapper">
            <img class="unit-thumbnail-img" src="${escapeHtml(unit.thumbnail)}" alt="Thumbnail ${escapeHtml(unit.title)}" onerror="this.parentElement.style.display='none'">
          </div>
        `;
      } else if (imagePres) {
        const firstSlideUrl = `courses/${state.currentCourse.id}/${unit.unitId}/slides/slide-01.png`;
        thumbnailHtml = `
          <div class="unit-thumbnail-wrapper">
            <img class="unit-thumbnail-img" src="${firstSlideUrl}" alt="Thumbnail ${escapeHtml(unit.title)}" onerror="this.parentElement.style.display='none'">
            <span class="unit-thumb-badge">🖼️ ภาพสไลด์จริง 16:9</span>
          </div>
        `;
      }

      // Build presentations container
      let presentationsHtml = '';
      if (presentations.length > 0) {
        presentations.forEach(p => {
          const isHtml = p.presentationType === 'html-interactive';
          const icon = isHtml ? '🖥️' : '🖼️';
          const typeClass = isHtml ? 'html-type' : 'image-type';
          const typeLabel = isHtml ? 'HTML Interactive' : 'Full-Image PNG';
          const featureTags = (p.features || []).slice(0, 4).map(f => `<span class="feature-tag">${escapeHtml(f)}</span>`).join('');

          presentationsHtml += `
            <div class="presentation-card-item ${typeClass}-border">
              <div class="presentation-card-header">
                <span class="presentation-title-text">${icon} ${escapeHtml(p.title)}</span>
                <span class="type-pill ${typeClass}">${typeLabel} (${p.slideCount || 0} สไลด์)</span>
              </div>
              ${featureTags ? `<div class="presentation-card-features">${featureTags}</div>` : ''}
              <button class="btn ${isHtml ? 'btn-primary' : 'btn-secondary'} btn-sm presentation-launch-btn" data-pres-id="${p.id}" data-pres-type="${p.presentationType}" data-entry="${p.entryPoint || ''}">
                ${isHtml ? '🚀 เปิดสไลด์ HTML Interactive' : '▶️ เปิดสไลด์ภาพ PNG'}
              </button>
            </div>
          `;
        });
      } else {
        // Fallback for empty units
        presentationsHtml = `
          <div class="unit-empty-notice">
            ⏳ ยังไม่มีชุดสื่อการสอนในหน่วยนี้ (รอการยืนยันและนำเข้าข้อมูล)
          </div>
        `;
      }

      card.innerHTML = `
        <div class="unit-card-header-area">
          ${thumbnailHtml}
          <div class="unit-top">
            <span class="unit-num-badge">หน่วยที่ ${unit.unitNumber || 1}</span>
            <span class="status-badge ${isReady ? 'ready' : 'pending'}">${escapeHtml(unit.status || 'พร้อมใช้งาน')}</span>
          </div>
          <h4 class="unit-title">${escapeHtml(unit.title)}</h4>
          <div class="unit-meta-info">
            <span>🆔 ${unit.unitId}</span>
            <span>📦 ${presentations.length} ชุดสื่อ</span>
            <span>📊 ${unit.slideCount || 0} สไลด์</span>
          </div>
        </div>
        <div class="unit-presentations-container">
          ${presentationsHtml}
        </div>
      `;

      // Attach event listeners to presentation buttons
      card.querySelectorAll('.presentation-launch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const presId = btn.dataset.presId;
          const presType = btn.dataset.presType;
          const entryPoint = btn.dataset.entry;

          if (presType === 'html-interactive') {
            launchHtmlPresentation(state.currentCourse.id, unit.unitId, presId, entryPoint);
          } else {
            launchPresentation(state.currentCourse.id, unit.unitId, 0, 'viewer');
          }
        });
      });

      dom.unitsList.appendChild(card);
    });
  }

  // ---------------- HTML Interactive Presentation Launcher ----------------
  function launchHtmlPresentation(courseId, unitId, presId, entryPoint) {
    const course = state.courses.find(c => c.id === courseId);
    if (!course) return;
    state.currentCourse = course;

    const unit = (course.details && course.details.units || []).find(u => u.unitId === unitId);
    if (!unit) return;
    state.currentUnit = unit;

    const pres = (unit.presentations || []).find(p => p.id === presId) || {
      title: 'สไลด์สื่อการสอน HTML Interactive',
      entryPoint: entryPoint
    };
    state.currentPresentation = pres;

    // Setup iframe src
    const targetUrl = pres.entryPoint || entryPoint;
    dom.htmlPresentationFrame.src = targetUrl;

    // Setup Topbar
    dom.htmlViewerCourseBadge.textContent = course.code || course.id;
    dom.htmlViewerTitle.textContent = `${unit.title || unit.unitId} — ${pres.title}`;

    // Setup New Tab button
    dom.htmlViewerNewtabBtn.onclick = () => {
      window.open(targetUrl, '_blank');
    };

    // Setup Fullscreen
    dom.htmlViewerFullscreenBtn.onclick = () => {
      if (!document.fullscreenElement) {
        dom.htmlPresentationFrame.requestFullscreen().catch(() => {
          document.documentElement.requestFullscreen().catch(() => {});
        });
      } else {
        document.exitFullscreen().catch(() => {});
      }
    };

    switchView('html-viewer');
    window.location.hash = `#course=${courseId}&unit=${unitId}&pres=${presId}`;
  }

  // ---------------- Central Presentation Viewer (Full-Image PNG) ----------------
  async function launchPresentation(courseId, unitId, slideIndex = 0, targetView = 'viewer') {
    const course = state.courses.find(c => c.id === courseId);
    if (!course) return;
    state.currentCourse = course;

    // Load course details if needed
    if (!course.details) {
      course.details = await safeFetchJson(course.path);
    }

    const unit = (course.details.units || []).find(u => u.unitId === unitId);
    if (!unit) {
      alert(`ไม่พบหน่วยการเรียนรู้ ${unitId}`);
      return;
    }
    state.currentUnit = unit;

    // Load slides-manifest.json using RELATIVE PATH strictly inside this course & unit
    const manifestPath = `courses/${courseId}/${unitId}/slides-manifest.json`;
    try {
      state.currentManifest = await safeFetchJson(manifestPath);
    } catch (err) {
      console.error('Error loading slides manifest:', err);
      alert('ไม่สามารถโหลดรายการสไลด์ภาพประจำหน่วยได้');
      return;
    }

    // Load speaker-notes.json using RELATIVE PATH strictly inside this course & unit
    const notesPath = `courses/${courseId}/${unitId}/speaker-notes.json`;
    state.currentNotes = {};
    try {
      const nData = await safeFetchJson(notesPath);
      (nData.notes || []).forEach(item => {
        state.currentNotes[item.slideId] = item;
      });
    } catch (e) {
      console.warn('No speaker notes found or failed to load', e);
    }

    // Setup Viewer UI
    dom.viewerCourseId.textContent = course.code || course.id;
    dom.viewerUnitTitle.textContent = unit.title || unit.unitId;
    dom.totalSlidesNum.textContent = state.currentManifest.slides.length;
    dom.organizerTotalBadge.textContent = `${state.currentManifest.slides.length} สไลด์`;

    // Render Table of Contents & Organizer Thumbnails
    renderTableOfContents();
    renderSlideOrganizer();

    // Switch View
    switchView(targetView);

    // Go to requested slide index
    goToSlide(slideIndex, true);

    // Start presentation timer if not running
    if (!state.timer.isRunning) {
      startTimer();
    }

    // Update URL hash
    window.location.hash = `#course=${courseId}&unit=${unitId}&pres=png&slide=${slideIndex + 1}`;
  }

  function goToSlide(index, shouldBroadcast = true) {
    if (!state.currentManifest || !state.currentManifest.slides) return;
    const slides = state.currentManifest.slides;
    if (slides.length === 0) return;

    // Clamp index
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;

    state.currentSlideIndex = index;
    const currentSlide = slides[index];

    // Compute relative image path strictly: courses/[courseId]/[unitId]/slides/[fileName]
    const imageRelativePath = `courses/${state.currentCourse.id}/${state.currentUnit.unitId}/${currentSlide.path || ('slides/' + currentSlide.fileName)}`;

    // Update Stage Image
    dom.slideLoading.style.display = 'flex';
    dom.activeSlideImage.onload = () => {
      dom.slideLoading.style.display = 'none';
    };
    dom.activeSlideImage.src = imageRelativePath;

    // Update Counter & Progress Bar
    const slideNum = index + 1;
    const total = slides.length;
    dom.currentSlideNum.textContent = slideNum;
    dom.slideProgressBar.style.width = `${(slideNum / total) * 100}%`;

    // Update Nav Buttons State
    dom.navPrevBtn.disabled = index === 0;
    dom.navNextBtn.disabled = index === total - 1;
    dom.navFirstBtn.disabled = index === 0;
    dom.navLastBtn.disabled = index === total - 1;

    // Update Speaker Notes Drawer
    updateSpeakerNotesUI(currentSlide);

    // Update Table of Contents Active Marker
    updateTocActive(index);

    // Update Organizer Active Marker
    updateOrganizerActive(index);

    // Update Presenter Mode view if active
    updatePresenterModeUI(index);

    // Update Audience view if active
    if (dom.audienceSlideImg) {
      dom.audienceSlideImg.src = imageRelativePath;
    }

    // Broadcast change to other windows if needed
    if (shouldBroadcast) {
      broadcastSlideChange(state.currentCourse.id, state.currentUnit.unitId, index);
      window.location.hash = `#course=${state.currentCourse.id}&unit=${state.currentUnit.unitId}&pres=png&slide=${slideNum}`;
    }
  }

  function nextSlide() {
    if (state.currentSlideIndex < (state.currentManifest.slides.length - 1)) {
      goToSlide(state.currentSlideIndex + 1);
    }
  }

  function prevSlide() {
    if (state.currentSlideIndex > 0) {
      goToSlide(state.currentSlideIndex - 1);
    }
  }

  // ---------------- Speaker Notes Management (Image Viewer) ----------------
  function getStorageNoteKey(slideId) {
    return `teaching_notes_${state.currentCourse.id}_${state.currentUnit.unitId}_${slideId}`;
  }

  function updateSpeakerNotesUI(slide) {
    if (!slide) return;
    const slideId = slide.id;
    dom.notesSlideId.textContent = `Slide: ${slideId}`;

    const defaultNote = state.currentNotes[slideId] || {};
    dom.notesSlideTitle.textContent = defaultNote.title || `สไลด์ที่ ${slide.order || (state.currentSlideIndex + 1)}`;

    const savedCustomNote = localStorage.getItem(getStorageNoteKey(slideId));
    if (savedCustomNote !== null) {
      dom.notesTextarea.value = savedCustomNote;
      dom.notesSaveIndicator.textContent = '💾 โหลดจากบันทึกส่วนตัว';
    } else {
      dom.notesTextarea.value = defaultNote.content || '';
      dom.notesSaveIndicator.textContent = '📄 ข้อมูลต้นฉบับ';
    }
  }

  function saveCurrentSlideNote() {
    if (!state.currentManifest || !state.currentManifest.slides) return;
    const currentSlide = state.currentManifest.slides[state.currentSlideIndex];
    if (!currentSlide) return;

    const key = getStorageNoteKey(currentSlide.id);
    const text = dom.notesTextarea.value;
    localStorage.setItem(key, text);

    dom.notesSaveIndicator.textContent = '💾 บันทึกอัตโนมัติแล้ว';

    if (dom.presenterNotesTextarea) {
      dom.presenterNotesTextarea.value = text;
    }
  }

  function resetCurrentSlideNote() {
    if (!state.currentManifest || !state.currentManifest.slides) return;
    const currentSlide = state.currentManifest.slides[state.currentSlideIndex];
    if (!currentSlide) return;

    if (!confirm('ต้องการคืนค่าคำบรรยายเริ่มต้นของสไลด์นี้หรือไม่?')) return;

    const key = getStorageNoteKey(currentSlide.id);
    localStorage.removeItem(key);

    const defaultNote = state.currentNotes[currentSlide.id] || {};
    dom.notesTextarea.value = defaultNote.content || '';
    dom.notesSaveIndicator.textContent = '↺ คืนค่าเดิมเรียบร้อย';

    if (dom.presenterNotesTextarea) {
      dom.presenterNotesTextarea.value = dom.notesTextarea.value;
    }
  }

  function exportSpeakerNotes() {
    if (!state.currentCourse || !state.currentUnit || !state.currentManifest) return;

    const exportData = {
      courseId: state.currentCourse.id,
      unitId: state.currentUnit.unitId,
      exportedAt: new Date().toISOString(),
      notes: []
    };

    state.currentManifest.slides.forEach((slide, idx) => {
      const key = getStorageNoteKey(slide.id);
      const customContent = localStorage.getItem(key);
      const defaultNote = state.currentNotes[slide.id] || {};

      exportData.notes.push({
        slideId: slide.id,
        slideOrder: idx + 1,
        title: defaultNote.title || `สไลด์ที่ ${idx + 1}`,
        content: customContent !== null ? customContent : (defaultNote.content || '')
      });
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `speaker-notes-${state.currentCourse.id}-${state.currentUnit.unitId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function importSpeakerNotes(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (!data.notes || !Array.isArray(data.notes)) {
          throw new Error('รูปแบบไฟล์ไม่ถูกต้อง (ต้องมีรายการ notes)');
        }

        data.notes.forEach(item => {
          if (item.slideId && item.content !== undefined) {
            const key = getStorageNoteKey(item.slideId);
            localStorage.setItem(key, item.content);
          }
        });

        alert(`นำเข้าคำบรรยายสำเร็จ (${data.notes.length} รายการ)`);
        const currentSlide = state.currentManifest.slides[state.currentSlideIndex];
        updateSpeakerNotesUI(currentSlide);
      } catch (err) {
        alert('เกิดข้อผิดพลาดในการนำเข้าไฟล์: ' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  // ---------------- Slide Organizer & Table of Contents ----------------
  function renderSlideOrganizer() {
    dom.organizerGrid.innerHTML = '';
    const slides = state.currentManifest.slides;

    slides.forEach((slide, idx) => {
      const card = document.createElement('div');
      card.className = `organizer-card ${idx === state.currentSlideIndex ? 'active' : ''}`;
      card.dataset.index = idx;

      const imgPath = `courses/${state.currentCourse.id}/${state.currentUnit.unitId}/${slide.path || ('slides/' + slide.fileName)}`;
      const note = state.currentNotes[slide.id] || {};

      card.innerHTML = `
        <div class="organizer-thumb-aspect">
          <img class="organizer-thumb-img" src="${imgPath}" alt="Slide ${idx + 1}" loading="lazy">
        </div>
        <div class="organizer-card-meta">
          <span class="organizer-slide-index">สไลด์ ${idx + 1}</span>
          <span style="color:var(--text-muted); font-size:0.75rem;">${escapeHtml(note.title || '')}</span>
        </div>
      `;

      card.addEventListener('click', () => {
        goToSlide(idx);
        dom.organizerModal.style.display = 'none';
      });

      dom.organizerGrid.appendChild(card);
    });
  }

  function updateOrganizerActive(index) {
    const cards = dom.organizerGrid.querySelectorAll('.organizer-card');
    cards.forEach((card, idx) => {
      card.classList.toggle('active', idx === index);
    });
  }

  function renderTableOfContents() {
    dom.tocList.innerHTML = '';
    const slides = state.currentManifest.slides;

    slides.forEach((slide, idx) => {
      const item = document.createElement('div');
      item.className = `toc-item ${idx === state.currentSlideIndex ? 'active' : ''}`;
      const note = state.currentNotes[slide.id] || {};

      item.innerHTML = `
        <span class="toc-item-num">${idx + 1}</span>
        <span class="toc-item-title">${escapeHtml(note.title || slide.fileName)}</span>
      `;

      item.addEventListener('click', () => {
        goToSlide(idx);
        dom.tocPopover.style.display = 'none';
      });

      dom.tocList.appendChild(item);
    });
  }

  function updateTocActive(index) {
    const items = dom.tocList.querySelectorAll('.toc-item');
    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === index);
    });
  }

  // ---------------- Presenter Mode (Dual-Window) ----------------
  function updatePresenterModeUI(index) {
    if (!state.currentManifest || !state.currentManifest.slides) return;
    const slides = state.currentManifest.slides;
    const currentSlide = slides[index];
    const total = slides.length;

    dom.presenterCourseInfo.textContent = `${state.currentCourse.code || state.currentCourse.id} | ${state.currentUnit.title || state.currentUnit.unitId}`;
    dom.presenterCurrentIdx.textContent = `${index + 1}/${total}`;
    dom.presenterCurrNum.textContent = index + 1;
    dom.presenterTotalNum.textContent = total;

    // Current Slide Image
    const curPath = `courses/${state.currentCourse.id}/${state.currentUnit.unitId}/${currentSlide.path || ('slides/' + currentSlide.fileName)}`;
    dom.presenterCurrentImg.src = curPath;

    // Next Slide Preview
    if (index < total - 1) {
      const nextSlide = slides[index + 1];
      const nextPath = `courses/${state.currentCourse.id}/${state.currentUnit.unitId}/${nextSlide.path || ('slides/' + nextSlide.fileName)}`;
      dom.presenterNextImg.src = nextPath;
      dom.presenterNextImg.style.display = 'block';
      dom.presenterEndNotice.style.display = 'none';
    } else {
      dom.presenterNextImg.style.display = 'none';
      dom.presenterEndNotice.style.display = 'block';
    }

    // Notes in Presenter Window
    const savedCustomNote = localStorage.getItem(getStorageNoteKey(currentSlide.id));
    const defaultNote = state.currentNotes[currentSlide.id] || {};
    dom.presenterNotesTextarea.value = savedCustomNote !== null ? savedCustomNote : (defaultNote.content || '');

    // Nav buttons
    dom.presenterPrevBtn.disabled = index === 0;
    dom.presenterNextBtn.disabled = index === total - 1;
  }

  function openAudienceWindow() {
    if (!state.currentCourse || !state.currentUnit) return;
    const url = `${window.location.origin}${window.location.pathname}?mode=audience#course=${state.currentCourse.id}&unit=${state.currentUnit.unitId}&slide=${state.currentSlideIndex + 1}`;
    window.open(url, 'TeachingSlidesAudience', 'width=1280,height=720,menubar=no,toolbar=no');
  }

  // ---------------- Presentation Timer ----------------
  function startTimer() {
    if (state.timer.isRunning) return;
    state.timer.isRunning = true;
    dom.timerToggleBtn.textContent = '⏸';
    dom.presenterTimerToggle.textContent = 'หยุด';

    state.timer.interval = setInterval(() => {
      state.timer.seconds++;
      updateTimerDisplay();
    }, 1000);
  }

  function pauseTimer() {
    state.timer.isRunning = false;
    dom.timerToggleBtn.textContent = '▶';
    dom.presenterTimerToggle.textContent = 'เริ่ม';
    clearInterval(state.timer.interval);
  }

  function resetTimer() {
    pauseTimer();
    state.timer.seconds = 0;
    updateTimerDisplay();
  }

  function toggleTimer() {
    if (state.timer.isRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  }

  function updateTimerDisplay() {
    const s = state.timer.seconds;
    const hrs = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;

    const formattedShort = `${padZero(mins)}:${padZero(secs)}`;
    const formattedLong = `${padZero(hrs)}:${padZero(mins)}:${padZero(secs)}`;

    dom.timerText.textContent = formattedShort;
    dom.presenterTimerDisplay.textContent = formattedLong;
  }

  function padZero(num) {
    return num.toString().padStart(2, '0');
  }

  // ---------------- High-Res Multi-Page PDF Export ----------------
  function exportToPdf() {
    if (!state.currentManifest || !state.currentManifest.slides) {
      alert('ไม่พบข้อมูลสไลด์สำหรับส่งออกเป็น PDF');
      return;
    }

    const slides = state.currentManifest.slides;
    dom.printContainer.innerHTML = '';

    slides.forEach((slide, idx) => {
      const page = document.createElement('div');
      page.className = 'print-page';
      const img = document.createElement('img');
      img.src = `courses/${state.currentCourse.id}/${state.currentUnit.unitId}/${slide.path || ('slides/' + slide.fileName)}`;
      img.alt = `Slide ${idx + 1}`;
      page.appendChild(img);
      dom.printContainer.appendChild(page);
    });

    setTimeout(() => {
      window.print();
    }, 400);
  }

  // ---------------- View Switching & Breadcrumbs ----------------
  function switchView(viewName) {
    state.viewMode = viewName;

    dom.catalogView.style.display = viewName === 'catalog' ? 'block' : 'none';
    dom.courseView.style.display = viewName === 'course' ? 'block' : 'none';
    dom.viewerView.style.display = viewName === 'viewer' ? 'flex' : 'none';
    dom.presenterView.style.display = viewName === 'presenter' ? 'flex' : 'none';
    dom.audienceView.style.display = viewName === 'audience' ? 'flex' : 'none';
    dom.htmlViewerView.style.display = viewName === 'html-viewer' ? 'flex' : 'none';

    // Show/hide main header
    dom.mainHeader.style.display = (viewName === 'catalog' || viewName === 'course') ? 'block' : 'none';

    if (viewName === 'catalog') {
      updateBreadcrumbs([
        { label: 'คลังสื่อการสอน', active: true }
      ]);
      window.location.hash = '';
    }
  }

  function updateBreadcrumbs(items) {
    dom.breadcrumbs.innerHTML = '';
    items.forEach((item, idx) => {
      if (idx > 0) {
        const sep = document.createElement('span');
        sep.className = 'breadcrumb-sep';
        sep.textContent = '/';
        dom.breadcrumbs.appendChild(sep);
      }

      const el = document.createElement('span');
      el.className = `breadcrumb-item ${item.active ? 'active' : ''}`;
      el.textContent = item.label;
      if (item.action && !item.active) {
        el.addEventListener('click', item.action);
      }
      dom.breadcrumbs.appendChild(el);
    });
  }

  // ---------------- URL Hash & Query Parameters Routing ----------------
  function handleUrlRouting() {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode'); // 'presenter' or 'audience'

    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);

    const courseId = params.get('course');
    const unitId = params.get('unit');
    const presId = params.get('pres');
    const slideParam = parseInt(params.get('slide'), 10);
    const slideIndex = isNaN(slideParam) ? 0 : Math.max(0, slideParam - 1);

    if (courseId && unitId && presId) {
      if (presId.includes('-html')) {
        const course = state.courses.find(c => c.id === courseId);
        if (course && course.details) {
          const unit = (course.details.units || []).find(u => u.unitId === unitId);
          const pres = (unit && unit.presentations || []).find(p => p.id === presId);
          if (pres) {
            launchHtmlPresentation(courseId, unitId, presId, pres.entryPoint);
            return;
          }
        }
      }
      const target = mode === 'audience' ? 'audience' : (mode === 'presenter' ? 'presenter' : 'viewer');
      launchPresentation(courseId, unitId, slideIndex, target);
    } else if (courseId && unitId) {
      const target = mode === 'audience' ? 'audience' : (mode === 'presenter' ? 'presenter' : 'viewer');
      launchPresentation(courseId, unitId, slideIndex, target);
    } else if (courseId) {
      selectCourse(courseId);
    } else {
      switchView('catalog');
    }
  }

  // ---------------- Event Listeners & Keyboard Navigation ----------------
  function setupEventListeners() {
    // Brand Logo & Breadcrumb Home
    dom.brandHomeBtn.addEventListener('click', () => switchView('catalog'));
    dom.backToCatalogBtn.addEventListener('click', () => switchView('catalog'));
    
    // Viewer Exit Buttons
    dom.viewerExitBtn.addEventListener('click', () => {
      if (state.currentCourse) {
        selectCourse(state.currentCourse.id);
      } else {
        switchView('catalog');
      }
    });

    dom.htmlViewerExitBtn.addEventListener('click', () => {
      dom.htmlPresentationFrame.src = '';
      if (state.currentCourse) {
        selectCourse(state.currentCourse.id);
      } else {
        switchView('catalog');
      }
    });

    // Search Box
    dom.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      dom.searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
      renderCoursesCatalog();
    });

    dom.searchClearBtn.addEventListener('click', () => {
      dom.searchInput.value = '';
      state.searchQuery = '';
      dom.searchClearBtn.style.display = 'none';
      renderCoursesCatalog();
    });

    // Status Filters
    dom.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.statusFilter = btn.dataset.filter;
        renderCoursesCatalog();
      });
    });

    // Viewer Navigation Buttons
    dom.navNextBtn.addEventListener('click', nextSlide);
    dom.navPrevBtn.addEventListener('click', prevSlide);
    dom.navFirstBtn.addEventListener('click', () => goToSlide(0));
    dom.navLastBtn.addEventListener('click', () => goToSlide(state.currentManifest.slides.length - 1));

    // Hotspots
    dom.hotspotNext.addEventListener('click', nextSlide);
    dom.hotspotPrev.addEventListener('click', prevSlide);

    // Fullscreen Toggle
    dom.fullscreenToggleBtn.addEventListener('click', toggleFullscreen);

    // PDF Export
    dom.exportPdfBtn.addEventListener('click', exportToPdf);

    // Timer Controls
    dom.timerToggleBtn.addEventListener('click', toggleTimer);
    dom.timerResetBtn.addEventListener('click', resetTimer);

    // Notes Drawer
    dom.notesToggleBtn.addEventListener('click', () => {
      dom.notesDrawer.classList.toggle('open');
    });
    dom.notesCloseBtn.addEventListener('click', () => {
      dom.notesDrawer.classList.remove('open');
    });
    dom.notesTextarea.addEventListener('input', saveCurrentSlideNote);
    dom.notesResetBtn.addEventListener('click', resetCurrentSlideNote);
    dom.notesExportBtn.addEventListener('click', exportSpeakerNotes);
    dom.notesImportInput.addEventListener('change', importSpeakerNotes);

    // Organizer Modal
    dom.organizerToggleBtn.addEventListener('click', () => {
      dom.organizerModal.style.display = 'flex';
    });
    dom.organizerCloseBtn.addEventListener('click', () => {
      dom.organizerModal.style.display = 'none';
    });
    dom.organizerModal.addEventListener('click', (e) => {
      if (e.target === dom.organizerModal) {
        dom.organizerModal.style.display = 'none';
      }
    });

    // Table of Contents Popover
    dom.tocToggleBtn.addEventListener('click', () => {
      const isVisible = dom.tocPopover.style.display === 'block';
      dom.tocPopover.style.display = isVisible ? 'none' : 'block';
    });
    dom.tocCloseBtn.addEventListener('click', () => {
      dom.tocPopover.style.display = 'none';
    });

    // Presenter Mode Buttons
    dom.presenterModeBtn.addEventListener('click', () => {
      switchView('presenter');
      goToSlide(state.currentSlideIndex);
    });
    dom.presenterCloseBtn.addEventListener('click', () => {
      switchView('viewer');
      goToSlide(state.currentSlideIndex);
    });
    dom.presenterOpenAudienceBtn.addEventListener('click', openAudienceWindow);

    dom.presenterPrevBtn.addEventListener('click', prevSlide);
    dom.presenterNextBtn.addEventListener('click', nextSlide);
    dom.presenterTimerToggle.addEventListener('click', toggleTimer);
    dom.presenterTimerReset.addEventListener('click', resetTimer);
    dom.presenterNotesTextarea.addEventListener('input', (e) => {
      dom.notesTextarea.value = e.target.value;
      saveCurrentSlideNote();
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', handleKeyNavigation);

    // Window PopState / Hash Change
    window.addEventListener('hashchange', handleUrlRouting);
  }

  function handleKeyNavigation(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      if (e.key === 'Escape') {
        e.target.blur();
      }
      return;
    }

    if (state.viewMode === 'html-viewer') {
      if (e.key === 'Escape') {
        e.preventDefault();
        dom.htmlPresentationFrame.src = '';
        if (state.currentCourse) {
          selectCourse(state.currentCourse.id);
        } else {
          switchView('catalog');
        }
      }
      return;
    }

    if (state.viewMode !== 'viewer' && state.viewMode !== 'presenter' && state.viewMode !== 'audience') {
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
      case 'n':
      case 'N':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
      case 'Backspace':
      case 'p':
        e.preventDefault();
        prevSlide();
        break;

      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;

      case 'End':
        e.preventDefault();
        if (state.currentManifest && state.currentManifest.slides) {
          goToSlide(state.currentManifest.slides.length - 1);
        }
        break;

      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;

      case 'o':
      case 'O':
        e.preventDefault();
        if (dom.organizerModal.style.display === 'flex') {
          dom.organizerModal.style.display = 'none';
        } else {
          dom.organizerModal.style.display = 'flex';
        }
        break;

      case 's':
      case 'S':
        e.preventDefault();
        dom.notesDrawer.classList.toggle('open');
        break;

      case 'P':
        e.preventDefault();
        if (state.viewMode === 'viewer') {
          switchView('presenter');
          goToSlide(state.currentSlideIndex);
        } else if (state.viewMode === 'presenter') {
          switchView('viewer');
          goToSlide(state.currentSlideIndex);
        }
        break;

      case 'Escape':
        e.preventDefault();
        if (dom.organizerModal.style.display === 'flex') {
          dom.organizerModal.style.display = 'none';
        } else if (dom.tocPopover.style.display === 'block') {
          dom.tocPopover.style.display = 'none';
        } else if (dom.notesDrawer.classList.contains('open')) {
          dom.notesDrawer.classList.remove('open');
        } else if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else if (state.viewMode === 'presenter') {
          switchView('viewer');
        } else if (state.viewMode === 'viewer') {
          if (state.currentCourse) {
            selectCourse(state.currentCourse.id);
          } else {
            switchView('catalog');
          }
        }
        break;
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Fullscreen error: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, match => {
      const escape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      return escape[match];
    });
  }

  // Run app on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
