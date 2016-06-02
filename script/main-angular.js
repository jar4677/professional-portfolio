/**
 * Created by jar4677 on 5/26/16.
 */
var app = angular.module('portfolioApp', ['ngRoute']);

app.controller('aboutController', function ($scope) {
    $scope.pageName = "About Me";
    $scope.mainImage = "images/jon_headshot.jpg";
    $scope.glyphicon = "user";
})
    .controller('projectsController', function ($scope) {
        $scope.pageName = "My Projects";
        $scope.glyphicon = "picture";
        
        this.projects = {
            'worldofmatchcraft': {
                'id': 'worldofmatchcraft',
                'name': 'World of MatchCraft',
            },
            'calculator': {
                'id': 'calculator',
                'name': 'Calculator'
            },
            'overthrow': {
                'id': 'overthrow',
                'name': 'Overthrow'
            },
            'guess': {
                'id': 'guess',
                'name': 'Guess'
            },
            'sgt': {
                'id': 'sgt',
                'name': 'Student Grade Table'
            }
        };
        
        this.showProject = function (project) {
            $('iframe').attr('src', 'http://jonrasmussen.me/' + project).focus();
        }
    })
    .controller('skillsController', function ($scope) {
        $scope.pageName = "My Skills";
        $scope.glyphicon = "signal";

        this.skills = {
            'html': {
                'name': 'HTML5',
                'logo': "images/icons/html_logo.png",
                'id': 'html',
                'details': {
                    "detail1": "As the backbone of any web application, it is critical for a developer to have a" +
                    " strong understanding of HTML",
                    "detail2": "I created the HTML skeleton for each of my projects."
                }
            },
            'css': {
                'name': 'CSS3',
                'logo': "images/icons/css_logo.png",
                'id': 'css',
                'details': {
                    "detail1": "Detail 1",
                    "detail2": "Detail 2",
                    "detail3": "Detail 3",
                    "detail4": "Detail 4"
                }
            },
            'javascript': {
                'name': 'JavaScript',
                'logo': "images/icons/js_logo.png",
                'id': 'javascript',
                'details': {
                    "detail1": "Detail 1",
                    "detail2": "Detail 2",
                    "detail3": "Detail 3"
                }
            },
            'jquery': {
                'name': 'jQuery',
                'logo': "images/icons/jquery_logo.png",
                'id': 'jquery',
                'details': {
                    "detail1": "Detail 1",
                    "detail2": "Detail 2",
                    "detail3": "Detail 3"
                }
            },
            'php': {
                'name': 'PHP',
                'logo': "images/icons/php_logo.png",
                'id': 'php',
                'details': {
                    "detail1": "Detail 1",
                    "detail2": "Detail 2",
                    "detail3": "Detail 3"
                }
            },
            'ajax': {
                'name': 'AJAX',
                'logo': "images/icons/ajax_logo.png",
                'id': 'ajax',
                'details': {
                    "detail1": "Detail 1",
                    "detail2": "Detail 2",
                    "detail3": "Detail 3"
                }
            },
            'angular': {
                'name': 'AngularJS',
                'logo': "images/icons/angular_logo.png",
                'id': 'angular'
            },
            'bootstrap': {
                'name': 'Bootstrap',
                'logo': "images/icons/bootstrap_logo.png",
                'id': 'bootstrap',
                'details': {
                    "detail1": "Detail 1",
                    "detail2": "Detail 2",
                    "detail3": "Detail 3"
                }
            },
            'mysql': {
                'name': 'MySQL',
                'logo': "images/icons/mysql_logo.png",
                'id': 'mysql',
                'details': {
                    "detail1": "Detail 1",
                    "detail2": "Detail 2",
                    "detail3": "Detail 3"
                }
            },
            'firebase': {
                'name': 'Firebase',
                'logo': "images/icons/firebase_logo.png",
                'id': 'firebase',
                'details': {
                    "detail1": "Detail 1",
                    "detail2": "Detail 2",
                    "detail3": "Detail 3"
                }
            }
        };
    })
    .controller('expController', function ($scope) {
        $scope.pageName = "My Experience";
        $scope.mainImage = "images/david.jpg";
        $scope.glyphicon = "briefcase";
    })
    .controller('contactController', function ($scope) {
        $scope.pageName = "Contact Me";
        $scope.mainImage = "images/david.jpg";
        $scope.glyphicon = "comment";
        
        var self = this;
        
        this.contact = function () {
            var name = $("#name").val();
            var email = $("#email").val();
            var message = $("#message").val();
            var firstName = name.match(/([a-zA-Z]+)/);
            var thankYou = "Thank you " + firstName[1] + "!<br>I'll be in touch soon!";

            dataBase.ref('data/messages').push({
                'name': name,
                'email': email,
                'message': message
            })
                .then(function (response) {
                    self.clearForm();
                    $("#thank-you-message").html(thankYou);
                }, function (response) {
                    console.log(response);
                })
        };
        
        this.clearForm = function () {
            $("#name, #email, #message").val('');
        };
    });

app.config(function ($routeProvider) {
    $routeProvider
        .when('/about', {
            templateUrl: "pages/about.html",
            controller: 'aboutController',
            controllerAs: 'ac'
        })
        .when('/projects', {
            templateUrl: "pages/projects.html",
            controller: 'projectsController',
            controllerAs: 'pc'
        })
        .when('/skills', {
            templateUrl: 'pages/skills.html',
            controller: 'skillsController',
            controllerAs: 'sc'
        })
        .when('/experience', {
            templateUrl: "pages/experience.html",
            controller: 'expController',
            controllerAs: 'ec'
        })
        .when('/contact', {
            templateUrl: 'pages/contact-me.html',
            controller: 'contactController',
            controllerAs: 'cc'
        })
        .otherwise({
            redirectTo: '/about'
        });
});

/**
 * Firebase config and initialization
 */
firebase.initializeApp(config);

var dataBase = firebase.database();