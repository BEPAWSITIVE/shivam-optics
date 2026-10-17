// Shivam Opticals - Haute Lunetterie Product Catalog Engine

// 1. Comprehensive Product Catalog Matching Reference (media_1790400675289.png)
const DEFAULT_CATALOG_PRODUCTS = [
  {
    "id": "so-101",
    "brand": "GAST",
    "name": "Half Frame Rectangle Metal",
    "category": "Eyeglasses",
    "type": "eyeglasses",
    "shape": "Rectangle",
    "gender": "unisex",
    "size": "M",
    "rating": 4.9,
    "price": 1490,
    "originalPrice": 2490,
    "discountPct": 40,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/clean_frame_1.png",
    "colors": [
      "#1A1816",
      "#222222"
    ],
    "description": "Precision engineered half-frame rectangle glasses with comfortable silicone nose pads and zero power blue-cut lenses."
  },
  {
    "id": "so-102",
    "brand": "GAST",
    "name": "Half Frame Square",
    "category": "Eyeglasses",
    "type": "eyeglasses",
    "shape": "Square",
    "gender": "unisex",
    "size": "M",
    "rating": 4.8,
    "price": 1490,
    "originalPrice": 2490,
    "discountPct": 15,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/clean_frame_2.png",
    "colors": [
      "#E5A93C",
      "#1A1816",
      "#D1D5DB"
    ],
    "description": "Modern half-rim square optical frame fitted with anti-glare screen protection lenses."
  },
  {
    "id": "so-103",
    "brand": "GAST",
    "name": "Half Frame Square Metal Gunmetal",
    "category": "Eyeglasses",
    "type": "eyeglasses",
    "shape": "Square",
    "gender": "unisex",
    "size": "M",
    "rating": 4.9,
    "price": 1490,
    "originalPrice": 2490,
    "discountPct": 40,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/clean_frame_3.png",
    "colors": [
      "#6B7280",
      "#1A1816"
    ],
    "description": "Ultra-light half frame chassis with spring hinge flexibility and hydrophobic coating."
  },
  {
    "id": "so-104",
    "brand": "GAST",
    "name": "Full Frame Square Metal Eyeglasses",
    "category": "Eyeglasses",
    "type": "eyeglasses",
    "shape": "Square",
    "gender": "unisex",
    "size": "M",
    "rating": 5.0,
    "price": 3990,
    "originalPrice": 4990,
    "discountPct": 20,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/clean_frame_4.png",
    "colors": [
      "#B45309",
      "#1A1816",
      "#D1D5DB"
    ],
    "description": "Statement optical silhouette with magnetic tinted sun clip-on and custom lenses included."
  },
  {
    "id": "so-105",
    "brand": "GAST",
    "name": "Half Frame Titanium Aviator",
    "category": "Sunglasses",
    "type": "sunglasses",
    "shape": "Aviator",
    "gender": "unisex",
    "size": "M",
    "rating": 4.9,
    "price": 2990,
    "originalPrice": 3490,
    "discountPct": 14,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/clean_frame_1.png",
    "colors": [
      "#1A1816",
      "#C5A059"
    ],
    "description": "Contemporary teardrop rimless navigator with warm olive-amber tint and hypoallergenic ceramic nose pads."
  },
  {
    "id": "so-106",
    "brand": "GAST",
    "name": "Classic Round Vintage Metal",
    "category": "Eyeglasses",
    "type": "eyeglasses",
    "shape": "Round",
    "gender": "unisex",
    "size": "M",
    "rating": 4.9,
    "price": 1990,
    "originalPrice": 2990,
    "discountPct": 33,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/clean_frame_2.png",
    "colors": [
      "#E5A93C",
      "#222222",
      "#D1D5DB"
    ],
    "description": "Vintage round spectacles engineered with featherlight stainless steel and flexible acetate temples."
  },
  {
    "id": "so-107",
    "brand": "GAST",
    "name": "Rimless Featherweight Titanium",
    "category": "Eyeglasses",
    "type": "eyeglasses",
    "shape": "Rectangle",
    "gender": "unisex",
    "size": "M",
    "rating": 5.0,
    "price": 3490,
    "originalPrice": 4490,
    "discountPct": 22,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/clean_frame_3.png",
    "colors": [
      "#6B7280",
      "#D1D5DB",
      "#1A1816"
    ],
    "description": "Featherweight rimless architecture crafted from pure biocompatible medical titanium."
  },
  {
    "id": "so-108",
    "brand": "GAST",
    "name": "Bold Acetate Square Wayfarer",
    "category": "Sunglasses",
    "type": "sunglasses",
    "shape": "Square",
    "gender": "unisex",
    "size": "M",
    "rating": 4.8,
    "price": 2490,
    "originalPrice": 3490,
    "discountPct": 28,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/clean_frame_4.png",
    "colors": [
      "#1A1816",
      "#4A2A18"
    ],
    "description": "Bold-profile editorial square sunglasses with dark smoke polarized lenses and 5-barrel hinges."
  },
  {
    "id": "so-109",
    "brand": "GAST",
    "name": "Aviator Polarized Pilot Sunglasses",
    "category": "Sunglasses",
    "type": "sunglasses",
    "shape": "Aviator",
    "gender": "unisex",
    "size": "M",
    "rating": 4.9,
    "price": 2990,
    "originalPrice": 3990,
    "discountPct": 25,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/clean_frame_1.png",
    "colors": [
      "#C5A059",
      "#1A1816"
    ],
    "description": "Timeless teardrop pilot aviators with G-15 high contrast green crystal lenses."
  },
  {
    "id": "so-110",
    "brand": "GAST",
    "name": "Cat-Eye Elegance Acetate",
    "category": "Sunglasses",
    "type": "sunglasses",
    "shape": "Cat-Eye",
    "gender": "women",
    "size": "M",
    "rating": 4.9,
    "price": 2190,
    "originalPrice": 3190,
    "discountPct": 31,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/clean_frame_2.png",
    "colors": [
      "#1A1816",
      "#B87333"
    ],
    "description": "Slightly upturned dramatic cat-eye shades tailored to elevate cheekbones and facial symmetry."
  },
  {
    "id": "so-gast-100",
    "brand": "GAST",
    "name": "ASTRO AS04 53 Sculpted Black",
    "category": "Sunglasses",
    "type": "sunglasses",
    "shape": "Square",
    "gender": "unisex",
    "size": "M",
    "rating": 5.0,
    "price": 17900,
    "originalPrice": 20048,
    "discountPct": 12,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/gast_astro_frame.png",
    "colors": [
      "#111111",
      "#63381B"
    ],
    "description": "Sculpted black cellulose acetate frame with signature gold dual rivets and dark polarized mineral lenses."
  },
  {
    "id": "montblanc-mb0325s",
    "brand": "MONTBLANC",
    "name": "Montblanc MB0325S 001 53",
    "category": "Sunglasses",
    "type": "sunglasses",
    "shape": "Geometric",
    "gender": "men",
    "size": "M",
    "rating": 5.0,
    "price": 18400,
    "originalPrice": 22080,
    "discountPct": 17,
    "tag": "\u26a1 on sale price applied!",
    "tagType": "sale",
    "img": "images/montblanc_mb0325s.png",
    "colors": [
      "#111111",
      "#4A2A18"
    ],
    "description": "Official Montblanc luxury eyewear with gold emblem rivets and precision polarized UV400 lenses."
  }
];

