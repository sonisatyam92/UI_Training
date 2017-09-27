(function () {
    angular.module('app')
        .service('LocalStorageService', LocalStorageService);

    function LocalStorageService(){
        var Storage = localStorage;
         var setItem = function(key, val){
             Storage.setItem(key, val);
         };

         var getItem = function(key){
             return Storage.getItem(key);
         };
         var removeItem = function(key){
             return Storage.removeItem(key);
         };

         return {
             set : setItem,
             get : getItem,
             remove : removeItem
         }
    }
})();