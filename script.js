// ========================================
// ORDER FORM
// ========================================
const orderForm = document.querySelector('#order-form');
const orderMessage = document.querySelector('#order-message');
const whatsappUrl = 'https://chat.whatsapp.com/KV3B0wZs3dgAzqoWZC3GuV?s=cl&p=a&mlu=4&ilr=4';

if (orderForm) {
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!orderForm.reportValidity()) return;

        const order = new FormData(orderForm);
        const message = [
            'Hello Cleansimur, I would like to place an order.',
            `Name: ${order.get('name')}`,
            `Phone: ${order.get('phone')}`,
            'Product: 750 ml bottle',
            `Quantity: ${order.get('quantity')}`,
            `Delivery city: ${order.get('location')}`,
            'Please share the available multi-bottle discount.'
        ].join('\n');

        orderMessage.textContent = 'Opening WhatsApp with your order details...';
        window.open(`${whatsappUrl}&text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe gallery images and cards
    document.querySelectorAll('.gallery img, .product-card, .feature-list li').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ========================================
// SMOOTH SCROLL LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerHeight = document.querySelector('.topbar').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mousedown', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});



// ========================================
// PAGE LOAD ANIMATION
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initial page setup
if (document.body.style.opacity !== '1') {
    document.body.style.opacity = '0.95';
}

