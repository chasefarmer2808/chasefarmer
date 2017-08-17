(function() {
  'use strict';

  angular
    .module('chasefarmer')
    .directive('navBar', navBar);

  function navBar() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'client/components/navbar/navbar.html'
    };

    return directive;
  };
})();
