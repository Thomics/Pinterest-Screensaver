'use strict';

angular.module('Pinterest')
  .service('signOnService', ['$http', '$routeParams', function( $http, $routeParams ) {

    this.checkAuthorization = function( ) {

      if ( $routeParams.state = 'appconnected' ) {
        console.log($routeParams.code);
        return $routeParams.code;
      }

    };

    this.getBoards = function(token) {

      $http.get('https://api.pinterest.com/v1/me/boards/?access_token=' + token + '&fields=id%2Curl%2Cname')
        .then(function(data) {
          console.log(data);
        });

    };




  }]);
