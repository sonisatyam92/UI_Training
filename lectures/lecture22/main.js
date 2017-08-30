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
            if(!val){
                return;
            }
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


                var person = Person();
                person.setFirstName(firstName);
                person.setLastName(lastName);
                person.setAge(age);
                person.setGender(gender);
                person.setLocation(location);
                data.push(person);
                view.refresh(data);
            }
        }

    }

    function PersonView(){
       function refreshView (data){
           var tbody = $('.data');
           var txt ="";
           for(var i = 0 ; i < data.length ; i++){
               var person = data[i];
               txt += '<tr>' +
                   '<td class="text-capitalize">'+person.getFirstName()+'</td>' +
                   '<td class="text-capitalize">'+person.getLastName()+'</td>' +
                   '<td class="text-capitalize">'+person.getAge()+'</td>' +
                   '<td class="text-capitalize">'+person.getGender()+'</td>' +
                   '<td class="text-capitalize">'+person.getLocation()+'</td>' +
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