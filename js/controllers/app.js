function AppCtrl ($scope, $firebaseArray, $firebaseObject) {
  $scope.setActive = function(type){
    $scope.entryActive = '';
    $scope.expensesActive = '';
    $scope.reportsActive = '';
    $scope[type+'Active']='active';
  }
// $scope.currentBalance = '1550';
var curBalRef = new Firebase("https://dazzling-inferno-6139.firebaseio.com/CURBAL");
 // download the data into a local object
   var syncObject = $firebaseObject(curBalRef);
  // $scope.currentBalance = $firebaseObject(curBalRef);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "currentBalance");
  
  $scope.entries = [
  ];




var transactionsRef = new Firebase("https://dazzling-inferno-6139.firebaseio.com/TRANSACTIONS");
  // download the data into a local object
  
  $scope.transactions = $firebaseArray(transactionsRef);


  var expTypeRef = new Firebase("https://dazzling-inferno-6139.firebaseio.com/HEADS");
  // download the data into a local object
  // $scope.expType = $firebaseArray(expTypeRef);

  expTypeRef.on("value", function(snapshot) {
    // This isn't going to show up in the DOM immediately, because
    // Angular does not know we have changed this in memory.
    // $scope.data = snapshot.val();

    // To fix this, we can use $scope.$apply() to notify Angular that a change occurred.
    $scope.$apply(function() {
      $scope.expType = snapshot.val();
    });
  });
}