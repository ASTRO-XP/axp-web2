(function($) {

    "use strict";

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('body').addClass('page-loaded');
            $('.preloader').delay(1500).fadeOut(300);
            // resizeCover();
        }
    }


    var rect = $('#banner')[0].getBoundingClientRect();
    var mouse = { x: 0, y: 0, moved: false };

    $("#banner").mousemove(function(e) {
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    // Ticker event will be called on every frame
    TweenLite.ticker.addEventListener('tick', function() {
        if (mouse.moved) {
            parallaxIt(".gif", -50);
        }
        mouse.moved = false;
    });

    function parallaxIt(target, movement) {
        TweenMax.to(target, 0.5, {
            x: (mouse.x - rect.width / 2) / rect.width * movement,
            y: (mouse.y - rect.height / 2) / rect.height * movement
        });
    }

    $(window).on('resize scroll', function() {
            rect = $('#banner')[0].getBoundingClientRect();
        })
        //Update Header Style and Scroll to Top
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
            } else {
                siteHeader.removeClass('fixed-header');
                sticky_header.removeClass("animated slideInDown");
                scrollLink.fadeOut(300);
            }
        }
    }
    var rellax = new Rellax('.rellax');


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


    // Sponsors Carousel
    if ($('.sponsors-carousel').length) {
        $('.sponsors-carousel').owlCarousel({
            loop: true,
            margin: 40,
            nav: true,
            smartSpeed: 500,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1024: {
                    items: 5
                }
            }
        });
    }

    // Awards Carousel
    if ($('.awards-carousel').length) {
        $('.awards-carousel').owlCarousel({
            loop: true,
            margin: 40,
            nav: true,
            smartSpeed: 500,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1024: {
                    items: 5
                }
            }
        });
    }


    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }


    //Gallery Filters
    if ($('.filter-list').length) {
        $('.filter-list').mixItUp({});
    }

    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }

    //Contact Form Validation
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

    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1500);

        });
    }

    // Elements Animation
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


    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function() {
        handlePreloader();
    });

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1200);
    });

    // var resizeCover = function() {
    //     var banner = document.querySelector('#banner')
    //     console.log(banner);
    //     var owlSlider = banner.querySelector(".owl-stage-outer");
    //     console.log(owlSlider);
    //     var newHeight = window.innerHeight - document.getElementById('header').clientHeight;
    //     if ($(window).width() < 1023) {
    //         console.log("resized to low reso");
    //         owlSlider.style.height = newHeight + 131 + "px";
    //         owlSlider.style.minHeight = newHeight + 131 + "px";
    //     } else {
    //         owlSlider.style.height = newHeight + "px";
    //         owlSlider.style.minHeight = newHeight + "px";
    //     }

    // }

    // $(document).ready(resizeCover);
    // window.onresize = resizeCover;


    // Cache selectors
    var lastId,
        topMenu = $(".nav-menu"),
        topMenuHeight = topMenu.outerHeight() + 1,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            if (this.getAttribute("href").charAt(0) == "#") {
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    // menuItems.click(function(e){
    //   var href = $(this).attr("href"),
    //       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    //   $('html, body').stop().animate({ 
    //       scrollTop: offsetTop
    //   }, 850);
    //   e.preventDefault();
    // });

    // Bind to scroll
    $(window).scroll(function() {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;
        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("current") // check here
                .end().filter('[href="#' + id + '"]').parent().addClass("current");
        }
    });

    $(window).on('load resize', function() {
        var hvimg1 = $('#hvimg1');
        var hvimg2 = $('#hvimg2');
        var hvimg3 = $('#hvimg3');
        var hvimg4 = $('#hvimg4');
        var hvc1 = $('#hvc1');
        var hvc2 = $('#hvc2');
        var hvc3 = $('#hvc3');
        var hvc4 = $('#hvc4');
        var wrapper = $('#hvwrap');

        if ($(window).width() < 770) {
            wrapper.prepend(hvimg1).append(hvc1);
            wrapper.append(hvimg2).append(hvc2);
            wrapper.append(hvimg3).append(hvc3);
            wrapper.append(hvimg4).append(hvc4);
        } else {
            wrapper.prepend(hvimg1).append(hvc1);
            wrapper.append(hvc2).append(hvimg2);
            wrapper.append(hvimg3).append(hvc3);
            wrapper.append(hvc4).append(hvimg4);
        }
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