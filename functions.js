  function onSubmit(form){
    var array = $(form).serializeArray();

    //var test = array[1].value;
    var nameArray = new Array();
    var valueArray = new Array();
    var totalArray = new Array();
/*
    for (var i = 0; i < array.length; i++) {
      nameArray.push(array[i].name);
      valueArray.push(array[i].value);
      //totalArray.push(array[i].name:array[i].value);
    }
*/
    //totalArray.push({nameArray:valueArray});

    //var test3 = array.map((array.name)=>array.value);

    var spaced = JSON.stringify({employeeInfo:array},null,4);
    //var jsdata = JSON.stringify($(form).serializeArray());
    //console.log(array);
    //console.log(spaced);
    //$('.eFormDiv').text(spaced);
    $('.eFormDiv').text(spaced);
    //$('.eFormDiv').text(valueArray);
    console.log(spaced);
    $.ajax({
        url: 'submit.html',
        dataType: 'JSON',
        type: 'post',
        data: spaced,
        //processData: false,
        success: function(data, textStatus, jQxhr){
            //$('.eFormDiv').text(spaced);
        },
        error: function(jqXhr, textStatus, errorThrown){
            console.log(errorThrown);
            //$('.eFormDiv').text(spaced);
        }
    });
    return false;
  }
