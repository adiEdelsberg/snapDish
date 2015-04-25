angular.module('app')

.controller('LoginCtrl', ['$scope', '$state', '$ionicLoading', 'user', function($scope, $state, $ionicLoading, user) {

	$scope.login = function () {

		$ionicLoading.show({
			template: '<i class="ion-loading-c"></i><br/>Login...'
		});

		if (!window.cordova) {
			var appId = prompt("Enter FB Application ID", "");
			facebookConnectPlugin.browserInit("1625788814323152");
		}
		facebookConnectPlugin.login( ["email"],
			function (response) { 

				$ionicLoading.hide();

				$state.go('restaurants'); 

			},
			function (response) { 

				alert(JSON.stringify(response));

			});

	}

}])
