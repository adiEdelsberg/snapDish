angular.module('app')

 .factory("server",["$http", "$q", function($http, $q) {

  var endpoints = {

    MGR: 'http://192.254.185.98/snapDish/actions/request_handler.php'

  };

  /**
   * Send data to server
   *
   * @param {Object} endpoint - web server url
   * @param {Object} data to send
   * @param {String} method
   * @return {Object} accounts (Promise)
   */
  function restCall(endpoint, data, method) {

    var deferred = $q.defer();

    $http({

      method: method,
      url: endpoint,
      data: data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

    }).then(function(response) {

      deferred.resolve(response.data);

    }, function(error) {

      deferred.reject(error);

    });

    return deferred.promise;

  }

  var methods = {

      /**
       * Create new accounts
       *
       * @param {Object} newAccounts
       * @return {Function} sendData
       */
      getRestaurants: function() {

        var data = {
          command: "get_restaurants"
        };

        return restCall(endpoints.MGR, data, 'POST');
      },

      /**
       * Get restaurant's dishes by id
       *
       * @param {Number} id
       */
      getRestaurant: function(id) {

        var data = {
          command: "get_restaurant",
          id: id
        };

        return restCall(endpoints.MGR, data, 'POST');
      },

      /**
       * Get dish by id
       *
       * @param {Number} id
       */
      getDish: function(id, currentUserId) {

        var data = {
          command: "get_dish",
          id: id,
          currentUserId: currentUserId
        };

        return restCall(endpoints.MGR, data, 'POST');
      },

      /**
       * Get restaurant's dishes by id
       *
       * @param {Number} id
       */
      setDish: function(dish) {

        var data = {
          command: "set_dish",
          image: dish.image,
          name: dish.name,
          restaurant: dish.restaurant
        };

        return restCall(endpoints.MGR, data, 'POST');
      },

      /**
       * Get restaurant's dishes by id
       *
       * @param {Number} id
       */
      setDishImage: function(dish) {

        var data = {
          command: "set_dish_image",
          image: dish.image,
          id: dish.id
        };

        return restCall(endpoints.MGR, data, 'POST');
      },

      /**
       * Get restaurant's dishes by id
       *
       * @param {Number} id
       */
      setRating: function(dishId, rating, userId) {

        var data = {
          command: "set_rating",
          dish_id: dishId,
          rating: rating,
          user_id: userId
        };

        return restCall(endpoints.MGR, data, 'POST');
      },

      /**
       * Get restaurant's dishes by id
       *
       * @param {Number} id
       */
      setLike: function(dishPhotoId, userId, likedByCurrentUser) {

        var data = {
          command: "set_like",
          dish_photo_id: dishPhotoId,
          user_id: userId,
          liked_by_current_user: likedByCurrentUser 
        };

        return restCall(endpoints.MGR, data, 'POST');
      }

    }

  return methods;

}]);
