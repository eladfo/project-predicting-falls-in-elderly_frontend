
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
        .when('/predict_graph', {
            templateUrl: 'pages/prediction/predict_graph.html',
            controller : ''
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
        .when('/graphsRA', {
            templateUrl: 'pages/queryOutput/graphsRA.html',
            controller : 'graphsRAController as optionsCtrl'
        })
        .when('/graphsMA', {
            templateUrl: 'pages/queryOutput/graphsMA.html',
            controller : 'graphsMAController as optionsCtrl'
        })
        .when('/graphsActions', {
            templateUrl: 'pages/queryOutput/graphsActions.html',
            controller : 'graphsActionsController as optionsCtrl'
        })
        .when('/table', {
            templateUrl: 'pages/queryOutput/table.html',
            controller : 'tableController as optionsCtrl'
        })
        .when('/WindowsCreation', {
            templateUrl: 'pages/WindowsCreation/WindowsCreation.html',
            controller : 'WindowsCreationController as wcCtrl'
        })
        .when('/KarmaLego', {
            templateUrl: 'pages/KarmaLego/KarmaLego.html',
            controller : 'KarmaLegoController as karmaCtrl'
        })
        .when('/ClassifiersSelection', {
            templateUrl: 'pages/ClassifiersSelection/ClassifiersSelection.html',
            controller : 'ClassifiersSelectionController as csCtrl'
        })
        // other
        .otherwise({ redirectTo: '/' });

});
