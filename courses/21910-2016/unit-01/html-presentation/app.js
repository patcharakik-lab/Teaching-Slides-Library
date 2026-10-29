/**
 * app.js
 * ระบบควบคุม Interactive Web Presentation
 * รายวิชา: 21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล (หน่วยที่ 1)
 */

(function () {
    "use strict";

    let currentIndex = 0;
    const totalSlides = SLIDES_DATA.length;

    // DOM Elements
    const slideViewport = document.getElementById("slideViewport");
    const slideScaleWrapper = document.getElementById("slideScaleWrapper");
    const stageWrapper = document.getElementById("stageWrapper");
    const progressFill = document.getElementById("progressFill");
    const slideInput = document.getElementById("slideInput");
    const totalSlidesCount = document.getElementById("totalSlidesCount");
    const sectionIndicator = document.getElementById("sectionIndicator");
    const slideTimerBadge = document.getElementById("slideTimerBadge");

    // Drawers & Modals
    const notesDrawer = document.getElementById("notesDrawer");
    const notesContent = document.getElementById("notesContent");
    const notesTimeEstimate = document.getElementById("notesTimeEstimate");
    const gridModal = document.getElementById("gridModal");
    const gridList = document.getElementById("gridList");
    const vocabModal = document.getElementById("vocabModal");
    const vocabList = document.getElementById("vocabList");
    const vocabSearchInput = document.getElementById("vocabSearchInput");
    const glossaryPopover = document.getElementById("glossaryPopover");
    const popoverTerm = document.getElementById("popoverTerm");
    const popoverBody = document.getElementById("popoverBody");
    const closePopover = document.getElementById("closePopover");

    // Presenter Mode Elements
    const presenterModal = document.getElementById("presenterModal");
    const presenterSlideBadge = document.getElementById("presenterSlideBadge");
    const presenterRecTime = document.getElementById("presenterRecTime");
    const presenterCurrentSummary = document.getElementById("presenterCurrentSummary");
    const presenterNextSummary = document.getElementById("presenterNextSummary");
    const presenterNotesBody = document.getElementById("presenterNotesBody");
    const presenterElapsed = document.getElementById("presenterElapsed");
    const btnTimerToggle = document.getElementById("btnTimerToggle");
    const btnTimerReset = document.getElementById("btnTimerReset");
    const btnOpenPopupPresenter = document.getElementById("btnOpenPopupPresenter");
    const closePresenter = document.getElementById("closePresenter");
    const presenterPrevBtn = document.getElementById("presenterPrevBtn");
    const presenterNextBtn = document.getElementById("presenterNextBtn");

    // Control Buttons
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");
    const btnFirst = document.getElementById("btnFirst");
    const btnLast = document.getElementById("btnLast");
    const btnNotes = document.getElementById("btnNotes");
    const closeNotes = document.getElementById("closeNotes");
    const btnGrid = document.getElementById("btnGrid");
    const closeGrid = document.getElementById("closeGrid");
    const btnVocab = document.getElementById("btnVocab");
    const closeVocab = document.getElementById("closeVocab");
    const btnPresenter = document.getElementById("btnPresenter");
    const btnPrint = document.getElementById("btnPrint");
    const btnFullscreen = document.getElementById("btnFullscreen");

    // BroadcastChannel for Dual-Screen Presenter Sync (with fallback)
    let syncChannel = null;
    try {
        if ("BroadcastChannel" in window) {
            syncChannel = new BroadcastChannel("web_biz_21910_2016_channel");
            syncChannel.onmessage = (event) => {
                if (event.data && typeof event.data.slideIndex === "number") {
                    if (event.data.slideIndex !== currentIndex) {
                        goToSlide(event.data.slideIndex, false);
                    }
                }
            };
        }
    } catch (err) {
        syncChannel = null;
    }

    window.addEventListener("storage", (e) => {
        if (e.key === "web_biz_21910_2016_slide" && e.newValue !== null) {
            const idx = parseInt(e.newValue, 10);
            if (!isNaN(idx) && idx !== currentIndex) {
                goToSlide(idx, false);
            }
        }
    });

    // =========================================================================
    // 1. RENDER ALL SLIDES INTO DOM (1600x900 Canvas)
    // =========================================================================
    function renderAllSlides() {
        totalSlidesCount.textContent = totalSlides;
        slideInput.max = totalSlides;

        const htmlFragments = SLIDES_DATA.map((slide, idx) => {
            const themeClass = slide.theme === "dark" ? "dark-slide" : "";
            if (slide.isCover) {
                return `
                    <section class="slide cover-slide ${idx === 0 ? "active" : ""}" data-index="${idx}" data-slide-type="${slide.slideType || "Title Slide"}" aria-label="สไลด์ที่ ${slide.id}: ${slide.title}">
                        <div class="slide-body">
                            <div class="slide-inner-fit">
                                ${slide.html}
                            </div>
                        </div>
                        <footer class="slide-footer">
                            <div class="footer-left">
                                <span><i class="fa-solid fa-graduation-cap"></i> รายวิชา 21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล (ปวช. เทคโนโลยีธุรกิจดิจิทัล)</span>
                            </div>
                            <div class="footer-page">สไลด์ที่ ${slide.id} / ${totalSlides}</div>
                        </footer>
                    </section>
                `;
            }

            return `
                <section class="slide ${themeClass} ${idx === 0 ? "active" : ""}" data-index="${idx}" data-slide-type="${slide.slideType || slide.layout || ""}" aria-label="สไลด์ที่ ${slide.id}: ${slide.title}">
                    <header class="slide-header">
                        <div class="header-left">
                            <div class="slide-kicker">
                                <span class="kicker-pill">${slide.kicker || `สไลด์ที่ ${slide.id}`}</span>
                                <span>• หน่วยที่ 1 ความรู้พื้นฐานเกี่ยวกับเว็บไซต์และธุรกิจดิจิทัล</span>
                            </div>
                            <h2 class="slide-title">${slide.title}</h2>
                        </div>
                        ${slide.badge ? `<div class="slide-subtitle-badge"><i class="fa-solid fa-layer-group" style="color:#2563EB;"></i> ${slide.badge}</div>` : ""}
                    </header>

                    <div class="slide-body">
                        <div class="slide-inner-fit">
                            ${slide.html}
                        </div>
                    </div>

                    <footer class="slide-footer">
                        <div class="footer-left">
                            <span class="footer-tag">21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล</span>
                            <span>${slide.section || ""}</span>
                        </div>
                        <div class="footer-page">สไลด์ที่ ${slide.id} / ${totalSlides}</div>
                    </footer>
                </section>
            `;
        });

        slideViewport.innerHTML = htmlFragments.join("");
    }

    // =========================================================================
    // 2. UNIFIED 16:9 VIEWPORT AUTO-SCALING (1600 × 900 px)
    //    Formula: scale = Math.min(availableWidth / 1600, availableHeight / 900)
    //    Uses transform-origin: top left on Slide Canvas + Centered Wrapper
    // =========================================================================
    function updateViewportScale() {
        if (window.matchMedia("print").matches) return;

        const wrapperRect = stageWrapper.getBoundingClientRect();
        const availableWidth = Math.max(wrapperRect.width - 28, 200);
        const availableHeight = Math.max(wrapperRect.height - 20, 120);

        const scale = Math.min(availableWidth / 1600, availableHeight / 900);

        if (slideScaleWrapper) {
            slideScaleWrapper.style.width = `${(1600 * scale).toFixed(2)}px`;
            slideScaleWrapper.style.height = `${(900 * scale).toFixed(2)}px`;
        }
        slideViewport.style.transformOrigin = "top left";
        slideViewport.style.transform = `scale(${scale.toFixed(5)})`;
    }

    function prepareForPrint() {
        // Reveal all click-to-reveal items so printed handout is complete
        slideViewport.querySelectorAll(".reveal-card").forEach((card) => card.classList.add("revealed"));
        // Remove screen transform so print stylesheet renders native 1600x900 without double scaling
        if (slideScaleWrapper) {
            slideScaleWrapper.style.width = "1600px";
            slideScaleWrapper.style.height = "auto";
        }
        slideViewport.style.transform = "none";
    }

    function restoreAfterPrint() {
        updateViewportScale();
    }

    // =========================================================================
    // 3. FORMAT SPEAKER NOTES (5 Structured Items for 60-Minute Lesson)
    // =========================================================================
    function formatSpeakerNotesHTML(slide) {
        const sn = slide.speakerNotes;
        if (!sn) {
            return `<div class="note-card"><p>บรรยายตามหัวข้อบนสไลด์และยกตัวอย่างธุรกิจใกล้ตัวนักเรียน</p></div>`;
        }
        return `
            <div class="note-card">
                <h4><i class="fa-solid fa-chalkboard-user"></i> 1. สิ่งที่ครูควรพูด (Script)</h4>
                <p>${sn.whatToSay}</p>
            </div>
            <div class="note-card">
                <h4><i class="fa-solid fa-store"></i> 2. ตัวอย่างใกล้ตัวนักเรียน</h4>
                <p>${sn.realLifeExample}</p>
            </div>
            <div class="note-card">
                <h4><i class="fa-solid fa-circle-question"></i> 3. คำถามชวนคิดในห้องเรียน</h4>
                <p>${sn.guidingQuestion}</p>
            </div>
            <div class="note-card">
                <h4><i class="fa-solid fa-lightbulb"></i> 4. แนวคำตอบที่คาดหวัง</h4>
                <p>${sn.expectedAnswer}</p>
            </div>
            <div class="note-card">
                <h4><i class="fa-regular fa-clock"></i> 5. เวลาที่ควรใช้ในสไลด์นี้</h4>
                <p><strong>${sn.timeRecommended}</strong> (${slide.timeGuide || ""}) • จุดประสงค์: ${slide.learningObjective || "-"}</p>
            </div>
        `;
    }

    // =========================================================================
    // 4. RENDER SLIDE NAVIGATOR & GLOSSARY MODAL
    // =========================================================================
    function renderOverviewGrid() {
        gridList.innerHTML = SLIDES_DATA.map((slide, idx) => `
            <div class="grid-thumb ${idx === currentIndex ? "active" : ""}" data-index="${idx}">
                <div class="grid-thumb-num">สไลด์ที่ ${slide.id} • ${slide.teachingTime} นาที</div>
                <div class="grid-thumb-title">${slide.title}</div>
                <div style="font-size:12.5px; color:#94A3B8; margin-top:auto;">${slide.section || ""}</div>
            </div>
        `).join("");

        gridList.querySelectorAll(".grid-thumb").forEach((item) => {
            item.addEventListener("click", () => {
                const targetIdx = parseInt(item.getAttribute("data-index"), 10);
                goToSlide(targetIdx);
                gridModal.classList.remove("open");
            });
        });
    }

    function renderGlossaryModal(filterText = "") {
        const keyword = filterText.trim().toLowerCase();
        const filtered = VOCABULARY_LIST.filter((item) =>
            item.term.toLowerCase().includes(keyword) ||
            item.key.toLowerCase().includes(keyword) ||
            item.formal.toLowerCase().includes(keyword) ||
            item.easy.toLowerCase().includes(keyword)
        );

        if (filtered.length === 0) {
            vocabList.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:30px; color:#94A3B8;">ไม่พบคำศัพท์ที่ค้นหา ลองพิมพ์คำอื่น เช่น URL, Hosting, HTTPS, CTA</div>`;
            return;
        }

        vocabList.innerHTML = filtered.map((item) => `
            <div class="vocab-item">
                <div class="vocab-term"><i class="fa-solid fa-tag"></i> ${item.term}</div>
                <div class="vocab-formal"><strong>ความหมายทางการ:</strong> ${item.formal}</div>
                <div class="vocab-easy"><i class="fa-solid fa-comments"></i> <strong>ภาษาพูดเข้าใจง่าย:</strong> ${item.easy}</div>
                <div class="vocab-example"><i class="fa-solid fa-bolt"></i> <strong>ตัวอย่างการใช้งาน:</strong> ${item.example}</div>
            </div>
        `).join("");
    }

    // =========================================================================
    // 5. SLIDE NAVIGATION & PRESENTER VIEW UPDATE
    // =========================================================================
    function goToSlide(index, broadcast = true) {
        if (index < 0) index = 0;
        if (index >= totalSlides) index = totalSlides - 1;
        currentIndex = index;

        const allSlideEls = slideViewport.querySelectorAll(".slide");
        allSlideEls.forEach((el, idx) => {
            el.classList.toggle("active", idx === currentIndex);
        });

        const currentSlideData = SLIDES_DATA[currentIndex];
        slideInput.value = currentIndex + 1;
        const pct = ((currentIndex + 1) / totalSlides) * 100;
        progressFill.style.width = `${pct}%`;

        sectionIndicator.textContent = currentSlideData.section || "";
        slideTimerBadge.innerHTML = `<i class="fa-regular fa-clock"></i> ${currentSlideData.timeGuide || `${currentSlideData.teachingTime} นาที`}`;

        // Update Speaker Notes Drawer
        notesTimeEstimate.textContent = `สไลด์ที่ ${currentSlideData.id}/${totalSlides} • เวลาแนะนำ: ${currentSlideData.teachingTime} นาที (รวมทั้งหน่วย 60 นาที)`;
        notesContent.innerHTML = formatSpeakerNotesHTML(currentSlideData);

        // Update Overview Grid Active State
        gridList.querySelectorAll(".grid-thumb").forEach((thumb, idx) => {
            thumb.classList.toggle("active", idx === currentIndex);
        });

        // Update Presenter Console
        updatePresenterConsole();

        // Hide inline glossary popover when changing slides
        glossaryPopover.classList.remove("open");

        // Update URL Hash
        window.history.replaceState(null, null, `#slide-${currentIndex + 1}`);

        // Sync across windows if Presenter Mode is open in a separate popup window
        if (broadcast) {
            if (syncChannel) {
                try {
                    syncChannel.postMessage({ slideIndex: currentIndex });
                } catch (e) {}
            }
            try {
                localStorage.setItem("web_biz_21910_2016_slide", String(currentIndex));
            } catch (e) {}
        }
    }

    function updatePresenterConsole() {
        const cur = SLIDES_DATA[currentIndex];
        const next = SLIDES_DATA[currentIndex + 1] || null;

        presenterSlideBadge.textContent = `สไลด์ที่ ${cur.id} / ${totalSlides}`;
        presenterRecTime.textContent = `เวลาแนะนำ: ${cur.teachingTime} นาที (${cur.timeGuide || ""})`;

        presenterCurrentSummary.innerHTML = `
            <div style="font-size:13.5px; color:#38BDF8; font-weight:600;">${cur.section || ""}</div>
            <h3 style="font-size:21px; color:#FFFFFF; margin:4px 0 8px 0;">${cur.id}. ${cur.title}</h3>
            <p style="font-size:15.5px; color:#CBD5E1; margin-bottom:10px;">${cur.content || ""}</p>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
                ${(cur.keyPoints || []).map((kp) => `<span style="background:rgba(37,99,235,0.28); border:1px solid #3B82F6; color:#BFDBFE; padding:3px 10px; border-radius:999px; font-size:13px;">• ${kp}</span>`).join("")}
            </div>
        `;

        if (next) {
            presenterNextSummary.innerHTML = `
                <div style="font-size:13px; color:#A78BFA;">สไลด์ที่ ${next.id} • ${next.teachingTime} นาที</div>
                <h4 style="font-size:18px; color:#F8FAFC; margin:3px 0;">${next.title}</h4>
                <p style="font-size:14.5px; color:#94A3B8;">${next.content || ""}</p>
            `;
        } else {
            presenterNextSummary.innerHTML = `<div style="color:#6EE7B7; font-size:16px;"><i class="fa-solid fa-flag-checkered"></i> สไลด์สุดท้ายของหน่วยการเรียนรู้ที่ 1</div>`;
        }

        presenterNotesBody.innerHTML = formatSpeakerNotesHTML(cur);
    }

    // =========================================================================
    // 6. INTERACTIVE SYSTEMS (Click-to-Reveal, Diagrams, Domain Activity, Slider, Glossary)
    // =========================================================================
    function initInteractiveComponents() {
        // 6.1 Click-to-Reveal & Inline Glossary Delegation
        slideViewport.addEventListener("click", (e) => {
            // Inline Glossary Term Click
            const glossaryEl = e.target.closest(".glossary-term");
            if (glossaryEl) {
                e.stopPropagation();
                const key = glossaryEl.getAttribute("data-glossary");
                showInlineGlossaryPopover(key);
                return;
            }

            // Reveal All Button on a slide
            const revealAllBtn = e.target.closest(".reveal-all-trigger");
            if (revealAllBtn) {
                const activeSlide = slideViewport.querySelector(".slide.active");
                if (!activeSlide) return;
                const cards = activeSlide.querySelectorAll(".reveal-card");
                const allRevealed = Array.from(cards).every((c) => c.classList.contains("revealed"));
                cards.forEach((c) => {
                    c.classList.toggle("revealed", !allRevealed);
                    const btn = c.querySelector(".reveal-btn");
                    if (btn) {
                        btn.innerHTML = c.classList.contains("revealed")
                            ? `<i class="fa-solid fa-chevron-up"></i> ซ่อนตัวอย่าง`
                            : `<i class="fa-solid fa-chevron-down"></i> ดูตัวอย่าง`;
                    }
                });
                return;
            }

            // Individual Click-to-Reveal Card
            const revealHeader = e.target.closest(".reveal-header, .reveal-btn");
            if (revealHeader && !revealHeader.classList.contains("reveal-all-trigger")) {
                const card = revealHeader.closest(".reveal-card");
                if (card) {
                    card.classList.toggle("revealed");
                    const btn = card.querySelector(".reveal-btn");
                    if (btn) {
                        btn.innerHTML = card.classList.contains("revealed")
                            ? `<i class="fa-solid fa-chevron-up"></i> ซ่อนตัวอย่าง`
                            : `<i class="fa-solid fa-chevron-down"></i> ดูตัวอย่าง`;
                    }
                }
            }
        });

        // 6.2 Interactive Sitemap Diagram (Slide 6)
        const sitemapData = {
            home: {
                icon: "fa-house",
                title: "เว็บเพจที่ 1: หน้าแรก (Home Page — index.html)",
                desc: "หน้าต้อนรับหลักของเว็บไซต์ แสดงแบนเนอร์โปรโมชัน สินค้าขายดีแนะนำ และเมนูนำทางเพื่อเชื่อมต่อไปยังเว็บเพจหน้าอื่น ๆ ของร้าน"
            },
            products: {
                icon: "fa-shirt",
                title: "เว็บเพจที่ 2: หน้าสินค้า (Products — products.html)",
                desc: "แสดงรายการสินค้าทั้งหมดของร้าน แบ่งหมวดหมู่ชัดเจน พร้อมรูปภาพ ชื่อสินค้า ราคา และปุ่มคลิกดูรายละเอียดสินค้า"
            },
            about: {
                icon: "fa-users",
                title: "เว็บเพจที่ 3: หน้าเกี่ยวกับเรา (About Us — about.html)",
                desc: "บอกเล่าเรื่องราวของร้านค้า ความตั้งใจในการคัดสรรสินค้า และมาตรฐานบริการ เพื่อสร้างความน่าเชื่อถือให้ลูกค้า"
            },
            contact: {
                icon: "fa-phone-volume",
                title: "เว็บเพจที่ 4: หน้าติดต่อเรา (Contact — contact.html)",
                desc: "แสดงที่ตั้งร้านค้า เบอร์โทรศัพท์ ช่องทางโซเชียลมีเดีย แผนที่เดินทาง และแบบฟอร์มส่งข้อความสอบถาม"
            }
        };

        document.querySelectorAll(".sitemap-tab").forEach((btn) => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".sitemap-tab").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                const key = btn.getAttribute("data-page");
                const info = sitemapData[key];
                const panel = document.getElementById("sitemapDetailPanel");
                if (panel && info) {
                    panel.innerHTML = `
                        <div class="icon-box blue" style="width:68px; height:68px; font-size:32px;"><i class="fa-solid ${info.icon}"></i></div>
                        <div>
                            <h3 class="section-heading" style="color:#1D4ED8;">${info.title}</h3>
                            <p class="body-text" style="color:#1E293B;">${info.desc}</p>
                        </div>
                    `;
                }
            });
        });

        // 6.3 Interactive URL Anatomy Diagram (Slide 10)
        const urlPartsInfo = {
            protocol: {
                icon: "fa-lock",
                colorClass: "emerald",
                titleColor: "#34D399",
                title: "ส่วนที่ 1: Protocol — <code>https://</code>",
                desc: "คือ <strong>รูปแบบหรือข้อกำหนดในการสื่อสารข้อมูล</strong> ใช้เชื่อมต่อและรับส่งข้อมูลกับเว็บไซต์อย่างมีการเข้ารหัสปลอดภัย (TLS)"
            },
            domain: {
                icon: "fa-globe",
                colorClass: "cyan",
                titleColor: "#22D3EE",
                title: "ส่วนที่ 2: Domain Name — <code>www.example.com</code>",
                desc: "คือ <strong>ชื่อโดเมนของเว็บไซต์ปลายทาง</strong> ช่วยระบุให้เว็บเบราว์เซอร์ทราบว่าต้องติดต่อไปยังเซิร์ฟเวอร์ของเว็บไซต์ร้านค้าแห่งใด"
            },
            path: {
                icon: "fa-folder-tree",
                colorClass: "purple",
                titleColor: "#C4B5FD",
                title: "ส่วนที่ 3: Path — <code>/products/shoes.html</code>",
                desc: "คือ <strong>เส้นทางไปยังทรัพยากรหรือไฟล์เป้าหมาย</strong> บอกให้รู้ว่าต้องเข้าไปที่หมวด <code>/products/</code> และเปิดหน้าเว็บ <code>shoes.html</code>"
            }
        };

        document.querySelectorAll(".url-part-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".url-part-btn").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                const key = btn.getAttribute("data-urlpart");
                const info = urlPartsInfo[key];
                const panel = document.getElementById("urlDetailPanel");
                if (panel && info) {
                    panel.innerHTML = `
                        <div class="icon-box ${info.colorClass}" style="width:66px; height:66px; font-size:30px;"><i class="fa-solid ${info.icon}"></i></div>
                        <div>
                            <h3 class="section-heading" style="color:${info.titleColor};">${info.title}</h3>
                            <p class="body-text" style="color:#F8FAFC;">${info.desc}</p>
                        </div>
                    `;
                }
            });
        });

        // 6.4 Interactive Domain Naming Activity (Slide 12 - Slide B)
        const domainIdeaInput = document.getElementById("domainIdeaInput");
        const domainExtSelect = document.getElementById("domainExtSelect");
        const domainLiveUrl = document.getElementById("domainLiveUrl");
        const domainFeedbackMsg = document.getElementById("domainFeedbackMsg");

        function updateDomainActivityPreview() {
            if (!domainIdeaInput || !domainExtSelect || !domainLiveUrl || !domainFeedbackMsg) return;
            const raw = domainIdeaInput.value.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
            const ext = domainExtSelect.value;
            const cleanName = raw || "myshop";
            domainLiveUrl.textContent = `https://www.${cleanName}${ext}`;

            if (cleanName.length < 4) {
                domainFeedbackMsg.innerHTML = `💡 ชื่อสั้นมาก แนะนำให้เพิ่มคำที่สื่อถึงสินค้าหรือชื่อแบรนด์ให้ชัดเจนขึ้น`;
            } else if (cleanName.length > 22) {
                domainFeedbackMsg.innerHTML = `⚠️ ชื่อค่อนข้างยาว แนะนำให้กระชับขึ้นเพื่อให้ลูกค้าพิมพ์และจดจำง่าย`;
            } else {
                domainFeedbackMsg.innerHTML = `✅ ความยาวเหมาะสม (${cleanName.length} ตัวอักษร) จดจำง่าย และพร้อมนำไปเช็กสถานะว่าง!`;
            }
        }

        if (domainIdeaInput && domainExtSelect) {
            domainIdeaInput.addEventListener("input", updateDomainActivityPreview);
            domainExtSelect.addEventListener("change", updateDomainActivityPreview);
        }

        // 6.5 Interactive Request-Response Simulator (Slide 16)
        const simStepsInfo = {
            "1": {
                badge: "1",
                title: "ขั้นตอนที่ 1: ผู้ใช้งานเลือกดูสินค้าบน Browser",
                desc: "นักเรียนเปิดเว็บไซต์ร้านค้าบนเว็บเบราว์เซอร์ แล้วคลิกเลือกดูหมวดหมู่สินค้าประเภท <strong>“กระเป๋า”</strong>"
            },
            "2": {
                badge: "2",
                title: "ขั้นตอนที่ 2: เบราว์เซอร์ส่งคำขอ (HTTP/HTTPS Request)",
                desc: "เว็บเบราว์เซอร์ส่ง <strong>คำขอ (Request)</strong> ผ่านอินเทอร์เน็ตไปยัง <strong>เว็บเซิร์ฟเวอร์ (Web Server)</strong> เพื่อขอดูข้อมูลหน้าสินค้ากระเป๋า"
            },
            "3": {
                badge: "3",
                title: "ขั้นตอนที่ 3: เว็บเซิร์ฟเวอร์ประมวลผลและดึงข้อมูล",
                desc: "<strong>เว็บเซิร์ฟเวอร์ (Web Server)</strong> รับคำขอแล้วค้นหาข้อมูลจากโฮสติ้ง ได้แก่ ชื่อสินค้า ราคา และรูปภาพกระเป๋า"
            },
            "4": {
                badge: "4",
                title: "ขั้นตอนที่ 4: ส่งข้อมูลกลับ (Response) และแสดงผล",
                desc: "เซิร์ฟเวอร์ส่งข้อมูลกลับมาเป็น <strong>Response</strong> ให้เว็บเบราว์เซอร์แสดงเป็นหน้ารายการกระเป๋าบนหน้าจอผู้ใช้งาน"
            }
        };

        document.querySelectorAll(".sim-step-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".sim-step-btn").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                const step = btn.getAttribute("data-step");
                const info = simStepsInfo[step];
                const panel = document.getElementById("simDetailPanel");
                if (panel && info) {
                    panel.innerHTML = `
                        <div class="icon-box cyan" style="width:64px; height:64px; font-size:30px;">${info.badge}</div>
                        <div>
                            <h3 class="section-heading" style="color:#22D3EE;">${info.title}</h3>
                            <p class="body-text" style="color:#F8FAFC;">${info.desc}</p>
                        </div>
                    `;
                }
            });
        });

        // 6.6 Interactive Web Page Wireframe Anatomy (Slide 20)
        const wfZonesInfo = {
            header: {
                title: "1. Header & 2. Navigation",
                desc: "<strong>Header:</strong> อยู่ด้านบนสุด แสดงชื่อเว็บไซต์ (My Shop) โลโก้ และเมนูหลัก<br><br><strong>Navigation Menu:</strong> ช่วยให้ผู้ใช้คลิกไปหน้าสินค้าหรือหน้าติดต่อได้ง่าย ชื่อเมนูต้องชัดเจนไม่ซับซ้อน"
            },
            hero: {
                title: "3. แบนเนอร์หลัก (Hero Banner)",
                desc: "พื้นที่ขนาดใหญ่ด้านบนสำหรับแสดงข้อความสำคัญ รูปภาพเด่น หรือโปรโมชัน เช่น <em>“สินค้าคุณภาพ ราคาคุ้มค่า”</em> เพื่อดึงดูดความสนใจทันทีที่เปิดหน้าเว็บ"
            },
            content: {
                title: "4. เนื้อหาหลัก (Main Content) & รูปภาพ",
                desc: "แสดงข้อมูลสำคัญของหน้าเว็บ เช่น รายละเอียดสินค้า (กระเป๋าผ้า, แก้วกาแฟ, สมุดโน้ต) รูปภาพ และราคา จัดวางให้อ่านง่ายและโหลดไว"
            },
            cta: {
                title: "5. ปุ่มกระตุ้น (CTA) & แบบฟอร์ม",
                desc: "<strong>Call to Action (CTA):</strong> ปุ่มเชิญชวนให้ลูกค้าดำเนินการทันที เช่น ปุ่ม <strong>“สั่งซื้อเลย!”</strong><br><br><strong>Forms:</strong> ใช้รับข้อมูลสั่งซื้อหรือติดต่อจากลูกค้าโดยขอเฉพาะข้อมูลที่จำเป็น"
            },
            footer: {
                title: "6. ส่วนท้ายเว็บไซต์ (Footer)",
                desc: "อยู่ด้านล่างสุดของหน้าเว็บ ใช้แสดงข้อมูลติดต่อร้านค้า ที่อยู่ เบอร์โทรศัพท์ ช่องทางโซเชียลมีเดีย และข้อมูลลิขสิทธิ์ (© My Shop)"
            }
        };

        document.querySelectorAll(".wf-zone").forEach((zone) => {
            zone.addEventListener("click", () => {
                document.querySelectorAll(".wf-zone").forEach((z) => z.classList.remove("active"));
                zone.classList.add("active");
                const key = zone.getAttribute("data-wf");
                const info = wfZonesInfo[key];
                const titleEl = document.getElementById("wfDetailTitle");
                const descEl = document.getElementById("wfDetailDesc");
                if (info && titleEl && descEl) {
                    titleEl.textContent = info.title;
                    descEl.innerHTML = info.desc;
                }
            });
        });

        // 6.7 Before / After Comparison Slider (Slide 22)
        const baSlider = document.getElementById("baSliderInput");
        const baBeforePane = document.getElementById("baBeforePane");
        if (baSlider && baBeforePane) {
            baSlider.addEventListener("input", () => {
                const val = parseFloat(baSlider.value);
                const rightInset = 100 - val;
                baBeforePane.style.clipPath = `inset(0 ${rightInset}% 0 0)`;
            });
        }
    }

    function showInlineGlossaryPopover(key) {
        const found = VOCABULARY_LIST.find(
            (item) => item.key.toLowerCase() === String(key).toLowerCase()
        );
        if (!found) return;

        popoverTerm.innerHTML = `<i class="fa-solid fa-book-open"></i> ${found.term}`;
        popoverBody.innerHTML = `
            <div><strong>ความหมาย:</strong> ${found.formal}</div>
            <div style="background:rgba(16,185,129,0.18); padding:8px 10px; border-radius:8px; color:#A7F3D0;">
                <strong><i class="fa-solid fa-lightbulb"></i> ภาษาพูดเข้าใจง่าย:</strong> ${found.easy}
            </div>
            <div style="background:rgba(139,92,246,0.2); padding:8px 10px; border-radius:8px; color:#DDD6FE;">
                <strong><i class="fa-solid fa-check"></i> ตัวอย่าง:</strong> ${found.example}
            </div>
        `;
        glossaryPopover.classList.add("open");
    }

    closePopover.addEventListener("click", () => {
        glossaryPopover.classList.remove("open");
    });

    // =========================================================================
    // 7. INTERACTIVE QUIZ ENGINE (10 Questions on Slide 25)
    // =========================================================================
    let currentQuizIdx = 0;
    const userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);

    function initQuizEngine() {
        const navDots = document.getElementById("quizNavDots");
        const btnPrevQ = document.getElementById("btnQuizPrevQ");
        const btnNextQ = document.getElementById("btnQuizNextQ");
        const btnCheckAll = document.getElementById("btnQuizCheckAll");
        const btnReset = document.getElementById("btnQuizReset");

        if (!navDots) return;

        function renderQuizState() {
            const q = QUIZ_QUESTIONS[currentQuizIdx];
            const scoreVal = document.getElementById("quizScoreVal");
            const progressText = document.getElementById("quizProgressText");
            const qBadge = document.getElementById("quizQBadge");
            const qText = document.getElementById("quizQText");
            const optList = document.getElementById("quizOptionsList");
            const feedbackBox = document.getElementById("quizFeedbackBox");

            // Calculate score & answered count
            let correctCount = 0;
            let answeredCount = 0;
            userAnswers.forEach((ans, idx) => {
                if (ans !== null) {
                    answeredCount++;
                    if (ans === QUIZ_QUESTIONS[idx].correctIndex) {
                        correctCount++;
                    }
                }
            });

            scoreVal.textContent = correctCount;
            progressText.textContent = `ตอบแล้ว ${answeredCount}/${QUIZ_QUESTIONS.length} ข้อ`;
            qBadge.textContent = `ข้อที่ ${currentQuizIdx + 1} จาก ${QUIZ_QUESTIONS.length}`;
            qText.textContent = q.question;

            // Render 1-10 navigation dots
            navDots.innerHTML = QUIZ_QUESTIONS.map((item, idx) => {
                let statusClass = "";
                if (userAnswers[idx] !== null) {
                    statusClass = userAnswers[idx] === item.correctIndex ? "correct" : "wrong";
                }
                const activeClass = idx === currentQuizIdx ? "active" : "";
                return `<button type="button" class="quiz-dot-btn ${activeClass} ${statusClass}" data-qidx="${idx}">${idx + 1}</button>`;
            }).join("");

            navDots.querySelectorAll(".quiz-dot-btn").forEach((dot) => {
                dot.addEventListener("click", () => {
                    currentQuizIdx = parseInt(dot.getAttribute("data-qidx"), 10);
                    renderQuizState();
                });
            });

            // Render options
            const selectedAns = userAnswers[currentQuizIdx];
            optList.innerHTML = q.options.map((optText, oIdx) => {
                let cls = "";
                let iconHtml = `<i class="fa-regular fa-circle"></i>`;
                if (selectedAns !== null) {
                    if (oIdx === q.correctIndex) {
                        cls = "selected-correct";
                        iconHtml = `<i class="fa-solid fa-circle-check" style="color:#059669;"></i>`;
                    } else if (oIdx === selectedAns && selectedAns !== q.correctIndex) {
                        cls = "selected-wrong";
                        iconHtml = `<i class="fa-solid fa-circle-xmark" style="color:#E11D48;"></i>`;
                    }
                }
                return `
                    <button type="button" class="quiz-opt-btn ${cls}" data-opt="${oIdx}">
                        ${iconHtml}
                        <span>${optText}</span>
                    </button>
                `;
            }).join("");

            optList.querySelectorAll(".quiz-opt-btn").forEach((optBtn) => {
                optBtn.addEventListener("click", () => {
                    const chosen = parseInt(optBtn.getAttribute("data-opt"), 10);
                    userAnswers[currentQuizIdx] = chosen;
                    renderQuizState();
                });
            });

            // Render Feedback
            if (selectedAns === null) {
                feedbackBox.style.background = "#F0F9FF";
                feedbackBox.style.borderLeftColor = "#2563EB";
                feedbackBox.innerHTML = `<span><i class="fa-solid fa-circle-info" style="color:#2563EB;"></i> คลิกเลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว ระบบจะตรวจคำตอบและแสดงเหตุผลทันที</span>`;
            } else if (selectedAns === q.correctIndex) {
                feedbackBox.style.background = "#ECFDF5";
                feedbackBox.style.borderLeftColor = "#059669";
                feedbackBox.innerHTML = `<div><strong style="color:#047857;"><i class="fa-solid fa-circle-check"></i> ถูกต้องครับ! (+1 คะแนน)</strong> — ${q.explanation}</div>`;
            } else {
                feedbackBox.style.background = "#FFF1F2";
                feedbackBox.style.borderLeftColor = "#E11D48";
                feedbackBox.innerHTML = `<div><strong style="color:#BE123C;"><i class="fa-solid fa-circle-xmark"></i> ยังไม่ถูกนะครับ!</strong> — ${q.explanation}</div>`;
            }
        }

        btnPrevQ.addEventListener("click", () => {
            if (currentQuizIdx > 0) {
                currentQuizIdx--;
                renderQuizState();
            }
        });

        btnNextQ.addEventListener("click", () => {
            if (currentQuizIdx < QUIZ_QUESTIONS.length - 1) {
                currentQuizIdx++;
                renderQuizState();
            }
        });

        btnCheckAll.addEventListener("click", () => {
            QUIZ_QUESTIONS.forEach((q, idx) => {
                if (userAnswers[idx] === null) {
                    userAnswers[idx] = q.correctIndex;
                }
            });
            renderQuizState();
        });

        btnReset.addEventListener("click", () => {
            for (let i = 0; i < userAnswers.length; i++) {
                userAnswers[i] = null;
            }
            currentQuizIdx = 0;
            renderQuizState();
        });

        renderQuizState();
    }

    // =========================================================================
    // 8. PRESENTER TIMER & DUAL-WINDOW PRESENTER MODE
    // =========================================================================
    let timerSeconds = 0;
    let timerInterval = null;

    function formatTimeMMSS(totalSec) {
        const mins = Math.floor(totalSec / 60);
        const secs = totalSec % 60;
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }

    btnTimerToggle.addEventListener("click", () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
            btnTimerToggle.innerHTML = `<i class="fa-solid fa-play"></i> เริ่มเวลาต่อ`;
        } else {
            timerInterval = setInterval(() => {
                timerSeconds++;
                presenterElapsed.textContent = formatTimeMMSS(timerSeconds);
            }, 1000);
            btnTimerToggle.innerHTML = `<i class="fa-solid fa-pause"></i> พักเวลา`;
        }
    });

    btnTimerReset.addEventListener("click", () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        timerSeconds = 0;
        presenterElapsed.textContent = "00:00";
        btnTimerToggle.innerHTML = `<i class="fa-solid fa-play"></i> เริ่ม/พักเวลา`;
    });

    btnOpenPopupPresenter.addEventListener("click", () => {
        const popupUrl = `${window.location.pathname}?presenter=popup#slide-${currentIndex + 1}`;
        window.open(popupUrl, "PresenterConsoleWindow", "width=1150,height=780,menubar=no,toolbar=no");
    });

    // =========================================================================
    // 9. EVENT LISTENERS & KEYBOARD SHORTCUTS
    // =========================================================================
    btnPrev.addEventListener("click", () => goToSlide(currentIndex - 1));
    btnNext.addEventListener("click", () => goToSlide(currentIndex + 1));
    btnFirst.addEventListener("click", () => goToSlide(0));
    btnLast.addEventListener("click", () => goToSlide(totalSlides - 1));

    presenterPrevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
    presenterNextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

    slideInput.addEventListener("change", () => {
        const val = parseInt(slideInput.value, 10);
        if (!isNaN(val)) {
            goToSlide(val - 1);
        }
    });

    btnNotes.addEventListener("click", () => {
        notesDrawer.classList.toggle("open");
        btnNotes.classList.toggle("active");
    });

    closeNotes.addEventListener("click", () => {
        notesDrawer.classList.remove("open");
        btnNotes.classList.remove("active");
    });

    btnGrid.addEventListener("click", () => {
        gridModal.classList.toggle("open");
    });

    closeGrid.addEventListener("click", () => {
        gridModal.classList.remove("open");
    });

    btnVocab.addEventListener("click", () => {
        vocabModal.classList.toggle("open");
        if (vocabModal.classList.contains("open")) {
            vocabSearchInput.focus();
        }
    });

    closeVocab.addEventListener("click", () => {
        vocabModal.classList.remove("open");
    });

    vocabSearchInput.addEventListener("input", () => {
        renderGlossaryModal(vocabSearchInput.value);
    });

    btnPresenter.addEventListener("click", () => {
        presenterModal.classList.toggle("open");
        updatePresenterConsole();
    });

    closePresenter.addEventListener("click", () => {
        presenterModal.classList.remove("open");
    });

    btnPrint.addEventListener("click", () => {
        prepareForPrint();
        window.print();
    });

    window.addEventListener("beforeprint", prepareForPrint);
    window.addEventListener("afterprint", restoreAfterPrint);

    btnFullscreen.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        } else {
            document.exitFullscreen().catch(() => {});
        }
    });

    document.addEventListener("fullscreenchange", () => {
        setTimeout(updateViewportScale, 50);
    });

    // Keyboard Shortcuts (Guarded so typing in Input/Textarea/Select is never interrupted)
    window.addEventListener("keydown", (e) => {
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
        if (activeTag === "input" || activeTag === "textarea" || activeTag === "select") {
            if (e.key === "Escape") {
                document.activeElement.blur();
            }
            return;
        }

        if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
            e.preventDefault();
            goToSlide(currentIndex + 1);
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
            e.preventDefault();
            goToSlide(currentIndex - 1);
        } else if (e.key === "Home") {
            e.preventDefault();
            goToSlide(0);
        } else if (e.key === "End") {
            e.preventDefault();
            goToSlide(totalSlides - 1);
        } else if (e.key === "f" || e.key === "F") {
            e.preventDefault();
            btnFullscreen.click();
        } else if (e.key === "p" || e.key === "P") {
            e.preventDefault();
            presenterModal.classList.toggle("open");
            updatePresenterConsole();
        } else if (e.key === "n" || e.key === "N") {
            e.preventDefault();
            notesDrawer.classList.toggle("open");
            btnNotes.classList.toggle("active");
        } else if (e.key === "g" || e.key === "G") {
            e.preventDefault();
            vocabModal.classList.toggle("open");
        } else if (e.key === "Escape") {
            gridModal.classList.remove("open");
            vocabModal.classList.remove("open");
            presenterModal.classList.remove("open");
            notesDrawer.classList.remove("open");
            btnNotes.classList.remove("active");
            glossaryPopover.classList.remove("open");
        }
    });

    window.addEventListener("resize", updateViewportScale);

    // =========================================================================
    // 10. INITIALIZATION
    // =========================================================================
    renderAllSlides();
    renderOverviewGrid();
    renderGlossaryModal();
    initInteractiveComponents();
    initQuizEngine();
    updateViewportScale();

    // Check URL Hash & Query Params on startup
    const hashMatch = window.location.hash.match(/#slide-(\d+)/);
    if (hashMatch) {
        const initialSlide = parseInt(hashMatch[1], 10) - 1;
        goToSlide(initialSlide, false);
    } else {
        goToSlide(0, false);
    }

    if (window.location.search.includes("presenter=popup")) {
        presenterModal.classList.add("open");
        updatePresenterConsole();
    }

    // =========================================================================
    // 11. AUTOMATED SLIDE QUALITY AUDIT (getBoundingClientRect & scrollHeight)
    // =========================================================================
    window.runSlideQualityAudit = function () {
        const prevIndex = currentIndex;
        const prevTransform = slideViewport.style.transform;
        const prevWrapperW = slideScaleWrapper ? slideScaleWrapper.style.width : "";
        const prevWrapperH = slideScaleWrapper ? slideScaleWrapper.style.height : "";

        // Measure at native 1:1 (1600x900) canvas first so pixel measurements are exact
        slideViewport.style.transform = "scale(1)";
        if (slideScaleWrapper) {
            slideScaleWrapper.style.width = "1600px";
            slideScaleWrapper.style.height = "900px";
        }

        const allSlides = slideViewport.querySelectorAll(".slide");
        const slideReports = [];
        let totalTime = 0;

        allSlides.forEach((slideEl, idx) => {
            allSlides.forEach((s, i) => s.classList.toggle("active", i === idx));

            // Also reveal all click-to-reveal cards to test worst-case expanded height
            const revealCards = slideEl.querySelectorAll(".reveal-card");
            revealCards.forEach((c) => c.classList.add("revealed"));

            const slideRect = slideEl.getBoundingClientRect();
            const bodyEl = slideEl.querySelector(".slide-body");
            const innerEl = slideEl.querySelector(".slide-inner-fit");
            const headerEl = slideEl.querySelector(".slide-header");
            const footerEl = slideEl.querySelector(".slide-footer");

            const bodyOverflowY = bodyEl ? Math.max(0, bodyEl.scrollHeight - bodyEl.clientHeight) : 0;
            const bodyOverflowX = bodyEl ? Math.max(0, bodyEl.scrollWidth - bodyEl.clientWidth) : 0;
            const innerOverflowY = innerEl ? Math.max(0, innerEl.scrollHeight - innerEl.clientHeight) : 0;
            const innerOverflowX = innerEl ? Math.max(0, innerEl.scrollWidth - innerEl.clientWidth) : 0;

            // Check every card, table, and image inside the slide using getBoundingClientRect()
            let clippedElements = 0;
            let cardOverflowCount = 0;
            slideEl.querySelectorAll(".card, .styled-table, .img-frame, .reveal-card, .interactive-diagram-box").forEach((el) => {
                const r = el.getBoundingClientRect();
                if (r.bottom > slideRect.bottom + 2 || r.right > slideRect.right + 2 || r.left < slideRect.left - 2 || r.top < slideRect.top - 2) {
                    clippedElements++;
                }
                if (el.scrollHeight > el.clientHeight + 4 || el.scrollWidth > el.clientWidth + 4) {
                    cardOverflowCount++;
                }
            });

            totalTime += Number(SLIDES_DATA[idx].teachingTime || 0);

            slideReports.push({
                slideId: idx + 1,
                type: SLIDES_DATA[idx].slideType || SLIDES_DATA[idx].layout,
                headerH: headerEl ? Math.round(headerEl.getBoundingClientRect().height) : 0,
                footerH: footerEl ? Math.round(footerEl.getBoundingClientRect().height) : 0,
                bodyClientH: bodyEl ? bodyEl.clientHeight : 0,
                bodyScrollH: bodyEl ? bodyEl.scrollHeight : 0,
                bodyOverflowY: Math.round(bodyOverflowY),
                bodyOverflowX: Math.round(bodyOverflowX),
                innerOverflowY: Math.round(innerOverflowY),
                innerOverflowX: Math.round(innerOverflowX),
                clippedElements,
                cardOverflowCount,
                pass: bodyOverflowY <= 2 && bodyOverflowX <= 2 && innerOverflowY <= 2 && clippedElements === 0
            });
        });

        // Restore state
        slideViewport.style.transform = prevTransform;
        if (slideScaleWrapper) {
            slideScaleWrapper.style.width = prevWrapperW;
            slideScaleWrapper.style.height = prevWrapperH;
        }
        goToSlide(prevIndex, false);

        return {
            totalSlides: allSlides.length,
            totalTeachingMinutes: totalTime,
            allPassed: slideReports.every((r) => r.pass),
            failedSlides: slideReports.filter((r) => !r.pass),
            slides: slideReports
        };
    };

    if (window.location.search.includes("audit=1")) {
        setTimeout(() => {
            const report = window.runSlideQualityAudit();
            const pre = document.createElement("pre");
            pre.id = "auditReportOutput";
            pre.style.display = "none";
            pre.textContent = JSON.stringify(report, null, 2);
            document.body.appendChild(pre);
        }, 150);
    }
})();
