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

})();
