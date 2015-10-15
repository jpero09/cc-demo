(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('siteSummaryController', siteSummaryController);

  var demoVisitData = [
      ['Month', 'Visits'],
      ['Jan',  1000],
      ['Feb',  1170],
      ['Mar',  660],
      ['Apr',  956],
      ['May',  1169],
      ['Jun',  1002],
      ['Jul',  987],
      ['Aug',  813],
      ['Sep',  891],
      ['Oct',  736],
      ['Nov',  786],
      ['Dec',  961]
    ];

  function siteSummaryController($scope) {
    $scope.init = function() {
      google.setOnLoadCallback(drawVisitsChart);
    };

    function drawVisitsChart() {
      var data = google.visualization.arrayToDataTable(demoVisitData);
      var options = {
        legend: {position: 'none'},
        hAxis: {gridlines: {color:'#EEE', count: 12}},
        vAxis: {minValue: 0, textPosition: 'none', gridlines: {count: 0}}
      };

      var chart = new google.visualization.AreaChart(document.getElementById('chrtVisits'));
      chart.draw(data, options);
    }

    $scope.init();
  }
})();
