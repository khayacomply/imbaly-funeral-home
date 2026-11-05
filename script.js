/* =========================================================
   ETERNAL STONE — MAIN SCRIPT
   All image paths are now connected to your local "images" folder.
   ========================================================= */

// ===== LATEST WORK (Home Page) =====
const latestWork = [
  { title: "Standard Grave Finish", category: "Standard", image: "images/home-work-01.jpg" },
  { title: "Premium Granite Memorial", category: "Premium", image: "images/home-work-02.jpg" },
  { title: "Custom Family Monument", category: "Luxury", image: "images/home-work-03.jpg" },
  { title: "Elegant Marble Headstone", category: "Premium", image: "images/home-work-04.jpg" },
  { title: "Bronze Plaque Tribute", category: "Standard", image: "images/home-work-05.jpg" },
  { title: "Luxury Estate Memorial", category: "Luxury", image: "images/home-work-06.jpg" }
];

// ===== FULL CATALOG (42 items, sorted by price: lowest to highest) =====
const catalogItems = [
  { id: 1, title: "Grave Construction 01", category: "standard", priceNum: 3500, price: "R3,500", description: "Basic grave construction and neat finishing.", image: "images/catalog-01.jpg" },
  { id: 2, title: "Grave Construction 02", category: "standard", priceNum: 7000, price: "R7,000", description: "Quality grave construction with durable materials.", image: "images/catalog-02.jpg" },
  { id: 3, title: "Grave Construction 03", category: "standard", priceNum: 7900, price: "R7,900", description: "Durable and neatly finished grave construction.", image: "images/catalog-03.jpg" },
  { id: 4, title: "Grave Construction 04", category: "standard", priceNum: 8900, price: "R8,900", description: "Standard construction with attention to detail.", image: "images/catalog-04.jpg" },
  { id: 5, title: "Grave Construction 05", category: "standard", priceNum: 11400, price: "R11,400", description: "Quality materials and professional finishing.", image: "images/catalog-05.jpg" },
  { id: 6, title: "Grave Construction 06", category: "standard", priceNum: 11400, price: "R11,400", description: "Reliable and well-crafted grave construction.", image: "images/catalog-06.jpg" },
  { id: 7, title: "Grave Construction 07", category: "standard", priceNum: 12000, price: "R12,000", description: "Solid construction with a clean, respectful finish.", image: "images/catalog-07.jpg" },
  { id: 8, title: "Grave Construction 08", category: "standard", priceNum: 13500, price: "R13,500", description: "Enhanced finishing with durable materials.", image: "images/catalog-08.jpg" },
  { id: 9, title: "Grave Construction 09", category: "standard", priceNum: 14000, price: "R14,000", description: "Well-structured grave construction with care.", image: "images/catalog-09.jpg" },
  { id: 10, title: "Grave Construction 10", category: "standard", priceNum: 14500, price: "R14,500", description: "Quality craftsmanship at an accessible price.", image: "images/catalog-10.jpg" },
  { id: 11, title: "Grave Construction 11", category: "premium", priceNum: 15500, price: "R15,500", description: "Premium materials with superior finishing.", image: "images/catalog-11.jpg" },
  { id: 12, title: "Grave Construction 12", category: "premium", priceNum: 16500, price: "R16,500", description: "Elegant design with long-lasting durability.", image: "images/catalog-12.jpg" },
  { id: 13, title: "Grave Construction 13", category: "premium", priceNum: 16500, price: "R16,500", description: "Refined finishing and robust construction.", image: "images/catalog-13.jpg" },
  { id: 14, title: "Grave Construction 14", category: "premium", priceNum: 16500, price: "R16,500", description: "High-quality build with detailed attention.", image: "images/catalog-14.jpg" },
  { id: 15, title: "Grave Construction 15", category: "premium", priceNum: 18800, price: "R18,800", description: "Premium grave construction with elegant touches.", image: "images/catalog-15.jpg" },
  { id: 16, title: "Grave Construction 16", category: "premium", priceNum: 19000, price: "R19,000", description: "Superior craftsmanship and durable materials.", image: "images/catalog-16.jpg" },
  { id: 17, title: "Grave Construction 17", category: "premium", priceNum: 19000, price: "R19,000", description: "Well-crafted memorial with a polished finish.", image: "images/catalog-17.jpg" },
  { id: 18, title: "Grave Construction 18", category: "premium", priceNum: 22000, price: "R22,000", description: "High-end construction with exceptional detail.", image: "images/catalog-18.jpg" },
  { id: 19, title: "Grave Construction 19", category: "premium", priceNum: 22000, price: "R22,000", description: "Premium quality with a timeless design.", image: "images/catalog-19.jpg" },
  { id: 20, title: "Grave Construction 20", category: "premium", priceNum: 25000, price: "R25,000", description: "Luxurious finish with robust structural integrity.", image: "images/catalog-20.jpg" },
  { id: 21, title: "Grave Construction 21", category: "premium", priceNum: 25000, price: "R25,000", description: "Expertly crafted with premium grade materials.", image: "images/catalog-21.jpg" },
  { id: 22, title: "Grave Construction 22", category: "premium", priceNum: 27000, price: "R27,000", description: "Sophisticated design with lasting quality.", image: "images/catalog-22.jpg" },
  { id: 23, title: "Grave Construction 23", category: "premium", priceNum: 28000, price: "R28,000", description: "Beautifully finished with superior construction.", image: "images/catalog-23.jpg" },
  { id: 24, title: "Grave Construction 24", category: "premium", priceNum: 29500, price: "R29,500", description: "Premium tier construction with elegant styling.", image: "images/catalog-24.jpg" },
  { id: 25, title: "Grave Construction 25", category: "premium", priceNum: 34000, price: "R34,000", description: "High-end materials with meticulous craftsmanship.", image: "images/catalog-25.jpg" },
  { id: 26, title: "Grave Construction 26", category: "premium", priceNum: 34000, price: "R34,000", description: "Exceptional quality and refined finishing.", image: "images/catalog-26.jpg" },
  { id: 27, title: "Grave Construction 27", category: "premium", priceNum: 36000, price: "R36,000", description: "Luxury construction with premium detailing.", image: "images/catalog-27.jpg" },
  { id: 28, title: "Grave Construction 28", category: "premium", priceNum: 38000, price: "R38,000", description: "Top-tier craftsmanship and durable design.", image: "images/catalog-28.jpg" },
  { id: 29, title: "Grave Construction 29", category: "premium", priceNum: 39000, price: "R39,000", description: "Elegant and robust premium construction.", image: "images/catalog-29.jpg" },
  { id: 30, title: "Grave Construction 30", category: "luxury", priceNum: 42000, price: "R42,000", description: "Luxury grade materials with exquisite finishing.", image: "images/catalog-30.jpg" },
  { id: 31, title: "Grave Construction 31", category: "luxury", priceNum: 43000, price: "R43,000", description: "Premium luxury design with superior durability.", image: "images/catalog-31.jpg" },
  { id: 32, title: "Grave Construction 32", category: "luxury", priceNum: 44000, price: "R44,000", description: "High-end construction with meticulous attention to detail.", image: "images/catalog-32.jpg" },
  { id: 33, title: "Grave Construction 33", category: "luxury", priceNum: 45000, price: "R45,000", description: "Exceptional luxury craftsmanship and materials.", image: "images/catalog-33.jpg" },
  { id: 34, title: "Grave Construction 34", category: "luxury", priceNum: 45000, price: "R45,000", description: "Refined luxury design with lasting quality.", image: "images/catalog-34.jpg" },
  { id: 35, title: "Grave Construction 35", category: "luxury", priceNum: 46000, price: "R46,000", description: "Premium luxury finish with robust construction.", image: "images/catalog-35.jpg" },
  { id: 36, title: "Grave Construction 36", category: "luxury", priceNum: 46000, price: "R46,000", description: "Elegant luxury memorial with superior build.", image: "images/catalog-36.jpg" },
  { id: 37, title: "Grave Construction 37", category: "luxury", priceNum: 48000, price: "R48,000", description: "Top-tier luxury construction and finishing.", image: "images/catalog-37.jpg" },
  { id: 38, title: "Grave Construction 38", category: "luxury", priceNum: 50000, price: "R50,000", description: "Exclusive luxury design with premium materials.", image: "images/catalog-38.jpg" },
  { id: 39, title: "Grave Construction 39", category: "luxury", priceNum: 52000, price: "R52,000", description: "Masterpiece luxury construction with exquisite detail.", image: "images/catalog-39.jpg" },
  { id: 40, title: "Grave Construction 40", category: "luxury", priceNum: 65000, price: "R65,000", description: "Ultimate luxury memorial with unparalleled craftsmanship.", image: "images/catalog-40.jpg" },
  { id: 41, title: "Grave Construction 41", category: "luxury", priceNum: 74000, price: "R74,000", description: "Bespoke luxury construction with premium finishing.", image: "images/catalog-41.jpg" },
  { id: 42, title: "Grave Construction 42", category: "luxury", priceNum: 85000, price: "R85,000", description: "The pinnacle of luxury grave construction and design.", image: "images/catalog-42.jpg" }
];

