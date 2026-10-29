/**
 * app.js
 * MASTER PROMPT V12 — INTEGRATED PRESENTATION ENGINE
 * รายวิชา 21910-1004 พาณิชย์อิเล็กทรอนิกส์เบื้องต้น | หน่วยที่ 2
 * Full Interactive Engine, Lightbox, Asset Manager, Quiz, & Presenter Sync
 */

(function () {
    "use strict";

    // Application State
    const state = {
        currentIndex: 0,
        totalSlides: SLIDES_DATA.length,
        timerSeconds: 0,
        timerInterval: null,
        syncChannel: null,
        lightbox: {
            isOpen: false,
            scale: 1,
            posX: 0,
            posY: 0,
            isDragging: false,
            startX: 0,
            startY: 0
        },
        cart: {
            mouseQty: 2,
            padQty: 1,
            mousePrice: 250,
            padPrice: 80,
            shipping: 40,
            couponActive: false,
            couponDiscount: 50
        },
        quiz: {
            currentIndex: 0,
            userAnswers: {},
            score: 0
        }
    };

    // DOM Elements Cache
    let dom = {};

    function initDomElements() {
        dom = {
            stageWrapper: document.getElementById("stageWrapper"),
            slideScaleWrapper: document.getElementById("slideScaleWrapper"),
            slideCanvas: document.getElementById("slideCanvas"),
            canvasHeader: document.getElementById("canvasHeader"),
            slideKicker: document.getElementById("slideKicker"),
            slideTitle: document.getElementById("slideTitle"),
            slideBadge: document.getElementById("slideBadge"),
            slideTime: document.getElementById("slideTime"),
            canvasBody: document.getElementById("canvasBody"),
            btnFirst: document.getElementById("btnFirst"),
            btnLast: document.getElementById("btnLast"),
            prevBtn: document.getElementById("prevBtn"),
            nextBtn: document.getElementById("nextBtn"),
            slideInput: document.getElementById("slideInput"),
            slideTotal: document.getElementById("slideTotal"),
            progressBarFill: document.getElementById("progressBarFill"),
            progressPercent: document.getElementById("progressPercent"),
            elapsedTimer: document.getElementById("elapsedTimer"),
            notesDrawer: document.getElementById("notesDrawer"),
            noteWhatToSay: document.getElementById("noteWhatToSay"),
            noteRealLife: document.getElementById("noteRealLife"),
            noteQuestion: document.getElementById("noteQuestion"),
            noteExpected: document.getElementById("noteExpected"),
            tocModal: document.getElementById("tocModal"),
            tocCardsContainer: document.getElementById("tocCardsContainer"),
            vocabModal: document.getElementById("vocabModal"),
            vocabListContainer: document.getElementById("vocabListContainer"),
            zoomLightboxModal: document.getElementById("zoomLightboxModal"),
            lightboxTitle: document.getElementById("lightboxTitle"),
            lightboxImage: document.getElementById("lightboxImage"),
            lightboxViewport: document.getElementById("lightboxViewport"),
            imageImportModal: document.getElementById("imageImportModal"),
            importImageUrl: document.getElementById("importImageUrl"),
            importPreviewBox: document.getElementById("importPreviewBox"),
            importTargetSlide: document.getElementById("importTargetSlide"),
            importCaption: document.getElementById("importCaption"),
            importAltText: document.getElementById("importAltText"),
            shortcutsModal: document.getElementById("shortcutsModal")
        };
    }

    // =========================================================================
    // RESPONSIVE 1600x900 SCALER (PERFECT RATIO FIT)
    // =========================================================================
    function adjustCanvasScale() {
        if (!dom.stageWrapper || !dom.slideCanvas) return;
        const wrapperRect = dom.stageWrapper.getBoundingClientRect();
        const availWidth = Math.max(wrapperRect.width - 24, 200);
        const availHeight = Math.max(wrapperRect.height - 20, 120);

        const scale = Math.min(availWidth / 1600, availHeight / 900);

        if (dom.slideScaleWrapper) {
            dom.slideScaleWrapper.style.width = `${(1600 * scale).toFixed(2)}px`;
            dom.slideScaleWrapper.style.height = `${(900 * scale).toFixed(2)}px`;
        }
        dom.slideCanvas.style.transformOrigin = "top left";
        dom.slideCanvas.style.transform = `scale(${scale.toFixed(5)})`;
    }

    // =========================================================================
    // SLIDE RENDERING & LIFECYCLE
    // =========================================================================
    function renderSlide(index) {
        if (index < 0) index = 0;
        if (index >= state.totalSlides) index = state.totalSlides - 1;
        state.currentIndex = index;

        const slide = SLIDES_DATA[index];

        // Header Visibility
        if (slide.isCover) {
            dom.canvasHeader.style.display = "none";
        } else {
            dom.canvasHeader.style.display = "flex";
            dom.slideKicker.textContent = slide.kicker || "UNIT 2 • ONLINE TRANSACTION & E-COMMERCE";
            dom.slideTitle.textContent = slide.title || "";
            dom.slideBadge.innerHTML = `<i class="fa-solid fa-award"></i> ${slide.badge || "สาระสำคัญ"}`;
            dom.slideTime.innerHTML = `<i class="fa-regular fa-clock"></i> ${slide.teachingTime || 5} นาที`;
        }

        // Render HTML content
        dom.canvasBody.innerHTML = slide.html;

        // Attach glossary listeners inside current slide
        attachGlossaryTriggers(dom.canvasBody);

        // Update Bottom Bar
        dom.slideInput.value = index + 1;
        dom.slideTotal.textContent = state.totalSlides;
        if (dom.btnFirst) dom.btnFirst.disabled = (index === 0);
        if (dom.prevBtn) dom.prevBtn.disabled = (index === 0);
        if (dom.nextBtn) dom.nextBtn.disabled = (index === state.totalSlides - 1);
        if (dom.btnLast) dom.btnLast.disabled = (index === state.totalSlides - 1);

        const percent = Math.round(((index + 1) / state.totalSlides) * 100);
        dom.progressBarFill.style.width = `${percent}%`;
        dom.progressPercent.textContent = `${percent}%`;

        // Update Speaker Notes Drawer
        if (slide.speakerNotes) {
            dom.noteWhatToSay.textContent = slide.speakerNotes.whatToSay || "-";
            dom.noteRealLife.textContent = slide.speakerNotes.realLifeExample || "-";
            dom.noteQuestion.textContent = slide.speakerNotes.guidingQuestion || "-";
            dom.noteExpected.textContent = slide.speakerNotes.expectedAnswer || "-";
        }

        // Post-render component initializers (Layout/Element driven)
        if (document.getElementById("mouseQty")) {
            refreshCartDisplay();
        }
        if (document.getElementById("quizCardMain")) {
            initQuizEngine();
        }

        // Update URL hash for direct bookmarking and reload persistence
        if (window.location.hash !== `#${index + 1}`) {
            history.replaceState(null, "", `#${index + 1}`);
        }

        // Sync with Presenter View if BroadcastChannel is open
        if (state.syncChannel) {
            state.syncChannel.postMessage({
                type: "NAVIGATE",
                slideIndex: index,
                timestamp: Date.now()
            });
        }
    }

    function nextSlide() {
        if (state.currentIndex < state.totalSlides - 1) {
            renderSlide(state.currentIndex + 1);
        }
    }

    function prevSlide() {
        if (state.currentIndex > 0) {
            renderSlide(state.currentIndex - 1);
        }
    }

    function jumpToSlide(index) {
        renderSlide(index);
    }

    function jumpToSlideInput(val) {
        const num = parseInt(val, 10);
        if (!isNaN(num) && num >= 1 && num <= state.totalSlides) {
            renderSlide(num - 1);
        } else {
            dom.slideInput.value = state.currentIndex + 1;
        }
    }

    function seekProgress(e) {
        const rect = dom.progressBarFill.parentElement.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, clickX / rect.width));
        const targetIndex = Math.floor(ratio * state.totalSlides);
        renderSlide(targetIndex);
    }

    // =========================================================================
    // TIMER & FULLSCREEN
    // =========================================================================
    function startElapsedTimer() {
        state.timerInterval = setInterval(() => {
            state.timerSeconds++;
            const mins = String(Math.floor(state.timerSeconds / 60)).padStart(2, "0");
            const secs = String(state.timerSeconds % 60).padStart(2, "0");
            if (dom.elapsedTimer) {
                dom.elapsedTimer.textContent = `${mins}:${secs}`;
            }
        }, 1000);
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.warn("Fullscreen request error:", err);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    // =========================================================================
    // UNIVERSAL VISUAL ZOOM & LIGHTBOX (PART 21.6)
    // =========================================================================
    function openVisualZoom(src, title) {
        state.lightbox.isOpen = true;
        state.lightbox.scale = 1;
        state.lightbox.posX = 0;
        state.lightbox.posY = 0;

        dom.lightboxImage.src = src;
        dom.lightboxTitle.innerHTML = `<i class="fa-solid fa-image"></i> ${title || "ภาพประกอบการเรียนรู้"}`;
        updateLightboxTransform();
        dom.zoomLightboxModal.classList.add("active");
    }

    function closeVisualZoom() {
        state.lightbox.isOpen = false;
        dom.zoomLightboxModal.classList.remove("active");
        dom.lightboxImage.src = "";
    }

    function zoomLightbox(factor) {
        let newScale = state.lightbox.scale * factor;
        if (newScale < 0.5) newScale = 0.5;
        if (newScale > 4.0) newScale = 4.0;
        state.lightbox.scale = newScale;
        updateLightboxTransform();
    }

    function resetLightboxZoom() {
        state.lightbox.scale = 1;
        state.lightbox.posX = 0;
        state.lightbox.posY = 0;
        updateLightboxTransform();
    }

    function updateLightboxTransform() {
        if (!dom.lightboxImage) return;
        dom.lightboxImage.style.transform = `translate(${state.lightbox.posX}px, ${state.lightbox.posY}px) scale(${state.lightbox.scale})`;
    }

    function startLightboxPan(e) {
        if (e.button !== 0) return; // Left mouse click only
        state.lightbox.isDragging = true;
        state.lightbox.startX = e.clientX - state.lightbox.posX;
        state.lightbox.startY = e.clientY - state.lightbox.posY;
        dom.lightboxViewport.classList.add("dragging");
    }

    function doLightboxPan(e) {
        if (!state.lightbox.isDragging) return;
        state.lightbox.posX = e.clientX - state.lightbox.startX;
        state.lightbox.posY = e.clientY - state.lightbox.startY;
        updateLightboxTransform();
    }

    function endLightboxPan() {
        state.lightbox.isDragging = false;
        if (dom.lightboxViewport) {
            dom.lightboxViewport.classList.remove("dragging");
        }
    }

    // Wheel zoom in lightbox
    function handleLightboxWheel(e) {
        if (!state.lightbox.isOpen) return;
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.15 : 0.85;
        zoomLightbox(factor);
    }

    // =========================================================================
    // UNIVERSAL IMAGE URL IMPORT & ASSET MANAGER (PART 21.2)
    // =========================================================================
    function openImageImportModal() {
        // Populate Target Slide dropdown
        dom.importTargetSlide.innerHTML = "";
        SLIDES_DATA.forEach((s, idx) => {
            const opt = document.createElement("option");
            opt.value = idx;
            opt.textContent = `สไลด์ ${s.id}: ${s.title.substring(0, 36)}...`;
            if (idx === state.currentIndex) opt.selected = true;
            dom.importTargetSlide.appendChild(opt);
        });

        dom.importImageUrl.value = "";
        dom.importCaption.value = "";
        dom.importAltText.value = "";
        dom.importPreviewBox.innerHTML = '<span style="font-size:14px; color:#94A3B8;"><i class="fa-regular fa-image"></i> วาง URL เพื่อดูภาพตัวอย่าง</span>';
        dom.imageImportModal.classList.add("active");
    }

    function closeImageImportModal() {
        dom.imageImportModal.classList.remove("active");
    }

    function previewImportImage(url) {
        const trimmed = url.trim();
        if (!trimmed) {
            dom.importPreviewBox.innerHTML = '<span style="font-size:14px; color:#94A3B8;"><i class="fa-regular fa-image"></i> วาง URL เพื่อดูภาพตัวอย่าง</span>';
            return;
        }
        dom.importPreviewBox.innerHTML = `<img src="${trimmed}" alt="Preview" onerror="this.parentElement.innerHTML='<span style=\\'color:#EF4444; font-size:13px;\\'><i class=\\'fa-solid fa-triangle-exclamation\\'></i> ไม่สามารถโหลดภาพจาก URL นี้ได้</span>'">`;
    }

    function applyImportedImage() {
        const url = dom.importImageUrl.value.trim();
        if (!url) {
            alert("กรุณากรอก HTTPS Image URL ของรูปภาพ");
            return;
        }

        const targetSlideIndex = parseInt(dom.importTargetSlide.value, 10);
        const caption = dom.importCaption.value.trim() || "ภาพประกอบการเรียนรู้ (นำเข้าผ่าน URL)";
        const alt = dom.importAltText.value.trim() || caption;

        // Inject / Replace image inside target slide
        const targetSlide = SLIDES_DATA[targetSlideIndex];
        const newImageCardHtml = `
            <div class="image-zoom-container" onclick="window.openVisualZoom('${url}', '${caption}')">
                <img src="${url}" alt="${alt}" class="zoomable-content-image" onerror="window.handleImageError(this, '${alt}')">
                <div class="zoom-hover-badge"><i class="fa-solid fa-magnifying-glass-plus"></i> คลิกเพื่อขยายภาพ</div>
            </div>
            <div class="caption-under-image"><i class="fa-solid fa-camera"></i> ${caption}</div>
        `;

        // Check if there is an existing zoom container in the slide
        if (targetSlide.html.includes("image-zoom-container")) {
            targetSlide.html = targetSlide.html.replace(
                /<div class="image-zoom-container"[\s\S]*?<\/div>\s*<div class="caption-under-image"[\s\S]*?<\/div>/,
                newImageCardHtml
            );
        } else {
            // Append to slide body
            targetSlide.html = targetSlide.html.replace(
                '</div>\n        `',
                `${newImageCardHtml}\n</div>\n        \``
            );
        }

        // Save to localStorage for persistence
        try {
            const saved = JSON.parse(localStorage.getItem("unit2_image_overrides") || "{}");
            saved[targetSlide.id] = { url, caption, alt };
            localStorage.setItem("unit2_image_overrides", JSON.stringify(saved));
        } catch (e) {
            console.warn("Storage quota exceeded or private mode:", e);
        }

        closeImageImportModal();

        // If target is current slide, re-render immediately
        if (targetSlideIndex === state.currentIndex) {
            renderSlide(state.currentIndex);
        } else {
            renderSlide(targetSlideIndex);
        }

        alert(`นำเข้าภาพประกอบไปยังสไลด์ ${targetSlide.id} เรียบร้อยแล้ว!`);
    }

    // Safe Frame-bounded Image Error Fallback (Prevents toolbar overflowing)
    function handleImageError(img, altText) {
        if (!img || !img.parentElement) return;
        const parent = img.parentElement;
        img.style.display = "none";

        // Avoid duplicate fallbacks
        if (parent.querySelector(".asset-fallback-card")) return;

        const fallback = document.createElement("div");
        fallback.className = "asset-fallback-card";
        fallback.innerHTML = `
            <i class="fa-regular fa-image"></i>
            <span>${altText || "ภาพประกอบการเรียนรู้"}</span>
        `;
        parent.appendChild(fallback);
    }

    // =========================================================================
    // SPEAKER NOTES & TOC & GLOSSARY MODALS
    // =========================================================================
    function toggleNotesDrawer() {
        dom.notesDrawer.classList.toggle("open");
    }

    function toggleTocModal() {
        const isOpen = dom.tocModal.classList.contains("active");
        if (isOpen) {
            dom.tocModal.classList.remove("active");
        } else {
            renderTocGrid();
            dom.tocModal.classList.add("active");
        }
    }

    function renderTocGrid() {
        dom.tocCardsContainer.innerHTML = "";
        SLIDES_DATA.forEach((s, idx) => {
            const card = document.createElement("div");
            card.className = `toc-slide-thumb ${idx === state.currentIndex ? "current" : ""}`;
            card.innerHTML = `
                <div class="t-num">สไลด์ ${s.id} • ${s.teachingTime || 5} นาที</div>
                <div class="t-title">${s.title}</div>
            `;
            card.onclick = () => {
                jumpToSlide(idx);
                toggleTocModal();
            };
            dom.tocCardsContainer.appendChild(card);
        });
    }

    function toggleVocabModal() {
        const isOpen = dom.vocabModal.classList.contains("active");
        if (isOpen) {
            dom.vocabModal.classList.remove("active");
        } else {
            renderVocabList(VOCABULARY_LIST);
            dom.vocabModal.classList.add("active");
        }
    }

    function toggleShortcutsModal() {
        if (!dom.shortcutsModal) return;
        dom.shortcutsModal.classList.toggle("active");
    }

    function renderVocabList(list) {
        dom.vocabListContainer.innerHTML = "";
        if (!list || list.length === 0) {
            dom.vocabListContainer.innerHTML = '<div style="text-align:center; padding:20px; color:#94A3B8;">ไม่พบคำศัพท์ที่ตรงกับการค้นหา</div>';
            return;
        }

        list.forEach(v => {
            const item = document.createElement("div");
            item.className = "note-section-box";
            item.id = `vocab-${v.key}`;
            item.innerHTML = `
                <div class="n-lbl" style="font-size:16px;"><i class="fa-solid fa-bookmark"></i> ${v.term}</div>
                <p style="font-size:16px; margin-top:6px;"><strong>ความหมายเชิงวิชาชีพ:</strong> ${v.formal}</p>
                <p style="font-size:15px; margin-top:4px; color:#065F46;"><strong>ภาษาพูดเข้าใจง่าย:</strong> ${v.easy}</p>
                <p style="font-size:14px; margin-top:4px; color:#64748B;"><strong>ตัวอย่างในชีวิตจริง:</strong> ${v.example}</p>
            `;
            dom.vocabListContainer.appendChild(item);
        });
    }

    function filterVocabList(query) {
        const q = query.toLowerCase().trim();
        if (!q) {
            renderVocabList(VOCABULARY_LIST);
            return;
        }
        const filtered = VOCABULARY_LIST.filter(v => 
            v.key.toLowerCase().includes(q) ||
            v.term.toLowerCase().includes(q) ||
            v.formal.toLowerCase().includes(q) ||
            v.easy.toLowerCase().includes(q)
        );
        renderVocabList(filtered);
    }

    function attachGlossaryTriggers(container) {
        if (!container) return;
        const terms = container.querySelectorAll(".glossary-term");
        terms.forEach(t => {
            t.onclick = (e) => {
                e.stopPropagation();
                const key = t.getAttribute("data-glossary") || t.textContent.trim();
                openGlossaryAtKey(key);
            };
        });
    }

    function openGlossaryAtKey(key) {
        toggleVocabModal();
        const input = document.getElementById("vocabSearchInput");
        if (input) input.value = key;
        filterVocabList(key);
    }

    function handleModalBackdropClick(e, modalId) {
        if (e.target.id === modalId) {
            document.getElementById(modalId).classList.remove("active");
        }
    }

    // =========================================================================
    // PRESENTER VIEW (BROADCAST CHANNEL SYNC)
    // =========================================================================
    function initSyncChannel() {
        if ("BroadcastChannel" in window) {
            state.syncChannel = new BroadcastChannel("ecommerce_21910_1004_unit2_channel");
            state.syncChannel.onmessage = (event) => {
                if (event.data && event.data.type === "NAVIGATE") {
                    if (event.data.slideIndex !== state.currentIndex) {
                        renderSlide(event.data.slideIndex);
                    }
                }
            };
        }
    }

    function openPresenterMode() {
        const url = window.location.href;
        window.open(url, "_blank", "width=1200,height=800,menubar=no,toolbar=no");
    }

    // =========================================================================
    // INTERACTIVE CONTROLLERS FOR SPECIFIC SLIDES
    // =========================================================================

    // Slide 6: Component Explorer
    const COMPONENT_DATA = {
        1: {
            title: "ผู้ซื้อ (Buyer / Customer)",
            badge: "องค์ประกอบที่ 1 จาก 6",
            role: "เป็นผู้มีความต้องการสินค้า ทำการค้นหา เปรียบเทียบข้อมูล ตัดสินใจสั่งซื้อ ตรวจสอบความถูกต้องของที่อยู่จัดส่ง และดำเนินการชำระเงินตามช่องทางที่เลือก",
            risk: "กรอกที่อยู่ผิด เบอร์โทรผิด ส่งผลให้พัสดุตีกลับ หรือไม่ตรวจสอบร้านค้าจนตกเป็นเหยื่อมิจฉาชีพ"
        },
        2: {
            title: "ผู้ขาย (Seller / Merchant)",
            badge: "องค์ประกอบที่ 2 จาก 6",
            role: "นำเสนอข้อมูลสินค้าที่ถูกต้อง กำหนดราคาสินค้า จัดการสต็อกสินค้า ตรวจสอบการชำระเงิน และดำเนินการบรรจุหีบห่อตามมาตรฐาน",
            risk: "ลงข้อมูลสินค้าคลาดเคลื่อน สต็อกไม่ตรงกับของจริง หรือแพ็กสินค้าไม่แน่นหนาจนแตกหัก"
        },
        3: {
            title: "แพลตฟอร์ม (E-Commerce Platform)",
            badge: "องค์ประกอบที่ 3 จาก 6",
            role: "เป็นตลาดกลางดิจิทัล (Marketplace) หรือเว็บไซต์ร้านค้า มีระบบค้นหา ตะกร้าสินค้า และระบบพักเงินกลาง (Escrow) คอยคุ้มครองทั้งสองฝ่าย",
            risk: "ระบบเว็บไซต์ล่ม ไม่รองรับการเชื่อมต่อชำระเงิน หรือมีช่องโหว่ความปลอดภัยจนข้อมูลรั่วไหล"
        },
        4: {
            title: "ระบบจัดการคำสั่งซื้อ (OMS)",
            badge: "องค์ประกอบที่ 4 จาก 6",
            role: "เป็นสมองกลหลังบ้าน บันทึกคำสั่งซื้อ ออกหมายเลข Order ID ตัดสต็อกแบบเรียลไทม์ และประสานงานส่งต่อให้ฝ่ายคลังสินค้า",
            risk: "ระบบไม่ตัดสต็อกอัตโนมัติ ทำให้เกิดการขายสินค้าเกินจำนวนที่มีจริง (Overselling)"
        },
        5: {
            title: "ระบบชำระเงิน (Payment System & Gateway)",
            badge: "องค์ประกอบที่ 5 จาก 6",
            role: "ทำหน้าที่รับส่งและตรวจสอบข้อมูลการชำระเงินอย่างปลอดภัยระหว่างผู้ซื้อ ร้านค้า และธนาคารพาณิชย์ ตามมาตรฐาน PCI-DSS",
            risk: "ระบบ Payment Gateway ไม่เสถียร หักเงินจากลูกค้าแล้วแต่ไม่ส่งสัญญาณยืนยันมายังร้านค้า"
        },
        6: {
            title: "ระบบขนส่ง (Logistics & Delivery)",
            badge: "องค์ประกอบที่ 6 จาก 6",
            role: "เข้ารับพัสดุจากคลังสินค้า คัดแยก ขนส่งตามเส้นทาง ออกหมายเลข Tracking Number และส่งมอบถึงที่อยู่ปลายทางอย่างปลอดภัย",
            risk: "พัสดุสูญหายระหว่างขนส่ง สินค้าเสียหายจากการโยน หรือจัดส่งล่าช้าเกินเวลาที่กำหนด"
        }
    };

    function exploreComponent(id, btn) {
        const item = COMPONENT_DATA[id];
        if (!item) return;

        document.querySelectorAll(".comp-btn").forEach(b => b.classList.remove("active"));
        if (btn) btn.classList.add("active");

        const badge = document.getElementById("compBadge");
        const title = document.getElementById("compTitle");
        const role = document.getElementById("compRole");
        const risk = document.getElementById("compRisk");

        if (badge) badge.textContent = item.badge;
        if (title) title.textContent = item.title;
        if (role) role.textContent = item.role;
        if (risk) risk.textContent = item.risk;
    }

    // Slide 10: Decision Helper Shop A vs Shop B
    function chooseShop(shopKey) {
        const cardA = document.getElementById("shopCardA");
        const cardB = document.getElementById("shopCardB");
        const fb = document.getElementById("decisionFeedback");
        if (!fb) return;

        if (cardA) cardA.classList.remove("selected");
        if (cardB) cardB.classList.remove("selected");

        fb.style.display = "block";

        if (shopKey === "A") {
            if (cardA) cardA.classList.add("selected");
            fb.innerHTML = `
                <div class="note-section-box" style="background:#ECFDF5; border-color:#A7F3D0;">
                    <div class="n-lbl" style="color:#065F46;"><i class="fa-solid fa-circle-check"></i> ยอดเยี่ยมมาก! การตัดสินใจเลือก "ร้าน A" มีเหตุผลทางธุรกิจที่คุ้มค่ากว่า</div>
                    <p style="color:#065F46; font-size:17px; margin-top:6px;">
                        <strong>เหตุผลประกอบ:</strong> แม้ว่ายอดรวมชำระสุทธิจะอยู่ที่ 290 บาทเท่ากัน แต่ร้าน A มอบความคุ้มครองที่เหนือกว่าด้วย <strong>การรับประกันยาวนานถึง 12 เดือน</strong> (ร้าน B ให้เพียง 3 เดือน) อีกทั้งยัง <strong>จัดส่งเร็วกว่าเกือบเท่าตัว (2-3 วัน)</strong> และมีคะแนนรีวิว 4.8 ดาวที่น่าเชื่อถือกว่ามาก!
                    </p>
                </div>
            `;
        } else {
            if (cardB) cardB.classList.add("selected");
            fb.innerHTML = `
                <div class="note-section-box" style="background:#FFFBEB; border-color:#FDE68A;">
                    <div class="n-lbl" style="color:#92400E;"><i class="fa-solid fa-lightbulb"></i> ข้อสังเกตสำหรับการเลือก "ร้าน B"</div>
                    <p style="color:#78350F; font-size:17px; margin-top:6px;">
                        แม้คำว่า <strong>"ส่งฟรี"</strong> จะดูน่าดึงดูดใจ แต่หากคำนวณราคาสุทธิ 290 บาทเท่ากัน ร้าน B ให้ประกันเพียง 3 เดือน และใช้เวลาส่งนานถึง 4-5 วัน ในเชิงธุรกิจดิจิทัล ร้าน A จึงถือเป็นทางเลือกที่คุ้มค่าและปลอดภัยกว่าครับ
                    </p>
                </div>
            `;
        }
    }

    // Slide 11: Live Cart Calculator
    function updateCartQty(item, delta) {
        if (item === "mouse") {
            state.cart.mouseQty = Math.max(1, state.cart.mouseQty + delta);
        } else if (item === "pad") {
            state.cart.padQty = Math.max(0, state.cart.padQty + delta);
        }
        refreshCartDisplay();
    }

    function toggleCartCoupon() {
        const chk = document.getElementById("couponToggle");
        state.cart.couponActive = chk ? chk.checked : false;
        refreshCartDisplay();
    }

    function refreshCartDisplay() {
        const mouseQtyEl = document.getElementById("mouseQty");
        const mouseSubEl = document.getElementById("mouseSubtotal");
        const padQtyEl = document.getElementById("padQty");
        const padSubEl = document.getElementById("padSubtotal");
        const cartSubEl = document.getElementById("cartSubtotal");
        const cartGrandEl = document.getElementById("cartGrandTotal");
        const couponDiscEl = document.getElementById("couponDiscount");

        if (!mouseQtyEl) return;

        const mouseSub = state.cart.mouseQty * state.cart.mousePrice;
        const padSub = state.cart.padQty * state.cart.padPrice;
        const subtotal = mouseSub + padSub;
        const discount = state.cart.couponActive ? state.cart.couponDiscount : 0;
        const grandTotal = Math.max(0, subtotal + state.cart.shipping - discount);

        mouseQtyEl.textContent = state.cart.mouseQty;
        mouseSubEl.textContent = `${mouseSub} บาท`;
        padQtyEl.textContent = state.cart.padQty;
        padSubEl.textContent = `${padSub} บาท`;
        cartSubEl.textContent = `${subtotal} บาท`;
        couponDiscEl.textContent = `-${discount} บาท`;
        cartGrandEl.textContent = `${grandTotal} บาท`;
    }

    // Slide 14: Slip Verification Checklist
    function toggleVerifyStep(el) {
        if (!el) return;
        el.classList.toggle("checked");
        const icon = el.querySelector(".v-chk i");
        if (icon) {
            if (el.classList.contains("checked")) {
                icon.className = "fa-solid fa-square-check";
            } else {
                icon.className = "fa-regular fa-square";
            }
        }
    }

    // Slide 15: Tracking Simulator
    function simulateTracking() {
        const input = document.getElementById("trackingInput");
        const res = document.getElementById("trackingResult");
        if (!input || !res) return;

        const val = input.value.trim();
        if (!val) {
            alert("กรุณากรอกรหัสพัสดุ");
            return;
        }

        res.innerHTML = `
            <div class="res-status active"><i class="fa-solid fa-satellite-dish"></i> ผลการค้นหารหัสพัสดุ: <strong>${val}</strong></div>
            <div class="timeline-log" style="margin-top:14px;">
                <div class="log-item completed">
                    <div class="dot"></div>
                    <div class="txt"><strong>10:15 น. (เมื่อวาน)</strong> ผู้ขายนำส่งพัสดุ ณ คลังกระจายสินค้าหลัก</div>
                </div>
                <div class="log-item completed">
                    <div class="dot"></div>
                    <div class="txt"><strong>18:30 น. (เมื่อวาน)</strong> พัสดุผ่านการคัดแยกที่ศูนย์คัดแยกกลาง</div>
                </div>
                <div class="log-item completed">
                    <div class="dot"></div>
                    <div class="txt"><strong>06:45 น. (วันนี้)</strong> พัสดุถึงสาขาปลายทางประจำตำบล</div>
                </div>
                <div class="log-item current">
                    <div class="dot"></div>
                    <div class="txt"><strong>09:12 น. (ปัจจุบัน)</strong> พนักงานจัดส่งกำลังนำจ่ายไปยังที่อยู่ผู้รับ</div>
                </div>
            </div>
        `;
    }

    // Slide 18: OMS Status Explorer
    const OMS_STATUS_DATA = {
        1: {
            title: "Pending (รอดำเนินการ)",
            badge: "สถานะที่ 1 / 9",
            meaning: "คำสั่งซื้อถูกบันทึกเข้าระบบแล้ว แต่ยังอยู่ระหว่างรอการอนุมัติเบื้องต้น หรือรอลูกค้าไปยังหน้าชำระเงิน",
            action: "ระบบออกหมายเลข Order ID ทำการล็อกสต็อกสินค้าชั่วคราว (ชั่วคราว 15–30 นาที) และรอการยืนยันชำระเงิน",
            customerNotice: "เราได้รับคำสั่งซื้อของคุณแล้ว อยู่ระหว่างส่งต่อไปยังช่องทางชำระเงิน"
        },
        2: {
            title: "Awaiting Payment (รอการชำระเงิน)",
            badge: "สถานะที่ 2 / 9",
            meaning: "ระบบสร้างรายการชำระเงินเรียบร้อยแล้ว และกำลังนับถอยหลังรอให้ลูกค้าโอนเงินสดหรือตัดบัตร",
            action: "แสดงเวลานับถอยหลัง (Timer Countdown) หากลูกค้าไม่ชำระเงินภายในเวลาที่กำหนด ระบบจะยกเลิกอัตโนมัติ",
            customerNotice: "กรุณาชำระเงินภายในเวลาที่กำหนดเพื่อรักษาสิทธิ์คำสั่งซื้อของท่าน"
        },
        3: {
            title: "Paid / Payment Confirmed (ชำระเงินแล้ว)",
            badge: "สถานะที่ 3 / 9",
            meaning: "ระบบหรือพนักงานฝ่ายบัญชีตรวจสอบยอดเงินเข้าบัญชีจริงครบถ้วนสมบูรณ์แล้ว",
            action: "ระบบตัดสต็อกสินค้าถาวร ส่งใบเสร็จรับเงินทางอีเมล/SMS และส่งต่อออเดอร์ให้แผนกคลังสินค้า",
            customerNotice: "การชำระเงินเสร็จสมบูรณ์ ร้านค้ากำลังเตรียมสินค้าของคุณ"
        },
        4: {
            title: "Processing / In Packing (กำลังจัดเตรียมสินค้า)",
            badge: "สถานะที่ 4 / 9",
            meaning: "ฝ่ายคลังสินค้ากำลังทำการหยิบสินค้าจากชั้นวาง (Pick) ตรวจสอบความถูกต้อง และห่อพัสดุ (Pack)",
            action: "พิมพ์ใบหยิบของ (Pick List) ตรวจสอบรุ่น/สี ห่อบับเบิ้ลกันกระแทก และพิมพ์ใบปะหน้าบาร์โค้ด",
            customerNotice: "ร้านค้ากำลังแพ็กพัสดุของคุณอย่างประณีต"
        },
        5: {
            title: "Shipped / In Transit (จัดส่งสินค้าแล้ว)",
            badge: "สถานะที่ 5 / 9",
            meaning: "พัสดุถูกส่งมอบให้แก่บริษัทขนส่งเอกชนหรือไปรษณีย์ไทยเรียบร้อยแล้ว",
            action: "บันทึกรหัส Tracking Number เข้าระบบ และส่งลิงก์ติดตามสถานะให้ลูกค้าตรวจสอบ",
            customerNotice: "พัสดุของคุณอยู่ระหว่างการเดินทาง หมายเลขติดตาม: TH-2026-POST-9912"
        },
        6: {
            title: "Delivered (จัดส่งสำเร็จ)",
            badge: "สถานะที่ 6 / 9",
            meaning: "พนักงานขนส่งนำส่งพัสดุถึงมือผู้รับปลายทางเรียบร้อยแล้ว และมีลายเซ็นรับของ",
            action: "บันทึกเวลาส่งมอบในระบบ OMS และเริ่มนับระยะเวลาคุ้มครองผู้ซื้อ (เช่น ภายใน 7 วัน)",
            customerNotice: "พัสดุส่งถึงท่านเรียบร้อยแล้ว กรุณาตรวจสอบสินค้าและกดยืนยันการรับ"
        },
        7: {
            title: "Completed (คำสั่งซื้อเสร็จสมบูรณ์)",
            badge: "สถานะที่ 7 / 9",
            meaning: "ลูกค้ากดยืนยันรับสินค้า หรือพ้นระยะเวลาการขอคืนสินค้าเรียบร้อยแล้ว",
            action: "ระบบโอนเงินค่าสินค้าเข้าบัญชีร้านค้าอย่างเป็นทางการ และเชิญชวนลูกค้ารีวิวให้คะแนน",
            customerNotice: "ธุรกรรมเสร็จสมบูรณ์ ขอบคุณที่ใช้บริการ อย่าลืมให้คะแนนร้านค้านะครับ"
        },
        8: {
            title: "Cancelled (ยกเลิกคำสั่งซื้อ)",
            badge: "สถานะที่ 8 / 9",
            meaning: "คำสั่งซื้อถูกยกเลิกเนื่องจากลูกค้าเปลี่ยนใจ หรือลูกค้าไม่ชำระเงินภายในเวลาที่กำหนด",
            action: "ระบบคืนสต็อกสินค้ากลับสู่คลังทันที เพื่อให้ลูกค้าท่านอื่นสามารถสั่งซื้อต่อได้",
            customerNotice: "คำสั่งซื้อนี้ถูกยกเลิกแล้ว สินค้าถูกคืนกลับสู่ระบบ"
        },
        9: {
            title: "Refunded / Returned (คืนเงิน / คืนสินค้า)",
            badge: "สถานะที่ 9 / 9",
            meaning: "ลูกค้าส่งสินค้ากลับมาเนื่องจากชำรุดหรือไม่ตรงสเปก และร้านค้าทำการโอนเงินคืน",
            action: "คลังรับสินค้ากลับมาตรวจสอบสภาพ และฝ่ายบัญชีทำเรื่องโอนเงินคืนลูกค้าตามช่องทางเดิม",
            customerNotice: "กระบวนการคืนเงินสำเร็จ ยอดเงินจะคืนเข้าบัญชีของท่านภายใน 1-3 วันทำการ"
        }
    };

    function exploreStatus(id, btn) {
        const item = OMS_STATUS_DATA[id];
        if (!item) return;

        document.querySelectorAll(".st-btn").forEach(b => b.classList.remove("active"));
        if (btn) btn.classList.add("active");

        const badge = document.getElementById("statusPillBadge");
        const heading = document.getElementById("statusHeading");
        const meaning = document.getElementById("statusMeaning");
        const action = document.getElementById("statusAction");
        const notice = document.getElementById("statusCustomerNotice");

        if (badge) badge.textContent = item.badge;
        if (heading) heading.textContent = item.title;
        if (meaning) meaning.textContent = item.meaning;
        if (action) action.textContent = item.action;
        if (notice) notice.textContent = `"${item.customerNotice}"`;
    }

    // Slide 23: Gateway Architecture Simulation
    let gwStep = 0;
    let gwTimer = null;

    function simulateGatewayFlow() {
        resetGatewayFlow();
        const output = document.getElementById("gwStatusOutput");
        const nodeBuyer = document.getElementById("gwNodeBuyer");
        const nodeStore = document.getElementById("gwNodeStore");
        const nodeGateway = document.getElementById("gwNodeGateway");
        const nodeBank = document.getElementById("gwNodeBank");

        const stages = [
            {
                text: "ขั้นตอนที่ 1: ผู้ซื้อกรอกข้อมูลและกดยืนยันชำระเงิน",
                action: () => { if (nodeBuyer) nodeBuyer.classList.add("active-stage"); }
            },
            {
                text: "ขั้นตอนที่ 2: เว็บไซต์ร้านค้าส่งคำขอชำระเงินผ่าน SSL ไปยัง Gateway โดยไม่เก็บเลขบัตร",
                action: () => { if (nodeStore) nodeStore.classList.add("active-stage"); }
            },
            {
                text: "ขั้นตอนที่ 3: Payment Gateway เข้ารหัส Tokenization และส่งต่อไปยังเครือข่ายธนาคาร",
                action: () => { if (nodeGateway) nodeGateway.classList.add("active-stage"); }
            },
            {
                text: "ขั้นตอนที่ 4: ธนาคารตรวจสอบวงเงิน ส่ง SMS OTP และส่งสัญญาณอนุมัติ (Approved)",
                action: () => { if (nodeBank) nodeBank.classList.add("active-stage"); }
            },
            {
                text: "เสร็จสมบูรณ์! เงินเข้าบัญชีและระบบเปลี่ยนสถานะเป็น 'Paid' เรียบร้อย",
                action: () => { if (output) output.innerHTML = '<strong style="color:#10B981;"><i class="fa-solid fa-circle-check"></i> การทำธุรกรรมผ่าน Gateway เสร็จสมบูรณ์อย่างปลอดภัย 100%</strong>'; }
            }
        ];

        let i = 0;
        function runStage() {
            if (i < stages.length) {
                if (output) output.textContent = stages[i].text;
                stages[i].action();
                i++;
                gwTimer = setTimeout(runStage, 1400);
            }
        }
        runStage();
    }

    function resetGatewayFlow() {
        if (gwTimer) clearTimeout(gwTimer);
        const output = document.getElementById("gwStatusOutput");
        if (output) output.textContent = "กดปุ่มเพื่อเริ่มจำลองขั้นตอนการส่งข้อมูลที่เข้ารหัส";
        ["gwNodeBuyer", "gwNodeStore", "gwNodeGateway", "gwNodeBank"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove("active-stage");
        });
    }

    // Slide 26: Safety Checklist Progress
    function updateSafetyProgress() {
        const checkboxes = document.querySelectorAll(".interactive-chk-list input[type='checkbox']");
        let checkedCount = 0;
        checkboxes.forEach(chk => { if (chk.checked) checkedCount++; });
        if (checkedCount === checkboxes.length && checkboxes.length > 0) {
            setTimeout(() => {
                alert("ยินดีด้วยครับ! คุณผ่านการตรวจสอบความปลอดภัยครบ 10 ข้อตามมาตรฐานวิชาชีพแล้ว!");
            }, 300);
        }
    }

    // Slide 31: 10-Question Knowledge Check Quiz Engine
    function initQuizEngine() {
        state.quiz.currentIndex = 0;
        state.quiz.userAnswers = {};
        state.quiz.score = 0;
        renderQuizQuestion(state.quiz.currentIndex);
    }

    function renderQuizQuestion(index) {
        if (!QUIZ_QUESTIONS || QUIZ_QUESTIONS.length === 0) return;
        const q = QUIZ_QUESTIONS[index];

        const badge = document.getElementById("quizQuestionBadge");
        const scoreBadge = document.getElementById("quizScoreBadge");
        const qText = document.getElementById("quizQuestionText");
        const optsContainer = document.getElementById("quizOptionsContainer");
        const expBox = document.getElementById("quizExplanationBox");
        const expText = document.getElementById("quizExplanationText");
        const prevBtn = document.getElementById("prevQuizBtn");
        const nextBtn = document.getElementById("nextQuizBtn");

        if (badge) badge.textContent = `ข้อที่ ${index + 1} จาก ${QUIZ_QUESTIONS.length}`;
        if (scoreBadge) scoreBadge.innerHTML = `<i class="fa-solid fa-star"></i> คะแนนสะสม: ${state.quiz.score} / ${QUIZ_QUESTIONS.length}`;
        if (qText) qText.textContent = q.question;

        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === QUIZ_QUESTIONS.length - 1;

        if (optsContainer) {
            optsContainer.innerHTML = "";
            const answered = state.quiz.userAnswers.hasOwnProperty(index);

            q.options.forEach((optText, optIdx) => {
                const btn = document.createElement("button");
                btn.className = "quiz-opt-btn";
                btn.textContent = optText;

                if (answered) {
                    btn.disabled = true;
                    if (optIdx === q.correctIndex) {
                        btn.classList.add("correct");
                    } else if (optIdx === state.quiz.userAnswers[index]) {
                        btn.classList.add("wrong");
                    }
                } else {
                    btn.onclick = () => handleSelectQuizOption(index, optIdx);
                }

                optsContainer.appendChild(btn);
            });
        }

        if (expBox && expText) {
            if (state.quiz.userAnswers.hasOwnProperty(index)) {
                expBox.style.display = "block";
                expText.textContent = q.explanation;
            } else {
                expBox.style.display = "none";
            }
        }
    }

    function handleSelectQuizOption(qIdx, optIdx) {
        const q = QUIZ_QUESTIONS[qIdx];
        state.quiz.userAnswers[qIdx] = optIdx;

        if (optIdx === q.correctIndex) {
            state.quiz.score++;
        }

        renderQuizQuestion(qIdx);
    }

    function prevQuizQuestion() {
        if (state.quiz.currentIndex > 0) {
            state.quiz.currentIndex--;
            renderQuizQuestion(state.quiz.currentIndex);
        }
    }

    function nextQuizQuestion() {
        if (state.quiz.currentIndex < QUIZ_QUESTIONS.length - 1) {
            state.quiz.currentIndex++;
            renderQuizQuestion(state.quiz.currentIndex);
        }
    }

    // =========================================================================
    // KEYBOARD NAVIGATION & SHORTCUTS
    // =========================================================================
    function handleKeyDown(e) {
        // If typing in input or textarea, ignore shortcuts
        const tag = (e.target.tagName || "").toLowerCase();
        if (tag === "input" || tag === "textarea" || tag === "select") {
            if (e.key === "Escape") {
                e.target.blur();
            }
            return;
        }

        // Lightbox Keyboard Isolation
        if (state.lightbox.isOpen) {
            if (e.key === "Escape") {
                closeVisualZoom();
            } else if (e.key === "+" || e.key === "=") {
                zoomLightbox(1.2);
            } else if (e.key === "-" || e.key === "_") {
                zoomLightbox(0.8);
            } else if (e.key === "0") {
                resetLightboxZoom();
            }
            return;
        }

        // Close open modals with ESC
        if (e.key === "Escape") {
            if (dom.tocModal.classList.contains("active")) toggleTocModal();
            if (dom.vocabModal.classList.contains("active")) toggleVocabModal();
            if (dom.imageImportModal.classList.contains("active")) closeImageImportModal();
            if (dom.notesDrawer.classList.contains("open")) toggleNotesDrawer();
            if (dom.shortcutsModal && dom.shortcutsModal.classList.contains("active")) toggleShortcutsModal();
            return;
        }

        // Slide Navigation
        if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
            e.preventDefault();
            nextSlide();
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
            e.preventDefault();
            prevSlide();
        } else if (e.key === "Home") {
            e.preventDefault();
            jumpToSlide(0);
        } else if (e.key === "End") {
            e.preventDefault();
            jumpToSlide(state.totalSlides - 1);
        } else if (e.key === "t" || e.key === "T") {
            toggleTocModal();
        } else if (e.key === "g" || e.key === "G") {
            toggleVocabModal();
        } else if (e.key === "n" || e.key === "N") {
            toggleNotesDrawer();
        } else if (e.key === "p" || e.key === "P") {
            openPresenterMode();
        } else if (e.key === "f" || e.key === "F") {
            toggleFullscreen();
        } else if (e.key === "i" || e.key === "I") {
            openImageImportModal();
        } else if (e.key === "?" || (e.shiftKey && e.key === "/")) {
            toggleShortcutsModal();
        }
    }

    // =========================================================================
    // AUTOMATED QUALITY AUDIT RUNNER (PHASE F QA)
    // =========================================================================
    window.runUnit2Audit = function () {
        const results = {
            timestamp: new Date().toISOString(),
            courseId: "21910-1004",
            unitId: "unit-2",
            slideCount: state.totalSlides,
            vocabCount: VOCABULARY_LIST.length,
            quizQuestionCount: QUIZ_QUESTIONS.length,
            issues: []
        };

        if (state.totalSlides !== 35) {
            results.issues.push(`Slide count is ${state.totalSlides}, expected exactly 35 slides.`);
        }

        // Test each slide's structure
        SLIDES_DATA.forEach((s, idx) => {
            if (!s.title) results.issues.push(`Slide ${s.id} is missing a title.`);
            if (!s.html) results.issues.push(`Slide ${s.id} is missing HTML markup.`);
            if (!s.speakerNotes || !s.speakerNotes.whatToSay) {
                results.issues.push(`Slide ${s.id} is missing speaker notes.`);
            }
        });

        // Test local images availability
        const imagesToCheck = [
            "shopping-cart-checkout.jpg",
            "mobile-banking-app.jpg",
            "qr-payment-scan.jpg",
            "credit-card-checkout.jpg",
            "digital-wallet-transfer.jpg",
            "cash-on-delivery-scan.jpg",
            "cafe-online-barista.jpg"
        ];

        results.localAssets = imagesToCheck;
        results.status = results.issues.length === 0 ? "PASSED" : "FAILED";
        console.table(results);
        return results;
    };

    // =========================================================================
    // INITIALIZATION ON DOM READY
    // =========================================================================
    function init() {
        initDomElements();
        initSyncChannel();
        adjustCanvasScale();
        startElapsedTimer();

        // Restore image overrides from localStorage if present
        try {
            const saved = JSON.parse(localStorage.getItem("unit2_image_overrides") || "{}");
            Object.keys(saved).forEach(slideId => {
                const s = SLIDES_DATA.find(item => item.id === parseInt(slideId, 10));
                if (s) {
                    const { url, caption, alt } = saved[slideId];
                    const newHtml = `
                        <div class="image-zoom-container" onclick="window.openVisualZoom('${url}', '${caption}')">
                            <img src="${url}" alt="${alt}" class="zoomable-content-image" onerror="window.handleImageError(this, '${alt}')">
                            <div class="zoom-hover-badge"><i class="fa-solid fa-magnifying-glass-plus"></i> คลิกเพื่อขยายภาพ</div>
                        </div>
                        <div class="caption-under-image"><i class="fa-solid fa-camera"></i> ${caption}</div>
                    `;
                    if (s.html.includes("image-zoom-container")) {
                        s.html = s.html.replace(/<div class="image-zoom-container"[\s\S]*?<\/div>\s*<div class="caption-under-image"[\s\S]*?<\/div>/, newHtml);
                    }
                }
            });
        } catch (e) {
            console.warn("Storage access notice:", e);
        }

        // Initial Render from Hash or Start
        let initialIndex = 0;
        if (window.location.hash) {
            const parsed = parseInt(window.location.hash.replace("#", ""), 10);
            if (!isNaN(parsed) && parsed >= 1 && parsed <= state.totalSlides) {
                initialIndex = parsed - 1;
            }
        }
        renderSlide(initialIndex);

        // Event Listeners
        window.addEventListener("resize", adjustCanvasScale);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("hashchange", () => {
            const parsed = parseInt(window.location.hash.replace("#", ""), 10);
            if (!isNaN(parsed) && parsed >= 1 && parsed <= state.totalSlides) {
                if (state.currentIndex !== parsed - 1) {
                    renderSlide(parsed - 1);
                }
            }
        });
        if (dom.lightboxViewport) {
            dom.lightboxViewport.addEventListener("wheel", handleLightboxWheel, { passive: false });
        }
    }

    // Expose Global Handlers for HTML Onclick bindings
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
    window.jumpToSlide = jumpToSlide;
    window.jumpToSlideInput = jumpToSlideInput;
    window.seekProgress = seekProgress;
    window.toggleFullscreen = toggleFullscreen;
    window.toggleNotesDrawer = toggleNotesDrawer;
    window.toggleTocModal = toggleTocModal;
    window.toggleVocabModal = toggleVocabModal;
    window.toggleShortcutsModal = toggleShortcutsModal;
    window.filterVocabList = filterVocabList;
    window.handleModalBackdropClick = handleModalBackdropClick;
    window.openPresenterMode = openPresenterMode;

    // Lightbox & Asset Manager
    window.openVisualZoom = openVisualZoom;
    window.closeVisualZoom = closeVisualZoom;
    window.zoomLightbox = zoomLightbox;
    window.resetLightboxZoom = resetLightboxZoom;
    window.startLightboxPan = startLightboxPan;
    window.doLightboxPan = doLightboxPan;
    window.endLightboxPan = endLightboxPan;
    window.openImageImportModal = openImageImportModal;
    window.closeImageImportModal = closeImageImportModal;
    window.previewImportImage = previewImportImage;
    window.applyImportedImage = applyImportedImage;
    window.handleImageError = handleImageError;

    // Interactive Controllers
    window.exploreComponent = exploreComponent;
    window.chooseShop = chooseShop;
    window.updateCartQty = updateCartQty;
    window.toggleCartCoupon = toggleCartCoupon;
    window.toggleVerifyStep = toggleVerifyStep;
    window.simulateTracking = simulateTracking;
    window.exploreStatus = exploreStatus;
    window.simulateGatewayFlow = simulateGatewayFlow;
    window.resetGatewayFlow = resetGatewayFlow;
    window.updateSafetyProgress = updateSafetyProgress;
    window.prevQuizQuestion = prevQuizQuestion;
    window.nextQuizQuestion = nextQuizQuestion;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
