// Shivam Optics - Haute Lunetterie E-Commerce Engine

// 1. Comprehensive Product Catalog
const DEFAULT_PRODUCTS = [
  {
    id: 'so-gast-100',
    brand: 'GAST',
    name: 'ASTRO AS04 53',
    tag: 'NEW ARRIVAL',
    collection: 'new',
    type: 'Sunglasses',
    shape: 'Square',
    price: 17900,
    originalPrice: 20048,
    rating: 5.0,
    reviews: 64,
    size: 'Medium • 53-19-145',
    material: 'Sculpted Black Cellulose Acetate',
    description: 'Sculpted black cellulose acetate frame with signature gold dual rivets and dark polarized mineral lenses.',
    images: {
      black: 'images/gast_astro_frame.png'
    },
    colors: [
      { name: 'Jet Black Gloss', hex: '#111111', key: 'black' },
      { name: 'Havana Tortoise', hex: '#63381B', key: 'tortoise' }
    ],
    defaultColor: 'black',
    tagText: 'Polarized UV400'
  },
  {
    id: 'so-101',
    name: 'Half Frame Rectangle Metal',
    tag: 'BEST SELLER',
    collection: 'bestsellers',
    type: 'Eyeglasses',
    shape: 'Rectangle',
    price: 1490,
    originalPrice: 2490,
    rating: 4.9,
    reviews: 142,
    size: 'Medium • 52-18-142',
    material: 'Aerospace Alloy & Acetate',
    description: 'Precision engineered half-frame rectangle glasses with comfortable silicone nose pads and zero power blue-cut lenses.',
    images: {
      black: 'images/clean_frame_1.png',
      gold: 'images/clean_frame_1.png'
    },
    colors: [
      { name: 'Half Black / Gold', hex: '#1A1816', key: 'black' },
      { name: 'Classic Black', hex: '#222222', key: 'gold' }
    ],
    defaultColor: 'black',
    tagText: 'Zero Power'
  },
  {
    id: 'so-102',
    name: 'Half Frame Square Metal Computer',
    tag: 'NEW ARRIVAL',
    collection: 'new',
    type: 'Eyeglasses',
    shape: 'Square',
    price: 1490,
    originalPrice: 2490,
    rating: 4.8,
    reviews: 98,
    size: 'Medium • 50-19-145',
    material: 'Stainless Steel & Tortoise Tips',
    description: 'Modern half-rim square optical frame fitted with anti-glare screen protection lenses.',
    images: {
      gold: 'images/clean_frame_2.png',
      black: 'images/clean_frame_2.png',
      silver: 'images/clean_frame_2.png'
    },
    colors: [
      { name: 'Amber Gold', hex: '#E5A93C', key: 'gold' },
      { name: 'Tortoise Black', hex: '#1A1816', key: 'black' },
      { name: 'Silver Tone', hex: '#D1D5DB', key: 'silver' }
    ],
    defaultColor: 'gold',
    tagText: 'Zero Power'
  },
  {
    id: 'so-103',
    name: 'Half Frame Square Metal Gunmetal',
    tag: 'NEW ARRIVAL',
    collection: 'new',
    type: 'Eyeglasses',
    shape: 'Square',
    price: 1490,
    originalPrice: 2490,
    rating: 4.9,
    reviews: 112,
    size: 'Medium • 51-19-145',
    material: 'Gunmetal Titanium Wire',
    description: 'Ultra-light half frame chassis with spring hinge flexibility and hydrophobic coating.',
    images: {
      gunmetal: 'images/clean_frame_3.png',
      black: 'images/clean_frame_3.png'
    },
    colors: [
      { name: 'Brushed Gunmetal', hex: '#6B7280', key: 'gunmetal' },
      { name: 'Stealth Black', hex: '#1A1816', key: 'black' }
    ],
    defaultColor: 'gunmetal',
    tagText: 'Zero Power'
  },
  {
    id: 'so-104',
    name: 'Full Frame Square Metal Eyeglasses',
    tag: 'BEST SELLER',
    collection: 'bestsellers',
    type: 'Eyeglasses',
    shape: 'Square',
    price: 3990,
    originalPrice: 5490,
    rating: 5.0,
    reviews: 87,
    size: 'Wide • 54-18-148',
    material: 'Double-Bridge Aviation Metal',
    description: 'Statement aviator optical silhouette with magnetic tinted sun clip-on and custom lenses included.',
    images: {
      amber: 'images/clean_frame_4.png',
      black: 'images/clean_frame_4.png',
      silver: 'images/clean_frame_4.png'
    },
    colors: [
      { name: 'Amber Clip', hex: '#B45309', key: 'amber' },
      { name: 'Matte Black', hex: '#1A1816', key: 'black' },
      { name: 'Chrome Silver', hex: '#D1D5DB', key: 'silver' }
    ],
    defaultColor: 'amber',
    tagText: 'Including Lenses',
    promoBanner: '1 Pair at 15% | Buy 1 Get 1 Free'
  },
  {
    id: 'so-105',
    name: 'Monaco Bold Square',
    tag: 'NEW ARRIVAL',
    collection: 'new',
    type: 'Sunglasses',
    shape: 'Square',
    price: 3600,
    originalPrice: 4900,
    rating: 4.7,
    reviews: 79,
    size: 'Medium • 53-19-145',
    material: 'Organic Bio-Acetate',
    description: 'Thick-profile editorial square sunglasses with dark smoke polarized lenses and 5-barrel German hinges.',
    images: {
      black: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop',
      tortoise: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop'
    },
    colors: [
      { name: 'Black', hex: '#1A1816', key: 'black' },
      { name: 'Dark Tortoise', hex: '#4A2A18', key: 'tortoise' }
    ],
    defaultColor: 'black'
  },
  {
    id: 'so-106',
    name: 'Riviera Cat-Eye Luxe',
    tag: 'BEST SELLER',
    collection: 'bestsellers',
    type: 'Sunglasses',
    shape: 'Cat-Eye',
    price: 3900,
    originalPrice: 5400,
    rating: 4.9,
    reviews: 135,
    size: 'Medium • 52-16-142',
    material: 'Hand-buffed Acetate',
    description: 'Slightly upturned dramatic cat-eye shades tailored to elevate cheekbones and facial symmetry.',
    images: {
      black: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800&auto=format&fit=crop',
      amber: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop'
    },
    colors: [
      { name: 'Gloss Black', hex: '#1A1816', key: 'black' },
      { name: 'Amber Glow', hex: '#B87333', key: 'amber' }
    ],
    defaultColor: 'black'
  },
  {
    id: 'so-107',
    name: 'Kensington Clubmaster',
    tag: 'NEW ARRIVAL',
    collection: 'new',
    type: 'Sunglasses',
    shape: 'Clubmaster',
    price: 3750,
    originalPrice: 5100,
    rating: 4.8,
    reviews: 91,
    size: 'Medium • 51-20-145',
    material: 'Acetate Browline & Wire Rim',
    description: 'A timeless mid-century silhouette modernized with brushed bronze chassis and G-15 green polarized lenses.',
    images: {
      tortoise: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
      black: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop'
    },
    colors: [
      { name: 'Tortoise Gold', hex: '#63381B', key: 'tortoise' },
      { name: 'Black Gunmetal', hex: '#2A2A2A', key: 'black' }
    ],
    defaultColor: 'tortoise'
  },
  {
    id: 'so-108',
    name: 'Tokyo Thin Titanium Round',
    tag: 'BEST SELLER',
    collection: 'bestsellers',
    type: 'Sunglasses',
    shape: 'Round',
    price: 4600,
    originalPrice: 6500,
    rating: 5.0,
    reviews: 182,
    size: 'Narrow • 48-21-145',
    material: 'Pure Japanese Titanium (12g)',
    description: 'Ultralight round frames engineered in Sabae, Japan. Fitted with adaptive light-responsive lenses.',
    images: {
      gold: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
      silver: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop'
    },
    colors: [
      { name: 'Antique Gold', hex: '#C5A059', key: 'gold' },
      { name: 'Brushed Silver', hex: '#D6D6D6', key: 'silver' }
    ],
    defaultColor: 'gold'
  },
  {
    id: 'so-109',
    name: 'Soho Flat-Top Rectangle',
    tag: 'NEW ARRIVAL',
    collection: 'new',
    type: 'Sunglasses',
    shape: 'Rectangle',
    price: 3500,
    originalPrice: 4700,
    rating: 4.6,
    reviews: 58,
    size: 'Medium • 54-18-145',
    material: 'Cellulose Acetate',
    description: 'Clean architectural line with razor flat-top brow for an assertive, contemporary street profile.',
    images: {
      black: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop',
      tortoise: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop'
    },
    colors: [
      { name: 'Jet Black', hex: '#111111', key: 'black' },
      { name: 'Honey Amber', hex: '#C68B59', key: 'tortoise' }
    ],
    defaultColor: 'black'
  },
  {
    id: 'so-110',
    name: 'Kyoto Hexagonal Wire',
    tag: 'NEW ARRIVAL',
    collection: 'new',
    type: 'Sunglasses',
    shape: 'Geometric',
    price: 4100,
    originalPrice: 5600,
    rating: 4.8,
    reviews: 73,
    size: 'Medium • 51-19-145',
    material: 'Titanium Wire & Silicon Pads',
    description: 'Subtle six-sided polygon profile with filigreed coin edge rim and hypoallergenic ceramic nose pads.',
    images: {
      gold: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
      black: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop'
    },
    colors: [
      { name: 'Rose Gold', hex: '#B76E79', key: 'gold' },
      { name: 'Stealth Black', hex: '#1A1816', key: 'black' }
    ],
    defaultColor: 'gold'
  },
  {
    id: 'so-111',
    brand: 'MONT BLANC',
    name: 'Montblanc MB0325S 001 53',
    tag: 'NEW ARRIVAL',
    collection: 'new',
    type: 'Sunglasses',
    shape: 'Wayfarer',
    price: 18400,
    originalPrice: 22080,
    rating: 5.0,
    reviews: 92,
    size: 'Medium • 53-17-145',
    material: 'Italian Cellulose Acetate',
    description: 'Handcrafted Italian cellulose acetate wayfarer silhouette with full rim construction and signature Montblanc white star temple emblem.',
    images: {
      black: 'images/montblanc_mb0325s.png'
    },
    colors: [
      { name: 'Polished Black', hex: '#111111', key: 'black' }
    ],
    defaultColor: 'black',
    tagText: 'Polarized UV400'
  },
  {
    id: 'so-112',
    brand: 'CARTIER',
    name: 'Panthère Rimless Double Bridge',
    tag: 'NEW ARRIVAL',
    collection: 'new',
    type: 'Eyeglasses',
    shape: 'Rectangle',
    price: 92500,
    originalPrice: 108000,
    rating: 5.0,
    reviews: 48,
    size: 'Medium • 54-18-140',
    material: '24K Gold Plated Titanium',
    description: 'Ultra-exclusive rimless double-bridge spectacle finished in precious 24K gold plating with sculpted Panthère head hinges.',
    images: {
      gold: 'images/clean_frame_1.png',
      black: 'images/clean_frame_2.png'
    },
    colors: [
      { name: '24K Polished Gold', hex: '#C5A059', key: 'gold' },
      { name: 'Onyx Black', hex: '#1A1816', key: 'black' }
    ],
    defaultColor: 'gold',
    tagText: '24K Gold'
  },
  {
    id: 'so-113',
    brand: 'JACQUES MARIE MAGE',
    name: 'Dealan Havana Classic',
    tag: 'NEW ARRIVAL',
    collection: 'new',
    type: 'Sunglasses',
    shape: 'Cat-Eye',
    price: 64500,
    originalPrice: 75000,
    rating: 4.9,
    reviews: 67,
    size: 'Medium • 50-20-142',
    material: '10mm Cured Cellulose Acetate',
    description: 'Subtle cat-eye rectangular frame crafted from 10mm block cellulose acetate with precious custom hardware and mineral glass lenses.',
    images: {
      tortoise: 'images/plp_frame_2.png',
      black: 'images/plp_frame_3.png'
    },
    colors: [
      { name: 'Havana Tortoise', hex: '#63381B', key: 'tortoise' },
      { name: 'Piano Black', hex: '#111111', key: 'black' }
    ],
    defaultColor: 'tortoise',
    tagText: 'Limited Edition'
  }
];

