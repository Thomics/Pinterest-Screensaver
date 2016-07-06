'use strict';

angular.module('Pinterest')
  .controller('signOnCtrl', ['signOnService', "$scope", function( signOnService, $scope){

    $scope.code = signOnService.checkAuthorization();


    if ( $scope.code ) {

      $scope.boardOptions  = signOnService.getToken( $scope.code );

      console.log('$scope.boardOptions');
      console.log($scope.boardOptions);

      console.log('$scope.boardOptions.data');
      console.log($scope.boardOptions.data);

      //$scope.board = [$scope.boardOptions[0]];

    }

    //$scope.boardOptions = [{name : 'comics'}, {name : 'thomics'}];
    //$scope.board = [{name: 'comics'}];


    $scope.getPins = function( ) {
      return signOnService.getPins( $scope.board, $scope.code );
    };

  }]);
