(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('deptSummaryController', deptSummaryController);

  /* @ngInject */
  function deptSummaryController($scope, $stateParams, Departments) {
    var CURRENT_STATE = 'dept';

    $scope.init = function() {
      setNavLink(CURRENT_STATE);
      $scope.isLoading = true;
      $scope.error = null;

      // Load up some data:
      Departments.Get({id: '1234543', report: 'summary'}, // HACK: This would usually be the id of the dept
        function(data) {
          $scope.isLoading = false;
          $scope.dept = data;
          drawVisitsChart();
        },
        function(error) {
          $scope.error = error;
          $scope.isLoading = false;
        }
      );
    };

    function drawVisitsChart() {
      if(!$scope.dept || !$scope.dept.visits || !$scope.dept.visits.monthly) {
        $scope.visitsError = true;

        return;
      }

      var data = google.visualization.arrayToDataTable($scope.dept.visits.monthly);
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

    // TODO: Move this someplace global
    function setNavLink(state) {
      $('.nav').find('.active').removeClass('active');
      $('.nav-link[ui-sref="' + state + '"]').addClass('active');
    }

    $scope.init();
  }
})();
