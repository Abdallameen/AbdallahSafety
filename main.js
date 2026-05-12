/* ============================================
   AGC Medical Store - Main JS
   ============================================ */

// ---- STATE ----
let products = [];
let currentCategory = 'all';
let currentSort = 'default';
let searchQuery = '';
let currentLang = localStorage.getItem('lang') || 'ar';
let currentView = 'grid';
let displayCount = 20;
const PAGE_SIZE = 20;

const API_URL = 'https://api.steinhq.com/v1/storages/6978e66baffba40a6241d79d/Sheet1';

const categories = {
  all:     { ar: 'جميع المنتجات',     en: 'All Products',         icon: 'fa-grid-2',      color: '#0d6efd' },
  instant: { ar: 'توريد فوري',         en: 'Instant Supply',       icon: 'fa-bolt',        color: '#198754' },
  lab:     { ar: 'المعمل والتشخيص',    en: 'Lab & Diagnostics',    icon: 'fa-microscope',  color: '#6f42c1' },
  surgery: { ar: 'الجراحة والتعقيم',   en: 'Surgery & Sterilization', icon: 'fa-scalpel', color: '#dc3545' },
  vet:     { ar: 'الرعاية البيطرية',   en: 'Veterinary Care',      icon: 'fa-paw',         color: '#fd7e14' },
  sonar:   { ar: 'السونار Sonoscape',  en: 'Sonoscape Ultrasound', icon: 'fa-waveform',    color: '#20c997' },
  xray:    { ar: 'الأشعة X-Ray',       en: 'X-Ray Systems',        icon: 'fa-x-ray',       color: '#0dcaf0' },
  dental:  { ar: 'الأسنان',            en: 'Dental Equipment',     icon: 'fa-tooth',       color: '#ffc107' },
  blood:   { ar: 'نقل الدم',           en: 'Blood Transfer',       icon: 'fa-droplet',     color: '#e63946' },
  misc:    { ar: 'منوعات',             en: 'Miscellaneous',        icon: 'fa-box',         color: '#6c757d' }
};

// ---- LOAD DATA ----
async function loadProducts() {
  showLoadingState();
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    products = data.map((item, i) => ({
      id: i,
      name:    { ar: item.name_ar || '', en: item.name_en || item.name_ar || '' },
      desc:    { ar: item.desc_ar || '', en: item.desc_en || item.desc_ar || '' },
      details: { ar: item.details_ar || '', en: item.details_en || '' },
      specs:   { ar: item.specs_ar || '', en: item.specs_en || '' },
      warranty:{ ar: item.warranty_ar || '', en: item.warranty_en || '' },
      supply:  { ar: item.supply_ar || '', en: item.supply_en || '' },
      price:   item.price || '',
      isInstant: String(item.isInstant).toUpperCase() === 'TRUE',
      img:     item.img || '',
      category: item.category || 'misc'
    }));

    // Update stats
    const statEl = document.getElementById('statProducts');
    if (statEl) {
      animateCount(statEl, products.length);
    }

    initUI();
  } catch (e) {
    console.error('Load error:', e);
    showError();
  }
}

function animateCount(el, target) {
  let cur = 0;
  const step = Math.ceil(target / 40);
  const iv = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = cur + '+';
    if (cur >= target) clearInterval(iv);
  }, 40);
}

function showLoadingState() {
  const grid = document.getElementById('productsGrid');
  if (grid) grid.innerHTML = `<div class="loading-state"><div class="spinner"></div><p>${currentLang === 'ar' ? 'جاري تحميل المنتجات...' : 'Loading products...'}</p></div>`;
}

function showError() {
  const grid = document.getElementById('productsGrid');
  if (grid) grid.innerHTML = `<div class="empty-state"><i class="fas fa-exclamation-triangle"></i><p>${currentLang === 'ar' ? 'خطأ في تحميل البيانات. يرجى المحاولة لاحقاً.' : 'Error loading data. Please try again.'}</p></div>`;
}

// ---- INIT UI ----
function initUI() {
  buildSearchCatOptions();
  buildNavLinks();
  buildMegaMenu();
  buildCatCards();
  buildFilterList();
  buildFooterCatLinks();
  buildInstantStrip();
  renderProducts();
}

// ---- SEARCH CAT OPTIONS ----
function buildSearchCatOptions() {
  const sel = document.getElementById('searchCat');
  if (!sel) return;
  sel.innerHTML = `<option value="all">${currentLang === 'ar' ? 'كل الأقسام' : 'All Depts'}</option>`;
  Object.entries(categories).forEach(([key, cat]) => {
    if (key === 'all') return;
    sel.innerHTML += `<option value="${key}">${cat[currentLang]}</option>`;
  });
}

