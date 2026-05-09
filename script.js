// ============================================
// PREMIUM KASAP - PROFESSIONAL JAVASCRIPT
// Modern, Functional & Professional JS
// ============================================

// ============================================
// 1. PRODUCT DATABASE
// ============================================

const products = [
    {
        id: 1,
        name: 'Premium Biftek',
        category: 'beef',
        weight: '500g',
        price: 189.99,
        rating: 5,
        reviews: 24,
        description: 'En iyi kültür meraları dari seçilmiş, mükemmel marbling ve lezzet profili olan premium biftek. Şef tarafından önerilen seçim.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Premium+Biftek'
    },
    {
        id: 2,
        name: 'Kıyma (Sığır)',
        category: 'beef',
        weight: '1kg',
        price: 129.99,
        rating: 4.8,
        reviews: 18,
        description: 'Taze, lezzet dolu ve çeşitli yemekler için ideal olan sığır kıyması. Hiç katkı maddesi içermez.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Sığır+Kıyması'
    },
    {
        id: 3,
        name: 'Tavuk Göğsü',
        category: 'chicken',
        weight: '800g',
        price: 79.99,
        rating: 4.9,
        reviews: 32,
        description: 'Sağlıklı, proteinli ve taze tavuk göğsü. Hafif yemekler ve fitness diyetleri için mükemmel.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Tavuk+Göğsü'
    },
    {
        id: 4,
        name: 'Tavuk Budu',
        category: 'chicken',
        weight: '1kg',
        price: 64.99,
        rating: 4.7,
        reviews: 28,
        description: 'Lezzetli ve ekonomik tavuk budu. Fırında, tavada ve ızgarada kullanıma idealdir.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Tavuk+Budu'
    },
    {
        id: 5,
        name: 'Kuzu Şiş',
        category: 'lamb',
        weight: '600g',
        price: 159.99,
        rating: 5,
        reviews: 41,
        description: 'Şiş yapımı için ideal kesilen, yumuşak ve lezzetli kuzu eti. Üzeri baharat dolu.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Kuzu+Şiş'
    },
    {
        id: 6,
        name: 'Kuzu Pirzola',
        category: 'lamb',
        weight: '700g',
        price: 179.99,
        rating: 4.9,
        reviews: 35,
        description: 'Özel kesilen, şahane lezzetle ve yapıda kuzu pirzolası. Lüks yemekler için tercih ediliyor.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Kuzu+Pirzola'
    },
    {
        id: 7,
        name: 'Balık Filetosu',
        category: 'special',
        weight: '600g',
        price: 199.99,
        rating: 4.8,
        reviews: 22,
        description: 'Taze, kaliteli ve tamamen fileto halinde hazırlanmış balık. Sağlıklı omega-3 kaynağı.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Balık+Filetosu'
    },
    {
        id: 8,
        name: 'Köfte (Sığır)',
        category: 'special',
        weight: '800g',
        price: 94.99,
        rating: 4.7,
        reviews: 30,
        description: 'Evde hazırladığımız, taze ve lezzetli sığır köftesi. 8 parça halinde ambalajlı.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Sığır+Köfte'
    },
    {
        id: 9,
        name: 'Kasap Karması',
        category: 'special',
        weight: '1.5kg',
        price: 249.99,
        rating: 5,
        reviews: 27,
        description: 'Biftek, kuzu ve tavuk eti kombinasyonu. Ailelerin haftalık ihtiyacı için ideal paket.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Kasap+Karması'
    },
    {
        id: 10,
        name: 'Sığır Bonfile',
        category: 'beef',
        weight: '400g',
        price: 219.99,
        rating: 4.9,
        reviews: 38,
        description: 'Yüksek kaliteli, ender bulunabilen ve çok pahalı olan sığır bofiletosu. Lüks yemekler için.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Sığır+Bonfile'
    },
    {
        id: 11,
        name: 'Tavuk Çutlama',
        category: 'chicken',
        weight: '1.2kg',
        price: 89.99,
        rating: 4.6,
        reviews: 25,
        description: 'Çutlama yapmak için ideal kesim şekli. Lezzet ve yumuşaklık garantili.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Tavuk+Çutlama'
    },
    {
        id: 12,
        name: 'Kuzu Kıyma',
        category: 'lamb',
        weight: '600g',
        price: 139.99,
        rating: 4.8,
        reviews: 19,
        description: 'Lezzet açısından çok yüksek kalitede kuzu kıyması. Kofte, musakka ve diğer yemekler için.',
        image: 'https://via.placeholder.com/250x200/8B4513/ffffff?text=Kuzu+Kıyma'
    }
];

// ============================================
// 2. SHOPPING CART
// ============================================

let cart = [];

class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }
        this.save();
        this.showNotification('Ürün sepete eklendi!');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            this.save();
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this.save();
    }

    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.updateCartUI();
    }

    updateCartUI() {
        const cartLink = document.querySelector('.cart-link');
        if (cartLink) {
            cartLink.textContent = `Sepet (${this.getItemCount()})`;
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    }
}

// Initialize Cart
const cart_manager = new Cart();

// ============================================
// 3. PRODUCT RENDERING
// ============================================

class ProductManager {
    constructor(products) {
        this.products = products;
        this.filteredProducts = products;
        this.currentFilter = 'all';
    }

