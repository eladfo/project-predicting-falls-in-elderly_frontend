angular.module("myApp")
.controller("tableController", function ($scope, $http , $window, UserService, $rootScope) {

    $scope.names = $rootScope.test;
    
    // $scope.names = [
    //     {
    //       "": 0,
    //       "ConnectionID": "B2F5A3C9-C3DF-4254-8379-8B428A7A0300",
    //       "Age": 77,
    //       "Calculated_Age": 80,
    //       "Gender": "Male",
    //       "OwnerID": "C7A0C429-AC15-41D4-A92E-6F24A5EF8DEF",
    //       "Owner_Score": "Inadequate",
    //       "PropertyName": "Falls RA",
    //       "DateMeasured": "2017-12-31 08:00:01.2017668 +00:00",
    //       "AssessedScore": 0,
    //       "Fall": "FALSE"
    //     },
    //     {
    //       "": 1,
    //       "ConnectionID": "B2F5A3C9-C3DF-4254-8379-8B428A7A0300",
    //       "Age": 77,
    //       "Calculated_Age": 80,
    //       "Gender": "Male",
    //       "OwnerID": "C7A0C429-AC15-41D4-A92E-6F24A5EF8DEF",
    //       "Owner_Score": "Inadequate",
    //       "PropertyName": "Falls RA",
    //       "DateMeasured": "2017-12-31 08:42:31.7832318 +00:00",
    //       "AssessedScore": 17,
    //       "Fall": "FALSE"
    //     },
    //     {
    //       "": 2,
    //       "ConnectionID": "B2F5A3C9-C3DF-4254-8379-8B428A7A0300",
    //       "Age": 77,
    //       "Calculated_Age": 80,
    //       "Gender": "Male",
    //       "OwnerID": "C7A0C429-AC15-41D4-A92E-6F24A5EF8DEF",
    //       "Owner_Score": "Inadequate",
    //       "PropertyName": "Falls RA",
    //       "DateMeasured": "2018-01-05 22:12:10.9781356 +00:00",
    //       "AssessedScore": 0,
    //       "Fall": "FALSE"
    //     },
    //     {
    //       "": 3,
    //       "ConnectionID": "B2F5A3C9-C3DF-4254-8379-8B428A7A0300",
    //       "Age": 77,
    //       "Calculated_Age": 80,
    //       "Gender": "Male",
    //       "OwnerID": "C7A0C429-AC15-41D4-A92E-6F24A5EF8DEF",
    //       "Owner_Score": "Inadequate",
    //       "PropertyName": "Falls RA",
    //       "DateMeasured": "2018-01-05 22:19:18.8759343 +00:00",
    //       "AssessedScore": 4,
    //       "Fall": "FALSE"
    //     },
    //     {
    //       "": 4,
    //       "ConnectionID": "B2F5A3C9-C3DF-4254-8379-8B428A7A0300",
    //       "Age": 77,
    //       "Calculated_Age": 80,
    //       "Gender": "Male",
    //       "OwnerID": "C7A0C429-AC15-41D4-A92E-6F24A5EF8DEF",
    //       "Owner_Score": "Inadequate",
    //       "PropertyName": "Falls RA",
    //       "DateMeasured": "2018-01-05 22:26:25.8106944 +00:00",
    //       "AssessedScore": 3,
    //       "Fall": "FALSE"
    //     },
    //     {
    //       "": 5,
    //       "ConnectionID": "B2F5A3C9-C3DF-4254-8379-8B428A7A0300",
    //       "Age": 77,
    //       "Calculated_Age": 80,
    //       "Gender": "Male",
    //       "OwnerID": "C7A0C429-AC15-41D4-A92E-6F24A5EF8DEF",
    //       "Owner_Score": "Inadequate",
    //       "PropertyName": "Falls RA",
    //       "DateMeasured": "2018-01-05 22:28:41.5039145 +00:00",
    //       "AssessedScore": 0,
    //       "Fall": "FALSE"
    //     },
    //     {
    //       "": 6,
    //       "ConnectionID": "B2F5A3C9-C3DF-4254-8379-8B428A7A0300",
    //       "Age": 77,
    //       "Calculated_Age": 80,
    //       "Gender": "Male",
    //       "OwnerID": "C7A0C429-AC15-41D4-A92E-6F24A5EF8DEF",
    //       "Owner_Score": "Inadequate",
    //       "PropertyName": "Falls RA",
    //       "DateMeasured": "2018-01-05 22:30:45.4649637 +00:00",
    //       "AssessedScore": 55,
    //       "Fall": "FALSE"
    //     },
    //     {
    //       "": 7,
    //       "ConnectionID": "B2F5A3C9-C3DF-4254-8379-8B428A7A0300",
    //       "Age": 77,
    //       "Calculated_Age": 80,
    //       "Gender": "Male",
    //       "OwnerID": "C7A0C429-AC15-41D4-A92E-6F24A5EF8DEF",
    //       "Owner_Score": "Inadequate",
    //       "PropertyName": "Falls RA",
    //       "DateMeasured": "2018-01-06 07:53:44.9237160 +00:00",
    //       "AssessedScore": 0,
    //       "Fall": "FALSE"
    //     },
    //     {
    //       "": 8,
    //       "ConnectionID": "B2F5A3C9-C3DF-4254-8379-8B428A7A0300",
    //       "Age": 77,
    //       "Calculated_Age": 80,
    //       "Gender": "Male",
    //       "OwnerID": "C7A0C429-AC15-41D4-A92E-6F24A5EF8DEF",
    //       "Owner_Score": "Inadequate",
    //       "PropertyName": "Falls RA",
    //       "DateMeasured": "2018-01-06 07:55:08.0175908 +00:00",
    //       "AssessedScore": 7,
    //       "Fall": "FALSE"
    //     }
    //   ]
    
    console.log("names");
    console.log($scope.names);
});