const mongoose = require("mongoose");

const TodoListSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    required: [true, "TodoList must have a user id."],
  },

  title: {
    type: String,
    required: [true, "TodoList must have a title."],
  },

  todos: {
    type: [{ id: ObjectId, text: String, completed: Boolean }],
  },
});

module.exports =
  mongoose.model.TodoList || mongoose.model("TodoList", TodoListSchema);
