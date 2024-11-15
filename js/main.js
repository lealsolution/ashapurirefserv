(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

})(jQuery);

// services border-click
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.service-card').forEach(function (card) {
        card.addEventListener('click', function () {
            document.querySelectorAll('.service-card').forEach(function (c) {
                c.classList.remove('selected-border');
            });
            this.classList.add('selected-border');
        });
    });
});

// service card auto select
document.querySelectorAll('.service-card').forEach(item => {
    item.addEventListener('click', () => {
        // Remove the 'selected' class from all elements with the '.service-card' class
        document.querySelectorAll('.service-card').forEach(el => el.classList.remove('selected'));

        // Add the 'selected' class to the clicked card
        item.classList.add('selected');
    });
});

// about histroy js code
let slideIndex = 0;
const slides = document.querySelectorAll('.about-slide-frame');
let visibleSlides = 3; // Default value

function updateVisibleSlides() {
    if (window.innerWidth <= 768) { // Mobile view
        visibleSlides = 1;
    } else if (window.innerWidth <= 992) { // Tablet view
        visibleSlides = 2;
    } else { // Desktop view
        visibleSlides = 3;
    }
}

function showSlides() {
    updateVisibleSlides(); // Update the number of visible slides
    // Hide all slides
    slides.forEach((slide, index) => {
        slide.style.display = (index >= slideIndex && index < slideIndex + visibleSlides) ? 'block' : 'none';
    });
}

function changeSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

// Initial call
showSlides();

// Update slides on window resize
window.addEventListener('resize', showSlides);



document.getElementById('viewMoreBtn').addEventListener('click', function() {
    const moreCards = document.querySelectorAll('.more-cards');
    moreCards.forEach(card => {
        card.classList.remove('d-none'); // Show hidden cards
    });

    this.classList.add('d-none'); // Hide the "View More" button
    document.getElementById('viewLessBtn').classList.remove('d-none'); // Show the "View Less" button
});

document.getElementById('viewLessBtn').addEventListener('click', function() {
    const moreCards = document.querySelectorAll('.more-cards');
    moreCards.forEach(card => {
        card.classList.add('d-none'); // Hide additional cards
    });

    this.classList.add('d-none'); // Hide the "View Less" button
    document.getElementById('viewMoreBtn').classList.remove('d-none'); // Show the "View More" button

    // Optional: Scroll back to the top of the main start div
    document.getElementById('mainStart').scrollIntoView({ behavior: 'smooth' });
});
