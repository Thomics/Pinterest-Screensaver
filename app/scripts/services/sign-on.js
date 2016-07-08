'use strict';

angular.module('pinterest')
  .service('signOnService', ['$http', '$routeParams', function( $http, $routeParams ) {

    var vm = this;

    vm.checkAuthorization = function( ) {

      if ( $routeParams.state = 'appconnected' ) {
        console.log($routeParams.code + 'route param code');
        return $routeParams.code;
      }

    };

    vm.getToken = function( code ) {

      return $http.post('https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4843083155244066954&client_secret=c3070903c5fbe1daa699846708c06d0f4f5713351b97d2a5f357b9bc3e541a16&code=' + code);

    };


    vm.getBoard = function( token ) {

      return $http.get('https://api.pinterest.com/v1/me/boards/?access_token=' + token + '&fields=id%2Curl%2Cname');

    };


    vm.getPins = function ( board, token ) {

      console.log('well howdy');

      return $http.get('https://api.pinterest.com/v1/boards/' + board + '/pins/?access_token=' + token + '&fields=url%2Cimage');

    };

    //vm.storePins = function( boardPins ) {
    //
    //  console.log(boardPins);
    //
    //  var pins = boardPins;
    //
    //};

    vm.pins = [];


  }]);
