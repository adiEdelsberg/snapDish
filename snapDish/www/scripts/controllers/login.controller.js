angular.module('app')

.controller('LoginCtrl', ['$scope', '$state', '$ionicLoading', 'user', function($scope, $state, $ionicLoading, user) {

	$scope.login = function () {

		$ionicLoading.show({
			template: '<i class="ion-loading-c"></i><br/>Logging...'
		});

		if (!window.cordova) {
			//var appId = prompt("Enter FB Application ID", "");
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

	$scope.showDialog = function () { 
		facebookConnectPlugin.showDialog( { method: "feed" }, 
			function (response) { alert(JSON.stringify(response)) },
			function (response) { alert(JSON.stringify(response)) });
	}
	
	$scope.apiTest = function () { 
		facebookConnectPlugin.api( "me/?fields=id,email", ["user_birthday"],
			function (response) { alert(JSON.stringify(response)) },
			function (response) { alert(JSON.stringify(response)) }); 
	}

	$scope.logPurchase = function () {
		facebookConnectPlugin.logPurchase(1.99, "USD",
			function (response) { alert(JSON.stringify(response)) },
			function (response) { alert(JSON.stringify(response)) });
	}

	$scope.logEvent = function () {
		// For more information on AppEvent param structure see
		// https://developers.facebook.com/docs/ios/app-events
		// https://developers.facebook.com/docs/android/app-events
		facebookConnectPlugin.logEvent("Purchased",
			{
				NumItems: 1,
				Currency: "USD",
				ContentType: "shoes",
				ContentID: "HDFU-8452"
			}, null,
			function (response) { alert(JSON.stringify(response)) },
			function (response) { alert(JSON.stringify(response)) });
	}

	$scope.getAccessToken = function () { 
		facebookConnectPlugin.getAccessToken( 
			function (response) { alert(JSON.stringify(response)) },
			function (response) { alert(JSON.stringify(response)) });
	}
	
	$scope.getStatus = function () { 
		facebookConnectPlugin.getLoginStatus( 
			function (response) { alert(JSON.stringify(response)) },
			function (response) { alert(JSON.stringify(response)) });
	}

	$scope.logout = function () { 
		facebookConnectPlugin.logout( 
			function (response) { alert(JSON.stringify(response)) },
			function (response) { alert(JSON.stringify(response)) });
	}

}])
