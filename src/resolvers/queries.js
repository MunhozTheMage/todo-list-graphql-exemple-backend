const Todo = require("../models/todo");

const todos = () => Todo.findAll();

const todo = (_ctx, { id }) => Todo.findByPk(id);

module.exports = {
  todos,
  todo,
};
