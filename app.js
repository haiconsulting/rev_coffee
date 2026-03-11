// =============================================
// REV COFFEE — Ordering Platform
// Built by HAI Solutions
// =============================================

// ===== CATEGORY CONFIG =====
const categoryConfig = {
  espresso: { label: "Espresso", color: "#8D6E63" },
  coffee: { label: "Coffee", color: "#5D4037" },
  specialty: { label: "Specialty Drinks", color: "#F0535C" },
  tea: { label: "Tea & More", color: "#81D3EE" },
  smoothies: { label: "Smoothies", color: "#E91E63" },
  breakfast: { label: "Breakfast", color: "#FFDA22" },
  lunch: { label: "Lunch", color: "#5AFF24" },
  bakery: { label: "Bakery & Grab-Go", color: "#FF9800" },
  bottled: { label: "Bottled Drinks", color: "#42A5F5" }
};

// Category display order
const categoryOrder = ['espresso','coffee','specialty','tea','smoothies','breakfast','lunch','bakery','bottled'];

// ===== MENU DATA =====
const menuItems = [
  // --- ESPRESSO ---
  { id: 1, name: "Espresso", category: "espresso", price: 2.25, bg: "#EFEBE9",
    desc: "Pure, concentrated perfection — a bold double shot pulled to order.",
    options: [] },
  { id: 2, name: "Macchiato", category: "espresso", price: 2.50, bg: "#EFEBE9",
    desc: "3oz of espresso kissed with a touch of velvety steamed milk.",
    options: [] },
  { id: 3, name: "Cortado", category: "espresso", price: 3.00, bg: "#EFEBE9",
    desc: "5oz — equal parts espresso and silky steamed milk. Perfectly balanced.",
    options: [] },
  { id: 4, name: "Traditional Cappuccino", category: "espresso", price: 3.00, bg: "#EFEBE9",
    desc: "Classic 6oz cap — rich espresso crowned with thick, foamy milk.",
    options: [] },

  // --- COFFEE ---
  { id: 5, name: "Drip Coffee", category: "coffee", price: 2.50, bg: "#D7CCC8",
    desc: "Choice of rotating light or dark roast, freshly brewed all day.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] }
    ]},
  { id: 6, name: "Cold Brew", category: "coffee", price: 3.75, bg: "#D7CCC8",
    desc: "Smooth and bold, steeped for 24 hours with Brazil Cerrado beans.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] }
    ]},
  { id: 7, name: "Pour Over", category: "coffee", price: 3.50, bg: "#D7CCC8",
    desc: "Hand-poured, single-origin craft coffee. The purist's choice.",
    options: [] },

  // --- SPECIALTY ---
  { id: 8, name: "Latte", category: "specialty", price: 3.75, bg: "#FCE4EC",
    desc: "Smooth espresso swimming in creamy steamed milk.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] },
      { group: "Milk", choices: [{ label: "Whole", price: 0 }, { label: "Oat", price: 0.75 }, { label: "Almond", price: 0.75 }] }
    ]},
  { id: 9, name: "Flavored Latte", category: "specialty", price: 4.25, bg: "#FCE4EC",
    desc: "Your latte, your way — choose from our house-made flavor syrups.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] },
      { group: "Flavor", choices: [{ label: "Vanilla", price: 0 }, { label: "Caramel", price: 0 }, { label: "Hazelnut", price: 0 }, { label: "Lavender", price: 0 }] },
      { group: "Milk", choices: [{ label: "Whole", price: 0 }, { label: "Oat", price: 0.75 }, { label: "Almond", price: 0.75 }] }
    ]},
  { id: 10, name: "Cappuccino", category: "specialty", price: 3.75, bg: "#FCE4EC",
    desc: "Espresso with a generous crown of foamy, airy steamed milk.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] }
    ]},
  { id: 11, name: "Americano", category: "specialty", price: 2.65, bg: "#FCE4EC",
    desc: "Bold espresso mellowed with hot water. Simple and satisfying.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] },
      { group: "Temp", choices: [{ label: "Hot", price: 0 }, { label: "Iced", price: 0 }] }
    ]},
  { id: 12, name: "Mocha", category: "specialty", price: 4.50, bg: "#FCE4EC",
    desc: "Espresso, steamed milk, and rich dark chocolate — pure indulgence.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] },
      { group: "Temp", choices: [{ label: "Hot", price: 0 }, { label: "Iced", price: 0 }] }
    ]},
  { id: 13, name: "Frappe", category: "specialty", price: 4.50, bg: "#E3F2FD",
    desc: "Frozen, blended coffee goodness. Choose your flavor adventure.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] },
      { group: "Flavor", choices: [{ label: "Mocha", price: 0 }, { label: "Caramel", price: 0 }, { label: "Vanilla", price: 0 }] }
    ]},
  { id: 14, name: "Dirty Chai Latte", category: "specialty", price: 4.50, bg: "#FCE4EC",
    desc: "Spicy chai meets bold espresso — the best of both worlds.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] }
    ]},

  // --- TEA & MORE ---
  { id: 15, name: "Tea", category: "tea", price: 2.75, bg: "#E8F5E9",
    desc: "Premium Rishi teas — black, green, herbal, and seasonal blends.",
    options: [
      { group: "Type", choices: [{ label: "Black", price: 0 }, { label: "Green", price: 0 }, { label: "Herbal", price: 0 }] }
    ]},
  { id: 16, name: "Chai Latte", category: "tea", price: 4.25, bg: "#E8F5E9",
    desc: "Rich, spicy chai blended with steamed milk. Warm and inviting.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.40 }] }
    ]},
  { id: 17, name: "Hot Chocolate", category: "tea", price: 3.50, bg: "#E8F5E9",
    desc: "Steamed milk swirled with rich dark chocolate. A hug in a mug.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] }
    ]},
  { id: 18, name: "Frozen Hot Chocolate", category: "tea", price: 4.25, bg: "#E8F5E9",
    desc: "Blended chocolate deliciousness — like a milkshake met a mocha.",
    options: [] },
  { id: 19, name: "Italian Soda", category: "tea", price: 2.50, bg: "#E8F5E9",
    desc: "Sparkling, fruity, refreshing. Choose your flavor.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.25 }] }
    ]},

  // --- SMOOTHIES ---
  { id: 20, name: "Strawberry Smoothie", category: "smoothies", price: 3.75, bg: "#FCE4EC",
    desc: "Fresh strawberries blended smooth with your choice of base.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] },
      { group: "Base", choices: [{ label: "Milk", price: 0 }, { label: "Yogurt", price: 0 }, { label: "Juice", price: 0 }] }
    ]},
  { id: 21, name: "Banana Smoothie", category: "smoothies", price: 3.75, bg: "#FFF9C4",
    desc: "Creamy banana goodness — naturally sweet and satisfying.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] }
    ]},
  { id: 22, name: "Mango Smoothie", category: "smoothies", price: 3.75, bg: "#FFE0B2",
    desc: "Tropical mango bliss in every sip.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] }
    ]},
  { id: 23, name: "Blueberry Smoothie", category: "smoothies", price: 3.75, bg: "#E8EAF6",
    desc: "Antioxidant-rich blueberries blended into purple perfection.",
    options: [
      { group: "Size", choices: [{ label: "Regular", price: 0 }, { label: "Large", price: 0.50 }] }
    ]},

  // --- BREAKFAST ---
  { id: 24, name: "Chicken Biscuit", category: "breakfast", price: 4.75, bg: "#FFF8E1",
    desc: "We are in the South, after all. Crispy chicken on a fluffy biscuit.",
    options: [] },
  { id: 25, name: "Sausage Biscuit", category: "breakfast", price: 3.75, bg: "#FFF8E1",
    desc: "Classic Southern sausage patty on a warm, buttery biscuit.",
    options: [] },
  { id: 26, name: "Pimento Cheese, Egg & Sausage Biscuit", category: "breakfast", price: 5.50, bg: "#FFF8E1",
    desc: "The full Southern experience — pimento cheese, egg, sausage, biscuit.",
    options: [] },
  { id: 27, name: "Bacon, Egg & Cheese Flatbread", category: "breakfast", price: 5.25, bg: "#FFF8E1",
    desc: "Crispy bacon, fluffy egg, melty cheese on toasted flatbread.",
    options: [] },
  { id: 28, name: "Bacon Cheddar Quiche", category: "breakfast", price: 4.50, bg: "#FFF8E1",
    desc: "Savory, cheesy, gluten-free goodness baked fresh.",
    options: [] },
  { id: 29, name: "Spinach Florentine Quiche", category: "breakfast", price: 4.50, bg: "#FFF8E1",
    desc: "Bacon, spinach, and Swiss in a gluten-free shell.",
    options: [] },
  { id: 30, name: "Veggie Delight Quiche", category: "breakfast", price: 4.50, bg: "#FFF8E1",
    desc: "Red peppers, spinach, mushrooms & cheese. GF and delicious.",
    options: [] },

  // --- LUNCH ---
  { id: 31, name: "Grilled Cheese", category: "lunch", price: 5.25, bg: "#E8F5E9",
    desc: "Golden, melty perfection. Comfort food at its finest.",
    options: [
      { group: "Bread", choices: [{ label: "Ciabatta", price: 0 }, { label: "Multigrain", price: 0 }, { label: "Croissant", price: 0 }] }
    ]},
  { id: 32, name: "Pimento Cheese Sandwich", category: "lunch", price: 5.25, bg: "#E8F5E9",
    desc: "House-made pimento cheese goodness on your choice of bread.",
    options: [
      { group: "Bread", choices: [{ label: "Ciabatta", price: 0 }, { label: "Multigrain", price: 0 }, { label: "Croissant", price: 0 }] }
    ]},
  { id: 33, name: "Chicken Salad Sandwich", category: "lunch", price: 7.25, bg: "#E8F5E9",
    desc: "Our 'Almost Famous' chicken salad — you'll see why it's legendary.",
    options: [
      { group: "Bread", choices: [{ label: "Ciabatta", price: 0 }, { label: "Multigrain", price: 0 }, { label: "Croissant", price: 0 }] }
    ]},
  { id: 34, name: "Turkey Sandwich", category: "lunch", price: 7.00, bg: "#E8F5E9",
    desc: "Lime aioli, avocado, havarti, lettuce & balsamic on ciabatta.",
    options: [] },
  { id: 35, name: "The Veggie", category: "lunch", price: 6.25, bg: "#E8F5E9",
    desc: "Hummus, avocado, tomato, cucumber, lettuce & balsamic.",
    options: [] },
  { id: 36, name: "Cuban Sandwich", category: "lunch", price: 7.00, bg: "#E8F5E9",
    desc: "Cuban mustard, ham, pepper jack & pickles on pressed ciabatta.",
    options: [] },
  { id: 37, name: "Tuscan Sandwich", category: "lunch", price: 7.25, bg: "#E8F5E9",
    desc: "Lemon cream cheese, basil pesto, turkey, tomato & balsamic.",
    options: [] },
  { id: 38, name: "Almost Famous Chicken Salad", category: "lunch", price: 5.50, bg: "#E8F5E9",
    desc: "Our legendary chicken salad — by the half pound.",
    options: [] },
  { id: 39, name: "Grown-Up Lunchables", category: "lunch", price: 4.25, bg: "#E8F5E9",
    desc: "Hummus, carrots, pimento cheese & crackers. GF and fun.",
    options: [] },

  // --- BAKERY ---
  { id: 40, name: "Power Cookie", category: "bakery", price: 2.75, bg: "#FFF3E0",
    desc: "Legendary. Packed with oats, nuts, and energy for your day.",
    options: [] },
  { id: 41, name: "Caramel Crunch Cookie", category: "bakery", price: 2.75, bg: "#FFF3E0",
    desc: "White chocolate, salty pretzel, and caramel in every bite.",
    options: [] },
  { id: 42, name: "Chocolate Chip Cookie", category: "bakery", price: 2.50, bg: "#FFF3E0",
    desc: "Classic, fresh-baked, perfectly chewy chocolate chip.",
    options: [] },
  { id: 43, name: "Blueberry Muffin", category: "bakery", price: 3.25, bg: "#FFF3E0",
    desc: "Bursting with fresh blueberries. Baked every morning.",
    options: [] },
  { id: 44, name: "Cinnamon Roll", category: "bakery", price: 3.75, bg: "#FFF3E0",
    desc: "So delicious you'll never be the same. Seriously.",
    options: [] },
  { id: 45, name: "Blueberry Scone", category: "bakery", price: 3.25, bg: "#FFF3E0",
    desc: "Buttery, flaky, studded with juicy blueberries.",
    options: [] },
  { id: 46, name: "Chocolate Scone", category: "bakery", price: 3.25, bg: "#FFF3E0",
    desc: "Rich chocolate chips in a buttery, crumbly scone.",
    options: [] },
  { id: 47, name: "Bacon Cheddar Muffin", category: "bakery", price: 3.50, bg: "#FFF3E0",
    desc: "Savory muffin loaded with bacon and sharp cheddar.",
    options: [] },
  { id: 48, name: "Orange Almond Cake", category: "bakery", price: 3.75, bg: "#FFF3E0",
    desc: "Gluten-free, moist, and citrusy. A hidden gem.",
    options: [] },
  { id: 49, name: "Overnight Oats", category: "bakery", price: 4.25, bg: "#FFF3E0",
    desc: "Oats, yogurt, skim milk, and fresh fruit. Add granola if you dare.",
    options: [] },
  { id: 50, name: "Yogurt Parfait", category: "bakery", price: 4.25, bg: "#FFF3E0",
    desc: "Creamy yogurt layered with seasonal fruit and crunchy granola.",
    options: [] },
  { id: 51, name: "Fresh Fruit Cup", category: "bakery", price: 3.25, bg: "#FFF3E0",
    desc: "Seasonally-ripe fruits, cut fresh daily.",
    options: [] },

  // --- BOTTLED ---
  { id: 52, name: "Classic Coca-Cola", category: "bottled", price: 2.00, bg: "#E3F2FD",
    desc: "The classic. Ice cold and refreshing.", options: [] },
  { id: 53, name: "Coke Zero", category: "bottled", price: 2.00, bg: "#E3F2FD",
    desc: "Zero sugar, all the taste.", options: [] },
  { id: 54, name: "Bottled Water", category: "bottled", price: 1.75, bg: "#E3F2FD",
    desc: "Crisp, clean water in a custom Rev Coffee bottle.", options: [] },
  { id: 55, name: "Topo Chico", category: "bottled", price: 2.50, bg: "#E3F2FD",
    desc: "Premium sparkling mineral water.", options: [] },
  { id: 56, name: "Mexican Coca-Cola", category: "bottled", price: 3.00, bg: "#E3F2FD",
    desc: "Made with real cane sugar in a glass bottle.", options: [] },
  { id: 57, name: "Kombucha", category: "bottled", price: 4.00, bg: "#E3F2FD",
    desc: "Fermented goodness — gut-friendly and delicious.", options: [] },
];

