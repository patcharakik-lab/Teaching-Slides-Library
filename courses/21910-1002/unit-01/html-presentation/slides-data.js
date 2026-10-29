/**
 * 21910-1002 การวิเคราะห์ข้อมูล (Data Analysis)
 * หน่วยที่ 1: ความรู้เบื้องต้นเกี่ยวกับการวิเคราะห์ความต้องการทางธุรกิจ
 * สำหรับนักศึกษาระดับ ปวช. สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล (แผนการสอน 60 นาที)
 */

const VOCABULARY_LIST = [
    {
        term: "Business Requirements (ความต้องการทางธุรกิจ)",
        formal: "สิ่งที่ธุรกิจจำเป็นต้องมีหรือจำเป็นต้องเปลี่ยนแปลงเพื่อแก้ปัญหา บรรลุเป้าหมาย หรือใช้ประโยชน์จากโอกาส",
        easy: "พูดง่ายๆ คือ 'โจทย์หรือผลลัพธ์ที่ร้านอยากได้' เช่น อยากให้ลูกค้ารอคิวน้อยลง หรือส่งของไม่ผิดบ้าน (ยังไม่ใช่การระบุว่าจะทำแอปฯ อะไร)"
    },
    {
        term: "Business Requirements Analysis (การวิเคราะห์ความต้องการทางธุรกิจ)",
        formal: "กระบวนการศึกษาและทำความเข้าใจปัญหา เป้าหมาย ข้อจำกัด และความต้องการของผู้เกี่ยวข้อง เพื่อกำหนดสิ่งที่ควรปรับปรุงให้ชัดเจนและตรวจสอบได้",
        easy: "เปรียบเหมือน 'หมอตรวจอาการคนไข้ก่อนจ่ายยา' คือถามและสังเกตให้รู้ต้นตอปัญหาก่อนจะตัดสินใจสร้างระบบหรือซื้ออุปกรณ์"
    },
    {
        term: "Stakeholder (ผู้มีส่วนได้ส่วนเสีย / ผู้เกี่ยวข้อง)",
        formal: "บุคคล กลุ่มบุคคล หรือหน่วยงานที่มีส่วนเกี่ยวข้อง ได้รับผลกระทบ หรือมีอิทธิพลต่อการเปลี่ยนแปลงของธุรกิจ",
        easy: "ใครก็ตามที่ 'ได้ใช้ ได้ประโยชน์ หรือได้รับผลกระทบ' จากงานนี้ เช่น เจ้าของร้าน พนักงานหน้าร้าน พนักงานแพ็กของ ลูกค้า ไปจนถึงคนส่งพัสดุ"
    },
    {
        term: "Problem vs Need vs Solution (ปัญหา / ความต้องการ / แนวทางแก้ไข)",
        formal: "ปัญหาคือสิ่งที่เกิดจริงและส่งผลเสีย, ความต้องการคือสิ่งที่จำเป็นเพื่อแก้ปัญหา, แนวทางแก้ไขคือเครื่องมือหรือวิธีที่เลือกใช้",
        easy: "จำง่ายๆ: ปัญหา = หิวข้าว | ความต้องการ = ต้องกินอาหารให้อิ่มท้อง | แนวทางแก้ไข = กินข้าวผัด, ต้มมาม่า, หรือสั่งแกร็บ"
    },
    {
        term: "Functional Requirement (ความต้องการด้านหน้าที่ของระบบ)",
        formal: "ข้อกำหนดที่ระบุว่าระบบต้องทำอะไรได้บ้าง (What the system should do)",
        easy: "ปุ่มหรือฟีเจอร์ที่ระบบต้องทำได้ เช่น บันทึกออเดอร์ได้, ค้นหารหัสสินค้าได้, เปลี่ยนสถานะเป็น 'จัดส่งแล้ว' ได้"
    },
    {
        term: "Non-Functional / Quality Requirement (ความต้องการด้านคุณภาพและเงื่อนไข)",
        formal: "ข้อกำหนดว่าระบบต้องทำงานได้ดีเพียงใด หรือมีเงื่อนไขด้านความปลอดภัย ความเร็ว และสิทธิ์การใช้งานอย่างไร",
        easy: "ความเจ๋งและกฎเหล็กของระบบ เช่น ต้องค้นหาเจอภายใน 3 วินาที, พนักงานทั่วไปห้ามเปิดดูหน้ากำไรของเจ้าของร้าน"
    },
    {
        term: "KPI / Metric (ตัวชี้วัดความสำเร็จ)",
        formal: "เกณฑ์หรือค่าตัวเลขที่ใช้เปรียบเทียบผลลัพธ์ก่อนและหลังการปรับปรุงธุรกิจ",
        easy: "ตัวเลขพิสูจน์ว่าทำแล้วดีขึ้นจริงไหม เช่น เวลารอคิวลดจาก 15 นาที เหลือ 8 นาที หรือส่งของผิดลดลงเหลือ 0 ชิ้น"
    },
    {
        term: "Leading Question (คำถามชี้นำ)",
        formal: "คำถามที่ผูกคำตอบไว้ล่วงหน้า ทำให้ผู้ตอบคล้อยตามโดยไม่ได้สะท้อนปัญหาจริง",
        easy: "คำถามบังคับตอบ เช่น 'ถ้ามีแอปแล้วจะดีขึ้นใช่ไหม?' (คนถูกถามก็มักพยักหน้าว่าใช่ ทั้งที่จริงอาจไม่อยากใช้แอป)"
    }
];

