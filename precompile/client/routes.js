(function() {
  'use strict';

  angular
    .module('app.routes', ['ui.router'])
    .config(registerRoutes);

  /* @ngInject */
  function registerRoutes($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('summary', {
        url: '/',
        views: {
          main: {
            templateUrl: 'site/summary/summary',
            controller: 'siteSummaryController'
          }
        }
      })
     ;

    $urlRouterProvider.otherwise('/');
  }
})();
