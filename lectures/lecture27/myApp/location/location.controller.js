(function(){
    angular.module('myApp')
        .controller('LocationController', LocationController);
    function LocationController ($scope, $location){
        $scope.url =$location.absUrl();
        $scope.host =$location.host();
        $scope.port =$location.port();
        $scope.scheme =$location.protocol();

        $scope.onClick = function(){
            if($scope.newLink){
                $location.path($scope.newLink);
                window.location.href='https://'+$scope.newLink;
            }
        }



    }
})();