// ---- NAV LINKS ----
function buildNavLinks() {
  const nav = document.getElementById('navLinks');
  if (!nav) return;
  const keys = ['instant', 'lab', 'surgery', 'vet', 'sonar', 'xray', 'dental'];
  nav.innerHTML = keys.map(k => `
    <span class="nav-link ${currentCategory === k ? 'active' : ''}" onclick="filterByCategory('${k}')">
      ${categories[k][currentLang]}
    </span>
  `).join('');
}

// ---- MEGA MENU ----
function buildMegaMenu() {
  const menu = document.getElementById('megaMenu');
  if (!menu) return;
  menu.innerHTML = Object.entries(categories).map(([key, cat]) => {
    const count = key === 'all' ? products.length
      : key === 'instant' ? products.filter(p => p.isInstant).length
      : products.filter(p => p.category === key).length;
    return `
      <div class="mega-item" onclick="filterByCategory('${key}'); toggleMegaMenu();">
        <i class="fas ${cat.icon}" style="color:${cat.color}"></i>
        <span>${cat[currentLang]}</span>
        <span class="mega-count">${count}</span>
      </div>
    `;
  }).join('');
}

function toggleMegaMenu() {
  document.getElementById('megaMenu').classList.toggle('open');
}
document.addEventListener('click', (e) => {
  const mm = document.getElementById('megaMenu');
  if (mm && !e.target.closest('.nav-all-btn') && !e.target.closest('.mega-menu')) {
    mm.classList.remove('open');
  }
});

// ---- CATEGORY CARDS ----
function buildCatCards() {
  const container = document.getElementById('catCards');
  if (!container) return;
  container.innerHTML = Object.entries(categories).map(([key, cat]) => {
    const count = key === 'all' ? products.length
      : key === 'instant' ? products.filter(p => p.isInstant).length
      : products.filter(p => p.category === key).length;
    return `
      <div class="cat-card ${currentCategory === key ? 'active' : ''}" onclick="filterByCategory('${key}')">
        <div class="cat-card-icon" style="${currentCategory === key ? `background:${cat.color};color:white` : `color:${cat.color};background:${cat.color}22`}">
          <i class="fas ${cat.icon}"></i>
        </div>
        <div class="cat-card-name">${cat[currentLang]}</div>
        <div class="cat-card-count">${count} منتج</div>
      </div>
    `;
  }).join('');
}

// ---- FILTER LIST (SIDEBAR) ----
function buildFilterList() {
  const list = document.getElementById('filterList');
  if (!list) return;
  list.innerHTML = Object.entries(categories).map(([key, cat]) => {
    const count = key === 'all' ? products.length
      : key === 'instant' ? products.filter(p => p.isInstant).length
      : products.filter(p => p.category === key).length;
    return `
      <li class="filter-item ${currentCategory === key ? 'active' : ''}" onclick="filterByCategory('${key}')">
        <i class="fas ${cat.icon}"></i>
        <span>${cat[currentLang]}</span>
        <span class="filter-item-count">${count}</span>
      </li>
    `;
  }).join('');
}

// ---- FOOTER CAT LINKS ----
function buildFooterCatLinks() {
  const el = document.getElementById('footerCatLinks');
  if (!el) return;
  el.innerHTML = Object.entries(categories)
    .filter(([k]) => k !== 'all')
    .slice(0, 7)
    .map(([key, cat]) => `
      <li><a onclick="filterByCategory('${key}')"><i class="fas ${cat.icon}"></i> ${cat[currentLang]}</a></li>
    `).join('');
}

// ---- INSTANT STRIP ----
function buildInstantStrip() {
  const strip = document.getElementById('isScroll');
  const stripWrap = document.getElementById('instantStrip');
  if (!strip) return;
  const instant = products.filter(p => p.isInstant).slice(0, 15);
  if (instant.length === 0) { if (stripWrap) stripWrap.style.display = 'none'; return; }
  strip.innerHTML = instant.map(p => `
    <div class="is-chip" onclick="goToProduct(${p.id})">⚡ ${p.name[currentLang]}</div>
  `).join('');
}

