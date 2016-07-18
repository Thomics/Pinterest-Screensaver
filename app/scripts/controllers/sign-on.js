(function() {
  'use strict';

  angular
    .module('pinterest')
    .controller('SignOnCtrl', SignOnCtrl);

  SignOnCtrl.$inject = ['signOnService', '$scope', '$location'];

  function SignOnCtrl(signOnService, $scope, $location) {

    var vm = this;

    vm.accessToken = signOnService.accessToken;
    vm.code = signOnService.checkAuthorization();
    vm.getToken = getToken;
    vm.getBoard = getBoard;
    vm.getPins = getPins;
    vm.seconds = 10;
    vm.selectedBoard = 'comics';


    function getToken() {

      signOnService.getToken(vm.code)
        .then(function (response) {
          vm.accessToken = response.data.access_token;
          vm.getBoard();
        })
        .catch(function(err) {
          console.log('error: ' + err);
        });

    }


    function getBoard() {

      signOnService.getBoard(vm.accessToken)
        .then(function (response) {
          vm.boardOptions = response.data.data;
        })
        .catch(function(err) {
          console.log('error: ' + err);
        });

    }


    function getPins() {

      signOnService.getPins(vm.selectedBoard, vm.accessToken)
        .then(function (response) {
          signOnService.pins = response.data.data;
          signOnService.seconds = vm.seconds;
          $location.url('/display-board');
        })
        .catch(function(err) {
          console.log('error: ' + err);
        });

    }

    $scope.$on('$routeChangeSuccess', function () {

      if (vm.accessToken) {
        vm.getBoard();
      } else {
        vm.getToken();
      }

    });

  }

})();