(function() {
  'use strict';

  angular
    .module('app.routes', ['ui.router'])
    .config(registerRoutes);

  var standardCard = {
    templateUrl: 'department/card',
    controller: 'cardController'
  };

  /* @ngInject */
  function registerRoutes($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('summary', {
        url: '/',
        views: {
          card: standardCard,
          main: {
            templateUrl: 'department/summary',
            controller: 'deptSummaryController'
          }
        }
      })
     ;

    $urlRouterProvider.otherwise('/');
  }
})();
