angular.module('app')

.factory('restaurant', ['$q', 'server','restaurants', function($q, server, restaurants) {

    //cached restaurants
    var _restaurant = {};

    var methods = {

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      getRestaurant: function(restaurantId) {

        var deferred = $q.defer();

          server.getRestaurant(restaurantId).then(function(response) {

            _restaurant = response.data;

            deferred.resolve(response.data);

          },function(error) {

            deferred.reject(error);

          });

        return deferred.promise;

      },

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      getCurrentRestaurant: function(){

        return _restaurant;

      }


    }


return methods;

}]);
