function EntryCtrl ($scope) {
  $scope.setActive('entry');

  $scope.expEntry = {
                value: "",
                type: "",
                particulars : ""
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

  $scope.setEntry = function(code){
    if (code == '-') {
      $scope.expEntry.value = $scope.expEntry.value.substring(0,$scope.expEntry.value.length-1)
    }else{ 
      $scope.expEntry.value = $scope.expEntry.value+code;
    };
  };

  $scope.doEntry = function(value, crdr){
      if (crdr == '-') {
        $scope.balance.currentBalance = $scope.balance.currentBalance - value.value;
      }else{
        $scope.balance.currentBalance = +$scope.balance.currentBalance + +value.value;
      };  
      value.currentBalance = $scope.balance.currentBalance;
      $scope.entries.push(value);


      $scope.expEntry = {
                value: "",
                type: "",
                particulars : ""
            };   
  }

    

    $scope.expType = [{
                id: 1,
                type: "HOMEEXP",
                name: "Home Expenses"
            }, {
                id: 2,
                type: "TRAVEL",
                name: "Travel expenses"
            }, {
                id: 3,
                type: "EAT",
                name: "Eat Out expenses"
            }, {
                id: 4,
                type: "MEDICINE",
                name: "Medical expenses"
            }];
        
  //   $scope.currentAirport = null;
  // $scope.setAirport = function(code){
  //   $scope.sidebarURL = 'partials/airport.html';
  //   $scope.currentAirport = Airport.get({ airportCode : code});
  // };

  // $scope.editAirport = null;
  // $scope.editCurrentAirport = function(code){
  //   // $scope.currentAirport = null;
  //   $scope.sidebarURL = 'partials/editAirport.html';
  //   $scope.editAirport = $scope.airports[code];
  // };

  // $scope.airports = Airport.query();
}
