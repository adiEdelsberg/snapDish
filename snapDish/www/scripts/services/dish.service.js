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
      setRating: function(dishId, rating) {

        return server.setRating(dishId, rating); 

      }
      
    }


return methods;

}]);
