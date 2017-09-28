(function(){
    angular.module('app')
        .service('FeedDataService', FeedDataService);

    function FeedDataService ($http){


        return {
            getFeeds : function (){
                return $http.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=0712710b87754eb7b92a98d008161699')

            }
        }
    }
})();