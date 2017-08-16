(function(){
    var btn = $('#myBtn');
    var div = $('#el');

    var arr = ['yellow','red','blue','purple'];
    var current = -1;
    btn.on('click', function(){
        if((current+1) >= arr.length){
            div.removeClass(arr[current]);
            current = 0 ;
        }else {
            div.removeClass(arr[current]);
            current++;
        }

        div.addClass(arr[current]);

    });

})();