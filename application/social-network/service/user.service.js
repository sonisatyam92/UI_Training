(function () {
    angular.module('app')
        .service('UserService', UserService);

    function UserService($http){

        var users = [];
        var currentUser = null;
        var getUsers  = function(){
            return $http.get('data/users.json');

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


        getUsers().then(function(resp){
            var i = -1;
            var data = resp.data;
            while(++i < data.length){
                users.push(data[i]);
            }
        });
        return {
            getUsers : getUsers,
            getUserById : getUserById,
            setCurrentUser : function (userId) {
                currentUser = getUserById(userId);
            },
            getCurrentUser : function(){
                return currentUser;
            }
        }
    }
})();