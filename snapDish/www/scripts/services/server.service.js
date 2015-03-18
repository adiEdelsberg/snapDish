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
      getDishes: function(id) {
        var data = {
          command: "get_dishes",
          id: id
        };

        return restCall(endpoints.MGR, data, 'POST');
      }

    }

  return methods;

}]);
