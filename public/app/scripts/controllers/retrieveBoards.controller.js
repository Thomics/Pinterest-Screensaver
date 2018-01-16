(function() {
  'use strict';

  angular
    .module('pinterest')
    .controller('RetrieveBoardsController', RetrieveBoardsController);

  RetrieveBoardsController.$inject = ['dataService', '$scope', '$location'];

  function RetrieveBoardsController(dataService, $scope, $location) {

    var vm = this;

    vm.accessToken = dataService.accessToken;
    vm.code = dataService.checkAuthorization();
    vm.getToken = getToken;
    vm.getBoard = getBoard;
    vm.getPins = getPins;
    vm.seconds = 30;
    vm.selectedBoard = '';


    function getToken() {

      dataService.getToken(vm.code)
        .then(function (response) {
          vm.accessToken = response.data.access_token;
          vm.getBoard();
        })
        .catch(function(err) {
          console.log('error: ' + err);
        });

    }


    function getBoard() {

      dataService.getBoard(vm.accessToken)
        .then(function (response) {
          vm.boardOptions = response.data.data;
        })
        .catch(function(err) {
          console.log('error: ' + err);
        });

    }


    function getPins() {

      dataService.getPins(vm.selectedBoard, vm.accessToken)
        .then(function (response) {
          dataService.pins = response.data.data;//wth?
          dataService.seconds = vm.seconds;//wth?
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

export default {RetrieveBoardsController};