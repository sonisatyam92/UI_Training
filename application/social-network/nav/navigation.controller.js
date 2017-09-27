(function(){
    angular.module('app')
        .controller('NavigationController'  , NavigationController);

    function NavigationController($scope, NavigationService, LocalStorageService,$window ,$location   ){
            $scope.navmenu = NavigationService.navMenu;

        $scope.onClickMenu = function(menu){
            if(menu.link === 'Logout'){
                LocalStorageService.remove('userId');
                $window.location.href = $location.absUrl().replace('Home','Login');

            }
        }
    }
})();