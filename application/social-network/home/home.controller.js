(function(){

    angular.module('app')
        .controller('HomeController', HomeController);

    function HomeController($scope, $routeParams, MessageService, UserService, LocalStorageService, $window,$location){
            var userId = $routeParams.userId;
            if(!userId){
                LocalStorageService.remove('userId');
                $window.location.href = $location.absUrl().replace('Home','Login');
            }else if(userId !== LocalStorageService.get('userId')){
                LocalStorageService.remove('userId');
                $window.location.href = $location.absUrl().replace('Home','Login');
            }else {
                UserService.setCurrentUser(userId);
            }





    }

})();