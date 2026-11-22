/**
 * WASHING MACHINE REPAIR SERVICES — MASTER JAVASCRIPT
 * TSCG Technologies Portfolio Demonstration
 * Pure Vanilla JavaScript — Zero Frameworks / Production Ready
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initScrollReveals();
  initBackToTop();
  initHomepageProblemSelector();
  initProjectFiltersAndModal();
  initFaqAccordion();
  initDemoForms();
  initDemoFileUpload();
});

/* --------------------------------------------------------------------------
   1. STICKY HEADER & SCROLL BEHAVIOR
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('active');
    if (isOpen) closeDrawer();
    else openDrawer();
  });

  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  // Close on nav link click
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
      toggleBtn.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   3. SCROLL REVEAL ANIMATIONS
   -------------------------------------------------------------------------- */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

/* --------------------------------------------------------------------------
   4. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   5. HOMEPAGE INTERACTIVE PROBLEM SELECTOR
   -------------------------------------------------------------------------- */
const problemData = [
  {
    id: 'power',
    num: '01',
    category: 'ELECTRICAL & CONTROLS',
    title: 'Machine Not Turning On',
    description: 'When the power button is pressed, the appliance shows no display indicators, lights or audible signals, remaining completely unresponsive.',
    causes: 'Common broad categories include power supply interruption, wall socket/breaker issues, control board failure, or safety interlock faults.',
    safeCheck: 'Safely inspect whether the wall switch is securely connected and that other small devices work on that socket. Do not touch wet cables.'
  },
  {
    id: 'spin',
    num: '02',
    category: 'DRUM & DRIVE SYSTEM',
    title: 'Drum Not Spinning',
    description: 'The machine fills with water and motor humming may be heard, but the wash drum fails to agitate or execute the high-speed extraction cycle.',
    causes: 'Potential broad causes include uneven laundry distribution, worn drive belts, motor brush depletion, or drum drive motor concerns.',
    safeCheck: 'Redistribute bulky towels or bedding evenly. Ensure the load weight is within the machine specifications.'
  },
  {
    id: 'fill',
    num: '03',
    category: 'WATER INLET SYSTEM',
    title: 'Water Not Filling',
    description: 'The wash cycle initiates, but water does not enter the drum or trickles in very slowly, causing the machine to time out or show an alert.',
    causes: 'Possible factors include closed tap valves, kinked water inlet hoses, clogged inlet filter meshes, or water inlet valve solenoid issues.',
    safeCheck: 'Verify that household water supply taps are turned on and check inlet hoses for accidental crushing or tight bends.'
  },
  {
    id: 'drain',
    num: '04',
    category: 'DRAINAGE & PUMP SYSTEM',
    title: 'Water Not Draining',
    description: 'Dirty wash water remains trapped inside the drum at the end of a cycle, preventing spinning and leaving clothes submerged.',
    causes: 'Frequently caused by foreign objects (coins, pins, lint) obstructing the drain filter, kinked drain pipes, or drain pump wear.',
    safeCheck: 'Where accessible per user manual, inspect the external coin trap filter after unplugging and placing towels to catch residual water.'
  },
  {
    id: 'wet',
    num: '05',
    category: 'SPIN EXTRACTION',
    title: 'Clothes Remaining Too Wet',
    description: 'The cycle concludes, but clothing emerges heavy and dripping wet due to inadequate spin extraction or aborted final spin cycles.',
    causes: 'Common possibilities include off-balance load protection sensors, slow drain evacuation, or motor spin speed limits.',
    safeCheck: 'Avoid single heavy items (like a single bath rug) that throw off drum balance; combine with matching items.'
  },
  {
    id: 'vibration',
    num: '06',
    category: 'STABILITY & SUSPENSION',
    title: 'Excessive Vibration & Walking',
    description: 'During spin speeds, the machine shakes vigorously, creates loud thumping or physically shifts across the laundry floor.',
    causes: 'Frequently related to uneven leveling feet, unremoved shipping transit bolts on new machines, worn suspension shock absorbers or drum bearings.',
    safeCheck: 'Press gently on opposing top corners of the machine. If it rocks, adjust leveling feet until firmly anchored to the floor.'
  },
  {
    id: 'sound',
    num: '07',
    category: 'ACOUSTICS & MECHANICAL',
    title: 'Unusual Grinding or Squealing Sounds',
    description: 'Loud metallic grinding, high-pitched screeching, or repetitive clicking occurs during agitation or high-speed rotation.',
    causes: 'Possible trapped coins between inner and outer drums, worn drum spider arms, failing tub bearings, or belt slippage.',
    safeCheck: 'Manually rotate the empty drum with the power off. Listen if a grinding sound persists without power applied.'
  },
  {
    id: 'door',
    num: '08',
    category: 'SAFETY INTERLOCK',
    title: 'Door Not Opening or Locking',
    description: 'Front-load door remains locked long after cycle completion, or top-load lid refuses to latch, preventing the cycle from starting.',
    causes: 'Often triggered by safety thermal lock cooldown delay, standing water inside the tub, broken door handle linkages, or solenoid interlocks.',
    safeCheck: 'Never force the door handle. Allow a 5-minute cooldown; verify whether water level is still visible above the bottom door seal.'
  },
  {
    id: 'error',
    num: '09',
    category: 'DIAGNOSTICS & SENSORS',
    title: 'Error Codes on Digital Display',
    description: 'The machine halts mid-program and flashes alpha-numeric codes (e.g., E10, 4E, OE, dE, F21) with repeating audio beeps.',
    causes: 'Codes represent automated sensor warnings regarding water level, heating elements, drainage timeout, or motor communication.',
    safeCheck: 'Note the exact code displayed and consult the user manual code table before requesting technician assessment.'
  },
  {
    id: 'detergent',
    num: '10',
    category: 'DISPENSER & WATER FLOW',
    title: 'Detergent Dispenser Problems',
    description: 'Detergent powder or fabric conditioner remains undissolved in the drawer, or water overflows out of the dispenser compartment.',
    causes: 'Common causes include caked detergent buildup, blocked water spray jets inside the dispenser housing, or low home water pressure.',
    safeCheck: 'Remove the dispenser drawer according to instructions, rinse under warm running water to remove congealed conditioner.'
  }
];

