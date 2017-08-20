(function() {
  'use strict';

  angular
    .module('experiance')
    .controller('ExperianceController', ExperianceController);

  function ExperianceController() {
    var vm = this;

    vm.test = 'experiencesnce view';

    vm.experiences = [
      {
        company: 'Ultimate Software',
        link: 'http://www.ultimatesoftware.com/',
        location: 'Weston, Florida',
        position: 'Software Engineering Intern',
        duration: {
          start: 'May, 2017',
          end: 'August, 2017'
        },
        bullets: [
          'Added features and refactored web based planning dashboard.',
          'Learned microservice principles and tools like Eurika and event sourcing.',
          'Wrote server and db maintenance scripts that ran weekly.',
          'Wrote unit and functional tests for several company products.'
        ]
      },
      {
        company: 'Dycom Industries',
        location: 'Palm Gardens, Florida',
        position: 'Software Engineering Intern',
        duration: {
          start: 'May, 2016',
          end: 'August, 2016'
        },
        bullets: [
          'Developed web based metrics dashboard from scratch.',
          'Aggregated data from SQL databases into a Mongo database.',
          'Displayed data in several chart types using D3JS.'
        ]
      },
      {
        company: 'GeniusCentral',
        location: 'St. Petersburg, Florida',
        position: 'Software Engineering Intern',
        duration: {
          start: 'May, 2015',
          end: 'August, 2015'
        },
        bullets: [
          'Wrote e2e testing system from scratch using Selenium and MochaJS',
          'Encorporated automated tests in CI pipeline'
        ]
      }
    ];
  };
})();
