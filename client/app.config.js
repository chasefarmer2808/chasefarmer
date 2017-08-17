(function() {
  'use strict';

  angular
    .module('chasefarmer')
    .config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/',
      templateUrl: 'components/about/about.html',
      controller: 'AboutController',
      controllerAs: 'vm'
    })
    .state('experiance', {
      url: '/experiance',
      templateUrl: 'components/experiance/experiance.html',
      controller: 'ExperianceController',
      controllerAs: 'vm'
    })
    .state('skills', {
      url: '/skills',
      templateUrl: 'components/skills/skills.html',
      controller: 'SkillsController',
      controllerAs: 'vm'
    })
    .state('involvement', {
      url: '/involvement',
      templateUrl: 'components/involvement/involvement.html',
      controller: 'InvolvementController',
      controllerAs: 'vm'
    });

  $locationProvider.html5Mode(true);
}

})();
