var TodoAPI = require('./api/TodoAPI');

module.exports = function (app) {

    /*========================================
    =            API for TodoList            =
    ========================================*/
    
    app.get('/api/todoList', function (req, res) {
        // use mongoose to get all todos in the database
        TodoAPI.getAllTodoList(req, res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todoList', function (req, res) {
        // create a todo, information comes from AJAX request from Angular
        TodoAPI.createTodoList(req, res);
    });

    // delete a todo
    app.delete('/api/todoList/:todoListId', function (req, res) {
        TodoAPI.deleteTodoList(req, res);
    });

    /*========================================
    =            API for TodoItem            =
    ========================================*/
    
    app.get('/api/todoItem/:todoListId', function (req, res) {
        // use mongoose to get all todos in the database
        TodoAPI.getAllTodoItem(req, res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todoItem', function (req, res) {
        // create a todo, information comes from AJAX request from Angular
        TodoAPI.createTodoItem(req, res);
    });

    // delete a todo
    app.delete('/api/todoItem/:todoItemId', function (req, res) {
        TodoAPI.deleteTodoItem(req, res);
    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
