angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

openFB.init({appId: '1604369319786635'});

$stateProvider.state('login', {
  url: '/login',
  templateUrl: 'partials/login.html',
  controller: 'LoginCtrl'
})

$stateProvider.state('restaurants', {
  url: '/restaurants',
  templateUrl: 'partials/restaurants.html',
  controller: 'RestaurantsCtrl'
})

$stateProvider.state('restaurant', {
  url: '/restaurant/:restaurantId',
  templateUrl: 'partials/restaurant.html',
  controller: 'RestaurantCtrl'
})

$urlRouterProvider.otherwise('/login');

}])