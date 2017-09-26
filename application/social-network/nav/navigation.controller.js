(function(){
    angular.module('app')
        .controller('NavigationController'  , NavigationController);

    function NavigationController($scope, NavigationService){
            $scope.navmenu = NavigationService.navMenu;


    }
})();