/**
 * app.js (MASTER PROMPT V11 — PROFESSIONAL INTERACTIVE EDUCATIONAL WEB PRESENTATION)
 * รายวิชา: 21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล
 * หน่วยที่ 1 (สัปดาห์ที่ 2): การทำงานของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจ (4 ชั่วโมง)
 */

(function () {
    "use strict";

    let currentIndex = 0;
    const totalSlides = SLIDES_DATA.length;
    const urlParams = new URLSearchParams(window.location.search);
    const isAudienceMode = urlParams.get("mode") === "audience";

    // Persistent Teacher Notes Overrides keyed by immutable slideId (PART 11 & PART 14)
    const NOTES_STORAGE_KEY = "agy_v11_notes_21910_2016_u1w2";
    let customTeacherNotes = {};
    try {
        const saved = localStorage.getItem(NOTES_STORAGE_KEY);
        if (saved) customTeacherNotes = JSON.parse(saved) || {};
    } catch (e) {
        customTeacherNotes = {};
    }

    // Apply Audience Mode if ?mode=audience (PART 13)
    if (isAudienceMode) {
        document.body.classList.add("audience-mode");
    }

    // DOM References
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
    const tocSectionFilter = document.getElementById("tocSectionFilter");
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
    const presenterSyncStatus = document.getElementById("presenterSyncStatus");
    const presenterRecTime = document.getElementById("presenterRecTime");
    const presenterCurrentSummary = document.getElementById("presenterCurrentSummary");
    const presenterNextSummary = document.getElementById("presenterNextSummary");
    const presenterNotesBody = document.getElementById("presenterNotesBody");
    const presenterElapsed = document.getElementById("presenterElapsed");

    // BroadcastChannel for Dual-Screen Sync (PART 13)
    const CHANNEL_NAME = "agy_21910_2016_u1w2_sync";
    let syncChannel = null;
    let audienceWindowRef = null;

    try {
        if ("BroadcastChannel" in window) {
            syncChannel = new BroadcastChannel(CHANNEL_NAME);
            syncChannel.onmessage = (ev) => {
                if (!ev.data) return;
                if (ev.data.type === "SLIDE_CHANGE" && typeof ev.data.slideIndex === "number") {
                    if (ev.data.slideIndex !== currentIndex) {
                        goToSlide(ev.data.slideIndex, false);
                    }
                } else if (ev.data.type === "CUSTOM_ASSETS_UPDATED") {
                    reloadCustomAssetsFromStorage();
                    applyCustomAssetsToAllSlides();
                } else if (ev.data.type === "AUDIENCE_PING" && presenterSyncStatus) {
                    presenterSyncStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> เชื่อมต่อจอผู้เรียนแล้ว (Audience View Online)`;
                } else if (ev.data.type === "AUDIENCE_CLOSED" && presenterSyncStatus) {
                    presenterSyncStatus.innerHTML = `<i class="fa-solid fa-tower-broadcast"></i> จอผู้เรียนถูกปิดแล้ว`;
                }
            };
        }
    } catch (e) {
        syncChannel = null;
    }

    window.addEventListener("storage", (e) => {
        if (e.key === CHANNEL_NAME + "_slide" && e.newValue !== null) {
            const idx = parseInt(e.newValue, 10);
            if (!isNaN(idx) && idx !== currentIndex) {
                goToSlide(idx, false);
            }
        } else if (e.key === CHANNEL_NAME + "_assets") {
            reloadCustomAssetsFromStorage();
            applyCustomAssetsToAllSlides();
        }
    });

    if (isAudienceMode && syncChannel) {
        syncChannel.postMessage({ type: "AUDIENCE_PING" });
        window.addEventListener("beforeunload", () => {
            syncChannel.postMessage({ type: "AUDIENCE_CLOSED" });
        });
    }

    // =========================================================================
    // 1. RENDER ALL SLIDES INTO #slideViewport
    // =========================================================================
    function renderAllSlides() {
        if (!slideViewport) return;
        if (totalSlidesCount) totalSlidesCount.textContent = String(totalSlides);
        if (slideInput) slideInput.max = String(totalSlides);

        const htmlChunks = SLIDES_DATA.map((slide, idx) => {
            const sNum = slide.slideNumber || idx + 1;
            return `
                <section class="slide ${idx === 0 ? "active" : ""}" id="slide-${sNum}" data-slide-id="${slide.slideId}" data-index="${idx}" aria-label="สไลด์ที่ ${sNum}: ${slide.title}">
                    <header class="slide-header">
                        <div class="header-left">
                            <span class="section-kicker"><i class="fa-solid fa-bookmark"></i> ${slide.kicker || slide.section}</span>
                            <h2 class="slide-title">${slide.title}</h2>
                        </div>
                        <span class="header-badge">${slide.badge || slide.layoutType}</span>
                    </header>

                    <div class="slide-body">
                        <div class="slide-original-content-wrap" data-orig-wrap="${slide.slideId}">
                            ${slide.html}
                        </div>
                    </div>

                    <footer class="slide-footer">
                        <span><strong>21910-2016 การสร้างเว็บไซต์สำหรับธุรกิจดิจิทัล</strong> • หน่วยที่ 1 (สัปดาห์ที่ 2): การทำงานของเว็บไซต์และการวิเคราะห์เว็บไซต์ธุรกิจ</span>
                        <span>สไลด์ที่ <strong>${sNum} / ${totalSlides}</strong> (${slide.timeGuide || slide.teachingTime + " นาที"})</span>
                    </footer>
                </section>
            `;
        });

        slideViewport.innerHTML = htmlChunks.join("\n");
    }

    // =========================================================================
    // 2. 1600×900 (16:9) RESPONSIVE AUTO-SCALING (PART 7)
    // =========================================================================
    function updateViewportScale() {
        if (!stageWrapper || !slideViewport || !slideScaleWrapper) return;
        const rect = stageWrapper.getBoundingClientRect();
        const pad = isAudienceMode ? 0 : 20;
        const availW = Math.max(320, rect.width - pad);
        const availH = Math.max(200, rect.height - pad);
        const scale = Math.min(availW / 1600, availH / 900);

        slideScaleWrapper.style.width = `${Math.round(1600 * scale)}px`;
        slideScaleWrapper.style.height = `${Math.round(900 * scale)}px`;
        slideViewport.style.transform = `scale(${scale})`;
    }

    window.addEventListener("resize", updateViewportScale);

    // =========================================================================
    // 3. SLIDE NAVIGATION & SYNC
    // =========================================================================
    function goToSlide(index, broadcast = true) {
        const target = Math.max(0, Math.min(totalSlides - 1, index));
        currentIndex = target;

        const allSlides = slideViewport.querySelectorAll(".slide");
        allSlides.forEach((el, idx) => {
            el.classList.toggle("active", idx === currentIndex);
        });

        const currentSlide = SLIDES_DATA[currentIndex];
        const pct = ((currentIndex + 1) / totalSlides) * 100;
        if (progressFill) progressFill.style.width = `${pct.toFixed(2)}%`;
        if (slideInput) slideInput.value = String(currentIndex + 1);
        if (sectionIndicator && currentSlide) sectionIndicator.textContent = currentSlide.section;

        const btnPrev = document.getElementById("btnPrev");
        const btnNext = document.getElementById("btnNext");
        const btnFirst = document.getElementById("btnFirst");
        const btnLast = document.getElementById("btnLast");
        if (btnPrev) btnPrev.disabled = currentIndex === 0;
        if (btnFirst) btnFirst.disabled = currentIndex === 0;
        if (btnNext) btnNext.disabled = currentIndex === totalSlides - 1;
        if (btnLast) btnLast.disabled = currentIndex === totalSlides - 1;

        hideGlossaryPopover();
        updateSpeakerNotesUI();
        updatePresenterConsoleUI();
        updateSlideNavigatorHighlight();

        // Update URL Hash without scrolling
        try {
            history.replaceState(null, "", `#slide-${currentIndex + 1}${window.location.search ? "" : ""}`);
        } catch (e) {}

        if (broadcast) {
            if (syncChannel) {
                syncChannel.postMessage({ type: "SLIDE_CHANGE", slideIndex: currentIndex, slideId: currentSlide.slideId });
            }
            try {
                localStorage.setItem(CHANNEL_NAME + "_slide", String(currentIndex));
            } catch (e) {}
        }
    }

    // =========================================================================
    // 4. SPEAKER NOTES (7 REQUIRED FIELDS + EDIT & EXPORT — PART 11)
    // =========================================================================
    function buildSpeakerNotesHTML(slide) {
        const sn = slide.speakerNotes || {};
        const customNote = customTeacherNotes[slide.slideId] || "";
        return `
            <div class="note-block">
                <h4><i class="fa-solid fa-bullseye"></i> 1. จุดประสงค์ของสไลด์</h4>
                <p>${sn.objective || "-"}</p>
            </div>
            <div class="note-block">
                <h4><i class="fa-solid fa-chalkboard-user"></i> 2. แนวทางอธิบายเนื้อหา (บทพูดครู)</h4>
                <p>${sn.explanationGuide || "-"}</p>
            </div>
            <div class="note-block">
                <h4><i class="fa-solid fa-lightbulb"></i> 3. ตัวอย่างเพิ่มเติม</h4>
                <p>${sn.extraExamples || "-"}</p>
            </div>
            <div class="note-block">
                <h4><i class="fa-solid fa-circle-question"></i> 4. คำถามกระตุ้นการคิด</h4>
                <p>${sn.guidingQuestion || "-"}</p>
            </div>
            <div class="note-block">
                <h4><i class="fa-solid fa-comments"></i> 5. แนวคำตอบ / ประเด็นอภิปราย</h4>
                <p>${sn.expectedAnswer || "-"}</p>
            </div>
            <div class="note-block">
                <h4><i class="fa-solid fa-hand-pointer"></i> 6. คำแนะนำการใช้ Interactive</h4>
                <p>${sn.interactiveGuide || "-"}</p>
            </div>
            <div class="note-block">
                <h4><i class="fa-solid fa-arrow-right"></i> 7. แนวทางเชื่อมไปยังสไลด์ถัดไป</h4>
                <p>${sn.transitionNote || "-"}</p>
            </div>
            <div class="note-block" style="border-left-color:#8B5CF6;">
                <h4><i class="fa-solid fa-pen"></i> บันทึกเพิ่มเติมของครู (แก้ไขและบันทึกอัตโนมัติตามรหัสสไลด์ ${slide.slideId})</h4>
                <textarea class="teacher-custom-note-input" data-slide-id="${slide.slideId}" rows="3" placeholder="พิมพ์บันทึกการสอนเพิ่มเติมสำหรับสไลด์นี้..." style="width:100%; margin-top:6px; padding:8px 10px; border:1.5px solid #CBD5E1; border-radius:8px; font-family:var(--font-thai); font-size:13.5px;">${customNote}</textarea>
            </div>
        `;
    }

    function updateSpeakerNotesUI() {
        const slide = SLIDES_DATA[currentIndex];
        if (!slide) return;
        if (notesTimeEstimate) {
            notesTimeEstimate.textContent = `สไลด์ที่ ${slide.slideNumber} (${slide.slideId}) • เวลาแนะนำ: ${slide.timeGuide || slide.teachingTime + " นาที"}`;
        }
        if (notesContent) {
            notesContent.innerHTML = buildSpeakerNotesHTML(slide);
            bindCustomNoteEditors(notesContent);
        }
    }

    function bindCustomNoteEditors(container) {
        container.querySelectorAll(".teacher-custom-note-input").forEach((ta) => {
            ta.addEventListener("input", () => {
                const sid = ta.getAttribute("data-slide-id");
                if (sid) {
                    customTeacherNotes[sid] = ta.value;
                    try {
                        localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(customTeacherNotes));
                    } catch (e) {}
                }
            });
        });
    }

    function exportAllSpeakerNotes() {
        const exportPayload = SLIDES_DATA.map((s) => ({
            slideId: s.slideId,
            slideNumber: s.slideNumber,
            title: s.title,
            section: s.section,
            timeGuide: s.timeGuide,
            speakerNotes: s.speakerNotes,
            teacherCustomNote: customTeacherNotes[s.slideId] || ""
        }));
        const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: "application/json;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "speaker-notes-21910-2016-unit-1-week-2.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    // =========================================================================
    // 5. PRESENTER MODE & PRESENTATION TIMER (PARTS 12 & 13)
    // =========================================================================
    let timerSeconds = 0;
    let timerInterval = null;

    function formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }

    function updateTimerDisplays() {
        const formatted = formatTime(timerSeconds);
        if (presenterElapsed) presenterElapsed.textContent = formatted;
        if (slideTimerBadge) slideTimerBadge.innerHTML = `<i class="fa-regular fa-clock"></i> ${formatted} | แผน 4 ชม.`;
    }

    function toggleTimer() {
        const btn = document.getElementById("btnTimerToggle");
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
            if (btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> เริ่มเวลาต่อ`;
        } else {
            timerInterval = setInterval(() => {
                timerSeconds++;
                updateTimerDisplays();
            }, 1000);
            if (btn) btn.innerHTML = `<i class="fa-solid fa-pause"></i> พักเวลา`;
        }
    }

    function resetTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        timerSeconds = 0;
        updateTimerDisplays();
        const btn = document.getElementById("btnTimerToggle");
        if (btn) btn.innerHTML = `<i class="fa-solid fa-play"></i> เริ่ม/พักเวลา`;
    }

    function updatePresenterConsoleUI() {
        const slide = SLIDES_DATA[currentIndex];
        const nextSlide = SLIDES_DATA[currentIndex + 1] || null;
        if (!slide) return;

        if (presenterSlideBadge) presenterSlideBadge.textContent = `สไลด์ที่ ${slide.slideNumber} / ${totalSlides}`;
        if (presenterRecTime) presenterRecTime.textContent = `เวลาแนะนำ: ${slide.teachingTime} นาที`;

        if (presenterCurrentSummary) {
            const points = Array.isArray(slide.content) ? slide.content : [slide.content];
            presenterCurrentSummary.innerHTML = `
                <div style="font-size:13px; color:#4778F5; font-weight:700;">${slide.section}</div>
                <div style="font-size:18px; font-weight:800; color:#18243D; margin:4px 0 8px 0;">${slide.slideNumber}. ${slide.title}</div>
                <ul style="padding-left:18px; font-size:13.5px; color:#52627D; line-height:1.5;">
                    ${points.map((p) => `<li>${p}</li>`).join("")}
                </ul>
            `;
        }

        if (presenterNextSummary) {
            if (nextSlide) {
                presenterNextSummary.innerHTML = `
                    <div style="font-size:12.5px; color:#8B5CF6; font-weight:700;">${nextSlide.section}</div>
                    <div style="font-size:16px; font-weight:700; color:#18243D; margin-top:2px;">สไลด์ที่ ${nextSlide.slideNumber}: ${nextSlide.title}</div>
                    <div style="font-size:13px; color:#52627D; margin-top:4px;">รูปแบบ: ${nextSlide.layoutType} • เวลาแนะนำ ${nextSlide.teachingTime} นาที</div>
                `;
            } else {
                presenterNextSummary.innerHTML = `<div style="font-size:14px; color:#059669; font-weight:700;">นี่คือสไลด์สุดท้ายของบทเรียน (สไลด์ที่ ${totalSlides})</div>`;
            }
        }

        if (presenterNotesBody) {
            presenterNotesBody.innerHTML = buildSpeakerNotesHTML(slide);
            bindCustomNoteEditors(presenterNotesBody);
        }
    }

    function openAudienceWindow() {
        const baseUrl = window.location.href.split("?")[0].split("#")[0];
        const audienceUrl = `${baseUrl}?mode=audience#slide-${currentIndex + 1}`;
        audienceWindowRef = window.open(audienceUrl, "AudienceView_21910_2016_U1W2", "width=1280,height=720,menubar=no,toolbar=no,location=no,status=no");
        if (presenterSyncStatus) {
            presenterSyncStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> เปิดหน้าต่างจอผู้เรียนแล้ว (ซิงค์อัตโนมัติ)`;
        }
    }

    // =========================================================================
    // 6. TABLE OF CONTENTS / SLIDE ORGANIZER & INTERACTIVE GLOSSARY
    // =========================================================================
    function initSlideOrganizer() {
        if (!gridList) return;
        const sections = [...new Set(SLIDES_DATA.map((s) => s.section))];
        if (tocSectionFilter) {
            tocSectionFilter.innerHTML = `<option value="ALL">ทุกส่วนการเรียนรู้ (${totalSlides} สไลด์)</option>` +
                sections.map((sec) => `<option value="${sec}">${sec}</option>`).join("");
            tocSectionFilter.addEventListener("change", () => renderSlideGrid(tocSectionFilter.value));
        }
        renderSlideGrid("ALL");
    }

    function renderSlideGrid(sectionFilter) {
        if (!gridList) return;
        const filtered = SLIDES_DATA.filter((s) => sectionFilter === "ALL" || s.section === sectionFilter);
        gridList.innerHTML = filtered.map((slide) => {
            const idx = slide.slideNumber - 1;
            return `
                <div class="grid-item ${idx === currentIndex ? "current" : ""}" data-index="${idx}">
                    <div class="grid-item-num">สไลด์ที่ ${slide.slideNumber} • ${slide.teachingTime} นาที</div>
                    <div class="grid-item-title">${slide.title}</div>
                    <div style="font-size:12px; color:#52627D;">${slide.section}</div>
                </div>
            `;
        }).join("");

        gridList.querySelectorAll(".grid-item").forEach((item) => {
            item.addEventListener("click", () => {
                const idx = parseInt(item.getAttribute("data-index"), 10);
                goToSlide(idx);
                gridModal.classList.remove("open");
            });
        });
    }

    function updateSlideNavigatorHighlight() {
        if (!gridList) return;
        gridList.querySelectorAll(".grid-item").forEach((item) => {
            const idx = parseInt(item.getAttribute("data-index"), 10);
            item.classList.toggle("current", idx === currentIndex);
        });
    }

    function renderGlossaryModal(query = "") {
        if (!vocabList) return;
        const q = query.trim().toLowerCase();
        const entries = Object.entries(VOCAB_DATA).filter(([key, val]) => {
            if (!q) return true;
            return key.toLowerCase().includes(q) || val.term.toLowerCase().includes(q) || val.easyDef.toLowerCase().includes(q);
        });

        vocabList.innerHTML = entries.map(([, val]) => `
            <div class="vocab-card">
                <div style="font-size:12px; font-weight:700; color:#8B5CF6; margin-bottom:2px;">${val.category}</div>
                <h4>${val.term}</h4>
                <p><strong>ความหมายเข้าใจง่าย:</strong> ${val.easyDef}</p>
                <p style="margin-top:6px; color:#047857;"><strong>ตัวอย่าง:</strong> ${val.example}</p>
            </div>
        `).join("");
    }

    function showGlossaryPopover(termKey, triggerEl) {
        const entry = VOCAB_DATA[termKey];
        if (!entry || !glossaryPopover) return;
        popoverTerm.textContent = entry.term;
        popoverBody.innerHTML = `
            <p>${entry.easyDef}</p>
            <div style="margin-top:8px; padding:8px 10px; background:#ECFDF5; border-radius:8px; color:#065F46; font-size:13.5px;">
                <strong><i class="fa-solid fa-lightbulb"></i> ตัวอย่าง:</strong> ${entry.example}
            </div>
        `;
        glossaryPopover.classList.add("show");
        const rect = triggerEl.getBoundingClientRect();
        const top = Math.min(window.innerHeight - 220, Math.max(60, rect.bottom + 8));
        const left = Math.min(window.innerWidth - 410, Math.max(16, rect.left));
        glossaryPopover.style.top = `${top}px`;
        glossaryPopover.style.left = `${left}px`;
    }

    function hideGlossaryPopover() {
        if (glossaryPopover) glossaryPopover.classList.remove("show");
    }

    // =========================================================================
    // 7. INTERACTIVE SLIDE COMPONENTS (PART 10)
    // =========================================================================
    function initInteractiveComponents() {
        // A. Click-to-Reveal Cards & Reveal-All Button
        slideViewport.querySelectorAll(".reveal-card .reveal-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const card = btn.closest(".reveal-card");
                if (!card) return;
                const isRevealed = card.classList.toggle("revealed");
                btn.innerHTML = isRevealed
                    ? `<i class="fa-solid fa-chevron-up"></i> ซ่อน`
                    : `<i class="fa-solid fa-chevron-down"></i> เปิดดู`;
            });
        });

        slideViewport.querySelectorAll(".reveal-all-trigger").forEach((btn) => {
            btn.addEventListener("click", () => {
                const slideEl = btn.closest(".slide");
                if (!slideEl) return;
                const cards = slideEl.querySelectorAll(".reveal-card");
                const anyHidden = Array.from(cards).some((c) => !c.classList.contains("revealed"));
                cards.forEach((c) => {
                    c.classList.toggle("revealed", anyHidden);
                    const b = c.querySelector(".reveal-btn");
                    if (b) {
                        b.innerHTML = anyHidden
                            ? `<i class="fa-solid fa-chevron-up"></i> ซ่อน`
                            : `<i class="fa-solid fa-chevron-down"></i> เปิดดู`;
                    }
                });
            });
        });

        // B. Slide 5: 5-Step Browser-Server Flow Simulator
        const flowStepsData = {
            "1": {
                badge: "ขั้นตอนที่ 1 จาก 5",
                title: "1. ผู้ใช้งานเปิดเว็บเบราว์เซอร์ & ค้นหาผ่าน DNS",
                desc: "ผู้ใช้งานเปิดเว็บเบราว์เซอร์ (เช่น Google Chrome) พิมพ์ <strong>URL ของเว็บไซต์ร้านกาแฟ</strong> ระบบ <strong>DNS</strong> จะช่วยค้นหาหมายเลข IP Address ของเซิร์ฟเวอร์ปลายทาง",
                tech: "พิมพ์ URL ร้านกาแฟ ➔ ค้นหาที่อยู่เซิร์ฟเวอร์ผ่านระบบ DNS (Domain Name System)"
            },
            "2": {
                badge: "ขั้นตอนที่ 2 จาก 5",
                title: "2. เบราว์เซอร์ส่งคำขอ (Request)",
                desc: "เมื่อทราบปลายทางแล้ว เบราว์เซอร์จะสร้างการเชื่อมต่อและส่ง<strong>คำขอ (Request)</strong> ไปยังเซิร์ฟเวอร์ผ่านเครือข่าย เช่น ขอเปิดหน้าแรกหรือขอรูปภาพสินค้า",
                tech: "ส่งคำขอ (HTTP/HTTPS Request) ข้ามเครือข่ายอินเทอร์เน็ตไปยัง Web Server"
            },
            "3": {
                badge: "ขั้นตอนที่ 3 จาก 5",
                title: "3. เว็บเซิร์ฟเวอร์รับและจัดการคำขอ",
                desc: "เว็บเซิร์ฟเวอร์ตรวจสอบข้อมูลที่ผู้ใช้งานต้องการ หากเป็นเว็บทั่วไปจะเตรียมไฟล์ที่เก็บไว้ทันที แต่หากมีระบบสมาชิกหรือสั่งซื้อ จะประมวลผลและดึงข้อมูลจากฐานข้อมูลก่อน",
                tech: "Web Server ค้นหาไฟล์หน้าเว็บ หรือประมวลผลร่วมกับฐานข้อมูล (Database)"
            },
            "4": {
                badge: "ขั้นตอนที่ 4 จาก 5",
                title: "4. เซิร์ฟเวอร์ส่งข้อมูลกลับ (Response)",
                desc: "เซิร์ฟเวอร์ส่งข้อมูลกลับมาให้เบราว์เซอร์ (Response) ประกอบด้วยไฟล์ <strong>HTML</strong> (โครงสร้าง), <strong>CSS</strong> (สีสันรูปแบบ), <strong>JavaScript</strong> (การโต้ตอบ) และ<strong>รูปภาพ</strong>",
                tech: "ส่งข้อมูลตอบกลับ (Response): HTML + CSS + JavaScript + ไฟล์รูปภาพ"
            },
            "5": {
                badge: "ขั้นตอนที่ 5 จาก 5",
                title: "5. เบราว์เซอร์ประมวลผลและแสดงผลเว็บไซต์",
                desc: "เบราว์เซอร์นำข้อมูลทั้งหมดมาประมวลผลและแสดงบนหน้าจอ ทำให้ผู้ใช้งานมองเห็นข้อความ รูปภาพ เมนู และปุ่มต่าง ๆ พร้อมโต้ตอบได้ทันที",
                tech: "Browser Rendering: แสดงหน้าเว็บที่สมบูรณ์ให้ผู้ใช้งานเห็นและคลิกใช้งานได้"
            }
        };

        let currentSimStep = 1;
        function setWebFlowStep(stepNum) {
            currentSimStep = Math.max(1, Math.min(5, stepNum));
            const data = flowStepsData[String(currentSimStep)];
            if (!data) return;
            const badgeEl = document.getElementById("simStepBadge");
            const titleEl = document.getElementById("simStepTitle");
            const descEl = document.getElementById("simStepDesc");
            const techEl = document.getElementById("simStepTech");
            if (badgeEl) badgeEl.textContent = data.badge;
            if (titleEl) titleEl.textContent = data.title;
            if (descEl) descEl.innerHTML = data.desc;
            if (techEl) techEl.textContent = data.tech;

            document.querySelectorAll("#webFlowStepper .sim-step-btn").forEach((b) => {
                b.classList.toggle("active", parseInt(b.getAttribute("data-step"), 10) === currentSimStep);
            });
        }

        document.querySelectorAll("#webFlowStepper .sim-step-btn").forEach((btn) => {
            btn.addEventListener("click", () => setWebFlowStep(parseInt(btn.getAttribute("data-step"), 10)));
        });
        const simPrevBtn = document.getElementById("simPrevStepBtn");
        const simNextBtn = document.getElementById("simNextStepBtn");
        if (simPrevBtn) simPrevBtn.addEventListener("click", () => setWebFlowStep(currentSimStep > 1 ? currentSimStep - 1 : 5));
        if (simNextBtn) simNextBtn.addEventListener("click", () => setWebFlowStep(currentSimStep < 5 ? currentSimStep + 1 : 1));

        // C. Slide 7: HTML / CSS / JS Layer Builder
        const renderPreview = document.getElementById("renderLayerPreview");
        document.querySelectorAll(".render-layer-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".render-layer-btn").forEach((b) => b.classList.remove("primary"));
                btn.classList.add("primary");
                const mode = btn.getAttribute("data-layer");
                if (!renderPreview) return;
                if (mode === "html") {
                    renderPreview.innerHTML = `
                        <div style="font-family:serif; color:#000000;">
                            <div style="font-size:22px; font-weight:700;">บ้านกาแฟแพร่ - อเมริกาโน่น้ำผึ้ง 50 บาท</div>
                            <div class="caption-text" style="color:#475569;">มีเฉพาะโครงสร้างข้อความจากไฟล์ HTML (ยังไม่มีสีสัน CSS และการโต้ตอบ JS)</div>
                        </div>
                    `;
                } else if (mode === "css") {
                    renderPreview.innerHTML = `
                        <div style="display:flex; align-items:center; justify-content:space-between;">
                            <div>
                                <div style="font-size:24px; font-weight:800; color:#1E40AF;">บ้านกาแฟแพร่ — อเมริกาโน่น้ำผึ้ง 50 บาท</div>
                                <div class="caption-text" style="color:#6D28D9;">✓ มีโครงสร้าง (HTML) + จัดรูปแบบสีสันสวยงามด้วย (CSS)</div>
                            </div>
                            <span style="background:#94A3B8; color:#FFF; padding:6px 14px; border-radius:8px; font-size:20px;">ปุ่มยังไม่โต้ตอบ</span>
                        </div>
                    `;
                } else {
                    renderPreview.innerHTML = `
                        <div style="display:flex; align-items:center; justify-content:space-between;">
                            <div>
                                <div style="font-size:24px; font-weight:800; color:#1E40AF;">☕ บ้านกาแฟแพร่ — อเมริกาโน่น้ำผึ้ง 50 บาท</div>
                                <div class="caption-text" style="color:#047857;">✓ มีโครงสร้าง (HTML) + สีสันสวยงาม (CSS) + รูปภาพ + ปุ่มกดโต้ตอบได้จริง (JS)</div>
                            </div>
                            <span style="background:#4778F5; color:#FFF; padding:6px 14px; border-radius:8px; font-size:20px; font-weight:700;">สั่งซื้อเลย</span>
                        </div>
                    `;
                }
            });
        });

        // D. Slide 8: Request vs Browser-Local Demo
        const btnDemoServerReq = document.getElementById("btnDemoServerReq");
        const demoServerReqOutput = document.getElementById("demoServerReqOutput");
        if (btnDemoServerReq && demoServerReqOutput) {
            btnDemoServerReq.addEventListener("click", () => {
                demoServerReqOutput.innerHTML = `📡 กำลังส่ง <strong>Request</strong> ไปยังเซิร์ฟเวอร์ร้านกาแฟ... ➔ ✅ ได้รับ <strong>Response</strong>: แสดงรายการเครื่องดื่ม 12 เมนู!`;
            });
        }

        const btnDemoLocalToggle = document.getElementById("btnDemoLocalToggle");
        const demoLocalToggleOutput = document.getElementById("demoLocalToggleOutput");
        let localHidden = false;
        if (btnDemoLocalToggle && demoLocalToggleOutput) {
            btnDemoLocalToggle.addEventListener("click", () => {
                localHidden = !localHidden;
                demoLocalToggleOutput.innerHTML = localHidden
                    ? `🙈 ซ่อนข้อความเรียบร้อยแล้ว (ทำงานภายในเบราว์เซอร์ทันที โดยไม่ต้องส่ง Request ไปเซิร์ฟเวอร์)`
                    : `⚡ แสดงข้อความทันทีในเบราว์เซอร์ (0 ms — ไม่มีการส่ง Request ไปยังเซิร์ฟเวอร์)`;
            });
        }

        // E. Slide 9: Interactive URL Anatomy
        const urlPartData = {
            https: {
                label: "https://",
                desc: "แสดงรูปแบบการเชื่อมต่อแบบเข้ารหัสข้อมูล (HTTPS / TLS) ช่วยปกป้องข้อมูลที่รับส่งระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์"
            },
            host: {
                label: "www.baancoffee.example",
                desc: "เป็นชื่อโฮสต์และชื่อโดเมนที่ใช้เข้าถึงเว็บไซต์ ช่วยให้ผู้ใช้งานจดจำชื่อร้านได้ง่ายแทนหมายเลข IP"
            },
            path: {
                label: "/menu",
                desc: "เป็นเส้นทาง (Path) ที่ระบุหน้าเว็บย่อย เพื่อพาผู้ใช้งานไปยังหน้าเมนูเครื่องดื่มของร้านกาแฟโดยตรง"
            },
            hosting: {
                label: "บริการโฮสติ้ง (Hosting)",
                desc: "เป็นบริการพื้นที่และทรัพยากรบนเซิร์ฟเวอร์ที่รองรับการจัดเก็บไฟล์เว็บไซต์ รูปภาพ และข้อมูลเมนูทั้งหมด"
            }
        };

        document.querySelectorAll(".url-part-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".url-part-btn").forEach((b) => b.classList.remove("primary"));
                btn.classList.add("primary");
                const part = urlPartData[btn.getAttribute("data-part")];
                const box = document.getElementById("urlPartExplainBox");
                if (part && box) {
                    box.innerHTML = `
                        <div class="caption-text" style="font-weight:700; color:#065F46;"><i class="fa-solid fa-magnifying-glass"></i> คำอธิบายส่วนที่เลือก: <strong>${part.label}</strong></div>
                        <p class="caption-text" style="color:#18243D; margin-top:4px;">${part.desc}</p>
                    `;
                }
            });
        });

        // F. Slide 12: Interactive Web App Coffee Order Simulator
        let selectedSweetness = "หวานน้อย (50%)";
        let cartCount = 1;
        const coffeeMenuSelect = document.getElementById("coffeeMenuSelect");
        const coffeeCartStatus = document.getElementById("coffeeCartStatus");

        function updateCoffeePreview(submitted = false) {
            if (!coffeeMenuSelect || !coffeeCartStatus) return;
            const [drink, price] = coffeeMenuSelect.value.split("|");
            if (submitted) {
                cartCount++;
                coffeeCartStatus.innerHTML = `✅ ส่งคำสั่งซื้อสำเร็จ! (${drink} • ${selectedSweetness} • ${price} บาท) — รวมในตะกร้า ${cartCount} แก้ว บันทึกลงฐานข้อมูลร้านเรียบร้อย`;
            } else {
                coffeeCartStatus.innerHTML = `🛒 กำลังเลือก: <strong>${drink}</strong> (${price} บาท) • ระดับความหวาน: <strong>${selectedSweetness}</strong>`;
            }
        }

        document.querySelectorAll(".sweet-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".sweet-btn").forEach((b) => b.classList.remove("primary"));
                btn.classList.add("primary");
                selectedSweetness = btn.getAttribute("data-sweet") || "หวานน้อย (50%)";
                updateCoffeePreview(false);
            });
        });
        if (coffeeMenuSelect) coffeeMenuSelect.addEventListener("change", () => updateCoffeePreview(false));
        const btnAddCoffeeCart = document.getElementById("btnAddCoffeeCart");
        if (btnAddCoffeeCart) btnAddCoffeeCart.addEventListener("click", () => updateCoffeePreview(true));

        // G. Slide 14: Business Scenario Switcher (Cases 1–4)
        const bizCases = {
            "1": {
                badge: "ตัวอย่างสถานการณ์ธุรกิจ • กรณีศึกษา 1 จาก 4 (จากเอกสารบทเรียน)",
                title: "ร้านขายเสื้อผ้าต้องการแสดงรูปสินค้า ราคา และเบอร์ติดต่อ",
                goal: "<strong>ความต้องการของธุรกิจ:</strong> ต้องการประชาสัมพันธ์คอลเลกชันเสื้อผ้าให้ลูกค้าเห็นรูปและราคาชัดเจน พร้อมแสดงเบอร์ติดต่อ โดยยังไม่ต้องมีระบบรับคำสั่งซื้อในหน้าเว็บ",
                ans: "info",
                recommend: "✅ แนวทางที่เหมาะสม: เว็บไซต์แบบข้อมูล (Informational Website)",
                reason: "<strong>เหตุผล:</strong> ธุรกิจต้องการประชาสัมพันธ์และให้ลูกค้าติดต่อ โดยยังไม่ต้องมีระบบรับคำสั่งซื้อหรือประมวลผลข้อมูลที่ซับซ้อน"
            },
            "2": {
                badge: "ตัวอย่างสถานการณ์ธุรกิจ • กรณีศึกษา 2 จาก 4",
                title: "ร้านกาแฟต้องการให้ลูกค้าเลือกเครื่องดื่ม กำหนดความหวาน และกดสั่งซื้อออนไลน์",
                goal: "<strong>ความต้องการของธุรกิจ:</strong> ต้องการให้ลูกค้าปรับระดับความหวาน เพิ่มสินค้าลงตะกร้า และส่งคำสั่งซื้อเข้าสู่ระบบของร้านได้โดยตรง",
                ans: "app",
                recommend: "✅ แนวทางที่เหมาะสม: เว็บแอปพลิเคชัน (Web Application)",
                reason: "<strong>เหตุผล:</strong> ต้องรองรับการโต้ตอบของผู้ใช้งาน การคำนวณรายการในตะกร้า และการจัดเก็บข้อมูลคำสั่งซื้อลงในฐานข้อมูล"
            },
            "3": {
                badge: "ตัวอย่างสถานการณ์ธุรกิจ • กรณีศึกษา 3 จาก 4",
                title: "ร้านกาแฟในจังหวัดแพร่ต้องการแจ้งพิกัดร้าน เวลาเปิด–ปิด และเมนูเครื่องดื่ม",
                goal: "<strong>ความต้องการของธุรกิจ:</strong> ต้องการสร้างหน้าเว็บที่มีหน้าแรก หน้าเมนู หน้าเกี่ยวกับร้าน และหน้าติดต่อเรา เพื่อให้ลูกค้าดูข้อมูลก่อนเดินทางมาที่ร้าน",
                ans: "info",
                recommend: "✅ แนวทางที่เหมาะสม: เว็บไซต์แบบข้อมูล (Informational Website)",
                reason: "<strong>เหตุผล:</strong> มุ่งนำเสนอข้อมูลให้ชัดเจน ใช้งานง่าย โดยไม่จำเป็นต้องมีระบบสั่งซื้อออนไลน์"
            },
            "4": {
                badge: "ตัวอย่างสถานการณ์ธุรกิจ • กรณีศึกษา 4 จาก 4",
                title: "ร้านเบเกอรีต้องการทั้งหน้าเล่าประวัติร้าน และระบบสมาชิกสะสมแต้มสั่งซื้อเค้กล่วงหน้า",
                goal: "<strong>ความต้องการของธุรกิจ:</strong> มีทั้งส่วนเนื้อหาให้อ่านทั่วไป และส่วนที่ลูกค้าล็อกอินเข้ามาจองเค้กและเช็กสถานะคำสั่งซื้อ",
                ans: "hybrid",
                recommend: "✅ แนวทางที่เหมาะสม: ผสมผสานทั้งหน้าแสดงข้อมูลและระบบเว็บแอปพลิเคชัน",
                reason: "<strong>เหตุผล:</strong> เว็บไซต์แบบข้อมูลและเว็บแอปพลิเคชันไม่ได้แยกขาดจากกัน เว็บไซต์เดียวสามารถมีทั้งหน้าให้ข้อมูลและระบบทำงานร่วมกันได้"
            }
        };

        document.querySelectorAll("#bizCaseTabs .sim-step-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                document.querySelectorAll("#bizCaseTabs .sim-step-btn").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                const c = bizCases[btn.getAttribute("data-case")];
                if (!c) return;
                document.getElementById("bizCaseBadge").textContent = c.badge;
                document.getElementById("bizCaseTitle").textContent = c.title;
                document.getElementById("bizCaseGoal").innerHTML = c.goal;
                document.getElementById("bizCaseRecommend").textContent = c.recommend;
                document.getElementById("bizCaseReason").innerHTML = c.reason;
                document.querySelectorAll(".biz-ans-btn").forEach((ab) => {
                    ab.classList.toggle("primary", ab.getAttribute("data-ans") === c.ans);
                });
            });
        });

        // H. Slide 15: Interactive 7-Component Wireframe Explorer
        const wfParts = {
            "1": { title: "① 6.1 ส่วนหัวเว็บไซต์ (Header)", desc: "อยู่ด้านบนของหน้าเว็บ แสดงตัวตนของเว็บไซต์ เช่น ชื่อร้านหรือโลโก้ ให้ผู้ใช้เข้าใจทันทีว่าเป็นเว็บของธุรกิจใด" },
            "2": { title: "② 6.2 เมนูนำทาง (Navigation)", desc: "ช่วยให้ผู้ใช้งานไปยังหน้าเว็บต่าง ๆ ได้สะดวก เช่น หน้าแรก สินค้า เกี่ยวกับเรา และติดต่อเรา" },
            "3": { title: "③ 6.3 ส่วนแนะนำหลัก (Hero Section)", desc: "พื้นที่เด่นส่วนบนของหน้าแรก แสดงข้อความสำคัญ ภาพสินค้า หรือจุดเด่น เช่น “กาแฟสดจากเมล็ดกาแฟคุณภาพของชุมชน”" },
            "4": { title: "④ 6.4 ส่วนสินค้าและบริการ (Product/Service)", desc: "แสดงชื่อสินค้า รูปภาพ ราคา และรายละเอียดสำคัญให้ครบถ้วนเพียงพอต่อการตัดสินใจของลูกค้า" },
            "5": { title: "⑤ 6.5 ปุ่มกระตุ้นการดำเนินการ (CTA)", desc: "ปุ่มหรือลิงก์ที่นำผู้ใช้ไปสู่เป้าหมาย เช่น “สั่งซื้อเลย” “ดูเมนูทั้งหมด” “จองคิว” หรือ “ติดต่อร้าน”" },
            "6": { title: "⑥ 6.6 ช่องทางติดต่อ (Contact)", desc: "แสดงเบอร์โทรศัพท์ อีเมล ช่องทางแชต หรือแผนที่ร้านที่เป็นปัจจุบันและติดต่อได้จริง" },
            "7": { title: "⑦ 6.7 ส่วนท้ายเว็บไซต์ (Footer)", desc: "แสดงที่อยู่ร้าน ช่องทางติดต่อ ลิงก์สำคัญ ข้อมูลลิขสิทธิ์ และนโยบายที่เกี่ยวข้อง" }
        };

        document.querySelectorAll(".wf-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".wf-btn").forEach((b) => b.classList.remove("primary"));
                btn.classList.add("primary");
                const p = wfParts[btn.getAttribute("data-part")];
                if (p) {
                    document.getElementById("wfPartTitle").textContent = p.title;
                    document.getElementById("wfPartDesc").textContent = p.desc;
                }
            });
        });
    }

    // =========================================================================
    // 8. INTERACTIVE 10-QUESTION QUIZ (SLIDE 26)
    // =========================================================================
    let currentQuizIdx = 0;
    const userQuizAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);

    function initQuiz() {
        const navDots = document.getElementById("quizNavDots");
        if (!navDots) return;

        navDots.innerHTML = QUIZ_QUESTIONS.map((q, i) => `
            <button type="button" class="quiz-dot ${i === 0 ? "active" : ""}" data-qidx="${i}">${i + 1}</button>
        `).join("");

        navDots.querySelectorAll(".quiz-dot").forEach((dot) => {
            dot.addEventListener("click", () => {
                currentQuizIdx = parseInt(dot.getAttribute("data-qidx"), 10);
                renderQuizQuestion();
            });
        });

        const btnPrev = document.getElementById("btnQuizPrev");
        const btnNext = document.getElementById("btnQuizNext");
        const btnReset = document.getElementById("btnQuizReset");
        const btnCheckAll = document.getElementById("btnQuizCheckAll");

        if (btnPrev) btnPrev.addEventListener("click", () => {
            if (currentQuizIdx > 0) { currentQuizIdx--; renderQuizQuestion(); }
        });
        if (btnNext) btnNext.addEventListener("click", () => {
            if (currentQuizIdx < QUIZ_QUESTIONS.length - 1) { currentQuizIdx++; renderQuizQuestion(); }
        });
        if (btnReset) btnReset.addEventListener("click", () => {
            for (let i = 0; i < userQuizAnswers.length; i++) userQuizAnswers[i] = null;
            currentQuizIdx = 0;
            renderQuizQuestion();
        });
        if (btnCheckAll) btnCheckAll.addEventListener("click", () => {
            for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
                if (userQuizAnswers[i] === null) userQuizAnswers[i] = QUIZ_QUESTIONS[i].correctIndex;
            }
            renderQuizQuestion();
        });

        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        const q = QUIZ_QUESTIONS[currentQuizIdx];
        if (!q) return;

        const qBadge = document.getElementById("quizQBadge");
        const qText = document.getElementById("quizQuestionText");
        const optBox = document.getElementById("quizOptionsBox");
        const expBox = document.getElementById("quizExplanationBox");
        const scoreVal = document.getElementById("quizScoreVal");
        const progText = document.getElementById("quizProgressText");

        if (qBadge) qBadge.textContent = `ข้อที่ ${currentQuizIdx + 1} จาก ${QUIZ_QUESTIONS.length}`;
        if (qText) qText.textContent = q.question;

        const picked = userQuizAnswers[currentQuizIdx];
        if (optBox) {
            optBox.innerHTML = q.options.map((opt, oIdx) => {
                let cls = "quiz-opt-btn";
                if (picked !== null) {
                    if (oIdx === q.correctIndex) cls += " correct";
                    else if (oIdx === picked) cls += " wrong";
                }
                return `<button type="button" class="${cls}" data-oidx="${oIdx}">${opt}</button>`;
            }).join("");

            optBox.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
                btn.addEventListener("click", () => {
                    userQuizAnswers[currentQuizIdx] = parseInt(btn.getAttribute("data-oidx"), 10);
                    renderQuizQuestion();
                });
            });
        }

        if (expBox) {
            if (picked !== null) {
                const isCorrect = picked === q.correctIndex;
                expBox.style.display = "block";
                expBox.innerHTML = `<strong>${isCorrect ? "✅ ถูกต้อง!" : "❌ ยังไม่ถูกต้อง"}</strong> — ${q.explanation}`;
            } else {
                expBox.style.display = "none";
            }
        }

        let answeredCount = 0;
        let correctCount = 0;
        userQuizAnswers.forEach((ans, idx) => {
            if (ans !== null) {
                answeredCount++;
                if (ans === QUIZ_QUESTIONS[idx].correctIndex) correctCount++;
            }
        });
        if (scoreVal) scoreVal.textContent = String(correctCount);
        if (progText) progText.textContent = `ตอบแล้ว ${answeredCount}/${QUIZ_QUESTIONS.length} ข้อ`;

        document.querySelectorAll("#quizNavDots .quiz-dot").forEach((dot, idx) => {
            dot.className = "quiz-dot";
            if (idx === currentQuizIdx) dot.classList.add("active");
            if (userQuizAnswers[idx] !== null) {
                dot.classList.add(userQuizAnswers[idx] === QUIZ_QUESTIONS[idx].correctIndex ? "correct" : "wrong");
            }
        });
    }

    // =========================================================================
    // 9. CONTROLS & KEYBOARD BINDINGS (PART 12)
    // =========================================================================
    function bindGlobalControls() {
        const btnPrev = document.getElementById("btnPrev");
        const btnNext = document.getElementById("btnNext");
        const btnFirst = document.getElementById("btnFirst");
        const btnLast = document.getElementById("btnLast");

        if (btnPrev) btnPrev.addEventListener("click", () => goToSlide(currentIndex - 1));
        if (btnNext) btnNext.addEventListener("click", () => goToSlide(currentIndex + 1));
        if (btnFirst) btnFirst.addEventListener("click", () => goToSlide(0));
        if (btnLast) btnLast.addEventListener("click", () => goToSlide(totalSlides - 1));

        if (slideInput) {
            slideInput.addEventListener("change", () => {
                const val = parseInt(slideInput.value, 10);
                if (!isNaN(val)) goToSlide(val - 1);
            });
        }

        // Speaker Notes Drawer
        const btnNotes = document.getElementById("btnNotes");
        const closeNotes = document.getElementById("closeNotes");
        const btnExportNotes = document.getElementById("btnExportNotes");
        const btnPresenterExportNotes = document.getElementById("btnPresenterExportNotes");

        if (btnNotes && notesDrawer) btnNotes.addEventListener("click", () => notesDrawer.classList.toggle("open"));
        if (closeNotes && notesDrawer) closeNotes.addEventListener("click", () => notesDrawer.classList.remove("open"));
        if (btnExportNotes) btnExportNotes.addEventListener("click", exportAllSpeakerNotes);
        if (btnPresenterExportNotes) btnPresenterExportNotes.addEventListener("click", exportAllSpeakerNotes);

        // Slide Navigator Modal
        const btnGrid = document.getElementById("btnGrid");
        const closeGrid = document.getElementById("closeGrid");
        if (btnGrid && gridModal) btnGrid.addEventListener("click", () => gridModal.classList.add("open"));
        if (closeGrid && gridModal) closeGrid.addEventListener("click", () => gridModal.classList.remove("open"));

        // Glossary Modal & Inline Triggers
        const btnVocab = document.getElementById("btnVocab");
        const closeVocab = document.getElementById("closeVocab");
        if (btnVocab && vocabModal) {
            btnVocab.addEventListener("click", () => {
                renderGlossaryModal(vocabSearchInput ? vocabSearchInput.value : "");
                vocabModal.classList.add("open");
            });
        }
        if (closeVocab && vocabModal) closeVocab.addEventListener("click", () => vocabModal.classList.remove("open"));
        if (vocabSearchInput) vocabSearchInput.addEventListener("input", () => renderGlossaryModal(vocabSearchInput.value));

        slideViewport.querySelectorAll(".glossary-term").forEach((el) => {
            el.addEventListener("click", (e) => {
                e.stopPropagation();
                showGlossaryPopover(el.getAttribute("data-glossary"), el);
            });
        });
        if (closePopover) closePopover.addEventListener("click", hideGlossaryPopover);
        document.addEventListener("click", (e) => {
            if (glossaryPopover && !glossaryPopover.contains(e.target)) hideGlossaryPopover();
        });

        // Presenter Mode Modal
        const btnPresenter = document.getElementById("btnPresenter");
        const closePresenter = document.getElementById("closePresenter");
        const presenterPrevBtn = document.getElementById("presenterPrevBtn");
        const presenterNextBtn = document.getElementById("presenterNextBtn");
        const btnTimerToggle = document.getElementById("btnTimerToggle");
        const btnTimerReset = document.getElementById("btnTimerReset");
        const btnOpenAudienceWindow = document.getElementById("btnOpenAudienceWindow");

        if (btnPresenter && presenterModal) btnPresenter.addEventListener("click", () => presenterModal.classList.add("open"));
        if (closePresenter && presenterModal) closePresenter.addEventListener("click", () => presenterModal.classList.remove("open"));
        if (presenterPrevBtn) presenterPrevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
        if (presenterNextBtn) presenterNextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));
        if (btnTimerToggle) btnTimerToggle.addEventListener("click", toggleTimer);
        if (btnTimerReset) btnTimerReset.addEventListener("click", resetTimer);
        if (btnOpenAudienceWindow) btnOpenAudienceWindow.addEventListener("click", openAudienceWindow);

        // Print / Save as PDF & Fullscreen
        const btnPrint = document.getElementById("btnPrint");
        if (btnPrint) btnPrint.addEventListener("click", () => window.print());

        const btnFullscreen = document.getElementById("btnFullscreen");
        if (btnFullscreen) {
            btnFullscreen.addEventListener("click", () => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => {});
                } else {
                    document.exitFullscreen().catch(() => {});
                }
            });
        }

        // Keyboard Shortcuts (Ignoring when focused in Input/Textarea/Select — PART 12)
        document.addEventListener("keydown", (e) => {
            const tag = (e.target && e.target.tagName) ? e.target.tagName.toUpperCase() : "";
            if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (e.target && e.target.isContentEditable)) {
                return;
            }

            if (e.key === "ArrowRight" || e.key === " ") {
                e.preventDefault();
                goToSlide(currentIndex + 1);
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                goToSlide(currentIndex - 1);
            } else if (e.key === "Home") {
                e.preventDefault();
                goToSlide(0);
            } else if (e.key === "End") {
                e.preventDefault();
                goToSlide(totalSlides - 1);
            } else if (e.key.toLowerCase() === "n" && notesDrawer) {
                e.preventDefault();
                notesDrawer.classList.toggle("open");
            } else if (e.key.toLowerCase() === "g" && vocabModal) {
                e.preventDefault();
                renderGlossaryModal();
                vocabModal.classList.toggle("open");
            } else if (e.key.toLowerCase() === "p" && presenterModal) {
                e.preventDefault();
                presenterModal.classList.toggle("open");
            } else if (e.key.toLowerCase() === "i") {
                e.preventDefault();
                openImageManagerModal();
            } else if (e.key.toLowerCase() === "f") {
                e.preventDefault();
                if (btnFullscreen) btnFullscreen.click();
            } else if (e.key === "Escape") {
                const universalLightbox = document.getElementById("universalLightbox");
                const imageManagerModal = document.getElementById("imageManagerModal");
                if (universalLightbox && universalLightbox.classList.contains("open")) {
                    closeUniversalLightbox();
                    return;
                }
                if (imageManagerModal) imageManagerModal.classList.remove("open");
                if (gridModal) gridModal.classList.remove("open");
                if (vocabModal) vocabModal.classList.remove("open");
                if (presenterModal) presenterModal.classList.remove("open");
                if (notesDrawer) notesDrawer.classList.remove("open");
                hideGlossaryPopover();
            }
        });
    }

    // =========================================================================
    // 10. UNIFIED UNIVERSAL VISUAL ZOOM & LIGHTBOX (ADD-ON V11.2 — PART 6)
    // =========================================================================
    const universalLightbox = document.getElementById("universalLightbox");
    const lightboxStage = document.getElementById("lightboxStage");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxStorageBadge = document.getElementById("lightboxStorageBadge");
    const lightboxZoomLevel = document.getElementById("lightboxZoomLevel");
    const lightboxCaptionText = document.getElementById("lightboxCaptionText");
    const lightboxAttributionText = document.getElementById("lightboxAttributionText");
    const btnLightboxEditAsset = document.getElementById("btnLightboxEditAsset");

    let lbScale = 1;
    let lbPanX = 0;
    let lbPanY = 0;
    let lbDragging = false;
    let lbStartX = 0;
    let lbStartY = 0;
    let lbCurrentAssetId = null;

    function applyLightboxTransform() {
        if (!lightboxImage) return;
        lightboxImage.style.transform = `translate(${lbPanX}px, ${lbPanY}px) scale(${lbScale})`;
        if (lightboxZoomLevel) {
            lightboxZoomLevel.textContent = `${Math.round(lbScale * 100)}%`;
        }
    }

    function openUniversalLightbox(opts = {}) {
        if (!universalLightbox || !lightboxImage || !opts.src) return;
        lbScale = 1;
        lbPanX = 0;
        lbPanY = 0;
        lbCurrentAssetId = opts.assetId || null;

        lightboxImage.src = opts.src;
        lightboxImage.alt = opts.alt || opts.caption || "ภาพประกอบบทเรียน";
        if (lightboxTitle) {
            lightboxTitle.textContent = opts.caption || opts.alt || "ขยายดูรายละเอียดภาพประกอบ (Universal Visual Zoom)";
        }
        if (lightboxStorageBadge) {
            if (opts.storageType === "local" || String(opts.src).startsWith("assets/")) {
                lightboxStorageBadge.textContent = "📁 Local Asset (assets/)";
            } else {
                lightboxStorageBadge.textContent = "🌐 External Image URL";
            }
        }
        if (lightboxCaptionText) {
            lightboxCaptionText.textContent = opts.caption
                ? `คำอธิบายภาพ: ${opts.caption}`
                : "คลิกปุ่ม +/- หรือหมุนลูกกลิ้งเมาส์เพื่อซูม และลากเมาส์เพื่อเลื่อนดูรายละเอียดภาพ (กด ESC เพื่อปิด)";
        }
        if (lightboxAttributionText) {
            const attrParts = [];
            if (opts.source) attrParts.push(`แหล่งที่มา: ${opts.source}`);
            if (opts.creator) attrParts.push(`ผู้สร้าง: ${opts.creator}`);
            if (opts.license) attrParts.push(`สัญญาอนุญาต: ${opts.license}`);
            if (opts.attribution) attrParts.push(opts.attribution);
            lightboxAttributionText.textContent = attrParts.join(" • ");
        }
        if (btnLightboxEditAsset) {
            btnLightboxEditAsset.style.display = (lbCurrentAssetId && !isAudienceMode) ? "inline-flex" : "none";
        }

        applyLightboxTransform();
        universalLightbox.classList.add("open");
    }

    function closeUniversalLightbox() {
        if (!universalLightbox) return;
        universalLightbox.classList.remove("open");
        lbCurrentAssetId = null;
    }

    function setLightboxZoom(newScale, resetPan = false) {
        lbScale = Math.max(0.4, Math.min(4.0, newScale));
        if (resetPan) {
            lbPanX = 0;
            lbPanY = 0;
        }
        applyLightboxTransform();
    }

    function initUniversalVisualZoom() {
        const btnZoomIn = document.getElementById("btnZoomIn");
        const btnZoomOut = document.getElementById("btnZoomOut");
        const btnZoomFit = document.getElementById("btnZoomFit");
        const btnZoomReset = document.getElementById("btnZoomReset");
        const closeLbBtn = document.getElementById("closeLightbox");

        if (btnZoomIn) btnZoomIn.addEventListener("click", () => setLightboxZoom(lbScale + 0.25));
        if (btnZoomOut) btnZoomOut.addEventListener("click", () => setLightboxZoom(lbScale - 0.25));
        if (btnZoomFit) btnZoomFit.addEventListener("click", () => setLightboxZoom(0.92, true));
        if (btnZoomReset) btnZoomReset.addEventListener("click", () => setLightboxZoom(1.0, true));
        if (closeLbBtn) closeLbBtn.addEventListener("click", closeUniversalLightbox);

        if (btnLightboxEditAsset) {
            btnLightboxEditAsset.addEventListener("click", () => {
                const targetId = lbCurrentAssetId;
                closeUniversalLightbox();
                if (targetId) {
                    openImageManagerModal(targetId);
                }
            });
        }

        if (universalLightbox) {
            universalLightbox.addEventListener("click", (e) => {
                if (e.target === universalLightbox) closeUniversalLightbox();
            });
        }

        if (lightboxStage) {
            lightboxStage.addEventListener("wheel", (e) => {
                e.preventDefault();
                const delta = e.deltaY < 0 ? 0.18 : -0.18;
                setLightboxZoom(lbScale + delta);
            }, { passive: false });

            lightboxStage.addEventListener("mousedown", (e) => {
                if (e.button !== 0) return;
                lbDragging = true;
                lbStartX = e.clientX - lbPanX;
                lbStartY = e.clientY - lbPanY;
                lightboxStage.classList.add("dragging");
            });

            window.addEventListener("mousemove", (e) => {
                if (!lbDragging) return;
                lbPanX = e.clientX - lbStartX;
                lbPanY = e.clientY - lbStartY;
                applyLightboxTransform();
            });

            window.addEventListener("mouseup", () => {
                if (lbDragging) {
                    lbDragging = false;
                    if (lightboxStage) lightboxStage.classList.remove("dragging");
                }
            });
        }

        // Delegate Click-to-Enlarge on ALL images inside #slideViewport (built-in & custom imported)
        if (slideViewport) {
            slideViewport.addEventListener("click", (e) => {
                const imgEl = e.target.closest("img");
                if (!imgEl || !slideViewport.contains(imgEl)) return;
                // Do not intercept if clicking an action button
                if (e.target.closest(".custom-visual-toolbar") || e.target.closest("button")) return;

                const customCard = imgEl.closest(".custom-visual-card");
                if (customCard) {
                    const assetId = customCard.getAttribute("data-asset-id");
                    const asset = customAssetsList.find((a) => a.id === assetId);
                    if (asset) {
                        openUniversalLightbox({
                            src: imgEl.getAttribute("src") || asset.url,
                            caption: asset.caption,
                            alt: asset.alt,
                            source: asset.source,
                            creator: asset.creator,
                            license: asset.license,
                            attribution: asset.attribution,
                            storageType: asset.storageType,
                            assetId: asset.id
                        });
                        return;
                    }
                }

                openUniversalLightbox({
                    src: imgEl.getAttribute("src"),
                    caption: imgEl.getAttribute("alt") || "ภาพประกอบและแผนภาพในสไลด์บทเรียน",
                    alt: imgEl.getAttribute("alt") || "",
                    storageType: "local"
                });
            });
        }
    }

    // =========================================================================
    // 11. UNIVERSAL IMAGE URL IMPORT & VISUAL ASSET MANAGEMENT (ADD-ON V11.2)
    // =========================================================================
    const CUSTOM_ASSETS_STORAGE_KEY = "agy_v11_custom_assets_21910_2016_u1w2";
    let customAssetsList = [];
    let isPhpBackendAvailable = false;
    let verifiedPreviewState = {
        verified: false,
        url: "",
        width: 0,
        height: 0,
        storageType: "external"
    };

    function reloadCustomAssetsFromStorage() {
        const preloaded = Array.isArray(window.PRELOADED_CUSTOM_ASSETS) ? window.PRELOADED_CUSTOM_ASSETS : [];
        let localSaved = null;
        try {
            const raw = localStorage.getItem(CUSTOM_ASSETS_STORAGE_KEY);
            if (raw !== null) {
                localSaved = JSON.parse(raw);
            }
        } catch (e) {
            localSaved = null;
        }

        if (Array.isArray(localSaved)) {
            // Merge preloaded static project assets with localSaved so copied folders always work
            const map = new Map();
            preloaded.forEach((item) => {
                if (item && item.id) map.set(item.id, item);
            });
            localSaved.forEach((item) => {
                if (item && item.id) map.set(item.id, item);
            });
            customAssetsList = Array.from(map.values());
        } else {
            customAssetsList = [...preloaded];
        }
    }

    function persistCustomAssets(syncToDiskIfPossible = true) {
        try {
            localStorage.setItem(CUSTOM_ASSETS_STORAGE_KEY, JSON.stringify(customAssetsList));
            localStorage.setItem(CHANNEL_NAME + "_assets", String(Date.now()));
        } catch (e) {}

        if (syncChannel) {
            syncChannel.postMessage({ type: "CUSTOM_ASSETS_UPDATED", timestamp: Date.now() });
        }

        if (syncToDiskIfPossible && isPhpBackendAvailable) {
            fetch("asset-manager.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "save_custom_assets_js",
                    assets: customAssetsList
                })
            }).catch(() => {});
        }
    }

    function escapeHtmlAttr(str) {
        return String(str || "")
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    /**
     * ตรวจสอบความปลอดภัยของโค้ด SVG ฝั่งเบราว์เซอร์
     */
    function isSafeSvgString(svgContent) {
        const lower = String(svgContent || "").toLowerCase();
        if (!lower.includes("<svg")) return false;
        const blocked = [
            /<script\b/i,
            /javascript\s*:/i,
            /vbscript\s*:/i,
            /data\s*:\s*text\/html/i,
            /\bon[a-z]+\s*=/i,
            /<iframe\b/i,
            /<object\b/i,
            /<embed\b/i,
            /<foreignobject\b/i
        ];
        return !blocked.some((rx) => rx.test(svgContent));
    }

    /**
     * ตรวจสอบรูปแบบ URL รูปภาพ แยกแยะ URL ที่ไม่ปลอดภัย และตรวจจับกรณีผู้ใช้วาง URL หน้าเว็บไซต์แทนลิงก์รูปภาพโดยตรง
     */
    function validateAndClassifyImageUrl(rawInput) {
        const trimmed = String(rawInput || "").trim();
        if (!trimmed) {
            return {
                validSyntax: false,
                code: "EMPTY",
                message: "กรุณาวาง URL รูปภาพ หรือระบุพาธไฟล์ใน assets/images/ ก่อนตรวจสอบ"
            };
        }

        const lower = trimmed.toLowerCase();

        // 1. ปฏิเสธ URL Scheme ที่ไม่ปลอดภัย (Section 8 Security)
        if (
            lower.startsWith("javascript:") ||
            lower.startsWith("vbscript:") ||
            lower.startsWith("file:") ||
            lower.startsWith("ftp:") ||
            lower.startsWith("data:text/html") ||
            lower.startsWith("data:application/")
        ) {
            return {
                validSyntax: false,
                code: "UNSAFE_SCHEME",
                message: "ไม่อนุญาตให้ใช้ URL รูปแบบนี้เนื่องจากเหตุผลด้านความปลอดภัย (ห้ามใช้ javascript:, file:, vbscript: หรือ data:text/html)"
            };
        }

        // 2. รองรับ Relative Path ภายในโฟลเดอร์โปรเจกต์ (assets/images/..., assets/diagrams/..., assets/thumbnails/...)
        if (
            (trimmed.startsWith("assets/images/") ||
             trimmed.startsWith("assets/diagrams/") ||
             trimmed.startsWith("assets/thumbnails/") ||
             trimmed.startsWith("./assets/")) &&
            !trimmed.includes("..")
        ) {
            const cleanRel = trimmed.replace(/^\.\//, "");
            return {
                validSyntax: true,
                code: "LOCAL_RELATIVE",
                normalizedUrl: cleanRel,
                storageType: "local",
                isLikelyWebpage: false,
                message: "ตรวจพบพาธไฟล์ภายในโปรเจกต์ (Local Asset Relative Path)"
            };
        }

        // 3. ตรวจสอบรูปแบบ URL มาตรฐาน (HTTPS / HTTP)
        let parsed;
        try {
            parsed = new URL(trimmed);
        } catch (e) {
            return {
                validSyntax: false,
                code: "INVALID_URL",
                message: "รูปแบบ URL ไม่ถูกต้อง กรุณาวาง URL ที่ขึ้นต้นด้วย https:// หรือพาธไฟล์ assets/images/..."
            };
        }

        if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
            return {
                validSyntax: false,
                code: "UNSUPPORTED_PROTOCOL",
                message: `ไม่รองรับโปรโตคอล ${parsed.protocol} กรุณาใช้ลิงก์รูปภาพแบบ HTTPS (https://...)`
            };
        }

        const host = parsed.hostname.toLowerCase();
        const pathname = parsed.pathname.toLowerCase();

        // 4. ตรวจจับกรณีผู้ใช้วางลิงก์หน้าเว็บไซต์ (Webpage URL) แทนที่จะเป็นลิงก์รูปภาพโดยตรง (Section 2)
        const hasImageExtension = /\.(png|jpe?g|webp|gif|svg|avif|bmp)(\?.*)?$/i.test(pathname);
        const webpagePatterns = [
            { test: () => host.includes("google.") && (pathname.includes("/search") || pathname.includes("/imgres") || parsed.search.includes("tbm=isch")), name: "หน้าผลการค้นหา Google Images" },
            { test: () => host.includes("images.app.goo.gl") || host === "goo.gl", name: "ลิงก์ย่อหน้าเว็บ Google Images" },
            { test: () => host.includes("pinterest.") && pathname.includes("/pin/"), name: "หน้าโพสต์ของ Pinterest" },
            { test: () => host === "unsplash.com" && pathname.startsWith("/photos/"), name: "หน้าเว็บแสดงภาพของ Unsplash (ไม่ใช่ images.unsplash.com)" },
            { test: () => host.includes("pexels.com") && pathname.startsWith("/photo/"), name: "หน้าเว็บแสดงภาพของ Pexels (ไม่ใช่ images.pexels.com)" },
            { test: () => host.includes("wikipedia.org") && pathname.includes("/wiki/"), name: "หน้าบทความ Wikipedia" },
            { test: () => host.includes("canva.com") && pathname.includes("/design/"), name: "หน้าออกแบบ Canva" },
            { test: () => /\.(html?|php|aspx?|jsp)$/i.test(pathname), name: "ลิงก์หน้าเว็บเพจ (.html / .php)" }
        ];

        for (const wp of webpagePatterns) {
            if (wp.test()) {
                return {
                    validSyntax: false,
                    code: "WEBPAGE_NOT_IMAGE",
                    isLikelyWebpage: true,
                    webpageType: wp.name,
                    message: `แจ้งเตือน: URL ที่วางคือ "${wp.name}" ซึ่งเป็นลิงก์หน้าเว็บไซต์ ไม่ใช่ลิงก์ไฟล์รูปภาพโดยตรง (Direct Image URL) • วิธีแก้ไข: คลิกขวาที่ตัวรูปภาพบนเว็บไซต์ ➔ เลือก "คัดลอกที่อยู่รูปภาพ" (Copy image address) แล้วนำมาวางใหม่`
                };
            }
        }

        return {
            validSyntax: true,
            code: hasImageExtension ? "DIRECT_IMAGE_URL" : "EXTERNAL_URL_NEEDS_PROBE",
            normalizedUrl: trimmed,
            storageType: "external",
            isHttps: parsed.protocol === "https:",
            hasImageExtension,
            isLikelyWebpage: !hasImageExtension,
            message: hasImageExtension
                ? "รูปแบบ URL รูปภาพถูกต้อง กำลังทดสอบโหลดภาพจริงในเบราว์เซอร์..."
                : "URL นี้ไม่มีนามสกุลไฟล์ภาพต่อท้าย (.png/.jpg) กำลังตรวจสอบว่าเป็นลิงก์ภาพโดยตรงหรือหน้าเว็บไซต์..."
        };
    }

    /**
     * ทดสอบโหลดภาพจริงในเบราว์เซอร์ (Section 4: Image Loading & Fallback)
     * ห้ามบันทึกภาพเสีย และห้ามแสดง Broken Image Icon
     */
    function verifyAndPreviewImageUrl(rawUrl) {
        return new Promise((resolve) => {
            const statusBox = document.getElementById("imgUrlStatusBox");
            const previewEmpty = document.getElementById("imgPreviewEmptyState");
            const previewFigure = document.getElementById("imgPreviewFigure");
            const previewImg = document.getElementById("imgPreviewElement");
            const previewMeta = document.getElementById("previewMetaBadge");
            const previewCaption = document.getElementById("imgPreviewCaptionBar");
            const previewNotice = document.getElementById("previewStorageNotice");
            const btnSave = document.getElementById("btnSaveAssetToSlide");
            const btnTestZoom = document.getElementById("btnTestPreviewZoom");

            const resetToUnverified = (statusClass, htmlMsg, metaText) => {
                verifiedPreviewState = { verified: false, url: "", width: 0, height: 0, storageType: "external" };
                if (statusBox) {
                    statusBox.className = `url-status-box ${statusClass}`;
                    statusBox.innerHTML = htmlMsg;
                }
                // Never show Broken Image Icon: hide <img> and figure immediately
                if (previewImg) {
                    previewImg.style.display = "none";
                    previewImg.removeAttribute("src");
                }
                if (previewFigure) previewFigure.style.display = "none";
                if (previewEmpty) previewEmpty.style.display = "flex";
                if (previewMeta) previewMeta.textContent = metaText || "ไม่สามารถโหลดภาพได้";
                if (btnSave) btnSave.disabled = true;
                if (btnTestZoom) btnTestZoom.disabled = true;
            };

            const check = validateAndClassifyImageUrl(rawUrl);
            if (!check.validSyntax) {
                const boxType = check.code === "WEBPAGE_NOT_IMAGE" ? "warning" : "error";
                resetToUnverified(
                    boxType,
                    `<i class="fa-solid fa-triangle-exclamation"></i> <strong>${check.message}</strong>`,
                    check.code === "WEBPAGE_NOT_IMAGE" ? "เป็นลิงก์หน้าเว็บ (ไม่ใช่รูปภาพ)" : "URL ไม่ถูกต้อง"
                );
                resolve({ ok: false, reason: check.code, message: check.message });
                return;
            }

            if (statusBox) {
                statusBox.className = "url-status-box info";
                statusBox.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> กำลังทดสอบโหลดรูปภาพจาก URL ในเบราว์เซอร์...`;
            }

            const probe = new Image();
            let settled = false;
            const timeoutId = setTimeout(() => {
                if (settled) return;
                settled = true;
                resetToUnverified(
                    "error",
                    `<i class="fa-solid fa-clock"></i> <strong>หมดเวลาการเชื่อมต่อ (Timeout):</strong> ไม่สามารถโหลดภาพจาก URL นี้ได้ภายในเวลาที่กำหนด กรุณาตรวจสอบลิงก์ หรือใช้วิธีอัปโหลดไฟล์จากเครื่องแทน`,
                    "หมดเวลาโหลดภาพ"
                );
                resolve({ ok: false, reason: "TIMEOUT", message: "Timeout loading image" });
            }, 9000);

            probe.onload = () => {
                if (settled) return;
                settled = true;
                clearTimeout(timeoutId);

                const w = probe.naturalWidth || 800;
                const h = probe.naturalHeight || 450;

                verifiedPreviewState = {
                    verified: true,
                    url: check.normalizedUrl,
                    width: w,
                    height: h,
                    storageType: check.storageType
                };

                if (previewEmpty) previewEmpty.style.display = "none";
                if (previewFigure) previewFigure.style.display = "flex";
                if (previewImg) {
                    previewImg.src = check.normalizedUrl;
                    previewImg.style.display = "block";
                }
                const capInput = document.getElementById("imgCaptionInput");
                if (previewCaption) {
                    previewCaption.textContent = (capInput && capInput.value.trim())
                        ? capInput.value.trim()
                        : `ตัวอย่างภาพประกอบ (${w} × ${h} px)`;
                }
                if (previewMeta) {
                    previewMeta.textContent = `${w} × ${h} px • ${check.storageType === "local" ? "Local Asset" : "External URL"}`;
                }
                if (previewNotice) {
                    previewNotice.innerHTML = check.storageType === "local"
                        ? `<span style="color:#065F46; font-weight:700;">✅ ไฟล์ Local Asset (assets/) พร้อมใช้งานแบบออฟไลน์และคัดลอกเข้าคลังสื่อกลาง</span>`
                        : `<span style="color:#B45309; font-weight:600;">⚠️ External URL: แสดงผลจากเว็บภายนอก (อาจใช้งานไม่ได้หากไม่มีอินเทอร์เน็ตหรือเจ้าของเว็บเปลี่ยนลิงก์)</span>`;
                }
                if (statusBox) {
                    statusBox.className = "url-status-box success";
                    statusBox.innerHTML = check.storageType === "local"
                        ? `<i class="fa-solid fa-circle-check"></i> <strong>โหลดภาพสำเร็จ!</strong> (${w} × ${h} px) อ้างอิงจากโฟลเดอร์ <code>${escapeHtmlAttr(check.normalizedUrl)}</code> พร้อมบันทึกเข้าสไลด์`
                        : `<i class="fa-solid fa-circle-check"></i> <strong>โหลดภาพตัวอย่างสำเร็จ!</strong> (${w} × ${h} px) ลิงก์นี้แสดงผลในเบราว์เซอร์ได้จริง สามารถกดบันทึกเข้าสไลด์ หรือกด <strong>"นำเข้าสู่ assets/images/"</strong> เพื่อจัดเก็บไฟล์ลงโปรเจกต์`;
                }
                if (btnSave) btnSave.disabled = false;
                if (btnTestZoom) btnTestZoom.disabled = false;
                updatePreviewAnnotationOverlay();

                resolve({
                    ok: true,
                    url: check.normalizedUrl,
                    width: w,
                    height: h,
                    storageType: check.storageType
                });
            };

            probe.onerror = () => {
                if (settled) return;
                settled = true;
                clearTimeout(timeoutId);

                if (check.isLikelyWebpage) {
                    const msg = `URL นี้ไม่ใช่ลิงก์ไฟล์รูปภาพโดยตรง (อาจเป็นหน้าเว็บไซต์ทั่วไป) • วิธีคัดลอกที่ถูกต้อง: คลิกขวาที่รูปภาพบนหน้าเว็บ ➔ เลือก "คัดลอกที่อยู่รูปภาพ" (Copy image address) ซึ่งมักลงท้ายด้วย .png, .jpg, .webp หรือ .svg`;
                    resetToUnverified(
                        "warning",
                        `<i class="fa-solid fa-globe"></i> <strong>แจ้งเตือน: นี่คือ URL ของหน้าเว็บไซต์ ไม่ใช่ไฟล์รูปภาพโดยตรง</strong><br>${msg}`,
                        "ไม่ใช่ลิงก์รูปภาพโดยตรง"
                    );
                    resolve({ ok: false, reason: "WEBPAGE_OR_NON_IMAGE", message: msg });
                } else {
                    const msg = `เบราว์เซอร์ไม่สามารถโหลดภาพจาก URL นี้ได้ (สาเหตุที่เป็นไปได้: ลิงก์รูปภาพเสีย 404, เว็บไซต์ต้นทางป้องกันการดึงภาพข้ามเว็บ Hotlink Protection หรือติดข้อจำกัด CORS) • ระบบไม่อนุญาตให้บันทึกภาพเสีย กรุณาเปลี่ยน URL ใหม่ หรือกดปุ่ม "เลือกไฟล์ภาพจากเครื่อง" เพื่ออัปโหลดแทน`;
                    resetToUnverified(
                        "error",
                        `<i class="fa-solid fa-circle-xmark"></i> <strong>ไม่สามารถโหลดรูปภาพจาก URL นี้ได้ (Hotlink / ลิงก์เสีย)</strong><br>${msg}`,
                        "โหลดภาพไม่สำเร็จ (บล็อกการบันทึก)"
                    );
                    resolve({ ok: false, reason: "IMAGE_LOAD_FAILED_OR_HOTLINK", message: msg });
                }
            };

            probe.src = check.normalizedUrl;
        });
    }

    function updatePreviewAnnotationOverlay() {
        const layoutSel = document.getElementById("imgLayoutSelect");
        const annInput = document.getElementById("imgAnnotationBadgeInput");
        const chip = document.getElementById("previewAnnotationChip");
        if (!chip || !layoutSel) return;
        if (layoutSel.value === "annotated") {
            const text = (annInput && annInput.value.trim()) ? annInput.value.trim() : "📍 จุดสังเกตสำคัญ";
            chip.textContent = text;
            chip.style.display = "inline-block";
        } else {
            chip.style.display = "none";
        }
    }

    /**
     * แสดงผลภาพประกอบทั้งหมดที่เพิ่มไว้ลงในสไลด์แต่ละหน้า โดยไม่ทำลายเนื้อหาหรือ Event Listener เดิมของสไลด์
     */
    function applyCustomAssetsToAllSlides() {
        if (!slideViewport) return;
        const allSlideEls = slideViewport.querySelectorAll(".slide");

        allSlideEls.forEach((slideEl) => {
            const slideId = slideEl.getAttribute("data-slide-id");
            const bodyEl = slideEl.querySelector(".slide-body");
            const origWrap = slideEl.querySelector(".slide-original-content-wrap");
            if (!bodyEl || !origWrap) return;

            // 1. ลบโซนภาพประกอบเดิมที่สร้างโดยระบบ Custom Assets ออกก่อน (โดยไม่แตะต้อง origWrap)
            slideEl.querySelectorAll(".custom-asset-stage-zone, .custom-bg-illustration-layer, .custom-bg-control-pill").forEach((el) => el.remove());
            bodyEl.className = "slide-body";
            origWrap.classList.remove("replaced-visual-active");
            origWrap.querySelectorAll(".default-slide-visual-hidden").forEach((el) => el.classList.remove("default-slide-visual-hidden"));

            const slideAssets = customAssetsList.filter((a) => a.slideId === slideId);
            if (slideAssets.length === 0) return;

            // 2. แยกภาพแบบ Background Illustration ออกจากภาพใน Stage
            const bgAssets = slideAssets.filter((a) => a.layout === "background");
            const stageAssets = slideAssets.filter((a) => a.layout !== "background");

            // Render Background Illustration (ไม่ทับข้อความและไม่กระทบความสูงสไลด์)
            bgAssets.forEach((bgAsset) => {
                const bgLayer = document.createElement("div");
                bgLayer.className = "custom-bg-illustration-layer";
                const img = document.createElement("img");
                img.src = bgAsset.url;
                img.alt = bgAsset.alt || bgAsset.caption || "";
                img.onerror = () => { bgLayer.style.display = "none"; };
                bgLayer.appendChild(img);
                slideEl.appendChild(bgLayer);

                const bgPill = document.createElement("div");
                bgPill.className = "custom-bg-control-pill no-print";
                bgPill.innerHTML = `
                    <span><i class="fa-regular fa-image"></i> ภาพพื้นหลัง: ${escapeHtmlAttr(bgAsset.caption || "Background Illustration")}</span>
                    <button type="button" class="custom-visual-btn" data-action="zoom-bg" data-id="${escapeHtmlAttr(bgAsset.id)}"><i class="fa-solid fa-magnifying-glass-plus"></i> ขยาย</button>
                    <button type="button" class="custom-visual-btn" data-action="edit" data-id="${escapeHtmlAttr(bgAsset.id)}"><i class="fa-solid fa-pen"></i> แก้ไข</button>
                    <button type="button" class="custom-visual-btn delete" data-action="delete" data-id="${escapeHtmlAttr(bgAsset.id)}"><i class="fa-solid fa-trash"></i></button>
                `;
                slideEl.appendChild(bgPill);
            });

            if (stageAssets.length === 0) return;

            // 3. กำหนดตำแหน่งและขนาดของโซนแสดงภาพตามภาพหลักในสไลด์นั้น
            const primary = stageAssets[stageAssets.length - 1];
            const pos = primary.position || "right";
            const sizePreset = primary.size || "auto-fit";
            const isGallery = stageAssets.length > 1 || primary.layout === "gallery";

            const zoneEl = document.createElement("div");
            zoneEl.className = `custom-asset-stage-zone size-${sizePreset} ${isGallery ? "is-gallery-grid" : ""}`;

            stageAssets.forEach((asset) => {
                const cardEl = buildCustomVisualCardDOM(asset);
                zoneEl.appendChild(cardEl);
            });

            if (pos === "replace-visual") {
                // หากสไลด์เดิมมีรูปภาพประกอบ ให้ซ่อนการ์ดรูปภาพเดิมชั่วคราวแล้วแสดงในตำแหน่งขวาอย่างสมดุล
                const existingImg = origWrap.querySelector("img");
                if (existingImg) {
                    const parentCard = existingImg.closest(".card") || existingImg;
                    parentCard.classList.add("default-slide-visual-hidden");
                    origWrap.classList.add("replaced-visual-active");
                }
                bodyEl.classList.add("has-custom-split", "pos-right", `size-${sizePreset}`);
                bodyEl.appendChild(zoneEl);
            } else if (pos === "left") {
                bodyEl.classList.add("has-custom-split", "pos-left", `size-${sizePreset}`);
                bodyEl.insertBefore(zoneEl, origWrap);
            } else if (pos === "top") {
                bodyEl.classList.add("has-custom-stack", "pos-top");
                bodyEl.insertBefore(zoneEl, origWrap);
            } else if (pos === "bottom") {
                bodyEl.classList.add("has-custom-stack", "pos-bottom");
                bodyEl.appendChild(zoneEl);
            } else {
                // Default: right split
                bodyEl.classList.add("has-custom-split", "pos-right", `size-${sizePreset}`);
                bodyEl.appendChild(zoneEl);
            }
        });

        bindSlideCustomAssetToolbarActions();
    }

    function buildCustomVisualCardDOM(asset) {
        const card = document.createElement("figure");
        card.className = `custom-visual-card layout-${asset.layout || "card"}`;
        card.setAttribute("data-asset-id", asset.id);

        const layoutLabels = {
            "side-by-side": "Side-by-Side",
            "card": "Image Card",
            "full-width": "Full Width",
            "diagram": "Diagram",
            "annotated": "Annotated",
            "comparison": "Comparison",
            "gallery": "Gallery",
            "background": "Background"
        };

        // Top Floating Edit/Zoom/Delete Toolbar (Hidden in Audience & Print)
        const toolbarHtml = `
            <div class="custom-visual-toolbar no-print">
                <button type="button" class="custom-visual-btn" data-action="zoom" data-id="${escapeHtmlAttr(asset.id)}" title="คลิกเพื่อขยายภาพ (Universal Visual Zoom)">
                    <i class="fa-solid fa-magnifying-glass-plus"></i> ขยาย
                </button>
                <button type="button" class="custom-visual-btn" data-action="edit" data-id="${escapeHtmlAttr(asset.id)}" title="แก้ไขภาพ ขนาด ตำแหน่ง หรือคำอธิบาย">
                    <i class="fa-solid fa-pen-to-square"></i> แก้ไข
                </button>
                <button type="button" class="custom-visual-btn delete" data-action="delete" data-id="${escapeHtmlAttr(asset.id)}" title="ลบภาพออกจากสไลด์">
                    <i class="fa-solid fa-trash-can"></i> ลบ
                </button>
            </div>
        `;

        let mediaHtml = "";
        if (asset.layout === "comparison" && asset.secondaryUrl) {
            mediaHtml = `
                <div class="custom-comparison-grid">
                    <div class="custom-comparison-cell">
                        <img src="${escapeHtmlAttr(asset.url)}" alt="${escapeHtmlAttr(asset.alt || asset.caption || "ภาพเปรียบเทียบที่ 1")}" onerror="this.closest('.custom-comparison-cell').style.display='none';">
                        <span class="custom-comparison-label">${escapeHtmlAttr(asset.compareLabel1 || "ภาพที่ 1")}</span>
                    </div>
                    <div class="custom-comparison-cell">
                        <img src="${escapeHtmlAttr(asset.secondaryUrl)}" alt="${escapeHtmlAttr(asset.compareLabel2 || "ภาพเปรียบเทียบที่ 2")}" onerror="this.closest('.custom-comparison-cell').style.display='none';">
                        <span class="custom-comparison-label">${escapeHtmlAttr(asset.compareLabel2 || "ภาพที่ 2")}</span>
                    </div>
                </div>
            `;
        } else {
            const calloutHtml = (asset.layout === "annotated" && asset.annotationText)
                ? `<span class="custom-annotation-callout pos-${escapeHtmlAttr(asset.annotationPos || "top-left")}"><i class="fa-solid fa-location-dot"></i> ${escapeHtmlAttr(asset.annotationText)}</span>`
                : "";
            mediaHtml = `
                <div class="custom-visual-media-box">
                    <img src="${escapeHtmlAttr(asset.url)}" alt="${escapeHtmlAttr(asset.alt || asset.caption || "ภาพประกอบสไลด์")}" onerror="this.closest('.custom-visual-card').style.display='none';">
                    ${calloutHtml}
                </div>
            `;
        }

        const attrBits = [];
        if (asset.source) attrBits.push(asset.source);
        if (asset.creator) attrBits.push(asset.creator);
        if (asset.license) attrBits.push(asset.license);
        const attrSummary = asset.attribution || attrBits.join(" • ") || layoutLabels[asset.layout] || "Visual Asset";

        const captionHtml = `
            <figcaption class="custom-visual-caption-row">
                <span class="custom-visual-caption-text" title="${escapeHtmlAttr(asset.caption || "")}">
                    <i class="fa-solid fa-magnifying-glass-plus" style="color:#4778F5; font-size:14px;"></i>
                    ${escapeHtmlAttr(asset.caption || "คลิกที่ภาพเพื่อขยายดูรายละเอียด")}
                </span>
                <span class="custom-visual-attr-text" title="${escapeHtmlAttr(attrSummary)}">
                    ${escapeHtmlAttr(attrSummary)}
                </span>
            </figcaption>
        `;

        card.innerHTML = toolbarHtml + mediaHtml + captionHtml;
        return card;
    }

    function bindSlideCustomAssetToolbarActions() {
        if (!slideViewport) return;
        slideViewport.querySelectorAll(".custom-visual-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const action = btn.getAttribute("data-action");
                const id = btn.getAttribute("data-id");
                const asset = customAssetsList.find((a) => a.id === id);
                if (!asset) return;

                if (action === "zoom" || action === "zoom-bg") {
                    openUniversalLightbox({
                        src: asset.url,
                        caption: asset.caption,
                        alt: asset.alt,
                        source: asset.source,
                        creator: asset.creator,
                        license: asset.license,
                        attribution: asset.attribution,
                        storageType: asset.storageType,
                        assetId: asset.id
                    });
                } else if (action === "edit") {
                    openImageManagerModal(asset.id);
                } else if (action === "delete") {
                    deleteCustomAssetById(asset.id);
                }
            });
        });
    }

    function deleteCustomAssetById(assetId) {
        customAssetsList = customAssetsList.filter((a) => a.id !== assetId);
        persistCustomAssets(true);
        applyCustomAssetsToAllSlides();
        renderAddedAssetsManagerList();
    }

    function openImageManagerModal(editAssetId = null) {
        const modal = document.getElementById("imageManagerModal");
        if (!modal) return;

        populateTargetSlideSelect();
        if (editAssetId) {
            loadAssetIntoFormForEditing(editAssetId);
        } else {
            const targetSelect = document.getElementById("imgTargetSlideSelect");
            if (targetSelect && SLIDES_DATA[currentIndex]) {
                targetSelect.value = SLIDES_DATA[currentIndex].slideId;
            }
        }
        renderAddedAssetsManagerList();
        modal.classList.add("open");
    }

    function populateTargetSlideSelect() {
        const sel = document.getElementById("imgTargetSlideSelect");
        if (!sel) return;
        const currentVal = sel.value;
        sel.innerHTML = SLIDES_DATA.map((s) =>
            `<option value="${s.slideId}">สไลด์ที่ ${s.slideNumber} (${s.slideId}): ${s.title}</option>`
        ).join("");
        if (currentVal && SLIDES_DATA.some((s) => s.slideId === currentVal)) {
            sel.value = currentVal;
        } else if (SLIDES_DATA[currentIndex]) {
            sel.value = SLIDES_DATA[currentIndex].slideId;
        }
    }

    function resetAssetForm() {
        document.getElementById("editingAssetId").value = "";
        document.getElementById("imgUrlInput").value = "";
        document.getElementById("imgLayoutSelect").value = "side-by-side";
        document.getElementById("imgPositionSelect").value = "right";
        document.getElementById("imgSizeSelect").value = "auto-fit";
        document.getElementById("imgAnnotationBadgeInput").value = "";
        document.getElementById("imgAnnotationPosSelect").value = "top-left";
        document.getElementById("imgCompareSecondUrlInput").value = "";
        document.getElementById("imgCompareLabel1Input").value = "";
        document.getElementById("imgCompareLabel2Input").value = "";
        document.getElementById("imgCaptionInput").value = "";
        document.getElementById("imgAltInput").value = "";
        document.getElementById("imgSourceInput").value = "";
        document.getElementById("imgCreatorInput").value = "";
        document.getElementById("imgLicenseSelect").selectedIndex = 0;
        document.getElementById("imgAttributionInput").value = "";

        const modeLabel = document.getElementById("imgFormModeLabel");
        if (modeLabel) {
            modeLabel.className = "form-mode-pill";
            modeLabel.innerHTML = `<i class="fa-solid fa-plus-circle"></i> เพิ่มภาพประกอบใหม่`;
        }
        const cancelBtn = document.getElementById("btnCancelEditAsset");
        if (cancelBtn) cancelBtn.style.display = "none";
        const saveBtn = document.getElementById("btnSaveAssetToSlide");
        if (saveBtn) {
            saveBtn.disabled = true;
            saveBtn.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> บันทึกและแสดงภาพในสไลด์`;
        }

        const previewImg = document.getElementById("imgPreviewElement");
        const previewFig = document.getElementById("imgPreviewFigure");
        const previewEmpty = document.getElementById("imgPreviewEmptyState");
        if (previewImg) {
            previewImg.style.display = "none";
            previewImg.removeAttribute("src");
        }
        if (previewFig) previewFig.style.display = "none";
        if (previewEmpty) previewEmpty.style.display = "flex";

        const statusBox = document.getElementById("imgUrlStatusBox");
        if (statusBox) {
            statusBox.className = "url-status-box info";
            statusBox.innerHTML = `<i class="fa-solid fa-link"></i> วาง URL รูปภาพแล้วกด <strong>"ตรวจสอบ &amp; โหลดตัวอย่าง"</strong> เพื่อตรวจสอบว่าเบราว์เซอร์โหลดภาพได้จริงก่อนบันทึก`;
        }

        verifiedPreviewState = { verified: false, url: "", width: 0, height: 0, storageType: "external" };
        toggleLayoutExtraFields();
    }

    function loadAssetIntoFormForEditing(assetId) {
        const asset = customAssetsList.find((a) => a.id === assetId);
        if (!asset) return;

        populateTargetSlideSelect();
        document.getElementById("editingAssetId").value = asset.id;
        document.getElementById("imgUrlInput").value = asset.url;
        document.getElementById("imgTargetSlideSelect").value = asset.slideId;
        document.getElementById("imgLayoutSelect").value = asset.layout || "side-by-side";
        document.getElementById("imgPositionSelect").value = asset.position || "right";
        document.getElementById("imgSizeSelect").value = asset.size || "auto-fit";
        document.getElementById("imgAnnotationBadgeInput").value = asset.annotationText || "";
        document.getElementById("imgAnnotationPosSelect").value = asset.annotationPos || "top-left";
        document.getElementById("imgCompareSecondUrlInput").value = asset.secondaryUrl || "";
        document.getElementById("imgCompareLabel1Input").value = asset.compareLabel1 || "";
        document.getElementById("imgCompareLabel2Input").value = asset.compareLabel2 || "";
        document.getElementById("imgCaptionInput").value = asset.caption || "";
        document.getElementById("imgAltInput").value = asset.alt || "";
        document.getElementById("imgSourceInput").value = asset.source || "";
        document.getElementById("imgCreatorInput").value = asset.creator || "";
        document.getElementById("imgLicenseSelect").value = asset.license || "Educational Fair Use (ใช้เพื่อการศึกษาในชั้นเรียน)";
        document.getElementById("imgAttributionInput").value = asset.attribution || "";

        const modeLabel = document.getElementById("imgFormModeLabel");
        if (modeLabel) {
            modeLabel.className = "form-mode-pill editing";
            modeLabel.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> กำลังแก้ไขภาพประกอบ (${asset.slideId})`;
        }
        const cancelBtn = document.getElementById("btnCancelEditAsset");
        if (cancelBtn) cancelBtn.style.display = "inline-flex";
        const saveBtn = document.getElementById("btnSaveAssetToSlide");
        if (saveBtn) {
            saveBtn.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> บันทึกการแก้ไขภาพ`;
        }

        toggleLayoutExtraFields();
        verifyAndPreviewImageUrl(asset.url);
    }

    function toggleLayoutExtraFields() {
        const layout = document.getElementById("imgLayoutSelect").value;
        const annGroup = document.getElementById("annotatedExtraGroup");
        const compGroup = document.getElementById("comparisonExtraGroup");
        if (annGroup) annGroup.style.display = layout === "annotated" ? "block" : "none";
        if (compGroup) compGroup.style.display = layout === "comparison" ? "block" : "none";
        updatePreviewAnnotationOverlay();
    }

    async function saveCurrentFormAsset() {
        const rawUrl = document.getElementById("imgUrlInput").value.trim();
        if (!verifiedPreviewState.verified || verifiedPreviewState.url !== rawUrl.replace(/^\.\//, "")) {
            const checkRes = await verifyAndPreviewImageUrl(rawUrl);
            if (!checkRes.ok) return { ok: false, error: checkRes.message };
        }

        const layout = document.getElementById("imgLayoutSelect").value;
        const secondaryUrl = document.getElementById("imgCompareSecondUrlInput").value.trim();
        if (layout === "comparison" && secondaryUrl) {
            const secCheck = validateAndClassifyImageUrl(secondaryUrl);
            if (!secCheck.validSyntax) {
                const statusBox = document.getElementById("imgUrlStatusBox");
                if (statusBox) {
                    statusBox.className = "url-status-box error";
                    statusBox.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <strong>URL รูปภาพที่ 2 สำหรับเปรียบเทียบไม่ถูกต้อง:</strong> ${secCheck.message}`;
                }
                return { ok: false, error: secCheck.message };
            }
        }

        const editingId = document.getElementById("editingAssetId").value;
        const targetSlideId = document.getElementById("imgTargetSlideSelect").value;
        const position = document.getElementById("imgPositionSelect").value;
        const size = document.getElementById("imgSizeSelect").value;
        const caption = document.getElementById("imgCaptionInput").value.trim();
        const alt = document.getElementById("imgAltInput").value.trim() || caption || "ภาพประกอบบทเรียน";
        const source = document.getElementById("imgSourceInput").value.trim();
        const creator = document.getElementById("imgCreatorInput").value.trim();
        const license = document.getElementById("imgLicenseSelect").value;
        const attribution = document.getElementById("imgAttributionInput").value.trim();
        const annotationText = document.getElementById("imgAnnotationBadgeInput").value.trim();
        const annotationPos = document.getElementById("imgAnnotationPosSelect").value;
        const compareLabel1 = document.getElementById("imgCompareLabel1Input").value.trim();
        const compareLabel2 = document.getElementById("imgCompareLabel2Input").value.trim();

        const assetRecord = {
            id: editingId || `asset-${targetSlideId}-${Date.now()}`,
            slideId: targetSlideId,
            url: verifiedPreviewState.url,
            storageType: verifiedPreviewState.storageType,
            width: verifiedPreviewState.width,
            height: verifiedPreviewState.height,
            layout,
            position,
            size,
            caption,
            alt,
            source,
            creator,
            license,
            attribution,
            annotationText,
            annotationPos,
            secondaryUrl: secondaryUrl ? secondaryUrl.replace(/^\.\//, "") : "",
            compareLabel1,
            compareLabel2,
            updatedAt: new Date().toISOString()
        };

        if (editingId) {
            const idx = customAssetsList.findIndex((a) => a.id === editingId);
            if (idx !== -1) {
                customAssetsList[idx] = assetRecord;
            } else {
                customAssetsList.push(assetRecord);
            }
        } else {
            customAssetsList.push(assetRecord);
        }

        persistCustomAssets(true);
        applyCustomAssetsToAllSlides();
        renderAddedAssetsManagerList();

        // Jump to target slide so the teacher immediately sees the placed image
        const slideIdx = SLIDES_DATA.findIndex((s) => s.slideId === targetSlideId);
        if (slideIdx !== -1 && slideIdx !== currentIndex) {
            goToSlide(slideIdx, true);
        }

        const statusBox = document.getElementById("imgUrlStatusBox");
        if (statusBox) {
            statusBox.className = "url-status-box success";
            statusBox.innerHTML = isPhpBackendAvailable
                ? `<i class="fa-solid fa-circle-check"></i> <strong>บันทึกภาพลงสไลด์ ${targetSlideId} สำเร็จ!</strong> (บันทึกทั้งใน localStorage และอัปเดตไฟล์ <code>custom-assets-data.js</code> ของโปรเจกต์เรียบร้อยแล้ว)`
                : `<i class="fa-solid fa-circle-check"></i> <strong>แสดงภาพในสไลด์ ${targetSlideId} และบันทึกในเบราว์เซอร์ (localStorage) สำเร็จ!</strong> (สำหรับโหมด Static กดปุ่ม <em>Export โค้ดโปรเจกต์</em> ด้านบนหากต้องการอัปเดตไฟล์ Source Code ถาวร)`;
        }

        return { ok: true, asset: assetRecord };
    }

    function renderAddedAssetsManagerList() {
        const listEl = document.getElementById("addedAssetsList");
        const countEl = document.getElementById("addedAssetsCount");
        const filterSel = document.getElementById("assetListFilterSelect");
        if (!listEl) return;

        if (countEl) countEl.textContent = String(customAssetsList.length);

        const filterMode = filterSel ? filterSel.value : "ALL";
        const currentSlideId = SLIDES_DATA[currentIndex] ? SLIDES_DATA[currentIndex].slideId : "";
        const filtered = filterMode === "CURRENT"
            ? customAssetsList.filter((a) => a.slideId === currentSlideId)
            : customAssetsList;

        if (filtered.length === 0) {
            listEl.innerHTML = `
                <div style="text-align:center; padding:24px 12px; color:#64748B; font-size:13px;">
                    ยังไม่มีภาพประกอบที่เพิ่มไว้${filterMode === "CURRENT" ? "ในสไลด์ปัจจุบัน" : ""}
                </div>
            `;
            return;
        }

        listEl.innerHTML = filtered.map((asset) => {
            const slideObj = SLIDES_DATA.find((s) => s.slideId === asset.slideId);
            const sLabel = slideObj ? `สไลด์ที่ ${slideObj.slideNumber}` : asset.slideId;
            const isLocal = asset.storageType === "local" || String(asset.url).startsWith("assets/");
            return `
                <div class="added-asset-item" data-item-id="${escapeHtmlAttr(asset.id)}">
                    <img class="added-asset-thumb" src="${escapeHtmlAttr(asset.url)}" alt="${escapeHtmlAttr(asset.caption || "")}" data-list-action="zoom" data-id="${escapeHtmlAttr(asset.id)}" onerror="this.style.visibility='hidden';">
                    <div class="added-asset-info">
                        <div class="added-asset-title">${escapeHtmlAttr(asset.caption || asset.url)}</div>
                        <div class="added-asset-sub">
                            <strong>${sLabel}</strong>
                            <span>• ${escapeHtmlAttr(asset.layout)} (${escapeHtmlAttr(asset.position)})</span>
                            <span class="asset-badge-tag ${isLocal ? "local" : "external"}">
                                ${isLocal ? "📁 Local Asset" : "🌐 External URL"}
                            </span>
                        </div>
                    </div>
                    <div class="added-asset-actions">
                        <button type="button" class="asset-mini-btn" data-list-action="goto" data-id="${escapeHtmlAttr(asset.id)}" title="เปิดดูสไลด์นี้">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button type="button" class="asset-mini-btn" data-list-action="zoom" data-id="${escapeHtmlAttr(asset.id)}" title="ขยายภาพ (Zoom)">
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                        </button>
                        <button type="button" class="asset-mini-btn" data-list-action="edit" data-id="${escapeHtmlAttr(asset.id)}" title="แก้ไขภาพประกอบ">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button type="button" class="asset-mini-btn danger" data-list-action="delete" data-id="${escapeHtmlAttr(asset.id)}" title="ลบภาพออกจากสไลด์">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join("");

        listEl.querySelectorAll("[data-list-action]").forEach((btn) => {
            btn.addEventListener("click", () => {
                const act = btn.getAttribute("data-list-action");
                const id = btn.getAttribute("data-id");
                const asset = customAssetsList.find((a) => a.id === id);
                if (!asset) return;

                if (act === "goto") {
                    const idx = SLIDES_DATA.findIndex((s) => s.slideId === asset.slideId);
                    if (idx !== -1) goToSlide(idx, true);
                    document.getElementById("imageManagerModal").classList.remove("open");
                } else if (act === "zoom") {
                    openUniversalLightbox({
                        src: asset.url,
                        caption: asset.caption,
                        alt: asset.alt,
                        source: asset.source,
                        creator: asset.creator,
                        license: asset.license,
                        attribution: asset.attribution,
                        storageType: asset.storageType,
                        assetId: asset.id
                    });
                } else if (act === "edit") {
                    loadAssetIntoFormForEditing(asset.id);
                } else if (act === "delete") {
                    deleteCustomAssetById(asset.id);
                }
            });
        });
    }

    function exportCustomAssetsSourceCode() {
        const jsContent = "/**\n"
            + " * custom-assets-data.js\n"
            + " * MASTER PROMPT ADD-ON V11.2 — UNIVERSAL IMAGE URL IMPORT & VISUAL ASSET MANAGEMENT\n"
            + " * นำไฟล์นี้ไปวางทับ custom-assets-data.js ในโฟลเดอร์โปรเจกต์เพื่อบันทึกภาพประกอบลง Source Code ถาวร\n"
            + " */\n"
            + "window.PRELOADED_CUSTOM_ASSETS = " + JSON.stringify(customAssetsList, null, 2) + ";\n";

        const blob = new Blob([jsContent], { type: "application/javascript;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "custom-assets-data.js";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    async function handleLocalFileUpload(file) {
        const statusBox = document.getElementById("imgUrlStatusBox");
        if (!file) return;

        const allowedExts = ["png", "jpg", "jpeg", "webp", "gif", "svg"];
        const ext = (file.name.split(".").pop() || "").toLowerCase();
        if (!allowedExts.includes(ext)) {
            if (statusBox) {
                statusBox.className = "url-status-box error";
                statusBox.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <strong>ประเภทไฟล์ไม่รองรับ:</strong> กรุณาเลือกไฟล์ PNG, JPG, JPEG, WebP, GIF หรือ SVG ที่ปลอดภัย`;
            }
            return;
        }

        // Security check for SVG files
        if (ext === "svg") {
            const svgText = await file.text();
            if (!isSafeSvgString(svgText)) {
                if (statusBox) {
                    statusBox.className = "url-status-box error";
                    statusBox.innerHTML = `<i class="fa-solid fa-shield-halved"></i> <strong>ปฏิเสธไฟล์ SVG:</strong> ตรวจพบ Script หรือโค้ดที่อาจไม่ปลอดภัยภายในไฟล์ SVG`;
                }
                return;
            }
        }

        const targetSlideId = document.getElementById("imgTargetSlideSelect").value || "u1w2-s01";

        // Case 1: XAMPP PHP Backend Available -> Write directly to assets/images/
        if (isPhpBackendAvailable) {
            if (statusBox) {
                statusBox.className = "url-status-box info";
                statusBox.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> กำลังอัปโหลดไฟล์ไปยังโฟลเดอร์ <code>assets/images/</code> ของโปรเจกต์...`;
            }
            try {
                const formData = new FormData();
                formData.append("action", "upload_local_file");
                formData.append("slideId", targetSlideId);
                formData.append("imageFile", file);

                const resp = await fetch("asset-manager.php", { method: "POST", body: formData });
                const data = await resp.json();
                if (data && data.ok && data.relativePath) {
                    document.getElementById("imgUrlInput").value = data.relativePath;
                    await verifyAndPreviewImageUrl(data.relativePath);
                    return;
                } else {
                    if (statusBox) {
                        statusBox.className = "url-status-box error";
                        statusBox.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <strong>อัปโหลดไม่สำเร็จ:</strong> ${(data && data.error) || "เกิดข้อผิดพลาด"}`;
                    }
                    return;
                }
            } catch (err) {}
        }

        // Case 2: Static Mode (No PHP Backend) -> Honest Local Relative Path + Preview
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
        const relativePath = `assets/images/${safeName}`;
        document.getElementById("imgUrlInput").value = relativePath;

        // First test if the file already exists inside assets/images/
        const existsRes = await verifyAndPreviewImageUrl(relativePath);
        if (!existsRes.ok) {
            // Preview using local Object URL while clearly instructing the user to copy the file into assets/images/
            const tempBlobUrl = URL.createObjectURL(file);
            const probe = new Image();
            probe.onload = () => {
                verifiedPreviewState = {
                    verified: true,
                    url: relativePath,
                    width: probe.naturalWidth || 800,
                    height: probe.naturalHeight || 450,
                    storageType: "local"
                };
                const previewEmpty = document.getElementById("imgPreviewEmptyState");
                const previewFig = document.getElementById("imgPreviewFigure");
                const previewImg = document.getElementById("imgPreviewElement");
                const btnSave = document.getElementById("btnSaveAssetToSlide");
                const btnZoom = document.getElementById("btnTestPreviewZoom");
                if (previewEmpty) previewEmpty.style.display = "none";
                if (previewFig) previewFig.style.display = "flex";
                if (previewImg) {
                    previewImg.src = tempBlobUrl;
                    previewImg.style.display = "block";
                }
                if (btnSave) btnSave.disabled = false;
                if (btnZoom) btnZoom.disabled = false;
                if (statusBox) {
                    statusBox.className = "url-status-box warning";
                    statusBox.innerHTML = `<i class="fa-solid fa-folder-open"></i> <strong>โหมด Static Browser (ไม่มี Backend เขียนไฟล์อัตโนมัติ):</strong> แสดงตัวอย่างไฟล์สำเร็จ! กรุณานำไฟล์ <code>${escapeHtmlAttr(safeName)}</code> ไปวางในโฟลเดอร์ <code>assets/images/</code> ของโปรเจกต์เพื่อให้พาธ <code>${escapeHtmlAttr(relativePath)}</code> แสดงผลถาวร`;
                }
            };
            probe.src = tempBlobUrl;
        }
    }

    async function importExternalUrlToLocalFolder() {
        const rawUrl = document.getElementById("imgUrlInput").value.trim();
        const statusBox = document.getElementById("imgUrlStatusBox");
        const check = validateAndClassifyImageUrl(rawUrl);

        if (!check.validSyntax) {
            if (statusBox) {
                statusBox.className = "url-status-box error";
                statusBox.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${check.message}`;
            }
            return;
        }

        if (check.storageType === "local") {
            if (statusBox) {
                statusBox.className = "url-status-box success";
                statusBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> ภาพนี้อยู่ในโฟลเดอร์ <code>assets/</code> ของโปรเจกต์อยู่แล้ว (${escapeHtmlAttr(check.normalizedUrl)})`;
            }
            return;
        }

        if (!isPhpBackendAvailable) {
            if (statusBox) {
                statusBox.className = "url-status-box warning";
                statusBox.innerHTML = `<i class="fa-solid fa-circle-info"></i> <strong>แจ้งเตือนโหมด Static:</strong> ขณะนี้เปิดสไลด์โดยไม่มีเซิร์ฟเวอร์ Backend จึงไม่สามารถสั่งดาวน์โหลดไฟล์ลงโฟลเดอร์ <code>assets/images/</code> อัตโนมัติได้ • <strong>วิธีทำ:</strong> คลิกขวาบันทึกภาพจากเว็บไซต์ต้นทาง (เฉพาะภาพที่มีสิทธิ์ใช้งาน) ลงในโฟลเดอร์ <code>assets/images/</code> แล้วกดปุ่ม <em>"เลือกไฟล์ภาพจากเครื่อง"</em>`;
            }
            return;
        }

        if (statusBox) {
            statusBox.className = "url-status-box info";
            statusBox.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> กำลังดึงภาพจาก URL มาจัดเก็บในโฟลเดอร์ <code>assets/images/</code> (พร้อมตรวจสอบความปลอดภัย SSRF และ MIME Type)...`;
        }

        try {
            const targetSlideId = document.getElementById("imgTargetSlideSelect").value || "u1w2-s01";
            const resp = await fetch("asset-manager.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "import_url_to_local",
                    url: check.normalizedUrl,
                    slideId: targetSlideId
                })
            });
            const data = await resp.json();
            if (data && data.ok && data.relativePath) {
                document.getElementById("imgUrlInput").value = data.relativePath;
                await verifyAndPreviewImageUrl(data.relativePath);
            } else {
                if (statusBox) {
                    statusBox.className = "url-status-box warning";
                    statusBox.innerHTML = `<i class="fa-solid fa-shield-halved"></i> <strong>ไม่สามารถดึงไฟล์อัตโนมัติได้:</strong> ${(data && data.error) || "เว็บไซต์ต้นทางอาจป้องกัน Hotlink"}`;
                }
            }
        } catch (err) {
            if (statusBox) {
                statusBox.className = "url-status-box error";
                statusBox.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> เกิดข้อผิดพลาดในการเชื่อมต่อ asset-manager.php`;
            }
        }
    }

    function initImageUrlImportSystem() {
        reloadCustomAssetsFromStorage();
        applyCustomAssetsToAllSlides();

        // Check if XAMPP PHP Backend is reachable
        const modeBadge = document.getElementById("assetStorageModeBadge");
        if (window.location.protocol.startsWith("http")) {
            fetch("asset-manager.php?ping=1")
                .then((r) => r.json())
                .then((d) => {
                    if (d && d.ok && d.backendAvailable) {
                        isPhpBackendAvailable = true;
                        if (modeBadge) {
                            modeBadge.className = "storage-mode-badge backend-ready";
                            modeBadge.innerHTML = `<i class="fa-solid fa-server"></i> โหมด Local Server: เขียนไฟล์ลง assets/images/ ได้จริง`;
                        }
                    }
                })
                .catch(() => {
                    isPhpBackendAvailable = false;
                    if (modeBadge) {
                        modeBadge.className = "storage-mode-badge static-only";
                        modeBadge.innerHTML = `<i class="fa-solid fa-laptop-code"></i> โหมด Static: บันทึกในเบราว์เซอร์ + Export โค้ด`;
                    }
                });
        } else if (modeBadge) {
            modeBadge.className = "storage-mode-badge static-only";
            modeBadge.innerHTML = `<i class="fa-solid fa-laptop-code"></i> โหมด Static (file://): บันทึกในเบราว์เซอร์ + Export โค้ด`;
        }

        const btnImgMgr = document.getElementById("btnImageManager");
        const closeImgMgr = document.getElementById("closeImageManager");
        const imgModal = document.getElementById("imageManagerModal");

        if (btnImgMgr) btnImgMgr.addEventListener("click", () => openImageManagerModal());
        if (closeImgMgr && imgModal) closeImgMgr.addEventListener("click", () => imgModal.classList.remove("open"));

        const btnVerify = document.getElementById("btnVerifyImgUrl");
        const urlInput = document.getElementById("imgUrlInput");
        if (btnVerify && urlInput) {
            btnVerify.addEventListener("click", () => verifyAndPreviewImageUrl(urlInput.value));
            urlInput.addEventListener("paste", () => {
                setTimeout(() => verifyAndPreviewImageUrl(urlInput.value), 60);
            });
            urlInput.addEventListener("input", () => {
                // Invalidate save button if URL changed after verification
                if (urlInput.value.trim().replace(/^\.\//, "") !== verifiedPreviewState.url) {
                    const saveBtn = document.getElementById("btnSaveAssetToSlide");
                    if (saveBtn) saveBtn.disabled = true;
                }
            });
        }

        const layoutSelect = document.getElementById("imgLayoutSelect");
        if (layoutSelect) layoutSelect.addEventListener("change", toggleLayoutExtraFields);

        const annInput = document.getElementById("imgAnnotationBadgeInput");
        if (annInput) annInput.addEventListener("input", updatePreviewAnnotationOverlay);

        const capInput = document.getElementById("imgCaptionInput");
        if (capInput) {
            capInput.addEventListener("input", () => {
                const previewCap = document.getElementById("imgPreviewCaptionBar");
                if (previewCap && verifiedPreviewState.verified) {
                    previewCap.textContent = capInput.value.trim() || `ตัวอย่างภาพประกอบ (${verifiedPreviewState.width} × ${verifiedPreviewState.height} px)`;
                }
            });
        }

        const btnSave = document.getElementById("btnSaveAssetToSlide");
        if (btnSave) btnSave.addEventListener("click", () => saveCurrentFormAsset());

        const btnResetForm = document.getElementById("btnResetAssetForm");
        const btnCancelEdit = document.getElementById("btnCancelEditAsset");
        if (btnResetForm) btnResetForm.addEventListener("click", resetAssetForm);
        if (btnCancelEdit) btnCancelEdit.addEventListener("click", resetAssetForm);

        const btnTestPreviewZoom = document.getElementById("btnTestPreviewZoom");
        const previewImgEl = document.getElementById("imgPreviewElement");
        const openPreviewZoom = () => {
            if (!verifiedPreviewState.verified) return;
            openUniversalLightbox({
                src: previewImgEl ? previewImgEl.src : verifiedPreviewState.url,
                caption: document.getElementById("imgCaptionInput").value.trim() || "ตัวอย่างภาพก่อนบันทึก",
                alt: document.getElementById("imgAltInput").value.trim(),
                source: document.getElementById("imgSourceInput").value.trim(),
                creator: document.getElementById("imgCreatorInput").value.trim(),
                license: document.getElementById("imgLicenseSelect").value,
                attribution: document.getElementById("imgAttributionInput").value.trim(),
                storageType: verifiedPreviewState.storageType
            });
        };
        if (btnTestPreviewZoom) btnTestPreviewZoom.addEventListener("click", openPreviewZoom);
        if (previewImgEl) previewImgEl.addEventListener("click", openPreviewZoom);

        const fileInput = document.getElementById("localAssetFileInput");
        if (fileInput) {
            fileInput.addEventListener("change", (e) => {
                if (e.target.files && e.target.files[0]) {
                    handleLocalFileUpload(e.target.files[0]);
                }
            });
        }

        const btnImportLocal = document.getElementById("btnImportUrlToLocalFolder");
        if (btnImportLocal) btnImportLocal.addEventListener("click", importExternalUrlToLocalFolder);

        const btnExportCode = document.getElementById("btnExportCustomAssetsCode");
        if (btnExportCode) btnExportCode.addEventListener("click", exportCustomAssetsSourceCode);

        const filterSelect = document.getElementById("assetListFilterSelect");
        if (filterSelect) filterSelect.addEventListener("change", renderAddedAssetsManagerList);

        // Expose programmatic API for QA Testing
        window.VisualAssetManager = {
            validateAndClassifyImageUrl,
            verifyAndPreviewImageUrl,
            saveCurrentFormAsset,
            deleteCustomAssetById,
            openUniversalLightbox,
            closeUniversalLightbox,
            setLightboxZoom,
            getCustomAssets: () => [...customAssetsList],
            resetAssetForm
        };
    }

    // =========================================================================
    // 12. AUTOMATED QA TEST SUITE FOR V11.2 IMAGE URL IMPORT (?qa_assets=1)
    // =========================================================================
    async function runImageImportQASuite() {
        const results = {};

        // Test 1: Valid Image URL loads and previews cleanly
        openImageManagerModal();
        resetAssetForm();
        document.getElementById("imgUrlInput").value = "assets/images/ref-informational-site.png";
        const t1 = await verifyAndPreviewImageUrl("assets/images/ref-informational-site.png");
        results.test1_validImageUrl = {
            passed: t1.ok === true && t1.width > 0 && !document.getElementById("btnSaveAssetToSlide").disabled,
            details: t1
        };

        // Test 2: Broken Image URL is rejected, no broken image icon shown, Save button disabled
        resetAssetForm();
        const brokenUrl = "assets/images/non-existent-broken-image-404.png";
        document.getElementById("imgUrlInput").value = brokenUrl;
        const t2 = await verifyAndPreviewImageUrl(brokenUrl);
        const previewImgHiddenOnBroken = document.getElementById("imgPreviewElement").style.display === "none";
        const saveDisabledOnBroken = document.getElementById("btnSaveAssetToSlide").disabled === true;
        results.test2_brokenImageUrl = {
            passed: t2.ok === false && previewImgHiddenOnBroken && saveDisabledOnBroken,
            previewImgHiddenOnBroken,
            saveDisabledOnBroken,
            reason: t2.reason
        };

        // Test 3: Webpage URL (not direct image) is detected and shows clear guidance
        resetAssetForm();
        const webpageUrl = "https://www.google.com/search?q=coffee+shop+website&tbm=isch";
        document.getElementById("imgUrlInput").value = webpageUrl;
        const t3 = await verifyAndPreviewImageUrl(webpageUrl);
        const unsplashPageCheck = validateAndClassifyImageUrl("https://unsplash.com/photos/abc123xyz");
        results.test3_webpageUrlDetection = {
            passed: t3.ok === false && t3.reason === "WEBPAGE_NOT_IMAGE" && unsplashPageCheck.code === "WEBPAGE_NOT_IMAGE",
            googleSearchResult: t3.reason,
            unsplashPageResult: unsplashPageCheck.code
        };

        // Test 4: Hotlink-blocked / Unsafe scheme handling (javascript:, file:, & unreachable external image)
        const unsafeCheck = validateAndClassifyImageUrl("javascript:alert(1)");
        const fileSchemeCheck = validateAndClassifyImageUrl("file:///C:/Windows/System32/cmd.exe");
        results.test4_securityAndHotlinkHandling = {
            passed: unsafeCheck.code === "UNSAFE_SCHEME" && fileSchemeCheck.code === "UNSAFE_SCHEME",
            unsafeSchemeBlocked: unsafeCheck.code,
            fileSchemeBlocked: fileSchemeCheck.code
        };

        // Test 5: Adding & displaying image in target slide + 1600x900 overflow check
        resetAssetForm();
        document.getElementById("imgUrlInput").value = "assets/images/ref-web-application.png";
        await verifyAndPreviewImageUrl("assets/images/ref-web-application.png");
        document.getElementById("imgTargetSlideSelect").value = "u1w2-s04";
        document.getElementById("imgLayoutSelect").value = "side-by-side";
        document.getElementById("imgPositionSelect").value = "right";
        document.getElementById("imgSizeSelect").value = "auto-fit";
        document.getElementById("imgCaptionInput").value = "ภาพตัวอย่างระบบสั่งซื้อออนไลน์ (ทดสอบเพิ่มภาพ V11.2)";
        document.getElementById("imgSourceInput").value = "เอกสารประกอบการเรียน 21910-2016";
        const saveRes = await saveCurrentFormAsset();
        const slide4El = document.querySelector('.slide[data-slide-id="u1w2-s04"]');
        const renderedCard = slide4El ? slide4El.querySelector(".custom-visual-card") : null;
        results.test5_displayInSlide = {
            passed: saveRes.ok === true && renderedCard !== null,
            assetId: saveRes.asset ? saveRes.asset.id : null
        };

        // Test 6: Editing image size, position, layout & caption without damaging original slide content
        const createdId = saveRes.asset.id;
        loadAssetIntoFormForEditing(createdId);
        document.getElementById("imgLayoutSelect").value = "annotated";
        document.getElementById("imgPositionSelect").value = "left";
        document.getElementById("imgSizeSelect").value = "medium";
        document.getElementById("imgAnnotationBadgeInput").value = "จุดสังเกต: ตะกร้าสินค้า";
        document.getElementById("imgCaptionInput").value = "ภาพที่แก้ไขตำแหน่งและเพิ่มป้ายชี้จุดแล้ว";
        const editRes = await saveCurrentFormAsset();
        const updatedBody = slide4El.querySelector(".slide-body");
        const calloutEl = slide4El.querySelector(".custom-annotation-callout");
        const origCardsCount = slide4El.querySelectorAll(".slide-original-content-wrap .card").length;
        results.test6_editSizePositionLayout = {
            passed: editRes.ok === true && updatedBody.classList.contains("pos-left") && calloutEl !== null && origCardsCount > 0,
            posClassApplied: updatedBody.classList.contains("pos-left"),
            annotationRendered: calloutEl !== null,
            originalSlideCardsIntact: origCardsCount
        };

        // Test 7: Universal Visual Zoom & Lightbox (Open, Zoom In, Zoom Out, Fit, Reset, Close)
        openUniversalLightbox({
            src: "assets/images/ref-web-application.png",
            caption: "ทดสอบขยายภาพด้วย Universal Visual Zoom",
            storageType: "local",
            assetId: createdId
        });
        const lbOpen = universalLightbox.classList.contains("open");
        setLightboxZoom(1.5);
        const zoomedInScale = lbScale;
        setLightboxZoom(1.0, true);
        const resetScale = lbScale;
        closeUniversalLightbox();
        const lbClosed = !universalLightbox.classList.contains("open");
        results.test7_universalVisualZoom = {
            passed: lbOpen && zoomedInScale === 1.5 && resetScale === 1.0 && lbClosed,
            lbOpen,
            zoomedInScale,
            resetScale,
            lbClosed
        };

        // Test 8: Persistence in storage & reload verification + Clean deletion
        reloadCustomAssetsFromStorage();
        const persistedFound = customAssetsList.some((a) => a.id === createdId && a.caption === "ภาพที่แก้ไขตำแหน่งและเพิ่มป้ายชี้จุดแล้ว");
        // Verify slide quality audit while custom asset is active on Slide 4
        const auditWithCustomAsset = runSlideQualityAudit();
        const slide4Audit = auditWithCustomAsset.slides.find((s) => s.slideId === "u1w2-s04");

        // Now test clean deletion so default state remains clean unless user saves
        deleteCustomAssetById(createdId);
        const deletedCleanly = !customAssetsList.some((a) => a.id === createdId) && !slide4El.querySelector(".custom-visual-card");
        const closeImgModal = document.getElementById("imageManagerModal");
        if (closeImgModal) closeImgModal.classList.remove("open");

        results.test8_persistenceAndCleanDelete = {
            passed: persistedFound && slide4Audit.pass === true && deletedCleanly,
            persistedFound,
            slide4OverflowCheckWithCustomImage: slide4Audit,
            deletedCleanly
        };

        const allTestsPassed = Object.values(results).every((r) => r.passed === true);
        const finalReport = {
            suite: "MASTER_PROMPT_ADDON_V11_2_QA",
            allTestsPassed,
            results
        };

        let qaPre = document.getElementById("qaAssetsReportOutput");
        if (!qaPre) {
            qaPre = document.createElement("pre");
            qaPre.id = "qaAssetsReportOutput";
            qaPre.style.display = "none";
            document.body.appendChild(qaPre);
        }
        qaPre.textContent = JSON.stringify(finalReport, null, 2);
        return finalReport;
    }

    // =========================================================================
    // 13. AUTOMATED BROWSER QUALITY ASSURANCE AUDIT (?audit=1 — PART 18)
    // =========================================================================
    function runSlideQualityAudit() {
        slideViewport.style.transform = "none";
        const allSlides = Array.from(slideViewport.querySelectorAll(".slide"));
        const results = [];

        allSlides.forEach((slideEl, idx) => {
            allSlides.forEach((s) => s.classList.remove("active"));
            slideEl.classList.add("active");

            const bodyEl = slideEl.querySelector(".slide-body");
            const headerEl = slideEl.querySelector(".slide-header");
            const footerEl = slideEl.querySelector(".slide-footer");

            const bodyClientH = bodyEl ? bodyEl.clientHeight : 0;
            const bodyScrollH = bodyEl ? bodyEl.scrollHeight : 0;
            const bodyClientW = bodyEl ? bodyEl.clientWidth : 0;
            const bodyScrollW = bodyEl ? bodyEl.scrollWidth : 0;

            const bodyOverflowY = Math.max(0, bodyScrollH - bodyClientH - 2);
            const bodyOverflowX = Math.max(0, bodyScrollW - bodyClientW - 2);

            let cardOverflowCount = 0;
            slideEl.querySelectorAll(".card").forEach((c) => {
                if (c.scrollHeight > c.clientHeight + 4 || c.scrollWidth > c.clientWidth + 4) {
                    cardOverflowCount++;
                }
            });

            let brokenImages = 0;
            slideEl.querySelectorAll("img").forEach((img) => {
                if (!img.complete || img.naturalWidth === 0) brokenImages++;
            });

            const pass = bodyOverflowY === 0 && bodyOverflowX === 0 && cardOverflowCount === 0 && brokenImages === 0;
            results.push({
                slideNumber: idx + 1,
                slideId: SLIDES_DATA[idx].slideId,
                layoutType: SLIDES_DATA[idx].layoutType,
                headerH: headerEl ? headerEl.offsetHeight : 0,
                footerH: footerEl ? footerEl.offsetHeight : 0,
                bodyClientH,
                bodyScrollH,
                bodyOverflowY,
                bodyOverflowX,
                cardOverflowCount,
                brokenImages,
                pass
            });
        });

        goToSlide(0, false);
        updateViewportScale();

        const failedSlides = results.filter((r) => !r.pass);
        const report = {
            courseId: COURSE_METADATA.courseId,
            unitId: COURSE_METADATA.unitId,
            totalSlides: results.length,
            allPassed: failedSlides.length === 0,
            failedSlides,
            slides: results
        };

        let pre = document.getElementById("auditReportOutput");
        if (!pre) {
            pre = document.createElement("pre");
            pre.id = "auditReportOutput";
            pre.style.display = "none";
            document.body.appendChild(pre);
        }
        pre.textContent = JSON.stringify(report, null, 2);
        return report;
    }

    // =========================================================================
    // INITIALIZE APPLICATION
    // =========================================================================
    function init() {
        renderAllSlides();
        updateViewportScale();
        initSlideOrganizer();
        renderGlossaryModal();
        initInteractiveComponents();
        initQuiz();
        bindGlobalControls();
        initUniversalVisualZoom();
        initImageUrlImportSystem();

        // Check initial hash
        const hashMatch = window.location.hash.match(/#slide-(\d+)/);
        const startIdx = hashMatch ? Math.max(0, Math.min(totalSlides - 1, parseInt(hashMatch[1], 10) - 1)) : 0;
        goToSlide(startIdx, false);

        if (urlParams.get("audit") === "1") {
            runSlideQualityAudit();
            window.addEventListener("load", () => {
                runSlideQualityAudit();
            });
        }
        if (urlParams.get("qa_assets") === "1") {
            runImageImportQASuite();
        }
    }

    window.runSlideQualityAudit = runSlideQualityAudit;
    window.runImageImportQASuite = runImageImportQASuite;
    init();
})();
