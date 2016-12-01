var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
        templateUrl : "html/presentacion.html",
    })
        .when("/smart", {
        templateUrl : "html/presentacion.html",
    })
        .when("/laidea", {
        templateUrl : "html/laidea.html",
    })
        .when("/elfuturo", {
        templateUrl : "html/ideas.html",
    })
        .when("/empresas", {
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

function gotoej6(){
    window.location.href='html/ejemplo6/ejemplo6.html';
}
function gotoej4(){
    window.location.href='html/ejemplo4/ejemplo4.html';
}


function gotoEmpresas(){
    window.location.href='#empresas';
}
function gotoLaidea(){
    window.location.href='#laidea';
}


function gotoElfuturo(){
    window.location.href='#elfuturo';
}

