const express = require("express");
const router = express.Router();
const TodoList = require("../models/todoListModel");
const { default: Todo } = require("../../../client/src/components/Todo");
const { default: mongoose } = require("mongoose");

router.post("/:todoList/add", (req, res) => {
  TodoList.findOne({
    userId: req.body.userId,
    title: req.body.todoListTitle,
  })
    .then((todoList) => {
      todoList.update({
        $push: {
          todos: {
            id: new mongoose.Types.ObjectId(),
            text: req.body.todoText,
            completed: req.body.todoCompleted,
          },
        },
      });
    })
    .then(() => {
      res.status(201).send({
        message: "Todo added successfully",
      });
    });
});

router.get("/:todoList", (req, res) => {
  TodoList.findOne({
    userId: req.body.userId,
    title: req.params.todoList,
  }).then((todoList) => {
    res.status(201).send({
      todos: todoList.todos,
    });
  });
});
