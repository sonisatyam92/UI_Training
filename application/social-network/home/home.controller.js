(function(){

    angular.module('app')
        .controller('HomeController', HomeController);

    function HomeController($scope, $routeParams, MessageService, UserService){
            var userId = $routeParams.userId;
            UserService.setCurrentUser(userId);

    }

})();