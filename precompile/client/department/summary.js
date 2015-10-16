(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('deptSummaryController', deptSummaryController);

  /* @ngInject */
  function deptSummaryController($scope, $stateParams, Departments) {

    $scope.init = function() {
      $scope.isLoading = true;
      $scope.error = null;

      // Load up some data:
      Departments.Get({id: '1234543', report: 'summary'}, // HACK: This would usually be the id of the dept
        function(data) {
          $scope.isLoading = false;
          $scope.dept = data;
          drawVisitsChart($scope.dept);
        },
        function(error) {
          $scope.error = error;
          $scope.isLoading = false;
        }
      );
    };

    function drawVisitsChart(deptData) {
      if(!deptData || !deptData.visits || !deptData.visits.monthly) {
        $scope.visitsError = true;

        return;
      }

      var data = google.visualization.arrayToDataTable(deptData.visits.monthly);
      var options = {
        legend: {position: 'none'},
        hAxis: {gridlines: {color: '#EEE', count: 12}},
        vAxis: {minValue: 0, textPosition: 'none', gridlines: {count: 0}},
        series: [
          {color: '#00AEFF', areaOpacity: '.1'}
        ]
      };

      var chart = new google.visualization.AreaChart(document.getElementById('chrtVisits'));
      chart.draw(data, options);
    }

    $scope.init();
  }
})();
