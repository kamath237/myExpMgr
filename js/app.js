/**
* airline Moduleconfig(airlineRouter);
*
* Description
*/
var app = angular.module('myExpMgr', ["firebase"]).config(myExpMgrRouter);
 

app.factory("heads", ["$firebaseArray",
  function($firebaseArray) {
    var ref = new Firebase("https://dazzling-inferno-6139.firebaseio.com/HEADS");
	return $firebaseArray(ref);
  }
]);



function myExpMgrRouter ($routeProvider) {
	$routeProvider 
		.when('/',
				{ templateUrl : 'partials/entry.html', 
					controller:'EntryCtrl'})
		.when('/expenses',
				{templateUrl : 'partials/expenses.html', 
					controller:'ExpensesCtrl'})
		.when('/reports',
				{templateUrl : 'partials/reports.html', 
					controller:'ReportsCtrl'})
		;
}

