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

    

    // $scope.expType = [{
    //             id: 1,
    //             type: "HOMEEXP",
    //             name: "Home Expenses"
    //         }, {
    //             id: 2,
    //             type: "TRAVEL",
    //             name: "Travel expenses"
    //         }, {
    //             id: 3,
    //             type: "EAT",
    //             name: "Eat Out expenses"
    //         }, {
    //             id: 4,
    //             type: "MEDICINE",
    //             name: "Medical expenses"
    //         }];
        
  
}
