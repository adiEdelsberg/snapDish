angular.module('app')

.factory('user', [function() {

    //cached dish
    var currentUser;

    var methods = {

      getCurrentUser: function() {

        return currentUser;

      },

      setCurrentUser: function(user) {

        currentUser = user;
        
      }

    }


return methods;

}]);
