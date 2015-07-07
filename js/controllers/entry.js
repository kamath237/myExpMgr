function EntryCtrl ($scope) {
  $scope.setActive('entry');
  $scope.entryval='';
  $scope.setEntry = function(code){
    // $scope.sidebarURL = 'partials/airport.html';
    $scope.entryval = $scope.entryval+code;
   
  };

  $scope.doEntry = function(value){
    $scope.entry = value;
    $scope.entryval='';
  }
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
