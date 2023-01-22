//import
import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

const app = express();
app.use(express.json());

//connect with DB
connectDB();

//imort routes
import postRouter from './routes/post';
import getRouter from './routes/get';

// Body Parser
app.use('/', getRouter);
app.use('/api', postRouter);

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});