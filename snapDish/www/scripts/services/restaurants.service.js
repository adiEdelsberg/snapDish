angular.module('app')

.factory('restaurants', ['$q', 'server', function($q, server) {

    var restaurants;

    var methods = {

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      getRestaurants: function() {

        var deferred = $q.defer();

        if(restaurants){

          deferred.resolve(restaurants);

        }else{

          server.getRestaurants().then(function(response) {

            currentRestaurants = response.data;

            deferred.resolve(currentRestaurants);

          },function(error) {

            deferred.reject(error);

          });

        }

        return deferred.promise;
      },

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      setRestaurants: function(restaurants){

        restaurants = restaurants;

      }

    }


return methods;

}]);
