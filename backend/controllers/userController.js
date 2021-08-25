const bcrypt = require("bcrypt");
const User = require("../models/User");
const authHelper = require("../helpers/authenticationHelper");

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user == null) {
    return res
      .status(404)
      .json({ message: "User with that email was not found" });
  }
  try {
    var checkPassword = await bcrypt.compare(req.body.password, user.password);
    if (checkPassword) {
      //password is matching
      //Generate JWT token here
      const token = authHelper.generateToken(user);
      console.log("the token is ", token);

      return res.status(200).json({ token: token });
    } else {
      return res.status(400).json({ message: "Passwords not matching" });
    }
  } catch (error) {
    return res.status(400).json({ message: "General error upon signing in." });
  }
};

exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(200).json({ message: "User Created" });
  } catch (error) {
    console.log("the error is", error);
    res
      .status(400)
      .json({ message: "Something went wrong creating user", error: error });
  }
};
