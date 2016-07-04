'use strict';

angular.module('Pinterest')
  .controller('signOnCtrl', ['signOnService', "$scope", function( signOnService, $scope){

    console.log(signOnService);
    $scope.code = signOnService.checkAuthorization();
    console.log($scope.code + " coderrr");


    //console.log(signOnService);


    if ($scope.code) {
      console.log($scope.code + " This is scope code");

      $scope.boards  = signOnService.getToken($scope.code);
    }


  }]);
