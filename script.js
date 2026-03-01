// Function to generate dynamic stars for better performance and randomness
function createStars() {
    const starCount = 150;

    // Create random stars
    let shadowsPrimary = '';
    let shadowsSecondary = '';

    for (let i = 0; i < starCount; i++) {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        const alpha = Math.random() * 0.5 + 0.3; // Random opacity

        shadowsPrimary += `${x}vw ${y}vh rgba(255, 255, 255, ${alpha}), `;

        const x2 = Math.floor(Math.random() * 100);
        const y2 = Math.floor(Math.random() * 100);

        shadowsSecondary += `${x2}vw ${y2}vh rgba(255, 255, 255, ${alpha}), `;
    }

    // Remove the trailing comma and space
    shadowsPrimary = shadowsPrimary.slice(0, -2);
    shadowsSecondary = shadowsSecondary.slice(0, -2);

    // Apply to the elements
    const style = document.createElement('style');
    style.innerHTML = `
        #stars { box-shadow: ${shadowsPrimary}; }
        #stars2 { box-shadow: ${shadowsSecondary}; }
    `;
    document.head.appendChild(style);
}

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Mobile Toggle
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

function reveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Highlight Active Nav Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    reveal(); // Trigger reveal on load
});
