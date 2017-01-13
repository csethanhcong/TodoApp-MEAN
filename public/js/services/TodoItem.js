angular.module('todoItemService', [])

	// super simple service
	// each function returns a promise object 
	.factory('TodoItem', ['$http',function($http) {
		return {
			get : function(todoListId) {
				return $http.get('/api/todoItem/' + todoListId);
			},
			create : function(todoItemData) {
				return $http.post('/api/todoItem', todoItemData);
			},
			delete : function(todoItemId) {
				return $http.delete('/api/todoItem/' + todoItemId);
			}
		}
	}]);