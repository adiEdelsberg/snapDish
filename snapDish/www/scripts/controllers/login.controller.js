angular.module('app')

.controller('LoginCtrl', ['$scope', '$location', 'user', function($scope, $location, user) {

$scope.fbLogin = function() {

openFB.login( function(response) {

	openFB.api({
		path: '/me',
        params: {fields: 'id, name, email, picture'},
        success: function(fbUser) {
            
        	user.setCurrentUser(fbUser);
 
        },
        error: function(error) {

            alert('Facebook error: ' + error.error_description);

        }
    });

  if (response.status === 'connected') {

    $scope.$apply(function(){

     $location.path('restaurants');

    });

  } else {

    alert('Facebook login failed');

  }},{ scope: 'email' });

}

}])
