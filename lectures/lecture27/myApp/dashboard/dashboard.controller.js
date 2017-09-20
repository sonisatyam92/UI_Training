(function(){
    angular.module('myApp')
        .controller('DashboardController',  DashboardController);
    function  DashboardController($scope, DataService) {
        $scope.data = DataService.getData();
    }
})();
