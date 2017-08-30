(function(){

    function Person(val){
        var firstName, lastName, age, gender,location;
        var getFirstName = function(){
            return firstName;
        };
        var getLastName = function(){
            return lastName;
        };
        var getAge = function(){
            return age;
        };
        var getGender = function(){
            return gender;
        };
        var getLocation = function(){
            return location;
        };
        var setFirstName = function(_firstName){
            firstName = _firstName;
        };
        var setLastName = function(_lastName){
            lastName = _lastName;
        };
        var setAge = function(_age){
            age = _age;
        };
        var setGender = function(_gender){
            gender = _gender;
        };
        var setLocation = function(_loc){
            location = _loc;
        };
        function init(){
            if(val.firstName){
                setFirstName(val.firstName);
            }
            if(val.lastName){
                setLastName(val.lastName);
            }
            if(val.age){
                setAge(val.age);
            }
            if(val.gender){
                setGender(val.gender);
            }
            if(val.location){
                setLocation(val.location);
            }
        }
        init();

        return {
            getFirstName : getFirstName,
            getLastName : getLastName,
            getAge : getAge,
            getGender : getGender,
            getLocation : getLocation,
            setFirstName : setFirstName,
            setLastName : setLastName,
            setAge : setAge,
            setGender : setGender,
            setLocation : setLocation
        }
    }



    function PersonsController(){
        var data = [];
        return {
            addPerson : function(firstName, lastName, age, gender, location){
                var json = {
                    firstName : firstName,
                    lastName : lastName,
                    age : age,
                    gender : gender,
                    location : location
                };

                var person = Person(json);
                data.push(person);
            }
        }

    }

    function PersonView(){
       function refreshView (data){
           var tbody = $('#data');
           var txt ="";
           for(var i = 0 ; i < data.length ; i++){
               var person = data[i];
               txt += '<tr>' +
                   '<td>'+person.getFirstName()+'</td>' +
                   '<td>'+person.getLastName()+'</td>' +
                   '<td>'+person.getAge()+'</td>' +
                   '<td>'+person.getGender()+'</td>' +
                   '<td>'+person.getLocation()+'</td>' +
                   '</tr>';


           }
           tbody.html(txt);
       }

       return  {

           refresh : refreshView
       }
    }

    var controller = PersonsController();
    var view = PersonView();

    $('#submitBtn').on('click',function(){
       controller.addPerson(
                            $('#firstName').val(),
                            $('#lastName').val(),
                            $('#age').val(),
                            $('#gender').val(),
                            $('#location').val()
       );
    });

})();