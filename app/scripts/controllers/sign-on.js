'use strict';

angular.module('pinterest')
  .controller('signOnCtrl', ['signOnService', "$scope", '$location',
    function( signOnService, $scope, $location){

      $scope.code = signOnService.checkAuthorization();

      $scope.selectedBoard = '';
      $scope.seconds = 20;

      console.log(signOnService.code);


      if ( $scope.code || signOnService.code ) {

        signOnService.getToken( $scope.code )
          .then( function( response ) {

            $scope.accessToken = response.data.access_token;

            signOnService.getBoard( $scope.accessToken )
              .then( function( response ) {

                $scope.boardOptions = response.data.data;

            })
        });
      }

      $scope.getPins = function() {

        signOnService.getPins($scope.selectedBoard, $scope.accessToken)
          .then(function (response) {

            signOnService.pins = response.data.data;
            signOnService.seconds = $scope.seconds;
            $location.url('/display-board');

        });

      }

      $scope.$on('$routeChangeSuccess', function() {
        console.log('route success');
      });


    }]);
