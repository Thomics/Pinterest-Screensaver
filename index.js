$(function() {
//https://api.pinterest.com/v1/me/pins/?access_token=AR-pedrEPhPYGlDEEXQjl4nkPaJMFCoq49EccAZCyyXDg0BCowAAAAA&fields=url%2Cimage
    //https://api.pinterest.com/v1/boards/contot/icons/pins/?access_token=AXy726WI_Sj8S4ymCV9rep0VHRZhFCoQgagEL4FCyyXDg0BCowAAAAA&fields=image%2Curl
    console.log('hi');
    $.ajax({

        type: 'GET',
        url: 'https://api.pinterest.com/v1/me/pins/?access_token=AR-pedrEPhPYGlDEEXQjl4nkPaJMFCoq49EccAZCyyXDg0BCowAAAAA&fields=url%2Cimage',
        success: function(data) {
            var arr = getUserPins(data);
            displayPins(arr);
        }

    });


});


function getUserPins(obj) {

    console.log(obj);
    var arr = obj.data;


    var imageArr = [];
    for ( var i = 0; i < arr.length; i++ ) {
        console.log(arr[i]);
        imageArr.push(arr[i].image.original.url);
    }

    return imageArr;

}

var holder = [];
function displayPins(arr) {
    for ( var i = 0; i < arr.length; i++ ) {
        console.log('loop:'+ i);
        holder[i] = arr[i];
        var j = 0;

        setTimeout(function() {
            $('.img-container').html('<img src="' + holder[j]+ '" />');
            j++;
        }, 15000 * i);
        //console.log('hi' + i);
    }
}


$('user-permission').on('click', function() {
    console.log(document.URL);
});
