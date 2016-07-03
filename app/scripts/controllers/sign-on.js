'use strict';

angular.module('Pinterest')
  .controller('signOnCtrl', ["$scope", 'signOnService', function($scope, signOnService){

    $scope.code = signOnService.checkAuthorization();


    if ($scope.code) {
      signOnService.getBoards($scope.code);
    }


  }]);
