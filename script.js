/**
 * NOVA — Smart Productivity Hub
 * Master Script (script.js)
 * Task 3: Product Landing Page | Cognetix Technology Internship
 * Author: Tejaswini Rakhunde (GitHub: Tejaswini-2006)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Header & Mobile Navigation Toggle
     -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Header Blur on Scroll
  const handleScrollHeader = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollHeader, { passive: true });
  handleScrollHeader();

  // Mobile Menu Toggle Functionality
  const toggleMobileMenu = (forceClose = false) => {
    const isCurrentlyOpen = navMenu.classList.contains('open');
    const shouldOpen = forceClose ? false : !isCurrentlyOpen;

    navMenu.classList.toggle('open', shouldOpen);
    mobileToggle.classList.toggle('active', shouldOpen);
    mobileToggle.setAttribute('aria-expanded', String(shouldOpen));

    if (shouldOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  // Close mobile menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMobileMenu(true);
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !mobileToggle.contains(e.target)
    ) {
      toggleMobileMenu(true);
    }
  });

  /* --------------------------------------------------------------------------
     2. Active Navigation Link Highlighting on Scroll
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id], footer[id]');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  /* --------------------------------------------------------------------------
     3. Smooth Scrolling for Internal Links
     -------------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* --------------------------------------------------------------------------
     4. Interactive Hero Focus Timer
     -------------------------------------------------------------------------- */
  const timerDisplay = document.getElementById('focusTimerDisplay');
  const timerToggleBtn = document.getElementById('timerToggleBtn');
  const timerBtnText = document.getElementById('timerBtnText');
  const timerResetBtn = document.getElementById('timerResetBtn');

  const INITIAL_SECONDS = 25 * 60; // 25 Minutes
  let remainingSeconds = INITIAL_SECONDS;
  let timerInterval = null;
  let isTimerRunning = false;

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  // Web Audio API Gentle Chime Generator (No external MP3 needed!)
  const playFocusChime = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3); // A5

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch (err) {
      // AudioContext silently handled if browser prevents autoplay
    }
  };

  const updateTimer = () => {
    if (remainingSeconds > 0) {
      remainingSeconds--;
      timerDisplay.textContent = formatTime(remainingSeconds);
    } else {
      clearInterval(timerInterval);
      isTimerRunning = false;
      timerBtnText.textContent = 'Start Focus';
      playFocusChime();
      showToast('🎉 Focus block complete! Take a well-deserved 5-minute break.', '🏆');
    }
  };

  if (timerToggleBtn) {
    timerToggleBtn.addEventListener('click', () => {
      if (isTimerRunning) {
        // Pause timer
        clearInterval(timerInterval);
        isTimerRunning = false;
        timerBtnText.textContent = 'Resume Focus';
        showToast('⏸️ Focus timer paused.', '⏱️');
      } else {
        // Start/resume timer
        if (remainingSeconds === 0) {
          remainingSeconds = INITIAL_SECONDS;
        }
        timerInterval = setInterval(updateTimer, 1000);
        isTimerRunning = true;
        timerBtnText.textContent = 'Pause Focus';
        showToast('🚀 Focus session running! Stay in flow.', '⚡');
      }
    });
  }

  if (timerResetBtn) {
    timerResetBtn.addEventListener('click', () => {
      clearInterval(timerInterval);
      isTimerRunning = false;
      remainingSeconds = INITIAL_SECONDS;
      timerDisplay.textContent = formatTime(remainingSeconds);
      if (timerBtnText) timerBtnText.textContent = 'Start Focus';
      showToast('Focus timer reset to 25:00.', '🔄');
    });
  }

  /* --------------------------------------------------------------------------
     5. Interactive Task Checklist in Hero
     -------------------------------------------------------------------------- */
  const taskCheckboxes = document.querySelectorAll('.task-checkbox');
  const taskCounter = document.getElementById('completedTaskCounter');

  const updateTaskProgress = () => {
    const total = taskCheckboxes.length;
    let completed = 0;

    taskCheckboxes.forEach(cb => {
      if (cb.checked) completed++;
    });

    if (taskCounter) {
      taskCounter.textContent = `${completed} of ${total} Done`;
    }

    if (completed === total && total > 0) {
      showToast('🌟 All sprint tasks completed! Great productivity sprint!', '🔥');
    }
  };

  taskCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateTaskProgress);
  });

  /* --------------------------------------------------------------------------
     6. Features Category Filter Tabs
     -------------------------------------------------------------------------- */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const featureCards = document.querySelectorAll('.feature-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterValue = tab.getAttribute('data-filter');

      featureCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     7. Interactive "Get Started" / Workspace Modal Dialog
     -------------------------------------------------------------------------- */
  const demoModal = document.getElementById('demoModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalFormStep = document.getElementById('modalFormStep');
  const modalSuccessStep = document.getElementById('modalSuccessStep');
  const signupDemoForm = document.getElementById('signupDemoForm');
  const modalFullName = document.getElementById('modalFullName');
  const modalEmail = document.getElementById('modalEmail');
  const modalNameError = document.getElementById('modalNameError');
  const modalEmailError = document.getElementById('modalEmailError');
  const modalFinishBtn = document.getElementById('modalFinishBtn');
  const mockWorkspaceName = document.getElementById('mockWorkspaceName');

  // Trigger buttons across the site
  const ctaTriggers = [
    document.getElementById('navGetStartedBtn'),
    document.getElementById('mobileGetStartedBtn'),
    document.getElementById('heroGetStartedBtn'),
    document.getElementById('ctaStartBtn')
  ];

  const openModal = () => {
    if (!demoModal) return;
    demoModal.classList.add('active');
    demoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Reset steps
    modalFormStep.classList.remove('hidden');
    modalSuccessStep.classList.add('hidden');
    modalNameError.textContent = '';
    modalEmailError.textContent = '';

    setTimeout(() => {
      if (modalFullName) modalFullName.focus();
    }, 150);
  };

  const closeModal = () => {
    if (!demoModal) return;
    demoModal.classList.remove('active');
    demoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  ctaTriggers.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    }
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  // Close on backdrop click
  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) closeModal();
    });
  }

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (demoModal && demoModal.classList.contains('active')) closeModal();
      if (navMenu && navMenu.classList.contains('open')) toggleMobileMenu(true);
    }
  });

  // Modal Form Submission
  if (signupDemoForm) {
    signupDemoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      const nameVal = modalFullName.value.trim();
      const emailVal = modalEmail.value.trim();

      modalNameError.textContent = '';
      modalEmailError.textContent = '';

      if (!nameVal) {
        modalNameError.textContent = 'Please enter your full name.';
        hasError = true;
      }

      if (!emailVal) {
        modalEmailError.textContent = 'Please enter your work email.';
        hasError = true;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        modalEmailError.textContent = 'Please enter a valid email address.';
        hasError = true;
      }

      if (hasError) return;

      // Generate mock workspace name
      const cleanSlug = nameVal.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
      if (mockWorkspaceName) {
        mockWorkspaceName.textContent = `${cleanSlug}-workspace.nova-hub.com`;
      }

      // Transition to success step
      modalFormStep.classList.add('hidden');
      modalSuccessStep.classList.remove('hidden');

      showToast(`Welcome aboard, ${nameVal}! 14-day Pro trial activated.`, '✨');
    });
  }

  if (modalFinishBtn) {
    modalFinishBtn.addEventListener('click', () => {
      closeModal();
      showToast('🚀 Interactive Workspace loaded! Feel free to test all features.', '⚡');
    });
  }

  /* --------------------------------------------------------------------------
     8. Contact Form Validation & Submission
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const contactName = document.getElementById('contactName');
  const contactEmail = document.getElementById('contactEmail');
  const contactMessage = document.getElementById('contactMessage');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const contactSubmitBtn = document.getElementById('contactSubmitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';

      const name = contactName.value.trim();
      const email = contactEmail.value.trim();
      const message = contactMessage.value.trim();

      if (!name) {
        nameError.textContent = 'Please provide your full name.';
        isValid = false;
      }

      if (!email) {
        emailError.textContent = 'Please provide your email address.';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      if (!message) {
        messageError.textContent = 'Please enter your message.';
        isValid = false;
      } else if (message.length < 10) {
        messageError.textContent = 'Message should be at least 10 characters long.';
        isValid = false;
      }

      if (!isValid) return;

      // Button loading indicator
      const originalBtnHTML = contactSubmitBtn.innerHTML;
      contactSubmitBtn.disabled = true;
      contactSubmitBtn.innerHTML = `
        <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke="#ffffff"></path>
        </svg>
        <span>Sending Message...</span>
      `;

      // Simulate network request
      setTimeout(() => {
        contactSubmitBtn.disabled = false;
        contactSubmitBtn.innerHTML = originalBtnHTML;
        contactForm.reset();
        showToast(`Thank you, ${name}! Your inquiry has been dispatched to the NOVA team.`, '📬');
      }, 900);
    });
  }

  /* --------------------------------------------------------------------------
     9. Scroll Reveal Animations (IntersectionObserver)
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* --------------------------------------------------------------------------
     10. Dynamic Copyright Year
     -------------------------------------------------------------------------- */
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------------------------------
     11. Back to Top Button
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     12. Reusable Toast Notification System
     -------------------------------------------------------------------------- */
  const toastContainer = document.getElementById('toastContainer');

  window.showToast = (message, icon = '✨', duration = 4000) => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');

    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode === toastContainer) {
          toastContainer.removeChild(toast);
        }
      }, 300);
    }, duration);
  };
});
