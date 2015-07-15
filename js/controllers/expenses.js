function ExpensesCtrl ($scope, $firebaseArray) {
  $scope.setActive('expenses');

var ref = new Firebase("https://dazzling-inferno-6139.firebaseio.com/TRANSACTIONS");
var list = $firebaseArray(ref);
  $scope.deleteEntry = function(key){
  
	var item = $scope.transactions[key];
	$scope.transactions.$remove(item).then(function(ref) {
  	ref.key() === item.$id; // true
	});
}

 $scope.edit = false;
$scope.editEntry = function(){
  if(Boolean($scope.edit) === false){ 
    $scope.edit = true;
  }else{
    $scope.edit = false;
  }
   
}


$scope.saveEntry = function(item){
  $scope.transactions.$save(item);
}

  app.filter("myfilter", function() {
  return function(items, from, to) {
        var df = parseDate(from);
        var dt = parseDate(to);
        var arrayToReturn = [];        
        // for (var i=0; i<items.length; i++){
        //     var tf = new Date(items[i].date1 * 1000),
        //         tt = new Date(items[i].date2 * 1000);
        //     if (tf > df && tt < dt)  {
        //         arrayToReturn.push(items[i]);
        //     }
        // }
        
        return arrayToReturn;
  };
});
}
