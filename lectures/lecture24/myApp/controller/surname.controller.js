(function(){
    angular.module('myApp')
        .controller('SurnameController',function($scope){
            $scope.lastName = '';
            $scope.len = 0;

            $scope.onTextChange = function(){
                $scope.len = $scope.lastName.length;
            }
        })
})();