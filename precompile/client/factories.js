(function() {
  'use strict';
  var defaultTimeout = 5000;

  angular
    .module('app.factories')
    .factory('Departments', deptFactory)
    ;

  /* @ngInject */
  function deptFactory($resource) {
    return $resource('./api/dept/:id', {}, {
      Get: {method: 'GET', timeout: defaultTimeout}
    });
  }
})();
