/* =========================================================
   ETERNAL STONE — MAIN SCRIPT
   All images are placeholder URLs from Unsplash.
   When the client sends real images, replace the `image`
   values below with paths like "images/my-work-01.jpg"
   ========================================================= */

// ===== LATEST WORK (Home Page) =====
const latestWork = [
  {
    title: "Alden Family Monument",
    category: "Granite",
    image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=700&q=80"
  },
  {
    title: "Classic Celtic Cross",
    category: "Marble",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80"
  },
  {
    title: "Heart-Shaped Memorial",
    category: "Granite",
    image: "https://images.unsplash.com/photo-1599663629010-d2060b2a0527?w=700&q=80"
  },
  {
    title: "Bronze Plaque Tribute",
    category: "Bronze",
    image: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=700&q=80"
  },
  {
    title: "Custom Angel Statue",
    category: "Custom",
    image: "https://images.unsplash.com/photo-1555960621-931a3988e10b?w=700&q=80"
  },
  {
    title: "Black Granite Headstone",
    category: "Granite",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&q=80"
  }
];

// ===== FULL CATALOG =====
const catalogItems = [
  {
    id: 1,
    title: "Classic Upright Granite",
    category: "granite",
    price: "From $2,400",
    description: "Traditional upright headstone in polished black granite. Fully customizable with engraving, portraits, and decorative motifs.",
    image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=700&q=80"
  },
  {
    id: 2,
    title: "Celtic Cross Monument",
    category: "marble",
    price: "From $4,800",
    description: "Elegant Celtic cross carved from pure white marble. A timeless tribute with intricate knotwork detailing.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80"
  },
  {
    id: 3,
    title: "Heart Memorial",
    category: "granite",
    price: "From $1,900",
    description: "Heart-shaped memorial in gray granite. Perfect for honoring a beloved spouse or parent.",
    image: "https://images.unsplash.com/photo-1599663629010-d2060b2a0527?w=700&q=80"
  },
  {
    id: 4,
    title: "Bronze Memorial Plaque",
    category: "bronze",
    price: "From $1,200",
    description: "Cast bronze plaque with raised lettering. Weather-resistant and dignified, mounted on a granite base.",
    image: "https://images.unsplash.com/photo-1519817914152-22d2120f9de?w=700&q=80"
  },
  {
    id: 5,
    title: "Angel Statue Monument",
    category: "custom",
    price: "From $8,500",
    description: "Hand-carved angel statue in Italian Carrara marble. A breathtaking centerpiece for any family plot.",
    image: "https://images.unsplash.com/photo-1555960621-931a3988e10b?w=700&q=80"
  },
  {
    id: 6,
    title: "Flat Granite Marker",
    category: "granite",
    price: "From $850",
    description: "Simple, elegant flush marker. Ideal for cemeteries with flat-monument regulations.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&q=80"
  },
  {
    id: 7,
    title: "Family Estate Monument",
    category: "custom",
    price: "From $12,000",
    description: "Large-scale family monument with space for multiple names. Fully custom design available.",
    image: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=700&q=80"
  },
  {
    id: 8,
    title: "White Marble Obelisk",
    category: "marble",
    price: "From $6,200",
    description: "Tall obelisk in polished white marble. A commanding and classical memorial.",
    image: "https://images.unsplash.com/photo-1569091791842-7cfb64e04797?w=700&q=80"
  },
  {
    id: 9,
    title: "Bronze Statue Tribute",
    category: "bronze",
    price: "From $5,500",
    description: "Custom bronze statue cast to your specifications. Ideal for honoring veterans, professionals, or loved ones with unique passions.",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=700&q=80"
  }
];

// ===== RENDER LATEST WORK =====
const workGrid = document.getElementById('latestWorkGrid');
if (workGrid) {
  latestWork.forEach(item => {
    const el = document.createElement('div');
    el.className = 'work-item';
    el.innerHTML = `
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
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
      el.innerHTML = `
        <div class="catalog-item-img">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
        </div>
        <div class="catalog-item-info">
          <p class="category">${item.category}</p>
          <h3>${item.title}</h3>
          <p class="price">${item.price}</p>
        </div>
      `;
      el.addEventListener('click', () => openModal(item));
      catalogGrid.appendChild(el);
    });
  }
  renderCatalog();

  // Filter buttons
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
  document.getElementById('modalImage').src = item.image;
  document.getElementById('modalImage').alt = item.title;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalCategory').textContent = item.category;
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

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    // In production, send to backend or email service (e.g., Formspree, EmailJS)
    document.getElementById('formSuccess').style.display = 'block';
    contactForm.reset();
    setTimeout(() => {
      document.getElementById('formSuccess').style.display = 'none';
    }, 6000);
  });
}