import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config(path='../.env');

const createToken = (data) => {
    let token = jwt.sign(data, process.env.secret)
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

export default checkAuth;