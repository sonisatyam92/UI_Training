(function () {
    angular.module('myApp')
        .service('DataService', DataService);

    function DataService($http) {
        var data = [];

        function init() {
            $http.get('data.json')
                .then(function (resp) {
                    var respData = resp.data;
                    var len = respData.length;
                    var i = -1;
                    while (++i < len) {
                        data.push(respData[i]);
                    }
                });

        }

        init();
        return {

            getData: function () {
                return data;
            },
            addToData: function (o) {
                data.push(o);
            }
        }


    }
})();