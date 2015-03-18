angular.module('app')

.controller('RestaurantsCtrl', ['$scope', 'server', function($scope, server){

  server.getRestaurants().then(function(response){
    $scope.restaurants = response.data;
  }) 


    $scope.query = '';
    server.getRestaurants().then(function(response){
      $scope.restaurants = response.data;
    });

    $scope.search = function (row) {
        return (angular.lowercase(row.NAME).indexOf($scope.query || '') !== -1 );
    };
    $scope.setList = function (query) {
        $scope.query = query;
    };


  $scope.goToDish = function(id){

    server.getDishes(id).then(function(response){

      console.log(response);

    },function(error){



    });
  };

}]);