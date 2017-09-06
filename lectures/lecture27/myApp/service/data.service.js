(function(){
    angular.module('myApp')
        .service('DataService', DataService);

    function DataService(){
        var data=[];
        return {

            getData : function(){
                return data;
            },
            addToData : function(o){
                data.push(o);
            }
        }

    }
})();