angular.module('app')

.controller('NewDishCtrl', ['$scope', '$location', '$cordovaCamera', '$ionicPlatform', '$rootScope', '$state', '$stateParams', '$ionicHistory', '$ionicLoading', 'restaurant', 'dish',
	function($scope, $location, $cordovaCamera, $ionicPlatform, $rootScope, $state, $stateParams, $ionicHistory, $ionicLoading, restaurant, dish){
		var dishId = $stateParams.dishId;
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
					saveToPhotoAlbum: true
				};

				$cordovaCamera.getPicture(options).then(function(imageData) {

					$scope.dish.base64_string = "data:image/jpeg;base64," + imageData;

				}, function(error) {

					alert(error);

				});

			}

			$scope.save = function save(type) {

				$ionicLoading.show({
					template: '<i class="ion-loading-c"></i><br/>Saving new dish...'
				});

				//base 64 string for web tests
				//'data:image/jpeg;base64,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'
				var _restaurant = restaurant.getCurrentRestaurant() || {};
				var _dish = dish.getCurrentDish() || {};

				var objToSave = {
					image: $scope.dish.base64_string,
					name: $scope.dish.name || '',
					id: $stateParams.dishId || _dish.id,
					restaurant: _restaurant.id || ''
				}

				if (type === 'image') {
					dish.setDishImage(objToSave).then(function(response){

						$ionicLoading.hide();

						//clears cache so restaurant controller will update the view
						$ionicHistory.clearCache();

						//the "reload: true" should refresh the controller, but it doesn't work
						$state.go('dish', { dishId: _dish.id }, { reload: true });

					}, function(error){

						alert(error);

					});
				} else {
					restaurant.setDish(objToSave).then(function(response){

						$ionicLoading.hide();

						//clears cache so restaurant controller will update the view
						$ionicHistory.clearCache();

						//the "reload: true" should refresh the controller, but it doesn't work
						$state.go('restaurant', { restaurantId: _restaurant.id }, { reload: true });

					}, function(error){

						alert(error);

					});
				}


			}

		});
}]);