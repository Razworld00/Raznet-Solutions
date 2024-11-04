// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a, .cta-button').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll Reveal Animations
const sections = document.querySelectorAll('.section');
const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(revealOnScroll, {
    threshold: 0.2
});
sections.forEach(section => section.classList.add('hidden'));
sections.forEach(section => observer.observe(section));

// Back-to-Top Button
const scrollUpButton = document.createElement('button');
scrollUpButton.classList.add('scroll-up');
scrollUpButton.textContent = '↑';
document.body.appendChild(scrollUpButton);

scrollUpButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollUpButton.style.opacity = '1';
        scrollUpButton.style.pointerEvents = 'all';
    } else {
        scrollUpButton.style.opacity = '0';
        scrollUpButton.style.pointerEvents = 'none';
    }
});

// Mobile Navigation Toggle
const navbar = document.querySelector('.navbar');
const mobileNavButton = document.createElement('button');
mobileNavButton.classList.add('mobile-nav-toggle');
mobileNavButton.innerHTML = '☰';
navbar.parentNode.insertBefore(mobileNavButton, navbar);

mobileNavButton.addEventListener('click', () => {
    navbar.classList.toggle('navbar-visible');
    mobileNavButton.classList.toggle('active');
});

// Typewriter Effect for Hero Section
const heroText = document.querySelector('.hero h1');
const heroMessage = "Welcome to Raznet Solutions";
let index = 0;

const typewriter = () => {
    if (index < heroMessage.length) {
        heroText.textContent += heroMessage[index];
        index++;
        setTimeout(typewriter, 100);
    }
};
typewriter();

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.classList.add('dark-mode-toggle');
darkModeToggle.textContent = '🌙';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌞';
    } else {
        darkModeToggle.textContent = '🌙';
    }
});

// Dark Mode CSS Addition (applies only when the class is added)
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #121212;
        color: #e0e0e0;
    }
    .dark-mode .navbar, .dark-mode .footer {
        background-color: #333;
    }
    .dark-mode .card, .dark-mode .plan {
        background-color: #1e1e1e;
    }
`;
document.head.appendChild(style);

// Lazy Loading for Images
const lazyLoadImages = document.querySelectorAll('img[data-src]');
const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            entry.target.removeAttribute('data-src');
            observer.unobserve(entry.target);
        }
    });
};

const imageObserver = new IntersectionObserver(lazyLoad, {
    threshold: 0.1,
    rootMargin: '0px 0px 50px 0px'
});

lazyLoadImages.forEach(img => imageObserver.observe(img));

// Dynamic Year in Footer
const year = new Date().getFullYear();
document.querySelector('.footer p').innerHTML += ` &copy; ${year} Raznet Solutions. All Rights Reserved.`;
