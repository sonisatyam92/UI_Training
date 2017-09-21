(function(){
    angular.module('app')
        .controller('LocaleController', LocaleController);
    function LocaleController($scope, MessageService){

        $scope.locale = MessageService.msg();
        $scope.list = MessageService.locales;
        $scope.selectedLocale = MessageService.getLocale();

        $scope.changeLocale = function(){
            MessageService.setLocale($scope.selectedLocale);
            $scope.locale = MessageService.msg();
        }
    }
})();