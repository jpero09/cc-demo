(function() {
  'use strict';

  angular.module('app', [
    'ui.router',
    'app.templates',
    'app.controllers',
    'app.factories',
    'app.routes'
  ]);

  angular.module('app.controllers', []);
  angular.module('app.factories', ['ngResource']);
})();
