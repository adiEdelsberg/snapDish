angular.module('app')

.controller('DishCtrl', ['$scope', '$cordovaCamera', '$ionicPlatform', '$stateParams', '$ionicHistory', '$ionicPopup', '$ionicSlideBoxDelegate', 'dish', 'user',
	function($scope, $cordovaCamera, $ionicPlatform, $stateParams, $ionicHistory, $ionicPopup, $ionicSlideBoxDelegate, dish, user){

		var starsLastRate, currentUser, reportPopup;

		function init(){

			//$scope.stars = [{},{},{},{},{}];

			currentUser = user.getCurrentUser();

			$scope.dish = dish.getDish($stateParams.dishId, currentUser.id).then(function(data){console.log(data);

				$scope.dish = data;

				$scope.starsRate = $scope.dish.rating || 0;

				$ionicSlideBoxDelegate.update();

			},function(error){

			});

		}

		init();

		$ionicPlatform.ready(function () {


			// this is temporary...
			$scope.setRating = function() {

				$ionicHistory.clearCache();

				dish.setRating($scope.dish.id, $scope.starsRate, currentUser.id);

			}

			$scope.setLike = function(image) {

				dish.setLike(image.photo_id, currentUser.id, image.liked_by_current_user).then(function(){
					image.liked_by_current_user = !image.liked_by_current_user;	
				});
			
			}

			$scope.setFlag = function(dish) {
				dish.flag = !dish.flag;
			}

			$scope.openReportPopup = function(image) {

				$scope.imageToReport = image;

				reportPopup = $ionicPopup.show({

					templateUrl: 'partials/report_popup.html',
    				title: 'Report User',
    				subTitle: 'Please select one of the options',
    				scope: $scope

				});
			}

			$scope.setReport = function(reportType){

				reportPopup.close();
				showConfirm(reportType);

			};

			function showConfirm(reportType) {

				var popup, template, subTitle; 

				$scope.report = {
					type : reportType,
					text : ''
				}; 

				if(reportType == 'other'){

					template = '<textarea ng-model="report.text"></textarea>';
					subTitle =  'Describe this report(optional)';

				}else{

					template = 'Are you sure you want to report this user?';
					subTitle = '';

				}				

				popup = $ionicPopup.show({

			     	title: 'Confirm Report',
			     	subTitle: subTitle,
			     	template: template,
			     	scope: $scope,
			     	buttons: [
				      { text: 'Cancel' },
				      {
				        text: 'OK',
				        type: 'button-positive',
				        onTap: function(e) {
				         
				        	return $scope.report;
				          
				        }
				      }
				    ]
			   	});

			   	popup.then(function(report) {

			     	if(report) {
			     		dish.setReport(report, $scope.imageToReport.photo_id);
			     	} else {
			       		console.log('Report was canceled');
			     	}

			   	});

			}

			$scope.setStars = function(rate) {

				$scope.starsRate = rate+1;

				// a confirm dialog
				var confirmPopup = $ionicPopup.confirm({

					title: 'Set Dish Rating',
					template: 'Are you sure you want to set this dish rate?'

				});

				confirmPopup.then(function(response) {

					if(response) {
						$scope.setRating();
					} else {
						$scope.starsRate = $scope.dish.rating;
					}

				});
			}

		});
}]);
