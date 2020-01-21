angular.module("myApp")
.controller("graphsRAController", function ($scope, $http , $window, UserService) {

    console.log(UserService.raQueryData);

    $scope.graph1_src;
    $scope.graph2_src;
    $scope.graph3_src;

    let serverUrl = "http://localhost:8089/";

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
    google.charts.load("current", {packages:['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(drawChart2);

    function drawChart() {
      let data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Copper", 8.94, "#b87333"],
        ["Silver", 10.49, "silver"],
        ["Gold", 19.30, "gold"],
        ["Platinum", 51.45, "color: #e5e4e2"],
        ["Gold", 19.30, "gold"],

      ]);

      let view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

        let options = {
        title: "Density of Precious Metals, in g/cm^3",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      let chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }


  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ]);

    var options = {
      chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }
});