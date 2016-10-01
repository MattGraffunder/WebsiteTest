(function() {
  'use strict';

  angular
    .module('websiteTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/TestSite/testSite.html',
        controller: 'TestController',
        controllerAs: 'test'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
