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

.controller('RestaurantsCtrl', ['$scope', 'server', function($scope, server){

  server.getRestaurants().then(function(response){
    $scope.restaurants = response.data;
  });

  $scope.goToDish = function(id){

    server.getDishes(id).then(function(response){

      console.log(response);
     // $location.path('dishes');

    },function(error){



    });
  };

}])

.controller('DishesCtrl', ['$scope', 'server', function($scope, server){



}]);