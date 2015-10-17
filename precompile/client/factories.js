(function() {
  'use strict';
  var defaultTimeout = 5000;

  angular
    .module('app.factories')
    .factory('Departments', deptFactory)
    ;

  /* @ngInject */
  function deptFactory($resource) {
    return $resource('./api/dept/:id/:report', {}, {
      Get: {method: 'GET', timeout: defaultTimeout},
      GetSummary: {method: 'GET', timeout: defaultTimeout}
    });
  }
})();
