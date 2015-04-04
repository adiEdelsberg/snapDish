angular.module('app')

.controller('NewDishCtrl', ['$scope', '$location', '$cordovaCamera', '$ionicPlatform', '$rootScope', '$state', '$ionicHistory', '$ionicLoading', 'restaurant',
	function($scope, $location, $cordovaCamera, $ionicPlatform, $rootScope, $state, $ionicHistory, $ionicLoading, restaurant){

		$scope.dish = {};

		$ionicPlatform.ready(function () {

			$scope.takePicture = function takePicture(userSourchType) {

				var optionSourchType = userSourchType === 'camera' ? Camera.PictureSourceType.CAMERA : Camera.PictureSourceType.PHOTOLIBRARY;

				var options = {
					quality : 100,
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

				$ionicLoading.show({
					template: '<i class="ion-loading-c"></i><br/>Saving new dish...'
				});

				//base 64 string for web tests
				//'data:image/jpeg;base64,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'
				var _restaurant = restaurant.getCurrentRestaurant();

				var dish = {
					image: $scope.dish.base64_string,
					name: $scope.dish.name, 
					restaurant: _restaurant.id
				} 

				restaurant.setDish(dish).then(function(response){

					$ionicLoading.hide();

					//clears cache so restaurant controller will update the view
					$ionicHistory.clearCache();

					//the "reload: true" should refresh the controller, but it doesn't work
					$state.go('restaurant', { restaurantId: _restaurant.id }, { reload: true });

				}, function(error){

					alert(error);

				});

			}

		});
}]);