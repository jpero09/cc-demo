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

  initNavLinks();

  function initNavLinks() {
    $('.nav a').on('click', function() {
      $('.nav').find('.active').removeClass('active');
      $(this).addClass('active');
    });
  }

})();
