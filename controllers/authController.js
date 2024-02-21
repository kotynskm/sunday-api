const User = require("../models/user");

const authController = {
  createUser: async (req, res) => {
    res.send("ok");
  },
};

module.exports = authController;
