(function() {
  'use strict';

  angular
    .module('experiance')
    .controller('ExperianceController', ExperianceController);

  function ExperianceController() {
    var vm = this;

    vm.test = 'experiance view';
  };
})();
