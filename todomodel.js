const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  description: String,
  finalDate: String,
});

const Todo = new mongoose.model("todo", TodoSchema);

module.exports = Todo;
