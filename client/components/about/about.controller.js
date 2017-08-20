(function() {
  'use strict';

  angular
    .module('about')
    .controller('AboutController', AboutController);

  function AboutController() {
    var vm = this;

    vm.message = `My name is Chase Farmer.
                  I am a 9th semester Computer Engineering student at the University of Florida.  I have a
                  passion for full stack web development.  I made this website
                  from scratch using NodeJS and AngularJS.  I have used many
                  web frameworks to create client facing applications.  I also
                  have a passion for embedded, real time applications and IoT.
                  I have used several microprocessors and microcontrollers and
                  interfaced them with other electronics through various
                  communication protocals.  If your company needs someone with
                  my skill set, please reach out to me.
                  `;
  };
})();