// Curated Recommended Eyeglasses (Right grid next to model in "Tried, Loved & Recommended")
const RECOMMENDED_FRAMES = [
  {
    id: 'rec-201',
    name: 'Aero Titanium Rimless',
    price: 4200,
    originalPrice: 5800,
    shape: 'Rectangle',
    rating: 4.9,
    reviews: 84,
    size: 'Medium • 52-18-142',
    img: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop',
    colorHex: ['#C5A059', '#1A1816', '#A0A0A0'],
    desc: 'Featherlight 12g rimless chassis with silicone comfort pads.'
  },
  {
    id: 'rec-202',
    name: 'Oxford Round Havana',
    price: 3600,
    originalPrice: 4900,
    shape: 'Round',
    rating: 4.8,
    reviews: 129,
    size: 'Medium • 49-20-145',
    img: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop',
    colorHex: ['#63381B', '#1A1816'],
    desc: 'Classic scholarly keyhole round in rich Italian tortoise acetate.'
  },
  {
    id: 'rec-203',
    name: 'Sleek Browline Club',
    price: 3800,
    originalPrice: 5200,
    shape: 'Clubmaster',
    rating: 4.9,
    reviews: 62,
    size: 'Medium • 51-19-145',
    img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    colorHex: ['#1A1816', '#C5A059'],
    desc: 'Structured architectural browline frame for boardroom confidence.'
  },
  {
    id: 'rec-204',
    name: 'Nordic Crystal Geometric',
    price: 3950,
    originalPrice: 5400,
    shape: 'Geometric',
    rating: 5.0,
    reviews: 77,
    size: 'Medium • 50-19-145',
    img: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800&auto=format&fit=crop',
    colorHex: ['#D6D6D6', '#B76E79', '#1A1816'],
    desc: 'Translucent champagne acetate with exposed metallic core wire.'
  }
];

