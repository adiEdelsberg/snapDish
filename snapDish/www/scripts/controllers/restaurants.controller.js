angular.module('app')

.controller('RestaurantsCtrl', ['$scope', '$location', 'server', function($scope, $location, server){

	$scope.query = '';

	server.getRestaurants().then(function(response){
	  $scope.restaurants = response.data;
	});

	$scope.search = function (row) {
		return (angular.lowercase(row.NAME).indexOf($scope.query || '') !== -1 );
	};
	$scope.setList = function (query) {
		$scope.query = query;
	};

}]);