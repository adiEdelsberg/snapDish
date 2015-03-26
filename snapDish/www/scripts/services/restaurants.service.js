angular.module('app')

.factory('restaurants', ['$q', 'server', function($q, server) {

    var currentRestaurants;

    var methods = {

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      getRestaurants: function() {

        if(currentRestaurants){

          return currentRestaurants;

        }else{

          return server.getRestaurants();

        }

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
