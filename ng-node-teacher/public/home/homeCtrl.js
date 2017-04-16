angular.module('app')
.controller('homeCtrl', function($scope, mainService) {

$scope.signIn = function(username, password) {
  console.log(username, password);
  mainService.signIn(username,password).then(function(response) {

    $scope.person = response
  })
}






})
