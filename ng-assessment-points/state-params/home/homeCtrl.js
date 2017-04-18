angular.module('app')
.controller('homeCtrl', function( $scope, mainService ) {

  $scope.users = mainService.getUserData();





})
