(function(){
    angular.module('myApp')
        .controller('ClockController',ClockController);
    function  ClockController($scope, $interval , $timeout) {
        $scope.clock={ hr:null, min:null,sec:null};
        $scope.timer={ min:null,sec:null};
        $scope.message=null;


        function formatNumber(num){
            if(num<10){
                return '0'+num;
            }
            return num;
        }

        function parseDate(date){
            var hrs = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            return {
                hr : formatNumber(hrs),
                min : formatNumber(min),
                sec : formatNumber(sec)
            }



        }

        $scope.doClock = function(){

            function setup(json){
                $scope.clock.hr = json.hr;
                $scope.clock.min =json.min;
                $scope.clock.sec = json.sec;
            }
            setup(parseDate(new Date()));
            $interval(function(){
                var json = parseDate(new Date());
                setup(json);
            },1000);
        };
        $scope.doStopClock = function(){
            $scope.timer.min = 1;
            $scope.timer.sec= 60;

            var maxSec=60;
            $interval(function(){
                if($scope.timer.sec === 0 && $scope.timer.min ===0){

                }else if($scope.timer.sec === 0 ){
                    $scope.timer.sec = maxSec-1;
                    $scope.timer.min = $scope.timer.min-1;
                } else {
                    $scope.timer.sec = $scope.timer.sec - 1;
                }
            },1000);

            $timeout(function(){
                $scope.message= 'Time Expired';
            },120000);


        };


        $scope.doClock();
        $scope.doStopClock();

    }
})();
