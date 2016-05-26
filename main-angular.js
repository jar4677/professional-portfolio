/**
 * Created by jar4677 on 5/26/16.
 */
var app = angular.module('portfolioApp', ['ngRoute']);

app.controller('mainController', function () {
    
})
    .controller('skillsController', function () {
        
    })
    .controller('expController');

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "index.html",
            controller: 'mainController'
        })
        .when('/skills', {
            templateUrl: 'skills.html',
            controller: 'skillsController'
        })
        .when('/experience', {
            templateUrl: "experience.html",
            controller:'expController'
        })
        .when('/contact', {
            templateUrl: 'contact-me.html',
            controller: 'contactController'
        });
});