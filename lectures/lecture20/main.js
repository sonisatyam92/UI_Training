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



$('.head-line').on('click',function(){
    $('.login-box').fadeToggle(3000);
});



$(".create-link").on('click',function(){
    $('.create-link').animate({
        height:'toggle'
    });
});

var doLogin  = function(username, password){
    return $.ajax('users.json')
        .done(function(res){
        var users = res.users;
        isValidLogin  = false;
        for(var i = 0 ; i<users.length ; i++){
            if(username === users[i].username && password === users[i].password){
                isValidLogin = true;
                break;
            }
        }
    });
};

$('#loginBtn').on('click',function(){
    var user = $('#username').val();
    var pass = $('#password').val();
    if(!user || user.length === 0 ){
        shakeForm('Username field is mandatory.');
    }else if(!pass || pass.length === 0){
        shakeForm('Password fields is mandatory.');
    }else {
       doLogin(user,pass).done(function(){
           if(isValidLogin){
               $('.username').text(user);
               $('.pre-section').hide();
               $('.post-section').show();
           }else {
               shakeForm('Invalid Login credentials. Please try with valid credentials');
           }
       })
    }
});

var isValidLogin = false;
var shakeForm = function(msgTxt){
    var msg = $('.msg');
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
                    msg.text(msgTxt);
                });
            });
        });
    });
};