// Load active catalog
function loadActiveCatalog() {
  return [...DEFAULT_CATALOG_PRODUCTS];
}

let CATALOG_PRODUCTS = loadActiveCatalog();
let pendingCsvProducts = [];

// App State
let cart = JSON.parse(localStorage.getItem('so_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('so_wishlist') || '[]');

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  parseUrlParams();
  applyFilters();
  updateCartUI();
  updateWishlistUI();
  updateAuthUI();
  lucide.createIcons();

  // Mobile Filter Drawer toggle
  document.getElementById('mobileFilterToggle')?.addEventListener('click', () => {
    const aside = document.querySelector('aside');
    aside.classList.toggle('hidden');
    aside.classList.toggle('block');
  });

  // Mobile Header Navigation Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  setupCsvDragAndDrop();
  updateImportUIState();
  rebuildBrandFilterOptions();
});

// Parse URL Query Parameters on load
function parseUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  
  // Brand
  const brandParam = urlParams.get('brand');
  if (brandParam) {
    const brandInput = document.querySelector(`input[name="brand"][value="${brandParam}"]`);
    if (brandInput) brandInput.checked = true;
  }

  // Shape
  const shapeParam = urlParams.get('shape');
  if (shapeParam) {
    const shapeInput = document.querySelector(`input[name="shape"][value="${shapeParam}"]`);
    if (shapeInput) shapeInput.checked = true;
  }

  // Gender
  const genderParam = urlParams.get('gender');
  if (genderParam) {
    const allGen = document.querySelector('input[name="gender"][value="all"]');
    if (allGen) allGen.checked = false;
    const genInput = document.querySelector(`input[name="gender"][value="${genderParam}"]`);
    if (genInput) genInput.checked = true;
  }

  // Sale
  if (urlParams.get('sale') === 'true') {
    const saleCheck = document.getElementById('saleFilterCheck');
    if (saleCheck) saleCheck.checked = true;
  }
}

// Handle Gender Filter mutual exclusivity with "All"
function handleGenderFilter(checkbox) {
  const allCheckbox = document.querySelector('input[name="gender"][value="all"]');
  const otherCheckboxes = Array.from(document.querySelectorAll('input[name="gender"]:not([value="all"])'));

  if (checkbox.value === 'all') {
    if (checkbox.checked) {
      otherCheckboxes.forEach(cb => cb.checked = false);
    }
  } else {
    if (checkbox.checked) {
      allCheckbox.checked = false;
    } else {
      const anyChecked = otherCheckboxes.some(cb => cb.checked);
      if (!anyChecked) allCheckbox.checked = true;
    }
  }
  applyFilters();
}

// Toggle collapsible filter section
function toggleFilterSection(sectionId, chevronId) {
  const section = document.getElementById(sectionId);
  const chevron = document.getElementById(chevronId);
  if (!section || !chevron) return;

  section.classList.toggle('hidden');
  chevron.classList.toggle('rotate-180');
}

// Filter and render products
function applyFilters() {
  // Selected Genders
  const allGenderChecked = document.querySelector('input[name="gender"][value="all"]')?.checked;
  const selectedGenders = Array.from(document.querySelectorAll('input[name="gender"]:checked'))
    .map(cb => cb.value)
    .filter(val => val !== 'all');

  // Selected Shapes
  const selectedShapes = Array.from(document.querySelectorAll('input[name="shape"]:checked')).map(cb => cb.value);

  // Selected Brands
  const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value);

  // Selected Offers
  const selectedOffers = Array.from(document.querySelectorAll('input[name="offer"]:checked')).map(cb => cb.value);

  // Search input query
  const query = document.getElementById('catalogSearchInput')?.value.toLowerCase().trim() || '';

  // Sort criteria
  const sortBy = document.getElementById('sortSelect')?.value || 'featured';

  // Filter process
  let filtered = CATALOG_PRODUCTS.filter(product => {
    // Gender match
    if (!allGenderChecked && selectedGenders.length > 0) {
      if (product.gender !== 'unisex' && !selectedGenders.includes(product.gender)) {
        return false;
      }
    }

    // Shape match
    if (selectedShapes.length > 0) {
      if (!selectedShapes.includes(product.shape)) {
        return false;
      }
    }

    // Brand match
    if (selectedBrands.length > 0) {
      if (!selectedBrands.includes(product.brand)) {
        return false;
      }
    }

    // Offer match
    if (selectedOffers.length > 0) {
      if (selectedOffers.includes('sale') && product.tagType !== 'sale') return false;
      if (selectedOffers.includes('bundle') && product.tagType !== 'offers') return false;
    }

    // Search query match
    if (query) {
      const matchText = `${product.brand} ${product.name} ${product.shape} ${product.category} ${product.description}`.toLowerCase();
      if (!matchText.includes(query)) return false;
    }

    return true;
  });

  // Sorting
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update Counters & Breadcrumbs
  const countDisplay = document.getElementById('itemCountDisplay');
  if (countDisplay) {
    countDisplay.innerText = `Showing ${filtered.length} of ${CATALOG_PRODUCTS.length} Frames`;
  }

  renderFilterChips(selectedGenders, selectedShapes, selectedBrands, selectedOffers, query);
  renderProductCards(filtered);
}

