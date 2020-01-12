angular.module("myApp")
.controller("graphsController", function ($scope, $http , $window, UserService) {

    console.log("options controller")
    console.log(UserService.raQueryData)

});