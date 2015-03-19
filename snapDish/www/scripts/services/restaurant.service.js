angular.module('app')

.factory('restaurant', ['$q', 'server', function($q, server) {

  //cached dishes
  var dishes;

    var methods = {

      /**
       * Get dishes by restaurant id
       *
       * @param {Object} accounts
       * @return {Object} accounts (Promise)
       */
      getDishes: function(restaurantId) {

        var deferred = $q.defer();

        server.getDishes(restaurantId).then(function(response) {

          dishes = response;

          deferred.resolve(response);

        },function(error) {

          deferred.reject(error);

        });

        return deferred.promise;
      }

    }


return methods;

}]);
