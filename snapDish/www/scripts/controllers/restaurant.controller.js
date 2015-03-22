angular.module('app')

.controller('RestaurantCtrl', ['$scope', '$stateParams', 'restaurant', '$rootScope',
function($scope, $stateParams, restaurant, $rootScope) {

	$scope.dishQuery = '';

	$scope.search = function (row) {
		return (angular.lowercase(row.NAME).indexOf($scope.dishQuery || '') !== -1 );
	};
	$scope.setList = function (dishQuery) {
		$scope.dishQuery = dishQuery;
	};

	restaurant.getDishes($stateParams.restaurantId).then(function(response){

		$scope.dishes = response;

	}, function(error){

		console.log(error);

	});

}]);