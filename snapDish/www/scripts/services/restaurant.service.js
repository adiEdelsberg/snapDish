angular.module('app')

.factory('restaurant', ['$q', 'server', function($q, server) {

    var methods = {

      /**
       * Get dishes by restaurant id
       *
       * @param {Number} restaurantId
       * @return {Object} dishes list(Promise)
       */
      getDishes: function(restaurantId) {

        var deferred = $q.defer();

        server.getDishes(restaurantId).then(function(response) {

          deferred.resolve(response.data);

        },function(error) {

          deferred.reject(error);

        });

        return deferred.promise;
      }

    }


return methods;

}]);
