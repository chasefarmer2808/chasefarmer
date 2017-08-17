(function() {
  'use strict';

  angular
    .module('about')
    .controller('AboutController', AboutController);

  function AboutController() {
    var vm = this;

    vm.test = 'about view';
  };
})();
