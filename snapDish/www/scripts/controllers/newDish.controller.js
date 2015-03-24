angular.module('app')

.controller('NewDishCtrl', ['$scope', '$location', '$cordovaCamera', '$ionicPlatform', '$rootScope', 'restaurant', 'server',
	function($scope, $location, $cordovaCamera, $ionicPlatform, $rootScope, restaurant, server){
		$scope.dish = {};

		$ionicPlatform.ready(function () {

			$scope.takePicture = function takePicture(userSourchType) {

				var optionSourchType = userSourchType === 'camera' ? Camera.PictureSourceType.CAMERA : Camera.PictureSourceType.PHOTOLIBRARY;

				var options = {
					quality : 75,
					destinationType : Camera.DestinationType.DATA_URL,
					sourceType : optionSourchType,
					allowEdit : true,
					encodingType: Camera.EncodingType.JPEG,
					targetWidth: 300,
					targetHeight: 300,
					popoverOptions: CameraPopoverOptions,
					saveToPhotoAlbum: false
				};

				$cordovaCamera.getPicture(options).then(function(imageData) {

					$scope.dish.base64_string = "data:image/jpeg;base64," + imageData;

				}, function(error) {

					alert(error);

				});

			}

			$scope.save = function save() {

				var restaurantId = restaurant.getCurrentRestaurant()

				var dish = {
					image: $scope.dish.base64_string,
					name: $scope.dish.name, 
					restaurant: restaurantId
				}

				//$scope.dishes.push($scope.dish);

				server.setDish(dish).then(function(response){

					$location.path('restaurant/'+restaurantId);

				}, function(error){

					console.log(response);

				});

			}

		});
}]);