const mongoose = require('mongoose');

const Todo = mongoose.model('Todo');

module.exports.findTodos = async (uid) => {
    return await Todo.find({uid}, {id: 1, text: 1}).exec();
}

module.exports.saveTodo = async (uid, text) => {
    let todo = new Todo({uid, text, created: Date()});
    return todo.save();
}

module.exports.updateTodo = async (_id, text) => {
    await Todo.update({_id}, {$set: {text}}).exec();
    return await Todo.findOne({_id}, {id: 1, text: 1});
}

module.exports.deleteTodo = async (_id) => {
    return await Todo.remove({_id}).exec();
}

