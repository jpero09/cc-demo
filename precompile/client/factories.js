(function() {
  'use strict';
  var defaultTimeout = 5000;

  angular
    .module('app.factories')
    .factory('SiteSummary', siteSummaryFactory)
    ;

  /* @ngInject */
  function siteSummaryFactory($resource) {
    return $resource('./api/site/:id/summary', {}, {
      Get: {method: 'GET', timeout: defaultTimeout}
    });
  }
})();
