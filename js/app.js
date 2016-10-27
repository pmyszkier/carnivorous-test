/**
 * Created by piotr on 10.10.2016.
 */




$(document).ready(function () {


// 8. Animacja 3 ze strony: http://grafmag.pl/artykuly/animacje-na-stronie-podczas-przewijania-okna/ :
//         Animacja wykonana na elementach fadeInLeft i fadeInRight oraz popup-click.sr = ScrollReveal();
//         (kod bazowy w katalogu scrollreveal-master a wywołanie kodu w app.js):

    $.getScript( "./scrollreveal-master/dist/scrollreveal.min.js", function() {
        window.sr = ScrollReveal();
        sr.reveal('.section-five .popup-click', {
            reset: true,
            delay: 300,
            distance: 0
        });
        // sr.reveal('.fadeInRight', {
        //     reset: true,
        //     delay: 300
        // });

        // sr.reveal('.section-four .row div', { duration: 2000, delay: 3200 }, 1);
    });






// 1. Wykonanie sticky-menu

    var nav = $('nav');  //element zaraz nad ul.menu w drzewie DOM
    console.log(nav);
    var ulMenu = $('.menu');  // menu jako lista nieuporządkowana
    console.log(ulMenu);
    var topValue = 0;
    var menuTopValue = ulMenu.css('top'); // dodanie do menu top=0
    console.log(menuTopValue);
    var header = $('header');

    var stickyNavTop = Math.round($('nav').offset().top); // pozycja elementu nav względem góry okna zaokrąglona do całkowitej( dla desktop 255px)
    $(window).on('scroll', function (e) {  //skrolowanie na window, może też być document
        // console.log('scrollowanie');
        var scrollTop = $(window).scrollTop();  // !!! pozycja przewijania góry strony względem góry okna (reaguje na scroll) - o tyle pikseli się przewinęło
        console.log(scrollTop);

        console.log(stickyNavTop);

        if (scrollTop > stickyNavTop) {
            ulMenu.addClass('sticky'); //przyczepiay menu do góry okna
        } else {
            ulMenu.removeClass('sticky');
        }

    });

// 2. Kliknięcie w element Menu spowoduje przewinięcie do góry odpowiadającej mu sekcji:

    var a = $('a'); // klikany dalej element a menu

    a.on('click', function (e) {
        var href = $(this).attr('href'); // pobranie wartości id dla href pozycji menu czyli id dalej położonej sekcji
        console.log(href);

        e.preventDefault(); // zapobiegnięcie przeładowaniu strony

        var scrollTop = $(window).scrollTop();
        var menuHeight = $('.menu').height();  // wysokość elementu menu (o tyle musimy obniżyć wjazd sekcji na górę
        console.log(menuHeight);


        if (scrollTop < stickyNavTop) {
            console.log(scrollTop);
            console.log($(href).offset().top);  // pozycja wywoływanego section względem góry strony

            if ($(window).width() > 991) { // dla desktopu
                $('html,body').animate({
                    scrollTop: ($(href).offset().top - menuHeight - 50) //przewijanie strony przez 2 sekundy, aby nagłówek o wywołanym id przewijał się do góry, 50 to jest wysokość menu na desktop
                }, 2000);
            } else {                 // dla mobile
                $('html,body').animate({
                    scrollTop: ($(href).offset().top - menuHeight) //przewijanie strony przez 2 sekundy, aby nagłówek o wywołanym id przewijał się do góry
                }, 2000);
            }

        } else {
            // $('body').removeClass('body-margin');
            // additionalDiv.removeClass('show');  //DO ZMIANY PÓŹNIEJ
            $('html,body').animate({
                scrollTop: $(href).offset().top //przewijanie strony przez 2 sekundy, aby nagłówek o wywołanym id przewijał się do góry
            }, 2000);
        }

    });


// 3. Otwieranie i zamykanie popupów w sekcjach Uprawa i Galeria:

    $(".popup-click").click(function () {   //kliknięcie na blok popupa otwiera popupa (display zamiast none jest teraz flex)

        // var tresc = jQuery(this).attr("name");
        //
        // jQuery("#popup").html(tresc);
//
        $(this).next().fadeIn();
        $(this).next().addClass('flex');
        $('.courtain').addClass('courtain-fade');

    });
    // $(".popup-click").parent().parent().parent().parent().mouseleave(function () {    //wyjechanie z sekcji (przodek popupa) zamyka popupa i usuwa display:flex (wraca do display:none)
    //
    //     $(".popup-click").next().fadeOut();
    //     $(".popup-click").next().removeClass('flex');
    //     $('.courtain').removeClass('courtain-fade');
    //
    // });

    $(".popup-click").next().click(function () {  //kliknięcie na okno popupa zamyka go i usuwa display:flex (wraca do display:none)

        $(".popup-click").next().fadeOut();
        $(".popup-click").next().removeClass('flex');
        $('.courtain').removeClass('courtain-fade');

    });


// 4. Rozwijanie i zwijanie submenu dla elementów menu (tutaj submenu ma tylko element Produkty):

    if ($(window).width() <= 991) { // warunek dla ekranów o zakładanej szerokości
        $(".mobile-menu").click(function () {

            $(this).siblings().toggle(); //kliknięcie mobile menu rozwija i zwija podmenu

        });

        $(".li-menu").click(function () {  //kliknięcie pozycji menu chowa wszystkie pozycje menu (z wyjątkiem mobile-menu)

            $(".li-menu").hide();
            $(".products").hide();
            $(".mobile-menu").show();

        });

    }

    $(".products").click(function () { // kiknięcie pozycji menu o nazwie Produkty pokazuje jego podmenu
        $(this).find('.submenu').addClass('show-submenu');
    });

    $(document).click(function (event) {  //Kliknięcie poza DIVem o klasie .menu zamyka submenu i subsubmenu
        if ($(event.target).closest(".menu").length === 0) {
            console.log("Kliknięto poza DIVem o klasie .menu");
            $('.submenu').removeClass('show-submenu');
            $('.subsubmenu').removeClass('show-subsubmenu');
        }
    });

    $("li.category").click(function () { // kiknięcie pozycji submenu pokazuje jego subsubmenu

        if ($(this).find('.subsubmenu').hasClass('show-subsubmenu') == false) {
            $('.subsubmenu').removeClass('show-subsubmenu');
            $(this).find('.subsubmenu').addClass('show-subsubmenu');
        } else {
            $('.subsubmenu').removeClass('show-subsubmenu');
        }
    });



    // 5. Animacja elementów (obrazków) w sekcji Galeria:

    $(".section-five .overlay img").mouseover(function () { //poruszanie obrazkami w galerii przy najechaniu myszą
        // $(this).css('transform','rotate(7deg)');
        $(this).addClass('img-transform');

    });
    $(".section-five .overlay img").mouseleave(function () { //po zjechaniu myszą obrazki w galerii wracają do stanu poprzedniego
        // $(this).css('transform','rotate(0deg)');
        $(this).removeClass('img-transform');
    });


    // 6. Obsługiwanie pokazywania i ukrywania mapy:

    $(".text-center").click(function () { // element klikany - Pokaż/Ukryj mapę
        $('.hide-map').toggleClass('show-map');
    });


// 7. Wykorzystanie kodu zewnętrznego do obsługi pralaxy (kod bazowy w katalogu parallax.js):
    $(function () {
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
            $('#ios-notice').removeClass('hidden');
            $('.parallax-container').height($(window).height() * 0.5 | 0);
        } else {
            $(window).resize(function () {
                var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
                $('.parallax-container').height(parallaxHeight);
            }).trigger('resize');
        }
    });



});







