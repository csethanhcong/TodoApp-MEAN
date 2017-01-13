var _ = require('underscore');
var TodoList = require('../models/TodoList');
var TodoItem = require('../models/TodoItem');

function fetchAllTodoList(res) {

    TodoList.find(function (err, todoList) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        TodoItem.find(function(err, todoItems) {
            if (err) {
                res.send(err);
            }

            var result = {
                todoList: todoList,
                todoItem: todoItems
            };
            
            res.send(result); // reurn all todos in JSON format
        });

    });

}

module.exports.getAllTodoList = function (req, res) {
    fetchAllTodoList(res);
};

module.exports.createTodoList = function (req, res) {
    TodoList.create({
        title: req.body.title,
        created_at: new Date()
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        fetchAllTodoList(res);
    });
};

module.exports.deleteTodoList = function (req, res) {
    TodoList.remove({
        _id: req.params.todoListId
    }, function (err, todo) {
        if (err)
            res.send(err);

        fetchAllTodoList(res);
    });
};

module.exports.createTodoItem = function (req, res) {
    TodoItem.create({
        title: req.body.itemTitle,
        description: req.body.itemDescription,
        todo_list: req.body.itemList,
        created_at: new Date(),
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        fetchAllTodoList(res);
    });
};

module.exports.deleteTodoItem = function (req, res) {
    TodoItem.remove({
        _id: req.params.todoItemId
    }, function (err, todo) {
        if (err)
            res.send(err);

        fetchAllTodoList(res);
    });
};