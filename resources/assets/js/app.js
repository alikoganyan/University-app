
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes AngularJS and other libraries. It is a great starting point when
 * building robust, powerful web applications using AngularJS and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh AngularJS application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

let app = angular.module('app', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
    .when('/students', {
        templateUrl: '/ng_templates/students.html',
        controller: 'studentsController'
    })
    .when('/student_details', {
        templateUrl: 'ng_templates/student_details.html',
        controller: 'studentController'
    })
    .when('/student_details/:id', {
        templateUrl: 'ng_templates/student_details.html',
        controller: 'studentController'
    })
    .when('/groups', {
        templateUrl: 'ng_templates/groups.html',
        controller: 'groupController'
    })
    .when('/facultets', {
        templateUrl: 'ng_templates/facultets.html',
        controller: 'facultetController'
    })
    .otherwise('/students');
});

//Load services
require('./services/studentService');
require('./services/groupService');
require('./services/facultetService');
require('./services/genericService');

//Load controllers
require('./controllers/studentsController');
require('./controllers/studentController');
require('./controllers/facultetController');
require('./controllers/groupController');
