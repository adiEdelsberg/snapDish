angular.module('app')

.controller('LoginCtrl', ['$scope', '$state', '$ionicLoading', 'user', function($scope, $state, $ionicLoading, user) {


	function statusChangeCallback(response) {

		//console.log(response);
		// The response object is returned with a status field that lets the
		// app know the current login status of the person.
		// Full docs on the response object can be found in the documentation
		// for FB.getLoginStatus().
		if (response.status === 'connected') {
		  // Logged into your app and Facebook.
		  testAPI();
		} else if (response.status === 'not_authorized') {
		  // The person is logged into Facebook, but not your app.
		  alert('The person is logged into Facebook, but not your app');
		} else {
		  alert('The person is not logged into Facebook, so we\'re not sure if they are logged into this app or not.');
		}
	}

	$scope.login = function () {

		$ionicLoading.show({
			template: '<i class="ion-loading-c"></i><br/>Logging...'
		});

/*		if (!window.cordova) {
			//var appId = prompt("Enter FB Application ID", "");
			facebookConnectPlugin.browserInit("1625788814323152");
		}*/
		facebookConnectPlugin.login( ["email"],
			function (response) { 

				statusChangeCallback(response);

				$ionicLoading.hide(); 

			},
			function (response) { 

				alert(JSON.stringify(response));

			});

	}
	
	function testAPI() { 


		facebookConnectPlugin.api( "me/", [],
                    function (response) { 
                    	user.setCurrentUser(response);
    					$state.go('restaurants'); 
                    },
                    function (response) { 
                    	alert(JSON.stringify(response)) 
                    }); 

/*	    facebookConnectPlugin.api('/me', function(response) {

	      response.picture = 'http://graph.facebook.com/'+response.id+'/picture';
	      
	      user.setCurrentUser(response);
	    	
	    	//setTimeout(function(){

				$state.go('restaurants');

	    	//},500); 

	    }, function(error){

	    	alert(JSON.stringify(error));

	    });*/

	}

/*
	$scope.showDialog = function () { 
		facebookConnectPlugin.showDialog( { method: "feed" }, 
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
	}*/

}])
