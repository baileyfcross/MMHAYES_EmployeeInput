
/*
var data = JSON.stringify($(form).serializeArray());
*/

  function onSubmit(form){
    var jsdata = JSON.stringify($(form).serializeArray());


    $.ajax({
        url: 'submit.html',
        dataType: 'JSON',
        type: 'post',
        data: jsdata,
        processData: false,
        success: function(data, textStatus, jQxhr){
            $('#response pre').html(JSON.stringify(data));
        },
        error: function(jqXhr, textStatus, errorThrown, data){
            //console.log(errorThrown);
            console.log(jsdata);
        }
    });
    return false;
  }
