'use strict';

angular.module('pinterest')
  .controller('signOnCtrl', ['signOnService', "$scope", '$location',
    function( signOnService, $scope, $location){

      $scope.code = signOnService.checkAuthorization();

      $scope.selectedBoard = '';

      $scope.seconds = 20;



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

          //signOnService.storePins(response.data);

          //$scope.pins = response.data;

          //displayBoardService.storePins(response.data);

          signOnService.pins = response.data.data;

          signOnService.seconds = $scope.seconds;

          console.log(signOnService.pins);

          $location.url('/display-board');

        });

      }




    }]);
