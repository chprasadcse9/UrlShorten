import express from 'express';
import bodyParser from 'body-parser';
//import expressValidator from express;
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();


//import routes
import post from './routes/postUrl.js';
import get from './routes/getUrl.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(expressValidator());


// Body Parser
app.use('/', get);
app.use('/shortId', post);

app.use((error, req, res, next) => {
  error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
