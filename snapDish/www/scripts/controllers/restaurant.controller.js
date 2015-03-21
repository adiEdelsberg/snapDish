angular.module('app')

.controller('RestaurantCtrl', ['$scope', '$stateParams', 'restaurant', '$rootScope',
	function($scope, $stateParams, restaurant, $rootScope){

	restaurant.getDishes($stateParams.restaurantId).then(function(response){

		$scope.dishes = response;

	}, function(error){

		console.log(error);

	});

}]);