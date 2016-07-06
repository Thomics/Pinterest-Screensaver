'use strict';

angular.module('Pinterest')
  .controller('signOnCtrl', ['signOnService', "$scope", function( signOnService, $scope){

    $scope.code = signOnService.checkAuthorization();


    if ( $scope.code ) {

      signOnService.getToken( $scope.code ).then( function( response ) {

        console.log(response.data);
        console.log(response.data.access_token);
        $scope.accessToken = response.data.access_token;

      }).then( function( response ) {
        console.log( response );

          signOnService.getBoard( $scope.accessToken ).then( function( response ) {


          $scope.boardOptions = response.data.data;

          console.log('$scope.boardOptions');
          console.log($scope.boardOptions);

          $scope.board = [{name: 'Comics'}];

        })

      });

    }

    $scope.getPins = function() {

      signOnService.getPins($scope.board, $scope.code).then(function (response) {

        console.log(response);

        $scope.pins = response;
        console.log($scope.pins);
      });

    }

  }]);
