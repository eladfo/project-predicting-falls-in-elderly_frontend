angular.module("myApp")
.controller("predictionController", function ($scope, $http , $window) {


   
    $scope.show_graph = function (){
        $window.location.href = '#!predict_graph';
    }
});