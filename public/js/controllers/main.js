angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','TodoList','TodoItem', function($scope, $http, TodoList, TodoItem) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		TodoList.get()
			.success(function(data) {
				fetchAll(data);
			});
			
		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodoItem = function(todoListId) {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.todoitem.itemTitle != undefined
				&& $scope.formData.todoitem.itemDescription != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				TodoItem.create($scope.formData.todoitem)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.todoList = {}; // clear the form so our user is ready to enter another
						fetchAll(data);
					});
			}
		};

		$scope.createTodoList = function() {
			if ($scope.formData.todolist.title != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				TodoList.create($scope.formData.todolist)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.formData.todolist = {}; // clear the form so our user is ready to enter another
						fetchAll(data);
					});
			}
		}

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodoList = function(id) {
			$scope.loading = true;

			TodoList.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					fetchAll(data);
				});
		};

		function fetchAll(data) {
			$scope.loading = false;
			$scope.todoLists = data.todoList; // assign our new list of todos
			$scope.todoItems = data.todoItem; // assign our new list of todos
		}
	}]);