(function(){


    var mask = function(el){
        $(el).LoadingOverlay('show');
    };
    var unmask = function(el){
        $(el).LoadingOverlay('hide');
    };

    var loggingInterceptor = function(){
      console.log('before request ');
      console.log(arguments);
    };

    var convertor = function(){
        console.log('convert');
        console.log(arguments);
    }
    var loadHeading = function () {
        $.ajax('data.json').done(function (response) {
            var data =response;
            $('.panel-heading').text(data.courseName);

        });
    };
    var loadTechnologies = function(){
        mask($('.table'));
        $.ajax({
          url : 'data.txt',
          method : 'POST',
            converters :{"text json": jQuery.parseJSON},
            beforeSend : loggingInterceptor,
            complete : convertor
        }).done(function (response) {
            var data = JSON.parse(response);
            var technologies = data.technologies;
            var len = technologies.length;
            var table = $('.tbody');
            for(var i =0 ;i <len;i++){
                table.append('<tr><td>'+technologies[i]+'</td></tr>');
            }
            unmask($('.table'));
        });
    };
    var refreshTechnologies = function(){
        $('.tbody').html('');
        loadTechnologies();
    };
    var refreshHeading = function(){
        loadHeading();
    };

    var init = function(){
        refreshHeading();
        refreshTechnologies();

        $('#reloadTechnologiesBtn').on('click', function () {

            refreshTechnologies();
        })
    };

    init();



})();



