function AppCtrl ($scope, $firebaseArray, $firebaseObject, heads) {
  $scope.setActive = function(type){
    $scope.entryActive = '';
    $scope.expensesActive = '';
    $scope.reportsActive = '';
    $scope[type+'Active']='active';
  }


var connectedRef = new Firebase("https://dazzling-inferno-6139.firebaseio.com/.info/connected");
connectedRef.on("value", function(snap) {
  if (snap.val() === true) {
    $scope.connectionStatus="connected";
  } else {
    $scope.connectionStatus="not connected";
  }
});


  var curBalRef = new Firebase("https://dazzling-inferno-6139.firebaseio.com/CURBAL");
  // download the data into a local object
  var syncCurBalObject = $firebaseObject(curBalRef);
  // synchronize the object with a three-way data binding
  syncCurBalObject.$bindTo($scope, "currentBalance");
  
  curBalRef.on("value", function(snapshot) {
    // This isn't going to show up in the DOM immediately, because
    // Angular does not know we have changed this in memory.
    // To fix this, we can use $scope.$apply() to notify Angular that a change occurred.
    $scope.$apply(function() {
      $scope.currentBalance = snapshot.val();
    });
  });

  $scope.entries = [];




var transactionsRef = new Firebase("https://dazzling-inferno-6139.firebaseio.com/TRANSACTIONS");
  // download the data into a local object
  
  $scope.transactions = $firebaseArray(transactionsRef);

  $scope.expType = heads;


  // var expTypeRef = new Firebase("https://dazzling-inferno-6139.firebaseio.com/HEADS");
  // // download the data into a local object
  //  // $scope.expType = $firebaseArray(expTypeRef);

  // expTypeRef.on("value", function(snapshot) {
  //   // This isn't going to show up in the DOM immediately, because
  //   // Angular does not know we have changed this in memory.
  //   // $scope.data = snapshot.val();

  //   // To fix this, we can use $scope.$apply() to notify Angular that a change occurred.
  //   $scope.$apply(function() {
  //     $scope.expType = snapshot.val();
  //   });
  // });
}