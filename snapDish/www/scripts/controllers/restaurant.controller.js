angular.module('app')

.controller('RestaurantCtrl', ['$scope', '$stateParams', 'restaurant', function($scope, $stateParams, restaurant){

	$scope.dishes = restaurant.getDishes($stateParams.restaurantId).then(function(response){

		console.log(typeof response);
		$scope.dishes = response;

	}, function(error){

		console.log(error);

	});	

}]);