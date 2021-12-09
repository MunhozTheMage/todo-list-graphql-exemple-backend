const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: "3307",
  username: "root",
  password: "root",
  database: "todolist",
});

module.exports = db;
