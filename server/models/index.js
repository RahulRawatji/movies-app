const Sequelize = require("sequelize");
const { PG_URI } = process.env;

const PG_URL = PG_URI;

const sequelize = new Sequelize(PG_URL, {
  dialect: "postgres"
});

const db = {};

db.Sequelize = Sequelize;

db.Movies = require("./Movies.js")(sequelize, Sequelize);

module.exports = db;