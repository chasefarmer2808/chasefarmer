(function() {
  'use strict';

  angular
    .module('chasefarmer')
    .config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'components/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    });

  $locationProvider.html5Mode(true);
}

/*
  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/main.html',
        controller: 'main/main.controller.js',
        controllerAs: 'vm'
      });

    $locationProvider.html5Mode(true);
  };
*/
})();