function initHomepageProblemSelector() {
  const container = document.querySelector('.problem-selector-wrapper');
  if (!container) return;

  const buttons = container.querySelectorAll('.problem-btn-tab');
  const catBadge = container.querySelector('#p-cat-badge');
  const numBadge = container.querySelector('#p-num-badge');
  const titleEl = container.querySelector('#p-title');
  const descEl = container.querySelector('#p-desc');
  const causesEl = container.querySelector('#p-causes');
  const safeEl = container.querySelector('#p-safe');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-problem');
      const item = problemData.find(p => p.id === targetId) || problemData[0];

      if (catBadge) catBadge.textContent = item.category;
      if (numBadge) numBadge.textContent = `ISSUE ${item.num}`;
      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.description;
      if (causesEl) causesEl.textContent = item.causes;
      if (safeEl) safeEl.textContent = item.safeCheck;
    });
  });
}

/* --------------------------------------------------------------------------
   6. PROJECTS FILTERING & DETAIL MODAL
   -------------------------------------------------------------------------- */
const projectsDatabase = [
  {
    id: 'proj-1',
    category: 'front-load',
    categoryName: 'Front Load',
    title: 'Front Load Washing Machine Inspection',
    image: 'images/washing-machine-project-front-load.jpg',
    summary: 'Illustrative demonstration project covering diagnostic inspection of drum suspension, door gasket seal integrity, and motor calibration in a modern residential utility room.',
    scope: [
      'Comprehensive external and internal vibration analysis',
      'Door bellows gasket seal and drainage flap inspection',
      'Digital tachometer verification of drum rotation speed',
      'Electronic sensor cycle calibration and baseline logging'
    ]
  },
  {
    id: 'proj-2',
    category: 'installation',
    categoryName: 'Installation',
    title: 'Modern Laundry Room Installation',
    image: 'images/washing-machine-project-laundry-room.jpg',
    summary: 'Demonstration setup of an energy-efficient front-load washing appliance within custom cabinetry, emphasizing leveling, hose isolation, and drainage routing.',
    scope: [
      'High-precision multi-axis spirit level calibration',
      'Reinforced braided water inlet connection testing',
      'Anti-siphon drain hose height and standpipe adjustment',
      'Initial calibration wash cycle and leak inspection run'
    ]
  },
  {
    id: 'proj-3',
    category: 'top-load',
    categoryName: 'Top Load',
    title: 'Top Load Machine Assessment',
    image: 'images/washing-machine-project-top-load.jpg',
    summary: 'Illustrative assessment workflow for a high-capacity top-load washing machine displaying erratic agitation and cycle timeout symptoms.',
    scope: [
      'Pulsator and agitator splines mechanical wear check',
      'Lid lock safety switch electrical continuity testing',
      'Suspension damping rod tension calibration',
      'Water level pressure sensor vacuum line verification'
    ]
  },
  {
    id: 'proj-4',
    category: 'repair',
    categoryName: 'Repair',
    title: 'Washing Machine Drainage Inspection',
    image: 'images/washing-machine-project-drainage.jpg',
    summary: 'Demonstrative diagnostic assessment addressing standing water in the drum caused by foreign debris obstruction in the drain pump chamber.',
    scope: [
      'Coin trap and lint filter debris extraction demonstration',
      'Drain pump impeller mechanical resistance testing',
      'Internal corrugated sump hose blockage check',
      'High-flow water evacuation speed verification'
    ]
  },
  {
    id: 'proj-5',
    category: 'maintenance',
    categoryName: 'Maintenance',
    title: 'Appliance Maintenance Concept',
    image: 'images/washing-machine-project-maintenance.jpg',
    summary: 'Comprehensive multi-point preventive maintenance protocol demonstration designed to preserve washing machine performance and hygienic standards.',
    scope: [
      'High-temperature drum sanitation and descaling review',
      'Detergent dispenser siphon and jet chamber cleaning',
      'Inlet valve mesh filter sediment clearance',
      'Electrical ground continuity and power cord visual check'
    ]
  },
  {
    id: 'proj-6',
    category: 'top-load',
    categoryName: 'Semi-Automatic',
    title: 'Semi-Automatic Machine Service',
    image: 'images/washing-machine-project-semi-automatic.jpg',
    summary: 'Demonstration evaluation of a dual-tub semi-automatic washing machine addressing spin tub brake disengagement and wash timer functionality.',
    scope: [
      'Spin tub mechanical brake cable adjustment',
      'Wash and spin motor capacitor capacitance check',
      'Two-way gravity drain valve seal cleaning',
      'Vibration damping foot calibration'
    ]
  },
  {
    id: 'proj-7',
    category: 'installation',
    categoryName: 'Installation',
    title: 'Washing Machine Setup & Calibration',
    image: 'images/washing-machine-project-installation.jpg',
    summary: 'Step-by-step showcase of safe appliance positioning, transit bolt extraction, and vibration isolation for apartment laundry areas.',
    scope: [
      'Transit bolt and spacer extraction verification',
      'Anti-vibration acoustic rubber foot pad positioning',
      'Water supply pressure regulator compatibility review',
      'Cold/hot inlet polarity cross-check'
    ]
  },
  {
    id: 'proj-8',
    category: 'front-load',
    categoryName: 'Washer-Dryer',
    title: 'Washer-Dryer Inspection Concept',
    image: 'images/washing-machine-project-washer-dryer.jpg',
    summary: 'Specialized demonstration inspection of an all-in-one washer-dryer combination appliance evaluating condenser airflow and drying efficiency.',
    scope: [
      'Condenser coil and air blower duct lint check',
      'Heating element safety thermostat resistance testing',
      'Moisture sensor contact cleaning and inspection',
      'Dual-function cycle transition diagnostic evaluation'
    ]
  }
];

