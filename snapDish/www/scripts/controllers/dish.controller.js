angular.module('app')

.controller('DishCtrl', ['$scope', '$location', 'server', '$cordovaCamera', '$ionicPlatform', '$rootScope',
	function($scope, $location, server, $cordovaCamera, $ionicPlatform, $rootScope){
		$scope.dish = {};
		$ionicPlatform.ready(function () {
			$scope.takePicture = function(userSourchType) {
				var optionSourchType = userSourchType === 'camera' ? Camera.PictureSourceType.CAMERA : Camera.PictureSourceType.PHOTOLIBRARY
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
					$scope.dish.url = "data:image/jpeg;base64," + imageData;

				// An error occured. Show a message to the user
				}, function(err) {

				});
			}

			$scope.save = function save() {
				//$scope.dishes.push($scope.dish);
			}
		});
}]);