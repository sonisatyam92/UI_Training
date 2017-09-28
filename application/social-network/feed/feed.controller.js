(function(){
    angular.module('app')
        .controller('FeedController', FeedController);

    function FeedController($scope, $window, $location, LocalStorageService, FeedDataService){
            FeedDataService.getFeeds()
                .then(function(resp){
                    var data = resp.data;
                    $scope.feeds = data.articles;
                })
    }

})();