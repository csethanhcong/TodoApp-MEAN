var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TodoItemSchema = new Schema({
    title: {type: String, default: 'New Todo Item'},
    description: {type: String, default: ''},
    todo_list: {type: Schema.Types.ObjectId, ref: 'TodoList'},
    created_at: Date
});

module.exports = mongoose.model('TodoItem', TodoItemSchema);