angular.module("myApp")
.controller("graphsActionsController", function ($scope, $http , $window, UserService) {

    console.log(UserService.raQueryData);

    $scope.graph1_src;
    $scope.graph2_src;
    $scope.graph3_src;

    // let serverUrl = "http://localhost:8089/";

    //graph1
    // $http({
    //     method: 'POST', url: serverUrl + "dfilter", data: filterJsn
    // }).then(function (success) {
    //     $scope.graph1_src = success.data;
    //     $scope.graph1_src = JSON.parse($scope.ageList.data).Age;
    //     // console.log(success.data)
    // }, function (error) {
    //     console.log(error);
    // });  
    
    // //graph2
    // $http({
    //     method: 'POST', url: serverUrl + "dfilter", data: filterJsn
    // }).then(function (success) {
    //     $scope.graph1_src = success.data;
    //     $scope.graph1_src = JSON.parse($scope.ageList.data).Age;
    //     // console.log(success.data)
    // }, function (error) {
    //     console.log(error);
    // });   

    // //graph3
    // $http({
    //     method: 'POST', url: serverUrl + "dfilter", data: filterJsn
    // }).then(function (success) {
    //     $scope.graph1_src = success.data;
    //     $scope.graph1_src = JSON.parse($scope.ageList.data).Age;
    //     // console.log(success.data)
    // }, function (error) {
    //     console.log(error);
    // });   


});