const SLIDES_DATA = [
    // =========================================================================
    // SLIDE 1: ปกหน่วยการเรียนรู้
    // =========================================================================
    {
        id: 1,
        section: "บทนำและภาพรวมหน่วยเรียน (นาทีที่ 0–8)",
        timeGuide: "นาทีที่ 1–2 (เกริ่นนำเข้าสู่บทเรียน)",
        isCover: true,
        html: `
            <div class="cover-grid">
                <div>
                    <div class="cover-badges">
                        <span class="cover-pill"><i class="fa-solid fa-book"></i> รายวิชา 21910-1002 การวิเคราะห์ข้อมูล</span>
                        <span class="cover-pill amber"><i class="fa-solid fa-laptop-code"></i> ปวช. เทคโนโลยีธุรกิจดิจิทัล</span>
                    </div>
                    <div class="cover-unit-no">หน่วยที่ 1 | รายวิชา วิเคราะห์ความต้องการทางธุรกิจ</div>
                    <h1 class="cover-main-title">ความรู้เบื้องต้นเกี่ยวกับ<br>การวิเคราะห์ความต้องการทางธุรกิจ</h1>
                    <div class="cover-quote-box">
                        “เข้าใจธุรกิจ มองเห็นปัญหา ระบุความต้องการ และเลือกแนวทางปรับปรุงอย่างมีเหตุผล”
                    </div>
                    <div class="cover-meta-list">
                        <div class="cover-meta-item">
                            <i class="fa-solid fa-store"></i>
                            <div><strong>เข้าใจธุรกิจจริง</strong><br><span style="font-size:19.5px;color:#cbd5e1;">มองภาพรวมร้านค้าและผู้เกี่ยวข้อง</span></div>
                        </div>
                        <div class="cover-meta-item">
                            <i class="fa-solid fa-magnifying-glass-chart"></i>
                            <div><strong>วิเคราะห์ด้วยเหตุผล</strong><br><span style="font-size:19.5px;color:#cbd5e1;">แยกปัญหา ความต้องการ และเครื่องมือ</span></div>
                        </div>
                    </div>
                </div>
                <div class="cover-collage">
                    <div class="collage-card">
                        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80" alt="ร้านค้า">
                        <div class="collage-label"><i class="fa-solid fa-shop"></i> 1. ร้านค้า (Business)</div>
                    </div>
                    <div class="collage-card">
                        <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=700&q=80" alt="ผู้ประกอบการ">
                        <div class="collage-label"><i class="fa-solid fa-user-tie"></i> 2. ผู้ประกอบการ (Owner)</div>
                    </div>
                    <div class="collage-card">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80" alt="ลูกค้า">
                        <div class="collage-label"><i class="fa-solid fa-users"></i> 3. ลูกค้า (Customer)</div>
                    </div>
                    <div class="collage-card">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80" alt="ผู้วิเคราะห์ข้อมูล">
                        <div class="collage-label"><i class="fa-solid fa-chart-line"></i> 4. ผู้วิเคราะห์ข้อมูล (Analyst)</div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-bullhorn"></i> บทพูดเปิดคลาส (1.5 นาที)</h4>
                <p>สวัสดีนักศึกษา ปวช. สาขาเทคโนโลยีธุรกิจดิจิทัลทุกคนครับ/ค่ะ วันนี้เราจะเริ่มเรียนวิชา <strong>21910-1002 การวิเคราะห์ข้อมูล (และวิเคราะห์ความต้องการทางธุรกิจ)</strong> ในหน่วยที่ 1</p>
                <p>ก่อนที่เราจะไปเขียนโปรแกรม ทำเว็บ หรือสร้างแอปพลิเคชัน สิ่งสำคัญที่สุดของคนสายธุรกิจดิจิทัลคือประโยคนี้ครับ: <em>“เข้าใจธุรกิจ มองเห็นปัญหา ระบุความต้องการ และเลือกแนวทางปรับปรุงอย่างมีเหตุผล”</em></p>
            </div>
            <div class="note-card">
                <h4><i class="fa-solid fa-lightbulb"></i> ชวนนักศึกษาสังเกตภาพ 4 มุม</h4>
                <p>ชี้ให้นักศึกษาดูภาพทั้ง 4: ร้านค้า, เจ้าของร้าน, ลูกค้า และผู้วิเคราะห์ข้อมูล — ทั้ง 4 ส่วนนี้เกี่ยวข้องกันอย่างไรในชีวิตจริง?</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 2: สาระสำคัญของหน่วย
    // =========================================================================
    {
        id: 2,
        section: "บทนำและภาพรวมหน่วยเรียน (นาทีที่ 0–8)",
        timeGuide: "นาทีที่ 3–4",
        kicker: "สไลด์ที่ 2 • ภาพรวมประจำหน่วย",
        title: "สาระสำคัญของหน่วย",
        badge: "กระบวนการ & ประโยชน์ที่ได้รับ",
        html: `
            <div style="display:flex; flex-direction:column; gap:18px; height:100%;">
                <div class="card blue" style="padding:18px 26px;">
                    <p class="lead-p" style="font-weight:600; color:#1e3a8a;">
                        <i class="fa-solid fa-circle-info"></i> การดำเนินธุรกิจจำเป็นต้องเข้าใจ <u>ปัญหา</u> <u>เป้าหมาย</u> และ<u>ความต้องการของผู้ที่เกี่ยวข้อง</u> เพื่อเลือกแนวทางปรับปรุงการทำงานให้เหมาะสม
                    </p>
                </div>

                <div class="grid-2" style="flex:1;">
                    <!-- ส่วนที่ 1: กระบวนการ -->
                    <div class="card">
                        <div class="card-icon-header">
                            <div class="icon-box blue"><i class="fa-solid fa-diagram-project"></i></div>
                            <div>
                                <div class="card-title">การวิเคราะห์ความต้องการทางธุรกิจเป็นกระบวนการ 4 ขั้น</div>
                                <span style="color:#64748b; font-size:31px;">ลำดับความคิดตั้งแต่เริ่มต้นจนได้ทางออก</span>
                            </div>
                        </div>
                        <div class="step-list" style="margin-top:6px;">
                            <div class="step-item">
                                <div class="step-num">1</div>
                                <div class="step-content">
                                    <h4>ศึกษาสถานการณ์</h4>
                                    <p>ดูว่าปัจจุบันร้านทำงานอย่างไร มีขั้นตอนแบบไหน</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-num">2</div>
                                <div class="step-content">
                                    <h4>รวบรวมข้อมูล</h4>
                                    <p>พูดคุย สังเกต และเก็บข้อมูลจริงจากหน้างาน</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-num">3</div>
                                <div class="step-content">
                                    <h4>ทำความเข้าใจสิ่งที่ธุรกิจต้องการเปลี่ยนแปลง</h4>
                                    <p>สรุปให้ชัดว่าธุรกิจต้องการแก้เรื่องใด หรืออยากได้ผลลัพธ์ใด</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <div class="step-num">4</div>
                                <div class="step-content">
                                    <h4>กำหนดแนวทางแก้ไข</h4>
                                    <p>เลือกวิธีปรับปรุงที่คุ้มค่าและเหมาะกับข้อจำกัดของร้าน</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ส่วนที่ 2: ประโยชน์ที่ได้รับ -->
                    <div class="card emerald">
                        <div class="card-icon-header">
                            <div class="icon-box emerald"><i class="fa-solid fa-trophy"></i></div>
                            <div>
                                <div class="card-title">การวิเคราะห์ที่ดีช่วยให้ธุรกิจได้ประโยชน์อย่างไร?</div>
                                <span style="color:#047857; font-size:31px;">ผลลัพธ์ที่คุ้มค่าต่อทุกฝ่าย</span>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:14px; margin:10px 0;">
                            <div style="background:#fff; border:2px solid #a7f3d0; border-radius:14px; padding:14px 18px; display:flex; gap:14px; align-items:center;">
                                <i class="fa-solid fa-bullseye" style="font-size:31px; color:#059669;"></i>
                                <div>
                                    <strong style="font-size:31px; color:#065f46;">แก้ปัญหาได้ตรงจุด</strong>
                                    <p style="font-size:19.5px; color:#334155;">เกาถูกที่คัน ไม่เสียเวลาแก้ผิดเรื่อง</p>
                                </div>
                            </div>
                            <div style="background:#fff; border:2px solid #a7f3d0; border-radius:14px; padding:14px 18px; display:flex; gap:14px; align-items:center;">
                                <i class="fa-solid fa-piggy-bank" style="font-size:31px; color:#059669;"></i>
                                <div>
                                    <strong style="font-size:31px; color:#065f46;">ลดการลงทุนที่ไม่จำเป็น</strong>
                                    <p style="font-size:19.5px; color:#334155;">ไม่ต้องเสียเงินแพงๆ ซื้อระบบที่ไม่ได้ใช้จริง</p>
                                </div>
                            </div>
                            <div style="background:#fff; border:2px solid #a7f3d0; border-radius:14px; padding:14px 18px; display:flex; gap:14px; align-items:center;">
                                <i class="fa-solid fa-handshake-simple" style="font-size:31px; color:#059669;"></i>
                                <div>
                                    <strong style="font-size:31px; color:#065f46;">สร้างความเข้าใจร่วมกัน</strong>
                                    <p style="font-size:19.5px; color:#334155;">ระหว่างเจ้าของกิจการ ผู้ปฏิบัติงาน ลูกค้า และผู้พัฒนาระบบ</p>
                                </div>
                            </div>
                        </div>
                        <div class="easy-explain" style="margin-top:auto;">
                            <span class="easy-explain-badge"><i class="fa-solid fa-key"></i> จำง่ายๆ</span>
                            <span class="easy-explain-text">เหมือนหมอตรวจอาการคนไข้ให้ชัดเจนก่อนสั่งยา จะได้หายป่วยไวและไม่เปลืองค่ายาฟรี!</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-chalkboard-user"></i> คำอธิบายเข้าใจง่าย</h4>
                <p>เปรียบเทียบให้นักศึกษาฟังว่า: ถ้าเราปวดท้องไปหาหมอ แล้วหมอไม่ถามอะไรเลย จับผ่าตัดไส้ติ่งทันที แบบนี้อันตรายไหม? การทำธุรกิจก็เหมือนกัน ต้อง <strong>ศึกษา -> รวบรวมข้อมูล -> เข้าใจสิ่งที่ต้องเปลี่ยน -> แล้วค่อยเลือกวิธีแก้</strong></p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 3: การปรับปรุงธุรกิจทำได้หลายแนวทาง
    // =========================================================================
    {
        id: 3,
        section: "บทนำและภาพรวมหน่วยเรียน (นาทีที่ 0–8)",
        timeGuide: "นาทีที่ 5–6",
        kicker: "สไลด์ที่ 3 • ทางเลือกในการแก้ปัญหา",
        title: "การปรับปรุงธุรกิจทำได้หลายแนวทาง",
        badge: "กระบวนการ • บุคลากร • เทคโนโลยี",
        html: `
            <div style="display:flex; flex-direction:column; gap:18px; height:100%;">
                <div class="grid-3" style="flex:1;">
                    <!-- Card 1 -->
                    <div class="card blue">
                        <div>
                            <div class="img-frame" style="height:155px; margin-bottom:10px;">
                                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80" alt="การปรับขั้นตอนการทำงาน">
                                <div class="img-caption"><i class="fa-solid fa-arrows-spin"></i> แนวทางที่ 1: กระบวนการทำงาน</div>
                            </div>
                            <div class="card-icon-header">
                                <div class="icon-box blue"><i class="fa-solid fa-list-check"></i></div>
                                <div class="card-title">การปรับขั้นตอนการทำงาน</div>
                            </div>
                            <p class="card-text">
                                เช่น <strong>ลดขั้นตอนซ้ำซ้อน</strong> หรือกำหนดวิธีส่งต่องานให้ชัดเจน
                            </p>
                        </div>
                        <div style="background:#dbeafe; padding:12px 16px; border-radius:12px; font-size:19.5px; color:#1e3a8a;">
                            <strong>ตัวอย่างใกล้ตัว:</strong> จัดโต๊ะวางแก้วและจุดรับออเดอร์ใหม่ ไม่ให้พนักงานเดินชนกัน
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="card amber">
                        <div>
                            <div class="img-frame" style="height:155px; margin-bottom:10px;">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80" alt="การพัฒนาบุคลากร">
                                <div class="img-caption"><i class="fa-solid fa-user-graduate"></i> แนวทางที่ 2: บุคลากร</div>
                            </div>
                            <div class="card-icon-header">
                                <div class="icon-box amber"><i class="fa-solid fa-people-group"></i></div>
                                <div class="card-title">การพัฒนาบุคลากร</div>
                            </div>
                            <p class="card-text">
                                เช่น <strong>ฝึกทักษะการใช้เครื่องมือ</strong> หรือการให้บริการลูกค้า
                            </p>
                        </div>
                        <div style="background:#fef3c7; padding:12px 16px; border-radius:12px; font-size:19.5px; color:#92400e;">
                            <strong>ตัวอย่างใกล้ตัว:</strong> สอนพนักงานใหม่ให้จำสูตรชงเครื่องดื่มและทวนออเดอร์ลูกค้าทุกครั้ง
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="card purple">
                        <div>
                            <div class="img-frame" style="height:155px; margin-bottom:10px;">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80" alt="การนำเทคโนโลยีมาใช้">
                                <div class="img-caption"><i class="fa-solid fa-laptop-medical"></i> แนวทางที่ 3: เทคโนโลยี</div>
                            </div>
                            <div class="card-icon-header">
                                <div class="icon-box purple"><i class="fa-solid fa-microchip"></i></div>
                                <div class="card-title">การนำเทคโนโลยีมาใช้</div>
                            </div>
                            <p class="card-text">
                                เช่น <strong>ใช้แบบฟอร์มออนไลน์</strong> หรือระบบติดตามคำสั่งซื้อ
                            </p>
                        </div>
                        <div style="background:#ede9fe; padding:12px 16px; border-radius:12px; font-size:19.5px; color:#5b21b6;">
                            <strong>ตัวอย่างใกล้ตัว:</strong> ใช้ Google Forms รับพรีออเดอร์ หรือใช้ตาราง Excel เช็กสต็อก
                        </div>
                    </div>
                </div>

                <div class="easy-explain" style="margin-top:0;">
                    <span class="easy-explain-badge"><i class="fa-solid fa-scale-balanced"></i> ข้อคิดสำคัญ</span>
                    <span class="easy-explain-text">
                        <strong>การเลือกแนวทางขึ้นอยู่กับ <u>สาเหตุของปัญหา</u> และ <u>ข้อจำกัดของแต่ละธุรกิจ</u></strong> — ไม่จำเป็นต้องสร้างแอปฯ เสมอไป หากการปรับขั้นตอนทำงานแก้ปัญหาได้เร็วและประหยัดกว่า!
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-comment-dots"></i> ประเด็นย้ำกับเด็กเทคโนโลยีธุรกิจดิจิทัล</h4>
                <p>นักศึกษาสายคอมพิวเตอร์มักคิดว่าทุกปัญหาต้องแก้ด้วยการเขียนโปรแกรมหรือทำแอปฯ แต่ความจริงแล้ว การแก้ปัญหามี 3 มิติ คือ <strong>คน (People) กระบวนการ (Process) และเทคโนโลยี (Technology)</strong></p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 4: จุดประสงค์การเรียนรู้
    // =========================================================================
    {
        id: 4,
        section: "บทนำและภาพรวมหน่วยเรียน (นาทีที่ 0–8)",
        timeGuide: "นาทีที่ 7–8",
        kicker: "สไลด์ที่ 4 • เป้าหมายการเรียนรู้ประจำหน่วย",
        title: "จุดประสงค์การเรียนรู้",
        badge: "เมื่อเรียนจบหน่วยนี้ นักเรียนสามารถ",
        html: `
            <div style="display:flex; flex-direction:column; gap:20px; height:100%;">
                <div class="grid-2" style="flex:1; gap:24px;">
                    <!-- คอลัมน์ซ้าย 1-3 -->
                    <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between;">
                        <div class="card blue" style="flex:1; flex-direction:row; align-items:center; gap:20px; padding:20px 24px;">
                            <div class="step-num" style="width:54px; height:54px; font-size:21.5px;">1</div>
                            <div>
                                <div class="card-title" style="font-size:31px;">อธิบายความหมายและความสำคัญ</div>
                                <p class="card-text" style="font-size:19.5px;">อธิบายความหมายและความสำคัญของการวิเคราะห์ความต้องการทางธุรกิจได้</p>
                            </div>
                        </div>
                        <div class="card emerald" style="flex:1; flex-direction:row; align-items:center; gap:20px; padding:20px 24px;">
                            <div class="step-num" style="width:54px; height:54px; font-size:21.5px; background:#059669;">2</div>
                            <div>
                                <div class="card-title" style="font-size:31px;">แยกแยะ ปัญหา • ความต้องการ • แนวทางแก้ไข</div>
                                <p class="card-text" style="font-size:19.5px;">แยกแยะปัญหา ความต้องการ และแนวทางแก้ไขจากสถานการณ์ที่กำหนดได้</p>
                            </div>
                        </div>
                        <div class="card amber" style="flex:1; flex-direction:row; align-items:center; gap:20px; padding:20px 24px;">
                            <div class="step-num" style="width:54px; height:54px; font-size:21.5px; background:#d97706;">3</div>
                            <div>
                                <div class="card-title" style="font-size:31px;">ระบุผู้มีส่วนได้ส่วนเสีย (Stakeholder)</div>
                                <p class="card-text" style="font-size:19.5px;">ระบุผู้มีส่วนได้ส่วนเสียและอธิบายความต้องการของแต่ละกลุ่มได้</p>
                            </div>
                        </div>
                    </div>

                    <!-- คอลัมน์ขวา 4-6 -->
                    <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between;">
                        <div class="card purple" style="flex:1; flex-direction:row; align-items:center; gap:20px; padding:20px 24px;">
                            <div class="step-num" style="width:54px; height:54px; font-size:21.5px; background:#7c3aed;">4</div>
                            <div>
                                <div class="card-title" style="font-size:31px;">จำแนกประเภทความต้องการเบื้องต้น</div>
                                <p class="card-text" style="font-size:19.5px;">จำแนกประเภทความต้องการเบื้องต้นทั้ง 4 ระดับได้</p>
                            </div>
                        </div>
                        <div class="card cyan" style="flex:1; flex-direction:row; align-items:center; gap:20px; padding:20px 24px;">
                            <div class="step-num" style="width:54px; height:54px; font-size:21.5px; background:#0891b2;">5</div>
                            <div>
                                <div class="card-title" style="font-size:31px;">อธิบายขั้นตอนการวิเคราะห์</div>
                                <p class="card-text" style="font-size:19.5px;">อธิบายขั้นตอนการวิเคราะห์ความต้องการทางธุรกิจ 6 ขั้นตอนได้</p>
                            </div>
                        </div>
                        <div class="card rose" style="flex:1; flex-direction:row; align-items:center; gap:20px; padding:20px 24px;">
                            <div class="step-num" style="width:54px; height:54px; font-size:21.5px; background:#e11d48;">6</div>
                            <div>
                                <div class="card-title" style="font-size:31px;">วิเคราะห์สถานการณ์ธุรกิจใกล้ตัว</div>
                                <p class="card-text" style="font-size:19.5px;">วิเคราะห์สถานการณ์ธุรกิจใกล้ตัวโดยใช้ข้อมูลและเหตุผลประกอบได้</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-check-double"></i> แจ้งเป้าหมายให้นักศึกษาทราบ</h4>
                <p>ให้นักศึกษาเห็นภาพว่าจบคาบเรียน 1 ชั่วโมงนี้ เราจะได้ฝึกคิดจากร้านค้าใกล้ตัวหน้าวิทยาลัย และทำกิจกรรมกลุ่มสั้นๆ ท้ายคาบ</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 5: ธุรกิจคืออะไร?
    // =========================================================================
    {
        id: 5,
        section: "รู้จักธุรกิจและความต้องการทางธุรกิจ (นาทีที่ 9–20)",
        timeGuide: "นาทีที่ 9–10",
        kicker: "สไลด์ที่ 5 • พื้นฐานความเข้าใจธุรกิจ",
        title: "ธุรกิจคืออะไร?",
        badge: "นิยาม & ตัวอย่างธุรกิจใกล้ตัว 5 ประเภท",
        html: `
            <div style="display:flex; flex-direction:column; gap:22px; height:100%;">
                <!-- นิยามด้านบน -->
                <div class="card blue" style="padding:24px 32px;">
                    <div style="display:flex; align-items:center; gap:20px;">
                        <div class="icon-box blue" style="width:68px; height:68px; font-size:31px;"><i class="fa-solid fa-briefcase"></i></div>
                        <div>
                            <div style="font-family:'Prompt'; font-size:19.5px; font-weight:700; color:#1d4ed8; margin-bottom:4px;">ความหมายของ “ธุรกิจ (Business)”</div>
                            <p style="font-size:31px; line-height:1.5; color:#0f172a;">
                                <strong>ธุรกิจ</strong> หมายถึง กิจกรรมที่เกี่ยวข้องกับ <span style="background:#dbeafe; padding:2px 8px; border-radius:6px; font-weight:600;">การผลิตสินค้า</span> <span style="background:#d1fae5; padding:2px 8px; border-radius:6px; font-weight:600;">การจำหน่ายสินค้า</span> หรือ <span style="background:#fef3c7; padding:2px 8px; border-radius:6px; font-weight:600;">การให้บริการ</span> เพื่อตอบสนองความต้องการของลูกค้าและสร้างผลตอบแทนให้แก่กิจการ
                            </p>
                        </div>
                    </div>
                </div>

                <!-- ภาพตัวอย่างธุรกิจ 5 ประเภทด้านล่าง -->
                <div>
                    <h3 style="font-size:31px; color:#334155; margin-bottom:12px;"><i class="fa-solid fa-store" style="color:#2563eb;"></i> ตัวอย่างธุรกิจใกล้ตัวรอบรั้ววิทยาลัย:</h3>
                    <div class="grid-5" style="height:310px;">
                        <div class="card" style="padding:12px;">
                            <div class="img-frame" style="height:170px; margin-bottom:8px;">
                                <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80" alt="ร้านกาแฟ">
                            </div>
                            <div style="text-align:center;">
                                <strong style="font-family:'Prompt'; font-size:31px; color:#0f172a;"><i class="fa-solid fa-mug-hot" style="color:#d97706;"></i> 1. ร้านกาแฟ</strong>
                                <p style="font-size:31px; color:#64748b;">ผลิตและจำหน่ายเครื่องดื่ม</p>
                            </div>
                        </div>

                        <div class="card" style="padding:12px;">
                            <div class="img-frame" style="height:170px; margin-bottom:8px;">
                                <img src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=500&q=80" alt="ร้านขายเครื่องเขียน">
                            </div>
                            <div style="text-align:center;">
                                <strong style="font-family:'Prompt'; font-size:31px; color:#0f172a;"><i class="fa-solid fa-pen-ruler" style="color:#2563eb;"></i> 2. ร้านเครื่องเขียน</strong>
                                <p style="font-size:31px; color:#64748b;">จำหน่ายอุปกรณ์การเรียน</p>
                            </div>
                        </div>

                        <div class="card" style="padding:12px;">
                            <div class="img-frame" style="height:170px; margin-bottom:8px;">
                                <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=500&q=80" alt="ร้านค้าออนไลน์">
                            </div>
                            <div style="text-align:center;">
                                <strong style="font-family:'Prompt'; font-size:31px; color:#0f172a;"><i class="fa-solid fa-box-open" style="color:#059669;"></i> 3. ร้านค้าออนไลน์</strong>
                                <p style="font-size:31px; color:#64748b;">ซื้อขายผ่านแพลตฟอร์มดิจิทัล</p>
                            </div>
                        </div>

                        <div class="card" style="padding:12px;">
                            <div class="img-frame" style="height:170px; margin-bottom:8px;">
                                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80" alt="ร้านเสริมสวย">
                            </div>
                            <div style="text-align:center;">
                                <strong style="font-family:'Prompt'; font-size:31px; color:#0f172a;"><i class="fa-solid fa-scissors" style="color:#e11d48;"></i> 4. ร้านเสริมสวย</strong>
                                <p style="font-size:31px; color:#64748b;">ธุรกิจให้บริการความงาม</p>
                            </div>
                        </div>

                        <div class="card" style="padding:12px;">
                            <div class="img-frame" style="height:170px; margin-bottom:8px;">
                                <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=500&q=80" alt="ร้านซ่อมคอมพิวเตอร์">
                            </div>
                            <div style="text-align:center;">
                                <strong style="font-family:'Prompt'; font-size:31px; color:#0f172a;"><i class="fa-solid fa-screwdriver-wrench" style="color:#7c3aed;"></i> 5. ร้านซ่อมคอมฯ</strong>
                                <p style="font-size:31px; color:#64748b;">บริการตรวจเช็กและซ่อมบำรุง</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-comments"></i> คำถามกระตุ้นผู้เรียน</h4>
                <p>ถามนักศึกษาว่า: "เช้านี้ก่อนเข้าห้องเรียน ใครแวะซื้อของจากธุรกิจไหนมาบ้าง? ร้านนั้นทำหน้าที่ผลิตสินค้า จำหน่ายสินค้า หรือให้บริการ?"</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 6: ธุรกิจต้องจัดการเรื่องใดบ้าง?
    // =========================================================================
    {
        id: 6,
        section: "รู้จักธุรกิจและความต้องการทางธุรกิจ (นาทีที่ 9–20)",
        timeGuide: "นาทีที่ 11–12",
        kicker: "สไลด์ที่ 6 • องค์ประกอบหลักของธุรกิจ",
        title: "ธุรกิจต้องจัดการเรื่องใดบ้าง?",
        badge: "5 องค์ประกอบสำคัญรอบตัวร้านค้า",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
                <div class="hub-diagram">
                    <!-- Center Store Image -->
                    <div class="hub-center">
                        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80" alt="ร้านค้าตรงกลาง">
                        <div class="hub-center-label"><i class="fa-solid fa-store"></i> ธุรกิจ / ร้านค้า</div>
                    </div>

                    <!-- Spoke 1 -->
                    <div class="spoke-node spoke-1">
                        <div class="icon-box blue"><i class="fa-solid fa-users"></i></div>
                        <div>
                            <strong style="font-family:'Prompt'; font-size:31px; color:#0f172a;">1. ลูกค้า</strong>
                            <p style="font-size:31px; color:#475569;">ผู้ซื้อสินค้า/รับบริการ ต้องดูแลความพึงพอใจ</p>
                        </div>
                    </div>

                    <!-- Spoke 2 -->
                    <div class="spoke-node spoke-2" style="border-color:#6ee7b7;">
                        <div class="icon-box emerald"><i class="fa-solid fa-boxes-stacked"></i></div>
                        <div>
                            <strong style="font-family:'Prompt'; font-size:31px; color:#0f172a;">2. สินค้าหรือบริการ</strong>
                            <p style="font-size:31px; color:#475569;">คุณภาพ มาตรฐาน และจำนวนสต็อกคงเหลือ</p>
                        </div>
                    </div>

                    <!-- Spoke 3 -->
                    <div class="spoke-node spoke-3" style="border-color:#fcd34d;">
                        <div class="icon-box amber"><i class="fa-solid fa-id-badge"></i></div>
                        <div>
                            <strong style="font-family:'Prompt'; font-size:31px; color:#0f172a;">3. บุคลากร</strong>
                            <p style="font-size:31px; color:#475569;">พนักงานผู้ปฏิบัติงาน หน้าที่ และทักษะ</p>
                        </div>
                    </div>

                    <!-- Spoke 4 -->
                    <div class="spoke-node spoke-4" style="border-color:#fda4af;">
                        <div class="icon-box rose"><i class="fa-solid fa-coins"></i></div>
                        <div>
                            <strong style="font-family:'Prompt'; font-size:31px; color:#0f172a;">4. รายรับรายจ่าย</strong>
                            <p style="font-size:31px; color:#475569;">ยอดขาย ต้นทุน กำไร และงบประมาณ</p>
                        </div>
                    </div>

                    <!-- Spoke 5 -->
                    <div class="spoke-node spoke-5" style="border-color:#c4b5fd;">
                        <div class="icon-box purple"><i class="fa-solid fa-chart-pie"></i></div>
                        <div>
                            <strong style="font-family:'Prompt'; font-size:31px; color:#0f172a;">5. ข้อมูลที่ใช้ในการตัดสินใจ</strong>
                            <p style="font-size:31px; color:#475569;">สถิติการขาย สินค้าขายดี ข้อมูลคำสั่งซื้อ</p>
                        </div>
                    </div>
                </div>

                <div class="easy-explain" style="margin-top:8px;">
                    <span class="easy-explain-badge"><i class="fa-solid fa-eye"></i> มุมมองนักวิเคราะห์</span>
                    <span class="easy-explain-text">
                        แต่ละธุรกิจมีลักษณะการทำงานแตกต่างกัน แต่ล้วนต้องจัดการทั้ง 5 เรื่องนี้ <strong>การเข้าใจองค์ประกอบเหล่านี้ช่วยให้ผู้วิเคราะห์มองเห็นภาพรวมของธุรกิจ ก่อนศึกษารายละเอียดของปัญหา</strong>
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-compass"></i> เทคนิคการจำ 5 นิ้วมือ</h4>
                <p>ให้นักศึกษาชู 5 นิ้ว: นิ้วโป้ง=ลูกค้า, นิ้วชี้=สินค้า/บริการ, นิ้วกลาง=บุคลากร, นิ้วนาง=รายรับรายจ่าย, นิ้วก้อย=ข้อมูลตัดสินใจ ไม่ว่าร้านเล็กหรือบริษัทใหญ่ก็มี 5 เรื่องนี้เสมอ</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 7: ความต้องการทางธุรกิจคืออะไร?
    // =========================================================================
    {
        id: 7,
        section: "รู้จักธุรกิจและความต้องการทางธุรกิจ (นาทีที่ 9–20)",
        timeGuide: "นาทีที่ 13–14",
        kicker: "สไลด์ที่ 7 • นิยามคำสำคัญ",
        title: "ความต้องการทางธุรกิจคืออะไร?",
        badge: "ปัญหา (Problem) vs โอกาส (Opportunity)",
        html: `
            <div style="display:flex; flex-direction:column; gap:20px; height:100%;">
                <!-- นิยาม -->
                <div class="card blue" style="padding:20px 28px;">
                    <div style="font-family:'Prompt'; font-size:31px; font-weight:700; color:#1e3a8a; margin-bottom:8px;">
                        <i class="fa-solid fa-flag-checkered"></i> ความต้องการทางธุรกิจ (Business Requirement) หมายถึง:
                    </div>
                    <p style="font-size:19.5px; color:#0f172a; margin-bottom:12px;">
                        สิ่งที่ธุรกิจ <strong>จำเป็นต้องมี</strong> หรือ <strong>จำเป็นต้องเปลี่ยนแปลง</strong> เพื่อ:
                    </p>
                    <div class="grid-3" style="gap:16px;">
                        <div style="background:#fff; padding:12px 16px; border-radius:12px; border:1px solid #93c5fd; font-family:'Prompt'; font-weight:600; font-size:19.5px; color:#1d4ed8;">
                            1. แก้ปัญหา <span style="font-weight:400; color:#475569; font-size:31px;">(อุดรอยรั่วเดิม)</span>
                        </div>
                        <div style="background:#fff; padding:12px 16px; border-radius:12px; border:1px solid #93c5fd; font-family:'Prompt'; font-weight:600; font-size:19.5px; color:#1d4ed8;">
                            2. บรรลุเป้าหมาย <span style="font-weight:400; color:#475569; font-size:31px;">(ไปให้ถึงเป้าที่ตั้งไว้)</span>
                        </div>
                        <div style="background:#fff; padding:12px 16px; border-radius:12px; border:1px solid #93c5fd; font-family:'Prompt'; font-weight:600; font-size:19.5px; color:#1d4ed8;">
                            3. ใช้ประโยชน์จากโอกาส <span style="font-weight:400; color:#475569; font-size:31px;">(ต่อยอดสิ่งใหม่)</span>
                        </div>
                    </div>
                </div>

                <!-- กล่องเปรียบเทียบ ปัญหา vs โอกาส -->
                <div class="grid-2" style="flex:1;">
                    <div class="card rose">
                        <div class="card-icon-header">
                            <div class="icon-box rose"><i class="fa-solid fa-triangle-exclamation"></i></div>
                            <div>
                                <div class="card-title">เกิดจาก “ปัญหาที่ต้องแก้ไข”</div>
                                <span style="color:#be123c; font-size:31px;">เมื่อการทำงานปัจจุบันเกิดความเสียหายหรือติดขัด</span>
                            </div>
                        </div>
                        <p class="card-text">
                            เช่น ลูกค้ารอคิวนานเกินไป, ส่งของผิดบ่อย, สต็อกของขาดโดยไม่รู้ตัว จึงต้องรีบแก้ไขให้กลับสู่ภาวะปกติ
                        </p>
                        <div style="background:#ffe4e6; padding:12px 16px; border-radius:10px; color:#9f1239; font-size:19.5px;">
                            <i class="fa-solid fa-wrench"></i> <strong>จุดเน้น:</strong> แก้สิ่งที่กำลังพังหรือล่าช้าให้ดีขึ้น
                        </div>
                    </div>

                    <div class="card emerald">
                        <div class="card-icon-header">
                            <div class="icon-box emerald"><i class="fa-solid fa-rocket"></i></div>
                            <div>
                                <div class="card-title">เกิดจาก “โอกาสที่ต้องการพัฒนา”</div>
                                <span style="color:#047857; font-size:31px;">ร้านไม่ได้มีปัญหา แต่ต้องการเติบโตเพิ่ม</span>
                            </div>
                        </div>
                        <div style="background:#ffffff; border:2px solid #6ee7b7; border-radius:14px; padding:16px 20px;">
                            <strong style="font-family:'Prompt'; color:#065f46; font-size:31px;"><i class="fa-solid fa-star"></i> ตัวอย่างโอกาส:</strong>
                            <p style="font-size:31px; color:#1e293b; margin-top:6px; line-height:1.5;">
                                “ร้านที่ทำงานได้ตามปกติ แต่อยาก<strong>เพิ่มช่องทางสั่งซื้อ</strong>เพื่อให้เข้าถึงลูกค้ากลุ่มใหม่”
                            </p>
                        </div>
                        <div style="background:#d1fae5; padding:12px 16px; border-radius:10px; color:#065f46; font-size:19.5px;">
                            <i class="fa-solid fa-seedling"></i> <strong>จุดเน้น:</strong> ขยายฐานลูกค้า เพิ่มยอดขายในอนาคต
                        </div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-lightbulb"></i> ย้ำความแตกต่าง</h4>
                <p>นักศึกษามักคิดว่าเราจะปรับปรุงร้านก็ต่อเมื่อร้านมีปัญหาเท่านั้น แต่จริงๆ แล้ว <strong>"ร้านขายดีอยู่แล้ว แต่อยากขายออนไลน์เพิ่ม"</strong> ก็ถือเป็นความต้องการทางธุรกิจที่เกิดจาก <strong>โอกาส (Opportunity)</strong></p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 8: ตัวอย่างความต้องการทางธุรกิจ
    // =========================================================================
    {
        id: 8,
        section: "รู้จักธุรกิจและความต้องการทางธุรกิจ (นาทีที่ 9–20)",
        timeGuide: "นาทีที่ 15",
        kicker: "สไลด์ที่ 8 • ตัวอย่างจากการทำงานจริง",
        title: "ตัวอย่างความต้องการทางธุรกิจ",
        badge: "ตารางเปรียบเทียบ 4 ธุรกิจใกล้ตัว",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th style="width:36%;"><i class="fa-solid fa-store"></i> ธุรกิจ</th>
                            <th><i class="fa-solid fa-bullseye"></i> ความต้องการทางธุรกิจ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div style="display:flex; align-items:center; gap:14px;">
                                    <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=200&q=80" style="width:76px; height:58px; object-fit:cover; border-radius:10px;" alt="ร้านกาแฟ">
                                    <strong><i class="fa-solid fa-mug-hot" style="color:#d97706;"></i> ร้านกาแฟ</strong>
                                </div>
                            </td>
                            <td><span style="font-weight:600; color:#1e3a8a;">ลดเวลารอรับเครื่องดื่มของลูกค้า</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div style="display:flex; align-items:center; gap:14px;">
                                    <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=200&q=80" style="width:76px; height:58px; object-fit:cover; border-radius:10px;" alt="ร้านค้าออนไลน์">
                                    <strong><i class="fa-solid fa-box-open" style="color:#059669;"></i> ร้านค้าออนไลน์</strong>
                                </div>
                            </td>
                            <td><span style="font-weight:600; color:#065f46;">ลดความผิดพลาดในการจัดส่งสินค้า</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div style="display:flex; align-items:center; gap:14px;">
                                    <img src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=200&q=80" style="width:76px; height:58px; object-fit:cover; border-radius:10px;" alt="ร้านขายเครื่องเขียน">
                                    <strong><i class="fa-solid fa-pen-ruler" style="color:#2563eb;"></i> ร้านขายเครื่องเขียน</strong>
                                </div>
                            </td>
                            <td><span style="font-weight:600; color:#1d4ed8;">ทราบจำนวนสินค้าคงเหลือให้ถูกต้อง</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div style="display:flex; align-items:center; gap:14px;">
                                    <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=200&q=80" style="width:76px; height:58px; object-fit:cover; border-radius:10px;" alt="ร้านซ่อมคอมพิวเตอร์">
                                    <strong><i class="fa-solid fa-screwdriver-wrench" style="color:#7c3aed;"></i> ร้านซ่อมคอมพิวเตอร์</strong>
                                </div>
                            </td>
                            <td><span style="font-weight:600; color:#5b21b6;">ติดตามสถานะงานซ่อมแต่ละเครื่อง</span></td>
                        </tr>
                    </tbody>
                </table>

                <div class="easy-explain">
                    <span class="easy-explain-badge"><i class="fa-solid fa-magnifying-glass"></i> ประเด็นสังเกต</span>
                    <span class="easy-explain-text">
                        <strong>ความต้องการแต่ละข้อระบุสิ่งที่ธุรกิจอยากปรับปรุงหรือผลลัพธ์ที่ต้องการ</strong> (สังเกตว่ายังไม่ได้ระบุชื่อโปรแกรมหรือแอปพลิเคชันเลย!)
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-magnifying-glass"></i> ชี้จุดสังเกตในตาราง</h4>
                <p>ชวนนักศึกษาดูคำกริยาในช่องความต้องการ: "ลดเวลารอ", "ลดความผิดพลาด", "ทราบจำนวนคงเหลือ", "ติดตามสถานะ" — ล้วนเป็นผลลัพธ์ที่อยากได้ ไม่ใช่ชื่อโปรแกรม</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 9: การวิเคราะห์ความต้องการทางธุรกิจคืออะไร?
    // =========================================================================
    {
        id: 9,
        section: "รู้จักธุรกิจและความต้องการทางธุรกิจ (นาทีที่ 9–20)",
        timeGuide: "นาทีที่ 16–17",
        kicker: "สไลด์ที่ 9 • หัวใจของวิชานี้",
        title: "การวิเคราะห์ความต้องการทางธุรกิจคืออะไร?",
        badge: "Business Requirements Analysis",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:20px;">
                <!-- นิยามหลักกลางหน้า -->
                <div class="card blue" style="text-align:center; padding:26px 40px; border-width:3px;">
                    <div style="font-family:'Prompt'; font-size:31px; font-weight:700; color:#2563eb; letter-spacing:1px;">DEFINITION</div>
                    <h2 style="font-size:29px; color:#0f172a; margin:6px 0 12px 0;">
                        การวิเคราะห์ความต้องการทางธุรกิจ <span style="color:#2563eb;">(Business Requirements Analysis)</span>
                    </h2>
                    <p style="font-size:31px; color:#334155; max-width:1100px; margin:0 auto;">
                        เป็นกระบวนการศึกษาและทำความเข้าใจองค์ประกอบสำคัญทั้ง 4 ด้าน เพื่อนำมากำหนดสิ่งที่ธุรกิจควรปรับปรุงให้ <strong style="color:#059669; background:#d1fae5; padding:2px 10px; border-radius:8px;">ชัดเจนและตรวจสอบได้</strong>
                    </p>
                </div>

                <!-- คำสำคัญ 4 กลุ่ม -->
                <div class="grid-4" style="flex:1;">
                    <div class="card rose" style="text-align:center; align-items:center; justify-content:center; gap:12px;">
                        <div class="icon-box rose" style="width:68px; height:68px; font-size:31px;"><i class="fa-solid fa-bug"></i></div>
                        <div class="card-title" style="font-size:21.5px;">1. ปัญหา</div>
                        <p style="font-size:19.5px; color:#475569;">สิ่งที่ติดขัด ล่าช้า ผิดพลาด หรือทำให้เสียโอกาส</p>
                    </div>

                    <div class="card emerald" style="text-align:center; align-items:center; justify-content:center; gap:12px;">
                        <div class="icon-box emerald" style="width:68px; height:68px; font-size:31px;"><i class="fa-solid fa-bullseye"></i></div>
                        <div class="card-title" style="font-size:21.5px;">2. เป้าหมาย</div>
                        <p style="font-size:19.5px; color:#475569;">ผลลัพธ์ปลายทางที่ธุรกิจต้องการไปให้ถึง</p>
                    </div>

                    <div class="card amber" style="text-align:center; align-items:center; justify-content:center; gap:12px;">
                        <div class="icon-box amber" style="width:68px; height:68px; font-size:31px;"><i class="fa-solid fa-lock"></i></div>
                        <div class="card-title" style="font-size:21.5px;">3. ข้อจำกัด</div>
                        <p style="font-size:19.5px; color:#475569;">งบประมาณ เวลา อุปกรณ์ หรือทักษะของคนในร้าน</p>
                    </div>

                    <div class="card purple" style="text-align:center; align-items:center; justify-content:center; gap:12px;">
                        <div class="icon-box purple" style="width:68px; height:68px; font-size:31px;"><i class="fa-solid fa-users-gear"></i></div>
                        <div class="card-title" style="font-size:21.5px;">4. ความต้องการของผู้เกี่ยวข้อง</div>
                        <p style="font-size:19.5px; color:#475569;">สิ่งที่เจ้าของ พนักงาน และลูกค้าคาดหวัง</p>
                    </div>
                </div>

                <div class="easy-explain">
                    <span class="easy-explain-badge"><i class="fa-solid fa-language"></i> แปลศัพท์เทคนิค</span>
                    <span class="easy-explain-text">
                        คำว่า <strong>“ชัดเจนและตรวจสอบได้”</strong> หมายถึง เขียนออกมาแล้วทุกคนเข้าใจตรงกัน และเมื่อทำเสร็จสามารถพิสูจน์ได้ว่าสำเร็จจริงหรือไม่
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-key"></i> คำสำคัญ 4 กลุ่ม</h4>
                <p>ให้นักศึกษาจำ 4 คำสั้นๆ: <strong>ปัญหา - เป้าหมาย - ข้อจำกัด - คนเกี่ยวข้อง</strong> ถ้าขาดข้อใดข้อหนึ่ง เช่น ลืมดู "ข้อจำกัดด้านงบประมาณ" เราอาจเสนอระบบราคาแสนบาทให้ร้านขายน้ำปั่นซึ่งเป็นไปไม่ได้</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 10: 6 คำถามสำคัญในการวิเคราะห์
    // =========================================================================
    {
        id: 10,
        section: "รู้จักธุรกิจและความต้องการทางธุรกิจ (นาทีที่ 9–20)",
        timeGuide: "นาทีที่ 18",
        kicker: "สไลด์ที่ 10 • เช็กลิสต์นักวิเคราะห์",
        title: "6 คำถามสำคัญในการวิเคราะห์",
        badge: "การ์ดคำถาม 6 ใบก่อนเริ่มแก้ปัญหา",
        html: `
            <div class="grid-2" style="gap:24px; height:100%;">
                <!-- คอลัมน์ซ้าย 1-3 -->
                <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between;">
                    <div class="card blue" style="flex:1; flex-direction:row; align-items:center; gap:18px; padding:18px 24px;">
                        <div class="icon-box blue"><i class="fa-solid fa-gears"></i></div>
                        <div>
                            <div style="font-family:'Prompt'; font-weight:700; color:#2563eb; font-size:31px;">คำถามที่ 1 (การทำงานปัจจุบัน)</div>
                            <div class="card-title" style="font-size:31px;">ปัจจุบันธุรกิจทำงานอย่างไร?</div>
                            <p style="font-size:19.5px; color:#475569;">ศึกษาลำดับขั้นตอนเดิมตั้งแต่ต้นจนจบ</p>
                        </div>
                    </div>

                    <div class="card rose" style="flex:1; flex-direction:row; align-items:center; gap:18px; padding:18px 24px;">
                        <div class="icon-box rose"><i class="fa-solid fa-circle-question"></i></div>
                        <div>
                            <div style="font-family:'Prompt'; font-weight:700; color:#e11d48; font-size:31px;">คำถามที่ 2 (จุดที่ต้องโฟกัส)</div>
                            <div class="card-title" style="font-size:31px;">มีปัญหาหรือโอกาสใดเกิดขึ้น?</div>
                            <p style="font-size:19.5px; color:#475569;">อะไรคือจุดติดขัด หรือโอกาสที่อยากต่อยอด</p>
                        </div>
                    </div>

                    <div class="card purple" style="flex:1; flex-direction:row; align-items:center; gap:18px; padding:18px 24px;">
                        <div class="icon-box purple"><i class="fa-solid fa-people-arrows"></i></div>
                        <div>
                            <div style="font-family:'Prompt'; font-weight:700; color:#7c3aed; font-size:31px;">คำถามที่ 3 (ผู้มีส่วนได้ส่วนเสีย)</div>
                            <div class="card-title" style="font-size:31px;">ใครได้รับผลกระทบหรือเกี่ยวข้องกับเรื่องนี้?</div>
                            <p style="font-size:19.5px; color:#475569;">ระบุกลุ่มคนที่ทำงานหรือรับบริการในจุดนั้น</p>
                        </div>
                    </div>
                </div>

                <!-- คอลัมน์ขวา 4-6 -->
                <div style="display:flex; flex-direction:column; gap:18px; justify-content:space-between;">
                    <div class="card emerald" style="flex:1; flex-direction:row; align-items:center; gap:18px; padding:18px 24px;">
                        <div class="icon-box emerald"><i class="fa-solid fa-flag"></i></div>
                        <div>
                            <div style="font-family:'Prompt'; font-weight:700; color:#059669; font-size:31px;">คำถามที่ 4 (เป้าหมาย)</div>
                            <div class="card-title" style="font-size:31px;">ธุรกิจต้องการผลลัพธ์อะไร?</div>
                            <p style="font-size:19.5px; color:#475569;">ภาพความสำเร็จที่อยากเห็นหลังปรับปรุงคืออะไร</p>
                        </div>
                    </div>

                    <div class="card amber" style="flex:1; flex-direction:row; align-items:center; gap:18px; padding:18px 24px;">
                        <div class="icon-box amber"><i class="fa-solid fa-scale-unbalanced"></i></div>
                        <div>
                            <div style="font-family:'Prompt'; font-weight:700; color:#d97706; font-size:31px;">คำถามที่ 5 (กรอบการทำงาน)</div>
                            <div class="card-title" style="font-size:31px;">มีเงื่อนไขหรือข้อจำกัดอะไรบ้าง?</div>
                            <p style="font-size:19.5px; color:#475569;">งบประมาณ เวลา อุปกรณ์ หรือกฎระเบียบของร้าน</p>
                        </div>
                    </div>

                    <div class="card cyan" style="flex:1; flex-direction:row; align-items:center; gap:18px; padding:18px 24px;">
                        <div class="icon-box cyan"><i class="fa-solid fa-gauge-high"></i></div>
                        <div>
                            <div style="font-family:'Prompt'; font-weight:700; color:#0891b2; font-size:31px;">คำถามที่ 6 (ตัวชี้วัด)</div>
                            <div class="card-title" style="font-size:31px;">จะทราบได้อย่างไรว่าการปรับปรุงประสบความสำเร็จ?</div>
                            <p style="font-size:19.5px; color:#475569;">กำหนดตัวเลขหรือเกณฑ์วัดผลก่อน–หลังชัดเจน</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-clipboard-question"></i> การนำไปใช้จริง</h4>
                <p>6 คำถามนี้เปรียบเสมือน "โพยประจำตัวนักวิเคราะห์" เวลาลงพื้นที่ไปคุยกับร้านค้า ถ้านักศึกษาตอบได้ครบ 6 ข้อนี้ แปลว่าวิเคราะห์ธุรกิจได้ครบถ้วนแล้ว</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 11: เมื่อเจ้าของร้านบอกว่า “อยากได้แอปพลิเคชัน”
    // =========================================================================
    {
        id: 11,
        section: "รู้จักธุรกิจและความต้องการทางธุรกิจ (นาทีที่ 9–20)",
        timeGuide: "นาทีที่ 19",
        kicker: "สไลด์ที่ 11 • บทสนทนาจำลองสถานการณ์จริง",
        title: "เมื่อเจ้าของร้านบอกว่า “อยากได้แอปพลิเคชัน”",
        badge: "อย่าเพิ่งรีบทำตามคำขอ จนกว่าจะรู้เหตุผล",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <div class="chat-stage" style="flex:1; justify-content:center;">
                    <!-- Owner Bubble -->
                    <div class="chat-row owner">
                        <div class="chat-avatar" style="border-color:#d97706;">
                            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=300&q=80" alt="เจ้าของร้าน">
                        </div>
                        <div class="chat-bubble" style="border-color:#fcd34d; background:#fffbeb;">
                            <div class="chat-speaker" style="color:#b45309;"><i class="fa-solid fa-store"></i> เจ้าของร้านกล่าวว่า:</div>
                            <p style="font-family:'Prompt'; font-size:24px; font-weight:700; color:#0f172a;">
                                “อยากได้แอปพลิเคชันสำหรับร้าน”
                            </p>
                        </div>
                    </div>

                    <!-- Analyst Bubble -->
                    <div class="chat-row analyst">
                        <div class="chat-avatar" style="border-color:#2563eb;">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" alt="ผู้วิเคราะห์">
                        </div>
                        <div class="chat-bubble">
                            <div class="chat-speaker"><i class="fa-solid fa-user-magnifying-glass"></i> ผู้วิเคราะห์ควรสอบถามต่อว่า:</div>
                            <ul style="font-size:19.5px; color:#1e293b; line-height:1.7; padding-left:24px; font-weight:500;">
                                <li>ต้องการนำแอปพลิเคชันไป<strong>ช่วยเรื่องใด?</strong></li>
                                <li><strong>ปัจจุบันทำงานอย่างไร?</strong></li>
                                <li><strong>พบปัญหาตรงไหน?</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="easy-explain" style="background:linear-gradient(90deg, #fff1f2, #ffe4e6); border-color:#f43f5e;">
                    <span class="easy-explain-badge" style="background:#e11d48; color:#fff;"><i class="fa-solid fa-triangle-exclamation"></i> ข้อควรระวัง</span>
                    <span class="easy-explain-text" style="color:#881337;">
                        คำว่า <strong>“อยากได้แอปพลิเคชัน”</strong> เป็นข้อเสนอเกี่ยวกับ<u>แนวทางแก้ไข</u> ซึ่งยังไม่อธิบายความจำเป็นทางธุรกิจอย่างเพียงพอ
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-masks-theater"></i> แสดงบทบาทสมมติสั้นๆ</h4>
                <p>ครูพูดเป็นเจ้าของร้าน: "น้องๆ เรียนคอมฯ ใช่ไหม ทำแอปให้ร้านป้าหน่อย!" แล้วถามนักศึกษาว่า ถ้าเรารับปากทำทันทีเลย จะเกิดปัญหาอะไรตามมา? (ไม่รู้ว่าจะทำหน้าจออะไร แก้ปัญหาอะไร)</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 12: จากคำขอเครื่องมือสู่ความต้องการที่ชัดเจน
    // =========================================================================
    {
        id: 12,
        section: "รู้จักธุรกิจและความต้องการทางธุรกิจ (นาทีที่ 9–20)",
        timeGuide: "นาทีที่ 20",
        kicker: "สไลด์ที่ 12 • ผลลัพธ์จากการซักถาม",
        title: "จากคำขอเครื่องมือสู่ความต้องการที่ชัดเจน",
        badge: "เมื่อสอบถามเพิ่มเติม อาจพบว่า...",
        html: `
            <div style="display:flex; flex-direction:column; gap:20px; height:100%;">
                <div class="grid-3" style="flex:1;">
                    <!-- กล่องที่ 1: ปัญหาที่แท้จริง -->
                    <div class="card rose">
                        <div>
                            <div class="card-icon-header">
                                <div class="icon-box rose"><i class="fa-solid fa-magnifying-glass-minus"></i></div>
                                <div>
                                    <span style="font-size:19.5px; color:#be123c; font-weight:700;">ส่วนที่ 1</span>
                                    <div class="card-title">ปัญหาที่แท้จริง</div>
                                </div>
                            </div>
                            <div style="background:#fff; border:2px solid #fda4af; border-radius:14px; padding:20px; margin-top:14px;">
                                <p style="font-size:19.5px; font-weight:600; color:#881337; line-height:1.5;">
                                    “พนักงานรับคำสั่งซื้อจากหลายช่องทางแล้วบันทึกไม่ครบ”
                                </p>
                            </div>
                        </div>
                        <p style="font-size:19.5px; color:#475569;">
                            <i class="fa-regular fa-comment-dots"></i> เช่น ทักมาทางแชทเพจ ไลน์ และหน้าร้านพร้อมกัน จนจดตกหล่น
                        </p>
                    </div>

                    <!-- กล่องที่ 2: ความต้องการสำคัญ -->
                    <div class="card emerald">
                        <div>
                            <div class="card-icon-header">
                                <div class="icon-box emerald"><i class="fa-solid fa-bullseye"></i></div>
                                <div>
                                    <span style="font-size:19.5px; color:#047857; font-weight:700;">ส่วนที่ 2</span>
                                    <div class="card-title">ความต้องการสำคัญ</div>
                                </div>
                            </div>
                            <div style="background:#fff; border:2px solid #6ee7b7; border-radius:14px; padding:20px; margin-top:14px;">
                                <p style="font-size:19.5px; font-weight:600; color:#065f46; line-height:1.5;">
                                    “การรวบรวมและติดตามคำสั่งซื้อให้ครบถ้วน”
                                </p>
                            </div>
                        </div>
                        <p style="font-size:19.5px; color:#475569;">
                            <i class="fa-solid fa-check"></i> นี่คือเป้าหมายที่แท้จริง ไม่ว่าจะใช้เครื่องมือใดก็ตาม
                        </p>
                    </div>

                    <!-- กล่องที่ 3: สิ่งที่ต้องพิจารณาก่อนเลือกเครื่องมือ -->
                    <div class="card blue">
                        <div>
                            <div class="card-icon-header">
                                <div class="icon-box blue"><i class="fa-solid fa-sliders"></i></div>
                                <div>
                                    <span style="font-size:19.5px; color:#1d4ed8; font-weight:700;">ส่วนที่ 3</span>
                                    <div class="card-title">สิ่งที่ต้องพิจารณาก่อนเลือกเครื่องมือ</div>
                                </div>
                            </div>
                            <div class="step-list" style="margin-top:14px;">
                                <div class="step-item" style="padding:10px 14px;">
                                    <div class="step-num" style="width:32px; height:32px; font-size:31px;">1</div>
                                    <div class="step-content"><h4>ปริมาณงาน</h4><p>วันละ 20 ออเดอร์ หรือ 500 ออเดอร์?</p></div>
                                </div>
                                <div class="step-item" style="padding:10px 14px;">
                                    <div class="step-num" style="width:32px; height:32px; font-size:31px;">2</div>
                                    <div class="step-content"><h4>งบประมาณ</h4><p>มีงบลงทุนเท่าไร คุ้มกับยอดขายไหม?</p></div>
                                </div>
                                <div class="step-item" style="padding:10px 14px;">
                                    <div class="step-num" style="width:32px; height:32px; font-size:31px;">3</div>
                                    <div class="step-content"><h4>ความสามารถของผู้ใช้</h4><p>พนักงานถนัดใช้มือถือหรือคอมพิวเตอร์แค่ไหน?</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="easy-explain">
                    <span class="easy-explain-badge"><i class="fa-solid fa-lightbulb"></i> สรุปเข้าใจง่าย</span>
                    <span class="easy-explain-text">
                        ถ้ามีแค่วันละ 15 ออเดอร์และงบน้อย การใช้ <strong>Google Sheet หรือแบบฟอร์มรับออเดอร์ฟรี</strong> อาจตอบโจทย์ได้ทันทีโดยไม่ต้องเสียเงินจ้างทำแอปฯ ใหม่!
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-arrow-right-arrow-left"></i> เชื่อมโยงสไลด์ 11 และ 12</h4>
                <p>ชี้ให้นักศึกษาเห็นว่า พอเราถามคำถามในสไลด์ 11 เราจึงค้นพบความจริงในสไลด์ 12 ว่าเจ้าของร้านไม่ได้อยากได้แอปฯ เพราะเท่ แต่อยากแก้ปัญหา "ออเดอร์ตกหล่นจากหลายช่องทาง"</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 13: ความสำคัญของการวิเคราะห์: เข้าใจปัญหาและแก้ให้ตรงจุด
    // =========================================================================
    {
        id: 13,
        section: "ความสำคัญและการแยกแยะประเด็น (นาทีที่ 21–30)",
        timeGuide: "นาทีที่ 21–22",
        kicker: "สไลด์ที่ 13 • ทำไมต้องวิเคราะห์? (1/2)",
        title: "ความสำคัญของการวิเคราะห์: เข้าใจปัญหาและแก้ให้ตรงจุด",
        badge: "ข้อที่ 1 และ ข้อที่ 2",
        html: `
            <div class="grid-2" style="gap:28px; height:100%;">
                <!-- คอลัมน์ 1 -->
                <div class="card blue">
                    <div>
                        <div class="card-icon-header">
                            <div class="step-num" style="width:52px; height:52px; font-size:21.5px;">1</div>
                            <div class="card-title" style="font-size:31px;">ช่วยให้เข้าใจปัญหาตรงกัน</div>
                        </div>
                        <p class="card-text" style="margin-bottom:18px;">
                            เจ้าของกิจการและพนักงานอาจมองปัญหาต่างกัน การรวบรวมข้อมูลจากหลายฝ่ายช่วยให้เห็นสถานการณ์รอบด้าน
                        </p>
                        <div class="img-frame" style="height:165px; margin-bottom:10px;">
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80" alt="เข้าใจปัญหาตรงกัน">
                            <div class="img-caption">รับฟังทั้งมุมมองเจ้าของร้านและพนักงานผู้ปฏิบัติงานจริง</div>
                        </div>
                    </div>
                    <div style="background:#dbeafe; padding:12px 16px; border-radius:12px; font-size:19.5px; color:#1e3a8a;">
                        <strong>ตัวอย่าง:</strong> เจ้าของคิดว่าพนักงานทำงานช้า แต่พนักงานบอกว่าต้องคอยเดินไปเช็กของหลังร้านเพราะไม่มีรายการสต็อก
                    </div>
                </div>

                <!-- คอลัมน์ 2 -->
                <div class="card amber">
                    <div>
                        <div class="card-icon-header">
                            <div class="step-num" style="width:52px; height:52px; font-size:21.5px; background:#d97706;">2</div>
                            <div class="card-title" style="font-size:31px;">ช่วยลดการแก้ปัญหาผิดจุด</div>
                        </div>
                        <p class="card-text" style="margin-bottom:16px;">
                            หากร้านบริการช้าเพราะ<strong>ขั้นตอนทำงานซ้ำซ้อน</strong> การซื้ออุปกรณ์เพิ่มอย่างเดียวอาจยังแก้ปัญหาไม่ได้
                        </p>
                        <div style="background:#ffffff; border:2px solid #fcd34d; border-radius:14px; padding:18px; margin-bottom:14px;">
                            <strong style="color:#b45309; font-family:'Prompt'; font-size:31px;"><i class="fa-solid fa-store-slash"></i> ตัวอย่างร้านบริการช้า:</strong>
                            <p style="font-size:19.5px; color:#334155; margin-top:6px;">
                                ร้านซื้อแท็บเล็ตใหม่มาเพิ่ม แต่พนักงานยังต้องคัดลอกออเดอร์ลงสมุดอีก 2 รอบเหมือนเดิม ลูกค้าจึงยังรอนานเท่าเดิม!
                            </p>
                        </div>
                    </div>
                    <div class="easy-explain" style="margin-top:auto;">
                        <span class="easy-explain-badge"><i class="fa-solid fa-crosshairs"></i> สรุป</span>
                        <span class="easy-explain-text"><strong>การวิเคราะห์ช่วยค้นหาสาเหตุที่ควรจัดการก่อน</strong></span>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-magnifying-glass"></i> อธิบายตัวอย่างร้านบริการช้า</h4>
                <p>เน้นให้นักศึกษาเห็นว่า ถ้าขั้นตอนการทำงานมันซ้ำซ้อน (เช่น จดกระดาษ แล้วเดินไปคีย์ลงคอม แล้วเขียนแปะข้างแก้วอีกที) ต่อให้ซื้อคอมพิวเตอร์เครื่องละแสนมาวาง ก็ยังช้าเพราะขั้นตอนซ้ำซ้อนอยู่ดี</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 14: ความสำคัญของการวิเคราะห์: ทรัพยากร ขอบเขต และการประเมินผล
    // =========================================================================
    {
        id: 14,
        section: "ความสำคัญและการแยกแยะประเด็น (นาทีที่ 21–30)",
        timeGuide: "นาทีที่ 23–24",
        kicker: "สไลด์ที่ 14 • ทำไมต้องวิเคราะห์? (2/2)",
        title: "ความสำคัญของการวิเคราะห์: ทรัพยากร ขอบเขต และการประเมินผล",
        badge: "ข้อที่ 3, 4 และ 5",
        html: `
            <div class="grid-3" style="height:100%;">
                <!-- การ์ด 3 -->
                <div class="card emerald">
                    <div>
                        <div class="card-icon-header">
                            <div class="step-num" style="width:50px; height:50px; font-size:20.5px; background:#059669;">3</div>
                            <div class="card-title">ช่วยใช้ทรัพยากรอย่างเหมาะสม</div>
                        </div>
                        <div class="img-frame" style="height:145px; margin:10px 0;">
                            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" alt="ทรัพยากร">
                        </div>
                        <p class="card-text">
                            ธุรกิจสามารถเลือกลงทุนกับสิ่งที่จำเป็น โดยพิจารณา:
                        </p>
                        <ul style="font-size:19.5px; color:#334155; padding-left:22px; margin-top:8px; line-height:1.6;">
                            <li>งบประมาณ</li>
                            <li>เวลา</li>
                            <li>บุคลากร</li>
                            <li>ประโยชน์ที่คาดว่าจะได้รับ</li>
                        </ul>
                    </div>
                    <div style="background:#d1fae5; padding:10px 14px; border-radius:10px; font-size:31px; color:#065f46;">
                        <i class="fa-solid fa-coins"></i> ประหยัดงบ คุ้มค่าการลงทุน
                    </div>
                </div>

                <!-- การ์ด 4 -->
                <div class="card purple">
                    <div>
                        <div class="card-icon-header">
                            <div class="step-num" style="width:50px; height:50px; font-size:20.5px; background:#7c3aed;">4</div>
                            <div class="card-title">ช่วยกำหนดขอบเขตการทำงาน</div>
                        </div>
                        <div class="img-frame" style="height:145px; margin:10px 0;">
                            <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=600&q=80" alt="ขอบเขตการทำงาน">
                        </div>
                        <p class="card-text">
                            ผู้เกี่ยวข้องทราบชัดเจนว่า:
                        </p>
                        <ul style="font-size:19.5px; color:#334155; padding-left:22px; margin-top:8px; line-height:1.6;">
                            <li>จะปรับปรุงเรื่องใด</li>
                            <li>มีสิ่งใด<strong>รวมอยู่</strong>ในงาน</li>
                            <li>มีสิ่งใดที่<strong>ยังไม่ดำเนินการ</strong>ในระยะนั้น</li>
                        </ul>
                    </div>
                    <div style="background:#ede9fe; padding:10px 14px; border-radius:10px; font-size:31px; color:#5b21b6;">
                        <i class="fa-solid fa-border-all"></i> งานไม่บานปลาย (ไม่ทำเกินขอบเขต)
                    </div>
                </div>

                <!-- การ์ด 5 -->
                <div class="card cyan">
                    <div>
                        <div class="card-icon-header">
                            <div class="step-num" style="width:50px; height:50px; font-size:20.5px; background:#0891b2;">5</div>
                            <div class="card-title">ช่วยประเมินผลการปรับปรุง</div>
                        </div>
                        <div class="img-frame" style="height:145px; margin:10px 0;">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="ประเมินผล">
                        </div>
                        <p class="card-text">
                            เมื่อกำหนดผลลัพธ์และตัวชี้วัดไว้ชัดเจน ธุรกิจสามารถ<strong>เปรียบเทียบผลก่อนและหลังดำเนินการได้</strong>
                        </p>
                    </div>
                    <div style="background:#cffafe; padding:10px 14px; border-radius:10px; font-size:31px; color:#0e7490;">
                        <i class="fa-solid fa-chart-column"></i> วัดผลได้จริงด้วยตัวเลข Before / After
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-book"></i> คำศัพท์น่ารู้: ขอบเขตงาน (Scope)</h4>
                <p>อธิบายคำว่า "ขอบเขตการทำงาน" ให้นักศึกษาฟังง่ายๆ คือ การตกลงกันว่า รอบนี้เราจะทำแค่ระบบรับออเดอร์นะ ยังไม่รวมระบบบัญชีภาษี เพื่อให้งานเสร็จทันเวลา</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 15: ปัญหา ความต้องการ และแนวทางแก้ไข
    // =========================================================================
    {
        id: 15,
        section: "ความสำคัญและการแยกแยะประเด็น (นาทีที่ 21–30)",
        timeGuide: "นาทีที่ 25–26",
        kicker: "สไลด์ที่ 15 • แยกแยะ 3 คำสำคัญ",
        title: "ปัญหา ความต้องการ และแนวทางแก้ไข",
        badge: "ทั้งสามคำมีความเกี่ยวข้องกัน แต่มีความหมายแตกต่างกัน",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:20px;">
                <table class="styled-table" style="font-size:19.5px;">
                    <thead>
                        <tr>
                            <th style="width:28%;">ประเด็น</th>
                            <th>ความหมาย</th>
                            <th style="width:28%;">เปรียบเทียบง่ายๆ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background:#fff1f2;">
                            <td>
                                <span style="display:inline-flex; align-items:center; gap:10px; font-family:'Prompt'; font-weight:700; color:#be123c; font-size:31px;">
                                    <i class="fa-solid fa-circle-exclamation"></i> 1. ปัญหา (Problem)
                                </span>
                            </td>
                            <td><strong>สภาพที่เกิดขึ้นจริงและส่งผลเสียต่อการทำงาน</strong></td>
                            <td style="color:#881337;"><i class="fa-solid fa-face-tired"></i> “ตอนนี้รู้สึกหิวข้าวมาก ไม่มีแรงเรียน”</td>
                        </tr>
                        <tr style="background:#ecfdf5;">
                            <td>
                                <span style="display:inline-flex; align-items:center; gap:10px; font-family:'Prompt'; font-weight:700; color:#047857; font-size:31px;">
                                    <i class="fa-solid fa-bullseye"></i> 2. ความต้องการ (Need)
                                </span>
                            </td>
                            <td><strong>สิ่งที่จำเป็นเพื่อแก้ปัญหาหรือบรรลุเป้าหมาย</strong></td>
                            <td style="color:#065f46;"><i class="fa-solid fa-utensils"></i> “ต้องการรับประทานอาหารให้อิ่มท้อง”</td>
                        </tr>
                        <tr style="background:#eff6ff;">
                            <td>
                                <span style="display:inline-flex; align-items:center; gap:10px; font-family:'Prompt'; font-weight:700; color:#1d4ed8; font-size:31px;">
                                    <i class="fa-solid fa-screwdriver-wrench"></i> 3. แนวทางแก้ไข (Solution)
                                </span>
                            </td>
                            <td><strong>วิธีการหรือเครื่องมือที่เลือกใช้เพื่อตอบสนองความต้องการ</strong></td>
                            <td style="color:#1e3a8a;"><i class="fa-solid fa-bowl-rice"></i> “กินข้าวผัด / ต้มบะหมี่ / สั่งเดลิเวอรี”</td>
                        </tr>
                    </tbody>
                </table>

                <div class="easy-explain">
                    <span class="easy-explain-badge"><i class="fa-solid fa-link"></i> ความเชื่อมโยง</span>
                    <span class="easy-explain-text">
                        <strong>ทั้งสามคำมีความเกี่ยวข้องกัน แต่มีความหมายแตกต่างกัน:</strong> ปัญหาทำให้เกิดความต้องการ และความต้องการนำไปสู่การเลือกแนวทางแก้ไขที่เหมาะสม
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-star"></i> สไลด์หัวใจสำคัญของการสอบและทำงาน</h4>
                <p>ใช้ตัวอย่าง "หิวข้าว" ในคอลัมน์ขวาสุด อธิบายให้นักศึกษาเข้าใจใน 30 วินาที: หิวข้าวคือปัญหา, ต้องกินให้อิ่มคือความต้องการ, ส่วนจะกินกะเพราหรือกินก๋วยเตี๋ยวคือแนวทางแก้ไข (เลือกตามงบและเวลาที่มี)</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 16: ตัวอย่างการแยกปัญหา ความต้องการ และแนวทางแก้ไข
    // =========================================================================
    {
        id: 16,
        section: "ความสำคัญและการแยกแยะประเด็น (นาทีที่ 21–30)",
        timeGuide: "นาทีที่ 27–28",
        kicker: "สไลด์ที่ 16 • ตัวอย่างสถานการณ์จริง",
        title: "ตัวอย่างการแยกปัญหา ความต้องการ และแนวทางแก้ไข",
        badge: "สถานการณ์ร้านกาแฟ",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <div class="grid-2-asym" style="flex:1; align-items:center;">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th style="width:28%;">ประเด็น</th>
                                <th>ตัวอย่าง (สถานการณ์ร้านกาแฟ)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="background:#fff1f2;">
                                <td><strong style="color:#be123c; font-family:'Prompt';"><i class="fa-solid fa-triangle-exclamation"></i> ปัญหา</strong></td>
                                <td>คำสั่งซื้อบางรายการ<strong>ตกหล่นในช่วงพักกลางวัน</strong></td>
                            </tr>
                            <tr style="background:#ecfdf5;">
                                <td><strong style="color:#047857; font-family:'Prompt';"><i class="fa-solid fa-bullseye"></i> ความต้องการ</strong></td>
                                <td>ต้อง<strong>บันทึกและติดตามคำสั่งซื้อ</strong>แต่ละรายการได้ครบถ้วน</td>
                            </tr>
                            <tr style="background:#eff6ff;">
                                <td><strong style="color:#1d4ed8; font-family:'Prompt';"><i class="fa-solid fa-lightbulb"></i> แนวทางแก้ไข</strong></td>
                                <td>ใช้<strong>บัตรคิว</strong>, <strong>แบบฟอร์มรับรายการ</strong> หรือ<strong>ระบบรับคำสั่งซื้อ</strong></td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="img-frame" style="height:100%; max-height:360px;">
                        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80" alt="สถานการณ์ร้านกาแฟช่วงพักกลางวัน">
                        <div class="img-caption"><i class="fa-solid fa-mug-saucer"></i> ร้านกาแฟช่วงพักกลางวันที่มีลูกค้าเข้ามาพร้อมกันจำนวนมาก</div>
                    </div>
                </div>

                <div class="easy-explain" style="background:linear-gradient(90deg, #eff6ff, #dbeafe); border-color:#3b82f6;">
                    <span class="easy-explain-badge" style="background:#2563eb; color:#fff;"><i class="fa-solid fa-bookmark"></i> ข้อควรจำ</span>
                    <span class="easy-explain-text" style="color:#1e3a8a;">
                        <strong>ปัญหาเดียวอาจมีแนวทางแก้ไขได้หลายวิธี</strong> จึงควรทำความเข้าใจปัญหาและความต้องการก่อนเลือกเครื่องมือ
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-mug-hot"></i> ชี้ให้เห็นทางเลือก 3 ระดับ</h4>
                <p>ดูช่องแนวทางแก้ไข: 1) บัตรคิว (ลงทุนหลักร้อย) 2) แบบฟอร์มรับรายการ (ลงทุนค่ากระดาษ) 3) ระบบรับคำสั่งซื้อ POS (ลงทุนหลักพัน-หมื่น) ทั้ง 3 วิธีตอบสนองความต้องการเดียวกันได้!</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 17: ฝึกคิด: “ร้านต้องซื้อคอมพิวเตอร์ใหม่”
    // =========================================================================
    {
        id: 17,
        section: "ความสำคัญและการแยกแยะประเด็น (นาทีที่ 21–30)",
        timeGuide: "นาทีที่ 29–30",
        kicker: "สไลด์ที่ 17 • ชวนคิดวิเคราะห์ในชั้นเรียน",
        title: "ฝึกคิด: “ร้านต้องซื้อคอมพิวเตอร์ใหม่”",
        badge: "ข้อความนี้เป็น ปัญหา ความต้องการ หรือ แนวทางแก้ไข?",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <div class="grid-2" style="flex:1; align-items:center;">
                    <div class="card amber" style="height:100%; justify-content:center; gap:18px;">
                        <div style="background:#fff; border:3px solid #f59e0b; border-radius:16px; padding:22px; text-align:center;">
                            <span style="font-size:31px; font-weight:700; color:#b45309;">ประโยคที่ได้ยิน:</span>
                            <h3 style="font-size:31px; color:#0f172a; margin:8px 0;">“ร้านต้องซื้อคอมพิวเตอร์ใหม่”</h3>
                            <span style="background:#fef3c7; color:#92400e; padding:6px 16px; border-radius:999px; font-family:'Prompt'; font-weight:700; font-size:19.5px; display:inline-block;">
                                <i class="fa-solid fa-check-circle"></i> เฉลย: ข้อความนี้เป็น “แนวทางแก้ไขที่เสนอไว้”
                            </span>
                        </div>

                        <div class="img-frame" style="height:175px;">
                            <img src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=700&q=80" alt="คอมพิวเตอร์ในร้าน">
                            <div class="img-caption">คอมพิวเตอร์ทำงานช้า ต้องซื้อเครื่องใหม่เสมอไปหรือไม่?</div>
                        </div>
                    </div>

                    <div class="card blue" style="height:100%;">
                        <div>
                            <div class="card-icon-header">
                                <div class="icon-box blue"><i class="fa-solid fa-clipboard-question"></i></div>
                                <div class="card-title">ผู้วิเคราะห์ยังต้องตรวจสอบว่า:</div>
                            </div>
                            <div class="step-list" style="margin-top:14px;">
                                <div class="step-item">
                                    <div class="step-num">?</div>
                                    <div class="step-content">
                                        <h4>เครื่องเดิมทำงานช้าเพราะเหตุใด?</h4>
                                        <p>ฮาร์ดดิสก์เต็ม ติดไวรัส เปิดโปรแกรมค้างไว้ หรือสเปกเก่าเกินไป?</p>
                                    </div>
                                </div>
                                <div class="step-item">
                                    <div class="step-num">?</div>
                                    <div class="step-content">
                                        <h4>กระทบงานส่วนไหน?</h4>
                                        <p>ใช้แค่พิมพ์บิลคิดเงิน หรือใช้ตัดต่อวิดีโอหนักๆ?</p>
                                    </div>
                                </div>
                                <div class="step-item">
                                    <div class="step-num">?</div>
                                    <div class="step-content">
                                        <h4>สามารถปรับปรุงด้วยวิธีอื่นได้หรือไม่?</h4>
                                        <p>เช่น ล้างเครื่อง เพิ่มแรม หรือเปลี่ยนเป็น SSD ในงบหลักร้อย-พัน</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="easy-explain" style="margin-top:16px;">
                            <span class="easy-explain-badge"><i class="fa-solid fa-comments"></i> คำถามชวนคิด</span>
                            <span class="easy-explain-text">
                                <strong>ก่อนตัดสินใจซื้อ นักเรียนอยากทราบข้อมูลอะไรเพิ่มเติม?</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-hand-pointer"></i> กิจกรรมถาม-ตอบ 1 นาที</h4>
                <p>ให้นักศึกษาช่วยกันยกมือตอบคำถามชวนคิดว่า ก่อนจะควักเงินซื้อคอมใหม่ เราควรเช็กอะไรก่อน? (เช็กอายุเครื่อง, โปรแกรมที่ใช้, งบของร้าน, ลองเพิ่ม RAM/SSD ได้ไหม)</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 18: ผู้มีส่วนได้ส่วนเสียคือใคร?
    // =========================================================================
    {
        id: 18,
        section: "ผู้มีส่วนได้ส่วนเสียและประเภทความต้องการ (นาทีที่ 31–40)",
        timeGuide: "นาทีที่ 31–32",
        kicker: "สไลด์ที่ 18 • รู้จักผู้เกี่ยวข้องในธุรกิจ",
        title: "ผู้มีส่วนได้ส่วนเสียคือใคร?",
        badge: "Stakeholder (สเตกโฮลเดอร์)",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:20px;">
                <div class="card blue" style="padding:22px 28px;">
                    <h3 style="font-size:31px; color:#1e3a8a; margin-bottom:10px;">
                        <i class="fa-solid fa-users-viewfinder"></i> ผู้มีส่วนได้ส่วนเสีย (Stakeholder) หมายถึง บุคคล กลุ่มบุคคล หรือหน่วยงานที่:
                    </h3>
                    <div class="grid-3" style="gap:18px;">
                        <div style="background:#fff; border:2px solid #93c5fd; border-radius:14px; padding:16px; display:flex; align-items:center; gap:14px;">
                            <div class="icon-box blue"><i class="fa-solid fa-link"></i></div>
                            <div>
                                <strong style="font-size:31px; color:#0f172a;">1. มีส่วนเกี่ยวข้อง</strong>
                                <p style="font-size:20.5px; color:#475569;">ทำงานอยู่ในขั้นตอนนั้น</p>
                            </div>
                        </div>
                        <div style="background:#fff; border:2px solid #93c5fd; border-radius:14px; padding:16px; display:flex; align-items:center; gap:14px;">
                            <div class="icon-box amber"><i class="fa-solid fa-wave-square"></i></div>
                            <div>
                                <strong style="font-size:31px; color:#0f172a;">2. ได้รับผลกระทบ</strong>
                                <p style="font-size:20.5px; color:#475569;">เมื่อระบบเปลี่ยน เขาต้องเปลี่ยนวิธีใช้</p>
                            </div>
                        </div>
                        <div style="background:#fff; border:2px solid #93c5fd; border-radius:14px; padding:16px; display:flex; align-items:center; gap:14px;">
                            <div class="icon-box purple"><i class="fa-solid fa-gavel"></i></div>
                            <div>
                                <strong style="font-size:31px; color:#0f172a;">3. มีอิทธิพลต่อการเปลี่ยนแปลง</strong>
                                <p style="font-size:20.5px; color:#475569;">มีอำนาจอนุมัติงบหรือตัดสินใจ</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3 บทบาทที่ผู้วิเคราะห์ต้องพิจารณา -->
                <div class="grid-3" style="flex:1;">
                    <div class="card rose" style="align-items:center; text-align:center; justify-content:center;">
                        <div class="icon-box rose" style="width:64px; height:64px; font-size:31px;"><i class="fa-solid fa-person-circle-exclamation"></i></div>
                        <div class="card-title" style="margin-top:8px;">ใครเกี่ยวข้องกับปัญหา?</div>
                        <p class="card-text" style="font-size:19.5px;">คนที่เจอปัญหาหน้างานทุกวันและรู้รายละเอียดดีที่สุด</p>
                    </div>
                    <div class="card emerald" style="align-items:center; text-align:center; justify-content:center;">
                        <div class="icon-box emerald" style="width:64px; height:64px; font-size:31px;"><i class="fa-solid fa-hand-pointer"></i></div>
                        <div class="card-title" style="margin-top:8px;">ใครเป็นผู้ใช้งาน?</div>
                        <p class="card-text" style="font-size:19.5px;">คนที่ต้องกดใช้ระบบหรือทำตามขั้นตอนใหม่ทุกวัน</p>
                    </div>
                    <div class="card amber" style="align-items:center; text-align:center; justify-content:center;">
                        <div class="icon-box amber" style="width:64px; height:64px; font-size:31px;"><i class="fa-solid fa-user-tie"></i></div>
                        <div class="card-title" style="margin-top:8px;">ใครมีอำนาจตัดสินใจ?</div>
                        <p class="card-text" style="font-size:19.5px;">เจ้าของร้านหรือผู้จัดการที่อนุมัติงบและทิศทาง</p>
                    </div>
                </div>

                <div class="easy-explain">
                    <span class="easy-explain-badge"><i class="fa-solid fa-language"></i> ศัพท์เทคนิคเข้าใจง่าย</span>
                    <span class="easy-explain-text">
                        <strong>Stakeholder (ผู้มีส่วนได้ส่วนเสีย)</strong> ไม่ได้แปลว่าคนถือหุ้นเท่านั้น แต่หมายถึง <strong>“ทุกคนที่เกี่ยวข้องกับงานนี้”</strong> ตั้งแต่เจ้าของ พนักงาน ลูกค้า ไปจนถึงขนส่ง
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-language"></i> อธิบายคำว่า Stakeholder</h4>
                <p>คำว่า "ผู้มีส่วนได้ส่วนเสีย" ฟังดูเหมือนภาษากฎหมาย แต่ในทางธุรกิจดิจิทัล แปลว่า "ใครก็ได้ที่ถ้าเราเปลี่ยนวิธีทำงานของร้าน แล้วชีวิตเขาได้รับผลกระทบ"</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 19: ผู้มีส่วนได้ส่วนเสียของร้านค้าออนไลน์
    // =========================================================================
    {
        id: 19,
        section: "ผู้มีส่วนได้ส่วนเสียและประเภทความต้องการ (นาทีที่ 31–40)",
        timeGuide: "นาทีที่ 33–34",
        kicker: "สไลด์ที่ 19 • ตัวอย่างการระบุผู้เกี่ยวข้อง",
        title: "ผู้มีส่วนได้ส่วนเสียของร้านค้าออนไลน์",
        badge: "6 บทบาทสำคัญและความต้องการที่ต่างกัน",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
                <table class="styled-table" style="font-size:31px;">
                    <thead>
                        <tr>
                            <th style="width:34%;"><i class="fa-solid fa-id-card-clip"></i> ผู้เกี่ยวข้อง (Stakeholder)</th>
                            <th><i class="fa-solid fa-heart"></i> ความต้องการหรือประเด็นที่สนใจ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong><i class="fa-solid fa-user-tie" style="color:#2563eb; width:28px;"></i> 1. เจ้าของร้าน</strong></td>
                            <td>ทราบ<strong>ยอดขาย ต้นทุน และผลการดำเนินงาน</strong></td>
                        </tr>
                        <tr>
                            <td><strong><i class="fa-solid fa-headset" style="color:#059669; width:28px;"></i> 2. พนักงานรับคำสั่งซื้อ</strong></td>
                            <td>ได้รับ<strong>ข้อมูลรายการสินค้าและที่อยู่ครบถ้วน</strong></td>
                        </tr>
                        <tr>
                            <td><strong><i class="fa-solid fa-boxes-packing" style="color:#d97706; width:28px;"></i> 3. พนักงานจัดสินค้า</strong></td>
                            <td>ทราบว่า<strong>ต้องจัดสินค้าอะไร จำนวนเท่าใด</strong></td>
                        </tr>
                        <tr>
                            <td><strong><i class="fa-solid fa-face-smile" style="color:#e11d48; width:28px;"></i> 4. ลูกค้า</strong></td>
                            <td>ได้รับ<strong>สินค้าถูกต้องและติดตามสถานะได้</strong></td>
                        </tr>
                        <tr>
                            <td><strong><i class="fa-solid fa-user-shield" style="color:#7c3aed; width:28px;"></i> 5. ผู้ดูแลระบบ (Admin)</strong></td>
                            <td><strong>ดูแลข้อมูลและแก้ไขปัญหาการใช้งานได้</strong></td>
                        </tr>
                        <tr>
                            <td><strong><i class="fa-solid fa-truck-fast" style="color:#0891b2; width:28px;"></i> 6. ผู้ให้บริการขนส่ง</strong></td>
                            <td>ได้รับ<strong>ข้อมูลจัดส่งที่ถูกต้องและอ่านได้ชัดเจน</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-box"></i> ชวนคิดจากประสบการณ์สั่งของออนไลน์</h4>
                <p>ถามนักศึกษาว่า เวลาเราสั่งของ Shopee/TikTok กว่าของจะมาถึงมือเรา ต้องผ่านมือใครบ้าง? ทั้ง 6 กลุ่มในตารางนี้มองสิ่งที่อยากได้คนละมุมกันทั้งหมด</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 20: เมื่อผู้เกี่ยวข้องมีความต้องการต่างกัน
    // =========================================================================
    {
        id: 20,
        section: "ผู้มีส่วนได้ส่วนเสียและประเภทความต้องการ (นาทีที่ 31–40)",
        timeGuide: "นาทีที่ 35",
        kicker: "สไลด์ที่ 20 • การหาจุดสมดุล",
        title: "เมื่อผู้เกี่ยวข้องมีความต้องการต่างกัน",
        badge: "แต่ละกลุ่มอาจมีความต้องการต่างกัน",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:20px;">
                <div class="grid-2" style="flex:1;">
                    <!-- มุมมองที่ 1: เจ้าของร้าน -->
                    <div class="card blue" style="justify-content:center; align-items:center; text-align:center;">
                        <div class="icon-box blue" style="width:74px; height:74px; font-size:31px;"><i class="fa-solid fa-user-tie"></i></div>
                        <div class="card-title" style="font-size:24px; margin-top:10px;">มุมมอง: เจ้าของร้าน</div>
                        <div style="background:#fff; border:2px solid #93c5fd; border-radius:16px; padding:20px 24px; margin-top:12px; width:100%;">
                            <p style="font-size:31px; font-weight:600; color:#1e3a8a;">
                                “ต้องการเก็บข้อมูลลูกค้าเพื่อวิเคราะห์การซื้อ”
                            </p>
                            <p style="font-size:19.5px; color:#64748b; margin-top:6px;">
                                (อยากรู้เพศ อายุ วันเกิด ความชอบ เพื่อทำโปรโมชัน)
                            </p>
                        </div>
                    </div>

                    <!-- มุมมองที่ 2: ลูกค้า -->
                    <div class="card rose" style="justify-content:center; align-items:center; text-align:center;">
                        <div class="icon-box rose" style="width:74px; height:74px; font-size:31px;"><i class="fa-solid fa-user-lock"></i></div>
                        <div class="card-title" style="font-size:24px; margin-top:10px;">มุมมอง: ลูกค้า</div>
                        <div style="background:#fff; border:2px solid #fda4af; border-radius:16px; padding:20px 24px; margin-top:12px; width:100%;">
                            <p style="font-size:31px; font-weight:600; color:#881337;">
                                “ต้องการกรอกข้อมูลให้น้อยและรักษาความเป็นส่วนตัว”
                            </p>
                            <p style="font-size:19.5px; color:#64748b; margin-top:6px;">
                                (ไม่อยากกรอกฟอร์มยาวๆ อยากสั่งซื้อให้เสร็จไวที่สุด)
                            </p>
                        </div>
                    </div>
                </div>

                <!-- บทบาทของผู้วิเคราะห์ด้านล่าง -->
                <div class="card emerald" style="padding:22px 28px; flex-direction:row; align-items:center; gap:22px;">
                    <div class="icon-box emerald" style="width:68px; height:68px; font-size:31px;"><i class="fa-solid fa-scale-balanced"></i></div>
                    <div>
                        <div style="font-family:'Prompt'; font-size:31px; font-weight:700; color:#065f46;">บทบาทของผู้วิเคราะห์ (Analyst's Role)</div>
                        <p style="font-size:20.5px; color:#0f172a; margin-top:4px;">
                            พิจารณา<strong>ความจำเป็นของข้อมูล</strong> และ<strong>หาข้อตกลงร่วมกัน</strong>ระหว่างผู้เกี่ยวข้อง (เช่น บังคับกรอกเฉพาะชื่อ-เบอร์โทร-ที่อยู่จัดส่ง ส่วนข้อมูลอื่นให้เป็นทางเลือกสะสมแต้ม)
                        </p>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-handshake"></i> ตัวอย่างการประนีประนอม</h4>
                <p>ถ้าให้ลูกค้ากรอกข้อมูล 20 ช่องก่อนซื้อกาแฟ 1 แก้ว ลูกค้าหนีหมดแน่นอน! นักวิเคราะห์จึงต้องช่วยหาจุดกึ่งกลางที่เจ้าของได้ข้อมูลเท่าที่จำเป็น และลูกค้าไม่รำคาญ</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 21: ประเภทของความต้องการเบื้องต้น
    // =========================================================================
    {
        id: 21,
        section: "ผู้มีส่วนได้ส่วนเสียและประเภทความต้องการ (นาทีที่ 31–40)",
        timeGuide: "นาทีที่ 36–37",
        kicker: "สไลด์ที่ 21 • การจัดหมวดหมู่ความต้องการ",
        title: "ประเภทของความต้องการเบื้องต้น",
        badge: "แบ่งความต้องการเพื่อให้เข้าใจง่ายเป็น 4 กลุ่ม",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <div class="grid-2" style="flex:1; gap:22px;">
                    <!-- กลุ่ม 1 -->
                    <div class="card blue">
                        <div class="card-icon-header">
                            <div class="icon-box blue"><i class="fa-solid fa-building"></i></div>
                            <div>
                                <span style="font-size:19.5px; color:#1d4ed8; font-weight:700;">กลุ่มที่ 1 (Business Requirement)</span>
                                <div class="card-title">ความต้องการระดับธุรกิจ</div>
                            </div>
                        </div>
                        <div style="background:#fff; border:2px solid #93c5fd; border-radius:12px; padding:16px; margin-top:auto;">
                            <strong style="color:#1e3a8a; font-size:19.5px;">คำถามหลัก:</strong>
                            <p style="font-family:'Prompt'; font-size:31px; font-weight:700; color:#0f172a; margin-top:4px;">“ธุรกิจต้องการบรรลุผลอะไร?”</p>
                        </div>
                    </div>

                    <!-- กลุ่ม 2 -->
                    <div class="card emerald">
                        <div class="card-icon-header">
                            <div class="icon-box emerald"><i class="fa-solid fa-users"></i></div>
                            <div>
                                <span style="font-size:19.5px; color:#047857; font-weight:700;">กลุ่มที่ 2 (Stakeholder Requirement)</span>
                                <div class="card-title">ความต้องการของผู้เกี่ยวข้อง</div>
                            </div>
                        </div>
                        <div style="background:#fff; border:2px solid #6ee7b7; border-radius:12px; padding:16px; margin-top:auto;">
                            <strong style="color:#065f46; font-size:19.5px;">คำถามหลัก:</strong>
                            <p style="font-family:'Prompt'; font-size:31px; font-weight:700; color:#0f172a; margin-top:4px;">“แต่ละฝ่ายต้องการอะไรเพื่อทำงานหรือรับบริการ?”</p>
                        </div>
                    </div>

                    <!-- กลุ่ม 3 -->
                    <div class="card amber">
                        <div class="card-icon-header">
                            <div class="icon-box amber"><i class="fa-solid fa-gears"></i></div>
                            <div>
                                <span style="font-size:19.5px; color:#b45309; font-weight:700;">กลุ่มที่ 3 (Functional Requirement)</span>
                                <div class="card-title">ความต้องการด้านหน้าที่ของระบบ</div>
                            </div>
                        </div>
                        <div style="background:#fff; border:2px solid #fcd34d; border-radius:12px; padding:16px; margin-top:auto;">
                            <strong style="color:#92400e; font-size:19.5px;">คำถามหลัก:</strong>
                            <p style="font-family:'Prompt'; font-size:31px; font-weight:700; color:#0f172a; margin-top:4px;">“ระบบต้องทำอะไรได้?”</p>
                        </div>
                    </div>

                    <!-- กลุ่ม 4 -->
                    <div class="card purple">
                        <div class="card-icon-header">
                            <div class="icon-box purple"><i class="fa-solid fa-shield-halved"></i></div>
                            <div>
                                <span style="font-size:19.5px; color:#6d28d9; font-weight:700;">กลุ่มที่ 4 (Non-Functional / Quality)</span>
                                <div class="card-title">ความต้องการด้านคุณภาพและเงื่อนไขการทำงาน</div>
                            </div>
                        </div>
                        <div style="background:#fff; border:2px solid #c4b5fd; border-radius:12px; padding:16px; margin-top:auto;">
                            <strong style="color:#5b21b6; font-size:19.5px;">คำถามหลัก:</strong>
                            <p style="font-family:'Prompt'; font-size:20.5px; font-weight:700; color:#0f172a; margin-top:4px;">“ระบบต้องทำงานได้ดีเพียงใดหรือภายใต้เงื่อนไขใด?”</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-layer-group"></i> เทคนิคจำสี 4 กลุ่ม</h4>
                <p>เราใช้สี 4 สี (ฟ้า-เขียว-ส้ม-ม่วง) ต่อเนื่องไปยังสไลด์ที่ 22 และ 23 เพื่อให้นักศึกษาเชื่อมโยงได้ทันทีว่าแต่ละระดับต่างกันอย่างไร</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 22: ตัวอย่างความต้องการแต่ละประเภท
    // =========================================================================
    {
        id: 22,
        section: "ผู้มีส่วนได้ส่วนเสียและประเภทความต้องการ (นาทีที่ 31–40)",
        timeGuide: "นาทีที่ 38",
        kicker: "สไลด์ที่ 22 • ตัวอย่างเปรียบเทียบ 4 ประเภท",
        title: "ตัวอย่างความต้องการแต่ละประเภท",
        badge: "ใช้สีประเภทเดียวกับสไลด์ก่อนหน้าเพื่อเชื่อมโยงได้ง่าย",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <table class="styled-table" style="font-size:31px;">
                    <thead>
                        <tr>
                            <th style="width:45%;">ประเภทความต้องการ</th>
                            <th>ตัวอย่าง</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background:#eff6ff;">
                            <td>
                                <strong style="color:#1d4ed8; font-family:'Prompt';"><i class="fa-solid fa-building"></i> 1. ความต้องการระดับธุรกิจ</strong>
                            </td>
                            <td><strong>ลดคำสั่งซื้อที่ตกหล่น</strong></td>
                        </tr>
                        <tr style="background:#ecfdf5;">
                            <td>
                                <strong style="color:#047857; font-family:'Prompt';"><i class="fa-solid fa-users"></i> 2. ความต้องการของผู้เกี่ยวข้อง</strong>
                            </td>
                            <td><strong>พนักงานต้องการเห็นรายการที่ยังไม่ได้จัดทำ</strong></td>
                        </tr>
                        <tr style="background:#fffbeb;">
                            <td>
                                <strong style="color:#b45309; font-family:'Prompt';"><i class="fa-solid fa-gears"></i> 3. ความต้องการด้านหน้าที่ของระบบ</strong>
                            </td>
                            <td><strong>บันทึกคำสั่งซื้อและเปลี่ยนสถานะรายการได้</strong></td>
                        </tr>
                        <tr style="background:#f5f3ff;">
                            <td>
                                <strong style="color:#6d28d9; font-family:'Prompt';"><i class="fa-solid fa-shield-halved"></i> 4. ความต้องการด้านคุณภาพและเงื่อนไขการทำงาน</strong>
                            </td>
                            <td><strong>จำกัดสิทธิ์ดูรายงานยอดขายเฉพาะผู้ได้รับอนุญาต</strong></td>
                        </tr>
                    </tbody>
                </table>

                <div class="easy-explain">
                    <span class="easy-explain-badge"><i class="fa-solid fa-lightbulb"></i> สังเกตความต่าง</span>
                    <span class="easy-explain-text">
                        ข้อ 3 (หน้าที่ระบบ) คือ <strong>“มีปุ่มให้กดทำอะไรได้”</strong> ส่วนข้อ 4 (คุณภาพ/เงื่อนไข) คือ <strong>“ความปลอดภัย ความเร็ว หรือสิทธิ์การเข้าถึง”</strong>
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-check"></i> ยกตัวอย่างเปรียบเทียบ</h4>
                <p>ให้นักศึกษาแยกให้ออกระหว่างข้อ 3 กับข้อ 4: "บันทึกออเดอร์ได้" = หน้าที่ของระบบ (ข้อ 3) แต่ถ้าบอกว่า "เฉพาะเจ้าของร้านเท่านั้นที่ลบออเดอร์ได้" = เงื่อนไขและความปลอดภัย (ข้อ 4)</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 23: ความต้องการแต่ละระดับเชื่อมโยงกันอย่างไร?
    // =========================================================================
    {
        id: 23,
        section: "ผู้มีส่วนได้ส่วนเสียและประเภทความต้องการ (นาทีที่ 31–40)",
        timeGuide: "นาทีที่ 39–40",
        kicker: "สไลด์ที่ 23 • การเชื่อมโยงจากบนลงล่าง",
        title: "ความต้องการแต่ละระดับเชื่อมโยงกันอย่างไร?",
        badge: "ตัวอย่าง: ลดความผิดพลาดในการจัดส่ง",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:12px;">
                <div class="hierarchy-stack">
                    <!-- Level 1 -->
                    <div class="hierarchy-level" style="background:#eff6ff; border-color:#93c5fd;">
                        <div style="font-family:'Prompt'; font-weight:700; font-size:31px; color:#1d4ed8;">
                            <i class="fa-solid fa-1"></i>. ระดับธุรกิจ
                        </div>
                        <div style="font-size:31px; font-weight:600; color:#0f172a;">
                            ธุรกิจต้องการ<strong>ลดความผิดพลาดในการจัดส่ง</strong>
                        </div>
                    </div>

                    <div class="hierarchy-arrow"><i class="fa-solid fa-angles-down"></i> นำไปสู่</div>

                    <!-- Level 2 -->
                    <div class="hierarchy-level" style="background:#ecfdf5; border-color:#6ee7b7;">
                        <div style="font-family:'Prompt'; font-weight:700; font-size:31px; color:#047857;">
                            <i class="fa-solid fa-2"></i>. ระดับผู้เกี่ยวข้อง
                        </div>
                        <div style="font-size:31px; font-weight:600; color:#0f172a;">
                            พนักงานต้องการ<strong>ตรวจสอบรายการก่อนบรรจุสินค้า</strong>
                        </div>
                    </div>

                    <div class="hierarchy-arrow"><i class="fa-solid fa-angles-down"></i> นำไปสู่</div>

                    <!-- Level 3 -->
                    <div class="hierarchy-level" style="background:#fffbeb; border-color:#fcd34d;">
                        <div style="font-family:'Prompt'; font-weight:700; font-size:31px; color:#b45309;">
                            <i class="fa-solid fa-3"></i>. ด้านหน้าที่ของระบบ
                        </div>
                        <div style="font-size:31px; font-weight:600; color:#0f172a;">
                            ระบบต้อง<strong>แสดงสินค้า จำนวน และที่อยู่จัดส่งของแต่ละคำสั่งซื้อ</strong>
                        </div>
                    </div>

                    <div class="hierarchy-arrow"><i class="fa-solid fa-angles-down"></i> ควบคู่กับ</div>

                    <!-- Level 4 -->
                    <div class="hierarchy-level" style="background:#f5f3ff; border-color:#c4b5fd;">
                        <div style="font-family:'Prompt'; font-weight:700; font-size:31px; color:#6d28d9;">
                            <i class="fa-solid fa-4"></i>. ด้านคุณภาพและเงื่อนไข
                        </div>
                        <div style="font-size:31px; font-weight:600; color:#0f172a;">
                            ข้อมูลที่อยู่ต้อง<strong>เปิดดูได้เฉพาะผู้ที่จำเป็นต้องใช้ในการทำงาน</strong>
                        </div>
                    </div>
                </div>

                <div class="easy-explain">
                    <span class="easy-explain-badge"><i class="fa-solid fa-sitemap"></i> สรุปหลักคิด</span>
                    <span class="easy-explain-text">
                        <strong>ความต้องการแต่ละระดับควรเชื่อมโยงกัน</strong> เพื่ออธิบายได้ว่าฟังก์ชันหรือเงื่อนไขที่กำหนดช่วยธุรกิจเรื่องใด (ไม่สร้างฟีเจอร์ลอยๆ ที่ไม่เกี่ยวกับเป้าหมายร้าน)
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-arrow-down-up-across-line"></i> การตรวจสอบย้อนกลับ</h4>
                <p>เวลาเราออกแบบหน้าจอโปรแกรม ถ้ามีคนถามว่า "ทำไมต้องมีหน้าจอแสดงรายการสินค้าและที่อยู่?" เราสามารถชี้กลับไปที่ข้อ 2 และข้อ 1 ได้ทันทีว่า "เพื่อช่วยให้พนักงานเช็กของก่อนแพ็ก และลดการส่งของผิดของร้านครับ"</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 24: ภาพรวมขั้นตอนการวิเคราะห์ความต้องการทางธุรกิจ
    // =========================================================================
    {
        id: 24,
        section: "ขั้นตอนการวิเคราะห์และการรวบรวมข้อมูล (นาทีที่ 41–50)",
        timeGuide: "นาทีที่ 41",
        kicker: "สไลด์ที่ 24 • กระบวนการทำงาน 6 ขั้นตอน",
        title: "ภาพรวมขั้นตอนการวิเคราะห์ความต้องการทางธุรกิจ",
        badge: "6 ขั้นตอนหลัก พร้อมการทบทวนย้อนกลับได้",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <div class="grid-3" style="flex:1; gap:20px;">
                    <!-- ขั้น 1 -->
                    <div class="card blue" style="justify-content:center;">
                        <div class="card-icon-header">
                            <div class="step-num">1</div>
                            <div class="card-title" style="font-size:31px;">ศึกษาสถานการณ์ปัจจุบัน</div>
                        </div>
                        <p style="font-size:19.5px; color:#475569;">ดูภาพรวมธุรกิจ ขั้นตอนการทำงาน และเครื่องมือเดิมที่ใช้</p>
                    </div>

                    <!-- ขั้น 2 -->
                    <div class="card rose" style="justify-content:center;">
                        <div class="card-icon-header">
                            <div class="step-num" style="background:#e11d48;">2</div>
                            <div class="card-title" style="font-size:31px;">ระบุปัญหาและเป้าหมาย</div>
                        </div>
                        <p style="font-size:19.5px; color:#475569;">ชี้ให้ชัดว่าอะไรคือปัญหา ผลกระทบ และผลลัพธ์ที่อยากได้</p>
                    </div>

                    <!-- ขั้น 3 -->
                    <div class="card purple" style="justify-content:center;">
                        <div class="card-icon-header">
                            <div class="step-num" style="background:#7c3aed;">3</div>
                            <div class="card-title" style="font-size:31px;">ระบุผู้มีส่วนได้ส่วนเสีย</div>
                        </div>
                        <p style="font-size:19.5px; color:#475569;">ลิสต์รายชื่อกลุ่มคนที่ต้องสอบถาม ใช้งาน และตัดสินใจ</p>
                    </div>

                    <!-- ขั้น 4 -->
                    <div class="card amber" style="justify-content:center;">
                        <div class="card-icon-header">
                            <div class="step-num" style="background:#d97706;">4</div>
                            <div class="card-title" style="font-size:31px;">รวบรวมข้อมูล</div>
                        </div>
                        <p style="font-size:19.5px; color:#475569;">สัมภาษณ์ สังเกตหน้างาน แบบสอบถาม หรือดูเอกสารจริง</p>
                    </div>

                    <!-- ขั้น 5 -->
                    <div class="card cyan" style="justify-content:center;">
                        <div class="card-icon-header">
                            <div class="step-num" style="background:#0891b2;">5</div>
                            <div class="card-title" style="font-size:31px;">วิเคราะห์และจัดลำดับความสำคัญ</div>
                        </div>
                        <p style="font-size:19.5px; color:#475569;">คัดกรองข้อมูลที่ซ้ำซ้อน/ขัดแย้ง และเลือกเรื่องเร่งด่วนก่อน</p>
                    </div>

                    <!-- ขั้น 6 -->
                    <div class="card emerald" style="justify-content:center;">
                        <div class="card-icon-header">
                            <div class="step-num" style="background:#059669;">6</div>
                            <div class="card-title" style="font-size:31px;">บันทึกและยืนยันความต้องการ</div>
                        </div>
                        <p style="font-size:19.5px; color:#475569;">สรุปเป็นเอกสารให้ทุกฝ่ายตรวจทานตรงกันก่อนเริ่มทำ</p>
                    </div>
                </div>

                <div class="easy-explain" style="background:linear-gradient(90deg, #eff6ff, #e0e7ff); border-color:#4f46e5;">
                    <span class="easy-explain-badge" style="background:#4f46e5; color:#fff;"><i class="fa-solid fa-rotate-left"></i> ข้อสังเกต (ทบทวนซ้ำได้)</span>
                    <span class="easy-explain-text" style="color:#1e1b4b;">
                        <strong>ขั้นตอนเหล่านี้สามารถย้อนกลับไปทบทวนได้</strong> เมื่อพบข้อมูลใหม่อาจต้องปรับการระบุปัญหาหรือสอบถามผู้เกี่ยวข้องเพิ่มเติม
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-arrows-rotate"></i> ไม่ใช่เส้นตรงทางเดียว</h4>
                <p>ย้ำสัญลักษณ์การทบทวนย้อนกลับ (Iterative): เช่น พอไปขั้นที่ 4 (รวบรวมข้อมูล) แล้วเพิ่งรู้ว่าคนส่งของก็เกี่ยวข้องด้วย เราก็ย้อนกลับไปเพิ่มชื่อในขั้นที่ 3 ได้เสมอ</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 25: ขั้นที่ 1–2: ศึกษาสถานการณ์และระบุปัญหา
    // =========================================================================
    {
        id: 25,
        section: "ขั้นตอนการวิเคราะห์และการรวบรวมข้อมูล (นาทีที่ 41–50)",
        timeGuide: "นาทีที่ 42",
        kicker: "สไลด์ที่ 25 • เจาะลึกขั้นตอนที่ 1 และ 2",
        title: "ขั้นที่ 1–2: ศึกษาสถานการณ์และระบุปัญหา",
        badge: "รายละเอียดและตัวอย่างประกอบ",
        html: `
            <div class="grid-2" style="gap:28px; height:100%;">
                <!-- ขั้นที่ 1 -->
                <div class="card blue">
                    <div>
                        <div class="card-icon-header">
                            <div class="step-num">1</div>
                            <div class="card-title">ขั้นที่ 1 ศึกษาสถานการณ์ปัจจุบัน</div>
                        </div>
                        <p class="card-text" style="margin-bottom:12px;">ทำความเข้าใจใน 4 ประเด็นหลัก:</p>
                        <div class="grid-2" style="gap:12px; height:auto; margin-bottom:18px;">
                            <div style="background:#fff; padding:12px 16px; border-radius:10px; border:1px solid #93c5fd; font-size:19.5px;"><i class="fa-solid fa-shop" style="color:#2563eb;"></i> ลักษณะธุรกิจ</div>
                            <div style="background:#fff; padding:12px 16px; border-radius:10px; border:1px solid #93c5fd; font-size:19.5px;"><i class="fa-solid fa-shoe-prints" style="color:#2563eb;"></i> ขั้นตอนการทำงาน</div>
                            <div style="background:#fff; padding:12px 16px; border-radius:10px; border:1px solid #93c5fd; font-size:19.5px;"><i class="fa-solid fa-book" style="color:#2563eb;"></i> เครื่องมือที่ใช้</div>
                            <div style="background:#fff; padding:12px 16px; border-radius:10px; border:1px solid #93c5fd; font-size:19.5px;"><i class="fa-solid fa-triangle-exclamation" style="color:#2563eb;"></i> ปัญหาที่พบ</div>
                        </div>
                    </div>
                    <div style="background:#dbeafe; border-left:5px solid #1d4ed8; padding:16px 20px; border-radius:10px;">
                        <strong style="color:#1e3a8a; font-size:19.5px;"><i class="fa-solid fa-clipboard"></i> ตัวอย่างขั้นที่ 1:</strong>
                        <p style="font-size:19.5px; color:#0f172a; margin-top:4px;">
                            “ร้านรับคำสั่งซื้อผ่านหน้าร้านและข้อความออนไลน์ โดยพนักงานจดลงสมุดเล่มเดียวกัน”
                        </p>
                    </div>
                </div>

                <!-- ขั้นที่ 2 -->
                <div class="card rose">
                    <div>
                        <div class="card-icon-header">
                            <div class="step-num" style="background:#e11d48;">2</div>
                            <div class="card-title">ขั้นที่ 2 ระบุปัญหาและเป้าหมาย</div>
                        </div>
                        <p class="card-text" style="margin-bottom:16px;">
                            อธิบาย<strong>สิ่งที่เกิดขึ้น</strong> <strong>ผลกระทบ</strong> และ<strong>ผลลัพธ์ที่ต้องการ</strong>ให้ชัดเจน
                        </p>
                        <div class="img-frame" style="height:170px; margin-bottom:16px;">
                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80" alt="ระบุปัญหาและเป้าหมาย">
                        </div>
                    </div>
                    <div style="background:#ffe4e6; border-left:5px solid #be123c; padding:16px 20px; border-radius:10px;">
                        <strong style="color:#881337; font-size:19.5px;"><i class="fa-solid fa-bullseye"></i> ตัวอย่างขั้นที่ 2:</strong>
                        <p style="font-size:19.5px; color:#0f172a; margin-top:4px;">
                            “รายการจากข้อความออนไลน์ถูกบันทึกล่าช้า ทำให้ลูกค้าบางรายไม่ได้รับการยืนยันคำสั่งซื้อ”
                        </p>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-magnifying-glass"></i> สังเกตความต่อเนื่อง</h4>
                <p>จากขั้นที่ 1 ที่เห็นว่า "แย่งกันจดลงสมุดเล่มเดียว" นำมาสู่การระบุปัญหาและผลกระทบในขั้นที่ 2 ว่า "รายการออนไลน์ถูกจดช้า จนลูกค้าไม่ได้รับการยืนยัน"</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 26: ขั้นที่ 3–4: ระบุผู้เกี่ยวข้องและรวบรวมข้อมูล
    // =========================================================================
    {
        id: 26,
        section: "ขั้นตอนการวิเคราะห์และการรวบรวมข้อมูล (นาทีที่ 41–50)",
        timeGuide: "นาทีที่ 43",
        kicker: "สไลด์ที่ 26 • เจาะลึกขั้นตอนที่ 3 และ 4",
        title: "ขั้นที่ 3–4: ระบุผู้เกี่ยวข้องและรวบรวมข้อมูล",
        badge: "รู้ว่าต้องถามใคร และใช้วิธีใดเก็บข้อมูล",
        html: `
            <div class="grid-2" style="gap:28px; height:100%;">
                <!-- ขั้นที่ 3 -->
                <div class="card purple">
                    <div>
                        <div class="card-icon-header">
                            <div class="step-num" style="background:#7c3aed;">3</div>
                            <div class="card-title">ขั้นที่ 3 ระบุผู้มีส่วนได้ส่วนเสีย</div>
                        </div>
                        <p class="card-text" style="margin-bottom:14px;">พิจารณา 3 คำถามสำคัญ:</p>
                        <div class="step-list">
                            <div class="step-item" style="border-left-color:#7c3aed;">
                                <div class="step-num" style="background:#7c3aed;"><i class="fa-solid fa-comments"></i></div>
                                <div class="step-content"><h4>ต้องสอบถามใครบ้าง?</h4><p>ใครรู้ข้อมูลหน้างานและปัญหาที่เกิดจริง</p></div>
                            </div>
                            <div class="step-item" style="border-left-color:#7c3aed;">
                                <div class="step-num" style="background:#7c3aed;"><i class="fa-solid fa-laptop"></i></div>
                                <div class="step-content"><h4>ใครเป็นผู้ใช้งาน?</h4><p>ใครจะต้องเป็นคนใช้ระบบหรือทำตามวิธีใหม่</p></div>
                            </div>
                            <div class="step-item" style="border-left-color:#7c3aed;">
                                <div class="step-num" style="background:#7c3aed;"><i class="fa-solid fa-user-check"></i></div>
                                <div class="step-content"><h4>ใครมีอำนาจตัดสินใจ?</h4><p>ใครเป็นผู้อนุมัติงบประมาณและฟันธง</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ขั้นที่ 4 -->
                <div class="card amber">
                    <div>
                        <div class="card-icon-header">
                            <div class="step-num" style="background:#d97706;">4</div>
                            <div class="card-title">ขั้นที่ 4 รวบรวมข้อมูล</div>
                        </div>
                        <p class="card-text" style="margin-bottom:14px;">เลือกวิธีที่เหมาะสมกับสถานการณ์ เช่น:</p>
                        <div class="grid-2" style="gap:14px; height:auto;">
                            <div style="background:#fff; border:2px solid #fcd34d; border-radius:14px; padding:16px; text-align:center;">
                                <i class="fa-solid fa-microphone-lines" style="font-size:31px; color:#d97706; margin-bottom:8px;"></i>
                                <h4 style="font-family:'Prompt'; font-size:31px;">1. สัมภาษณ์</h4>
                                <p style="font-size:31px; color:#64748b;">พูดคุยซักถามเชิงลึก</p>
                            </div>
                            <div style="background:#fff; border:2px solid #fcd34d; border-radius:14px; padding:16px; text-align:center;">
                                <i class="fa-solid fa-binoculars" style="font-size:31px; color:#d97706; margin-bottom:8px;"></i>
                                <h4 style="font-family:'Prompt'; font-size:31px;">2. สังเกตการทำงาน</h4>
                                <p style="font-size:31px; color:#64748b;">ไปยืนดูหน้างานจริง</p>
                            </div>
                            <div style="background:#fff; border:2px solid #fcd34d; border-radius:14px; padding:16px; text-align:center;">
                                <i class="fa-solid fa-square-poll-horizontal" style="font-size:31px; color:#d97706; margin-bottom:8px;"></i>
                                <h4 style="font-family:'Prompt'; font-size:31px;">3. ใช้แบบสอบถาม</h4>
                                <p style="font-size:31px; color:#64748b;">เก็บข้อมูลจากคนจำนวนมาก</p>
                            </div>
                            <div style="background:#fff; border:2px solid #fcd34d; border-radius:14px; padding:16px; text-align:center;">
                                <i class="fa-solid fa-file-invoice" style="font-size:31px; color:#d97706; margin-bottom:8px;"></i>
                                <h4 style="font-family:'Prompt'; font-size:31px;">4. ตรวจสอบเอกสาร</h4>
                                <p style="font-size:31px; color:#64748b;">ดูบิล สมุดจด รายงาน</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-toolbox"></i> เลือกเครื่องมือเก็บข้อมูลให้เหมาะ</h4>
                <p>ไม่จำเป็นต้องใช้ทุกวิธีพร้อมกัน เช่น ถ้าคุยกับเจ้าของร้านคนเดียว ใช้ "การสัมภาษณ์" แต่ถ้าอยากรู้ความเห็นลูกค้า 200 คน ใช้ "แบบสอบถาม" จะเหมาะกว่า</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 27: ขั้นที่ 5–6: วิเคราะห์ บันทึก และยืนยัน
    // =========================================================================
    {
        id: 27,
        section: "ขั้นตอนการวิเคราะห์และการรวบรวมข้อมูล (นาทีที่ 41–50)",
        timeGuide: "นาทีที่ 44",
        kicker: "สไลด์ที่ 27 • เจาะลึกขั้นตอนที่ 5 และ 6",
        title: "ขั้นที่ 5–6: วิเคราะห์ บันทึก และยืนยัน",
        badge: "จัดระเบียบความต้องการและตรวจสอบความเข้าใจร่วมกัน",
        html: `
            <div class="grid-2" style="gap:28px; height:100%;">
                <!-- ขั้นที่ 5 -->
                <div class="card cyan">
                    <div>
                        <div class="card-icon-header">
                            <div class="step-num" style="background:#0891b2;">5</div>
                            <div class="card-title">ขั้นที่ 5 วิเคราะห์และจัดลำดับความสำคัญ</div>
                        </div>
                        <p class="card-text" style="margin-bottom:14px;">นำข้อมูลที่ได้มาตรวจสอบว่า:</p>
                        <div class="step-list">
                            <div class="step-item" style="border-left-color:#0891b2; padding:10px 16px;">
                                <div class="step-num" style="background:#0891b2; width:34px; height:34px; font-size:31px;">1</div>
                                <div class="step-content"><h4>ข้อมูลสอดคล้องกันหรือไม่?</h4><p>สิ่งที่พูดตรงกับตัวเลขในสมุดจดไหม</p></div>
                            </div>
                            <div class="step-item" style="border-left-color:#0891b2; padding:10px 16px;">
                                <div class="step-num" style="background:#0891b2; width:34px; height:34px; font-size:31px;">2</div>
                                <div class="step-content"><h4>มีความต้องการใดซ้ำซ้อน?</h4><p>ยุบรวมเรื่องเดียวกันเข้าด้วยกัน</p></div>
                            </div>
                            <div class="step-item" style="border-left-color:#0891b2; padding:10px 16px;">
                                <div class="step-num" style="background:#0891b2; width:34px; height:34px; font-size:31px;">3</div>
                                <div class="step-content"><h4>มีความต้องการใดขัดแย้งกัน?</h4><p>หาข้อตกลงร่วมกันระหว่างฝ่ายที่เห็นต่าง</p></div>
                            </div>
                            <div class="step-item" style="border-left-color:#0891b2; padding:10px 16px;">
                                <div class="step-num" style="background:#0891b2; width:34px; height:34px; font-size:31px;">4</div>
                                <div class="step-content"><h4>เรื่องใดจำเป็นต้องดำเนินการก่อน?</h4><p>จัดลำดับเรื่องด่วนที่สุด (Priority) มาทำก่อน</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ขั้นที่ 6 -->
                <div class="card emerald">
                    <div>
                        <div class="card-icon-header">
                            <div class="step-num" style="background:#059669;">6</div>
                            <div class="card-title">ขั้นที่ 6 บันทึกและยืนยันความต้องการ</div>
                        </div>
                        <div class="img-frame" style="height:165px; margin:10px 0;">
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80" alt="บันทึกและยืนยันความต้องการ">
                            <div class="img-caption">ตรวจสอบเอกสารสรุปความต้องการร่วมกันก่อนเริ่มพัฒนา</div>
                        </div>
                        <p class="card-text">
                            <strong>เขียนข้อสรุปให้ชัดเจน</strong> และให้ผู้เกี่ยวข้อง<strong>ตรวจสอบความเข้าใจร่วมกัน</strong> ก่อนนำไปออกแบบแนวทางแก้ไข
                        </p>
                    </div>
                    <div style="background:#d1fae5; padding:14px 18px; border-radius:12px; font-size:19.5px; color:#065f46;">
                        <i class="fa-solid fa-file-signature"></i> <strong>ทำไมต้องยืนยัน?</strong> ป้องกันปัญหา “ทำเสร็จแล้วบอกว่าไม่ใช่แบบที่ต้องการ”
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-file-circle-check"></i> ความสำคัญของการยืนยัน (Sign-off / Confirmation)</h4>
                <p>การเขียนสรุปลงกระดาษหรือไฟล์ 1 หน้า แล้วให้เจ้าของร้านกับพนักงานอ่านทวนว่า "เข้าใจตรงกันตามนี้นะครับ" ช่วยลดการแก้ระบบรื้อใหม่ตอนทำเสร็จแล้วได้ถึง 80%</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 28: วิธีรวบรวมข้อมูล: สัมภาษณ์และสังเกต
    // =========================================================================
    {
        id: 28,
        section: "ขั้นตอนการวิเคราะห์และการรวบรวมข้อมูล (นาทีที่ 41–50)",
        timeGuide: "นาทีที่ 45–46",
        kicker: "สไลด์ที่ 28 • เทคนิคการเก็บข้อมูลเชิงลึก (1/2)",
        title: "วิธีรวบรวมข้อมูล: สัมภาษณ์และสังเกต",
        badge: "เปรียบเทียบการใช้งานและข้อควรระวัง",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:20px;">
                <div class="grid-2" style="height:200px;">
                    <div class="img-frame">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80" alt="การสัมภาษณ์">
                        <div class="img-caption"><i class="fa-solid fa-comments"></i> 1. การสัมภาษณ์ (Interview) — พูดคุยซักถามเหตุผลและความคาดหวัง</div>
                    </div>
                    <div class="img-frame">
                        <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=700&q=80" alt="การสังเกต">
                        <div class="img-caption"><i class="fa-solid fa-eye"></i> 2. การสังเกต (Observation) — ดูการทำงานจริงหน้างาน</div>
                    </div>
                </div>

                <table class="styled-table">
                    <thead>
                        <tr>
                            <th style="width:22%;">วิธี</th>
                            <th style="width:43%;">ลักษณะการใช้งาน</th>
                            <th style="width:35%;">ข้อควรระวัง</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong style="color:#1d4ed8; font-family:'Prompt';"><i class="fa-solid fa-microphone"></i> การสัมภาษณ์</strong></td>
                            <td>สนทนาเพื่อให้ทราบ<strong>ปัญหา เหตุผล และความคาดหวัง</strong></td>
                            <td><span style="background:#ffe4e6; color:#9f1239; padding:4px 10px; border-radius:8px; font-weight:600;"><i class="fa-solid fa-ban"></i> หลีกเลี่ยงคำถามชี้นำ</span></td>
                        </tr>
                        <tr>
                            <td><strong style="color:#047857; font-family:'Prompt';"><i class="fa-solid fa-binoculars"></i> การสังเกต</strong></td>
                            <td>ดูการทำงานจริงเพื่อ<strong>เข้าใจขั้นตอนและอุปสรรค</strong></td>
                            <td><span style="background:#fef3c7; color:#92400e; padding:4px 10px; border-radius:8px; font-weight:600;"><i class="fa-regular fa-clock"></i> ควรสังเกตช่วงเวลาที่เกี่ยวข้องกับปัญหา</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-clock"></i> ยกตัวอย่างการเลือกช่วงเวลาสังเกต</h4>
                <p>ถ้าร้านกาแฟบอกว่า "มีปัญหาออเดอร์ตกหล่นตอนพักเที่ยง" แต่เราไปยืนสังเกตตอนบ่ายสามโมงที่ไม่มีลูกค้าเลย เราจะเห็นปัญหาไหม? (ไม่เห็น! จึงต้องไปดูให้ตรงช่วงเวลาที่เกิดปัญหาจริง)</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 29: วิธีรวบรวมข้อมูล: แบบสอบถาม เอกสาร และการประชุม
    // =========================================================================
    {
        id: 29,
        section: "ขั้นตอนการวิเคราะห์และการรวบรวมข้อมูล (นาทีที่ 41–50)",
        timeGuide: "นาทีที่ 47",
        kicker: "สไลด์ที่ 29 • เทคนิคการเก็บข้อมูลเชิงลึก (2/2)",
        title: "วิธีรวบรวมข้อมูล: แบบสอบถาม เอกสาร และการประชุม",
        badge: "ตารางเปรียบเทียบ 3 วิธีพร้อมข้อควรระวัง",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <table class="styled-table" style="font-size:31px;">
                    <thead>
                        <tr>
                            <th style="width:25%;">วิธีรวบรวมข้อมูล</th>
                            <th style="width:40%;">ลักษณะการใช้งาน</th>
                            <th style="width:35%;">ข้อควรระวัง</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <strong style="color:#7c3aed; font-family:'Prompt'; font-size:20.5px;">
                                    <i class="fa-solid fa-clipboard-list"></i> 1. แบบสอบถาม
                                </strong>
                            </td>
                            <td>รวบรวมความคิดเห็นจาก<strong>คนจำนวนมาก</strong></td>
                            <td>ใช้คำถามชัดเจน และ<strong>ไม่ถามหลายประเด็นในข้อเดียว</strong></td>
                        </tr>
                        <tr>
                            <td>
                                <strong style="color:#d97706; font-family:'Prompt'; font-size:20.5px;">
                                    <i class="fa-solid fa-folder-open"></i> 2. การศึกษาเอกสาร
                                </strong>
                            </td>
                            <td>ตรวจ<strong>ใบสั่งซื้อ รายงานยอดขาย หรือบันทึกข้อร้องเรียน</strong></td>
                            <td>ตรวจ<strong>ความครบถ้วนและช่วงเวลา</strong>ของข้อมูล</td>
                        </tr>
                        <tr>
                            <td>
                                <strong style="color:#0891b2; font-family:'Prompt'; font-size:20.5px;">
                                    <i class="fa-solid fa-people-roof"></i> 3. การประชุมร่วมกัน
                                </strong>
                            </td>
                            <td>ให้<strong>หลายฝ่ายแลกเปลี่ยนและหาข้อสรุป</strong>พร้อมกัน</td>
                            <td><strong>เปิดโอกาสให้ทุกฝ่าย</strong>เสนอความคิดเห็นอย่างทั่วถึง</td>
                        </tr>
                    </tbody>
                </table>

                <div class="easy-explain">
                    <span class="easy-explain-badge"><i class="fa-solid fa-circle-question"></i> ตัวอย่างข้อควรระวัง</span>
                    <span class="easy-explain-text">
                        <strong>“ไม่ถามหลายประเด็นในข้อเดียว”</strong> เช่น อย่าถามว่า <em>“รสชาติกาแฟและราคาเหมาะสมหรือไม่?”</em> เพราะถ้ากาแฟอร่อยแต่แพง ลูกค้าจะไม่รู้ว่าต้องตอบอย่างไร!
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-lightbulb"></i> อธิบายคำถามซ้อนคำถาม (Double-barreled question)</h4>
                <p>ตัวอย่างในกล่องสีเหลืองด้านล่างช่วยให้เด็ก ปวช. เข้าใจทันทีว่าทำไมห้ามถาม 2 เรื่องในข้อเดียวกันเวลาทำฟอร์มออนไลน์</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 30: ตัวอย่างคำถามเก็บข้อมูลที่เหมาะสม
    // =========================================================================
    {
        id: 30,
        section: "ขั้นตอนการวิเคราะห์และการรวบรวมข้อมูล (นาทีที่ 41–50)",
        timeGuide: "นาทีที่ 48",
        kicker: "สไลด์ที่ 30 • ศิลปะการตั้งคำถาม",
        title: "ตัวอย่างคำถามเก็บข้อมูลที่เหมาะสม",
        badge: "คำถามปลายเปิด vs คำถามชี้นำที่ควรหลีกเลี่ยง",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <!-- พื้นที่หลัก: คำถามที่เหมาะสม -->
                <div class="card emerald" style="flex:1; padding:22px 28px;">
                    <div class="card-icon-header" style="margin-bottom:10px;">
                        <div class="icon-box emerald"><i class="fa-solid fa-circle-check"></i></div>
                        <div>
                            <div class="card-title" style="color:#065f46;">5 ตัวอย่างคำถามเก็บข้อมูลที่เหมาะสม (คำถามปลายเปิด)</div>
                            <span style="color:#047857; font-size:31px;">ช่วยให้ผู้ตอบเล่าข้อเท็จจริงและรายละเอียดจากการทำงานจริง</span>
                        </div>
                    </div>
                    <div class="grid-2" style="gap:12px; height:auto;">
                        <div style="background:#fff; border:1px solid #6ee7b7; border-radius:12px; padding:12px 16px; font-size:19.5px;">
                            <strong style="color:#059669;">1.</strong> ปัจจุบันรับคำสั่งซื้อผ่านช่องทางใดบ้าง?
                        </div>
                        <div style="background:#fff; border:1px solid #6ee7b7; border-radius:12px; padding:12px 16px; font-size:19.5px;">
                            <strong style="color:#059669;">2.</strong> ขั้นตอนใดใช้เวลามากที่สุด?
                        </div>
                        <div style="background:#fff; border:1px solid #6ee7b7; border-radius:12px; padding:12px 16px; font-size:19.5px;">
                            <strong style="color:#059669;">3.</strong> ในครั้งล่าสุดที่ส่งสินค้าผิด เกิดอะไรขึ้นบ้าง?
                        </div>
                        <div style="background:#fff; border:1px solid #6ee7b7; border-radius:12px; padding:12px 16px; font-size:19.5px;">
                            <strong style="color:#059669;">4.</strong> ข้อมูลใดจำเป็นต่อการทำงานของคุณ?
                        </div>
                        <div style="background:#fff; border:1px solid #6ee7b7; border-radius:12px; padding:12px 16px; font-size:19.5px; grid-column:span 2;">
                            <strong style="color:#059669;">5.</strong> หากปรับปรุงได้หนึ่งเรื่อง อยากปรับเรื่องใด เพราะเหตุใด?
                        </div>
                    </div>
                </div>

                <!-- กล่องคำถามชี้นำด้านล่าง -->
                <div class="card rose" style="padding:18px 28px; flex-direction:row; align-items:center; gap:22px;">
                    <div class="icon-box rose" style="width:64px; height:64px; font-size:31px;"><i class="fa-solid fa-ban"></i></div>
                    <div>
                        <div style="font-family:'Prompt'; font-size:19.5px; font-weight:700; color:#be123c;">
                            คำถามที่ควรหลีกเลี่ยง: <span style="background:#ffe4e6; padding:2px 12px; border-radius:8px; color:#881337;">“ถ้ามีแอปแล้วงานจะดีขึ้นใช่ไหม?”</span>
                        </div>
                        <p style="font-size:19.5px; color:#334155; margin-top:6px;">
                            <strong>เพราะเหตุใด:</strong> เพราะเป็นการ<strong>ชี้นำ</strong>ให้ผู้ตอบเห็นด้วยกับแนวทางที่เสนอไว้ โดยไม่ได้ค้นหาสาเหตุของปัญหาที่แท้จริง
                        </p>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-key"></i> เทคนิคจำง่าย</h4>
                <p>ให้นักศึกษาใช้คำถามนี้ไปใช้ทำใบงานในสไลด์ที่ 38 ได้เลย: คำถามที่ดีมักขึ้นต้นด้วย "อย่างไร", "ช่องทางใด", "เกิดอะไรขึ้นบ้าง", "เพราะเหตุใด"</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 31: ลักษณะของความต้องการที่ดี
    // =========================================================================
    {
        id: 31,
        section: "การเขียนความต้องการที่ดีและกรณีศึกษา (นาทีที่ 49–55)",
        timeGuide: "นาทีที่ 49",
        kicker: "สไลด์ที่ 31 • เกณฑ์ตรวจสอบคุณภาพ",
        title: "ลักษณะของความต้องการที่ดี",
        badge: "รายการตรวจสอบ (Checklist) 5 ข้อ",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <div class="grid-5" style="flex:1;">
                    <div class="card blue" style="text-align:center; align-items:center; justify-content:center; gap:14px;">
                        <div class="icon-box blue" style="width:68px; height:68px; font-size:31px;"><i class="fa-solid fa-glasses"></i></div>
                        <div class="step-num">1</div>
                        <div class="card-title">ชัดเจน</div>
                        <p style="font-size:19.5px; color:#334155;">อ่านแล้ว<strong>เข้าใจตรงกัน</strong> ไม่ตีความไปคนละทาง</p>
                    </div>

                    <div class="card emerald" style="text-align:center; align-items:center; justify-content:center; gap:14px;">
                        <div class="icon-box emerald" style="width:68px; height:68px; font-size:31px;"><i class="fa-solid fa-bullseye"></i></div>
                        <div class="step-num" style="background:#059669;">2</div>
                        <div class="card-title">จำเป็น</div>
                        <p style="font-size:19.5px; color:#334155;"><strong>เชื่อมโยงกับปัญหาหรือเป้าหมาย</strong>ของธุรกิจจริง</p>
                    </div>

                    <div class="card amber" style="text-align:center; align-items:center; justify-content:center; gap:14px;">
                        <div class="icon-box amber" style="width:68px; height:68px; font-size:31px;"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                        <div class="step-num" style="background:#d97706;">3</div>
                        <div class="card-title">เป็นไปได้</div>
                        <p style="font-size:19.5px; color:#334155;"><strong>เหมาะสมกับทรัพยากรและข้อจำกัด</strong>ที่มีอยู่</p>
                    </div>

                    <div class="card purple" style="text-align:center; align-items:center; justify-content:center; gap:14px;">
                        <div class="icon-box purple" style="width:68px; height:68px; font-size:31px;"><i class="fa-solid fa-puzzle-piece"></i></div>
                        <div class="step-num" style="background:#7c3aed;">4</div>
                        <div class="card-title">ไม่ขัดแย้งกัน</div>
                        <p style="font-size:19.5px; color:#334155;">สามารถ<strong>นำไปใช้ร่วมกับข้อกำหนดอื่นได้</strong>อย่างราบรื่น</p>
                    </div>

                    <div class="card cyan" style="text-align:center; align-items:center; justify-content:center; gap:14px;">
                        <div class="icon-box cyan" style="width:68px; height:68px; font-size:31px;"><i class="fa-solid fa-clipboard-check"></i></div>
                        <div class="step-num" style="background:#0891b2;">5</div>
                        <div class="card-title">ตรวจสอบได้</div>
                        <p style="font-size:19.5px; color:#334155;"><strong>มีวิธีพิจารณา</strong>ว่าทำได้ตามที่กำหนดหรือไม่</p>
                    </div>
                </div>

                <div class="easy-explain">
                    <span class="easy-explain-badge"><i class="fa-solid fa-check-double"></i> ท่องจำ 5 คำ</span>
                    <span class="easy-explain-text">
                        <strong>“ชัดเจน • จำเป็น • เป็นไปได้ • ไม่ขัดแย้ง • ตรวจสอบได้”</strong> — ถ้าเขียนความต้องการแล้วผ่านทั้ง 5 ข้อนี้ ถือว่าเป็นความต้องการที่ดีเยี่ยม!
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-list-check"></i> เช็กลิสต์ 5 ข้อ</h4>
                <p>เตรียมเชื่อมต่อไปสไลด์ที่ 32 และ 33 ซึ่งจะเป็นแบบฝึกหัดเปลี่ยนข้อความที่คลุมเครือ ให้กลายเป็นข้อความที่ชัดเจนและตรวจสอบได้</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 32: ฝึกปรับข้อความ: ใช้งานง่ายและปลอดภัย
    // =========================================================================
    {
        id: 32,
        section: "การเขียนความต้องการที่ดีและกรณีศึกษา (นาทีที่ 49–55)",
        timeGuide: "นาทีที่ 50",
        kicker: "สไลด์ที่ 32 • ฝึกเขียนความต้องการให้ชัดเจน (1/2)",
        title: "ฝึกปรับข้อความ: ใช้งานง่ายและปลอดภัย",
        badge: "เปลี่ยนคำพูดกว้างๆ ให้ตรวจสอบได้จริง",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:20px;">
                <table class="styled-table" style="font-size:20.5px;">
                    <thead>
                        <tr>
                            <th style="width:36%; background:#be123c;"><i class="fa-solid fa-circle-xmark"></i> ข้อความที่ยังคลุมเครือ</th>
                            <th style="background:#059669;"><i class="fa-solid fa-circle-check"></i> ตัวอย่างข้อความที่ชัดเจนขึ้น</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="background:#fff1f2; font-weight:700; color:#881337;">
                                “ระบบต้องใช้งานง่าย”
                            </td>
                            <td style="background:#ecfdf5; color:#065f46; font-weight:600;">
                                ผู้ใช้ใหม่สามารถ<strong>บันทึกคำสั่งซื้อได้ด้วยตนเองหลังอ่านคำแนะนำ</strong> โดยกำหนดวิธีทดสอบร่วมกัน
                            </td>
                        </tr>
                        <tr>
                            <td style="background:#fff1f2; font-weight:700; color:#881337;">
                                “ระบบต้องปลอดภัย”
                            </td>
                            <td style="background:#ecfdf5; color:#065f46; font-weight:600;">
                                ผู้ใช้งานต้อง<strong>เข้าสู่ระบบ (Login) และดูข้อมูลได้ตามสิทธิ์ที่กำหนด</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="easy-explain">
                    <span class="easy-explain-badge"><i class="fa-solid fa-magnifying-glass"></i> ประเด็นสังเกต</span>
                    <span class="easy-explain-text">
                        คำว่า “ใช้งานง่าย” ของแต่ละคนไม่เท่ากัน แต่เมื่อปรับเป็น <strong>ข้อความที่ระบุพฤติกรรมหรือเงื่อนไขที่สามารถนำไปตรวจสอบได้</strong> ทุกคนจะวัดผลได้ตรงกันทันที
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-wand-magic-sparkles"></i> ชี้จุดที่เปลี่ยนไป</h4>
                <p>ถามนักศึกษาว่า: คำว่า "ใช้งานง่าย" สำหรับเรากับสำหรับคุณยาย เหมือนกันไหม? (ไม่เหมือนกัน) ดังนั้นต้องระบุให้ชัดว่า ง่ายแปลว่า "คนใหม่ลองอ่านคู่มือแล้วกดรับออเดอร์เองได้เลย"</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 33: ฝึกปรับข้อความ: ความเร็วและผลลัพธ์การบริการ
    // =========================================================================
    {
        id: 33,
        section: "การเขียนความต้องการที่ดีและกรณีศึกษา (นาทีที่ 49–55)",
        timeGuide: "นาทีที่ 51",
        kicker: "สไลด์ที่ 33 • ฝึกเขียนความต้องการให้ชัดเจน (2/2)",
        title: "ฝึกปรับข้อความ: ความเร็วและผลลัพธ์การบริการ",
        badge: "ระบุตัวเลขและเงื่อนไขการตรวจสอบ",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:20px;">
                <table class="styled-table" style="font-size:20.5px;">
                    <thead>
                        <tr>
                            <th style="width:36%; background:#be123c;"><i class="fa-solid fa-circle-xmark"></i> ข้อความที่ยังคลุมเครือ</th>
                            <th style="background:#059669;"><i class="fa-solid fa-circle-check"></i> ตัวอย่างข้อความที่ชัดเจนขึ้น</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="background:#fff1f2; font-weight:700; color:#881337;">
                                “ระบบต้องค้นหาสินค้าได้เร็ว”
                            </td>
                            <td style="background:#ecfdf5; color:#065f46; font-weight:600;">
                                เมื่อค้นหาด้วยรหัสสินค้า ระบบแสดงผล<span style="background:#fef08a; padding:2px 8px; border-radius:6px; color:#0f172a;">ภายใน 3 วินาที</span> ภายใต้เงื่อนไขทดสอบที่ตกลงกัน
                            </td>
                        </tr>
                        <tr>
                            <td style="background:#fff1f2; font-weight:700; color:#881337;">
                                “ร้านต้องบริการดีขึ้น”
                            </td>
                            <td style="background:#ecfdf5; color:#065f46; font-weight:600;">
                                ลดเวลารอเฉลี่ย<span style="background:#fef08a; padding:2px 8px; border-radius:6px; color:#0f172a;">จาก 15 นาทีเหลือไม่เกิน 10 นาที</span> ภายในระยะเวลาที่กำหนด
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="easy-explain" style="background:linear-gradient(90deg, #eff6ff, #dbeafe); border-color:#2563eb;">
                    <span class="easy-explain-badge" style="background:#2563eb; color:#fff;"><i class="fa-solid fa-circle-info"></i> หมายเหตุสำคัญ</span>
                    <span class="easy-explain-text" style="color:#1e3a8a;">
                        <strong>ตัวเลขในตารางเป็นตัวอย่างสำหรับฝึกเขียน</strong> ในการทำงานจริงต้องเก็บข้อมูลจริงและตกลงกับผู้เกี่ยวข้องก่อนนำไปใช้เป็นเกณฑ์
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-stopwatch"></i> ย้ำเรื่องตัวเลขสมมติ vs ตัวเลขจริง</h4>
                <p>ก่อนจะเขียนว่า "ลดจาก 15 นาทีเหลือ 10 นาที" เราต้องไปจับเวลาจริงที่ร้านก่อนว่าปัจจุบันลูกค้ารอกี่นาที ไม่ใช่เดาตัวเลขขึ้นมาลอยๆ</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 34: กรณีศึกษา: ร้านเครื่องดื่มหน้าอาคารเรียน
    // =========================================================================
    {
        id: 34,
        section: "การเขียนความต้องการที่ดีและกรณีศึกษา (นาทีที่ 49–55)",
        timeGuide: "นาทีที่ 52",
        kicker: "สไลด์ที่ 34 • กรณีศึกษา (Case Study)",
        title: "กรณีศึกษา: ร้านเครื่องดื่มหน้าอาคารเรียน",
        badge: "สถานการณ์สมมติใกล้ตัวนักศึกษา",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <div class="grid-2" style="flex:1; gap:28px;">
                    <div class="card amber">
                        <div>
                            <div class="card-icon-header">
                                <div class="icon-box amber"><i class="fa-solid fa-cup-togo"></i></div>
                                <div>
                                    <span style="font-size:19.5px; color:#b45309; font-weight:700;">สถานการณ์สมมติ</span>
                                    <div class="card-title">ร้านเครื่องดื่มแห่งหนึ่งรับคำสั่งซื้อด้วยการจดลงกระดาษ</div>
                                </div>
                            </div>
                            <p style="font-size:31px; font-weight:600; color:#0f172a; margin:10px 0;">ช่วงพักกลางวันมีลูกค้าจำนวนมาก พบอาการดังนี้:</p>
                            <div class="step-list">
                                <div class="step-item" style="border-left-color:#e11d48; padding:10px 14px;">
                                    <div class="step-num" style="background:#e11d48; width:32px; height:32px; font-size:19.5px;">1</div>
                                    <div class="step-content"><h4>บางรายการอ่านลายมือไม่ชัด</h4></div>
                                </div>
                                <div class="step-item" style="border-left-color:#e11d48; padding:10px 14px;">
                                    <div class="step-num" style="background:#e11d48; width:32px; height:32px; font-size:19.5px;">2</div>
                                    <div class="step-content"><h4>บางรายการไม่มีรายละเอียดระดับความหวาน</h4></div>
                                </div>
                                <div class="step-item" style="border-left-color:#e11d48; padding:10px 14px;">
                                    <div class="step-num" style="background:#e11d48; width:32px; height:32px; font-size:19.5px;">3</div>
                                    <div class="step-content"><h4>พนักงานต้องถามซ้ำ</h4></div>
                                </div>
                                <div class="step-item" style="border-left-color:#e11d48; padding:10px 14px;">
                                    <div class="step-num" style="background:#e11d48; width:32px; height:32px; font-size:19.5px;">4</div>
                                    <div class="step-content"><h4>มีการทำเครื่องดื่มผิด</h4></div>
                                </div>
                            </div>
                        </div>
                        <div style="background:#ffe4e6; padding:12px 16px; border-radius:12px; color:#881337; font-size:19.5px; font-weight:600; margin-top:10px;">
                            <i class="fa-solid fa-bullhorn"></i> เจ้าของร้านจึงเสนอให้: <u>“สร้างแอปพลิเคชันรับคำสั่งซื้อ”</u>
                        </div>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:16px;">
                        <div class="img-frame" style="flex:1;">
                            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80" alt="ร้านเครื่องดื่มหน้าอาคารเรียน">
                            <div class="img-caption">หน้าร้านช่วงพักกลางวันและกระดาษจดรายการที่เร่งรีบ</div>
                        </div>
                        <div class="card blue" style="padding:18px 22px;">
                            <div style="font-family:'Prompt'; font-weight:700; color:#1d4ed8; font-size:31px; margin-bottom:4px;">
                                <i class="fa-solid fa-circle-question"></i> คำถามชวนคิด:
                            </div>
                            <p style="font-size:31px; color:#0f172a; font-weight:600;">
                                “จากสถานการณ์นี้ เราทราบปัญหาอะไรแล้ว และยังต้องเก็บข้อมูลอะไรเพิ่ม?”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-magnifying-glass"></i> ชวนนักศึกษาถอดรหัสกรณีศึกษา</h4>
                <p>ให้นักศึกษาสังเกตว่า ในสถานการณ์นี้ ปัญหาเกิดจาก "จดกระดาษแบบไม่มีช่องติ๊ก ทำให้ลืมจดหวานน้อย/อ่านลายมือไม่ออก" ก่อนจะเชื่อเจ้าของร้านว่าต้องทำแอปฯ เราไปดูผลการวิเคราะห์ในสไลด์ถัดไป</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 35: วิเคราะห์กรณีศึกษา: ปัญหา ผลกระทบ และความต้องการ
    // =========================================================================
    {
        id: 35,
        section: "การเขียนความต้องการที่ดีและกรณีศึกษา (นาทีที่ 49–55)",
        timeGuide: "นาทีที่ 53",
        kicker: "สไลด์ที่ 35 • ถอดรหัสกรณีศึกษา (ส่วนที่ 1)",
        title: "วิเคราะห์กรณีศึกษา: ปัญหา ผลกระทบ และความต้องการ",
        badge: "ตารางวิเคราะห์ 4 ประเด็นหลัก",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:center; height:100%; gap:20px;">
                <table class="styled-table" style="font-size:31px;">
                    <thead>
                        <tr>
                            <th style="width:30%;">หัวข้อการวิเคราะห์</th>
                            <th>ผลการวิเคราะห์จากสถานการณ์</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background:#fff1f2;">
                            <td><strong style="color:#be123c; font-family:'Prompt';"><i class="fa-solid fa-bug"></i> 1. ปัญหาที่พบ</strong></td>
                            <td><strong>ข้อมูลคำสั่งซื้อไม่ครบหรืออ่านไม่ชัด ทำให้ถามซ้ำและทำผิด</strong></td>
                        </tr>
                        <tr style="background:#fffbeb;">
                            <td><strong style="color:#b45309; font-family:'Prompt';"><i class="fa-solid fa-burst"></i> 2. ผลกระทบ</strong></td>
                            <td><strong>ลูกค้ารอนาน ร้านเสียต้นทุนจากการทำใหม่</strong></td>
                        </tr>
                        <tr style="background:#f5f3ff;">
                            <td><strong style="color:#6d28d9; font-family:'Prompt';"><i class="fa-solid fa-users"></i> 3. ผู้เกี่ยวข้อง</strong></td>
                            <td><strong>เจ้าของร้าน ผู้รับคำสั่งซื้อ ผู้ทำเครื่องดื่ม และลูกค้า</strong></td>
                        </tr>
                        <tr style="background:#ecfdf5; border:3px solid #10b981;">
                            <td><strong style="color:#047857; font-family:'Prompt'; font-size:31px;"><i class="fa-solid fa-bullseye"></i> 4. ความต้องการ</strong></td>
                            <td style="font-size:31px; font-weight:700; color:#065f46;">
                                บันทึกรายละเอียดคำสั่งซื้อให้ครบและส่งต่อข้อมูลได้ชัดเจน
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-highlighter"></i> เน้นแถวสีเขียว (ความต้องการ)</h4>
                <p>ชี้ให้นักศึกษาเห็นว่า ความต้องการที่แท้จริงคือ "บันทึกรายละเอียดคำสั่งซื้อให้ครบและส่งต่อข้อมูลได้ชัดเจน" ไม่ใช่ "ต้องมีแอปพลิเคชัน"</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 36: วิเคราะห์กรณีศึกษา: ทางเลือก ข้อมูลเพิ่ม และตัวชี้วัด
    // =========================================================================
    {
        id: 36,
        section: "การเขียนความต้องการที่ดีและกรณีศึกษา (นาทีที่ 49–55)",
        timeGuide: "นาทีที่ 54–55",
        kicker: "สไลด์ที่ 36 • ถอดรหัสกรณีศึกษา (ส่วนที่ 2)",
        title: "วิเคราะห์กรณีศึกษา: ทางเลือก ข้อมูลเพิ่ม และตัวชี้วัด",
        badge: "เปรียบเทียบแนวทางก่อนตัดสินใจ",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <table class="styled-table" style="font-size:31px;">
                    <thead>
                        <tr>
                            <th style="width:34%;">หัวข้อ</th>
                            <th>ผลการวิเคราะห์</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong style="color:#1d4ed8; font-family:'Prompt';"><i class="fa-solid fa-code-branch"></i> แนวทางที่ควรนำมาเปรียบเทียบ</strong></td>
                            <td><strong>แบบฟอร์มกระดาษที่มีช่องเลือก</strong> (ติ๊กความหวาน/เมนู), <strong>แบบฟอร์มออนไลน์</strong> หรือ <strong>ระบบรับคำสั่งซื้อ</strong></td>
                        </tr>
                        <tr>
                            <td><strong style="color:#d97706; font-family:'Prompt';"><i class="fa-solid fa-magnifying-glass-plus"></i> ข้อมูลที่ต้องเก็บเพิ่ม</strong></td>
                            <td><strong>จำนวนรายการที่ผิด ระยะเวลารอ ขั้นตอนรับรายการ งบประมาณ และอุปกรณ์ที่มี</strong></td>
                        </tr>
                        <tr>
                            <td><strong style="color:#059669; font-family:'Prompt';"><i class="fa-solid fa-chart-Simple"></i> ตัวชี้วัดที่อาจใช้</strong></td>
                            <td><strong>จำนวนรายการผิด และ เวลารอเฉลี่ยก่อน–หลังปรับปรุง</strong></td>
                        </tr>
                    </tbody>
                </table>

                <div class="easy-explain" style="background:linear-gradient(90deg, #fffbeb, #fef3c7); border-color:#f59e0b;">
                    <span class="easy-explain-badge"><i class="fa-solid fa-lightbulb"></i> ข้อสังเกต</span>
                    <span class="easy-explain-text">
                        <strong>จากข้อมูลนี้ยังสรุปไม่ได้ว่าต้องสร้างแอปพลิเคชัน</strong> ควรเก็บข้อมูลเพิ่มเติมและเปรียบเทียบความเหมาะสมของแต่ละแนวทางก่อน (เช่น กระดาษที่มีช่องติ๊กระดับความหวานอาจแก้ปัญหาได้ทันทีในราคาประหยัด!)
                    </span>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-check-to-slot"></i> บทสรุปกรณีศึกษาร้านน้ำ</h4>
                <p>ถ้าร้านขายน้ำหน้าอาคารเรียนมีงบน้อย แค่เปลี่ยนจาก "กระดาษเปล่า" เป็น "ใบออเดอร์ที่มีช่องติ๊ก หวาน 0% / 50% / 100%" พนักงานก็ไม่ต้องเขียนเอง ไม่ลืมถาม และคนชงก็อ่านออกทันที!</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 37: กิจกรรม “รู้ปัญหาก่อนเลือกเครื่องมือ” (ส่วนที่ 1)
    // =========================================================================
    {
        id: 37,
        section: "กิจกรรมกลุ่มและสรุปทบทวนท้ายหน่วย (นาทีที่ 56–60)",
        timeGuide: "นาทีที่ 56",
        kicker: "สไลด์ที่ 37 • กิจกรรมปฏิบัติการในชั้นเรียน (1/2)",
        title: "กิจกรรม “รู้ปัญหาก่อนเลือกเครื่องมือ”",
        badge: "รูปแบบกิจกรรม: กลุ่มละ 3–4 คน",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <!-- เลือกธุรกิจใกล้ตัว -->
                <div>
                    <h3 style="font-size:19.5px; color:#1e3a8a; margin-bottom:12px;">
                        <i class="fa-solid fa-users-rectangle"></i> แบ่งกลุ่มละ 3–4 คน เลือกธุรกิจใกล้ตัวหนึ่งแห่ง เช่น:
                    </h3>
                    <div class="grid-4" style="height:175px;">
                        <div class="img-frame">
                            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80" alt="ร้านอาหาร">
                            <div class="img-caption"><i class="fa-solid fa-utensils"></i> 1. ร้านอาหาร</div>
                        </div>
                        <div class="img-frame">
                            <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=500&q=80" alt="ร้านค้าออนไลน์">
                            <div class="img-caption"><i class="fa-solid fa-box-open"></i> 2. ร้านค้าออนไลน์</div>
                        </div>
                        <div class="img-frame">
                            <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500&q=80" alt="ร้านถ่ายเอกสาร">
                            <div class="img-caption"><i class="fa-solid fa-print"></i> 3. ร้านถ่ายเอกสาร</div>
                        </div>
                        <div class="img-frame">
                            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80" alt="ร้านเสริมสวย">
                            <div class="img-caption"><i class="fa-solid fa-scissors"></i> 4. ร้านเสริมสวย</div>
                        </div>
                    </div>
                </div>

                <!-- ภารกิจส่วนที่ 1 -->
                <div class="card blue" style="flex:1; padding:20px 28px;">
                    <div style="font-family:'Prompt'; font-size:20.5px; font-weight:700; color:#1d4ed8; margin-bottom:10px;">
                        <i class="fa-solid fa-list-ol"></i> ภารกิจส่วนที่ 1 (ทำความเข้าใจธุรกิจและปัญหา)
                    </div>
                    <div class="step-list">
                        <div class="step-item" style="padding:10px 16px;">
                            <div class="step-num">1</div>
                            <div class="step-content">
                                <h4>อธิบายว่าธุรกิจขายสินค้าหรือให้บริการอะไร</h4>
                            </div>
                        </div>
                        <div class="step-item" style="padding:10px 16px;">
                            <div class="step-num">2</div>
                            <div class="step-content">
                                <h4>ระบุปัญหาหนึ่งเรื่อง พร้อมหลักฐานที่มี</h4>
                                <p style="color:#be123c; font-weight:600;">*หากยังไม่มีหลักฐาน ให้เขียนว่า “ข้อสันนิษฐานที่ต้องตรวจสอบ”</p>
                            </div>
                        </div>
                        <div class="step-item" style="padding:10px 16px;">
                            <div class="step-num">3</div>
                            <div class="step-content">
                                <h4>ระบุผู้มีส่วนได้ส่วนเสียอย่างน้อย 3 กลุ่ม</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-lightbulb"></i> เน้นเรื่องข้อเท็จจริง vs ข้อสันนิษฐาน</h4>
                <p>ฝึกนิสัยนักวิเคราะห์ข้อมูลที่ดี: ถ้ารู้จริงเพราะเคยเห็นกับตา ให้เขียนหลักฐาน แต่ถ้าเดาเอาเอง ให้เขียนกำกับว่า "ข้อสันนิษฐานที่ต้องตรวจสอบ"</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 38: กิจกรรม: วิเคราะห์และนำเสนอแนวทาง (ส่วนที่ 2)
    // =========================================================================
    {
        id: 38,
        section: "กิจกรรมกลุ่มและสรุปทบทวนท้ายหน่วย (นาทีที่ 56–60)",
        timeGuide: "นาทีที่ 57",
        kicker: "สไลด์ที่ 38 • กิจกรรมปฏิบัติการในชั้นเรียน (2/2)",
        title: "กิจกรรม: วิเคราะห์และนำเสนอแนวทาง",
        badge: "ภารกิจส่วนที่ 2 • ชิ้นงานที่ส่ง • ข้อปฏิบัติ",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:18px;">
                <div class="grid-2-asym" style="flex:1; gap:24px;">
                    <!-- ภารกิจ 4-7 -->
                    <div class="card emerald">
                        <div style="font-family:'Prompt'; font-size:31px; font-weight:700; color:#047857; margin-bottom:10px;">
                            <i class="fa-solid fa-clipboard-check"></i> ภารกิจส่วนที่ 2 (ข้อ 4–7)
                        </div>
                        <div class="step-list">
                            <div class="step-item" style="border-left-color:#059669; padding:10px 14px;">
                                <div class="step-num" style="background:#059669;">4</div>
                                <div class="step-content"><h4>เขียนคำถามสำหรับเก็บข้อมูลอย่างน้อย 5 ข้อ</h4></div>
                            </div>
                            <div class="step-item" style="border-left-color:#059669; padding:10px 14px;">
                                <div class="step-num" style="background:#059669;">5</div>
                                <div class="step-content"><h4>เขียนความต้องการเบื้องต้นอย่างน้อย 3 ข้อ</h4></div>
                            </div>
                            <div class="step-item" style="border-left-color:#059669; padding:10px 14px;">
                                <div class="step-num" style="background:#059669;">6</div>
                                <div class="step-content"><h4>เสนอแนวทางแก้ไข 2 ทางเลือก พร้อมเหตุผล</h4></div>
                            </div>
                            <div class="step-item" style="border-left-color:#059669; padding:10px 14px;">
                                <div class="step-num" style="background:#059669;">7</div>
                                <div class="step-content"><h4>เสนอตัวชี้วัดความสำเร็จอย่างน้อย 1 ตัว</h4></div>
                            </div>
                        </div>
                    </div>

                    <!-- ชิ้นงานที่ส่ง & จริยธรรม -->
                    <div style="display:flex; flex-direction:column; gap:18px;">
                        <div class="card blue" style="flex:1;">
                            <div class="card-icon-header">
                                <div class="icon-box blue"><i class="fa-solid fa-file-export"></i></div>
                                <div class="card-title">ชิ้นงานที่ส่ง</div>
                            </div>
                            <ul style="font-size:31px; color:#1e293b; padding-left:24px; line-height:1.8; font-weight:600;">
                                <li>ตารางวิเคราะห์หนึ่งหน้า (One-Page Canvas)</li>
                                <li>นำเสนอกลุ่มละ 3–5 นาที</li>
                            </ul>
                        </div>

                        <div class="card rose" style="flex:1;">
                            <div class="card-icon-header">
                                <div class="icon-box rose"><i class="fa-solid fa-user-shield"></i></div>
                                <div class="card-title" style="font-size:19.5px;">ข้อปฏิบัติในการเก็บข้อมูลจริง (PDPA)</div>
                            </div>
                            <p style="font-size:19.5px; color:#881337; line-height:1.55;">
                                ควร<strong>ขออนุญาตกิจการก่อน</strong> และ<strong>ไม่นำชื่อ เบอร์โทรศัพท์ หรือข้อมูลส่วนตัวของลูกค้า</strong>มาแสดงในชิ้นงาน
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-shield-halved"></i> ปลูกฝังเรื่องการคุ้มครองข้อมูลส่วนบุคคล</h4>
                <p>ย้ำกับนักศึกษาว่า เวลาไปถ่ายรูปหรือดูสมุดออเดอร์ของร้านค้า ห้ามถ่ายติดชื่อ-นามสกุล-เบอร์โทร-ที่อยู่ลูกค้ามาลงสไลด์นำเสนอเด็ดขาด</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 39: เกณฑ์ประเมินกิจกรรม
    // =========================================================================
    {
        id: 39,
        section: "กิจกรรมกลุ่มและสรุปทบทวนท้ายหน่วย (นาทีที่ 56–60)",
        timeGuide: "นาทีที่ 58",
        kicker: "สไลด์ที่ 39 • เกณฑ์การให้คะแนน (Rubric)",
        title: "เกณฑ์ประเมินกิจกรรม",
        badge: "คะแนนเต็ม 20 คะแนน",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:center; height:100%;">
                <table class="styled-table" style="font-size:19.5px;">
                    <thead>
                        <tr>
                            <th><i class="fa-solid fa-list-check"></i> เกณฑ์ประเมิน</th>
                            <th style="width:22%; text-align:center;"><i class="fa-solid fa-star"></i> คะแนน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. อธิบายปัญหาและแยกข้อเท็จจริงกับข้อสันนิษฐานได้</strong></td>
                            <td style="text-align:center; font-weight:700; color:#2563eb;">5</td>
                        </tr>
                        <tr>
                            <td><strong>2. ระบุผู้เกี่ยวข้องและตั้งคำถามเก็บข้อมูลได้เหมาะสม</strong></td>
                            <td style="text-align:center; font-weight:700; color:#2563eb;">5</td>
                        </tr>
                        <tr>
                            <td><strong>3. เขียนความต้องการได้ชัดเจนและสัมพันธ์กับปัญหา</strong></td>
                            <td style="text-align:center; font-weight:700; color:#2563eb;">5</td>
                        </tr>
                        <tr>
                            <td><strong>4. เปรียบเทียบแนวทางและเสนอตัวชี้วัดได้มีเหตุผล</strong></td>
                            <td style="text-align:center; font-weight:700; color:#2563eb;">5</td>
                        </tr>
                        <tr style="background:linear-gradient(90deg, #ecfdf5, #d1fae5);">
                            <td style="font-family:'Prompt'; font-size:21.5px; font-weight:800; color:#065f46;">
                                <i class="fa-solid fa-trophy"></i> รวมคะแนนทั้งหมด
                            </td>
                            <td style="text-align:center; font-family:'Prompt'; font-size:31px; font-weight:800; color:#047857;">
                                20 คะแนน
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-award"></i> ชี้แจงเกณฑ์ให้ชัดเจน</h4>
                <p>เกณฑ์แบ่งเป็น 4 ส่วนละ 5 คะแนนเท่ากัน นักศึกษาสามารถใช้ตารางนี้ตรวจเช็กงานของกลุ่มตัวเองก่อนส่งได้เลย</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 40: คำถามทบทวนและประเด็นหลักของหน่วย (รวมครบในหน้าเดียว)
    // =========================================================================
    {
        id: 40,
        section: "กิจกรรมกลุ่มและสรุปทบทวนท้ายหน่วย (นาทีที่ 56–60)",
        timeGuide: "นาทีที่ 59",
        kicker: "สไลด์ที่ 40 • สรุปและทบทวนท้ายหน่วย (ภาพรวม)",
        title: "คำถามทบทวนและประเด็นหลักของหน่วย",
        badge: "คำถามทบทวน 8 ข้อ & ประเด็นหลัก",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:14px;">
                <div class="grid-2" style="flex:1; gap:20px;">
                    <!-- คอลัมน์ซ้าย ข้อ 1-4 -->
                    <div class="card" style="padding:18px 22px; justify-content:space-around;">
                        <div style="font-size:19.5px; line-height:1.45;">
                            <strong style="color:#2563eb;">1.</strong> การวิเคราะห์ความต้องการทางธุรกิจมีจุดประสงค์อย่างไร?
                        </div>
                        <div style="font-size:19.5px; line-height:1.45;">
                            <strong style="color:#2563eb;">2.</strong> ปัญหา ความต้องการ และแนวทางแก้ไข แตกต่างกันอย่างไร? ยกตัวอย่างประกอบ
                        </div>
                        <div style="font-size:19.5px; line-height:1.45;">
                            <strong style="color:#2563eb;">3.</strong> เพราะเหตุใดจึงควรเก็บข้อมูลจากผู้เกี่ยวข้องหลายกลุ่ม?
                        </div>
                        <div style="font-size:19.5px; line-height:1.45;">
                            <strong style="color:#2563eb;">4.</strong> หากเจ้าของร้านบอกว่า “ต้องการเว็บไซต์” นักเรียนควรถามอะไรเพิ่มเติม?
                        </div>
                    </div>

                    <!-- คอลัมน์ขวา ข้อ 5-8 -->
                    <div class="card" style="padding:18px 22px; justify-content:space-around;">
                        <div style="font-size:19.5px; line-height:1.45;">
                            <strong style="color:#059669;">5.</strong> การสัมภาษณ์และการสังเกตช่วยให้ได้ข้อมูลต่างกันอย่างไร?
                        </div>
                        <div style="font-size:19.5px; line-height:1.45;">
                            <strong style="color:#059669;">6.</strong> ข้อความ “ระบบต้องดีและใช้งานง่าย” ยังขาดความชัดเจนอย่างไร?
                        </div>
                        <div style="font-size:19.5px; line-height:1.45;">
                            <strong style="color:#059669;">7.</strong> เพราะเหตุใดจึงต้องให้ผู้เกี่ยวข้องตรวจสอบความต้องการก่อนเริ่มพัฒนา?
                        </div>
                        <div style="font-size:19.5px; line-height:1.45;">
                            <strong style="color:#059669;">8.</strong> หากธุรกิจมีงบประมาณจำกัด นักเรียนจะใช้ข้อมูลอะไรประกอบการเลือกแนวทางแก้ไข?
                        </div>
                    </div>
                </div>

                <!-- ประเด็นหลักในแถบด้านล่าง -->
                <div style="background:linear-gradient(90deg, #1e3a8a, #2563eb); color:#fff; padding:18px 28px; border-radius:16px; text-align:center;">
                    <div style="font-family:'Prompt'; font-size:31px; color:#93c5fd; font-weight:600; margin-bottom:4px;">
                        <i class="fa-solid fa-star"></i> ประเด็นหลักที่ต้องการให้นักเรียนเข้าใจ (Key Takeaway)
                    </div>
                    <div style="font-family:'Prompt'; font-size:20.5px; font-weight:700;">
                        “เริ่มจากศึกษาการทำงานจริง ระบุปัญหาและผลลัพธ์ที่ต้องการ รับฟังผู้เกี่ยวข้อง แล้วจึงเลือกวิธีปรับปรุงที่เหมาะสม”
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-tv"></i> มีหน้าขยายตัวอักษรใหญ่ในสไลด์ที่ 41 และ 42</h4>
                <p>หน้านี้รวมครบทั้ง 8 ข้อตามโครงสร้าง และในสไลด์ที่ 41–42 ได้แยกเป็นตัวอักษรขนาดใหญ่พิเศษพร้อมแนวคำตอบสำหรับฉายหน้าห้องเรียนให้แล้วครับ</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 41: คำถามทบทวนท้ายหน่วย ข้อ 1–4 (ตัวอักษรขนาดใหญ่สำหรับฉายในห้องเรียน)
    // =========================================================================
    {
        id: 41,
        section: "กิจกรรมกลุ่มและสรุปทบทวนท้ายหน่วย (นาทีที่ 56–60)",
        timeGuide: "นาทีที่ 59 (หน้าขยายข้อ 1–4 สำหรับฉายโปรเจกเตอร์)",
        kicker: "สไลด์ที่ 41 • คำถามทบทวนขนาดใหญ่ (ส่วนที่ 1: ข้อ 1–4)",
        title: "คำถามทบทวนท้ายหน่วย (ข้อ 1–4)",
        badge: "ตัวอักษรขนาดใหญ่สำหรับฉายในห้องเรียน + แนวคำตอบ",
        html: `
            <div class="grid-2" style="gap:22px; height:100%;">
                <div class="card blue">
                    <div style="font-family:'Prompt'; font-weight:700; color:#1d4ed8; font-size:19.5px;">คำถามข้อที่ 1</div>
                    <div class="card-title" style="font-size:20.5px; margin:6px 0;">การวิเคราะห์ความต้องการทางธุรกิจมีจุดประสงค์อย่างไร?</div>
                    <div style="background:#fff; padding:12px 16px; border-radius:10px; border:1px solid #93c5fd; font-size:19.5px; color:#334155; margin-top:auto;">
                        <strong>แนวคำตอบ:</strong> เพื่อเข้าใจปัญหา เป้าหมาย ข้อจำกัด และความต้องการของผู้เกี่ยวข้อง ช่วยให้แก้ปัญหาตรงจุดและไม่ลงทุนผิดพลาด
                    </div>
                </div>

                <div class="card emerald">
                    <div style="font-family:'Prompt'; font-weight:700; color:#047857; font-size:19.5px;">คำถามข้อที่ 2</div>
                    <div class="card-title" style="font-size:20.5px; margin:6px 0;">ปัญหา ความต้องการ และแนวทางแก้ไข แตกต่างกันอย่างไร? ยกตัวอย่างประกอบ</div>
                    <div style="background:#fff; padding:12px 16px; border-radius:10px; border:1px solid #6ee7b7; font-size:19.5px; color:#334155; margin-top:auto;">
                        <strong>แนวคำตอบ:</strong> ปัญหา=ออเดอร์ตกหล่น, ความต้องการ=บันทึกและติดตามออเดอร์ได้ครบ, แนวทางแก้ไข=ใช้บัตรคิวหรือฟอร์มออนไลน์
                    </div>
                </div>

                <div class="card purple">
                    <div style="font-family:'Prompt'; font-weight:700; color:#6d28d9; font-size:19.5px;">คำถามข้อที่ 3</div>
                    <div class="card-title" style="font-size:20.5px; margin:6px 0;">เพราะเหตุใดจึงควรเก็บข้อมูลจากผู้เกี่ยวข้องหลายกลุ่ม?</div>
                    <div style="background:#fff; padding:12px 16px; border-radius:10px; border:1px solid #c4b5fd; font-size:19.5px; color:#334155; margin-top:auto;">
                        <strong>แนวคำตอบ:</strong> เพราะแต่ละฝ่ายมองเห็นปัญหาและมีความต้องการต่างกัน การฟังหลายฝ่ายช่วยให้เห็นภาพรอบด้าน
                    </div>
                </div>

                <div class="card amber">
                    <div style="font-family:'Prompt'; font-weight:700; color:#b45309; font-size:19.5px;">คำถามข้อที่ 4</div>
                    <div class="card-title" style="font-size:20.5px; margin:6px 0;">หากเจ้าของร้านบอกว่า “ต้องการเว็บไซต์” นักเรียนควรถามอะไรเพิ่มเติม?</div>
                    <div style="background:#fff; padding:12px 16px; border-radius:10px; border:1px solid #fcd34d; font-size:19.5px; color:#334155; margin-top:auto;">
                        <strong>แนวคำตอบ:</strong> ต้องการนำเว็บไซต์ไปช่วยเรื่องใด? ปัจจุบันขายอย่างไร? พบปัญหาอะไร และมีงบประมาณ/คนดูแลเว็บหรือไม่?
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-chalkboard"></i> สไลด์ขยายสำหรับถาม-ตอบหน้าชั้นเรียน</h4>
                <p>ใช้สุ่มถามนักศึกษาทีละข้อ พร้อมเฉลยแนวคำตอบในกล่องด้านล่าง</p>
            </div>
        `
    },

    // =========================================================================
    // SLIDE 42: คำถามทบทวนท้ายหน่วย ข้อ 5–8 และประเด็นหลัก (ตัวอักษรขนาดใหญ่)
    // =========================================================================
    {
        id: 42,
        section: "กิจกรรมกลุ่มและสรุปทบทวนท้ายหน่วย (นาทีที่ 56–60)",
        timeGuide: "นาทีที่ 60 (หน้าขยายข้อ 5–8 และสรุปปิดคลาส)",
        kicker: "สไลด์ที่ 42 • คำถามทบทวนขนาดใหญ่ (ส่วนที่ 2: ข้อ 5–8 & สรุปหลักคิด)",
        title: "คำถามทบทวน (ข้อ 5–8) และประเด็นหลักของหน่วย",
        badge: "สรุปจบหน่วยที่ 1 อย่างสมบูรณ์",
        html: `
            <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; gap:16px;">
                <div class="grid-2" style="flex:1; gap:18px;">
                    <div class="card cyan" style="padding:16px 22px;">
                        <div style="font-family:'Prompt'; font-weight:700; color:#0e7490; font-size:20.5px;">คำถามข้อที่ 5</div>
                        <div class="card-title" style="font-size:19.5px;">การสัมภาษณ์และการสังเกตช่วยให้ได้ข้อมูลต่างกันอย่างไร?</div>
                        <p style="font-size:19.5px; color:#334155; margin-top:6px;"><strong>แนวคำตอบ:</strong> สัมภาษณ์ทำให้รู้เหตุผลและความคาดหวัง ส่วนการสังเกตทำให้เห็นขั้นตอนและอุปสรรคที่เกิดขึ้นจริงหน้างาน</p>
                    </div>

                    <div class="card rose" style="padding:16px 22px;">
                        <div style="font-family:'Prompt'; font-weight:700; color:#be123c; font-size:20.5px;">คำถามข้อที่ 6</div>
                        <div class="card-title" style="font-size:19.5px;">ข้อความ “ระบบต้องดีและใช้งานง่าย” ยังขาดความชัดเจนอย่างไร?</div>
                        <p style="font-size:19.5px; color:#334155; margin-top:6px;"><strong>แนวคำตอบ:</strong> ไม่มีเกณฑ์วัดผลที่ชัดเจนว่า “ดี” หรือ “ง่าย” คือต้องทำอะไรได้ภายในกี่นาทีหรือกี่ขั้นตอน</p>
                    </div>

                    <div class="card emerald" style="padding:16px 22px;">
                        <div style="font-family:'Prompt'; font-weight:700; color:#047857; font-size:20.5px;">คำถามข้อที่ 7</div>
                        <div class="card-title" style="font-size:19.5px;">เพราะเหตุใดจึงต้องให้ผู้เกี่ยวข้องตรวจสอบความต้องการก่อนเริ่มพัฒนา?</div>
                        <p style="font-size:19.5px; color:#334155; margin-top:6px;"><strong>แนวคำตอบ:</strong> เพื่อยืนยันความเข้าใจให้ตรงกันทุกฝ่าย ลดความเสี่ยงในการสร้างระบบผิดไปจากสิ่งที่ต้องการใช้จริง</p>
                    </div>

                    <div class="card amber" style="padding:16px 22px;">
                        <div style="font-family:'Prompt'; font-weight:700; color:#b45309; font-size:20.5px;">คำถามข้อที่ 8</div>
                        <div class="card-title" style="font-size:19.5px;">หากธุรกิจมีงบประมาณจำกัด นักเรียนจะใช้ข้อมูลอะไรประกอบการเลือกแนวทางแก้ไข?</div>
                        <p style="font-size:19.5px; color:#334155; margin-top:6px;"><strong>แนวคำตอบ:</strong> พิจารณาความรุนแรงของปัญหา ปริมาณงาน อุปกรณ์ที่มีอยู่ ทักษะพนักงาน และความคุ้มค่าของผลลัพธ์</p>
                    </div>
                </div>

                <!-- ประเด็นหลักขนาดใหญ่ -->
                <div style="background:linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color:#fff; padding:22px 32px; border-radius:18px; text-align:center; border:3px solid #38bdf8;">
                    <div style="font-family:'Prompt'; font-size:19.5px; color:#38bdf8; font-weight:700; margin-bottom:6px;">
                        <i class="fa-solid fa-graduation-cap"></i> ประเด็นหลักที่ต้องการให้นักเรียนเข้าใจประจำหน่วยที่ 1
                    </div>
                    <div style="font-family:'Prompt'; font-size:31px; font-weight:800; color:#ffffff;">
                        “เริ่มจากศึกษาการทำงานจริง ระบุปัญหาและผลลัพธ์ที่ต้องการ รับฟังผู้เกี่ยวข้อง แล้วจึงเลือกวิธีปรับปรุงที่เหมาะสม”
                    </div>
                </div>
            </div>
        `,
        notes: `
            <div class="note-card">
                <h4><i class="fa-solid fa-flag-checkered"></i> ปิดท้ายคาบเรียน 60 นาที</h4>
                <p>ให้นักศึกษาอ่านประโยคสรุปด้านล่างพร้อมกัน 1 รอบ ก่อนแยกย้ายไปทำใบงานกลุ่ม</p>
            </div>
        `
    }
];
