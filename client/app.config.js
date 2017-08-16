'use strict';

angular
  .module('chasefarmer')
  .config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'main/main.html',
      controller: 'main/main.controller.js',
      controllerAs: 'vm'
    });
}
