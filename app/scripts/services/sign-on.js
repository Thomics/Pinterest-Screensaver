(function() {
  'use strict';

  angular
    .module('pinterest')
    .service('signOnService', signOnService);

  signOnService.$inject = ['$http', '$routeParams'];

  function signOnService($http, $routeParams) {

    var vm = this;

    vm.accessToken;
    vm.checkAuthorization = checkAuthorization;
    vm.code = '';
    vm.getBoard = getBoard;
    vm.getPins = getPins;
    vm.getToken = getToken;
    vm.pins = [];
    vm.seconds = 10;


    function checkAuthorization() {

      if ($routeParams.state = 'appconnected') {
        vm.code = $routeParams.code;
        return $routeParams.code;
      }

    }


    function getToken(code) {

      return $http.post('https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4843083155244066954&client_secret=c3070903c5fbe1daa699846708c06d0f4f5713351b97d2a5f357b9bc3e541a16&code=' + code);

    }



    function getBoard(token) {

      vm.accessToken = token;
      return $http.get('https://api.pinterest.com/v1/me/boards/?access_token=' + token + '&fields=id%2Curl%2Cname');

    }



    function getPins(board, token) {

      return $http.get('https://api.pinterest.com/v1/boards/' + board + '/pins/?access_token=' + token + '&fields=url%2Cimage');

    }


  }

})();













//
//
//
//(function() {
//  'use strict';
//
//  angular
//    .module('pinterest')
//    .service('signOnService', signOnService);
//
//  signOnService.$inject = ['$http', '$routeParams'];
//
//  function signOnService($http, $routeParams) {
//
//    var vm = this;
//
//    vm.accessToken;
//    vm.boardOptions;
//    vm.checkAuthorization = checkAuthorization;
//    vm.code = '';
//    vm.getBoard = getBoard;
//    vm.getPins = getPins;
//    vm.getToken = getToken;
//    vm.pins = [];
//    vm.seconds = 10;
//
//    var service = {
//      checkAuthorization: checkAuthorization,
//      getToken: getToken,
//      getBoard: getBoard,
//      getPins: getPins
//    };
//
//    return service;
//
//
//    function checkAuthorization() {
//
//      if ($routeParams.state = 'appconnected') {
//        vm.code = $routeParams.code;
//        return $routeParams.code;
//      }
//
//    }
//
//
//    function getToken(code) {
//
//      return $http.post('https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=4843083155244066954&client_secret=c3070903c5fbe1daa699846708c06d0f4f5713351b97d2a5f357b9bc3e541a16&code=' + code);
//
//    }
//
//    function getBoard(token) {
//
//      vm.accessToken = token;
//      return $http.get('https://api.pinterest.com/v1/me/boards/?access_token=' + token + '&fields=id%2Curl%2Cname');
//
//    }
//
//
//    function getPins(board, token) {
//
//      return $http.get('https://api.pinterest.com/v1/boards/' + board + '/pins/?access_token=' + token + '&fields=url%2Cimage');
//
//    }
//
//
//  }
//
//})();