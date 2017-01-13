angular.module('todoListService', [])

	// super simple service
	// each function returns a promise object 
	.factory('TodoList', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todoList');
			},
			create : function(todoListData) {
				return $http.post('/api/todoList', todoListData);
			},
			delete : function(todoListId) {
				return $http.delete('/api/todoList/' + todoListId);
			}
		}
	}]);