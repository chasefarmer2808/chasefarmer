(function() {
  'use strict';

  angular
    .module('chasefarmer')
    .directive('sideBar', sideBar);

    function sideBar() {
      var directive = {
        restrict: 'EA',
        templateUrl: 'client/components/sidebar/sidebar.html'
      };

      return directive;
    };
})();
