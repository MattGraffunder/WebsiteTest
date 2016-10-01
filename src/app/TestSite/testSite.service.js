angular
    .module('websiteTest')
    .factory('TestService', TestService);

//TestService.$Inject($log, $http);

  /** @ngInject */
  function TestService($log, $http) {
    var apiUrl = 'http://ec2-54-71-103-7.us-west-2.compute.amazonaws.com';

    var service = {     
      getHello: getHello
    };

    return service;

    function getHello(word) {
      return $http.get(apiUrl + '/hello/' + word)
        .then(getHelloComplete)
        .catch(getHelloFailed);

      function getHelloComplete(response) {
        return response.data;
      }

      function getHelloFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }