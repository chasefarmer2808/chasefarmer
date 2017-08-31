(function() {
  'use strict';

  angular
    .module('chasefarmer')
    .config(config);

  function config($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

})();