function initProjectFiltersAndModal() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-item');

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal Functionality
  const modalOverlay = document.querySelector('#project-detail-modal');
  if (!modalOverlay) return;

  const modalImg = modalOverlay.querySelector('#modal-img');
  const modalCategory = modalOverlay.querySelector('#modal-category');
  const modalTitle = modalOverlay.querySelector('#modal-title');
  const modalDesc = modalOverlay.querySelector('#modal-desc');
  const modalScopeList = modalOverlay.querySelector('#modal-scope-list');
  const closeBtn = modalOverlay.querySelector('.modal-close-btn');

  let lastActiveElement = null;

  const openModal = (proj) => {
    lastActiveElement = document.activeElement;
    if (modalImg) {
      modalImg.src = proj.image;
      modalImg.alt = proj.title;
    }
    if (modalCategory) modalCategory.textContent = proj.categoryName;
    if (modalTitle) modalTitle.textContent = proj.title;
    if (modalDesc) modalDesc.textContent = proj.summary;

    if (modalScopeList) {
      modalScopeList.innerHTML = '';
      proj.scope.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        modalScopeList.appendChild(li);
      });
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (lastActiveElement) lastActiveElement.focus();
  };

  document.querySelectorAll('.open-project-modal').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = trigger.getAttribute('data-project-id');
      const proj = projectsDatabase.find(p => p.id === projId);
      if (proj) openModal(proj);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   7. FAQ ACCORDION (SERVICES PAGE)
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');

    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          const otherPanel = otherItem.querySelector('.faq-panel');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });

      if (isActive) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. DEMO FORMS VALIDATION & INTERACTIVE CONFIRMATION
   -------------------------------------------------------------------------- */
