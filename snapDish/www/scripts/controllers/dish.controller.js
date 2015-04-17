angular.module('app')

.controller('DishCtrl', ['$scope', '$cordovaCamera', '$ionicPlatform', '$stateParams', '$ionicHistory', '$ionicPopup', '$ionicSlideBoxDelegate', 'server', 'dish',
	function($scope, $cordovaCamera, $ionicPlatform, $stateParams, $ionicHistory, $ionicPopup, $ionicSlideBoxDelegate, server, dish){

		var starsLastRate;

		function init(){

			//$scope.stars = [{},{},{},{},{}];

			$scope.dish = dish.getDish($stateParams.dishId).then(function(data){

				$scope.dish = data;

				$scope.starsRate = $scope.dish.rating || 0;

				$ionicSlideBoxDelegate.update();

			},function(error){

			});

		}

		init();

		$ionicPlatform.ready(function () {


			// this is temporary...
			$scope.setRating = function() {

				$ionicHistory.clearCache();

				dish.setRating($scope.dish.id, $scope.starsRate);

			}

			$scope.setLike = function(dish) {
				dish.like = !dish.like;
			}


			$scope.setStars = function(rate) {
				console.log(rate);

				$scope.starsRate = rate+1;

				// a confirm dialog
				var confirmPopup = $ionicPopup.confirm({

					title: 'Set Dish Rating',
					template: 'Are you sure you want to set this dish rate?'

				});

				confirmPopup.then(function(response) {

					if(response) {
						$scope.setRating();
					} else {
						$scope.starsRate = $scope.dish.rating;
					}

				});
			}

		});
}]);
