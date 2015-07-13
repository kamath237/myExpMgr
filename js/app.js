/**
* airline Moduleconfig(airlineRouter);
*
* Description
*/
angular.module('myExpMgr', ["firebase"]).config(myExpMgrRouter);

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

