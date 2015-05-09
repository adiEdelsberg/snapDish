angular.module('app')

.factory('dish', ['$q', 'server', function($q, server) {

    //cached dish
    var currentDish;

    var methods = {

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      getCurrentDish: function() {

        return currentDish;

      },

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      setRating: function(dishId, rating, userId) {

        return server.setRating(dishId, rating, userId);

      },

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      setLike: function(dishPhotoId, userId, likedByCurrentUser) {

        return server.setLike(dishPhotoId, userId, likedByCurrentUser);

      },

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      setReport: function(dishPhotoId, userId, report) {

        return server.setReport(dishPhotoId, userId, report);
        
      },

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
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
      getDish: function(dishId, currentUserId) {

        var deferred = $q.defer();

          server.getDish(dishId, currentUserId).then(function(response){

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
