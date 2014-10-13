var myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope) {
  $scope.submitForm = function(isValid) {
    if(isValid) {
      alert('You entered all of the correct information! Congrats!')
    }
  };
})