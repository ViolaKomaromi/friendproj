const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
  return jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
