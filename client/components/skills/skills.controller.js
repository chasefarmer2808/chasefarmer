(function() {
  'use strict';

  angular
    .module('skills')
    .controller('SkillsController', SkillsController);

  function SkillsController() {
    var vm = this;

    var baseImgUrl = '../client/assets/lang_icons/';

    vm.languages = [
      {
        name: 'Java',
        imgUrl: `${baseImgUrl}java.png`
      },
      {
        name: 'Python',
        imgUrl: `${baseImgUrl}python.png`
      }
    ];
  };
})();
