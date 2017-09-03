(function(){
    angular.module('myApp')
        .controller('NameController',function($scope){
            $scope.firstName = '';
            $scope.len = 0;

            $scope.onTextChange = function(){
                $scope.len = $scope.firstName.length;
            }
        })
})();