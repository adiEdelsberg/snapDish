angular.module('controllers', ['services'])

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

.controller('RestaurantsCtrl', ['$scope', 'restaurants', function($scope, restaurants){
    $scope.query = '';
    restaurants.getData().then(function(response){
      $scope.restaurants = response.data;
    });

    $scope.search = function (row) {
       console.log('b');
        return (angular.lowercase(row.NAME).indexOf($scope.query || '') !== -1 );
    };
    $scope.setList = function (query) {
        $scope.query = query;
    };

}]);
