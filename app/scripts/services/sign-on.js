'use strict';

angular.module('Pinterest')
  .service('signOnService', ['$scope', '$http', '$routeParams', function( $scope, $http, $routeParams ) {

    var vm = this;

    vm.checkAuthorization = function( ) {

      if ( $routeParams.state = 'appconnected' ) {
        console.log($routeParams.code);
        return $routeParams.code;
      }

    };

    vm.getToken = function(token) {

      $http.post('https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4843083155244066954&client_secret=c3070903c5fbe1daa699846708c06d0f4f5713351b97d2a5f357b9bc3e541a16&code=' + token)
        .then(function(data) {
          console.log(data);
          console.log(data.data.access_token);
          console.log(data.access_token);
          vm.getBoard(data.data.access_token);
        });

    };


    vm.getBoard = function( token ) {

      console.log(token);

      $http.get('https://api.pinterest.com/v1/me/boards/?access_token=' + token + '&fields=id%2Curl%2Cname')
        .then(function( data ) {
          console.log(data);
          console.log(data.data);

          $scope.boards = data.data;

          return data.data;

        });

    };


    vm.getPins = function ( data ) {



    }





  }]);
