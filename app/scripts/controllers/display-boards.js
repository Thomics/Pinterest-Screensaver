'use strict';

angular.module('Pinterest')
  .controller('displayBoardCtrl', [ 'signOnService', "$scope", '$location', function( signOnService, $scope, $location){

    console.log('hi in new ctrl');
    console.log(signOnService.pins);





  }]);
