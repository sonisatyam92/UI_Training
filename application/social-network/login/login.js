(function(){
    'use strict';

    angular.module('app')
        .controller('LoginController', LoginController);

    function LoginController($scope, LoginService, MessageService){
        var vm = $scope;
        var locale = vm.locale = MessageService.msg();

        vm.username ="";
        vm.password="";
        vm.errorMsg="";
        vm.hasError=false;

        vm.onLogin = function(){
            if(vm.username && vm.password){
                LoginService.getLoginData()
                    .then(function(res){
                    var success = false;
                    for(var i = 0 ; i<res.data.length; i++){
                        var data = res.data[i];
                        success = (data.username === vm.username && data.password === vm.password);
                    }
                    if(!success)
                        vm.showErrorMsg(locale.invalidLogin);
                },function(){
                    vm.showErrorMsg(locale.serverErr);
                });

            }else {
               vm.showErrorMsg(locale.invalidLoginFields);
            }
        };

        vm.showErrorMsg = function(msg){
            vm.hasError = true;
            vm.errorMsg = msg;
        };
        vm.clearErrorMsg = function(){
            vm.hasError = false;
            vm.errorMsg = null;
        };



    }
})();