(function(){
    angular.module('app')
        .controller('UserController', UserController);

    function UserController($scope, UserService){
        UserService.getUsers()
            .then(function(resp){
                var data = resp.data;
                $scope.users = data;
            });

       $scope.getStatusClass = function(user){
           switch (user.status){
               case 'Online' : return 'online fa fa-circle';
               case 'Offline' : return 'offline fa fa-circle';
               case 'Busy' : return 'busy fa fa-circle';
               case 'Leave' : return 'leave fa fa-circle';
           }
       }
    }
})();