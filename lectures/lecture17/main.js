(function(){
    $('#loadAjax').on('click',function(){
        $.ajax({url:'person.html', async:true})
            .done(function(res){
                alert('after request');
            $('.main-box').html(res);
        }).fail(function(){
            alert('failed');
        });
        alert('in method request');

    })
})();



