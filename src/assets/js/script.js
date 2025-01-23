(function () {
    "use strict";

    // Spinner
    const spinner = () => {
        setTimeout(() => {
            const spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();


    // Initiate WOW.js
    if (typeof WOW === 'function') {
        new WOW().init();
    }


    // Sticky Navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 45) {
            navbar.classList.add('sticky-top', 'shadow-sm');
        } else {
            navbar.classList.remove('sticky-top', 'shadow-sm');
        }
    });


    // Hero Header Carousel
    const headerCarousel = document.querySelector('.header-carousel');
    if (headerCarousel && typeof OwlCarousel === 'function') {
        $(headerCarousel).owlCarousel({
            animateOut: 'slideOutDown',
            items: 1,
            autoplay: true,
            smartSpeed: 1000,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
        });
    }


    // Testimonial Carousel
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel && typeof OwlCarousel === 'function') {
        $(testimonialCarousel).owlCarousel({
            autoplay: true,
            items: 1,
            smartSpeed: 1500,
            dots: true,
            dotsData: true,
            loop: true,
            margin: 25,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ]
        });
    }


    // Modal Video
    document.addEventListener('DOMContentLoaded', () => {
        let videoSrc = '';
        const playButtons = document.querySelectorAll('.btn-play');
        playButtons.forEach(button => {
            button.addEventListener('click', () => {
                videoSrc = button.getAttribute('data-src');
            });
        });

        const videoModal = document.getElementById('videoModal');
        if (videoModal) {
            videoModal.addEventListener('shown.bs.modal', () => {
                const video = document.getElementById('video');
                if (video) {
                    video.setAttribute('src', `${videoSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0`);
                }
            });

            videoModal.addEventListener('hide.bs.modal', () => {
                const video = document.getElementById('video');
                if (video) {
                    video.setAttribute('src', videoSrc);
                }
            });
        }
    });


    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
                backToTopButton.classList.add('fadeIn');
            } else {
                backToTopButton.style.display = 'none';
                backToTopButton.classList.remove('fadeIn');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // Animation Function
    const myMove = () => {
        const elem = document.getElementById("animate");
        if (elem) {
            let pos = 0;
            const id = setInterval(() => {
                if (pos === 350) {
                    clearInterval(id);
                } else {
                    pos++;
                    elem.style.top = pos + "px";
                    elem.style.left = pos + "px";
                }
            }, 5);
        }
    };

})();
