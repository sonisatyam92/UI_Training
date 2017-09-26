(function () {
    angular.module('app')
        .service('UserService', UserService);

    function UserService($http){

        var users = [];
        var currentUser = null;
        var getUsers  = function(){
            $http.get('data/users.json')
                .then(function(resp){
                    var i = -1;
                    var data = resp.data;
                    while(++i < data.length){
                        users.push(data[i]);
                    }
                })
        };

        var getUserById = function(userId){
            var i = -1;
            while(++i < users.length){
                if(users.userId === userId){
                    return user;
                }
            }
            return null;
        };


        getUsers();
        return {
            getUserById : getUserById,
            setCurrentUser : function (user) {
                currentUser = user;
            }
        }
    }
})();