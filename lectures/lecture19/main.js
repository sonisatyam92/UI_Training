(function(){
    var containsData = function(data, id){
        for(var i = 0; i < data.length ; i++){
            if(data[i].id === id){
                return true;
            }
        }
        return false;
    };

    var getData = function(data, id){
        for(var i = 0; i < data.length ; i++){
            if(data[i].id === id){
                return data[i];
            }
        }
        return null;
    };

    function loadData (){
       return jQuery.when([$.ajax('person.json'),$.ajax('detail.json'),$.ajax('qualification.json')])
            .then(function(responseData){
                var tbody =$('.tbody');
                var personData = responseData[0].responseJSON;
                var detailData = responseData[1].responseJSON;
                var qualificationData = responseData[2].responseJSON;
                var resultData = [];
                Object.keys(personData).forEach(function(key){
                    var containsPerson = containsData(responseData, key);
                    if(!containsPerson){
                        var json = {
                            id : key,
                            name: personData[key].name,
                            age: personData[key].age
                        };
                        resultData.push(json);
                    }
                });
                Object.keys(detailData).forEach(function(key){
                    var jsonData = getData(resultData, key);
                    jsonData.city = detailData[key].city;
                });
                Object.keys(qualificationData).forEach(function(key){
                    var jsonData = getData(resultData, key);
                    jsonData.skillsets= qualificationData[key].skillsets;
                });
                for(var i = 0; i< resultData.length; i++){
                    tbody.append('<tr>' +
                        '<td>'+resultData[i].name+'</td>' +
                        '<td>'+resultData[i].age+'</td>' +
                        '<td>'+resultData[i].city+'</td>' +
                        '<td>'+resultData[i].skillsets.toString()+'</td>' +
                        '</tr>')
                }
            }, function(){
                alert('failure');
            });
    }

    loadData().done(function(){
        $('.panel').append('<p> Completed</p>');
    })


})();
