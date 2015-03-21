angular.module('app')

.controller('RestaurantCtrl', ['$scope', '$stateParams', 'restaurant', function($scope, $stateParams, restaurant){

	$scope.dishes = restaurant.getDishes($stateParams.restaurantId).then(function(response){

		$scope.dishes = response;

	}, function(error){

		console.log(error);

	});	

}]);