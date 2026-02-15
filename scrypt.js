const menuData = {
    appetizers: [
        { title: 'Truffle Burrata', description: 'Creamy burrata, heirloom tomatoes, basil oil, toasted sourdough.', price: '38 GEL', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80', badge: 'Chef Pick' },
        { title: 'Beef Carpaccio', description: 'Angus beef, parmesan shavings, capers, lemon emulsion.', price: '44 GEL', image: 'https://images.unsplash.com/photo-1601315488950-3b5047998b38?auto=format&fit=crop&w=1200&q=80', badge: '' },
        { title: 'Salmon Tartare', description: 'Fresh salmon, avocado mousse, citrus pearls, dill.', price: '41 GEL', image: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?auto=format&fit=crop&w=1200&q=80', badge: 'Popular' },
        { title: 'Charred Octopus', description: 'Charred octopus, smoked paprika potato cream, gremolata.', price: '49 GEL', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80', badge: '' },
        { title: 'Foie Gras', description: 'Seared foie gras with fig jam and brioche.', price: '65 GEL', image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80', badge: 'Signature' }
    ],
    mains: [
        { title: 'Ribeye Steak', description: '350g ribeye, truffle mash, peppercorn jus.', price: '95 GEL', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80', badge: 'Top Seller' },
        { title: 'Sea Bass Fillet', description: 'Pan-seared sea bass, saffron risotto, lemon beurre blanc.', price: '82 GEL', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80', badge: '' },
        { title: 'Lobster Linguine', description: 'Fresh pasta, lobster bisque sauce, parsley, chili oil.', price: '88 GEL', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80', badge: 'New' },
        { title: 'Duck Breast', description: 'Pink duck breast, cherry glaze, roasted baby carrots.', price: '76 GEL', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80', badge: '' },
        { title: 'Mushroom Risotto', description: 'Arborio rice, wild mushrooms, parmesan, white truffle.', price: '54 GEL', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80', badge: 'Vegetarian' }
    ],
    desserts: [
        { title: 'Tiramisu', description: 'Classic mascarpone cream, espresso syrup, cocoa.', price: '28 GEL', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=80', badge: '' },
        { title: 'Chocolate Fondant', description: 'Warm lava cake with vanilla bean gelato.', price: '32 GEL', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80', badge: 'Popular' },
        { title: 'Pistachio Cheesecake', description: 'Baked cheesecake, pistachio praline, berry coulis.', price: '30 GEL', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80', badge: '' },
        { title: 'Creme Brulee', description: 'Vanilla custard with caramelized sugar crust.', price: '29 GEL', image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=1200&q=80', badge: '' },
        { title: 'Panna Cotta', description: 'Silky vanilla panna cotta, raspberry sauce.', price: '26 GEL', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80', badge: 'Light' }
    ],
    wines: [
        { title: 'Saperavi Reserve 2019', description: 'Bold Georgian red wine with dark berry notes.', price: '120 GEL', image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1200&q=80', badge: 'Recommended' },
        { title: 'Rkatsiteli 2021', description: 'Crisp white wine with floral and citrus profile.', price: '95 GEL', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80', badge: '' },
        { title: 'Kindzmarauli', description: 'Semi-sweet red with velvety finish.', price: '85 GEL', image: 'https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?auto=format&fit=crop&w=1200&q=80', badge: 'Popular' },
        { title: 'Rose Cuvee', description: 'Dry rose, strawberry notes, elegant acidity.', price: '78 GEL', image: 'https://images.unsplash.com/photo-1566758035291-7f2f3b4ef5b8?auto=format&fit=crop&w=1200&q=80', badge: 'Summer' },
        { title: 'Sparkling Brut', description: 'Fine bubbles, green apple and brioche aromas.', price: '140 GEL', image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=80', badge: 'Celebration' }
    ]
};

const STORAGE_KEYS = {
    users: 'savane_users',
    currentUser: 'savane_current_user'
};

let currentUser = null;
let cart = [];
let activeCategory = 'appetizers';
let revealObserver = null;

function getUsers() {
    const raw = localStorage.getItem(STORAGE_KEYS.users);
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

function setCurrentUser(user) {
    currentUser = user;
    if (user) {
        localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user));
    } else {
        localStorage.removeItem(STORAGE_KEYS.currentUser);
    }
}

function loadCurrentUser() {
    const raw = localStorage.getItem(STORAGE_KEYS.currentUser);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch (error) {
        return null;
    }
}

function cartKey(email) {
    return `savane_cart_${String(email || '').toLowerCase()}`;
}

function ordersKey(email) {
    return `savane_orders_${String(email || '').toLowerCase()}`;
}

function getCartStorageKey() {
    if (!currentUser || !currentUser.email) return null;
    return cartKey(currentUser.email);
}

function loadCart() {
    const key = getCartStorageKey();
    if (!key) {
        cart = [];
        return;
    }
    const raw = localStorage.getItem(key);
    if (!raw) {
        cart = [];
        return;
    }
    try {
        const parsed = JSON.parse(raw);
        cart = Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        cart = [];
    }
}

function saveCart() {
    const key = getCartStorageKey();
    if (!key) return;
    localStorage.setItem(key, JSON.stringify(cart));
}

function loadOrders(email) {
    const raw = localStorage.getItem(ordersKey(email));
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function saveOrders(email, orders) {
    localStorage.setItem(ordersKey(email), JSON.stringify(orders));
}

function parsePrice(priceText) {
    const match = String(priceText).match(/[\d.]+/);
    return match ? Number(match[0]) : 0;
}

function formatCurrency(amount) {
    return `${amount.toFixed(2)} GEL`;
}

function escapeSvg(value) {
    return String(value || '').replace(/[<>&'"]/g, '');
}

function createFallbackAvatar(name) {
    const letter = (name && name.trim() ? name.trim().charAt(0) : 'P').toUpperCase();
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#d4af37'/><stop offset='1' stop-color='#f4e4b7'/></linearGradient></defs><rect width='64' height='64' rx='32' fill='url(#g)'/><text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' font-size='30' font-family='Cormorant Garamond' fill='#1b1b1b'>${escapeSvg(letter)}</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function getUserAvatarSrc(user) {
    if (user && user.profileImage) return user.profileImage;
    return createFallbackAvatar(user && user.name ? user.name : 'Profile');
}

function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => reject(new Error('Could not read file'));
        reader.readAsDataURL(file);
    });
}

function updateAuthUI() {
    const authStatus = document.getElementById('auth-status');
    const logoutBtn = document.getElementById('logout-btn');
    const isProfilePage = Boolean(document.getElementById('profile-banner'));
    const guestLinks = document.getElementById('guest-auth-links');
    const navProfileBtn = document.getElementById('nav-profile-btn');
    const navProfileName = document.getElementById('nav-profile-name');
    const navProfileImage = document.getElementById('nav-profile-image');

    if (authStatus) {
        if (isProfilePage) {
            authStatus.textContent = currentUser ? 'Profile' : 'Not logged in';
        } else {
            authStatus.textContent = currentUser ? `Logged in: ${currentUser.email}` : 'Not logged in';
        }
    }
    if (logoutBtn) logoutBtn.style.display = currentUser ? 'inline-flex' : 'none';
    if (guestLinks) guestLinks.style.display = currentUser ? 'none' : 'inline-flex';
    if (navProfileBtn) navProfileBtn.classList.toggle('visible', Boolean(currentUser));

    if (navProfileName) {
        navProfileName.textContent = currentUser ? (currentUser.name || 'Profile') : 'Profile';
    }

    if (navProfileImage) {
        navProfileImage.src = getUserAvatarSrc(currentUser);
    }
}

function renderProfileBanner() {
    const bannerName = document.getElementById('profile-banner-name');
    const bannerEmail = document.getElementById('profile-banner-email');
    const bannerAvatar = document.getElementById('profile-avatar');
    if (!bannerName || !bannerEmail || !bannerAvatar) return;

    if (!currentUser) {
        bannerName.textContent = 'Guest User';
        bannerEmail.textContent = 'Not logged in';
        bannerAvatar.textContent = 'G';
        bannerAvatar.classList.remove('has-image');
        bannerAvatar.style.backgroundImage = '';
        return;
    }

    const safeName = currentUser.name && currentUser.name.trim() ? currentUser.name.trim() : 'Guest User';
    bannerName.textContent = safeName;
    bannerEmail.textContent = currentUser.email || '';
    bannerAvatar.textContent = safeName.charAt(0).toUpperCase();

    if (currentUser.profileImage) {
        bannerAvatar.classList.add('has-image');
        bannerAvatar.style.backgroundImage = `url('${currentUser.profileImage}')`;
    } else {
        bannerAvatar.classList.remove('has-image');
        bannerAvatar.style.backgroundImage = '';
    }
}

function applyRevealObserver() {
    if (!('IntersectionObserver' in window)) return;

    if (!revealObserver) {
        revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
    }

    document.querySelectorAll('.reveal-on-scroll:not(.is-visible)').forEach(node => revealObserver.observe(node));
}

function loadMenu(category) {
    const container = document.getElementById('menu-content');
    if (!container || !menuData[category]) return;

    container.innerHTML = '';

    menuData[category].forEach((item, index) => {
        const canAdd = Boolean(currentUser);
        container.innerHTML += `
            <div class="menu-item reveal-on-scroll">
                <img src="${item.image}" alt="${item.title}" class="menu-item-image">
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3 class="menu-item-title">${item.title}</h3>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                    ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
                    <button class="add-to-cart-btn" ${canAdd ? '' : 'disabled'} onclick="addToCart('${category}', ${index})">
                        ${canAdd ? 'Add to Cart' : 'Log in to add'}
                    </button>
                </div>
            </div>
        `;
    });

    applyRevealObserver();
}

function switchTab(category, element) {
    activeCategory = category;
    document.querySelectorAll('.menu-tab').forEach(tab => tab.classList.remove('active'));
    if (element) element.classList.add('active');
    loadMenu(category);
}

function cartTotalValue() {
    return cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
}

function renderCartPanel() {
    const emptyState = document.getElementById('cart-empty');
    const itemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');

    if (!emptyState || !itemsContainer || !totalEl) return;

    if (!currentUser) {
        emptyState.textContent = 'Please log in to use the cart.';
        emptyState.style.display = 'block';
        itemsContainer.innerHTML = '';
        totalEl.textContent = formatCurrency(0);
        return;
    }

    if (!cart.length) {
        emptyState.textContent = 'Your cart is empty.';
        emptyState.style.display = 'block';
        itemsContainer.innerHTML = '';
        totalEl.textContent = formatCurrency(0);
        return;
    }

    emptyState.style.display = 'none';
    itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
                <div>
                    <h4>${item.title}</h4>
                    <p>${item.price}</p>
                </div>
            </div>
            <div class="cart-item-actions">
                <button type="button" onclick="updateCartQuantity('${item.id}', -1)">-</button>
                <span>${item.quantity}</span>
                <button type="button" onclick="updateCartQuantity('${item.id}', 1)">+</button>
                <button type="button" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        </div>
    `).join('');

    totalEl.textContent = formatCurrency(cartTotalValue());
}

function addToCart(category, itemIndex) {
    if (!currentUser) {
        alert('Please log in first to add dishes to your cart.');
        window.location.href = 'login.html';
        return;
    }

    const item = menuData[category][itemIndex];
    const id = `${category}-${itemIndex}`;
    const existing = cart.find(entry => entry.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, title: item.title, price: item.price, image: item.image, quantity: 1 });
    }

    saveCart();
    renderCartPanel();
}

function updateCartQuantity(itemId, change) {
    const target = cart.find(item => item.id === itemId);
    if (!target) return;

    target.quantity += change;
    if (target.quantity <= 0) cart = cart.filter(item => item.id !== itemId);

    saveCart();
    renderCartPanel();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    renderCartPanel();
}

function clearCart() {
    cart = [];
    saveCart();
    renderCartPanel();
}

function checkoutCart() {
    if (!currentUser) {
        alert('Please log in first.');
        return;
    }
    if (!cart.length) {
        alert('Your cart is empty.');
        return;
    }

    const orders = loadOrders(currentUser.email);
    orders.unshift({
        id: `ORD-${Date.now()}`,
        createdAt: new Date().toISOString(),
        items: cart,
        total: cartTotalValue()
    });
    saveOrders(currentUser.email, orders);

    cart = [];
    saveCart();
    renderCartPanel();
    renderProfileOrders();

    alert('Order placed successfully.');
}

function renderProfileOrders() {
    const container = document.getElementById('profile-orders');
    if (!container) return;

    if (!currentUser) {
        container.innerHTML = '<p class="muted">Log in to view your orders.</p>';
        return;
    }

    const orders = loadOrders(currentUser.email);
    if (!orders.length) {
        container.innerHTML = '<p class="muted">No orders yet.</p>';
        return;
    }

    container.innerHTML = orders.map(order => `
        <article class="order-card">
            <div class="order-head">
                <strong>${order.id}</strong>
                <span>${new Date(order.createdAt).toLocaleString()}</span>
            </div>
            <ul class="order-list">
                ${order.items.map(item => `<li>${item.title} x${item.quantity}</li>`).join('')}
            </ul>
            <div class="order-total">Total: ${formatCurrency(order.total)}</div>
        </article>
    `).join('');
}

function fillProfileForm() {
    const nameInput = document.getElementById('profile-name');
    const emailInput = document.getElementById('profile-email');
    const passwordInput = document.getElementById('profile-password');

    if (!currentUser) {
        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
        if (passwordInput) passwordInput.value = '';
        return;
    }

    if (nameInput) nameInput.value = currentUser.name || '';
    if (emailInput) emailInput.value = currentUser.email || '';
    if (passwordInput) passwordInput.value = currentUser.password || '';
}

function updateProfile(e) {
    e.preventDefault();
    if (!currentUser) {
        alert('Please log in first.');
        return;
    }

    const nameInput = document.getElementById('profile-name');
    const emailInput = document.getElementById('profile-email');
    const passwordInput = document.getElementById('profile-password');

    const nextName = nameInput ? nameInput.value.trim() : '';
    const nextEmail = emailInput ? emailInput.value.trim().toLowerCase() : '';
    const nextPassword = passwordInput ? passwordInput.value.trim() : '';

    if (!nextName || !nextEmail || !nextPassword) {
        alert('All profile fields are required.');
        return;
    }

    const users = getUsers();
    const oldEmail = currentUser.email;

    if (nextEmail !== oldEmail && users.some(user => user.email === nextEmail)) {
        alert('This email is already used by another account.');
        return;
    }

    const updatedUsers = users.map(user => {
        if (user.email !== oldEmail) return user;
        return { ...user, name: nextName, email: nextEmail, password: nextPassword, profileImage: user.profileImage || '' };
    });

    saveUsers(updatedUsers);

    if (oldEmail !== nextEmail) {
        localStorage.setItem(cartKey(nextEmail), localStorage.getItem(cartKey(oldEmail)) || '[]');
        localStorage.removeItem(cartKey(oldEmail));
        localStorage.setItem(ordersKey(nextEmail), localStorage.getItem(ordersKey(oldEmail)) || '[]');
        localStorage.removeItem(ordersKey(oldEmail));
    }

    setCurrentUser({ ...currentUser, name: nextName, email: nextEmail, password: nextPassword, profileImage: currentUser.profileImage || '' });

    loadCart();
    updateAuthUI();
    loadMenu(activeCategory);
    renderCartPanel();
    renderProfileOrders();
    renderProfileBanner();

    alert('Profile updated successfully.');
}

async function handleRegistration(e) {
    e.preventDefault();

    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const firstNameInput = form.querySelector('input[type="text"]');
    const avatarInput = document.getElementById('reg-avatar');

    const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
    const password = passwordInput ? passwordInput.value.trim() : '';
    const name = firstNameInput ? firstNameInput.value.trim() : '';

    if (!email || !password) {
        alert('Please provide email and password.');
        return;
    }

    const users = getUsers();
    if (users.some(user => user.email === email)) {
        alert('This email is already registered. Please log in.');
        return;
    }

    let profileImage = '';
    if (avatarInput && avatarInput.files && avatarInput.files[0]) {
        try {
            profileImage = await readFileAsDataUrl(avatarInput.files[0]);
        } catch (error) {
            alert('Could not upload profile picture. Registration will continue without it.');
        }
    }

    const newUser = { email, password, name: name || 'Guest', profileImage };
    users.push(newUser);
    saveUsers(users);

    setCurrentUser(newUser);
    loadCart();
    updateAuthUI();
    loadMenu(activeCategory);
    renderCartPanel();
    renderProfileBanner();

    form.reset();
    alert('Registration successful. You are now logged in.');

    if (document.getElementById('registration') && !document.getElementById('menu-content')) {
        window.location.href = 'index.html';
    }
}

function handleLogin(e) {
    e.preventDefault();

    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');

    if (!emailInput || !passwordInput) {
        alert('Login form not found.');
        return;
    }

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();

    const users = getUsers();
    const user = users.find(entry => entry.email === email && entry.password === password);

    if (!user) {
        alert('Invalid email or password.');
        return;
    }

    setCurrentUser(user);
    loadCart();
    updateAuthUI();
    loadMenu(activeCategory);
    renderCartPanel();
    fillProfileForm();
    renderProfileOrders();
    renderProfileBanner();

    e.target.reset();
    alert('You are now logged in.');

    if (document.getElementById('login') && !document.getElementById('menu-content')) {
        window.location.href = 'index.html';
    }
}

function logout() {
    setCurrentUser(null);
    cart = [];
    updateAuthUI();
    loadMenu(activeCategory);
    renderCartPanel();
    fillProfileForm();
    renderProfileBanner();
    renderProfileOrders();
}

function handleBooking(e) {
    e.preventDefault();
    alert('Thank you. Your booking request was submitted successfully.');
}

function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const button = document.querySelector('.mobile-menu-btn');
    if (!menu || !button) return;
    menu.classList.toggle('active');
    button.classList.toggle('active');
}

function closeMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    const button = document.querySelector('.mobile-menu-btn');
    if (!menu || !button) return;
    menu.classList.remove('active');
    button.classList.remove('active');
}

function bindSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMobileMenu();
        });
    });
}

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (!lightbox || !lightboxImg) return;

    lightbox.classList.add('active');
    lightboxImg.src = imageSrc;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('active');
}

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 100);
});

function initMobileMenuBehavior() {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function init() {
    currentUser = loadCurrentUser();
    loadCart();

    updateAuthUI();
    bindSmoothAnchors();
    initMobileMenuBehavior();

    if (document.getElementById('menu-content')) loadMenu(activeCategory);
    renderCartPanel();
    fillProfileForm();
    renderProfileBanner();
    renderProfileOrders();
    applyRevealObserver();

    const profileForm = document.getElementById('profile-form');
    if (profileForm) profileForm.addEventListener('submit', updateProfile);

    const checkoutButton = document.getElementById('checkout-btn');
    if (checkoutButton) checkoutButton.addEventListener('click', checkoutCart);
}

document.addEventListener('DOMContentLoaded', init);