// Render active filter chips row
function renderFilterChips(genders, shapes, brands, offers, query) {
  const container = document.getElementById('chipsContainer');
  const row = document.getElementById('activeChipsRow');
  const clearBtn = document.getElementById('clearAllFiltersBtn');
  if (!container || !row) return;

  const chips = [];

  genders.forEach(g => {
    chips.push({ label: `Gender: ${g}`, type: 'gender', val: g });
  });
  shapes.forEach(s => {
    chips.push({ label: `Shape: ${s}`, type: 'shape', val: s });
  });
  brands.forEach(b => {
    chips.push({ label: `Brand: ${b}`, type: 'brand', val: b });
  });
  offers.forEach(o => {
    chips.push({ label: o === 'sale' ? '⚡ Sale' : '⏱ Offers', type: 'offer', val: o });
  });
  if (query) {
    chips.push({ label: `"${query}"`, type: 'search', val: query });
  }

  if (chips.length === 0) {
    row.classList.add('hidden');
    clearBtn?.classList.add('hidden');
    return;
  }

  row.classList.remove('hidden');
  clearBtn?.classList.remove('hidden');

  container.innerHTML = chips.map(chip => `
    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#FAF3EB] text-[#1A1816] border border-neutral-200">
      <span>${chip.label}</span>
      <button onclick="removeFilterChip('${chip.type}', '${chip.val}')" class="hover:text-red-500 font-bold ml-0.5 cursor-pointer">×</button>
    </span>
  `).join('');
}

// Remove an active filter chip
function removeFilterChip(type, val) {
  if (type === 'search') {
    const input = document.getElementById('catalogSearchInput');
    if (input) input.value = '';
  } else {
    const checkbox = document.querySelector(`input[name="${type}"][value="${val}"]`);
    if (checkbox) checkbox.checked = false;
    if (type === 'gender') {
      const otherGenders = Array.from(document.querySelectorAll('input[name="gender"]:not([value="all"]):checked'));
      if (otherGenders.length === 0) {
        const allBox = document.querySelector('input[name="gender"][value="all"]');
        if (allBox) allBox.checked = true;
      }
    }
  }
  applyFilters();
}

// Reset all filters
function resetAllFilters() {
  document.querySelectorAll('input[name="shape"]:checked').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="brand"]:checked').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="offer"]:checked').forEach(cb => cb.checked = false);
  
  const allGen = document.querySelector('input[name="gender"][value="all"]');
  if (allGen) allGen.checked = true;
  document.querySelectorAll('input[name="gender"]:not([value="all"])').forEach(cb => cb.checked = false);

  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  applyFilters();
}

// Render Product Cards matching Screenshot media_1790400675289.png exactly
function renderProductCards(products) {
  const container = document.getElementById('plpProductGrid');
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-neutral-400 bg-white rounded-2xl border border-neutral-200 p-8">
        <i data-lucide="glasses" class="w-12 h-12 mx-auto text-brand-gold/60 mb-3"></i>
        <h4 class="text-sm font-bold uppercase tracking-wider text-brand-dark mb-1">No Matching Designer Frames</h4>
        <p class="text-xs text-neutral-500 mb-4">Try clearing some filters or searching for alternative shapes.</p>
        <button onclick="resetAllFilters()" class="px-5 py-2.5 bg-[#0A251C] text-white text-xs uppercase tracking-widest rounded-lg hover:bg-brand-gold transition">
          Reset All Filters
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = products.map(p => {
    const isWishlisted = wishlist.includes(p.id);
    const discount = p.discountPct || Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);

    const colorCount = (p.colors && p.colors.length) ? p.colors.length : 3;

    return `
      <div class="product-card group bg-white border border-[#D1D5DB] rounded-2xl flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 relative">
        
        <!-- Upper Section: Wishlist Heart + SAVE Pill + Eyewear Image + Specs -->
        <div class="p-3 pt-2.5 pb-2 flex flex-col items-center">
          
          <!-- Top Row: Wishlist Heart on Left & Burgundy 'SAVE XX%' Pill on Right -->
          <div class="w-full flex items-center justify-between mb-1">
            <button 
              onclick="toggleWishlist('${p.id}', event)" 
              class="w-6 h-6 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-400 hover:text-red-500 transition shadow-xs z-10 cursor-pointer" 
              title="Save to Wishlist"
            >
              <svg class="w-3 h-3 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-neutral-400'}" viewBox="0 0 24 24" fill="${isWishlisted ? '#EF4444' : 'none'}" stroke="currentColor" stroke-width="1.6">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            <!-- Pill Badge: SAVE XX% in deep burgundy #512D2B -->
            <span class="px-2.5 py-0.5 rounded-full bg-[#512D2B] text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
              SAVE ${discount}%
            </span>
          </div>

          <!-- Eyewear Image Container (links to checkout / product page) -->
          <a href="checkout.html?id=${p.id}" class="w-full h-24 flex items-center justify-center p-1 my-1 cursor-pointer">
            <img 
              src="${p.img}" 
              alt="${p.name}" 
              loading="lazy" 
              referrerpolicy="no-referrer"
              onerror="handleImageLoadFallback(this, '${p.img}')"
              class="h-24 max-h-24 max-w-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
            >
          </a>

          <!-- Brand Header with Spaced Lettering: GAST / MONTBLANC -->
          <div class="text-[10px] font-semibold tracking-[0.25em] text-[#6B7280] uppercase mt-1 text-center">
            ${p.brand}
          </div>

          <!-- Bold Model / Product Title -->
          <a href="checkout.html?id=${p.id}" class="block text-center w-full">
            <h4 class="text-sm font-bold text-[#1A1816] tracking-wide mt-0.5 text-center truncate w-full hover:text-brand-gold transition cursor-pointer" title="${p.name}">
              ${p.name}
            </h4>
          </a>

          <!-- Price Row: From ₹1,490.00 in #16803E and strikethrough #DD2E2E -->
          <div class="flex items-center justify-center gap-1.5 mt-1.5 flex-wrap">
            <span class="text-xs text-[#6B7280]">From</span>
            <span class="text-xs font-bold text-[#16803E]">₹${p.price.toLocaleString('en-IN')}.00</span>
            <span class="text-xs sm:text-sm text-[#DD2E2E] line-through">₹${p.originalPrice.toLocaleString('en-IN')}.00</span>
          </div>

          <!-- Colors Subtitle -->
          <div class="text-[11px] text-[#6B7280] mt-0.5 mb-1 text-center">
            Available in ${colorCount} Colors
          </div>

        </div>

        <!-- Full-Width Bottom Button: ADD TO CART with Shopping Bag Icon in #D9D9D9 -->
        <button 
          onclick="addPlpItemToCart('${p.id}', event)" 
          class="w-full py-2 bg-[#D9D9D9] hover:bg-[#0A251C] hover:text-white text-[#1A1816] text-[11px] font-semibold tracking-wider uppercase transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer border-t border-[#D1D5DB] rounded-b-2xl"
        >
          <span>ADD TO CART</span>
          <svg class="w-2.5 h-2.5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </button>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// Handle clicking on card
function handleCardClick(productId, event) {
  // If clicked directly on interactive buttons, don't trigger modal
  if (event.target.closest('button')) return;

  const product = CATALOG_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  // Add to cart directly or view details
  addPlpItemToCart(productId, event);
}

// Add Item directly to cart
function addPlpItemToCart(productId, event) {
  if (event) event.stopPropagation();

  const product = CATALOG_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === product.id);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: `${product.brand} - ${product.name}`,
      price: product.price,
      img: product.img,
      quantity: 1,
      color: 'Default Selection',
      lensOption: 'Zero Power (Plano Blue-Block)'
    });
  }

  saveCart();
  updateCartUI();
  toggleCartDrawer(true);
  showToast(`Added ${product.brand} frame to your cart`);
}

// Wishlist Toggle
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();

  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Removed frame from wishlist');
  } else {
    wishlist.push(productId);
    showToast('Saved frame to wishlist');
  }

  saveWishlist();
  updateWishlistUI();
  applyFilters();
}

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem('so_cart', JSON.stringify(cart));
}

// Save Wishlist to LocalStorage
function saveWishlist() {
  localStorage.setItem('so_wishlist', JSON.stringify(wishlist));
}

// Update Cart UI & Counters
function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartHeaderCount = document.getElementById('cartHeaderCount');
  if (cartHeaderCount) cartHeaderCount.innerText = totalCount;

  const cartDrawerCounter = document.getElementById('cartDrawerCounter');
  if (cartDrawerCounter) cartDrawerCounter.innerText = totalCount;

  const cartList = document.getElementById('cartItemsList');
  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center text-brand-muted py-12">
        <i data-lucide="shopping-bag" class="w-12 h-12 text-brand-gold/40 mb-3"></i>
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-dark">Your cart is empty</p>
        <p class="text-xs text-neutral-400 mt-1 max-w-xs">Explore our Japanese Titanium & Mazzucchelli acetate silhouettes.</p>
      </div>
    `;
    lucide.createIcons();
    updateCartTotals(0);
    return;
  }

  cartList.innerHTML = cart.map(item => `
    <div class="flex items-center gap-3 p-3 bg-[#FCFAF7] rounded-xl border border-brand-border">
      <img src="${item.img}" alt="${item.name}" referrerpolicy="no-referrer" onerror="handleImageLoadFallback(this, '${item.img}')" class="w-16 h-12 object-contain bg-white rounded border border-neutral-100 p-1">
      <div class="flex-1 min-w-0">
        <h5 class="text-xs font-bold text-brand-dark truncate">${item.name}</h5>
        <p class="text-[10px] text-neutral-500">${item.lensOption || 'Included High-Index Lens'}</p>
        <div class="flex items-center justify-between mt-1.5">
          <span class="text-xs font-bold text-brand-dark">₹ ${(item.price * item.quantity).toLocaleString('en-IN')}</span>
          <div class="flex items-center border border-neutral-300 rounded bg-white text-xs">
            <button onclick="changeCartQty('${item.id}', -1)" class="px-2 py-0.5 hover:bg-neutral-100 font-bold">-</button>
            <span class="px-2 font-semibold text-[11px]">${item.quantity}</span>
            <button onclick="changeCartQty('${item.id}', 1)" class="px-2 py-0.5 hover:bg-neutral-100 font-bold">+</button>
          </div>
        </div>
      </div>
      <button onclick="removeFromCart('${item.id}')" class="text-neutral-400 hover:text-red-500 p-1">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    </div>
  `).join('');

  lucide.createIcons();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  updateCartTotals(subtotal);
}

