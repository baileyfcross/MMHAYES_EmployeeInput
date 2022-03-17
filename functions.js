  function onSubmit(form){
    var unstrJsData = $(form).serializeArray();
    var jsdata = JSON.stringify($(form).serializeArray());

    $.ajax({
        url: 'submit.html',
        dataType: 'JSON',
        type: 'post',
        data: jsdata,
        //processData: false,
        success: function(data, textStatus, jQxhr){
            $('.eFormDiv').text(jsdata);
            console.log(jsdata);
        },
        error: function(jqXhr, textStatus, errorThrown, data){
            //console.log(errorThrown);
            $('.eFormDiv').text(jsdata);
            console.log(jsdata);

        }
    });
    return false;
  }
