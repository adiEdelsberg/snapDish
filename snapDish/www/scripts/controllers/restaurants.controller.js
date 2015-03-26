angular.module('app')

.controller('RestaurantsCtrl', ['$scope', '$location', 'restaurants', function($scope, $location, restaurants){

	$scope.query = '';

	restaurants.getRestaurants().then(function(response){

	  $scope.restaurants = response.data;

	});

	$scope.search = function (row) {

		return (angular.lowercase(row.NAME).indexOf($scope.query || '') !== -1 );

	};

	$scope.setList = function (query) {

		$scope.query = query;
		
	};

}]);