// Cart Quantity Adjust
function changeCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
}

// Remove from cart
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart');
}

// Update Cart Subtotal and Total
function updateCartTotals(subtotal) {
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  if (subtotalEl) subtotalEl.innerText = `₹ ${subtotal.toLocaleString('en-IN')}`;
  if (totalEl) totalEl.innerText = `₹ ${subtotal.toLocaleString('en-IN')}`;
}

// Update Wishlist UI & Badge
function updateWishlistUI() {
  const headerCount = document.getElementById('wishlistHeaderCount');
  if (headerCount) headerCount.innerText = wishlist.length;

  const drawerCounter = document.getElementById('wishlistDrawerCounter');
  if (drawerCounter) drawerCounter.innerText = `(${wishlist.length} items)`;

  const list = document.getElementById('wishlistItemsList');
  if (!list) return;

  if (wishlist.length === 0) {
    list.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center text-brand-muted py-12">
        <i data-lucide="heart" class="w-12 h-12 text-brand-gold/40 mb-3"></i>
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-dark">No saved favorites</p>
        <p class="text-xs text-neutral-400 mt-1 max-w-xs">Tap the heart icon on any silhouette to curate your personal collection.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  const wishlistedItems = CATALOG_PRODUCTS.filter(p => wishlist.includes(p.id));
  list.innerHTML = wishlistedItems.map(p => `
    <div class="flex items-center gap-3 p-3 bg-[#FCFAF7] rounded-xl border border-brand-border">
      <img src="${p.img}" alt="${p.name}" referrerpolicy="no-referrer" onerror="handleImageLoadFallback(this, '${p.img}')" class="w-16 h-12 object-contain bg-white rounded border border-neutral-100 p-1">
      <div class="flex-1 min-w-0">
        <h5 class="text-xs font-bold text-brand-dark truncate">${p.brand} - ${p.name}</h5>
        <p class="text-[11px] font-semibold text-brand-dark mt-0.5">₹ ${p.price.toLocaleString('en-IN')}</p>
        <button onclick="addPlpItemToCart('${p.id}')" class="mt-1 text-[10px] font-bold text-[#00A896] hover:underline uppercase tracking-wider">
          + Move To Cart
        </button>
      </div>
      <button onclick="toggleWishlist('${p.id}', event)" class="text-neutral-400 hover:text-red-500 p-1">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    </div>
  `).join('');

  lucide.createIcons();
}

// Drawer Toggles
function toggleCartDrawer(open) {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (!drawer || !backdrop) return;

  if (open) {
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
    drawer.classList.remove('translate-x-full');
  } else {
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100');
    drawer.classList.add('translate-x-full');
  }
}

function toggleWishlistDrawer(open) {
  const drawer = document.getElementById('wishlistDrawer');
  const backdrop = document.getElementById('wishlistDrawerBackdrop');
  if (!drawer || !backdrop) return;

  if (open) {
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
    drawer.classList.remove('translate-x-full');
  } else {
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100');
    drawer.classList.add('translate-x-full');
  }
}

// Appointment Modal
function openAppointmentModal() {
  const modal = document.getElementById('appointmentModal');
  if (!modal) return;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100');
}

function closeAppointmentModal() {
  const modal = document.getElementById('appointmentModal');
  if (!modal) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100');
}

function handleAppointmentSubmit(e) {
  e.preventDefault();
  closeAppointmentModal();
  showToast('Consultation appointment confirmed! Our optometrist will contact you.');
}

function handleNewsletter(e) {
  e.preventDefault();
  showToast('Thank you for subscribing to Haute Lunetterie private drop previews.');
  e.target.reset();
}

function handleCheckout() {
  if (cart.length === 0) {
    showToast('Your cart is empty.');
    return;
  }
  showToast('Redirecting to 256-bit encrypted checkout gateway...');
}

// Toast notification helper
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'bg-[#0A251C] text-white px-4 py-2.5 rounded-lg shadow-xl text-xs font-semibold tracking-wide flex items-center gap-2 transform translate-y-2 opacity-0 transition-all duration-300 pointer-events-auto border border-brand-gold/30';
  toast.innerHTML = `
    <span class="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
    <span>${msg}</span>
  `;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', '-translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ================= LOGIN / USER AUTH ENGINE =================
function openLoginModal() {
  const modal = document.getElementById('loginModal');
  if (!modal) return;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  const inner = modal.querySelector('div');
  if (inner) {
    inner.classList.remove('scale-95');
    inner.classList.add('scale-100');
  }
  updateAuthUI();
  if (window.lucide) lucide.createIcons();
}

function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  if (!modal) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  const inner = modal.querySelector('div');
  if (inner) {
    inner.classList.add('scale-95');
    inner.classList.remove('scale-100');
  }
}

