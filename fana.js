/**
 * FANA UI - JavaScript Core
 * Simple, powerful interactions for components
 */

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // MODAL SYSTEM
    // ========================================
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modalCloses = document.querySelectorAll('[data-close]');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.classList.add('modal-open');
            }
        });
    });

    modalCloses.forEach(close => {
        close.addEventListener('click', () => {
            const modal = close.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                if (!document.querySelector('.modal.active')) {
                    document.body.classList.remove('modal-open');
                }
            }
        });
    });

    // Close on backdrop click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            const modal = e.target.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.classList.remove('modal-open');
            }
        }
    });

    // ========================================
    // DROPDOWN SYSTEM
    // ========================================
    const dropdownTriggers = document.querySelectorAll('.dropdown-toggle');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = trigger.closest('.dropdown');

            // Close other dropdowns
            document.querySelectorAll('.dropdown').forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });

            dropdown.classList.toggle('active');
        });
    });

    // Close dropdowns on outside click
    window.addEventListener('click', () => {
        document.querySelectorAll('.dropdown').forEach(d => {
            d.classList.remove('active');
        });
    });

    // ========================================
    // TABS SYSTEM
    // ========================================
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const group = tab.parentElement;
            group.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // ========================================
    // ACCORDION SYSTEM
    // ========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const accordion = item.parentElement;

            // Optional: Close other items (exclusive accordion)
            if (accordion.hasAttribute('data-exclusive')) {
                accordion.querySelectorAll('.accordion-item').forEach(i => {
                    if (i !== item) i.classList.remove('active');
                });
            }

            item.classList.toggle('active');
        });
    });

    // ========================================
    // DARK MODE SYSTEM
    // ========================================
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;

    if (darkModeToggle) {
        // Check for saved theme preference or prefers-color-scheme
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            htmlElement.setAttribute('data-theme', savedTheme);
            updateToggleButton(savedTheme);
        } else if (prefersDark) {
            updateToggleButton('dark');
        }

        darkModeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateToggleButton(newTheme);
        });

        function updateToggleButton(theme) {
            darkModeToggle.innerHTML = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        }
    }

    // ========================================
    // MOBILE MENU
    // ========================================
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarNav = document.querySelector('.navbar-nav');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbarNav.classList.toggle('active');
        });
    }

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
