(function(){
    var viewData = function(data){
        var tbody = $('.data');
        var txt ="";
        for(var i = 0 ; i < data.length ; i++){
            var person = data[i];
            txt += '<tr>' +
                '<td class="text-capitalize">'+person.firstName+'</td>' +
                '<td class="text-capitalize">'+person.lastName+'</td>' +
                '<td class="text-capitalize">'+person.age+'</td>' +
                '</tr>';
        }
        tbody.html(txt);
    };

    function RenderData(service){
        service.getData().then(function(data){
            viewData(data);
        });
    }

    var AjaxService = function(){
        return {
            getData : function(){
                return $.ajax('data.json');
            }
        }
    };

    var StaticDataService = function(){
        var data = [{"firstName":"Apuroop","lastName":"Test","age":24}];
        return {
            getData  : function(){
                return $.when(function(){
                    resolve();
                }).then(function(){
                    return data;
                });

            }
        }
    };

    //RenderData(AjaxService());
    RenderData(StaticDataService());




})();