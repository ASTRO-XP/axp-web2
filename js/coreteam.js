$('.team-slider').owlCarousel({
    loop: false,
    nav: false,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 4
        },
        1920: {
            items: 4
        }
    }
});