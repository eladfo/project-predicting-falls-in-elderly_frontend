angular.module("myApp",)
.controller("optionsController", function ($scope, $http , $window,) {

    $scope.moveToGraphs = function() {
        
        $window.location.href = '#!graphsRA';
    }

    $scope.moveToTable = function() {
        
        $window.location.href = '#!table';
    }
});