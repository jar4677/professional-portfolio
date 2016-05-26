/**
 * Created by jar4677 on 5/26/16.
 */
var app = angular.module('portfolioApp', ['ngRoute']);

app.controller('aboutController', function ($scope) {
        $scope.pageName = "About Me";
        $scope.mainImage = "images/jon_headshot.jpg";
        $scope.caption = "Jon Rasmussen";
    })
    .controller('skillsController', function ($scope) {
        $scope.pageName = "My Skills";
        $scope.mainImage = "images/david.jpg";
        $scope.caption = "Michelangelo's David";
    })
    .controller('expController', function ($scope) {
        $scope.pageName = "My Experience";
        $scope.mainImage = "images/david.jpg";
        $scope.caption = "Michelangelo's David";
    })
    .controller('contactController', function ($scope) {
        $scope.pageName = "Contact Me";
        $scope.mainImage = "images/david.jpg";
        $scope.caption = "Michelangelo's David";
    });

app.config(function ($routeProvider) {
    $routeProvider
        .when('/about', {
            templateUrl: "pages/about.php",
            controller: 'aboutController',
            controllerAs: 'ac'
        })
        .when('/skills', {
            templateUrl: 'pages/skills.php',
            controller: 'skillsController',
            controllerAs: 'sc'
        })
        .when('/experience', {
            templateUrl: "pages/experience.php",
            controller:'expController',
            controllerAs: 'ec'
        })
        .when('/contact', {
            templateUrl: 'pages/contact-me.php',
            controller: 'contactController',
            controllerAs: 'cc'
        })
        .otherwise({
            redirectTo: '/about'
        });
});