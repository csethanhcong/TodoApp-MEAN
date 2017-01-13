var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TodoListSchema = new Schema({
    title: {type: String, default: 'New Todo List'},
    created_at: Date
});

module.exports = mongoose.model('TodoList', TodoListSchema);