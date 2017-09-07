(function(){
    angular.module('myApp')
        .controller('ClockController', ClockController);
    function  ClockController($scope, $interval ) {
        $scope.clock={ hr:null, min:null,sec:null};
        $scope.stopClock={ hr:null, min:null,sec:null};


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

            var min = 0;
            var sec = 0;

            setup(parseDate(new Date()));
            $timeout(function(){
                var json = parseDate(new Date());
                setup(json);
            },5000);
        };


        $scope.doClock();

    }
})();
