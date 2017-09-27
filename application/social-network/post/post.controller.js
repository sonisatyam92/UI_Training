(function () {
    angular.module('app')
        .controller('PostController', PostController);

    function PostController($scope, LocalStorageService, $window, $location){
        var userId = LocalStorageService.get('userId');
        if(!userId){
            LocalStorageService.remove('userId');
            $window.location.href = $location.absUrl().replace('Post','Login');
        }


    }
})();