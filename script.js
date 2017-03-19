var app = angular.module('app', ['ui.router']);

app.controller('homeCtrl', ['$scope', 'friends', function($scope, friends){
			$scope.title = "home";
			$scope.friends = friends;
			$scope.items = ['item1', 'item2', 'item3'];
			$scope.selectedValue ='home';
			$scope.save = function(){
				alert(JSON.stringify($scope.friends));
			};
	}]);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl',
		resolve: {
			friends: ['$http', function($http){
				return $http.get('Api/friends.json').then(function(response){
					return response.data; 
				})
			}]
		}
	})
	
}])	