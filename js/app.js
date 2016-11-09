var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
        templateUrl : "html/main.html",
    })
        .when("/catalogo", {
        templateUrl : "html/catalogo.html",
        controller : "catalogoCtrl"
    })  .when("/producto", {
        templateUrl : "html/producto.html",
        controller : "productoCtrl"
    });
});


function goToIndex() {
    window.location.href = 'index.html';
}

function goToIndexFromHtml() {
    window.location.href="/index.html";
}
function goBack() {
    window.history.back();
}


$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})

function gotoGeo() {
    window.location.href = 'html/geolocalizacion/geolocalizacion.html';
}

function gotoInte() {
    window.location.href = 'html/ej3/ej3.html';
}

function gotoQr() {
    window.location.href = 'html/qr/qr.html';
}

function goToCatalogoMuebles() {
    window.location.href = 'html/catalogo.html';
}