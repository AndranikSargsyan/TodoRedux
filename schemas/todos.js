const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function() {
    const TodoScheme = new Schema({
        text: String,
        uid: String,
        created: Date,
        updated: Date
    });
    mongoose.model("Todo", TodoScheme);
};

