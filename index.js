import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

const app = express();

//connect with DB
connectDB();

import postRouter from './routes/posturl';
import getRouter from './routes/geturl';

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', getRouter);
app.use('/api', postRouter);

// Server Setup
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});