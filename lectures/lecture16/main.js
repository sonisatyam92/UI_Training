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


/*$('#loginBtn').on('click',function(){
    //$('.login-box').hide();
    //$('.login-box').fadeOut();
    //$('.login-box').fadeOut('slow');
    //$('.login-box').fadeOut('fast');
    $('.login-box').fadeToggle(3000);
});*/

$('.head-line').on('click',function(){
    $('.login-box').fadeToggle(30000);
});



$(".create-link").on('click',function(){
   $('.create-link').animate({
       height:'toggle'
   });
});


$('#loginBtn').on('click',function(){
    var user = $('#username').val();
    if(!user || user.length ===0){

        $('.login-box').animate({
            left : '-=30px'
        },100, function(){
            $('.login-box').animate({
                left : '+=60px'
            },100, function(){
                $('.login-box').animate({
                    left : '-=60px'
                },100, function(){
                    $('.login-box').animate({
                        left : '+=30px'
                    },100, function(){

                    });
                });

            });
        });

    }
});

$('#signupBtn').on('click',function(){
    //$('#loginBtn').slideUp();
    $('#signupForm').slideToggle();
    $('#loginForm').slideToggle();
});
$('#nextBtn').on('click',function(){
    $('#loginForm').slideDown();
    $('#signupForm').slideToggle();
});
