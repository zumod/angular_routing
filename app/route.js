var app = angular.module("sumod", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/name", {
        templateUrl : "templates/name.html"
    })
    .when("/about", {
        templateUrl : "templates/about.html"
    })
    .when("/contact", {
        templateUrl : "templates/contact.html"
    });
});