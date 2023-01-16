const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongodb://localhost:27017/urls');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('mongodb connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
