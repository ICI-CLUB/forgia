/**
 * FORGIA 2026 - Interactive JavaScript
 * A Makeathon × Project Expo Experience
 */

// ========================================
// REMOVABLE FEATURES - Easy to Delete/Comment
// ========================================

/**
 * REPUBLIC DAY NOTIFICATION
 */
// Close notification function - must be global for onclick to work
window.closeNotification = function() {
    const notification = document.getElementById('republicNotification');
    if (notification) {
        notification.classList.add('swipe-out');
        sessionStorage.setItem('republicNotificationSeen', 'true');
        setTimeout(() => {
            notification.classList.remove('show', 'swipe-out');
        }, 500);
    }
};

// Show Republic Day notification with swipe support
document.addEventListener('DOMContentLoaded', () => {
    const notification = document.getElementById('republicNotification');
    if (notification) {
        const notificationSeen = sessionStorage.getItem('republicNotificationSeen');
        if (notificationSeen !== 'true') {
            setTimeout(() => {
                notification.classList.add('show');
                // Auto-hide after 10 seconds
                setTimeout(() => {
                    if (notification.classList.contains('show')) {
                        window.closeNotification();
                    }
                }, 10000);
            }, 1500);

            // Add swipe gesture support
            let startX = 0;
            let currentX = 0;
            let isDragging = false;

            notification.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                isDragging = true;
                notification.classList.add('swiping');
            }, { passive: true });

            notification.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                currentX = e.touches[0].clientX;
                const diff = currentX - startX;
                
                // Only allow swipe right or left
                if (Math.abs(diff) > 10) {
                    notification.style.transform = `translateX(${diff}px)`;
                    notification.style.opacity = Math.max(0.3, 1 - Math.abs(diff) / 300);
                }
            }, { passive: true });

            notification.addEventListener('touchend', () => {
                if (!isDragging) return;
                isDragging = false;
                notification.classList.remove('swiping');
                
                const diff = currentX - startX;
                
                // If swiped more than 100px in either direction, close it
                if (Math.abs(diff) > 100) {
                    window.closeNotification();
                } else {
                    // Reset position
                    notification.style.transform = '';
                    notification.style.opacity = '';
                }
            });
        }
    }
});

/**
 * BACKGROUND MUSIC PLAYER
 */
let musicPlaying = false;
let bgMusic, musicToggle, playIcon, pauseIcon;

// Toggle music function - must be global for onclick to work
window.toggleMusic = function() {
    if (!bgMusic) return;
    
    if (musicPlaying) {
        bgMusic.pause();
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        musicPlaying = false;
    } else {
        // Restart from beginning if at the end
        if (bgMusic.currentTime >= bgMusic.duration) {
            bgMusic.currentTime = 0;
        }
        bgMusic.play().catch(err => {
            console.log('Audio play failed:', err);
            // Show play icon if auto-play blocked
            if (playIcon) playIcon.style.display = 'block';
            if (pauseIcon) pauseIcon.style.display = 'none';
        });
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
        musicPlaying = true;
    }
};

// Wait for DOM to load before initializing music player
document.addEventListener('DOMContentLoaded', () => {
    bgMusic = document.getElementById('bgMusic');
    musicToggle = document.getElementById('musicToggle');
    playIcon = document.querySelector('.play-icon');
    pauseIcon = document.querySelector('.pause-icon');
    
    if (bgMusic) {
        // Always start from beginning on page load
        bgMusic.currentTime = 0;
        bgMusic.volume = 0.7;
        
        // Try multiple methods to auto-play
        const attemptAutoPlay = () => {
            bgMusic.play().then(() => {
                musicPlaying = true;
                if (playIcon) playIcon.style.display = 'none';
                if (pauseIcon) pauseIcon.style.display = 'block';
            }).catch(err => {
                console.log('Auto-play prevented, waiting for user interaction');
                // Show play button
                if (playIcon) playIcon.style.display = 'block';
                if (pauseIcon) pauseIcon.style.display = 'none';
                
                // Try again on first user interaction
                const autoPlayOnInteraction = () => {
                    if (!musicPlaying) {
                        window.toggleMusic();
                    }
                    document.removeEventListener('click', autoPlayOnInteraction);
                    document.removeEventListener('touchstart', autoPlayOnInteraction);
                };
                document.addEventListener('click', autoPlayOnInteraction, { once: true });
                document.addEventListener('touchstart', autoPlayOnInteraction, { once: true });
            });
        };
        
        // Attempt auto-play after short delay
        setTimeout(attemptAutoPlay, 1000);
        
        // Handle music ending - loop back to start
        bgMusic.addEventListener('ended', () => {
            bgMusic.currentTime = 0;
            if (musicPlaying) {
                bgMusic.play();
            }
        });
    }
});

