document.addEventListener('DOMContentLoaded', () => {
    // Current page highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // FAQ Toggles
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            const span = item.querySelector('.faq-question span');
            if (span) {
                span.textContent = item.classList.contains('active') ? '-' : '+';
            }
        });
    });

    // Cookie Banner
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner && localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'none';
    }

    window.acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        if (cookieBanner) {
            cookieBanner.style.opacity = '0';
            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 300);
        }
    };

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message. We will get back to you within 24 hours!');
                contactForm.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});
