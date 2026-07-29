/* ==========================================================================
   Antigravity PPT - Formal Clean Presentation Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const totalSlides = (typeof slidesData !== 'undefined') ? slidesData.length : 0;
  if (totalSlides === 0) return;

  // DOM Elements
  const slideContent = document.getElementById('slideContent');
  const slideTag = document.getElementById('slideTag');
  const slideCategory = document.getElementById('slideCategory');
  const slideNumBadge = document.getElementById('slideNumBadge');
  const slideTitle = document.getElementById('slideTitle');
  const slideSubtitle = document.getElementById('slideSubtitle');
  const slideTitleBlock = document.getElementById('slideTitleBlock');

  const currentNumEl = document.getElementById('currentNum');
  const totalNumEl = document.getElementById('totalNum');
  const progressFill = document.getElementById('progressFill');
  const progressTrack = document.getElementById('progressTrack');

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const gridBtn = document.getElementById('gridBtn');

  const gridModal = document.getElementById('gridModal');
  const gridModalBody = document.getElementById('gridModalBody');
  const closeGridBtn = document.getElementById('closeGridBtn');

  if (totalNumEl) totalNumEl.textContent = totalSlides;

  // Render Slide Function
  function renderSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentIndex = index;

    const data = slidesData[currentIndex];

    // Header metadata with safety checks
    if (slideTag) slideTag.textContent = data.tag || `Slide ${data.slideNumber}`;
    if (slideCategory) slideCategory.textContent = "Enterprise and Venture Creation (EVC)";
    if (slideNumBadge) slideNumBadge.textContent = `${data.slideNumber} / ${totalSlides}`;
    if (currentNumEl) currentNumEl.textContent = data.slideNumber;

    // Progress bar
    if (progressFill) {
      const percentage = ((currentIndex + 1) / totalSlides) * 100;
      progressFill.style.width = `${percentage}%`;
    }

    // Title / Subtitle
    if (slideTitleBlock) {
      if (data.layout === 'title_exact') {
        slideTitleBlock.style.display = 'none';
      } else {
        slideTitleBlock.style.display = 'block';
        if (slideTitle) slideTitle.textContent = data.title;
        if (slideSubtitle) slideSubtitle.textContent = data.subtitle || '';
      }
    }

    // Render HTML Layout
    if (slideContent) {
      slideContent.innerHTML = '';
      slideContent.className = 'slide-content slide-enter';
      slideContent.innerHTML = generateLayoutHTML(data);
    }

    updateGridHighlights();
  }

  // Layout Builder Engine
  function generateLayoutHTML(data) {
    switch (data.layout) {
      case 'title_exact':
        return `
          <div class="layout-title">
            <div class="main-logo-box">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
            </div>
            <div class="title-badge">${data.subtitle}</div>
            <h1>${data.title}</h1>
            <p class="subtitle">Fueling Innovation & Scaling High-Growth Startups</p>
          </div>
        `;

      case 'intro_exact':
        return `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; height: 100%;">
            <div class="trio-card" style="padding: 14px; gap: 6px; background: #EFF6FF; border: 1.5px solid #BFDBFE;">
              <h3 style="font-size: 16px; font-weight: 800; color: #1E3A8A; border-bottom: 2px solid #BFDBFE; padding-bottom: 4px;">Introduction</h3>
              ${data.introText.map(t => `<p style="font-size: 13.5px; color: #0F172A; line-height: 1.45; margin-bottom: 4px; font-weight: 600;">${t}</p>`).join('')}
              
              <h3 style="font-size: 16px; font-weight: 800; color: #1E3A8A; border-bottom: 2px solid #BFDBFE; padding-bottom: 4px; margin-top: 6px;">What is Venture Capital?</h3>
              ${data.whatIsVC.map(t => `<p style="font-size: 13px; color: #0F172A; line-height: 1.4; margin-bottom: 3px;">• ${t}</p>`).join('')}
            </div>

            <div class="trio-card" style="padding: 14px; gap: 6px; background: #FFF1F2; border: 1.5px solid #FECDD3;">
              <h3 style="font-size: 16px; font-weight: 800; color: #9F1239; border-bottom: 2px solid #FECDD3; padding-bottom: 4px;">Who is a Venture Capitalist?</h3>
              <p style="font-size: 13.5px; color: #0F172A; font-weight: 700;">${data.whoIsVC.def}</p>
              <div style="margin-top: 2px;">
                <span style="font-size: 12.5px; font-weight: 800; color: #9F1239;">Apart from money, they also provide:</span>
                ${data.whoIsVC.points.map(p => `<div style="font-size: 12.5px; color: #0F172A; margin-left: 8px; font-weight: 600;">• ${p}</div>`).join('')}
              </div>

              <h3 style="font-size: 16px; font-weight: 800; color: #9F1239; border-bottom: 2px solid #FECDD3; padding-bottom: 4px; margin-top: 6px;">History of Venture Capital</h3>
              ${data.historyText.map(h => `<p style="font-size: 12.5px; color: #0F172A; line-height: 1.35; margin-bottom: 2px;">• ${h}</p>`).join('')}
            </div>
          </div>
        `;

      case 'need_features_exact':
        return `
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; height: 100%;">
            <div class="trio-card" style="padding: 14px; gap: 6px; background: #FFF1F2; border: 1.5px solid #FECDD3;">
              <h3 style="font-size: 16px; font-weight: 800; color: #9F1239; border-bottom: 2px solid #FECDD3; padding-bottom: 4px;">Why is Venture Capital Needed?</h3>
              <p style="font-size: 13px; font-weight: 800; color: #0F172A;">${data.whyNeeded.intro}</p>
              ${data.whyNeeded.problems.map(p => `<div style="font-size: 13px; color: #9F1239; margin-left: 6px; font-weight: 700;">• ${p}</div>`).join('')}
              <p style="font-size: 12.5px; color: #0F172A; margin-top: 6px; line-height: 1.4; font-weight: 600;">${data.whyNeeded.solution}</p>
            </div>

            <div class="trio-card" style="padding: 14px; gap: 6px; background: #EFF6FF; border: 1.5px solid #BFDBFE;">
              <h3 style="font-size: 16px; font-weight: 800; color: #1E3A8A; border-bottom: 2px solid #BFDBFE; padding-bottom: 4px;">Features of Venture Capital</h3>
              ${data.features.map(f => `<div style="font-size: 13px; color: #0F172A; margin-bottom: 4px; line-height: 1.35; font-weight: 600;">• ${f}</div>`).join('')}
            </div>

            <div class="trio-card" style="padding: 14px; gap: 6px; background: #F0FDF4; border: 1.5px solid #BBF7D0;">
              <h3 style="font-size: 16px; font-weight: 800; color: #166534; border-bottom: 2px solid #BBF7D0; padding-bottom: 4px;">Objectives of Venture Capital</h3>
              ${data.objectives.map(o => `<div style="font-size: 13px; color: #0F172A; margin-bottom: 4px; line-height: 1.35; font-weight: 600;">• ${o}</div>`).join('')}
            </div>
          </div>
        `;

      case 'process_exact':
        const pastelColors = ['#EFF6FF', '#F0FDF4', '#FFF1F2', '#EFF6FF', '#F0FDF4', '#FFF1F2', '#EFF6FF'];
        const borderColors = ['#BFDBFE', '#BBF7D0', '#FECDD3', '#BFDBFE', '#BBF7D0', '#FECDD3', '#BFDBFE'];
        return `
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <p style="font-size: 14.5px; font-weight: 800; color: var(--primary-blue);">${data.intro}</p>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
              ${data.steps.map((s, idx) => `
                <div class="flow-step" style="padding: 10px; background: ${pastelColors[idx]}; border: 1.5px solid ${borderColors[idx]}; border-top: 5px solid var(--primary-blue);">
                  <h4 style="font-size: 13.5px; font-weight: 800; color: var(--text-main); margin-bottom: 2px;">${s.step}</h4>
                  <p style="font-size: 12px; color: var(--text-main); line-height: 1.35; font-weight: 600;">${s.desc}</p>
                  ${s.points ? `<div style="margin-top: 4px;">${s.points.map(p => `<div style="font-size: 11px; color: var(--text-muted); font-weight: 700;">• ${p}</div>`).join('')}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 'stages_exact':
        return `
          <div style="display: grid; grid-template-columns: 1.1fr 1fr; gap: 16px;">
            <div class="trio-card" style="padding: 14px; background: #EFF6FF; border: 1.5px solid #BFDBFE;">
              <h3 style="font-size: 16px; font-weight: 800; color: #1E3A8A; margin-bottom: 8px;">Funding Stages</h3>
              <div style="display: flex; flex-direction: column; gap: 6px;">
                ${data.stages.map(st => `
                  <div style="background: #FFF; padding: 6px 10px; border-radius: 6px; border-left: 4px solid var(--primary-blue); box-shadow: var(--shadow-sm);">
                    <strong style="font-size: 13px; color: var(--text-main);">${st.name}:</strong> 
                    <span style="font-size: 12.5px; color: var(--text-muted); font-weight: 600;">${st.desc}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="trio-card" style="padding: 14px;">
              <h3 style="font-size: 16px; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">Venture Capital vs Angel Investor</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div style="background: #FFF1F2; padding: 10px; border-radius: 8px; border: 1.5px solid #FECDD3;">
                  <h4 style="font-size: 13.5px; font-weight: 800; color: #9F1239; margin-bottom: 6px;">Angel Investor</h4>
                  ${data.vsAngel.angel.map(item => `<div style="font-size: 12.5px; color: #0F172A; margin-bottom: 4px; font-weight: 600;">• ${item}</div>`).join('')}
                </div>
                <div style="background: #F0FDF4; padding: 10px; border-radius: 8px; border: 1.5px solid #BBF7D0;">
                  <h4 style="font-size: 13.5px; font-weight: 800; color: #166534; margin-bottom: 6px;">Venture Capitalist</h4>
                  ${data.vsAngel.vc.map(item => `<div style="font-size: 12.5px; color: #0F172A; margin-bottom: 4px; font-weight: 600;">• ${item}</div>`).join('')}
                </div>
              </div>
            </div>
          </div>
        `;

      case 'risks_exact':
        return `
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div class="trio-card" style="padding: 10px;">
              <h3 style="font-size: 15px; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">Venture Capital vs Bank Loan</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div style="background: #EFF6FF; padding: 8px 12px; border-radius: 6px; border: 1px solid #BFDBFE;">
                  <h4 style="font-size: 13px; font-weight: 800; color: #1E3A8A;">Venture Capital</h4>
                  <div style="font-size: 12px; font-weight: 600; color: #0F172A;">• ${data.table[0].val1} • ${data.table[0].val2} • ${data.table[0].val3} • ${data.table[0].val4}</div>
                </div>
                <div style="background: #FFF1F2; padding: 8px 12px; border-radius: 6px; border: 1px solid #FECDD3;">
                  <h4 style="font-size: 13px; font-weight: 800; color: #9F1239;">Bank Loan</h4>
                  <div style="font-size: 12px; font-weight: 600; color: #0F172A;">• ${data.table[1].val1} • ${data.table[1].val2} • ${data.table[1].val3} • ${data.table[1].val4}</div>
                </div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div style="background: #FFF1F2; border: 1.5px solid #FECDD3; border-radius: 8px; padding: 10px;">
                <h4 style="font-size: 14px; font-weight: 800; color: #9F1239; margin-bottom: 4px;">Risks</h4>
                <div style="font-size: 12px; color: #0F172A; font-weight: 600;"><strong>For Investors:</strong> ${data.risks.investors.join(' • ')}</div>
                <div style="font-size: 12px; color: #0F172A; margin-top: 4px; font-weight: 600;"><strong>For Entrepreneurs:</strong> ${data.risks.entrepreneurs.join(' • ')}</div>
              </div>

              <div style="background: #FFF1F2; border: 1.5px solid #FECDD3; border-radius: 8px; padding: 10px;">
                <h4 style="font-size: 14px; font-weight: 800; color: #9F1239; margin-bottom: 4px;">What Happens if a Startup Fails?</h4>
                <p style="font-size: 11.5px; font-weight: 800; color: #9F1239;">${data.failure.intro}</p>
                ${data.failure.points.map(f => `<div style="font-size: 11.5px; color: #0F172A; margin-top: 2px; font-weight: 600;">• ${f}</div>`).join('')}
              </div>
            </div>
          </div>
        `;

      case 'india_exact':
        return `
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <p style="font-size: 14px; font-weight: 700; color: var(--primary-blue);">${data.subtitle}</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div class="trio-card" style="padding: 10px; background: #F0FDF4; border: 1.5px solid #BBF7D0;">
                <h4 style="font-size: 14px; font-weight: 800; color: #166534;">Government Initiatives</h4>
                ${data.govt.map(g => `<div style="font-size: 12.5px; color: #0F172A; margin-top: 2px; font-weight: 600;">• ${g}</div>`).join('')}

                <h4 style="font-size: 14px; font-weight: 800; color: #166534; margin-top: 8px;">Major Investment Sectors</h4>
                <div style="font-size: 12px; font-weight: 700; color: #0F172A;">${data.sectors.join(' • ')}</div>
              </div>

              <div class="trio-card" style="padding: 10px; background: #EFF6FF; border: 1.5px solid #BFDBFE;">
                <h4 style="font-size: 14px; font-weight: 800; color: #1E3A8A;">Top Venture Capital Firms</h4>
                <div style="font-size: 12.5px; color: #0F172A; margin-bottom: 6px; font-weight: 600;">${data.topVCs.join(' • ')}</div>

                <h4 style="font-size: 14px; font-weight: 800; color: #1E3A8A; margin-top: 6px;">Famous Indian Startups Funded by VC</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px;">
                  ${data.famousStartups.map(s => `<span style="background: #FFF; color: #1E3A8A; font-weight: 800; font-size: 12px; padding: 4px 10px; border-radius: 6px; border: 1.5px solid #BFDBFE;">${s}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        `;

      case 'case_realtime':
        return `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; height: 100%;">
            <div class="trio-card" style="padding: 14px; gap: 8px; background: #EFF6FF; border: 1.5px solid #BFDBFE;">
              <h3 style="font-size: 16px; font-weight: 800; color: #1E3A8A; border-bottom: 2px solid #BFDBFE; padding-bottom: 4px;">1. Real-Life Conceptual Example</h3>
              ${data.farmingExample.map((p, idx) => `
                <div style="background: ${idx === 4 ? '#DCFCE7' : '#FFF'}; border-left: 4px solid ${idx === 4 ? '#166534' : 'var(--primary-blue)'}; padding: 6px 10px; border-radius: 6px; box-shadow: var(--shadow-sm);">
                  <p style="font-size: 12.5px; color: ${idx === 4 ? '#14532D' : 'var(--text-main)'}; font-weight: ${idx === 4 ? '800' : '600'}; line-height: 1.35;">• ${p}</p>
                </div>
              `).join('')}
            </div>

            <div class="trio-card" style="padding: 14px; gap: 8px; background: #F0FDF4; border: 1.5px solid #BBF7D0;">
              <h3 style="font-size: 16px; font-weight: 800; color: #166534; border-bottom: 2px solid #BBF7D0; padding-bottom: 4px;">2. ${data.realCompanyExample.name}</h3>
              ${data.realCompanyExample.points.map((pt, idx) => `
                <div style="background: #FFF; padding: 8px 10px; border-radius: 6px; box-shadow: var(--shadow-sm);">
                  <p style="font-size: 12.5px; color: var(--text-main); line-height: 1.4; font-weight: ${idx === 3 ? '800' : '600'};">★ ${pt}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 'conclusion_exact':
        return `
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div style="background: #F0FDF4; border: 1.5px solid #BBF7D0; border-radius: 8px; padding: 10px;">
                <h4 style="font-size: 14px; font-weight: 800; color: #166534; margin-bottom: 4px;">Advantages</h4>
                ${data.advantages.map(a => `<div style="font-size: 12.5px; color: #14532D; margin-bottom: 2px; font-weight: 600;">• ${a}</div>`).join('')}
              </div>

              <div style="background: #FFF1F2; border: 1.5px solid #FECDD3; border-radius: 8px; padding: 10px;">
                <h4 style="font-size: 14px; font-weight: 800; color: #9F1239; margin-bottom: 4px;">Disadvantages</h4>
                ${data.disadvantages.map(d => `<div style="font-size: 12.5px; color: #881337; margin-bottom: 2px; font-weight: 600;">• ${d}</div>`).join('')}
              </div>
            </div>

            <div style="background: #EFF6FF; border: 1.5px solid #BFDBFE; color: #0F172A; padding: 18px; border-radius: 12px; text-align: center; box-shadow: var(--shadow-sm);">
              <h3 style="color: #1D4ED8; font-size: 19px; font-weight: 800; margin-bottom: 6px;">Conclusion</h3>
              <p style="font-size: 13.5px; line-height: 1.55; color: #0F172A; font-weight: 600;">${data.conclusionText}</p>
              <div style="margin-top: 10px; font-size: 20px; font-weight: 800; color: #15803D;">${data.thankYou}</div>
            </div>
          </div>
        `;

      default:
        return `<p>Slide layout unavailable</p>`;
    }
  }

  // Navigation Logic
  function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      renderSlide(index);
    }
  }

  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      renderSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      renderSlide(currentIndex - 1);
    }
  }

  function toggleGrid() {
    if (!gridModal) return;
    const isGridOpen = gridModal.classList.contains('open');
    gridModal.classList.toggle('open', !isGridOpen);
    if (gridBtn) gridBtn.classList.toggle('active', !isGridOpen);
    if (!isGridOpen) renderGridModal();
  }

  function renderGridModal() {
    if (!gridModalBody) return;
    gridModalBody.innerHTML = '';
    slidesData.forEach((s, idx) => {
      const card = document.createElement('div');
      card.className = `thumb-card ${idx === currentIndex ? 'active' : ''}`;
      card.innerHTML = `
        <div class="thumb-num">SLIDE ${s.slideNumber}</div>
        <div class="thumb-title">${s.title}</div>
      `;
      card.addEventListener('click', () => {
        goToSlide(idx);
        toggleGrid();
      });
      gridModalBody.appendChild(card);
    });
  }

  function updateGridHighlights() {
    if (!gridModalBody) return;
    const cards = gridModalBody.querySelectorAll('.thumb-card');
    cards.forEach((card, idx) => {
      card.classList.toggle('active', idx === currentIndex);
    });
  }

  // Keyboard Shortcuts Handler
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case 'Space':
      case 'PageDown':
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        prevSlide();
        break;
      case 'Home':
        goToSlide(0);
        break;
      case 'End':
        goToSlide(totalSlides - 1);
        break;
      case 'g':
      case 'G':
        toggleGrid();
        break;
      case 'Escape':
        if (gridModal) gridModal.classList.remove('open');
        if (gridBtn) gridBtn.classList.remove('active');
        break;
    }
  });

  // Touch Swipe Gesture Support
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
  }

  // Progress Bar Click Handler
  if (progressTrack) {
    progressTrack.addEventListener('click', (e) => {
      const rect = progressTrack.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const targetIndex = Math.floor(percentage * totalSlides);
      goToSlide(targetIndex);
    });
  }

  // Event Listeners for Control Buttons
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (gridBtn) gridBtn.addEventListener('click', toggleGrid);
  if (closeGridBtn) closeGridBtn.addEventListener('click', toggleGrid);

  // Initialize Presentation at Slide 1
  renderSlide(0);
});