/**
 * PAGE LOADER (REMOVABLE)
 * To remove: Comment out or delete this entire section
 */
window.addEventListener('load', () => {
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }, 1000);
    }
});

/**
 * DEADLINE NOTIFICATION (REMOVE AFTER JAN 28)
 * To remove: Comment out or delete this entire section
 */
function showDeadlineNotification() {
    const notification = document.getElementById('deadlineNotification');
    if (!notification) return;
    
    // Check if user has closed it before
    const notificationClosed = sessionStorage.getItem('deadlineNotificationClosed');
    if (notificationClosed === 'true') return;
    
    // Show notification after 2 seconds
    setTimeout(() => {
        notification.style.display = 'block';
        
        // Auto-hide after 7 seconds
        setTimeout(() => {
            closeNotification();
        }, 7000);
    }, 2000);
}

function closeNotification() {
    const notification = document.getElementById('deadlineNotification');
    if (notification) {
        notification.classList.add('hidden');
        sessionStorage.setItem('deadlineNotificationClosed', 'true');
        setTimeout(() => {
            notification.style.display = 'none';
        }, 600);
    }
}

/**
 * ENTREPIX REDIRECT WITH LOADER (REMOVABLE)
 * To remove: Comment out or delete this entire function
 */
function redirectToEntrepix() {
    // Show loader
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        pageLoader.style.display = 'flex';
        pageLoader.classList.remove('hidden');
    }
    
    // Redirect after short delay
    setTimeout(() => {
        window.open('https://ici-club.github.io/Entrepix/', '_blank');
        
        // Hide loader
        if (pageLoader) {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }
    }, 800);
}

/**
 * REGISTRATION BUTTON LOADER (REMOVABLE)
 * To remove: Comment out or delete this entire function
 */
function addLoadersToRegistrationButtons() {
    const registerButtons = document.querySelectorAll('a[href*="#register"], .register-link, .hero-register-btn');
    
    registerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // If it's an external link (registration form)
            if (button.classList.contains('register-link') && button.href.includes('forms.google.com')) {
                e.preventDefault();
                
                const pageLoader = document.getElementById('pageLoader');
                if (pageLoader) {
                    pageLoader.style.display = 'flex';
                    pageLoader.classList.remove('hidden');
                }
                
                setTimeout(() => {
                    window.open(button.href, '_blank');
                    
                    if (pageLoader) {
                        pageLoader.classList.add('hidden');
                        setTimeout(() => {
                            pageLoader.style.display = 'none';
                        }, 500);
                    }
                }, 600);
            }
        });
    });
}

// ========================================
// END REMOVABLE FEATURES
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavigation();
    initScrollEffects();
    initRevealAnimations();
    initThemeCards();
    initSmoothScroll();
    initParallaxEffects();
    initButtonCountdown(); // Button countdown timer
    
    // Initialize removable features
    showDeadlineNotification(); // REMOVABLE: Comment out after Jan 28
    addLoadersToRegistrationButtons(); // REMOVABLE: Comment out if not needed
});

/**
 * Button Countdown Timer
 * Counts down to January 31, 2026 at 9:00 AM
 */
function initButtonCountdown() {
    // Event date: January 31, 2026, 9:00 AM
    const eventDate = new Date('January 31, 2026 09:00:00').getTime();
    
    function updateButtonCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            document.getElementById('btnCountdown').innerHTML = '<span style="font-size: 0.65rem;">Event Started!</span>';
            return;
        }
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update DOM elements
        const daysEl = document.getElementById('btnDays');
        const hoursEl = document.getElementById('btnHours');
        const minutesEl = document.getElementById('btnMinutes');
        const secondsEl = document.getElementById('btnSeconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    // Update immediately and then every second
    updateButtonCountdown();
    setInterval(updateButtonCountdown, 1000);
}

