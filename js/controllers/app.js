function AppCtrl ($scope) {
  $scope.setActive = function(type){
    $scope.entryActive = '';
    $scope.expensesActive = '';
    $scope.reportsActive = '';
    $scope[type+'Active']='active';
  }

}