function getAuthUser() {
  try {
    const raw = localStorage.getItem('shivam_user');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setAuthUser(user) {
  try {
    if (user) {
      localStorage.setItem('shivam_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('shivam_user');
    }
  } catch (e) {}
  updateAuthUI();
}

function updateAuthUI() {
  const user = getAuthUser();
  const loggedOutView = document.getElementById('authLoggedOutView');
  const loggedInView = document.getElementById('authLoggedInView');
  const statusDots = document.querySelectorAll('#userStatusDot');

  if (user) {
    if (loggedOutView) loggedOutView.classList.add('hidden');
    if (loggedInView) loggedInView.classList.remove('hidden');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profileAvatar = document.getElementById('profileAvatar');
    if (profileName) profileName.textContent = user.name || 'VIP Member';
    if (profileEmail) profileEmail.textContent = user.email || user.phone || 'Club Member';
    if (profileAvatar) {
      const initials = (user.name || 'SO').split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
      profileAvatar.textContent = initials;
    }
    statusDots.forEach(dot => dot.classList.remove('hidden'));
  } else {
    if (loggedOutView) loggedOutView.classList.remove('hidden');
    if (loggedInView) loggedInView.classList.add('hidden');
    statusDots.forEach(dot => dot.classList.add('hidden'));
  }
}

function switchAuthTab(tab) {
  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');
  const tabSignInBtn = document.getElementById('tabSignInBtn');
  const tabSignUpBtn = document.getElementById('tabSignUpBtn');

  if (tab === 'signin') {
    if (signInForm) signInForm.classList.remove('hidden');
    if (signUpForm) signUpForm.classList.add('hidden');
    if (tabSignInBtn) {
      tabSignInBtn.classList.add('border-[#0A251C]', 'text-[#0A251C]');
      tabSignInBtn.classList.remove('border-transparent', 'text-brand-muted');
    }
    if (tabSignUpBtn) {
      tabSignUpBtn.classList.remove('border-[#0A251C]', 'text-[#0A251C]');
      tabSignUpBtn.classList.add('border-transparent', 'text-brand-muted');
    }
  } else {
    if (signInForm) signInForm.classList.add('hidden');
    if (signUpForm) signUpForm.classList.remove('hidden');
    if (tabSignUpBtn) {
      tabSignUpBtn.classList.add('border-[#0A251C]', 'text-[#0A251C]');
      tabSignUpBtn.classList.remove('border-transparent', 'text-brand-muted');
    }
    if (tabSignInBtn) {
      tabSignInBtn.classList.remove('border-[#0A251C]', 'text-[#0A251C]');
      tabSignInBtn.classList.add('border-transparent', 'text-brand-muted');
    }
  }
}

function handleAuthSubmit(e, type) {
  e.preventDefault();
  let user = null;
  if (type === 'signin') {
    const ident = document.getElementById('loginIdentifier')?.value || 'Guest';
    user = {
      name: ident.includes('@') ? ident.split('@')[0] : ident,
      email: ident.includes('@') ? ident : `${ident}@shivam.member`,
      phone: ident.includes('@') ? '+91 98765 43210' : ident
    };
    showToast(`Welcome back, ${user.name}!`);
  } else {
    const name = document.getElementById('signUpName')?.value || 'Member';
    const email = document.getElementById('signUpEmail')?.value || 'member@shivam.club';
    const phone = document.getElementById('signUpPhone')?.value || '';
    user = { name, email, phone };
    showToast(`Account created! Welcome to Shivam Opticals VIP Club.`);
  }
  setAuthUser(user);
  closeLoginModal();
}

function handleGuestAuth() {
  const guest = { name: 'Guest Collector', email: 'guest@shivamopticals.com', phone: '+91 98765 00000' };
  setAuthUser(guest);
  showToast('Signed in as Guest Collector');
  closeLoginModal();
}

function handleLogout() {
  setAuthUser(null);
  showToast('You have been signed out successfully.');
  closeLoginModal();
}

// ================= CSV CATALOGUE IMPORT ENGINE =================

function openImportModal() {
  const modal = document.getElementById('importModal');
  if (!modal) return;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  const inner = modal.querySelector('div');
  if (inner) {
    inner.classList.remove('scale-95');
    inner.classList.add('scale-100');
  }
  updateImportUIState();
  if (window.lucide) lucide.createIcons();
}

function closeImportModal() {
  const modal = document.getElementById('importModal');
  if (!modal) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  const inner = modal.querySelector('div');
  if (inner) {
    inner.classList.add('scale-95');
    inner.classList.remove('scale-100');
  }
}

// Setup Drag & Drop on the Drop Zone
function setupCsvDragAndDrop() {
  const dropZone = document.getElementById('csvDropZone');
  if (!dropZone) return;

  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.add('border-[#0A251C]', 'bg-[#FAF3EB]');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove('border-[#0A251C]', 'bg-[#FAF3EB]');
    }, false);
  });

  dropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files && files.length > 0) {
      parseCsvFile(files[0]);
    }
  }, false);
}

// File input change handler
function handleCsvFileSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (file) {
    parseCsvFile(file);
  }
}

