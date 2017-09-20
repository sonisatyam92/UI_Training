(function(){
    angular.module('myApp')
        .config(function($routeProvider){
            $routeProvider
                .when(
                    '/Location',{
                        templateUrl:'myApp/location/location.html',
                        controller : 'LocationController',

                    }
                )
                .when(
                    '/Profile',{
                        templateUrl:'myApp/profile/profile.html',
                        controller : 'ProfileController'

                    }
                )
                .when(
                    '/Clock',{
                        templateUrl:'myApp/clock/clock.html',
                        controller : 'ClockController'

                    }
                )
                .when(
                    '/Dashboard',{
                        templateUrl:'myApp/dashboard/dashboard.html',
                        controller : 'DashboardController'

                    }
                )
                .otherwise({
                    redirectTo: 'Dashboard'
                });
        });
})();