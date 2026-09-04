// ========================================
// FORM HANDLING & VALIDATION
// ========================================
const form = document.querySelector('#enquiry-form');
const message = document.querySelector('.form-message');

// Form field elements
const nameField = document.querySelector('#name');
const phoneField = document.querySelector('#phone');
const emailField = document.querySelector('#email');
const sizeField = document.querySelector('input[name="size"]');

// Validate individual fields
function validateField(field) {
    const value = field.value.trim();
    const fieldContainer = field.closest('.field') || field.parentElement;

    if (!fieldContainer) return true;

    let isValid = true;

    // Check required fields
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    }

    // Check email format
    if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
    }

    // Check phone format (basic)
    if (field.type === 'tel' && value && !/^\d{7,}/.test(value.replace(/\D/g, ''))) {
        isValid = false;
    }

    // Update field styling
    if (isValid && value) {
        fieldContainer.classList.remove('error');
    } else if (!isValid) {
        fieldContainer.classList.add('error');
    }

    return isValid;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add real-time validation
if (nameField) nameField.addEventListener('blur', () => validateField(nameField));
if (phoneField) phoneField.addEventListener('blur', () => validateField(phoneField));
if (emailField) emailField.addEventListener('blur', () => validateField(emailField));

// Form submission
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validate all fields
        const fields = [nameField, phoneField, emailField];
        let isFormValid = true;

        fields.forEach(field => {
            if (field && !validateField(field)) {
                isFormValid = false;
            }
        });

        // Check if a size is selected
        const sizeSelected = document.querySelector('input[name="size"]:checked');
        if (!sizeSelected) {
            isFormValid = false;
            message.textContent = 'Please select a product size.';
            message.className = 'form-message error';
            return;
        }

        // If form is not valid, show error
        if (!isFormValid) {
            message.textContent = 'Please fill in all required fields correctly.';
            message.className = 'form-message error';
            return;
        }

        // Form is valid - show success message
        const size = new FormData(form).get('size');
        const name = nameField.value.trim();

        message.textContent = `Thank you, ${name}! Your ${size} enquiry has been submitted successfully. An authorized Cleansimur representative will contact you soon.`;
        message.className = 'form-message success';

        // Optional: Clear form after successful submission
        setTimeout(() => {
            form.reset();
            message.textContent = '';
            message.className = 'form-message';
            document.querySelectorAll('.field').forEach(field => {
                field.classList.remove('error');
            });
        }, 3000);
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

