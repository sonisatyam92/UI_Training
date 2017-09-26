(function(){
    angular.module('app')
        .service('NavigationService',NavigationService);


    function NavigationService($http){
        var navMenu = [];
        var getNavMenu = function(){
            $http.get('data/nav.json')
                .then(function(resp){

                   var data = resp.data;
                   var i = -1;
                   while(++i < data.length){
                       navMenu.push(data[i]);
                   }
                });
        };

        getNavMenu();

        return {
            navMenu : navMenu
        }
    }
})();