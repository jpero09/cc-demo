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
      .state('dept', {
        url: '/',
        views: {
          card: {
            templateUrl: 'department/card',
            controller: 'cardController'
          },
          main: {
            templateUrl: 'department/summary',
            controller: 'deptSummaryController'
          }
        }
      })
      .state('dept.notImplemented', {
        views: {
          'main@': {
            templateUrl: 'department/notImplemented'
          }
        }
      })
      .state('dept.physicians', {
        url: 'physicians',
        views: {
          'main@': {
            templateUrl: 'department/physicians',
            controller: 'deptPhysiciansController'
          }
        }
      })
     ;

    $urlRouterProvider.otherwise('/');
  }
})();