// Download ready-to-use sample CSV template
function downloadSampleCSV() {
  const sampleData = `Brand,Name,Category,Shape,Gender,Price,OriginalPrice,Tag,ImageURL,Description
GAST,ASTRO AS04 53,Sunglasses,Square,unisex,17900,20048,⚡ on sale price applied!,images/gast_astro_frame.png,Sculpted black cellulose acetate frame with signature gold dual rivets and dark polarized mineral lenses.
RAY-BAN,Aviator Classic Gold,Sunglasses,Aviator,unisex,12490,14990,⚡ on sale price applied!,https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop,Timeless aviator silhouette crafted in polished gold tone alloy with crystal green G-15 mineral glass lenses.
CARTIER,Panthère Rimless Double Bridge,Eyeglasses,Rectangle,men,92500,108000,⚡ on sale price applied!,https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop,Handcrafted rimless silhouette finished in 24K gold plating with signature Panthère head hinges.
PRADA,Symbole Geometric Bold,Sunglasses,Geometric,women,38500,44000,⚡ on sale price applied!,https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800&auto=format&fit=crop,Avant-garde geometric acetate sunglasses with distinctive faceted temples and enamel Prada triangle logo.
GUCCI,Oversized Tortoise 70s,Eyeglasses,Square,women,34900,41000,⚡ on sale price applied!,https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop,Vintage inspired square frames sculpted in warm amber tortoise acetate with interlocking GG monogram.
TOM FORD,Snowdon Acetate Wayfarer,Sunglasses,Square,men,28900,34000,⚡ on sale price applied!,https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop,Bold thick-profile acetate silhouette with iconic gold T-logo temple inlays and dark smoke polarized lenses.
FASTRACK,Ultralight Titanium Oval,Eyeglasses,Round,unisex,4990,6990,⚡ on sale price applied!,images/plp_frame_2.png,Ultra-flexible memory titanium wire spectacles with featherweight balance and blue-cut protection lenses.`;

  const blob = new Blob([sampleData], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'shivam_optics_sample_catalogue.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Sample CSV template downloaded successfully!');
}

// Parse CSV file via PapaParse or fallback parser
function parseCsvFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    
    // Check if PapaParse is available
    if (window.Papa) {
      window.Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false,
        complete: function(results) {
          processParsedData(file.name, results.data);
        },
        error: function(err) {
          console.warn('PapaParse error, using fallback:', err);
          const fallbackData = parseCsvTextFallback(text);
          processParsedData(file.name, fallbackData);
        }
      });
    } else {
      const fallbackData = parseCsvTextFallback(text);
      processParsedData(file.name, fallbackData);
    }
  };

  reader.onerror = function() {
    showToast('Failed to read the selected file. Please verify CSV encoding.');
  };

  reader.readAsText(file);
}

// Robust pure JS CSV parser fallback
function parseCsvTextFallback(text) {
  const lines = text.split(/\r\n|\n|\r/).filter(line => line.trim().length > 0);
  if (lines.length < 2) return [];

  // Parse header
  const headers = splitCsvLine(lines[0]);
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const rowValues = splitCsvLine(lines[i]);
    if (rowValues.length === 0 || rowValues.every(v => v.trim() === '')) continue;
    const rowObj = {};
    headers.forEach((h, idx) => {
      rowObj[h] = rowValues[idx] !== undefined ? rowValues[idx] : '';
    });
    result.push(rowObj);
  }
  return result;
}

function splitCsvLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current.trim());
  return values;
}

// Clean and format any image link from CSV (including Google Drive, Dropbox, Imgur, etc.)
function sanitizeImageUrl(raw) {
  if (!raw) return 'images/clean_frame_1.png';
  let url = String(raw).trim();

  // Strip surrounding quotes or parentheses
  url = url.replace(/^["'(\[<]+|["')\]>]+$/g, '').trim();

  // If cell contains multiple URLs separated by comma, semicolon, space, or newline, take the first valid URL
  if (url.includes(',') || url.includes(';') || url.includes('\n') || url.includes(' ') || url.includes('|')) {
    const parts = url.split(/[,\s;\n\r|]+/).map(p => p.trim()).filter(Boolean);
    const validUrl = parts.find(p => p.startsWith('http://') || p.startsWith('https://') || p.startsWith('//') || p.startsWith('images/'));
    if (validUrl) {
      url = validUrl;
    } else if (parts.length > 0) {
      url = parts[0];
    }
  }

  // Handle Google Drive links
  // e.g. https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view?usp=sharing
  // or https://drive.google.com/open?id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs
  // or https://drive.google.com/uc?id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs
  const gdriveRegex = /(?:drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=view&)?id=)|docs\.google\.com\/file\/d\/)([a-zA-Z0-9_-]+)/;
  const gdriveMatch = url.match(gdriveRegex);
  if (gdriveMatch && gdriveMatch[1]) {
    const fileId = gdriveMatch[1];
    // lh3.googleusercontent.com/d/ is Google's fast public image CDN for Drive files
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }

  // Handle Dropbox links
  if (url.includes('dropbox.com')) {
    url = url.replace('www.dropbox.com', 'dl.dropboxusercontent.com')
             .replace(/[?&]dl=0/, '')
             .replace(/[?&]dl=1/, '');
    if (!url.includes('?raw=1') && !url.includes('dl.dropboxusercontent.com')) {
      url += (url.includes('?') ? '&' : '?') + 'raw=1';
    }
    return url;
  }

  // Handle OneDrive / Sharepoint links
  if (url.includes('1drv.ms') || url.includes('onedrive.live.com')) {
    if (!url.includes('download=1')) {
      url += (url.includes('?') ? '&' : '?') + 'download=1';
    }
    return url;
  }

  // Handle Imgur links (convert page to direct image)
  if (url.includes('imgur.com') && !url.includes('i.imgur.com') && !url.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    const imgurId = url.split('/').pop().replace(/\..+$/, '');
    if (imgurId) return `https://i.imgur.com/${imgurId}.jpg`;
  }

  // Handle scheme-relative URLs (e.g. //cdn.shopify.com/...)
  if (url.startsWith('//')) {
    return 'https:' + url;
  }

  // Handle www. URLs without protocol
  if (url.startsWith('www.')) {
    return 'https://' + url;
  }

  return url;
}

