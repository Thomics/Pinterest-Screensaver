//add a turn off tall photos option, add a skip button, set up numbers only for
//seconds form and error catching.

//Global variables
var token, userBoards = [], currentBoard, seconds, pause = false, height, timer;

$(function() {

  checkAuthCode();

  $('.pause').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('hide');
    $('.play').removeClass('hide');
    pause = true;
  });

  $('.play').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('hide');
    $('.pause').removeClass('hide');
    pause = false;
  });

  $('.reset').on('click', function() {
    reset();
    getBoards();
  });

  $('.about').on('click', function() {
    $(this).addClass('hide');
    $('.about-text').fadeIn(500, function() {
      $('.about-text').removeClass('hide');
    });
  });

  $('.about-text').on('click', function() {
    $(this).css("display", "none");
    $('.about').fadeIn(500, function() {
      $('.about').removeClass('hide');
    });
  });

});


          //If the user has authorized their account we get and return
          //the authorization code otherwise returns undefined.
          function checkAuthCode() {
            //Retrieves the current url.
            var docURL = document.URL;
            var arr = docURL.split('code=');
            if ( arr.length > 1) {
              $('.user-permission, .about-text, .about').addClass('hide');
              $('form').removeClass('hide');
              getAccessToken(arr[1]);//Passes the authorization code
            }
          }

          //Trades a users 'code' for an access token.
          function getAccessToken(code) {
            $.ajax({
              type: 'POST',
              url: 'https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4811218831118712860&client_secret=151c65575b58e9783627c80743eee6dba0bab7fd967ab4533c2cc3d87b2d5b49&code=' + code,
              success: function (data) {
                token = data.access_token;
                //Waits for user input after getting boards.
                getBoards();
              }
            });
          }

          //Retrieves the users boards, and populates them in an html form list.
          //Stores users boards in variable - userBoards
          //******************Add error catching for bad token.*****************
          function getBoards() {
            $('.users-pins').empty();//Clears the list so that it doesn't re-add.
            $('.form-container').removeClass('hide');
            $('.reset, .pause, .display-options, .container').addClass('hide');

            $.ajax({
              type: 'GET',
              url: 'https://api.pinterest.com/v1/me/boards/?access_token=' + token + '&fields=id%2Curl%2Cname',
              success: function(info) {
                userBoards = info.data;
                for (var i = 0; i < userBoards.length; i++) {
                  $('.users-pins').append("<option value='" + userBoards[i].id + "'>" +
                    userBoards[i].name + "</option>");
                }
              }
            });
          }

          //When the user selects a board and clicks the submit button, getPins executes.
          //retrieves the pins from the selected board.
          function getPins() {
            $('.form-container').addClass('hide');
            $('.container, .reset, .pause, .display-options').removeClass('hide');

            currentBoard = $('.users-pins option:selected').val();//Retrieves the selected boards name.
            seconds = $('#seconds').val();//returns the number of seconds.

            $.ajax({
              type: 'GET',
              url: 'https://api.pinterest.com/v1/boards/' + currentBoard + '/pins/?access_token=' + token + '&fields=url%2Cimage',
              success: function(data) {
                displayPins(data.data);
              }
            });
          }

//Displays the pins from the selected board.
//@params arr an array containing images and relevant information.
function displayPins(arr) {
  var count = 0;

  //Shows the first image immediately.
  $('.img-container').html('<img class= "actual-image" src="' +
    arr[count].image.original.url + '" />');
  height = arr[count].image.original.height;
  determineScroll();
  count++;

  timer = setInterval(function() {
    if (!pause) {
      //If we have cycled through all of the images, exit setInterval function.
      if (count === arr.length) {
        intervalClear(timer);
        getBoards();
      } else {
        $('.img-container').html('<img class= "actual-image" src="' +
          arr[count].image.original.url + '" />');
        height = arr[count].image.original.height;
        determineScroll();
        count++;
      }
    }
  }, (seconds * 1000));
}

//If the image is tall enough, the program scrolls to the bottom of the image, and then
//back to the top. If the user scrolls, clicks the scrolling animation halts.
function windowScroll() {

  $('html, body').animate({ scrollTop: height + $(window).height() }, ((seconds * 1000)/2));
  //Code from stackoverflow
  $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(event){
    if ( event.which > 0 || event.type === "mousedown" || event.type === "mousewheel"){
      $('html, body').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
    }
  });

  $('html, body').animate({ scrollTop: 0 }, ((seconds * 1000)/2));
  //Code from stackoverflow
  $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(event){
    if ( event.which > 0 || event.type === "mousedown" || event.type === "mousewheel"){
      $('html, body').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
    }
  });
}



//resets the program when the user presses reset, or the slideshow is done.
function reset() {
  $('.actual-image').remove();
  userBoards = [];
  $('html, body').stop().unbind('scroll');
  intervalClear(timer);
}

//Clears the timing function.
function intervalClear(interval) {
  clearInterval(interval);
}


//Retrieves the height of the image, if it is less than twice the size of the image
//the program won't scroll over it, and instead makes it 100vh.
function determineScroll() {
  // if ( height < ($(window).height() * 3) ) {
  //     $('.actual-image').addClass('height');
  // } else {
  //     $('.actual-image').removeClass('height');
  //     windowScroll();
  // }
  windowScroll(); // figure out tonight
}