// Load active catalog (defaults merged with any imported custom CSV products)
function loadActiveCatalog() {
  try {
    const raw = localStorage.getItem('so_custom_catalog');
    const mode = localStorage.getItem('so_catalog_mode') || 'append';
    if (raw) {
      const custom = JSON.parse(raw);
      if (Array.isArray(custom) && custom.length > 0) {
        if (mode === 'replace') {
          return custom;
        } else {
          return [...custom, ...DEFAULT_PRODUCTS];
        }
      }
    }
  } catch (e) {
    console.error('Failed to parse custom catalog', e);
  }
  return [...DEFAULT_PRODUCTS];
}

let PRODUCTS = loadActiveCatalog();
let pendingCsvProducts = [];

// App State Management
let currentTab = 'new';
let currentShapeFilter = 'all';
let cart = JSON.parse(localStorage.getItem('so_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('so_wishlist') || '[]');
let activePromo = null; // e.g. { code: 'SHIVAM10', discountPct: 0.10 }
let selectedProductForLens = null;

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid();
  updateCartUI();
  updateWishlistUI();
  updateAuthUI();
  setupEventListeners();
  setupCsvDragAndDrop();
  updateImportUIState();

  if (window.lucide) {
    lucide.createIcons();
  }
});

// Render Main Product Grid (5 Columns as per screenshot)
function renderProductGrid() {
  const container = document.getElementById('productGrid');
  if (!container) return;

  // Filter products by tab and shape
  let items = PRODUCTS.filter(p => {
    const tabMatch = currentTab === 'new' ? p.collection === 'new' : p.collection === 'bestsellers';
    const normShape = s => s ? s.toLowerCase().replace(/[-\s]/g, '') : '';
    const shapeMatch = currentShapeFilter === 'all' || normShape(p.shape) === normShape(currentShapeFilter);
    return tabMatch && shapeMatch;
  });

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-brand-muted">
        <i data-lucide="glasses" class="w-10 h-10 mx-auto text-brand-gold mb-2 opacity-50"></i>
        <p class="text-sm font-semibold uppercase tracking-wider text-brand-dark">No frames found for this shape filter</p>
        <button onclick="filterCatalog('all')" class="mt-4 px-4 py-2 bg-brand-dark text-white text-xs uppercase tracking-widest rounded-sm hover:bg-brand-gold transition">
          View All Frames
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = items.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    const activeColor = product.defaultColor;
    const activeImg = product.img || (product.images ? (product.images[activeColor] || Object.values(product.images)[0]) : 'images/clean_frame_1.png');
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 12;
    const brandName = product.brand || 'GAST';
    const colorCount = (product.colors && product.colors.length) ? product.colors.length : 3;

    return `
      <div class="product-card group bg-white border border-[#D1D5DB] rounded-2xl flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 relative" data-id="${product.id}">
        
        <!-- Upper Section: Wishlist Heart + SAVE Pill + Eyewear Image + Specs -->
        <div class="p-3 pt-2.5 pb-2 flex flex-col items-center">
          
          <!-- Top Row: Wishlist Heart on Left & Burgundy 'SAVE XX%' Pill on Right -->
          <div class="w-full flex items-center justify-between mb-1">
            <button 
              onclick="toggleWishlist('${product.id}', event)" 
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
          <a href="checkout.html?id=${product.id}" class="w-full h-24 flex items-center justify-center p-1 my-1 cursor-pointer">
            <img 
              id="pimg-${product.id}"
              src="${activeImg}" 
              alt="${product.name}" 
              loading="lazy" 
              referrerpolicy="no-referrer"
              onerror="handleImageLoadFallback(this, '${activeImg}')"
              class="h-24 max-h-24 max-w-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
            >
          </a>

          <!-- Brand Header with Spaced Lettering: GAST / MONTBLANC -->
          <div class="text-[10px] font-semibold tracking-[0.25em] text-[#6B7280] uppercase mt-1 text-center">
            ${brandName}
          </div>

          <!-- Bold Model / Product Title -->
          <a href="checkout.html?id=${product.id}" class="block text-center w-full">
            <h4 class="text-sm font-bold text-[#1A1816] tracking-wide mt-0.5 text-center truncate w-full hover:text-brand-gold transition cursor-pointer" title="${product.name}">
              ${product.name}
            </h4>
          </a>

          <!-- Price Row: From ₹1,490.00 in #16803E and strikethrough #DD2E2E -->
          <div class="flex items-center justify-center gap-1.5 mt-1.5 flex-wrap">
            <span class="text-xs text-[#6B7280]">From</span>
            <span class="text-xs font-bold text-[#16803E]">₹${product.price.toLocaleString('en-IN')}.00</span>
            <span class="text-xs text-[#DD2E2E] line-through">₹${product.originalPrice.toLocaleString('en-IN')}.00</span>
          </div>

          <!-- Colors Subtitle -->
          <div class="text-[11px] text-[#6B7280] mt-0.5 mb-1 text-center">
            Available in ${colorCount} Colors
          </div>

        </div>

        <!-- Full-Width Bottom Button: ADD TO CART with Shopping Bag Icon in #D9D9D9 -->
        <button 
          onclick="addToCartDirect('${product.id}')" 
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

// Carousel Scroll for Tried, Loved & Recommended
function scrollRecCarousel(direction) {
  const container = document.getElementById('recommendedScrollContainer');
  if (container) {
    container.scrollBy({ left: direction * 230, behavior: 'smooth' });
  }
}

// Switch MEN / WOMEN / KIDS tabs in Recommended Section
function switchRecommendedCategory(category, button) {
  document.querySelectorAll('.rec-tab-btn').forEach(btn => {
    btn.classList.remove('active', 'text-[#00A896]', 'border-b-2', 'border-[#00A896]', 'font-bold');
    btn.classList.add('text-[#9CA3AF]');
  });
  if (button) {
    button.classList.add('active', 'text-[#00A896]', 'border-b-2', 'border-[#00A896]', 'font-bold');
    button.classList.remove('text-[#9CA3AF]');
  }
  showToast(`Showing Recommended for ${category.toUpperCase()}`);
}

// Add directly to cart from Recommended Section
function addRecommendedItemToCart(name, price, img) {
  const item = {
    cartId: `rec-${Date.now()}`,
    productId: `rec-${Date.now()}`,
    name: name,
    price: price,
    img: img,
    lensConfig: 'Zero Power / Standard',
    quantity: 1
  };
  cart.push(item);
  saveCart();
  updateCartUI();
  toggleCartDrawer(true);
  showToast(`Added ${name} to cart!`);
}

// Switch New Arrivals / Best Sellers Tab
function switchCollectionTab(tab) {
  currentTab = tab;
  document.getElementById('tabNewArrivals').classList.toggle('active', tab === 'new');
  document.getElementById('tabBestSellers').classList.toggle('active', tab === 'bestsellers');
  renderProductGrid();
}

// Quick Shape Filter (Sunglasses or general)
function filterCatalog(shape, element) {
  currentShapeFilter = shape;

  // Update pills UI
  const pills = document.querySelectorAll('#categoryFilterPills .filter-pill');
  pills.forEach(p => {
    p.classList.remove('active', 'bg-brand-dark', 'text-white');
    p.classList.add('bg-white', 'text-brand-dark');
  });

  if (element) {
    element.classList.add('active', 'bg-brand-dark', 'text-white');
    element.classList.remove('bg-white', 'text-brand-dark');
  }

  renderProductGrid();
}

// Eyeglasses Shape Selector Handler
function filterEyeglasses(shape) {
  currentShapeFilter = shape;
  switchCollectionTab('new');
  scrollToProducts();
  showToast(`Filtered by ${shape} Eyeglasses`);
}

function scrollToProducts() {
  const el = document.getElementById('sunglasses');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Interactive Color Switcher on Product Card
function changeCardColor(productId, colorKey, event) {
  if (event) event.stopPropagation();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  if (!card) return;

  const dots = card.querySelectorAll('.color-dot');
  dots.forEach(d => d.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  const imgEl = document.getElementById(`pimg-${productId}`);
  if (imgEl && product.images[colorKey]) {
    imgEl.src = product.images[colorKey];
  }
}

// ================= CART MANAGEMENT =================
function addToCartDirect(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cartItem = {
    cartId: `${product.id}-direct-${Date.now()}`,
    productId: product.id,
    name: product.name,
    shape: product.shape,
    price: product.price,
    img: Object.values(product.images)[0],
    lensConfig: 'Frame Only (Plano)',
    quantity: 1
  };

  cart.push(cartItem);
  saveCart();
  updateCartUI();
  toggleCartDrawer(true);
  showToast(`Added ${product.name} to cart`);
}

function updateCartUI() {
  const countBadges = [
    document.getElementById('cartCountBadge'), 
    document.getElementById('cartDrawerCounter'),
    document.getElementById('cartHeaderCount')
  ];
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  countBadges.forEach(b => {
    if (b) b.innerText = totalCount;
  });

  const cartList = document.getElementById('cartItemsList');
  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center text-brand-muted py-12">
        <i data-lucide="shopping-bag" class="w-12 h-12 text-brand-gold/40 mb-3"></i>
        <p class="text-sm font-serif font-bold text-brand-dark uppercase">Your Cart is Empty</p>
        <p class="text-xs text-brand-muted max-w-xs mt-1">Discover our handcrafted acetate and titanium frames.</p>
        <button onclick="toggleCartDrawer(false)" class="mt-4 px-6 py-2.5 bg-brand-dark text-white text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-brand-gold transition">
          Start Exploring
        </button>
      </div>
    `;
    lucide.createIcons();
  } else {
    cartList.innerHTML = cart.map((item, idx) => `
      <div class="flex gap-4 p-3 bg-brand-sand/20 border border-brand-border rounded-lg relative">
        <img src="${item.img}" alt="${item.name}" referrerpolicy="no-referrer" onerror="handleImageLoadFallback(this, '${item.img}')" class="w-16 h-16 object-contain bg-white rounded p-1 border border-brand-border/60">
        
        <div class="flex-1">
          <div class="flex justify-between items-start">
            <h4 class="text-xs font-serif font-bold uppercase text-brand-dark tracking-wide">${item.name}</h4>
            <button onclick="removeFromCart(${idx})" class="text-brand-muted hover:text-red-500 transition p-1">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <p class="text-[10px] text-brand-gold font-medium uppercase tracking-wider">${item.lensConfig || 'Complimentary Anti-Glare Lenses'}</p>
          <div class="flex justify-between items-center mt-2">
            <div class="flex items-center border border-brand-border rounded bg-white text-xs">
              <button onclick="updateCartQty(${idx}, -1)" class="px-2 py-0.5 text-brand-dark hover:bg-brand-sand transition">-</button>
              <span class="px-2 font-mono font-medium">${item.quantity}</span>
              <button onclick="updateCartQty(${idx}, 1)" class="px-2 py-0.5 text-brand-dark hover:bg-brand-sand transition">+</button>
            </div>
            <span class="text-xs font-bold text-brand-dark font-mono">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    `).join('');
    lucide.createIcons();
  }

  // Update Pricing calculation
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = activePromo ? Math.round(subtotal * activePromo.discountPct) : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount);

  document.getElementById('cartSubtotal').innerText = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById('cartGrandTotal').innerText = `₹${grandTotal.toLocaleString('en-IN')}`;
  
  const discountRow = document.getElementById('discountRow');
  if (discountRow) {
    if (activePromo && discountAmount > 0) {
      discountRow.classList.remove('hidden');
      document.getElementById('cartDiscount').innerText = `-₹${discountAmount.toLocaleString('en-IN')}`;
    } else {
      discountRow.classList.add('hidden');
    }
  }

  const checkoutTotal = document.getElementById('checkoutTotalText');
  if (checkoutTotal) checkoutTotal.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;
}

