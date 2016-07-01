'use strict';

angular.module('Pinterest')
  .service('signOnService', ['$http', '$routeParams', function( $http, $routeParams ) {

    this.checkAuthorization = function( ) {
      console.log($routeParams);
      var params = $routeParams;
      console.log(params);
    };



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



  }]);