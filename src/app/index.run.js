(function() {
  'use strict';

  angular
    .module('websiteTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
