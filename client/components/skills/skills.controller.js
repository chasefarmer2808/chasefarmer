(function() {
  'use strict';

  angular
    .module('skills')
    .controller('SkillsController', SkillsController);

  function SkillsController() {
    var vm = this;

    vm.test = 'skills view';
  };
})();
