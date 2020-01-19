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
