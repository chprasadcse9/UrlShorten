//import
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

//connect with DB
exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};