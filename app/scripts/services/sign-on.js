'use strict';

angular.module('Pinterest')
  .service('signOnService', ['$http', '$routeParams', function( $http, $routeParams ) {

    this.checkAuthorization = function( ) {

      if ( $routeParams.state = 'appconnected' ) {
        console.log($routeParams.code);
        return $routeParams.code;
      }

    };

    this.getToken = function(token) {

      $http.post('https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4811218831118712860&client_secret=151c65575b58e9783627c80743eee6dba0bab7fd967ab4533c2cc3d87b2d5b49&code=' + token)
        .then(function(data) {
          console.log(data);
          getBoard(data);
        });

    };


    this.getBoard = function( code ) {

      $http.get('https://api.pinterest.com/v1/me/boards/?access_token=' + token + '&fields=id%2Curl%2Cname')
        .then(function( data ) {
          console.log(data);
        });

    };






  }]);
