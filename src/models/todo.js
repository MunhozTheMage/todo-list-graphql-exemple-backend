const { DataTypes } = require("sequelize");
const db = require("../database");

const Todo = db.define("Todo", {
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Todo;
