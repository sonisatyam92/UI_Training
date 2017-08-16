(function(){
        var nextBtn = $('#next');
        var prevBtn = $('#prev');

        var carousel  = $('#carousel');
        var images = ['1.jpg','2.jpg','3.jpg','4.jpg'];
        var currIndex = 0;

       var onNext = function(){
           var nextIndex = currIndex + 1;
           if(nextIndex >= images.length){
               nextIndex = 0;
           }
           carousel.html('<img src="'+images[nextIndex]+'" />');
           currIndex = nextIndex;
       };
    var onPrev = function(){
        var prevIndex = currIndex -1;
        if(prevIndex < 0){
            prevIndex = images.length -1;
        }
        carousel.html('<img src="'+images[prevIndex]+'" />');
        currIndex = prevIndex;
    };
    nextBtn.on('click',onNext);
    prevBtn.on('click',onPrev);

    setInterval(onNext, 2000);
})();