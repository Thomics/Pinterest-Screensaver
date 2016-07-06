'use strict';

angular.module('Pinterest')
  .controller('signOnCtrl', ['signOnService', "$scope", function( signOnService, $scope){

    $scope.code = signOnService.checkAuthorization();


    if ( $scope.code ) {

      signOnService.getToken( $scope.code ).then( function( response ) {

        console.log(response.data);
        console.log(response.data.access_token);
        $scope.accessToken = response.data.access_token;

      });

    }

    if ( $scope.accessToken ) {

      signOnService.getBoard( $scope.accessToken).then( function( response ) {
        $scope.boardOptions = response.data;

        console.log('$scope.boardOptions');
        console.log($scope.boardOptions);

        //console.log('$scope.boardOptions.data');
        //console.log($scope.boardOptions.data);

        $scope.board = [{name: 'comics'}];

      });


    }

    //$scope.boardOptions = [{name : 'comics'}, {name : 'thomics'}];


    $scope.getPins = function( ) {
      return signOnService.getPins( $scope.board, $scope.code );
    };

  }]);
