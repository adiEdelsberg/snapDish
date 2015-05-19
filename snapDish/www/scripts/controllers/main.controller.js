angular.module('app')

.controller('MainCtrl', ['$scope', '$rootScope', '$location', '$ionicLoading',
function($scope, $rootScope, $location ,$ionicLoading) {
	$scope.stars = [{},{},{},{},{}];

	$scope.buttonMenu = function () {
		alert('menu')
	};

	$rootScope.showNavBar = true;
/*	$rootScope.$on("$locationChangeSuccess", function() {

	});*/


}]);