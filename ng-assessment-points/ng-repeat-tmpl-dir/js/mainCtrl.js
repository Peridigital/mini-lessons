angular.module('app').controller('mainCtrl', function($scope, mainService) {

    $scope.students = mainService.getStudentData();

    $scope.show = true;

})
