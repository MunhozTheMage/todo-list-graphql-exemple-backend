const Todo = require("../models/todo");

const updateTodo = async (
  _ctx,
  { input: { id, title, done, description } }
) => {
  const todo = await Todo.findByPk(id);

  if (!todo) return;

  todo.title = title || todo.title;
  todo.done = done !== false && !done ? todo.done : done;
  todo.description = description || todo.description;

  await todo.save();

  return todo;
};

const createTodo = (_ctx, { input: { title, done, description } }) =>
  Todo.create({
    title,
    done: done || false,
    description,
  });

const deleteTodo = (_ctx, { id }) =>
  Todo.destroy({ where: { id } }).then((deleted) => (deleted ? id : null));

module.exports = {
  updateTodo,
  createTodo,
  deleteTodo,
};
