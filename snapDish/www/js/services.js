angular.module('services', ['ngResource'])

.factory('restaurants', ['$http', '$q', function($http, $q){

  var getData = function(){

    var q = $q.defer();

   $http.get('http://192.254.185.98/dishsnap/actions/request_handler.php?command=get_restaurants').success(function(response) {
      q.resolve(response);
   }).error(function(error){
      q.reject(error);
   });

   return q.promise;
  }
 
 var functions = {
  getData:getData
 }
  return functions;

}])