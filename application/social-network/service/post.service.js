(function () {
    angular.module('app')
        .service('PostDataService',PostDataService );

    function PostDataService($http, LocalStorageService){

        var getUserId = function (){
            return LocalStorageService.get('userId');
        };

        return {
            getPosts : function (){
               return $http.get('data/posts.json')
                    ;
            }
        }
    }

})();