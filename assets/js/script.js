var alertApp = angular.module('myAlert', []);
alertApp.controller('alertCtrl', ['$scope', '$window' function($scope, $window) {
  $scope.message = 'Bonjour!';
  $scope.displayAlert = function(messageAlert) {
    $window.alert(messageAlert);
  };
}]);