// ---- FILTER & SORT ----
function getFilteredProducts() {
  let list = [...products];

  // Category
  if (currentCategory === 'instant') {
    list = list.filter(p => p.isInstant);
  } else if (currentCategory !== 'all') {
    list = list.filter(p => p.category === currentCategory);
  }

  // Instant only filter
  const instantFilter = document.getElementById('instantFilter');
  if (instantFilter && instantFilter.checked) {
    list = list.filter(p => p.isInstant);
  }

  // Price range
  const pMin = parseFloat(document.getElementById('priceMin')?.value);
  const pMax = parseFloat(document.getElementById('priceMax')?.value);
  if (!isNaN(pMin)) list = list.filter(p => parseFloat(p.price) >= pMin);
  if (!isNaN(pMax) && pMax > 0) list = list.filter(p => parseFloat(p.price) <= pMax);

  // Search
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      (p.name.ar + p.name.en + p.desc.ar + p.desc.en).toLowerCase().includes(q)
    );
  }

  // Sort
  const sort = document.getElementById('sortSelect')?.value || 'default';
  if (sort === 'price-asc') list.sort((a, b) => parseFloat(a.price || 0) - parseFloat(b.price || 0));
  else if (sort === 'price-desc') list.sort((a, b) => parseFloat(b.price || 0) - parseFloat(a.price || 0));
  else if (sort === 'name') list.sort((a, b) => (a.name[currentLang] || '').localeCompare(b.name[currentLang] || ''));
  else if (sort === 'instant') list.sort((a, b) => b.isInstant - a.isInstant);

  return list;
}

// ---- RENDER PRODUCTS ----
function renderProducts(reset = true) {
  if (reset) displayCount = PAGE_SIZE;
  const filtered = getFilteredProducts();
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // Update count
  const countEl = document.getElementById('resultsCount');
  if (countEl) countEl.textContent = `${filtered.length} ${currentLang === 'ar' ? 'منتج' : 'products'}`;

  // Breadcrumb
  const bcCurrent = document.getElementById('bc-current');
  if (bcCurrent) {
    const cat = categories[currentCategory];
    bcCurrent.textContent = cat ? cat[currentLang] : (currentLang === 'ar' ? 'جميع المنتجات' : 'All Products');
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <p>${currentLang === 'ar' ? 'لا توجد منتجات مطابقة' : 'No products found'}</p>
      </div>`;
    document.getElementById('loadMoreWrap').style.display = 'none';
    return;
  }

  const shown = filtered.slice(0, displayCount);
  grid.innerHTML = shown.map(p => renderCard(p)).join('');

  // Load more
  const lmw = document.getElementById('loadMoreWrap');
  if (lmw) lmw.style.display = filtered.length > displayCount ? 'block' : 'none';
}

function loadMore() {
  displayCount += PAGE_SIZE;
  renderProducts(false);
}

// ---- RENDER CARD ----
function renderCard(p) {
  const name = p.name[currentLang] || p.name.ar;
  const desc = p.desc[currentLang] || p.desc.ar;
  const cat = categories[p.category];
  const isListView = currentView === 'list';

  const priceHtml = p.price
    ? `<div class="card-price">${p.price} <small>${currentLang === 'ar' ? 'ريال' : 'SAR'}</small></div>`
    : `<div class="card-price no-price">${currentLang === 'ar' ? 'اطلب عرض سعر' : 'Request Quote'}</div>`;

  const imgSrc = p.img || `https://placehold.co/400x300/e8f4ff/0d6efd?text=${encodeURIComponent(name.substring(0,8))}`;

  return `
    <div class="product-card" onclick="goToProduct(${p.id})">
      <div class="card-badges">
        ${p.isInstant ? `<span class="badge badge-instant">⚡ ${currentLang === 'ar' ? 'فوري' : 'Instant'}</span>` : ''}
      </div>
      <div class="card-img-wrap">
        <img class="card-img" src="${imgSrc}" alt="${name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/f0f2f5/999?text=AGC'">
        <div class="card-quick-view" onclick="event.stopPropagation(); quickView(${p.id})">
          <i class="fas fa-eye"></i> ${currentLang === 'ar' ? 'عرض سريع' : 'Quick View'}
        </div>
      </div>
      <div class="card-body">
        ${cat ? `<div class="card-cat">${cat[currentLang]}</div>` : ''}
        <h3 class="card-title">${name}</h3>
        ${desc ? `<p class="card-desc">${desc}</p>` : ''}
        <div class="card-rating">
          <span class="stars">★★★★★</span>
          <span class="rating-count">(${currentLang === 'ar' ? 'متوفر' : 'Available'})</span>
        </div>
        ${priceHtml}
        <div class="card-actions" onclick="event.stopPropagation()">
          <button class="btn-order" onclick="orderViaWhatsApp(${p.id})">
            <i class="fab fa-whatsapp"></i>
            ${currentLang === 'ar' ? 'اطلب الآن' : 'Order Now'}
          </button>
          <button class="btn-details-sm" onclick="goToProduct(${p.id})">
            <i class="fas fa-info-circle"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ---- CATEGORY FILTER ----
function filterByCategory(cat) {
  currentCategory = cat;
  displayCount = PAGE_SIZE;
  buildNavLinks();
  buildCatCards();
  buildFilterList();
  renderProducts();
  // Scroll to products
  document.getElementById('productsSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---- SEARCH ----
function doSearch() {
  searchQuery = document.getElementById('searchInput')?.value || '';
  const catSel = document.getElementById('searchCat')?.value;
  if (catSel && catSel !== 'all') currentCategory = catSel;
  renderProducts();
  document.getElementById('productsSection')?.scrollIntoView({ behavior: 'smooth' });
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSearch(); });
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });
}

// ---- VIEW TOGGLE ----
function setView(v) {
  currentView = v;
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  if (v === 'list') grid.classList.add('list-view');
  else grid.classList.remove('list-view');
  document.getElementById('gridViewBtn')?.classList.toggle('active', v === 'grid');
  document.getElementById('listViewBtn')?.classList.toggle('active', v === 'list');
  renderProducts(false);
}

// ---- SORT ----
const sortSel = document.getElementById('sortSelect');
if (sortSel) sortSel.addEventListener('change', () => renderProducts());

// ---- NAVIGATE TO PRODUCT ----
function goToProduct(id) {
  localStorage.setItem('selectedProductId', id);
  window.location.href = 'product.html?id=' + id;
}

// ---- ORDER VIA WHATSAPP ----
function orderViaWhatsApp(id) {
  const p = products[id];
  if (!p) return;
  const name = p.name[currentLang] || p.name.ar;
  const price = p.price ? `${p.price} ${currentLang === 'ar' ? 'ريال' : 'SAR'}` : 'السعر عند الاستفسار';
  const msg = encodeURIComponent(
    `📋 *طلب منتج - AGC Medical*\n\n` +
    `🏷️ المنتج: ${name}\n` +
    `💰 السعر: ${price}\n` +
    `🔗 رقم المنتج: #${id}\n\n` +
    `👤 بياناتي:\nالاسم: \nرقم الجوال: \nالعنوان: \n\n` +
    `شكراً 🙏`
  );
  window.open(`https://wa.me/966560967982?text=${msg}`, '_blank');
}

