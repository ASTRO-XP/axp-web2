(function($) {

    "use strict";

    function handlePreloader() {
        if ($('.preloader').length) {
            $('body').addClass('page-loaded');
            $('.preloader').delay(1500).fadeOut(300);
            // resizeCover();
        }
    }

    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            var sticky_header = $('.main-header .sticky-header');
            var stickyTeamDrop = $('#teamdrop');
            var stickyComDrop = $('#comdrop');
            if (windowpos > 100) {
                siteHeader.addClass('fixed-header');
                sticky_header.addClass("animated slideInDown");
                stickyTeamDrop.addClass("team-stk-drop");
                stickyComDrop.addClass("com-stk-drop");
                scrollLink.fadeIn(300);
                console.log("<--- What's This?");
            } else {
                siteHeader.removeClass('fixed-header');
                sticky_header.removeClass("animated slideInDown");
                scrollLink.fadeOut(300);
            }
        }
    }


    headerStyle();

    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');

    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        $('.mobile-menu .menu-box').mCustomScrollbar();

        var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
        $('.sticky-header .main-menu').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });
    }

    if ($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }


    //Single Item Carousel
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }


    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            }
        });
    }
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1500);

        });
    }

    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }


    $(window).on('scroll', function() {
        headerStyle();
    });

    $(window).on('load', function() {
        handlePreloader();
    });


    // $('a[href^="#"]').on('click', function(event) {
    //     var target = $($(this).attr('href'));

    //     if (target.length) {
    //         event.preventDefault();
    //         $('html, body').animate({
    //             scrollTop: target.offset().top
    //         }, 1200);
    //     }

    // });

    var lastId,
        topMenu = $(".nav-menu"),
        topMenuHeight = topMenu.outerHeight() + 1,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function() {
            if (this.getAttribute("href").charAt(0) == "#") {
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            }
        });

    $(window).scroll(function() {
        var fromTop = $(this).scrollTop() + topMenuHeight + 100;
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("current")
                .end().filter('[href="#' + id + '"]').parent().addClass("current");
        }
    });

    $(window).on('load resize', function() {
        if ($(window).width() < 1023) {
            $("#rm-img").attr("src", "images/roadmap/ROADMAP-PORTRAIT-2.png");
        } else {
            $("#rm-img").attr("src", "images/roadmap/ROADMAP-LANDSCAPE-2.png");
        }

        if ($(window).width() < 770) {
            $("#tk-img").attr("src", "images/tokenomics/AXPVLX-PORTRAIT.png");
        } else {
            $("#tk-img").attr("src", "images/tokenomics/AXPVLX.png");
        }
    });

})(window.jQuery);