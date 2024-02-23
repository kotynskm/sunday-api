const { sq, testDbConnection } = require("../db");
const { DataTypes } = require("sequelize");

testDbConnection();

const User = sq.define("user", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: "Please provide an email",
      },
      notEmpty: {
        msg: "Email cannot be empty",
      },
    },
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide a first name",
      },
      notEmpty: {
        msg: "First name cannot be empty",
      },
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide a last name",
      },
      notEmpty: {
        msg: "Last name cannot be empty",
      },
    },
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: "Please provide a username",
      },
      notEmpty: {
        msg: "Username cannot be empty",
      },
    },
  },
  hashedPassword: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Please provide a password",
      },
      notEmpty: {
        msg: "Password cannot be empty",
      },
    },
  },
});

sq.sync({ force: true })
  .then(() => {
    console.log("User table (re)created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = { User };
