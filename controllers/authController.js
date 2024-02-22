const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const authController = {
  createUser: async (req, res) => {
    try {
      const { email, firstName, lastName, password, userName } = req.body;
      // hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // create user
      const newUser = await User.create({
        email,
        firstName,
        lastName,
        hashedPassword,
        userName,
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.error("error creating user: ", error);
      res.status(500).json("error occurred when creating new user");
    }
  },
};

module.exports = authController;
