(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('deptPhysiciansController', deptPhysiciansController);

  /* @ngInject */
  function deptPhysiciansController($scope, $stateParams, Departments) {
    var CURRENT_STATE = 'dept.physicians';

    $scope.init = function() {
      setNavLink(CURRENT_STATE);
      $scope.isLoading = true;
      $scope.error = null;

      // Load up some data:
      Departments.Get({id: '1234543', report: 'physicians'}, // HACK: This would usually be the id of the dept
        function(data) {
          $scope.isLoading = false;
          $scope.physicians = (data && data.physicians) ? data.physicians : null;
        },
        function(error) {
          $scope.error = error;
          $scope.isLoading = false;
        }
      );
    };

    // TODO: Move this someplace global
    function setNavLink(state) {
      $('.nav').find('.active').removeClass('active');
      $('.nav-link[ui-sref="' + state + '"]').addClass('active');
    }

    $scope.init();
  }
})();
