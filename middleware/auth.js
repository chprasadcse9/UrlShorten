const jwt = require("jsonwebtoken");
import dotenv from dotenv;
dotenv.config(path='./..env');

var createToken = (data) => {
    let token = jwt.sign(data, process.env.jwt_secret)
    return { "generated_token": token}
}

exports.checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed."
    });
  }
};