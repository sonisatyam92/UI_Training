(function(){
    angular.module('app')
        .config(function($routeProvider){
           var basePath = 'social-network/';
            $routeProvider
                .when('/Login',{
                    templateUrl: basePath+'login/login.html',
                    controller : 'LoginController'
                }).
                when('/Home/:userId',{
                    templateUrl : basePath + 'home/home.html',
                    controller : 'HomeController'
                }).
                otherwise({
                    redirectTo :'/Login'
            });

        });

})();