angular.module('app')

.controller('IndexCtrl', ['$scope', '$ionicPlatform',
	function($scope, $ionicPlatform){
	
		$ionicPlatform.ready(function () {

alert('ready');

		});
}]);