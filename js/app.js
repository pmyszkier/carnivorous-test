/**
 * Created by piotr on 10.10.2016.
 */

$(document).ready(function () {

    //     Punkt 2
// Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie, czy DOM został załadowany,
//     i sprawdź, czy działa (np. przez wyświetlenie w konsoli napisu "Działa"):
    console.log('Działa');

    // Punkt 3
// Znajdź następujące elementy i zapisz je do zmiennych:
//     Element nav, który będzie nam potrzebny do tego, aby po wyciągnięciu menu nie podskakiwała nam cała treść do góry.
//     Ma on już ustawioną wysokość w pliku style.css.
//     Element ul o klasie menu.
//     Zmienna przechowująca pozycję (top) elementu o klasie menu.
//     Sprawdź, czy wyszukałeś odpowiednie elementy i czy ich liczba się zgadza.
//     Wypisz zmienne w konsoli, żeby upewnić się, czy zawierają poprawne dane:
    var nav = $('nav');
    console.log(nav);
    var ulMenu = $('.menu');
    console.log(ulMenu);
    var topValue = 0;
    var menuTopValue = ulMenu.css('top');
    console.log(menuTopValue);
    var header = $('header');

    //     Punkt 4
// Ustaw na elemencie window event reagujący na skrolowanie. Sprawdź, czy działa:

    $(window).on('scroll', function (e) {  //skrolowanie na window, może też być document
        // console.log('scrollowanie');
        var scrollTop = $(window).scrollTop();  // !!!pozycja przewijania okna reagująca na scroll
        // console.log(scrollTop);

        //     Punkt 5
// Podczas skrolowania sprawdź, kiedy przyczepić menu do górnej belki. Stwórz zmienną i pobierz do niej liczbę pikseli,
//     o którą został przewinięty cały element document (scrollTop). Następnie porównaj otrzymaną wartość z pozycją menu.
//     Jeżeli dystans dokumentu jest większy od dystansu menu, dodaj do menu klasę sticky, w przeciwnym przypadku
// usuń tę klasę.
//         var topPositionMenu = ulMenu.offset().top; // !!! zwraca top (lub left) pozycji elementu
//         console.log(topPositionMenu);

        // var stickyNavTop = $('nav').offset().top; // pozycja elementu nav
        // console.log(stickyNavTop);
        // // var stickyNav = function(){
        // //     var scrollTop = $(window).scrollTop();  // !!!pozycja przewijania okna
        // //     console.log(scrollTop);
        //
        // if (scrollTop > stickyNavTop) {
        //     ulMenu.addClass('sticky'); //przyczepiamy menu do góry okna
        // } else {
        //     ulMenu.removeClass('sticky');
        // }



        var headerTop = $('header').offset().top; // pozycja elementu nav
        console.log(headerTop);
        // var stickyNav = function(){
        //     var scrollTop = $(window).scrollTop();  // !!!pozycja przewijania okna
        //     console.log(scrollTop);

        if (scrollTop > headerTop) {
            nav.addClass('sticky'); //przyczepiamy menu do góry okna
        } else {
            nav.removeClass('sticky');
        }

    });

    //     Punkt 6
// Ustaw na elemencie window kolejny event reagujący na zmianę szerokości okna. Sprawdź, czy działa.
    $(window).on('resize', function (e) {
        var stickyNavTop = $('nav').offset().top; // pozycja elementu nav reagująca na
        console.log(stickyNavTop);
        // var resizeTop = $(window).resizeTop();  // !!!pozycja przewijania okna reagująca na resize
    });
});


// Punkt 1
// Zapoznaj się z kodem HTML i CSS dodanym do zadania. Menu jest trzymane w liście.
//     Punkt 2
// Przygotuj do pracy plik JavaScript. Dopisz event odpowiedzialny za sprawdzenie, czy DOM został załadowany,
//     i sprawdź, czy działa (np. przez wyświetlenie w konsoli napisu "Działa").
// Punkt 3
// Znajdź następujące elementy i zapisz je do zmiennych:
//     Element nav, który będzie nam potrzebny do tego, aby po wyciągnięciu menu nie podskakiwała nam cała treść do góry.
//     Ma on już ustawioną wysokość w pliku style.css.
//     Element ul o klasie menu.
//     Zmienna przechowująca pozycję (top) elementu o klasie menu.
//
//     Sprawdź, czy wyszukałeś odpowiednie elementy i czy ich liczba się zgadza.
//     Wypisz zmienne w konsoli, żeby upewnić się, czy zawierają poprawne dane.
//     Punkt 4
// Ustaw na elemencie window event reagujący na skrolowanie. Sprawdź, czy działa.
//     Punkt 5
// Podczas skrolowania sprawdź, kiedy przyczepić menu do górnej belki. Stwórz zmienną i pobierz do niej liczbę pikseli,
//     o którą został przewinięty cały element document (scrollTop). Następnie porównaj otrzymaną wartość z pozycją menu.
//     Jeżeli dystans dokumentu jest większy od dystansu menu, dodaj do menu klasę sticky, w przeciwnym przypadku
// usuń tę klasę.
//     Punkt 6
// Ustaw na elemencie window kolejny event reagujący na zmianę szerokości okna. Sprawdź, czy działa.
//     Punkt 7
// Podczas zmiany szerokości okna dystans menu od górnej belki będzie się zmieniał. W tym celu utworzyliśmy event resize.
//     Musimy tutaj sprawdzać ponownie dystans dla menu. Zrób warunek, który będzie sprawdzał tę odległość
// (jeżeli element menu ma klasę sticky) i podstaw pod tą samą zmienną co wcześniej. W przeciwnym przypadku
// pobierz odległość od górnej belki dla elementu nav.
//     Punkt 8
// Sprawdź, jak działa Twoja strona. Czy widzisz problemy? Napisz.