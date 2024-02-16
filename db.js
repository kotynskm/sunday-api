const { Sequelize } = require("sequelize");
// to access env vars
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// connect to DB w/ URI
const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI, {
  host: "localhost",
  dialect: "postgres",
});

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// export the sequelize instance and the testdb function
module.exports = { sq: sequelize, testDbConnection };
