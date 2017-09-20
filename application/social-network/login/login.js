(function(){
    'use strict';

    angular.module('app')
        .controller('LoginController', LoginController);

    function LoginController($scope, $http){
        var vm = $scope;

        vm.username ="";
        vm.password="";
        vm.errorMsg="";
        vm.hasError=false;

        vm.onLogin = function(){
            if(vm.username && vm.password){

            }else {
               vm.showErrorMsg("Username and Password fields are mandatory.");
            }
        };

        vm.showErrorMsg = function(msg){
            vm.hasError = true;
            vm.errorMsg = msg;
        };
        vm.clearErrorMsg = function(){
            vm.hasError = false;
            vm.errorMsg = null;
        }

    }
})();