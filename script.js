/**
 * ECOVIBE — Conscious Living. Timeless Luxury.
 * Master Script (script.js)
 * Task 3: Product Landing Page | Cognetix Technology Internship
 * Author: Tejaswini Rakhunde (GitHub: Tejaswini-2006)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Product Catalog Data (Fictional Demonstration)
     -------------------------------------------------------------------------- */
  const PRODUCTS_DATA = {
    tote: {
      id: 'tote',
      title: 'The Everyday Tote',
      category: 'Bags & Carry',
      price: 3450,
      image: 'assets/images/product-tote.jpg',
      tag: 'Bestseller',
      desc: 'Meticulously crafted from heavyweight 16oz raw unbleached organic cotton canvas. Features hand-stitched vegetable-tanned leather shoulder straps and an interior structured laptop sleeve.',
      specs: [
        '100% GOTS-Certified Unbleached Organic Cotton',
        'Vegetable-tanned full-grain leather straps (repairable)',
        'Interior padded compartment fits up to 15" laptops',
        'Reinforced double-layered bottom panel for heirloom durability',
        'Dimensions: 42cm (W) x 36cm (H) x 14cm (D)'
      ],
      care: 'Spot clean with cool water and mild organic soap. Condition leather straps annually.'
    },
    bottle: {
      id: 'bottle',
      title: 'The Solstice Bottle',
      category: 'Drinkware',
      price: 2850,
      image: 'assets/images/product-bottle.jpg',
      tag: 'New Edition',
      desc: 'Double-wall thermal borosilicate glass vessel designed for mindful hydration. Complete with a soft-touch matte sage silicone protective sleeve and a brushed champagne brass leak-proof cap.',
      specs: [
        'Pure borosilicate glass (thermal shock resistant -20°C to 120°C)',
        'Food-grade matte silicone non-slip sleeve',
        'Precision-milled brass cap with food-safe silicone hermetic seal',
        '100% plastic-free liquid contact zone',
        'Capacity: 650ml / 22 oz'
      ],
      care: 'Glass body is dishwasher safe. Hand wash brass cap with warm water and dry thoroughly.'
    },
    terra: {
      id: 'terra',
      title: 'The Terra Home Set',
      category: 'Home & Ritual',
      price: 4200,
      image: 'assets/images/product-terra.jpg',
      tag: 'Artisanal',
      desc: 'Hand-thrown speckled stoneware ceramic incense bowl paired with a refillable natural soy wax candle vessel scented with pure bergamot, cedarwood, and vetiver essential oils.',
      specs: [
        'Wheel-thrown by master potters using natural mineral-rich clay',
        'Non-toxic matte mineral glazes fired at high temperatures',
        '100% domestic soy wax with unbleached organic cotton wick',
        '55+ hours clean burn time; ceramic vessel is endlessly reusable',
        'Includes brass incense needle and 15 organic herbal incense sticks'
      ],
      care: 'After candle depletion, wash with warm soapy water to reuse vessel as an espresso cup or planter.'
    },
    travel: {
      id: 'travel',
      title: 'The Ritual Travel Kit',
      category: 'Home & Travel',
      price: 2950,
      image: 'assets/images/product-travel.jpg',
      tag: 'Zero Waste',
      desc: 'An unhurried zero-waste travel companion. Roll-up natural organic linen pouch containing hand-carved bamboo dining cutlery, natural wooden toothbrush, washable cotton facial rounds, and travel glass vials.',
      specs: [
        'Raw organic flax linen roll with brass clasp closure',
        '4-piece hand-carved sustainable bamboo cutlery set',
        'Natural beechwood toothbrush with bio-based castor oil bristles',
        '4-pack triple-layered reusable organic cotton rounds',
        'Compact travel profile: 22cm x 7cm rolled'
      ],
      care: 'Machine wash linen pouch and cotton rounds at 30°C. Air dry cutlery naturally.'
    }
  };

  /* --------------------------------------------------------------------------
     2. Journal Stories Data
     -------------------------------------------------------------------------- */
  const JOURNAL_DATA = {
    morning: {
      title: 'A Simpler, More Thoughtful Morning',
      category: 'Rituals • 4 Min Read',
      author: 'By Tejaswini Rakhunde • Atelier Perspectives',
      image: 'assets/images/journal-morning.jpg',
      pullquote: '“Stillness in the morning is not wasted time; it is the reservoir from which our best discernment flows.”',
      paragraphs: [
        'In our modern tempo of continuous notifications and urgent deadlines, mornings are frequently sacrificed to reactive haste. We check messages before our feet touch the floor, gulp coffee without tasting its nuances, and rush out the door already mentally fatigued.',
        'At ECOVIBE, our design philosophy begins with reclaiming these initial moments. An intentional morning ritual does not require waking before dawn or following an elaborate twenty-step regimen. It asks only for presence.',
        'Carving out fifteen uninterrupted minutes to prepare loose-leaf tea in hand-blown glass, lighting a natural soy candle, and sitting beside an open window invites nervous-system restoration. When your everyday tools possess tactile warmth and honest materials, the ritual itself becomes an anchor.'
      ]
    },
    routine: {
      title: 'Making Reusability Part of Your Routine',
      category: 'Habits • 6 Min Read',
      author: 'By Elena Rostova • Sustainability Research',
      image: 'assets/images/journal-routine.jpg',
      pullquote: '“True sustainability is not about perfection by a few; it is about billions of gentle, consistent swaps that feel like second nature.”',
      paragraphs: [
        'The transition toward conscious consumption often falters when it is framed as ascetic deprivation. When reusable alternatives feel heavy, inconvenient, or fragile, people inevitably return to single-use convenience.',
        'The key to enduring habit formation is friction reduction. Keep your organic canvas tote folded by your front entryway so you never leave without it. Keep your double-walled solstice bottle cleaned and resting on your desk each evening, ready for cold infusion each morning.',
        'When sustainable objects are engineered with refined ergonomics and timeless beauty, carrying them ceases to feel like a chore — it becomes a tactile statement of values.'
      ]
    },
    guide: {
      title: 'A Guide to Buying Less, Choosing Better',
      category: 'Philosophy • 5 Min Read',
      author: 'By Kabir Mehta • Interior Aesthetics',
      image: 'assets/images/journal-guide.jpg',
      pullquote: '“Surround yourself only with that which you know to be useful or believe to be beautiful.”',
      paragraphs: [
        'Mass consumerism trains us to seek novelty at the expense of permanence. We accumulate low-cost items made of petroleum composites and seasonal trends that deteriorate within months, clogging our living spaces and the biosphere.',
        'Choosing better means asking three foundational questions before acquiring any new object: Was it made with ethical respect for raw materials? Can it be repaired if a component wears down? And will its form still bring quiet joy a decade from today?',
        'When we curate our living quarters around a modest number of heirloom-grade objects — a hand-carved linen travel set, a speckled ceramic incense vessel — our homes breathe. Mental clutter dissolves, and intentional living takes root.'
      ]
    }
  };

  /* --------------------------------------------------------------------------
     3. State Management: Shopping Bag
     -------------------------------------------------------------------------- */
  const FREE_SHIPPING_THRESHOLD = 4000; // in INR
  let bagItems = [
    // Pre-populate with 1 sample item so demo feels rich immediately!
    {
      id: 'tote',
      title: 'The Everyday Tote',
      price: 3450,
      image: 'assets/images/product-tote.jpg',
      qty: 1
    }
  ];

  /* --------------------------------------------------------------------------
     4. Navigation Bar & Mobile Drawer
     -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Header Elevation on Scroll
  const handleScrollHeader = () => {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollHeader, { passive: true });
  handleScrollHeader();

  // Mobile Menu Toggle
  const toggleMobileNav = (forceClose = false) => {
    const isOpen = navMenu.classList.contains('open');
    const targetState = forceClose ? false : !isOpen;

    navMenu.classList.toggle('open', targetState);
    navBackdrop.classList.toggle('active', targetState);
    mobileToggle.classList.toggle('active', targetState);
    mobileToggle.setAttribute('aria-expanded', String(targetState));

    document.body.style.overflow = targetState ? 'hidden' : '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileNav());
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', () => toggleMobileNav(true));
  }

  // Close mobile nav when clicking any link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMobileNav(true);
      }
    });
  });

  // Active Link Tracking on Scroll
  const sections = document.querySelectorAll('section[id], footer[id]');
  const handleScrollspy = () => {
    const scrollPos = window.pageYOffset + 140;

    sections.forEach(sec => {
      const secTop = sec.offsetTop;
      const secHeight = sec.offsetHeight;
      const secId = sec.getAttribute('id');

      if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', handleScrollspy, { passive: true });

  /* --------------------------------------------------------------------------
     5. Scroll Reveal with IntersectionObserver
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if observer unsupported
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* --------------------------------------------------------------------------
     6. Product Category Filtering
     -------------------------------------------------------------------------- */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const productCards = document.querySelectorAll('.product-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filterVal = tab.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal || (filterVal === 'home' && category.includes('home'))) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     7. Toast Notification Utility
     -------------------------------------------------------------------------- */
  const toastContainer = document.getElementById('toastContainer');

  const showToast = (message, icon = '✓') => {
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

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3500);
  };

  /* --------------------------------------------------------------------------
     8. Shopping Bag Drawer Mechanics
     -------------------------------------------------------------------------- */
  const bagToggleBtn = document.getElementById('bagToggleBtn');
  const bagDrawer = document.getElementById('bagDrawer');
  const bagDrawerOverlay = document.getElementById('bagDrawerOverlay');
  const closeBagDrawerBtn = document.getElementById('closeBagDrawerBtn');
  const bagCountBadge = document.getElementById('bagCountBadge');
  const drawerItemCount = document.getElementById('drawerItemCount');
  const bagItemsList = document.getElementById('bagItemsList');
  const bagSubtotal = document.getElementById('bagSubtotal');
  const shippingBannerText = document.getElementById('shippingBannerText');
  const shippingProgressFill = document.getElementById('shippingProgressFill');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const emptyExploreBtn = document.getElementById('emptyExploreBtn');

  const formatINR = (val) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  const updateBagUI = () => {
    const totalQty = bagItems.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = bagItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

    // Update Badges
    if (bagCountBadge) {
      bagCountBadge.textContent = totalQty;
      bagCountBadge.classList.add('bounce');
      setTimeout(() => bagCountBadge.classList.remove('bounce'), 400);
    }

    if (drawerItemCount) {
      drawerItemCount.textContent = `${totalQty} item${totalQty === 1 ? '' : 's'}`;
    }

    if (bagSubtotal) {
      bagSubtotal.textContent = formatINR(subtotal);
    }

    // Shipping Progress
    if (shippingProgressFill && shippingBannerText) {
      if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        shippingProgressFill.style.width = '100%';
        shippingBannerText.innerHTML = '🌿 <strong>You have unlocked complimentary plastic-free shipping!</strong>';
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
        shippingProgressFill.style.width = `${pct}%`;
        shippingBannerText.textContent = `Add ${formatINR(remaining)} more for complimentary plastic-free shipping`;
      }
    }

    // Render Items
    if (!bagItemsList) return;

    if (bagItems.length === 0) {
      bagItemsList.innerHTML = `
        <div class="bag-empty-state" id="bagEmptyState">
          <div class="empty-icon-wrap">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#858D65" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
          <p class="empty-title">Your bag is empty</p>
          <p class="empty-desc">Discover our collection of considered essentials to begin your mindful ritual.</p>
          <button type="button" class="btn btn-outline-dark btn-sm" id="emptyExploreBtn">Explore Collection</button>
        </div>
      `;
      const btn = document.getElementById('emptyExploreBtn');
      if (btn) {
        btn.addEventListener('click', () => {
          toggleBagDrawer(false);
          const colSec = document.getElementById('collection');
          if (colSec) colSec.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else {
      bagItemsList.innerHTML = bagItems.map(item => `
        <div class="bag-item-row" data-id="${item.id}">
          <img src="${item.image}" alt="${item.title}" class="bag-item-thumb">
          <div class="bag-item-details">
            <h4 class="bag-item-title">${item.title}</h4>
            <div class="bag-item-price">${formatINR(item.price)}</div>
            <div class="bag-item-controls">
              <div class="qty-control">
                <button type="button" class="btn-qty btn-qty-minus" data-id="${item.id}" aria-label="Decrease quantity for ${item.title}">−</button>
                <span class="qty-val">${item.qty}</span>
                <button type="button" class="btn-qty btn-qty-plus" data-id="${item.id}" aria-label="Increase quantity for ${item.title}">+</button>
              </div>
              <button type="button" class="btn-remove-item" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `).join('');

      // Attach Qty & Remove Listeners
      bagItemsList.querySelectorAll('.btn-qty-minus').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const found = bagItems.find(i => i.id === id);
          if (found) {
            if (found.qty > 1) {
              found.qty -= 1;
            } else {
              bagItems = bagItems.filter(i => i.id !== id);
            }
            updateBagUI();
          }
        });
      });

      bagItemsList.querySelectorAll('.btn-qty-plus').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const found = bagItems.find(i => i.id === id);
          if (found) {
            found.qty += 1;
            updateBagUI();
          }
        });
      });

      bagItemsList.querySelectorAll('.btn-remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          bagItems = bagItems.filter(i => i.id !== id);
          updateBagUI();
          showToast('Item removed from your bag');
        });
      });
    }
  };

  const toggleBagDrawer = (open) => {
    const shouldOpen = open !== undefined ? open : !bagDrawer.classList.contains('open');

    bagDrawer.classList.toggle('open', shouldOpen);
    bagDrawerOverlay.classList.toggle('active', shouldOpen);
    bagDrawer.setAttribute('aria-hidden', String(!shouldOpen));
    if (bagToggleBtn) {
      bagToggleBtn.setAttribute('aria-expanded', String(shouldOpen));
    }

    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  };

  if (bagToggleBtn) {
    bagToggleBtn.addEventListener('click', () => toggleBagDrawer(true));
  }
  if (closeBagDrawerBtn) {
    closeBagDrawerBtn.addEventListener('click', () => toggleBagDrawer(false));
  }
  if (bagDrawerOverlay) {
    bagDrawerOverlay.addEventListener('click', () => toggleBagDrawer(false));
  }

  // Add to Bag Handlers (from product cards and modal)
  const addToBag = (productId) => {
    const product = PRODUCTS_DATA[productId];
    if (!product) return;

    const existing = bagItems.find(item => item.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      bagItems.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        qty: 1
      });
    }

    updateBagUI();
    showToast(`Added ${product.title} to your bag`);
  };

  // Delegated Add-To-Bag & Quick View clicks across the document
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-action="add"]');
    if (addBtn) {
      const pid = addBtn.getAttribute('data-product');
      if (pid) addToBag(pid);
      return;
    }

    const quickBtn = e.target.closest('[data-action="quickview"]');
    if (quickBtn) {
      const pid = quickBtn.getAttribute('data-product');
      if (pid) openProductModal(pid);
      return;
    }

    const storyBtn = e.target.closest('[data-story]');
    if (storyBtn && (storyBtn.classList.contains('btn-read-story') || storyBtn.classList.contains('journal-card'))) {
      const sid = storyBtn.getAttribute('data-story');
      if (sid) openJournalModal(sid);
      return;
    }
  });

  // Demo Checkout button handler
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      showToast('✦ Demo Checkout Notice: No real payment or transaction required.', 'ℹ');
      setTimeout(() => {
        alert('Thank you for exploring the ECOVIBE product landing page demo!\n\nThis is an educational frontend submission for Cognetix Technology Internship — Task 3. No actual charges have been made.');
      }, 400);
    });
  }

  /* --------------------------------------------------------------------------
     9. Product Quick-View Modal
     -------------------------------------------------------------------------- */
  const productModal = document.getElementById('productModal');
  const productModalBackdrop = document.getElementById('productModalBackdrop');
  const closeProductModalBtn = document.getElementById('closeProductModalBtn');
  const productModalBody = document.getElementById('productModalBody');

  const openProductModal = (productId) => {
    const product = PRODUCTS_DATA[productId];
    if (!product || !productModalBody) return;

    productModalBody.innerHTML = `
      <div class="product-modal-grid">
        <div class="product-modal-media">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-modal-details">
          <span class="modal-tag">${product.tag} • ${product.category}</span>
          <h2 class="modal-title" id="modalProductTitle">${product.title}</h2>
          <div class="modal-price">${formatINR(product.price)}</div>
          <p class="modal-desc">${product.desc}</p>
          <ul class="modal-specs-list">
            ${product.specs.map(spec => `
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${spec}</span>
              </li>
            `).join('')}
          </ul>
          <p class="modal-desc" style="font-size: 0.8rem; margin-bottom: 1.5rem;"><strong>Care Ritual:</strong> ${product.care}</p>
          <div style="display: flex; gap: 0.8rem; margin-top: auto;">
            <button type="button" class="btn btn-primary btn-block" data-action="add" data-product="${product.id}" id="modalAddBtn">
              Add to Bag (${formatINR(product.price)})
            </button>
          </div>
        </div>
      </div>
    `;

    productModal.classList.add('open');
    productModalBackdrop.classList.add('active');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook up Add to Bag button inside modal
    const modalAdd = document.getElementById('modalAddBtn');
    if (modalAdd) {
      modalAdd.addEventListener('click', () => {
        closeProductModal();
      });
    }
  };

  const closeProductModal = () => {
    productModal.classList.remove('open');
    productModalBackdrop.classList.remove('active');
    productModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeProductModalBtn) {
    closeProductModalBtn.addEventListener('click', closeProductModal);
  }
  if (productModalBackdrop) {
    productModalBackdrop.addEventListener('click', closeProductModal);
  }

  /* --------------------------------------------------------------------------
     10. Journal Reader Modal
     -------------------------------------------------------------------------- */
  const journalModal = document.getElementById('journalModal');
  const journalModalBackdrop = document.getElementById('journalModalBackdrop');
  const closeJournalModalBtn = document.getElementById('closeJournalModalBtn');
  const journalModalBody = document.getElementById('journalModalBody');

  const openJournalModal = (storyId) => {
    const story = JOURNAL_DATA[storyId];
    if (!story || !journalModalBody) return;

    journalModalBody.innerHTML = `
      <div class="journal-article-header">
        <span class="journal-modal-tag">${story.category}</span>
        <h2 class="journal-modal-title" id="modalJournalTitle">${story.title}</h2>
        <p class="journal-modal-meta">${story.author}</p>
      </div>
      <img src="${story.image}" alt="${story.title}" class="journal-modal-img">
      <blockquote class="journal-pullquote">${story.pullquote}</blockquote>
      <div class="journal-modal-prose">
        ${story.paragraphs.map(p => `<p>${p}</p>`).join('')}
      </div>
      <div style="text-align: center; margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border);">
        <button type="button" class="btn btn-outline-dark btn-sm" id="modalFinishStoryBtn">
          Close Story
        </button>
      </div>
    `;

    journalModal.classList.add('open');
    journalModalBackdrop.classList.add('active');
    journalModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const finishBtn = document.getElementById('modalFinishStoryBtn');
    if (finishBtn) finishBtn.addEventListener('click', closeJournalModal);
  };

  const closeJournalModal = () => {
    journalModal.classList.remove('open');
    journalModalBackdrop.classList.remove('active');
    journalModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeJournalModalBtn) {
    closeJournalModalBtn.addEventListener('click', closeJournalModal);
  }
  if (journalModalBackdrop) {
    journalModalBackdrop.addEventListener('click', closeJournalModal);
  }

  // Global Escape Key Listener for Modals & Drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (bagDrawer && bagDrawer.classList.contains('open')) toggleBagDrawer(false);
      if (productModal && productModal.classList.contains('open')) closeProductModal();
      if (journalModal && journalModal.classList.contains('open')) closeJournalModal();
      if (navMenu && navMenu.classList.contains('open')) toggleMobileNav(true);
    }
  });

  /* --------------------------------------------------------------------------
     11. Interactive Philosophy Pillars
     -------------------------------------------------------------------------- */
  const pillarCards = document.querySelectorAll('.pillar-card');
  pillarCards.forEach(card => {
    card.addEventListener('click', () => {
      pillarCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  /* --------------------------------------------------------------------------
     12. Interactive Mindful Habit Shift Calculator (Section H)
     -------------------------------------------------------------------------- */
  const habitSelect = document.getElementById('habitSelect');
  const habitFrequency = document.getElementById('habitFrequency');
  const freqLabel = document.getElementById('freqLabel');
  const annualAvoidedCount = document.getElementById('annualAvoidedCount');
  const annualAvoidedText = document.getElementById('annualAvoidedText');

  const updateImpactCalc = () => {
    if (!habitSelect || !habitFrequency || !annualAvoidedCount || !annualAvoidedText) return;

    const days = parseInt(habitFrequency.value, 10);
    const habit = habitSelect.value;
    if (freqLabel) freqLabel.textContent = `${days} day${days === 1 ? '' : 's'}/week`;

    let itemMultiplier = 1;
    let labelText = '';

    if (habit === 'bottle') {
      itemMultiplier = 1; // 1 bottle / day
      const total = Math.round(days * 52 * itemMultiplier);
      annualAvoidedCount.textContent = `~${total}`;
      annualAvoidedText.textContent = `Single-use plastic bottles avoided per year through mindful hydration`;
    } else if (habit === 'tote') {
      itemMultiplier = 2.5; // ~2.5 shopping bags per trip
      const total = Math.round(days * 52 * itemMultiplier);
      annualAvoidedCount.textContent = `~${total}`;
      annualAvoidedText.textContent = `Disposable shopping bags kept out of landfills per year`;
    } else if (habit === 'travel') {
      itemMultiplier = 1.8; // takeout plastic utensils / cups
      const total = Math.round(days * 52 * itemMultiplier);
      annualAvoidedCount.textContent = `~${total}`;
      annualAvoidedText.textContent = `Single-use plastic cutlery sets & straws avoided per year`;
    }
  };

  if (habitSelect) habitSelect.addEventListener('change', updateImpactCalc);
  if (habitFrequency) habitFrequency.addEventListener('input', updateImpactCalc);

  /* --------------------------------------------------------------------------
     13. Back to Top Button
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     14. Newsletter Subscription Form
     -------------------------------------------------------------------------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterFeedback = document.getElementById('newsletterFeedback');

  if (newsletterForm && newsletterEmail) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(val)) {
        if (newsletterFeedback) {
          newsletterFeedback.textContent = 'Please provide a valid email address.';
          newsletterFeedback.className = 'form-feedback error';
        }
        return;
      }

      if (newsletterFeedback) {
        newsletterFeedback.textContent = 'Welcome to ECOVIBE. Thank you for joining our mindful dispatch.';
        newsletterFeedback.className = 'form-feedback success';
      }
      showToast('Thank you for subscribing to our mindful newsletter!', '🌿');
      newsletterEmail.value = '';
    });
  }

  /* --------------------------------------------------------------------------
     15. Footer Demo Links
     -------------------------------------------------------------------------- */
  document.querySelectorAll('.demo-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const info = link.getAttribute('data-info');
      if (info === 'care') {
        showToast('Material Care Guide: Hand wash ceramics and condition leather annually.', 'ℹ');
      } else if (info === 'circular') {
        showToast('Circular Lifecycle: Modular components designed for repair and natural renewal.', 'ℹ');
      } else if (info === 'shipping') {
        showToast('Shipping: 100% plastic-free recycled paper packaging used worldwide.', 'ℹ');
      } else if (info === 'faq') {
        showToast('FAQ: All items are covered by our 3-year heirloom craft warranty.', 'ℹ');
      }
    });
  });

  /* --------------------------------------------------------------------------
     16. Dynamic Copyright Year
     -------------------------------------------------------------------------- */
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Initial Bag UI render
  updateBagUI();
});
