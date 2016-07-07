'use strict';

angular.module('Pinterest')
  .controller('signOnCtrl', ['signOnService', "$scope", function( signOnService, $scope){

    $scope.code = signOnService.checkAuthorization();

    $scope.selectedBoard = '';




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


        })

      });

    }

    $scope.getPins = function() {

      console.log($scope.selectedBoard);
      signOnService.getPins($scope.selectedBoard, $scope.accessToken).then(function (response) {

        console.log(response);

        $scope.pins = response;
        console.log($scope.pins);
      }).then(function( data ) {

        console.log(data);

        signOnService.displayPins(data.data);

      });

    }

  }]);
