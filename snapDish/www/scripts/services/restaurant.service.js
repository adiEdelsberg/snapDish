angular.module('app')

.factory('restaurant', ['$q', 'server','restaurants', function($q, server, restaurants) {

    //cached restaurants
    var currentRestaurant;

    var methods = {

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      getRestaurant: function(restaurantId) {

        if(currentRestaurant){

          return currentRestaurant;         

        }else{

          return server.getRestaurant(restaurantId);

        }

      },

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      setDish: function(dish) {

        var deferred = $q.defer();

          server.setDish(dish).then(function(response) {

            deferred.resolve(response);

          },function(error) {

            deferred.reject(error);

          });

        return deferred.promise;
      }


    }


return methods;

}]);
