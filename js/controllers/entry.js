function EntryCtrl ($scope, $firebaseArray, $firebaseObject, $firebase) {
  
  var expTypeRef = new Firebase("https://dazzling-inferno-6139.firebaseio.com/HEADS");
  var syncObject = $firebaseObject(expTypeRef);
  syncObject.$bindTo($scope, "expTypeHeads");
 // var expTypeRef = new Firebase("https://dazzling-inferno-6139.firebaseio.com/HEADS");
  // // download the data into a local object
  //  // $scope.expType = $firebaseArray(expTypeRef);

  expTypeRef.on("value", function(snapshot) {
    // This isn't going to show up in the DOM immediately, because
    // Angular does not know we have changed this in memory.
    // To fix this, we can use $scope.$apply() to notify Angular that a change occurred.
    $scope.$apply(function() {
      $scope.expTypeHeads = snapshot.val();
    });
  });


  $scope.setActive('entry');

  $scope.expEntry = {
                balance: "",
                credit:"",
                date : "",
                debit:"",
                particulars : "",
                type: "",
                value:""
            };

  
  $scope.doEntry = function(value, crdr){
    if($scope.currentBalance.value == null){
      $scope.currentBalance.value = +0;
    }
      if (crdr == '-') {
        $scope.currentBalance.value = $scope.currentBalance.value - value.value;
        value.debit = value.value;
      }else{
        $scope.currentBalance.value = +$scope.currentBalance.value + +value.value;
        value.credit = value.value;
      };  
      value.balance = $scope.currentBalance;
      $scope.entries.push(value);
      $scope.transactions.$add(value);

      $scope.expEntry = {
                value: "",
                type: "",
                particulars : ""
            };   
  }

    

    //ADD NEW CATEGORY
    $scope.addNew = false;
    $scope.checkAddNew = function() {
    if($scope.expEntry.type === "Add New") {
      $scope.addNew = true;
    } else {
      $scope.addNew = false;
    }
  }
  
  // called on click of add to add the new value to db
  $scope.addToDropDown = function(label, value) {
    var ref = new Firebase("https://dazzling-inferno-6139.firebaseio.com/HEADS");
    // download the data into a local object
    $scope.headlist = $firebaseArray(ref);
    $scope.expType.$add({name:label, type:value});
            $scope.addNew = false;
      $scope.expEntry.type = value;

    
     // $scope.newOption = {name:label, type:value};
    // $scope.myNumbers.push($scope.newOption);
    // $scope.expType.$add({name:label, type:value});
  }
        
  
}