function updateCartQty(index, change) {
  if (!cart[index]) return;
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast('Removed item from cart');
}

function saveCart() {
  localStorage.setItem('so_cart', JSON.stringify(cart));
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (open) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
  } else {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  }
}

function applyPromoCode() {
  const input = document.getElementById('promoInput');
  const code = input ? input.value.trim().toUpperCase() : '';
  if (code === 'SHIVAM10') {
    activePromo = { code: 'SHIVAM10', discountPct: 0.10 };
    updateCartUI();
    showToast('Promo code applied! 10% discount added.');
  } else if (code) {
    showToast('Invalid promo code. Try SHIVAM10');
  }
}

// ================= WISHLIST MANAGEMENT =================
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Removed from favorites');
  } else {
    wishlist.push(productId);
    showToast('Saved to your favorites');
  }
  localStorage.setItem('so_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  renderProductGrid();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlistCountBadge');
  const counter = document.getElementById('wishlistDrawerCounter');
  const headerCount = document.getElementById('wishlistHeaderCount');

  if (headerCount) headerCount.innerText = wishlist.length;

  if (badge) {
    badge.innerText = wishlist.length;
    if (wishlist.length > 0) {
      badge.classList.remove('scale-0');
    } else {
      badge.classList.add('scale-0');
    }
  }
  if (counter) counter.innerText = `(${wishlist.length} items)`;

  const list = document.getElementById('wishlistItemsList');
  if (!list) return;

  if (wishlist.length === 0) {
    list.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center text-brand-muted py-12">
        <i data-lucide="heart" class="w-12 h-12 text-brand-gold/40 mb-3"></i>
        <p class="text-sm font-serif font-bold text-brand-dark uppercase">No Saved Frames</p>
        <p class="text-xs text-brand-muted max-w-xs mt-1">Tap the heart on any frame to curate your personal collection.</p>
      </div>
    `;
  } else {
    const items = PRODUCTS.filter(p => wishlist.includes(p.id));
    list.innerHTML = items.map(p => `
      <div class="flex gap-4 p-3 bg-brand-sand/20 border border-brand-border rounded-lg items-center justify-between">
        <img src="${Object.values(p.images)[0]}" alt="${p.name}" referrerpolicy="no-referrer" onerror="handleImageLoadFallback(this, '${Object.values(p.images)[0]}')" class="w-14 h-14 object-contain bg-white rounded p-1 border border-brand-border/60">
        <div class="flex-1">
          <h4 class="text-xs font-serif font-bold uppercase text-brand-dark">${p.name}</h4>
          <span class="text-xs font-bold text-brand-dark">₹${p.price.toLocaleString('en-IN')}</span>
        </div>
        <div class="flex flex-col gap-1.5">
          <button onclick="addToCartDirect('${p.id}'); toggleWishlist('${p.id}')" class="px-2.5 py-1 bg-brand-dark hover:bg-brand-gold text-white text-[10px] font-bold uppercase rounded transition">
            Move to Cart
          </button>
          <button onclick="toggleWishlist('${p.id}')" class="text-[10px] text-brand-muted hover:text-red-500 uppercase text-center">
            Remove
          </button>
        </div>
      </div>
    `).join('');
  }
  lucide.createIcons();
}

function toggleWishlistDrawer(open) {
  const drawer = document.getElementById('wishlistDrawer');
  const backdrop = document.getElementById('wishlistBackdrop');
  if (open) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
  } else {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  }
}

// ================= QUICK VIEW MODAL =================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  document.getElementById('quickViewTitle').innerText = product.name;
  document.getElementById('quickViewShape').innerText = `${product.shape} • ${product.type}`;
  document.getElementById('quickViewPrice').innerText = `₹${product.price.toLocaleString('en-IN')}`;
  document.getElementById('quickViewOriginalPrice').innerText = `₹${product.originalPrice.toLocaleString('en-IN')}`;
  document.getElementById('quickViewSize').innerText = product.size;
  document.getElementById('quickViewMaterial').innerText = product.material;
  document.getElementById('quickViewDesc').innerText = product.description;
  document.getElementById('quickViewBadge').innerText = product.tag;
  document.getElementById('quickViewReviews').innerText = `(${product.rating} ★ • ${product.reviews} reviews)`;

  const imgEl = document.getElementById('quickViewImg');
  const defaultImg = product.images[product.defaultColor] || Object.values(product.images)[0];
  imgEl.src = defaultImg;

  // Swatches
  const colorContainer = document.getElementById('quickViewColors');
  colorContainer.innerHTML = product.colors.map(col => `
    <button 
      class="w-6 h-6 rounded-full border-2 border-white shadow-md transition-transform hover:scale-125 focus:ring-2 focus:ring-brand-gold" 
      style="background-color: ${col.hex}"
      title="${col.name}"
      onclick="document.getElementById('quickViewImg').src='${product.images[col.key]}'"
    ></button>
  `).join('');

  // Buttons
  document.getElementById('quickViewSelectLensBtn').onclick = () => {
    closeQuickView();
    openLensSelectorModal(product.id);
  };
  document.getElementById('quickViewDirectAddBtn').onclick = () => {
    addToCartDirect(product.id);
    closeQuickView();
  };

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.firstElementChild.classList.remove('scale-95');
  lucide.createIcons();
}

function openQuickViewByShape(shape) {
  const p = PRODUCTS.find(prod => prod.shape.toLowerCase() === shape.toLowerCase()) || PRODUCTS[0];
  openQuickView(p.id);
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.firstElementChild.classList.add('scale-95');
}

// ================= LENS SELECTION MODAL =================
function openLensSelectorModal(productId, customName, customPrice) {
  let product = null;
  if (productId) {
    product = PRODUCTS.find(p => p.id === productId);
  }
  if (!product) {
    product = {
      id: 'custom-' + Date.now(),
      name: customName || 'Handcrafted Precision Frame',
      price: customPrice || 3800,
      images: { default: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop' },
      shape: 'Classic'
    };
  }
  selectedProductForLens = product;

  document.getElementById('lensModalProductTitle').innerText = `${product.name} (Base: ₹${product.price.toLocaleString('en-IN')})`;
  document.getElementById('lensModalTotalPrice').innerText = `₹${product.price.toLocaleString('en-IN')}`;

  const modal = document.getElementById('lensModal');
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.firstElementChild.classList.remove('scale-95');
}

function closeLensSelectorModal() {
  const modal = document.getElementById('lensModal');
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.firstElementChild.classList.add('scale-95');
  selectedProductForLens = null;
}

function confirmLensSelectionAndAdd() {
  if (!selectedProductForLens) return;

  const lensType = document.querySelector('input[name="lensType"]:checked')?.value || 'Zero Power Screen';
  const coating = document.querySelector('input[name="lensCoating"]:checked')?.value || 'Anti-Glare Hydrophobic';

  let extra = 0;
  if (lensType.includes('Single Vision')) extra += 500;
  if (lensType.includes('Progressive')) extra += 1800;
  if (coating.includes('Blue Block')) extra += 750;
  if (coating.includes('Transitions')) extra += 1400;

  const finalPrice = selectedProductForLens.price + extra;

  const item = {
    cartId: `${selectedProductForLens.id}-custom-${Date.now()}`,
    productId: selectedProductForLens.id,
    name: selectedProductForLens.name,
    price: finalPrice,
    img: Object.values(selectedProductForLens.images)[0],
    lensConfig: `${lensType} • ${coating}`,
    quantity: 1
  };

  cart.push(item);
  saveCart();
  updateCartUI();
  closeLensSelectorModal();
  toggleCartDrawer(true);
  showToast(`Customized ${selectedProductForLens.name} added to cart!`);
}

// ================= IN-STORE APPOINTMENT MODAL =================
function openAppointmentModal() {
  const modal = document.getElementById('appointmentModal');
  if (!modal) return;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.firstElementChild.classList.remove('scale-95');
}

function closeAppointmentModal() {
  const modal = document.getElementById('appointmentModal');
  if (!modal) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.firstElementChild.classList.add('scale-95');
}

function handleAppointmentSubmit(event) {
  event.preventDefault();
  closeAppointmentModal();
  const appointmentId = 'APT-' + Math.floor(1000 + Math.random() * 9000);
  showToast(`Appointment Confirmed (${appointmentId})! Optometrist details sent via SMS.`);
  event.target.reset();
}

// ================= LIVE SEARCH MODAL =================
function handleSearch(query) {
  const resultsContainer = document.getElementById('searchResults');
  const q = query.toLowerCase().trim();

  if (!q) {
    resultsContainer.innerHTML = `
      <p class="text-xs text-brand-muted uppercase tracking-wider">Trending searches:</p>
      <div class="flex flex-wrap gap-2 text-xs mt-2">
        <button onclick="applySearchTag('Aviator')" class="px-3 py-1 bg-brand-sand/50 hover:bg-brand-sand rounded-full">Aviator Sunglasses</button>
        <button onclick="applySearchTag('Titanium')" class="px-3 py-1 bg-brand-sand/50 hover:bg-brand-sand rounded-full">Titanium Eyeglasses</button>
        <button onclick="applySearchTag('Cat-Eye')" class="px-3 py-1 bg-brand-sand/50 hover:bg-brand-sand rounded-full">Cat-Eye Frames</button>
        <button onclick="applySearchTag('Round')" class="px-3 py-1 bg-brand-sand/50 hover:bg-brand-sand rounded-full">Round Acetate</button>
      </div>
    `;
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.shape.toLowerCase().includes(q) ||
    p.material.toLowerCase().includes(q) ||
    p.type.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <p class="text-xs text-brand-muted py-4 text-center">No styles matching "${query}". Try searching "Aviator", "Round", or "Titanium".</p>
    `;
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div onclick="closeSearchModal(); openQuickView('${p.id}')" class="flex items-center gap-3 p-2 hover:bg-brand-cream rounded cursor-pointer transition">
      <img src="${Object.values(p.images)[0]}" alt="${p.name}" referrerpolicy="no-referrer" onerror="handleImageLoadFallback(this, '${Object.values(p.images)[0]}')" class="w-12 h-12 object-contain bg-white rounded p-1 border border-brand-border">
      <div>
        <h4 class="text-xs font-serif font-bold text-brand-dark uppercase">${p.name}</h4>
        <p class="text-[10px] text-brand-muted uppercase tracking-wider">${p.shape} • ₹${p.price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  `).join('');
}

function applySearchTag(tag) {
  const input = document.getElementById('searchInput');
  if (input) input.value = tag;
  handleSearch(tag);
}

function closeSearchModal() {
  const modal = document.getElementById('searchModal');
  modal.classList.add('opacity-0', 'pointer-events-none');
}

// ================= ACCORDION SECTION (NEED TO KNOW) =================
function toggleAccordion(index) {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach((item, i) => {
    const content = item.querySelector('.accordion-content');
    if (i === index) {
      const isHidden = content.classList.contains('hidden');
      if (isHidden) {
        content.classList.remove('hidden');
        item.classList.add('active');
      } else {
        content.classList.add('hidden');
        item.classList.remove('active');
      }
    } else {
      content.classList.add('hidden');
      item.classList.remove('active');
    }
  });
}

// ================= CHECKOUT & ORDER CONFIRMATION =================
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your cart is empty! Please add a frame first.');
    return;
  }
  toggleCartDrawer(false);
  const modal = document.getElementById('checkoutModal');
  modal.classList.remove('opacity-0', 'pointer-events-none');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  modal.classList.add('opacity-0', 'pointer-events-none');
}

function processCheckout(event) {
  event.preventDefault();
  closeCheckoutModal();

  // Clear cart and generate random Order ID
  const orderId = '#SO-' + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('confirmedOrderId').innerText = orderId;

  cart = [];
  activePromo = null;
  saveCart();
  updateCartUI();

  const successModal = document.getElementById('orderSuccessModal');
  successModal.classList.remove('opacity-0', 'pointer-events-none');
  lucide.createIcons();
}

function closeOrderSuccessModal() {
  const successModal = document.getElementById('orderSuccessModal');
  successModal.classList.add('opacity-0', 'pointer-events-none');
  scrollToProducts();
}

function handleNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById('newsletterEmail');
  const email = emailInput ? emailInput.value : '';
  showToast(`Welcome to Shivam Optics Haute Lunetterie circle!`);
  if (emailInput) emailInput.value = '';
}

// ================= TOAST NOTIFICATION UTILITY =================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-enter bg-brand-dark text-white text-xs px-4 py-3 rounded shadow-xl flex items-center gap-2 border border-brand-gold/40';
  toast.innerHTML = `
    <i data-lucide="check" class="w-4 h-4 text-brand-gold"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ================= EVENT LISTENERS SETUP =================
function setupEventListeners() {
  // Mobile Nav Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close mobile nav when clicking a link
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Cart Drawer open / backdrop click
  document.getElementById('cartDrawerBtn')?.addEventListener('click', () => toggleCartDrawer(true));
  document.getElementById('cartDrawerBackdrop')?.addEventListener('click', () => toggleCartDrawer(false));

  // Wishlist Drawer open / backdrop click
  document.getElementById('wishlistOpenBtn')?.addEventListener('click', () => toggleWishlistDrawer(true));
  document.getElementById('wishlistBackdrop')?.addEventListener('click', () => toggleWishlistDrawer(false));

  // Search Modal Trigger
  document.getElementById('searchOpenBtn')?.addEventListener('click', () => {
    const modal = document.getElementById('searchModal');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    document.getElementById('searchInput')?.focus();
  });
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
    showToast(`Account created! Welcome to Shivam Optical VIP Club.`);
  }
  setAuthUser(user);
  closeLoginModal();
}

function handleGuestAuth() {
  const guest = { name: 'Guest Collector', email: 'guest@shivamoptical.com', phone: '+91 98765 00000' };
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
    const brand = getRowField(row, ['brand', 'brandname', 'make', 'designer', 'manufacturer', 'label'], 'SHIVAM OPTICAL').toUpperCase();
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
    const type = category.toLowerCase().includes('sun') ? 'Sunglasses' : 'Eyeglasses';
    
    let shape = getRowField(row, ['shape', 'frameshape', 'silhouette', 'style'], 'Rectangle');
    shape = shape.charAt(0).toUpperCase() + shape.slice(1);

    // Gender
    let gender = getRowField(row, ['gender', 'for', 'audience', 'target'], 'unisex').toLowerCase();
    if (!['men', 'women', 'kids', 'unisex'].includes(gender)) {
      gender = 'unisex';
    }

    // Image URL Link (supports 40+ column variations, Google Drive, direct links)
    const imgUrl = extractImageFromRow(row);

    // Description & Tag
    const description = getRowField(row, ['description', 'desc', 'details', 'features', 'about'], 'Handcrafted luxury eyewear sculpted in fine Italian cellulose acetate and lightweight titanium chassis.');
    const tag = getRowField(row, ['tag', 'badge', 'offer', 'label', 'status'], 'NEW ARRIVAL');

    products.push({
      id: `csv-${Date.now()}-${idx + 1}`,
      brand: brand,
      name: name,
      category: category,
      type: type,
      collection: idx % 2 === 0 ? 'new' : 'bestsellers',
      shape: shape,
      gender: gender,
      size: 'Medium • 52-19-145',
      material: 'Sculpted Cellulose Acetate & Titanium',
      rating: 5.0,
      reviews: 48,
      price: price,
      originalPrice: originalPrice,
      discountPct: discountPct,
      tag: tag,
      tagType: 'sale',
      tagText: 'Polarized UV400',
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
    PRODUCTS = loadActiveCatalog();

    // Re-render grid
    renderProductGrid();
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
  
  PRODUCTS = [...DEFAULT_PRODUCTS];
  
  renderProductGrid();
  updateImportUIState();
  closeImportModal();
  showToast('Catalogue reset to original Shivam Optical collection.');
}

// Update UI badges/buttons depending on whether custom catalog is active
function updateImportUIState() {
  const hasCustom = !!localStorage.getItem('so_custom_catalog');
  const resetDefaultBtn = document.getElementById('resetDefaultCatalogBtn');
  
  if (resetDefaultBtn) {
    if (hasCustom) resetDefaultBtn.classList.remove('opacity-40', 'pointer-events-none');
    else resetDefaultBtn.classList.add('opacity-40', 'pointer-events-none');
  }
}


