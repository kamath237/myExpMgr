function EntryCtrl ($scope, $firebaseArray) {
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

  
  

  // $scope.setEntry = function(code){
  //   if (code == '-') {
  //     $scope.entryval = $scope.entryval.substring(0,$scope.entryval.length-1)
  //   }else{ 
  //     $scope.entryval = $scope.entryval+code;
  //   };
  // };

  // $scope.doEntry = function(value){
  //   $scope.entry = value;
  //   $scope.entryval='';
  // }


  $scope.doEntry = function(value, crdr){
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
