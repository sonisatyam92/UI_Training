(function(){
    angular.module('app')
        .service('LoginService', LoginService);

    function LoginService($http, MessageService){

        var locale = MessageService.msg();

        var getLoginData = function(){
            return $http.get('data/login1.json');
        };

        return {
            getLoginData : getLoginData
        }
    }
})();