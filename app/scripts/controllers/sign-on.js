'use strict';

angular.module('Pinterest')
  .controller('signOnCtrl', ['signOnService', "$scope", function( signOnService, $scope){

    console.log(signOnService);
    $scope.code = signOnService.checkAuthorization();
    console.log($scope.code + " coderrr");


    //console.log(signOnService);


    if ($scope.code) {
      console.log($scope.code + " This is scope code");

      $scope.boardOptions  = signOnService.getToken($scope.code);

      $scope.board = [$scope.boardOptions[0]];

    }

    //$scope.boardOptions = [{name : 'comics'}, {name : 'thomics'}];
    //$scope.board = [{name: 'comics'}];


    $scope.getPins = function( ) {
      return signOnService.getPins( $scope.board, $scope.code );
    };

  }]);
