const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "db/database.sqlite",
});

module.exports = db;