/**
 * Navigation functionality
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const scrollY = window.scrollY;
        
        // Add/remove scrolled class
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
}

/**
 * Scroll-triggered effects
 */
function initScrollEffects() {
    // Parallax for floating shapes
    const shapes = document.querySelectorAll('.shape');
    const blobs = document.querySelectorAll('.blob');

    function handleParallax() {
        const scrollY = window.scrollY;
        
        shapes.forEach((shape, index) => {
            const speed = 0.05 + (index * 0.02);
            const yPos = scrollY * speed;
            shape.style.transform = `translateY(${yPos}px) rotate(${scrollY * 0.02}deg)`;
        });

        blobs.forEach((blob, index) => {
            const speed = 0.02 + (index * 0.01);
            const yPos = scrollY * speed;
            blob.style.transform = `translate(${index % 2 === 0 ? yPos : -yPos}px, ${yPos}px)`;
        });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Reveal animations on scroll
 */
function initRevealAnimations() {
    const revealElements = document.querySelectorAll(
        '.section-header, .feature-item, .date-card, .timeline-item, ' +
        '.expo-feature, .theme-card, .criteria-item, .evaluator-item, ' +
        '.contact-card, .org-card, .about-lead, .about-visual, ' +
        '.expo-learning, .register-wrapper, .visual-card, .coordinator-card'
    );

    // Add reveal class to elements
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    // Intersection Observer for reveal
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Add stagger effect for grid items
                const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                siblings.forEach((sibling, index) => {
                    sibling.style.transitionDelay = `${index * 0.1}s`;
                });
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

/**
 * Theme cards interactive effects
 */
function initThemeCards() {
    const themeCards = document.querySelectorAll('.theme-card');

    themeCards.forEach(card => {
        // Mouse move effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            
            // Move glow
            const glow = card.querySelector('.theme-glow');
            if (glow) {
                glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 107, 53, 0.15), transparent 70%)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Parallax effects for various elements
 */
function initParallaxEffects() {
    // Hero content subtle parallax
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');

    function handleHeroParallax() {
        const scrollY = window.scrollY;
        const heroHeight = document.querySelector('.hero').offsetHeight;

        if (scrollY < heroHeight) {
            const opacity = 1 - (scrollY / heroHeight) * 1.5;
            const translateY = scrollY * 0.3;
            
            if (heroContent) {
                heroContent.style.opacity = Math.max(opacity, 0);
                heroContent.style.transform = `translateY(${translateY}px)`;
            }
        }
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleHeroParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Info cards hover effect
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Timeline items stagger animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.15}s`;
    });
}

/**
 * Cursor effects (optional, for desktop)
 */
function initCursorEffects() {
    if (window.matchMedia('(pointer: fine)').matches) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.15;
            cursorY += dy * 0.15;
            
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            
            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Hover effects
        const interactiveElements = document.querySelectorAll('a, button, .theme-card, .feature-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });
    }
}

/**
 * Counter animation for stats
 */
function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                animateCounter(target, 0, finalValue, 1500);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(num => observer.observe(num));
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(start + range * easeOut);
        
        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/**
 * Preloader (optional)
 */
function initPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="preloader-logo">FORGIA</div>
            <div class="preloader-bar">
                <div class="preloader-progress"></div>
            </div>
        </div>
    `;
    document.body.prepend(preloader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
            setTimeout(() => preloader.remove(), 500);
        }, 500);
    });
}

/**
 * Utility: Throttle function
 */
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

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/**
 * Handle window resize
 */
window.addEventListener('resize', debounce(() => {
    // Recalculate any dimension-dependent values
    const navMenu = document.getElementById('navMenu');
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        document.getElementById('navToggle').classList.remove('active');
        document.body.style.overflow = '';
    }
}, 250));

/**
 * Keyboard accessibility
 */
document.addEventListener('keydown', (e) => {
    // ESC closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Initialize counter animation after DOM load
document.addEventListener('DOMContentLoaded', initCounterAnimation);
