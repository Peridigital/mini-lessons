angular.module('app')
.controller('mainCtrl', function($scope, mainService) {

$scope.getUsers = function() {
  mainService.getUsers().then(function( response ) {
    $scope.users = response;
  })
}

$scope.getOneUser = function( id ) {
  mainService.getOneUser(id).then(function( response ) {
    $scope.users = response;
  })
}

$scope.getAuto = function(name) {
  mainService.getAuto(name).then(function(response) {
    $scope.auto = response;
  })
}

$scope.clear = function(param) {
  console.log(param);
  if (param === 'people') {
    $scope.users = [];
  } else if (param === 'car')
    $scope.auto = {};
}



})
