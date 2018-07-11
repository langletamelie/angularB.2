var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope, $window) {
  $scope.displayAlert = function(message) {
    $window.alert("Bonjour");
  };
});
