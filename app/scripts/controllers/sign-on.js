'use strict';

angular.module('Pinterest')
  .controller('signOnCtrl', ['signOnService', "$scope", function( signOnService, $scope){

    $scope.code = signOnService.checkAuthorization();


    if ( $scope.code ) {

      $scope.accessToken  = signOnService.getToken( $scope.code );

      console.log('$scope.boardOptions');
      console.log($scope.boardOptions);

      console.log('$scope.boardOptions.data');
      console.log($scope.boardOptions.data);

    }

    if ( $scope.accessToken ) {
      $scope.boardOptions = signOnService.getBoard($scope.accessToken);
      $scope.board = [{name: 'comics'}];
    }

    //$scope.boardOptions = [{name : 'comics'}, {name : 'thomics'}];


    $scope.getPins = function( ) {
      return signOnService.getPins( $scope.board, $scope.code );
    };

  }]);
