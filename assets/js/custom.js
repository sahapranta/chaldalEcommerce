(function ($) {
    $(document).ready(function () {
        //instruction-steps slider
        $('.instruction-steps, .testimonials').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true
                },
                600: {
                    items: 1,
                    dots: true
                },
                1000: {
                    items: 1,
                    dots: true,
                    loop: true
                }
            }
        });

        //offers slider
        $('.offers').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true,
                    loop: true
                }
            }
        });


        //hero slider
        /*$('#slider').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            loop:true,
            margin:10,
            autoplay: true,
            responsiveClass:true,
            nav:false,
            dots:true,
            mouseDrag:false,
            touchDrag: false,
            responsive:{
                0:{
                    items:1,
                    dots:true
                },
                600:{
                    items:1,
                    dots:true
                },
                1000:{
                    items:1,
                    dots:true,
                    loop:true
                }
            }
        });*/
        //slider animation
        /*$('#slider').on('translate.owl.carousel',function () {
            $('.item-content h1, .item-content p, .hero-cont-btn a, .hero-more-link a').removeClass('animated fadeInUp').css('opacity','0');
            //$('.hero-cont-btn a').removeClass('animated slideInLeft').css('opacity','0');
            //$('.hero-more-link a').removeClass('animated slideInRight').css('opacity','0');
        });
        $('#slider').on('translated.owl.carousel',function () {
            $('.item-content h1, .item-content p, .hero-cont-btn a, .hero-more-link a').addClass('animated fadeInUp').css('opacity','0');
            //$('.hero-cont-btn a').addClass('animated slideInLeft').css('opacity','1');
            //$('.hero-more-link a').addClass('animated slideInRight').css('opacity','1');
        });*/


        //WoW js activation
        //new WOW().init();

        //responsive slick nav menu activation
        /*$('#nav').slicknav({
            prependTo:'.responsive-mobile-menu',
        });*/

        // magnific popup activation
        /* $('.popup-img').magnificPopup({
             gallery: {
                 enabled: true
             },
             type: 'image'
         });*/

        //back to top show when scroll
        /*$(".back_to_top i.fa").css("display", "none");
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 300) {
                $(".back_to_top i.fa").css("display", "none");
            } else {
                $(".back_to_top i.fa").css("display", "block");
            }
        });
        $(".back_to_top i.fa").on("click",function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });*/

    });
})(jQuery);

/*left side nav start*/
function openleftNav() {
    document.getElementById("leftSidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeleftNav() {
    document.getElementById("leftSidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function mobileopenNav() {
    document.getElementById("leftSidenav").style.width = "100%";
}
/* mobile navigation */
/*function mobileopenNav() {
    document.getElementById("leftSidenav").style.width = "100%";
}*/
/*function mobileCloseNav() {
    document.getElementById("mobileNavigation").style.width = "0";
}*/


/*right side nav start*/
function openRightNav() {
    document.getElementById("rightSidenav").style.width = "350px";
    document.getElementById("main").style.marginRight = "350px";
}
function closeRightNav() {
    document.getElementById("rightSidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}
function openRightNavx() {
    document.getElementById("rightSidenav").style.width = "100%";
}