// ===== RENDER LATEST WORK =====
const workGrid = document.getElementById('latestWorkGrid');
if (workGrid) {
  latestWork.forEach(item => {
    const el = document.createElement('div');
    el.className = 'work-item';
    el.innerHTML = `
      <div class="work-item-img-container">
        ${item.image ? `<img src="${item.image}" alt="${item.title}" loading="lazy" />` : '<div class="image-placeholder">Image Coming Soon</div>'}
      </div>
      <div class="work-item-overlay">
        <h4>${item.title}</h4>
        <p>${item.category}</p>
      </div>
    `;
    workGrid.appendChild(el);
  });
}

// ===== RENDER CATALOG =====
const catalogGrid = document.getElementById('catalogGrid');
if (catalogGrid) {
  function renderCatalog(filter = 'all') {
    catalogGrid.innerHTML = '';
    const filtered = filter === 'all'
      ? catalogItems
      : catalogItems.filter(i => i.category === filter);

    filtered.forEach(item => {
      const el = document.createElement('div');
      el.className = 'catalog-item';
      el.dataset.id = item.id;
      const displayCategory = item.category.charAt(0).toUpperCase() + item.category.slice(1);
      
      el.innerHTML = `
        <div class="catalog-item-img">
          ${item.image ? `<img src="${item.image}" alt="${item.title}" loading="lazy" />` : '<div class="image-placeholder">Image Coming Soon</div>'}
        </div>
        <div class="catalog-item-info">
          <p class="category">${displayCategory}</p>
          <h3>${item.title}</h3>
          <p class="price">${item.price}</p>
        </div>
      `;
      el.addEventListener('click', () => openModal(item));
      catalogGrid.appendChild(el);
    });
  }
  
  renderCatalog();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCatalog(btn.dataset.filter);
    });
  });
}

// ===== MODAL =====
const modal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');

function openModal(item) {
  if (!modal) return;
  const displayCategory = item.category.charAt(0).toUpperCase() + item.category.slice(1);
  
  if (item.image) {
    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalImage').style.display = 'block';
  } else {
    document.getElementById('modalImage').style.display = 'none';
  }
  
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalCategory').textContent = displayCategory;
  document.getElementById('modalDescription').textContent = item.description;
  document.getElementById('modalPrice').textContent = item.price;
  
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== MOBILE NAV =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle) {
  navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
}
