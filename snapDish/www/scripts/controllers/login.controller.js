angular.module('app')

.controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {

  	$scope.fbLogin = function() {

     openFB.login(
        function(response) {
            if (response.status === 'connected') {
                 $scope.$apply(function(){
					$location.path('restaurants');
				});

            } else {
                alert('Facebook login failed');
            }
        },
        {scope: 'email'});
}

}])