// Deep extractor for image URL from any CSV row structure
function extractImageFromRow(row) {
  if (!row || typeof row !== 'object') return 'images/clean_frame_1.png';

  const imageCandidates = [
    'imageurl', 'imagelink', 'image_url', 'image_link', 'image', 'images', 
    'photo', 'photourl', 'photo_url', 'photolink', 'photo_link',
    'img', 'imgurl', 'img_url', 'picture', 'pic', 'pictureurl', 'picture_url',
    'url', 'productimage', 'product_image', 'productimg', 'product_img',
    'frontimage', 'front_image', 'frameimage', 'frame_image', 'itemimage', 'item_image',
    'image1', 'image_1', 'thumbnail', 'media', 'link', 'primaryimage', 'primary_image',
    'asset', 'asseturl', 'asset_link', 'googledrivelink', 'drivelink', 'photos',
    'productpicture', 'framepicture', 'photo1', 'pic1', 'picture1'
  ];

  // 1. Check direct candidate header names
  const keys = Object.keys(row);
  for (const candidate of imageCandidates) {
    const foundKey = keys.find(k => k.trim().toLowerCase().replace(/[^a-z0-9]/g, '') === candidate.toLowerCase().replace(/[^a-z0-9]/g, ''));
    if (foundKey && row[foundKey] !== undefined && String(row[foundKey]).trim() !== '') {
      const sanitized = sanitizeImageUrl(row[foundKey]);
      if (sanitized) return sanitized;
    }
  }

  // 2. Fuzzy match any key that contains 'img', 'image', 'photo', 'pic', 'asset', or 'url'
  for (const k of keys) {
    const norm = k.toLowerCase().replace(/[^a-z]/g, '');
    if (norm.includes('img') || norm.includes('image') || norm.includes('photo') || norm.includes('pic') || norm.includes('picture')) {
      const val = String(row[k] || '').trim();
      if (val.length > 5) {
        return sanitizeImageUrl(val);
      }
    }
  }

  // 3. Scan cell values for URLs or image patterns
  for (const k of keys) {
    const val = String(row[k] || '').trim();
    if (
      val.startsWith('http://') || 
      val.startsWith('https://') || 
      val.startsWith('//') || 
      val.startsWith('data:image') ||
      val.includes('drive.google.com') ||
      val.includes('dropbox.com') ||
      val.match(/\.(jpg|jpeg|png|webp|avif|gif|svg)(\?.*)?$/i)
    ) {
      return sanitizeImageUrl(val);
    }
  }

  return 'images/clean_frame_1.png';
}

// Global Image Fallback Handler for <img> tags
function handleImageLoadFallback(imgEl, originalUrl) {
  if (!imgEl) return;
  
  // Try alternative Google Drive endpoint if lh3 CDN was blocked
  if (originalUrl && originalUrl.includes('lh3.googleusercontent.com/d/')) {
    const id = originalUrl.split('/d/')[1];
    if (id && !imgEl.dataset.triedDriveThumb) {
      imgEl.dataset.triedDriveThumb = 'true';
      imgEl.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
      return;
    }
    if (id && !imgEl.dataset.triedDriveUc) {
      imgEl.dataset.triedDriveUc = 'true';
      imgEl.src = `https://drive.google.com/uc?export=view&id=${id}`;
      return;
    }
  }

  imgEl.onerror = null;
  imgEl.src = 'images/clean_frame_1.png';
}
window.handleImageLoadFallback = handleImageLoadFallback;

// Helper to look up field across varying column names
function getRowField(row, candidates, fallback = '') {
  const keys = Object.keys(row);
  for (const c of candidates) {
    const normalizedCandidate = c.toLowerCase().replace(/[^a-z0-9]/g, '');
    const found = keys.find(k => k.toLowerCase().replace(/[^a-z0-9]/g, '') === normalizedCandidate);
    if (found && row[found] !== undefined && String(row[found]).trim() !== '') {
      return String(row[found]).trim();
    }
  }
  return fallback;
}

// Process and normalize rows from sheet
function processParsedData(fileName, rawRows) {
  if (!rawRows || rawRows.length === 0) {
    showToast('The CSV sheet contains no data rows.');
    return;
  }

  const products = [];

  rawRows.forEach((row, idx) => {
    const brand = getRowField(row, ['brand', 'brandname', 'make', 'designer', 'manufacturer', 'label'], 'SHIVAM OPTICALS').toUpperCase();
    const name = getRowField(row, ['name', 'title', 'productname', 'model', 'framename', 'itemname', 'item'], `Haute Frame #${idx + 1}`);
    
    // Parse prices
    const rawPrice = getRowField(row, ['price', 'sellingprice', 'rate', 'cost', 'inr', 'saleprice', 'amount'], '1490');
    const price = parseInt(rawPrice.replace(/[^0-9]/g, ''), 10) || 1490;

    const rawOrigPrice = getRowField(row, ['originalprice', 'mrp', 'regularprice', 'compareprice', 'listprice', 'strikeprice'], '');
    let originalPrice = parseInt(rawOrigPrice.replace(/[^0-9]/g, ''), 10);
    if (!originalPrice || originalPrice <= price) {
      originalPrice = Math.round(price * 1.2);
    }

    const discountPct = Math.max(5, Math.round(((originalPrice - price) / originalPrice) * 100));

    // Category & Shape
    const category = getRowField(row, ['category', 'type', 'eyeweartype', 'frametype', 'producttype'], 'Eyeglasses');
    const type = category.toLowerCase().includes('sun') ? 'sunglasses' : 'eyeglasses';
    
    let shape = getRowField(row, ['shape', 'frameshape', 'silhouette', 'style'], 'Rectangle');
    // Normalize shape capitalisation
    shape = shape.charAt(0).toUpperCase() + shape.slice(1);

    // Gender
    let gender = getRowField(row, ['gender', 'for', 'audience', 'target'], 'unisex').toLowerCase();
    if (!['men', 'women', 'kids', 'unisex'].includes(gender)) {
      gender = 'unisex';
    }

    // Extract & sanitize image URL from sheet
    const imgUrl = extractImageFromRow(row);

    // Description & Tag
    const description = getRowField(row, ['description', 'desc', 'details', 'features', 'about'], 'Handcrafted luxury eyewear sculpted in fine Italian cellulose acetate and lightweight titanium chassis.');
    const tag = getRowField(row, ['tag', 'badge', 'offer', 'label', 'status'], '⚡ on sale price applied!');

    products.push({
      id: `csv-${Date.now()}-${idx + 1}`,
      brand: brand,
      name: name,
      category: category,
      type: type,
      shape: shape,
      gender: gender,
      size: 'M',
      rating: 5.0,
      price: price,
      originalPrice: originalPrice,
      discountPct: discountPct,
      tag: tag,
      tagType: 'sale',
      img: imgUrl,
      images: { default: imgUrl, black: imgUrl },
      colors: [
        { name: 'Classic Tone', hex: '#111111', key: 'black' }
      ],
      defaultColor: 'black',
      description: description
    });
  });

  pendingCsvProducts = products;

  // Update UI Elements in Modal
  document.getElementById('fileNameDisplay').textContent = fileName;
  document.getElementById('fileStatsDisplay').textContent = `(${products.length} products parsed)`;
  document.getElementById('fileStatusContainer').classList.remove('hidden');
  document.getElementById('importOptionsSection').classList.remove('hidden');
  document.getElementById('csvPreviewSection').classList.remove('hidden');
  document.getElementById('previewCount').textContent = products.length;
  document.getElementById('confirmImportBtn').removeAttribute('disabled');

  renderCsvPreview(products);
}

