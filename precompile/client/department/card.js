(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('cardController', cardController);

  /* @ngInject */
  function cardController($scope, $stateParams, Departments) {

    $scope.init = function() {
      $scope.isLoading = true;
      $scope.error = null;

      // Load up some data:
      Departments.Get({id: '1234543'}, // HACK: This would usually be the id of the dept
        function(data) {
          $scope.isLoading = false;
          $scope.dept = data;
          loadMap(data.location);
        },
        function(error) {
          $scope.error = error;
          $scope.isLoading = false;
        }
      );
    };

    function loadMapIcons() {

    }

    function loadMap(location) {
      // Time to load up that map
      var map = L.map('map').setView([location.longitude, location.latitude], 13);
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 15,
        id: 'jpero09.nnhog5nb',
        accessToken: 'pk.eyJ1IjoianBlcm8wOSIsImEiOiJjaWZ0djJwbmMxYzk4dXZrcXZpMTFvd2Y3In0.xkTclyrSwn1nTatCK4hogA'
        }).addTo(map);
      $(".leaflet-control-zoom").css("visibility", "hidden");

      // Lets get our icon prepped
      var customMarker = L.icon({
        iconUrl: 'images/map-marker.png',
        iconSize:     [30, 50],
        iconAnchor:   [0, 15],
        popupAnchor:  [15, -5]
      });
      L.marker([location.longitude, location.latitude], {icon: customMarker}).addTo(map);
    }

    var ABBR_FORMAT = '0a';
    $scope.formatNumber = function(num) {
      if(isNaN(num)) {return '--';}
      return numeral(num).format(ABBR_FORMAT);
    }

    $scope.init();
  }
})();
