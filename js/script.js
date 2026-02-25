/**
 * CURE CLAIM SOLUTIONS - Modern UI Logic
 * Handles: AOS, Swiper, Counter, Scroll Progress, Navbar Effects
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. INITIALIZE AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            once: true,
            mirror: false,
            offset: 100
        });
    }

    // 2. INITIALIZE SWIPER (Testimonials)
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonialSwiper', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                reverseDirection: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // 3. SCROLL PROGRESS BAR & NAVBAR SHADOW
    const scrollProgress = document.getElementById('scrollProgress');
    const mainNavbar = document.getElementById('mainNavbar');

    window.addEventListener('scroll', () => {
        // Scroll Progress
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = scrolled + "%";
        }

        // Navbar Shadow
        if (mainNavbar) {
            if (winScroll > 50) {
                mainNavbar.classList.add('scrolled');
            } else {
                mainNavbar.classList.remove('scrolled');
            }
        }

        // Stats Counter Trigger
        checkCounters();
    });

    // 4. ANIMATED COUNTERS (Intersection Observer)
    const statNums = document.querySelectorAll('.stat-num');

    const countUpObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const num = entry.target;
                const target = parseInt(num.getAttribute('data-count'));
                animateValue(num, 0, target, 2000);
                observer.unobserve(num);
            }
        });
    }, { threshold: 0.5 });

    statNums.forEach(num => countUpObserver.observe(num));

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const timeProgress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutQuad: t * (2 - t)
            const progress = timeProgress * (2 - timeProgress);
            const val = Math.floor(progress * (end - start) + start);

            const suffix = obj.querySelector('span') ? obj.querySelector('span').innerText : '';
            obj.innerHTML = val + `<span>${suffix}</span>`;

            if (timeProgress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // 5. MOBILE MENU TOGGLE (If needed, although the current CSS handles most of it)
    // Adding a simple robust toggle for the mobile menu if users click links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Optional: Close mobile menu if it were open via JS
        });
    });

});
