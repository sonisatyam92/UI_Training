/*
(function(){
    'use strict';

    $('#mybtn').on('click',function(ev){
        ev.stopImmediatePropagation();
        alert('jquery click');
    });

    $('#mybtn').on('click', function(ev){
        alert('jquery 2 click');
    });

    $('#mybtn').on('click', function(ev){
        alert('jquery 3 click');
    });
})();
*/
var add = (function(){
    var counter = 0;
    function plus(){
       return ++counter;
    }
    return plus;
})();


console.log(add());
console.log(add());
console.log(add());