    filterByCategory(category) {
        this.currentFilter = category;
        if (category === 'all') {
            this.filteredProducts = this.products;
        } else {
            this.filteredProducts = this.products.filter(p => p.category === category);
        }
        this.renderProducts();
    }

    renderProducts() {
        const grid = document.getElementById('productsGrid');
        if (!grid) return;

        grid.innerHTML = this.filteredProducts.map(product => `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <span class="product-category">${this.getCategoryName(product.category)}</span>
                    <h3>${product.name}</h3>
                    <p class="product-weight">${product.weight}</p>
                    <div class="product-rating">
                        <i class="fas fa-star"></i> ${product.rating} (${product.reviews} yorum)
                    </div>
                    <div class="product-price">₺${product.price.toFixed(2)}</div>
                    <button class="product-btn" data-product-id="${product.id}">Detaylı Bak</button>
                </div>
            </div>
        `).join('');

        this.attachEventListeners();
    }

    attachEventListeners() {
        document.querySelectorAll('.product-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.productId);
                const product = this.products.find(p => p.id === productId);
                this.showProductModal(product);
            });
        });
    }

    showProductModal(product) {
        const modal = document.getElementById('productModal');
        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalTitle').textContent = product.name;
        document.getElementById('modalDescription').textContent = product.description;
        document.getElementById('modalCategory').textContent = this.getCategoryName(product.category);
        document.getElementById('modalWeight').textContent = product.weight;
        document.getElementById('modalPrice').textContent = `₺${product.price.toFixed(2)}`;
        document.getElementById('quantity').value = 1;
        
        modal.classList.add('active');
        
        document.getElementById('addToCartBtn').onclick = () => {
            const quantity = parseInt(document.getElementById('quantity').value);
            cart_manager.addItem(product, quantity);
            modal.classList.remove('active');
        };
    }

    getCategoryName(category) {
        const names = {
            'beef': 'Biftek',
            'chicken': 'Tavuk',
            'lamb': 'Kuzu',
            'special': 'Özel Kesiler'
        };
        return names[category] || category;
    }
}

// Initialize Product Manager
const productManager = new ProductManager(products);

// ============================================
// 4. EVENT LISTENERS & DOM MANIPULATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    productManager.renderProducts();
    cart_manager.updateCartUI();

    // Navigation Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            productManager.filterByCategory(btn.dataset.filter);
        });
    });

    // Modal Close Button
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Quantity Controls
    const increaseBtn = document.getElementById('increaseQty');
    const decreaseBtn = document.getElementById('decreaseQty');
    const qtyInput = document.getElementById('quantity');

    if (increaseBtn && decreaseBtn && qtyInput) {
        increaseBtn.addEventListener('click', () => {
            qtyInput.value = parseInt(qtyInput.value) + 1;
        });

        decreaseBtn.addEventListener('click', () => {
            if (parseInt(qtyInput.value) > 1) {
                qtyInput.value = parseInt(qtyInput.value) - 1;
            }
        });

        qtyInput.addEventListener('change', () => {
            if (qtyInput.value < 1) qtyInput.value = 1;
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            console.log('Newsletter subscription:', email);
            cart_manager.showNotification('Abone olduğunuz için teşekkür ederiz!');
            newsletterForm.reset();
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            console.log('Contact form submitted:', Object.fromEntries(formData));
            cart_manager.showNotification('Mesajınız başarıyla gönderildi. Çok yakında size dönüş yapacağız!');
            contactForm.reset();
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .service-card, .blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
});

// ============================================
// 5. NOTIFICATION STYLES (CSS-in-JS)
// ============================================

const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #27AE60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        animation: slideInNotification 0.3s ease;
    }

    @keyframes slideInNotification {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// 6. UTILITY FUNCTIONS
// ============================================

// Format Price
function formatPrice(price) {
    return '₺' + price.toFixed(2).replace('.', ',');
}

// Format Date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('tr-TR', options);
}

// Debounce Function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle Function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// 7. ADVANCED FEATURES
// ============================================

// Search Functionality
function searchProducts(keyword) {
    const results = productManager.products.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.description.toLowerCase().includes(keyword.toLowerCase())
    );
    return results;
}

// Get Related Products
function getRelatedProducts(productId, limit = 3) {
    const product = productManager.products.find(p => p.id === productId);
    if (!product) return [];
    
    return productManager.products
        .filter(p => p.category === product.category && p.id !== productId)
        .slice(0, limit);
}

// Calculate Discount
function calculateDiscount(originalPrice, discountPercent) {
    return originalPrice * (1 - discountPercent / 100);
}

// Get Best Sellers
function getBestSellers(limit = 5) {
    return productManager.products
        .sort((a, b) => b.reviews - a.reviews)
        .slice(0, limit);
}

// ============================================
// 8. ANALYTICS TRACKING (Example)
// ============================================

class Analytics {
    static trackProductView(productId) {
        console.log('Product viewed:', productId);
    }

    static trackAddToCart(productId, quantity) {
        console.log('Added to cart:', { productId, quantity });
    }

    static trackPurchase(total) {
        console.log('Purchase completed:', total);
    }

    static trackPageView(pageName) {
        console.log('Page viewed:', pageName);
    }
}

// Track page view on load
Analytics.trackPageView('home');

// ============================================
// 9. PERFORMANCE OPTIMIZATION
// ============================================

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// 10. ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
    console.error('JavaScript Error:', event.error);
});

// Handle Unhandled Promise Rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
});