function initDemoForms() {
  const forms = document.querySelectorAll('.demo-service-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;
      const requiredInputs = form.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        const value = input.value.trim();
        const errorMsg = input.nextElementSibling;

        if (!value) {
          input.classList.add('error');
          if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.style.display = 'block';
          }
          hasError = true;
        } else {
          // Additional field validations
          if (input.type === 'email' && !isValidEmail(value)) {
            input.classList.add('error');
            hasError = true;
          } else if (input.type === 'tel' && !isValidPhone(value)) {
            input.classList.add('error');
            hasError = true;
          } else {
            input.classList.remove('error');
            if (errorMsg && errorMsg.classList.contains('error-message')) {
              errorMsg.style.display = 'none';
            }
          }
        }
      });

      if (hasError) return;

      // Simulate loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon" style="animation: spin 1s linear infinite;">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10"></path>
          </svg> Processing Enquiry...
        `;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        const toast = form.querySelector('.demo-submit-toast');
        if (toast) {
          toast.classList.add('show');
          toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Clear input values safely
        form.reset();

        // Reset file preview pill if present
        const previewPill = form.querySelector('.file-preview-pill');
        if (previewPill) previewPill.style.display = 'none';

      }, 1000);
    });

    // Clear error on input typing
    form.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const errorMsg = input.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('error-message')) {
          errorMsg.style.display = 'none';
        }
      });
    });
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[0-9+\s\-()]{7,15}$/.test(phone);
}

/* --------------------------------------------------------------------------
   9. DEMO FILE UPLOAD SIMULATOR (FRONTEND ONLY)
   -------------------------------------------------------------------------- */
function initDemoFileUpload() {
  const fileDropzones = document.querySelectorAll('.file-upload-box');

  fileDropzones.forEach(dropzone => {
    const input = dropzone.querySelector('.file-upload-input');
    const previewPill = dropzone.parentElement.querySelector('.file-preview-pill');
    const fileNameSpan = previewPill ? previewPill.querySelector('.file-name-text') : null;
    const removeBtn = previewPill ? previewPill.querySelector('.remove-file-btn') : null;

    if (!input) return;

    input.addEventListener('change', () => {
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        if (fileNameSpan && previewPill) {
          fileNameSpan.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
          previewPill.style.display = 'flex';
        }
      }
    });

    if (removeBtn && previewPill) {
      removeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        input.value = '';
        previewPill.style.display = 'none';
      });
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      }, false);
    });
  });
}
