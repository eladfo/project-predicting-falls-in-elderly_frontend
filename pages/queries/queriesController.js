angular.module("myApp")
.controller("queriesController", function ($scope, $http , $window, $rootScope, UserService) {

    var genderFlag = true;
    var ageFlag = true;
    var hcsFlag = true;
    var populationFlag_ra = true;
    var populationFlag_ma = true;

    var raQueryData;
    var maQueryData;

    $scope.ageList;
    $scope.hcsList;
    $scope.populationList;
    $scope.raList;
    $scope.maList;

    let serverUrl = "http://localhost:8089/";

    var filterJsn = {age: "",gender: "",ownerScore: "",population: "",ra_or_ma: ""};

    $scope.gender_validity = function() 
    {
        if($scope.gender != null)
        {
            if(genderFlag)
            {
                filterJsn.gender = $scope.gender;
                // console.log(filterJsn);
                $http({
                    method: 'POST', url: serverUrl + "dfilter", data: filterJsn
                }).then(function (success) {
                    $scope.ageList = success.data;
                    $scope.ageList = JSON.parse($scope.ageList.data).Age;
                    // console.log(success.data)
                }, function (error) {
                    console.log(error);
                });   
                genderFlag = false;
            }
            return false;
        }
        else
            return true;
    }

    $scope.age_validity = function() 
    {
        if($scope.age != null)
        {
            if(ageFlag)
            {
                filterJsn.age = $scope.age;
                $http({
                    method: 'POST', url: serverUrl + "dfilter", data: filterJsn
                }).then(function (success) {
                    $scope.hcsList = success.data;
                    $scope.hcsList = JSON.parse($scope.hcsList.data).Owner_Score;
                    // console.log($scope.hcsList)
                    // console.log(success.data)
                }, function (error) {
                    console.log(error);
                });   
                ageFlag = false;
            }
        }
        else
            return true;
    }

    $scope.hcs_validity = function() 
    {
        if($scope.hcs != null)
        {
            if(hcsFlag)
            {
                filterJsn.ownerScore = $scope.hcs;
                $http({
                    method: 'POST', url: serverUrl + "dfilter", data: filterJsn
                }).then(function (success) {
                    $scope.populationList = success.data;
                    $scope.populationList = JSON.parse($scope.populationList.data).pop;
                }, function (error) {
                    console.log(error);
                });   
                hcsFlag = false;
            }
        }
        else
            return true;
    }

    $scope.population_validity_ra = function() 
    {
        if($scope.population != null)
        {
            if(populationFlag_ra)
            {
                filterJsn.population = $scope.population;
                filterJsn.ra_or_ma = "ra"; 
                // console.log(filterJsn);
                $http({
                    method: 'POST', url: serverUrl + "dfilter", data: filterJsn
                }).then(function (success) {
                    $scope.raList = success.data;
                    $scope.raList = JSON.parse($scope.raList.data).PropertyName;
                    // console.log($scope.raList)
                    console.log(success.data)
                }, function (error) {
                    console.log(error);
                });  
                populationFlag_ra = false;
            }
        }
        else
            return true;
    }   


    $scope.population_validity_ma = function() 
    {
        if($scope.ra != null)
        {
            if(populationFlag_ma)
            {
                filterJsn.population = $scope.population;
                filterJsn.ra_or_ma = "ma";
                $http({
                    method: 'POST', url: serverUrl + "dfilter", data: filterJsn
                }).then(function (success) {
                    $scope.maList = success.data;
                    $scope.maList = JSON.parse($scope.maList.data).PropertyName;
                    // console.log($scope.maList)
                    // console.log(success.data)
                }, function (error) {
                    console.log(error);
                }); 
                populationFlag_ma = false;
            }
        }
        else
            return true;
    }


    $scope.runQuery_ra = function() 
    {
        
        console.log("function activate");
        var query = {
            "age":$scope.age,
            "gender":$scope.gender,
            "ownerScore":$scope.hcs,
            "population":$scope.population,
            "ra":$scope.ra,
            "ma":$scope.ma
        };

        console.log(query);
        
        $http({
            method: 'POST', url: serverUrl + "tables/ra_table", data: query
        }).then(function (success) {
            UserService.raQueryData = success.data;
            UserService.raQueryData = JSON.parse(UserService.raQueryData.data);
            $rootScope.test = success.data;
            $rootScope.test = JSON.parse($rootScope.test.data);
                        
            // console.log("lalalalala")
            // console.log(UserService.raQueryData)
        }, function (error) {
            console.log(error);
        });   

        $window.location.href = '#!options';
    }

    // $scope.runQuery_ma = function() 
    // {

    //     $http({
    //         method: 'POST', url: serverUrl + "tables/ma_table", data: query
    //     }).then(function (success) {
    //         $scope.maQueryData = success.data;
    //         $scope.maQueryData = JSON.parse($scope.maQueryData.data);
    //         console.log($scope.maQueryData)

    //     }, function (error) {
    //         console.log(error);
    //     });   



    // }

    
});



