angular.module('app')

.controller('RestaurantCtrl', ['$scope', '$stateParams', '$ionicLoading', 'restaurant',
function($scope, $stateParams, $ionicLoading, restaurant) {

	$ionicLoading.show({
		template: '<i class="ion-loading-c"></i><br/>Loading dishes...'
	});

	$scope.dishQuery = '';

	$scope.search = function (row) {

		return (angular.lowercase(row.NAME).indexOf($scope.dishQuery || '') !== -1 );

	};

	$scope.setList = function (dishQuery) {

		$scope.dishQuery = dishQuery;

	};

	restaurant.getRestaurant($stateParams.restaurantId).then(function(response){
		
		$scope.restaurant = response;

		$ionicLoading.hide();

	}, function(error){

		console.log(error);

	});


}]);