
var app = angular.module('myApp', ["ngRoute" , "ngSanitize", "ngCsv"]);
// config routes

app.factory('UserService', function() {
    return {
        raQueryData : {}
    };
});

app.config(function($routeProvider)  {
    $routeProvider
        // homepage
        .when('/', {
            // this is a template
            templateUrl: 'pages/home/home.html',
            controller : 'homeController as homeCtrl'
        })
        .when('/about', {
            templateUrl: 'pages/about/about.html',
            controller : 'aboutController as aboutCtrl'
        })
        .when('/home', {
            templateUrl: 'pages/home/home.html',
            controller : 'homeController as homeCtrl'
        })
        .when('/prediction', {
            templateUrl: 'pages/prediction/prediction.html',
            controller : 'predictionController as predictionCtrl'
        })
        .when('/queries', {
            templateUrl: 'pages/queries/queries.html',
            controller : 'queriesController as queriesCtrl'
        })
        .when('/contact', {
            templateUrl: 'pages/contact/contact.html',
            controller : 'contactController as contactCtrl'
        })
        .when('/options', {
            templateUrl: 'pages/queryOutput/options.html',
            controller : 'optionsController as optionsCtrl'
        })
        .when('/graphs', {
            templateUrl: 'pages/queryOutput/graphs.html',
            controller : 'graphsController as optionsCtrl'
        })
        .when('/table', {
            templateUrl: 'pages/queryOutput/table.html',
            controller : 'tableController as optionsCtrl'
        })
        // other
        .otherwise({ redirectTo: '/' });

});
