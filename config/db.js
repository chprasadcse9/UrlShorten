//import
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


//connect with DB
const connectDB = function() {
  try {
      mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};


export default connectDB;