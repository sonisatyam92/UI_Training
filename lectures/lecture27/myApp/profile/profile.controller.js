(function(){
    angular.module('myApp')
        .controller('ProfileController', ProfileController);
    function  ProfileController($scope, DataService) {
        $scope.name= null;
        $scope.skill= null;
        $scope.rating= null;

        $scope.data = DataService.getData();

        $scope.onAdd = function(){
            DataService.addToData({
                name : $scope.name,
                skill:$scope.skill,
                rating:$scope.rating
            });
        }
    }
})();
