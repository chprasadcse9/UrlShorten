const express = require('express');

const connectDB = require('./config/db');

const app = express();

//connect with DB
connectDB();

app.use(express.json({ extended: false }));

// use routes from Router module
app.use('/', require('./routes/geturl'));
app.use('/api/url', require('./routes/posturl'));

//Define prot number
const PORT = 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
