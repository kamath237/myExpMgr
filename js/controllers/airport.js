function AirportCtrl ($scope, $routeParams, Airport) {
	$scope.currentAirport = Airport.get({ airportCode : $routeParams.airportCode});
// $scope.currentAirport2 = Airport.get({ airportCode2 : $routeParams.airportCode2});

}
