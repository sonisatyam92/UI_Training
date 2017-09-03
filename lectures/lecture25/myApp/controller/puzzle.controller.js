(function(){
    angular.module('myApp')
        .controller('PuzzleController',PuzzleController);
        function PuzzleController($scope){
            $scope.counter = -1;
            $scope.answer="";
            $scope.currentQuestion=null;
            $scope.selectOption=null;





            $scope.onNext = function(){
                var nextCnt = $scope.counter + 1;
                if(questions[nextCnt]){
                    $scope.currentQuestion = questions[nextCnt];
                    $scope.counter= nextCnt;
                }else {
                    $scope.counter =-1;
                }

            };

            $scope.onNext();
        }



        var questions = [
            {
                "questionText":'Who is the president of US.',
                "isMultiSelect":true,
                "choices" :[
                    "Obama","Trump","Clinton"
                ],
                "answer":"Trump"
            },{
                "questionText":'Who is the Prime Minister of India.',
                "isMultiSelect":true,
                "choices" :[
                    "Modi","Gandhi","M M Singh"
                ],
                "answer":"Modi"
            },{
                "questionText":'What is 5+5?',
                "isMultiSelect":false,
                "answer":"10"
            }

        ]
})();