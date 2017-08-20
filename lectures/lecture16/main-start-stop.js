(function(){
    var restartFlag = false;
    var stop = false;
    function moveKangaroo(){
        if(!stop){
            $('.animation-box').animate({
                left : '-=30px'
            },100, function(){
                var val = parseInt($('.animation-box').css('margin-left'));
                if(restartFlag){
                    val = 0;
                    restartFlag = false;
                }else {
                    val+=50;
                }
                $('.animation-box').css('margin-left', val+'px');
            });
        }
    }



    $('#play').on('click',function(){
        setInterval(function(){
            moveKangaroo();
        }, 1000);
        $('#play').disable();
    });

    $('#pause').on('click',function(){
        stop = !stop;
    });
    $('#stop').on('click',function(){
        stop = false;
        restartFlag = true;
    });




})();



