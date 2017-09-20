(function(){
    angular.module('app')
        .config(function($routeProvider){
           var basePath = 'social-network/';
            $routeProvider
                .when('/Login',{
                    templateUrl: basePath+'login/login.html',
                    controller : 'LoginController'
                }).
                otherwise({
                    redirectTo :'/Login'
            });

        });

})();