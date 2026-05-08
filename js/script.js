// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a, .btn-primary').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
// ====== CENTER → OUTWARDS DIVIDER ANIMATION ======
// =========================================================
// CENTER → OUTWARDS DIVIDER ANIMATION
// =========================================================

// Center → Outwards Divider Animation (One-time trigger)
// Divider animation that replays every time you scroll past it
const dividers = document.querySelectorAll('.section-divider');

function handleDividers() {
    dividers.forEach(divider => {
        const rect = divider.getBoundingClientRect();

        // When divider enters viewport → animate
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            divider.classList.add('visible');
        } 
        // When divider leaves viewport → reset
        else {
            divider.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleDividers);
window.addEventListener('load', handleDividers);
