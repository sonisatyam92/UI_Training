(function () {
    angular.module('app')
        .controller('PostController', PostController);

    function PostController($scope, LocalStorageService, $window, $location, PostDataService){
        var userId = LocalStorageService.get('userId');
        if(!userId){
            LocalStorageService.remove('userId');
            $window.location.href = $location.absUrl().replace('Post','Login');
        }else{
            PostDataService.getPosts()
                .then(function(resp){
                    var data = resp.data;
                    $scope.posts = data[userId].posts;
                });
        }




    }
})();