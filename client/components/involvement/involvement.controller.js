(function() {
  'use strict';

  angular
    .module('involvement')
    .controller('InvolvementController', InvolvementController);

  function InvolvementController() {
    var vm = this;

    vm.test = 'involvement view';
  };
})();