// ---- QUICK VIEW MODAL ----
function quickView(id) {
  const p = products[id];
  if (!p) return;
  const name = p.name[currentLang] || p.name.ar;
  const desc = p.desc[currentLang] || p.desc.ar;
  const imgSrc = p.img || `https://placehold.co/400x400/e8f4ff/0d6efd?text=${encodeURIComponent(name.substring(0,8))}`;
  const cat = categories[p.category];

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-body">
      <div class="modal-grid">
        <div class="modal-img">
          <img src="${imgSrc}" alt="${name}" onerror="this.src='https://placehold.co/400x400/f0f2f5/999?text=AGC'">
        </div>
        <div class="modal-info">
          <div class="modal-badges">
            ${p.isInstant ? `<span class="badge badge-instant">⚡ ${currentLang === 'ar' ? 'توريد فوري' : 'Instant Supply'}</span>` : ''}
            ${cat ? `<span class="badge" style="background:${cat.color}22;color:${cat.color}">${cat[currentLang]}</span>` : ''}
          </div>
          <h2>${name}</h2>
          ${desc ? `<p class="modal-desc">${desc}</p>` : ''}
          <div class="modal-price">
            ${p.price ? `${p.price} ${currentLang === 'ar' ? 'ريال' : 'SAR'}` : (currentLang === 'ar' ? 'اطلب عرض سعر' : 'Request Quote')}
          </div>
          ${p.supply.ar ? `<div style="background:#e8f5e9;padding:8px 12px;border-radius:8px;font-size:13px;color:#2e7d32;margin-bottom:12px">📦 ${p.supply[currentLang]}</div>` : ''}
          <button class="modal-btn-full" onclick="orderViaWhatsApp(${id})">
            <i class="fab fa-whatsapp"></i>
            ${currentLang === 'ar' ? 'اطلب عبر واتساب' : 'Order via WhatsApp'}
          </button>
          <button class="modal-btn-details" onclick="goToProduct(${id})">
            ${currentLang === 'ar' ? 'عرض التفاصيل الكاملة' : 'View Full Details'}
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('quickModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('quickModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ---- LANGUAGE ----
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('btnAr')?.classList.toggle('active', lang === 'ar');
  document.getElementById('btnEn')?.classList.toggle('active', lang === 'en');
  initUI();
}

// ---- BACK TO TOP ----
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if (backTop) backTop.classList.toggle('show', window.scrollY > 400);
});

// ---- INIT ----
loadProducts();
