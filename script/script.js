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
        
        var self = this;
        self.project = null;
        
        self.projects = {
            'worldofmatchcraft': {
                'id': 'worldofmatchcraft',
                'name': 'World of MatchCraft',
                'description': 'A Warcraft themed memory match game',
                'details': [
                    'The core of this game is the Object-Oriented Javascript.',
                    'Each player, game board, and card is a unique object with properties and methods.'
                ]
            },
            'calculator': {
                'id': 'calculator',
                'name': 'Calculator',
                'description': 'A functional, minimalist calculator',
                'details': [
                    'Creating a functional calculator has been one of the most rewarding challenges I have faced.',
                    'Though it may seem a simple process, once I explored the way calculators handle unusual user' +
                    ' input I was faced with complex logic puzzles which were a joy to solve.'
                ]
            },
            'overthrow': {
                'id': 'overthrow',
                'name': 'Overthrow',
                'description': 'A unique game of strategy',
                'details': [
                    'Overthrow began as a twist on the classic game of Tic-Tac-Toe.',
                    'With the addition of the freedom to change which mark one places and the ability to overwrite' +
                    ' previous marks, the game took on a whole new dimension.'
                ]
            },
            'guess': {
                'id': 'guess',
                'name': 'Guess',
                'description': 'A colorful guessing game',
                'details': [
                    'This simple guessing game gives you plenty of clues to help you find the right answer in only a' +
                    ' few guesses.',
                    'The color changes from hot (red) to cold (blue) according to how close or far your guess is to' +
                    ' the number.',
                    'Make sure you mouse over the logged number circles for some bonus animation.'
                ]
            },
            'sgt': {
                'id': 'sgt',
                'name': 'Student Grade Table',
                'description': 'A web-based reporting application of student grades',
                'details': [
                    'This clean, mobile-responsive reporting application is connected to a live database.',
                    'You can create, read, updated, and delete student grades without ever leaving the page.'
                ]
            },
            'bubbles': {
                'id': 'bubbles',
                'name': 'bubbles',
                'description': 'A simple, light animation of translucent circles',
                'details': [
                    'This simple animation is the happy result of experimentation and tinkering.',
                    'Enjoy the fantastic colors the circles make when they overlap.',
                    'For more fun, try to move all the circles to one side.'
                ]
            }
        };
        
        self.showProject = function (project) {
            if (self.project != project) {
                $('iframe').attr('src', '../' + project).focus();
                $('#details, #full-site').show();
                $('#full-site').attr('href', 'http://jonrasmussen.me/' + project);
                self.project = project;
            } else {
                $('iframe').attr('src', '');
                $('#details, #full-site').hide();
                $('#full-site').attr('href', '').focus();
                self.project = null;
            }
        };
        
    })
    .controller('skillsController', function ($scope) {
        $scope.pageName = "My Skills";
        $scope.glyphicon = "signal";
        
        this.skills = {
            'javascript': {
                'name': 'JavaScript',
                'logo': "images/icons/js_logo.png",
                'id': 'javascript',
                'details': [
                    "JavaScript is the language of the internet.",
                    "Learning this powerful and versatile language has been simultaneously challenging and rewarding.",
                    "I have used JavaScript to solve a wide variety of coding challenges such as randomizing colors," +
                    " determining complex win conditions, and handling extreme edge cases of user input."
                ]
            }, 'html': {
                'name': 'HTML5',
                'logo': "images/icons/html_logo.png",
                'id': 'html',
                'details': [
                    "As the backbone of any web application, it is critical for a developer to have a strong" +
                    " understanding of HTML.",
                    "I wrote the HTML code for each of my projects.",
                    "HTML5 in particular offers exciting new functionality with semantic elements, input types, and" +
                    " scalable vector graphics (svg)."
                ]
            },
            'css': {
                'name': 'CSS3',
                'logo': "images/icons/css_logo.png",
                'id': 'css',
                'details': [
                    "CSS turns plain HTML into beautiful, dynamic web applications!",
                    "In my experience with CSS3 I have most enjoyed taking advantage of the newly enhanced animation" +
                    " capabilities.",
                    "Making web elements change and move can be quite thrilling."
                ]
            },
            'bootstrap': {
                'name': 'Bootstrap',
                'logo': "images/icons/bootstrap_logo.png",
                'id': 'bootstrap',
                'details': [
                    "With Bootstrap, a CSS framework, making clean, attractive, mobile-responsive websites is a snap.",
                    "I have used Bootstrap to style a variety of projects from the Student Grade Table to this very" +
                    " page."
                ]
            },
            'jquery': {
                'name': 'jQuery',
                'logo': "images/icons/jquery_logo.png",
                'id': 'jquery',
                'details': [
                    "The JavaScript library called jQuery is an all but indispensable part of modern web design.",
                    "With jQuery I have been able to quickly and accurately create and manipulate web elements."
                ]
            },
            'ajax': {
                'name': 'AJAX',
                'logo': "images/icons/ajax_logo.png",
                'id': 'ajax',
                'details': [
                    "One of the most powerful capabilities of JavaScript is its ability to function asynchronously.",
                    "Using 'AJAX' calls I have interacted with server-side application programming interfaces" +
                    " (APIs), some of which I have created myself"
                ]
            },
            'angular': {
                'name': 'AngularJS',
                'logo': "images/icons/angular_logo.png",
                'id': 'angular',
                'details': [
                    "AngularJS is one of the most popular new JavaScript frameworks.",
                    "With AngularJS I have been able to efficiently create a variety of single-page applications."
                ]
            },
            'php': {
                'name': 'PHP',
                'logo': "images/icons/php_logo.png",
                'id': 'php',
                'details': [
                    "PHP is a popular server-side scripting language.",
                    "I have used PHP in a variety of projects to create APIs, process form submissions, to create a" +
                    " single-page templated website, and to interact with a MySQL database."
                ]
            },
            'mysql': {
                'name': 'MySQL',
                'logo': "images/icons/mysql_logo.png",
                'id': 'mysql',
                'details': [
                    "MySQL is a relational database.",
                    "I have many years of experience working with MySQL databases and have particularly enjoyed" +
                    " creating the applications which interact with them."
                ]
            },
            'firebase': {
                'name': 'Firebase',
                'logo': "images/icons/firebase_logo.png",
                'id': 'firebase',
                'details': [
                    "Google's Firebase is a fantastic, easy-to-use NoSQL database.",
                    "I have employed a Firebase database in this very site to record any messages people wish to send."
                ]
            }
        };
    })
    .controller('expController', function ($scope) {
        $scope.pageName = "My Professional Experience";
        $scope.glyphicon = "briefcase";
        this.jobs = [
            {
                'id': 'job-1',
                'title': 'Data Analyst/Technician',
                'org': 'Centralia Elementary School District',
                'years': '2014 - 2016',
                'details': [
                    'Developed custom, automated applications to replace printed reports for district administrators.',
                    'Automated the aggregation of data from the database for regular reports of student data required by federal and state agencies, saving hours of manual entry and avoiding user entry error.',
                    'Cleaned and maintained the district database of all student data ensuring accurate reporting and easy auditing.'
                ]
            },
            {
                'id': 'job-2',
                'title': 'Systems Analyst',
                'org': 'Convaid Inc.',
                'years': '2012 - 2014',
                'details': [
                    'In consultation with a software developer developed, tested, and implemented a custom, web-based order entry software which led to a significant improvement in order entry efficiency.',
                    'Developed custom, automated reporting applications to provide daily, monthly, and yearly reports of sales and return data to key stakeholders and audit monthly sales data.',
                    'Implemented and customized a new CRM, facilitating communication among sales staff and management.'
                ]
            }
        ];
    })
    .controller('contactController', function ($scope, $http, $log) {
        $scope.pageName = "Contact Me";
        $scope.mainImage = "images/david.jpg";
        $scope.glyphicon = "comment";
        
        var self = this;
        
        this.contact = function () {
            var message = {
                name: $("#name").val(),
                email: $("#email").val(),
                message: $("#message").val()
            };
            
            var firstName = message.name.match(/([a-zA-Z]+)/);
            var thankYou = "Thank you " + firstName[1] + "!<br>I'll be in touch soon!";
            
            $http({
                url: 'script/email.php',
                method: 'post',
                data: $.param(message)
            })
                .then(function () {
            dataBase.ref('data/messages').push(message)
                .then(function (response) {
                    self.clearForm();
                    $("#thank-you-message").html(thankYou);
                    $log.info(response);
                }, function (response) {
                    $log.warn(response);
                });
            }, function (response) {
                $log.warn(response);
            });
        };
        
        this.clearForm = function () {
            $("#name, #email, #message").val('');
        };
    })
    .config(function ($routeProvider) {
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