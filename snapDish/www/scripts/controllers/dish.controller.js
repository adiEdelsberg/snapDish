angular.module('app')

.controller('DishCtrl', ['$scope', '$cordovaCamera', '$ionicPlatform', '$stateParams', '$ionicHistory', '$ionicPopup', 'server', 'dish',
	function($scope, $cordovaCamera, $ionicPlatform, $stateParams, $ionicHistory, $ionicPopup, server, dish){
		var starsLastRate;
		$scope.dish = dish.getDish($stateParams.dishId);
		$scope.dish = {
			ID: $stateParams.dishId
		};

		$scope.stars = [{},{},{},{},{}];
		$scope.starsRate = 4;
		$ionicPlatform.ready(function () {


			//this is temporary..
			$scope.setRating = function() {

				$ionicHistory.clearCache();

				//dish.setRating($stateParams.dishId, $scope.dish.rating);
				dish.setRating($stateParams.dishId, $scope.starsRate);

			}

			$scope.setStars = function(rate) {
				starsLastRate = angular.copy($scope.starsRate);
				$scope.starsRate = rate+1;

				 // A confirm dialog
				var confirmPopup = $ionicPopup.confirm({
					title: 'Set Dish Rating',
					template: 'Are you sure you want to set this dish rate?'
				});
				confirmPopup.then(function(res) {
					if(res) {
						$scope.setRating();
					} else {
						$scope.starsRate = starsLastRate;
					}
				});
			}

		});
}]);
