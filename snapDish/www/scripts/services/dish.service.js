angular.module('app')

.factory('dish', ['$q', 'server', function($q, server) {

    //cached dish
    var currentDish;

    var methods = {

      getCurrentDish: function() {

        return currentDish;

      },

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      setRating: function(dishId, rating) {

        return server.setRating(dishId, rating);

      },


      setDishImage: function(dish) {

        var deferred = $q.defer();

          server.setDishImage(dish).then(function(response) {

            deferred.resolve(response);

          },function(error) {

            deferred.reject(error);

          });

        return deferred.promise;
      },

      /**
       * Get dish by dish id
       *
       * @param {Number} dishId
       * @return {Object} dish(Promise)
       */
      getDish: function(dishId) {

        var deferred = $q.defer();

          server.getDish(dishId).then(function(response){

            currentDish = response.data;

            deferred.resolve(response.data);

          }, function(error){

              alert('no dish');

          });

        return deferred.promise;

      }




    }


return methods;

}]);
