/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('websiteTest')
    .constant('appSettings', {
      appName:'websiteTest'
    })
    .constant('constants', {
      "apis" :{
        "apiUrl" : "http://ec2-54-71-103-7.us-west-2.compute.amazonaws.com"
      }
    });

})();