// Render the live table preview fetching images
function renderCsvPreview(products) {
  const tbody = document.getElementById('previewTableBody');
  if (!tbody) return;

  tbody.innerHTML = products.map((p, idx) => `
    <tr class="hover:bg-[#FCFAF7] transition-colors">
      <td class="p-2.5">
        <div class="relative w-14 h-14 flex items-center justify-center bg-white rounded-lg border border-[#E8DEC8] p-1 overflow-hidden shadow-2xs">
          <img 
            src="${p.img}" 
            alt="${p.name}" 
            referrerpolicy="no-referrer"
            class="max-w-full max-h-full object-contain"
            onload="this.parentElement.querySelector('.img-status-ok')?.classList.remove('hidden'); this.parentElement.querySelector('.img-status-err')?.classList.add('hidden');" 
            onerror="handleImageLoadFallback(this, '${p.img}'); this.parentElement.querySelector('.img-status-ok')?.classList.add('hidden'); this.parentElement.querySelector('.img-status-err')?.classList.remove('hidden');"
          >
          <span class="img-status-ok hidden absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" title="Live image link verified"></span>
          <span class="img-status-err hidden absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white" title="Could not load URL - fallback applied"></span>
        </div>
      </td>
      <td class="p-2.5 font-bold text-[#0A251C] whitespace-nowrap">
        ${p.brand}
      </td>
      <td class="p-2.5 font-medium text-neutral-800 max-w-[200px]">
        <div class="font-bold truncate" title="${p.name}">${p.name}</div>
        <a href="${p.img}" target="_blank" rel="noopener noreferrer" class="text-[10px] text-[#0A66C2] hover:underline flex items-center gap-1 mt-0.5 max-w-[200px] truncate" title="Test URL: ${p.img}">
          <svg class="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          <span class="truncate">${p.img}</span>
        </a>
      </td>
      <td class="p-2.5 text-neutral-600 whitespace-nowrap">
        <span class="font-semibold text-neutral-800">${p.shape}</span>
        <span class="text-[10px] text-neutral-400 block">${p.category} • ${p.gender}</span>
      </td>
      <td class="p-2.5 text-right font-bold text-emerald-800 whitespace-nowrap">
        ₹${p.price.toLocaleString('en-IN')}
        <span class="text-[10px] text-neutral-400 line-through block font-normal">₹${p.originalPrice.toLocaleString('en-IN')}</span>
      </td>
      <td class="p-2.5 text-center">
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 text-emerald-800">
          <i data-lucide="check" class="w-3 h-3"></i> Ready
        </span>
      </td>
    </tr>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function clearSelectedCsv() {
  pendingCsvProducts = [];
  const fileInput = document.getElementById('csvFileInput');
  if (fileInput) fileInput.value = '';
  document.getElementById('fileStatusContainer')?.classList.add('hidden');
  document.getElementById('importOptionsSection')?.classList.add('hidden');
  document.getElementById('csvPreviewSection')?.classList.add('hidden');
  document.getElementById('confirmImportBtn')?.setAttribute('disabled', 'true');
  const tbody = document.getElementById('previewTableBody');
  if (tbody) tbody.innerHTML = '';
}

// Confirm and save to LocalStorage
function confirmCatalogImport() {
  if (!pendingCsvProducts || pendingCsvProducts.length === 0) {
    showToast('No parsed products to import.');
    return;
  }

  const mode = document.querySelector('input[name="importMode"]:checked')?.value || 'append';

  try {
    localStorage.setItem('so_custom_catalog', JSON.stringify(pendingCsvProducts));
    localStorage.setItem('so_catalog_mode', mode);

    // Refresh memory catalog
    CATALOG_PRODUCTS = loadActiveCatalog();

    // Rebuild filter checkboxes to include any new brands or shapes
    rebuildBrandFilterOptions();
    
    // Apply filters and re-render grid
    applyFilters();
    updateImportUIState();

    closeImportModal();
    showToast(`Successfully imported ${pendingCsvProducts.length} frames into your catalogue!`);
  } catch (err) {
    console.error('Import save error:', err);
    showToast('Storage quota exceeded or error saving catalogue.');
  }
}

// Reset catalog to default
function resetToDefaultCatalog() {
  localStorage.removeItem('so_custom_catalog');
  localStorage.removeItem('so_catalog_mode');
  
  CATALOG_PRODUCTS = [...DEFAULT_CATALOG_PRODUCTS];
  
  rebuildBrandFilterOptions();
  applyFilters();
  updateImportUIState();
  closeImportModal();
  showToast('Catalogue reset to original Shivam Opticals collection.');
}

// Update UI badges/buttons depending on whether custom catalog is active
function updateImportUIState() {
  const hasCustom = !!localStorage.getItem('so_custom_catalog');
  const resetToolbarBtn = document.getElementById('resetCatalogToolbarBtn');
  const resetDefaultBtn = document.getElementById('resetDefaultCatalogBtn');
  
  if (resetToolbarBtn) {
    if (hasCustom) resetToolbarBtn.classList.remove('hidden');
    else resetToolbarBtn.classList.add('hidden');
  }

  if (resetDefaultBtn) {
    if (hasCustom) resetDefaultBtn.classList.remove('opacity-40', 'pointer-events-none');
    else resetDefaultBtn.classList.add('opacity-40', 'pointer-events-none');
  }
}

// Dynamically populate brand sidebar checkboxes from all products in catalog
function rebuildBrandFilterOptions() {
  const brandSection = document.getElementById('brandSection');
  if (!brandSection) return;

  // Extract unique brands
  const brands = Array.from(new Set(CATALOG_PRODUCTS.map(p => p.brand).filter(Boolean))).sort();
  
  // Preserve currently checked brands
  const checkedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value);

  brandSection.innerHTML = brands.map(brand => {
    const isChecked = checkedBrands.includes(brand);
    return `
      <label class="flex items-center gap-2.5 text-xs text-neutral-600 hover:text-neutral-900 cursor-pointer select-none">
        <input 
          type="checkbox" 
          name="brand" 
          value="${brand}" 
          ${isChecked ? 'checked' : ''} 
          onchange="applyFilters()" 
          class="filter-checkbox w-4 h-4 rounded border-neutral-300 text-[#0A251C] focus:ring-0 cursor-pointer"
        >
        <span>${brand}</span>
      </label>
    `;
  }).join('');
}