// ===== STATE =====
let cart = [];
let orders = JSON.parse(localStorage.getItem('revOrders') || '[]');
let currentItem = null;
let currentQty = 1;
let selectedOptions = {};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderOrders();
  updateStats();
});

// ===== TAB SWITCHING =====
function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`${tab}-tab`).classList.add('active');
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
  if (tab === 'backend') { renderOrders(); updateStats(); }
}

// ===== HELPERS =====
function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

function getCategoryLabel(cat) {
  return categoryConfig[cat]?.label || cat;
}

function getCategoryColor(cat) {
  return categoryConfig[cat]?.color || '#ccc';
}

// ===== RENDER MENU =====
function renderMenu(filterCat = 'all') {
  const grid = document.getElementById('menu-grid');
  const cats = filterCat === 'all' ? categoryOrder : [filterCat];

  let html = '';
  cats.forEach(cat => {
    const items = menuItems.filter(i => i.category === cat);
    if (items.length === 0) return;

    html += `
      <div class="category-section" id="cat-${cat}">
        <div class="category-header">
          <div class="category-color-bar" style="background: ${getCategoryColor(cat)}"></div>
          <h2>${getCategoryLabel(cat)}</h2>
          <span class="category-count">${items.length} items</span>
        </div>
        <div class="menu-grid">
          ${items.map((item, idx) => `
            <div class="menu-card" onclick="openItem(${item.id})" style="animation-delay: ${idx * 0.04}s">
              <div class="menu-card-body">
                <div class="menu-card-name">${item.name}</div>
                <div class="menu-card-desc">${item.desc}</div>
                <div class="menu-card-bottom">
                  <span class="menu-card-price">$${item.price.toFixed(2)}</span>
                  <button class="menu-card-add" onclick="event.stopPropagation(); quickAdd(${item.id})">+</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  // We need to replace the parent container content, not the grid directly
  // The grid is actually the container for category sections now
  grid.innerHTML = html;
}

function filterCategory(category, btn) {
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(category);
}

// ===== ITEM MODAL =====
function openItem(id) {
  currentItem = menuItems.find(i => i.id === id);
  currentQty = 1;
  selectedOptions = {};

  currentItem.options.forEach(opt => {
    selectedOptions[opt.group] = opt.choices[0];
  });

  const modal = document.getElementById('item-modal');
  const color = getCategoryColor(currentItem.category);
  document.getElementById('modal-img').style.background = color;
  document.getElementById('modal-img').innerHTML = `<span>${getCategoryLabel(currentItem.category)}</span>`;
  document.getElementById('modal-category').textContent = getCategoryLabel(currentItem.category);
  document.getElementById('modal-title').textContent = currentItem.name;
  document.getElementById('modal-desc').textContent = currentItem.desc;
  document.getElementById('modal-qty').textContent = '1';

  renderModalOptions();
  updateModalPrice();

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderModalOptions() {
  const container = document.getElementById('modal-options');
  if (!currentItem.options.length) { container.innerHTML = ''; return; }

  container.innerHTML = currentItem.options.map(opt => `
    <div class="option-group">
      <div class="option-group-title">${opt.group}</div>
      <div class="option-pills">
        ${opt.choices.map(choice => `
          <button class="option-pill ${selectedOptions[opt.group]?.label === choice.label ? 'selected' : ''}"
                  onclick="selectOption('${opt.group}', '${choice.label}', ${choice.price})">
            ${choice.label}
            ${choice.price > 0 ? `<span class="option-price">+$${choice.price.toFixed(2)}</span>` : ''}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function selectOption(group, label, price) {
  selectedOptions[group] = { label, price };
  renderModalOptions();
  updateModalPrice();
}

function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('modal-qty').textContent = currentQty;
  updateModalPrice();
}

function updateModalPrice() {
  let price = currentItem.price;
  Object.values(selectedOptions).forEach(opt => { price += opt.price; });
  document.getElementById('modal-price-total').textContent = `$${(price * currentQty).toFixed(2)}`;
}

function closeModal(e) {
  if (e.target === document.getElementById('item-modal')) closeModalForce();
}

function closeModalForce() {
  document.getElementById('item-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== CART =====
function quickAdd(id) {
  const item = menuItems.find(i => i.id === id);
  if (item.options.length > 0) { openItem(id); return; }
  cart.push({
    id: Date.now(), menuId: item.id, name: item.name,
    initials: getInitials(item.name),
    price: item.price, qty: 1, options: {}
  });
  updateCartUI();
  animateBadge();
}

function addToCart() {
  let unitPrice = currentItem.price;
  const optionsMap = {};
  Object.entries(selectedOptions).forEach(([group, opt]) => {
    unitPrice += opt.price;
    optionsMap[group] = opt.label;
  });
  cart.push({
    id: Date.now(), menuId: currentItem.id, name: currentItem.name,
    initials: getInitials(currentItem.name),
    price: unitPrice, qty: currentQty, options: optionsMap
  });
  updateCartUI();
  closeModalForce();
  animateBadge();
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-badge').textContent = count;

  const itemsContainer = document.getElementById('cart-items');
  const footerEl = document.getElementById('cart-footer');
  const customerEl = document.getElementById('cart-customer');

  if (cart.length === 0) {
    footerEl.style.display = 'none';
    customerEl.style.display = 'none';
    itemsContainer.innerHTML = `<div class="cart-empty">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
      <p>Your cart is empty</p>
    </div>`;
    return;
  }

  footerEl.style.display = 'block';
  customerEl.style.display = 'block';

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.initials}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-options">${Object.entries(item.options).map(([k,v]) => `${k}: ${v}`).join(' · ') || ''}</div>
        <div class="cart-item-bottom">
          <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
          <div class="cart-item-qty">
            <button onclick="updateCartQty(${item.id}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty(${item.id}, 1)">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('cart-total-amount').textContent = `$${total.toFixed(2)}`;
}

function updateCartQty(cartId, delta) {
  const item = cart.find(i => i.id === cartId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== cartId);
  updateCartUI();
}

function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  const isOpen = drawer.classList.contains('open');
  drawer.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function animateBadge() {
  const badge = document.getElementById('cart-badge');
  badge.classList.remove('bounce');
  void badge.offsetWidth;
  badge.classList.add('bounce');
}

// ===== PLACE ORDER =====
function placeOrder() {
  if (cart.length === 0) return;

  const name = document.getElementById('cust-name').value.trim() || 'Guest';
  const phone = document.getElementById('cust-phone').value.trim() || 'N/A';
  const notes = document.getElementById('cust-notes').value.trim();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const orderId = `REV-${String(orders.length + 1).padStart(4, '0')}`;

  const order = {
    id: orderId, customer: name, phone, notes,
    items: cart.map(item => ({ name: item.name, options: item.options, qty: item.qty, price: item.price })),
    total, status: 'pending', timestamp: new Date().toISOString()
  };

  orders.push(order);
  localStorage.setItem('revOrders', JSON.stringify(orders));

  cart = [];
  updateCartUI();
  toggleCart();

  document.getElementById('cust-name').value = '';
  document.getElementById('cust-phone').value = '';
  document.getElementById('cust-notes').value = '';

  document.getElementById('confirm-order-id').textContent = `Order ${orderId}`;
  document.getElementById('confirm-overlay').classList.add('open');
}

function closeConfirmation() {
  document.getElementById('confirm-overlay').classList.remove('open');
}

// ===== BACKEND =====
function renderOrders(filter = 'all') {
  const grid = document.getElementById('orders-grid');
  const filtered = filter === 'all' ? orders : orders.filter(o => o.status === filter);
  const sorted = [...filtered].reverse();

  if (sorted.length === 0) {
    grid.innerHTML = `<div class="no-orders">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      <p>No orders yet. Place an order from the Order tab to see it here!</p>
    </div>`;
    return;
  }

  grid.innerHTML = sorted.map(order => `
    <div class="order-card">
      <div class="order-card-header">
        <div>
          <span class="order-id">${order.id}</span>
          <div class="order-time">${formatTime(order.timestamp)}</div>
        </div>
        <span class="order-status status-${order.status}">${order.status}</span>
      </div>
      <div class="order-card-body">
        <div class="order-customer">${order.customer}</div>
        <div class="order-phone">${order.phone}</div>
        <ul class="order-items-list">
          ${order.items.map(item => `
            <li>
              <span>${item.qty}x ${item.name} ${Object.values(item.options).length ? '(' + Object.values(item.options).join(', ') + ')' : ''}</span>
              <span>$${(item.price * item.qty).toFixed(2)}</span>
            </li>
          `).join('')}
        </ul>
        ${order.notes ? `<div class="order-notes">"${order.notes}"</div>` : ''}
      </div>
      <div class="order-card-footer">
        <span class="order-total">$${order.total.toFixed(2)}</span>
        <div class="order-actions">${getOrderActions(order)}</div>
      </div>
    </div>
  `).join('');
}

function getOrderActions(order) {
  const flow = ['pending', 'preparing', 'ready', 'completed'];
  const idx = flow.indexOf(order.status);
  if (idx >= flow.length - 1) return '<span style="font-size:12px;color:#999">Done</span>';
  const labels = { preparing: 'Start Preparing', ready: 'Mark Ready', completed: 'Complete' };
  return `<button class="order-action-btn advance" onclick="advanceOrder('${order.id}')">${labels[flow[idx + 1]]}</button>`;
}

function advanceOrder(orderId) {
  const flow = ['pending', 'preparing', 'ready', 'completed'];
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  const idx = flow.indexOf(order.status);
  if (idx < flow.length - 1) {
    order.status = flow[idx + 1];
    localStorage.setItem('revOrders', JSON.stringify(orders));
    renderOrders();
    updateStats();
  }
}

function filterOrders(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderOrders(filter);
}

function updateStats() {
  document.getElementById('stat-total').textContent = orders.length;
  document.getElementById('stat-revenue').textContent = '$' + orders.reduce((s, o) => s + o.total, 0).toFixed(0);
  document.getElementById('stat-pending').textContent = orders.filter(o => o.status === 'pending').length;
}

function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true });
}
