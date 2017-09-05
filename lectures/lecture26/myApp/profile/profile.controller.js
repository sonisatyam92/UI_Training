(function(){
    angular.module('myApp')
        .controller('ProfileController', ProfileController);
    function  ProfileController($scope) {
        $scope.name = 'Satyam';
        $scope.dob = new Date('10-01-1992');
        $scope.currentTime = new Date();

        $scope.fine = 10000;
        $scope.skillsets = [

            {
                name : 'Java',
                rating:'Expert'
            }, {
                name : 'Python',
                rating:'Medium'
            },
            {
                name : 'Ruby',
                rating:'Beginner'
            },
            {
                name : 'Grail',
                rating:'Beginner'
            },
            {
                name : 'Linux',
                rating:'Medium'
            },
            {
                name : 'Javascript',
                rating:'Expert'
            }
        ];
        $scope.city="Mumbai";
        $scope.percent = 2323.2;
        var prority = {
            'Expert': 3,
            'Medium':2,
            'Beginner':1
        };
        $scope.skillsetsorter = function (v1,v2) {

            if(v1.value  === v2.value){
                return v1.value.localeCompare(v2.value);
            }
            return prority[v1.value] - prority[v2.value];
        }
    }
})();

// java, javascript
// Linux, Python
// Grail Ruby