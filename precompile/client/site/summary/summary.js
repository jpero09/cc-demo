(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('siteSummaryController', siteSummaryController);

  function siteSummaryController($scope) {
    $scope.message = 'Welcome to the site summary!';
  }

})();