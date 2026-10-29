/**
 * Interactive Presentation Controller (app.js)
 * Features:
 * - High-Visibility Classroom Typography (27px-30px body, 33px-44px headings)
 * - True Transform Scale Auto-Fit Engine: Measures both width & height of every slide
 *   and scales proportionately so zero horizontal or vertical overflow ever occurs.
 * - Keyboard Shortcuts, Speaker Notes, Slide Overview Grid, Vocabulary Modal, Crisp PDF Print
 */

(function () {
    let currentIndex = 0;
    const totalSlides = SLIDES_DATA.length;

    const slideViewport = document.getElementById('slideViewport');
    const stageWrapper = document.getElementById('stageWrapper');
    const progressFill = document.getElementById('progressFill');
    const slideInput = document.getElementById('slideInput');
    const totalSlidesCount = document.getElementById('totalSlidesCount');
    const sectionIndicator = document.getElementById('sectionIndicator');
    const slideTimerBadge = document.getElementById('slideTimerBadge');

    const notesDrawer = document.getElementById('notesDrawer');
    const notesContent = document.getElementById('notesContent');
    const notesTimeEstimate = document.getElementById('notesTimeEstimate');
    const gridModal = document.getElementById('gridModal');
    const gridList = document.getElementById('gridList');
    const vocabModal = document.getElementById('vocabModal');
    const vocabList = document.getElementById('vocabList');

    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const btnFirst = document.getElementById('btnFirst');
    const btnLast = document.getElementById('btnLast');
    const btnNotes = document.getElementById('btnNotes');
    const closeNotes = document.getElementById('closeNotes');
    const btnGrid = document.getElementById('btnGrid');
    const closeGrid = document.getElementById('closeGrid');
    const btnVocab = document.getElementById('btnVocab');
    const closeVocab = document.getElementById('closeVocab');
    const btnPrint = document.getElementById('btnPrint');
    const btnFullscreen = document.getElementById('btnFullscreen');

    // 1. Render all slides into the DOM
    function renderAllSlides() {
        totalSlidesCount.textContent = totalSlides;
        slideInput.max = totalSlides;

        const htmlFragments = SLIDES_DATA.map((slide, idx) => {
            if (slide.isCover) {
                return `
                    <section class="slide cover-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                        <div class="slide-body">
                            <div class="slide-inner-fit">
                                ${slide.html}
                            </div>
                        </div>
                        <div class="slide-footer">
                            <div class="footer-left">
                                <span><i class="fa-solid fa-graduation-cap"></i> รายวิชา 21910-1002 การวิเคราะห์ข้อมูล (ปวช. เทคโนโลยีธุรกิจดิจิทัล)</span>
                            </div>
                            <div class="footer-page">สไลด์ที่ ${slide.id} / ${totalSlides}</div>
                        </div>
                    </section>
                `;
            }

            return `
                <section class="slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                    <header class="slide-header">
                        <div class="header-left">
                            <div class="slide-kicker">
                                <span class="kicker-pill">${slide.kicker || `สไลด์ที่ ${slide.id}`}</span>
                                <span>• หน่วยที่ 1 การวิเคราะห์ความต้องการทางธุรกิจ</span>
                            </div>
                            <h2 class="slide-title">${slide.title}</h2>
                        </div>
                        ${slide.badge ? `<div class="slide-subtitle-badge"><i class="fa-solid fa-layer-group" style="color:#2563eb;"></i> ${slide.badge}</div>` : ''}
                    </header>

                    <div class="slide-body">
                        <div class="slide-inner-fit">
                            ${slide.html}
                        </div>
                    </div>

                    <footer class="slide-footer">
                        <div class="footer-left">
                            <span class="footer-tag">21910-1002 การวิเคราะห์ข้อมูล</span>
                            <span>${slide.section}</span>
                        </div>
                        <div class="footer-page">สไลด์ที่ ${slide.id} / ${totalSlides}</div>
                    </footer>
                </section>
            `;
        });

        slideViewport.innerHTML = htmlFragments.join('');
    }

    // 2. True Transform Auto-Fit Engine: Guarantees zero horizontal & vertical overflow
    function fitSlideContent(slideEl) {
        if (!slideEl) return;
        const bodyEl = slideEl.querySelector('.slide-body');
        const innerEl = slideEl.querySelector('.slide-inner-fit');
        if (!bodyEl || !innerEl) return;

        // Reset transform and dimensions before measuring natural size
        innerEl.style.zoom = '';
        innerEl.style.transform = 'none';
        innerEl.style.width = '100%';
        innerEl.style.height = 'auto';

        const availableW = bodyEl.clientWidth;
        const availableH = bodyEl.clientHeight;

        const naturalW = innerEl.scrollWidth;
        const naturalH = innerEl.scrollHeight;

        if (availableW <= 0 || availableH <= 0) return;

        let scale = 1;
        if (naturalH > availableH || naturalW > availableW) {
            const scaleH = availableH / naturalH;
            const scaleW = availableW / naturalW;
            scale = Math.min(scaleH, scaleW, 1) * 0.985;
        }

        if (scale < 1) {
            // Compensate width & height so scaled box still fills 100% of slide-body width cleanly
            innerEl.style.width = `${(100 / scale).toFixed(2)}%`;
            innerEl.style.height = `${(availableH / scale).toFixed(1)}px`;
            innerEl.style.transform = `scale(${scale.toFixed(4)})`;
        } else {
            innerEl.style.width = '100%';
            innerEl.style.height = '100%';
            innerEl.style.transform = 'none';
        }
    }

    function fitAllSlidesForPrint() {
        const allSlideEls = slideViewport.querySelectorAll('.slide');
        allSlideEls.forEach(el => {
            const wasActive = el.classList.contains('active');
            if (!wasActive) {
                el.style.display = 'flex';
                el.style.visibility = 'hidden';
            }
            fitSlideContent(el);
            if (!wasActive) {
                el.style.display = '';
                el.style.visibility = '';
            }
        });
    }

    // 3. Render Overview Grid & Vocabulary Modal
    function renderModals() {
        gridList.innerHTML = SLIDES_DATA.map((slide, idx) => `
            <div class="grid-thumb ${idx === currentIndex ? 'active' : ''}" data-index="${idx}">
                <div class="grid-thumb-num">สไลด์ที่ ${slide.id} • ${slide.timeGuide || ''}</div>
                <div class="grid-thumb-title">${slide.title || 'ปกหน่วยการเรียนรู้ที่ 1'}</div>
            </div>
        `).join('');

        gridList.querySelectorAll('.grid-thumb').forEach(item => {
            item.addEventListener('click', () => {
                const targetIdx = parseInt(item.getAttribute('data-index'), 10);
                goToSlide(targetIdx);
                gridModal.classList.remove('open');
            });
        });

        vocabList.innerHTML = VOCABULARY_LIST.map(item => `
            <div class="vocab-item">
                <div class="vocab-term"><i class="fa-solid fa-tag"></i> ${item.term}</div>
                <div class="vocab-formal"><strong>ความหมายทางการ:</strong> ${item.formal}</div>
                <div class="vocab-easy"><i class="fa-solid fa-lightbulb"></i> <strong>เข้าใจง่ายๆ:</strong> ${item.easy}</div>
            </div>
        `).join('');
    }

    // 4. Navigate to specific slide
    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= totalSlides) index = totalSlides - 1;
        currentIndex = index;

        const allSlideEls = slideViewport.querySelectorAll('.slide');
        allSlideEls.forEach((el, idx) => {
            el.classList.toggle('active', idx === currentIndex);
        });

        const activeSlideEl = allSlideEls[currentIndex];
        fitSlideContent(activeSlideEl);

        const currentSlideData = SLIDES_DATA[currentIndex];
        slideInput.value = currentIndex + 1;
        const pct = ((currentIndex + 1) / totalSlides) * 100;
        progressFill.style.width = `${pct}%`;

        sectionIndicator.textContent = currentSlideData.section || '';
        slideTimerBadge.innerHTML = `<i class="fa-regular fa-clock"></i> ${currentSlideData.timeGuide || 'แผนการสอน 60 นาที'}`;

        // Update Teacher Notes
        notesTimeEstimate.textContent = `สไลด์ที่ ${currentSlideData.id}/${totalSlides} • ${currentSlideData.timeGuide || ''}`;
        notesContent.innerHTML = currentSlideData.notes || `<div class="note-card"><p>บรรยายตามหัวข้อบนสไลด์และยกตัวอย่างธุรกิจใกล้ตัวนักศึกษา</p></div>`;

        // Update active state in grid overview
        gridList.querySelectorAll('.grid-thumb').forEach((thumb, idx) => {
            thumb.classList.toggle('active', idx === currentIndex);
        });

        // Save hash for bookmarking
        window.history.replaceState(null, null, `#slide-${currentIndex + 1}`);
    }

    // 5. Responsive 16:9 Canvas Scaling (Safe margin so edges are never clipped)
    function updateViewportScale() {
        const wrapperRect = stageWrapper.getBoundingClientRect();
        const availableWidth = wrapperRect.width - 28;
        const availableHeight = wrapperRect.height - 20;

        const scaleX = availableWidth / 1600;
        const scaleY = availableHeight / 900;
        const scale = Math.min(scaleX, scaleY, 1.25);

        slideViewport.style.transform = `scale(${scale})`;
    }

    // 6. Event Listeners
    btnPrev.addEventListener('click', () => goToSlide(currentIndex - 1));
    btnNext.addEventListener('click', () => goToSlide(currentIndex + 1));
    btnFirst.addEventListener('click', () => goToSlide(0));
    btnLast.addEventListener('click', () => goToSlide(totalSlides - 1));

    slideInput.addEventListener('change', () => {
        const val = parseInt(slideInput.value, 10);
        if (!isNaN(val)) {
            goToSlide(val - 1);
        }
    });

    btnNotes.addEventListener('click', () => {
        notesDrawer.classList.toggle('open');
        btnNotes.classList.toggle('active');
    });

    closeNotes.addEventListener('click', () => {
        notesDrawer.classList.remove('open');
        btnNotes.classList.remove('active');
    });

    btnGrid.addEventListener('click', () => {
        gridModal.classList.toggle('open');
    });

    closeGrid.addEventListener('click', () => {
        gridModal.classList.remove('open');
    });

    btnVocab.addEventListener('click', () => {
        vocabModal.classList.toggle('open');
    });

    closeVocab.addEventListener('click', () => {
        vocabModal.classList.remove('open');
    });

    btnPrint.addEventListener('click', () => {
        fitAllSlidesForPrint();
        window.print();
    });

    window.addEventListener('beforeprint', fitAllSlidesForPrint);

    btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        } else {
            document.exitFullscreen().catch(() => {});
        }
    });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
        if (document.activeElement === slideInput) return;

        if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
            e.preventDefault();
            goToSlide(currentIndex + 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            e.preventDefault();
            goToSlide(currentIndex - 1);
        } else if (e.key === 'Home') {
            e.preventDefault();
            goToSlide(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            goToSlide(totalSlides - 1);
        } else if (e.key === 'n' || e.key === 'N') {
            notesDrawer.classList.toggle('open');
            btnNotes.classList.toggle('active');
        } else if (e.key === 'g' || e.key === 'G') {
            gridModal.classList.toggle('open');
        } else if (e.key === 'v' || e.key === 'V') {
            vocabModal.classList.toggle('open');
        } else if (e.key === 'f' || e.key === 'F') {
            btnFullscreen.click();
        } else if (e.key === 'Escape') {
            gridModal.classList.remove('open');
            vocabModal.classList.remove('open');
            notesDrawer.classList.remove('open');
            btnNotes.classList.remove('active');
        }
    });

    window.addEventListener('resize', () => {
        updateViewportScale();
        const activeSlideEl = slideViewport.querySelector('.slide.active');
        fitSlideContent(activeSlideEl);
    });

    // Initialize
    renderAllSlides();
    renderModals();
    updateViewportScale();

    // Check URL hash on load
    const hashMatch = window.location.hash.match(/#slide-(\d+)/);
    if (hashMatch) {
        const initialSlide = parseInt(hashMatch[1], 10) - 1;
        goToSlide(initialSlide);
    } else {
        goToSlide(0);
    }

    // Re-check fit once web fonts finish loading
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            const activeSlideEl = slideViewport.querySelector('.slide.active');
            fitSlideContent(activeSlideEl);
        });
    }
})();
