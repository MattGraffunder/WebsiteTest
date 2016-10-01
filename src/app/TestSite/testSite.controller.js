angular
    .module('websiteTest')
    .controller('TestController', TestController);

/** @ngInject */
function TestController(TestService){
    var vm = this;
    vm.hello = 'Test';

    function init(){
        TestService.getHello("World").then(function(data){
            vm.hello = data.Result;
        })
    }

    init();
}