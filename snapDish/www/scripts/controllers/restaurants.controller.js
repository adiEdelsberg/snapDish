angular.module('app')

.controller('RestaurantsCtrl', ['$scope', '$location', '$ionicLoading', 'restaurants', 'user', function($scope, $location, $ionicLoading, restaurants, user){

	$scope.getUser = function(){
		alert(JSON.stringify(user.getCurrentUser()));
	};

	$ionicLoading.show({
		template: '<i class="ion-loading-c"></i><br/>Loading restaurants...'
	});

	$scope.query = '';

	restaurants.getRestaurants().then(function(response){

	  $scope.restaurants = response.data;

	  $ionicLoading.hide();

	});

	$scope.search = function (row) {

		return (angular.lowercase(row.NAME).indexOf($scope.query || '') !== -1 );

	};

	$scope.setList = function (query) {

		$scope.query = query;
		
	};

}]);