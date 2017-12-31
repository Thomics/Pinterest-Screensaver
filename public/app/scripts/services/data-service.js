(function() {
  import { clientId, clientSecret} from '../../config.js';

  angular
    .module('pinterest')
    .service('dataService', signOnService);

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

      return $http.post(`https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${code}`);

    }


    function getBoard(token) {

      vm.accessToken = token;
      return $http.get(`https://api.pinterest.com/v1/me/boards/?access_token=${token}&fields=id%2Curl%2Cname`);

    }


    function getPins(board, token) {

      return $http.get(`https://api.pinterest.com/v1/boards/${board}/pins/?access_token=${token}&fields=url%2Cimage`);

    }


  }

})();