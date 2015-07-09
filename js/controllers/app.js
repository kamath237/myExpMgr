function AppCtrl ($scope) {
  $scope.setActive = function(type){
    $scope.entryActive = '';
    $scope.expensesActive = '';
    $scope.reportsActive = '';
    $scope[type+'Active']='active';
  }
$scope.entries = [
  ];

$scope.balance = {
openingBalance :1000,
currentBalance :1000


};
}