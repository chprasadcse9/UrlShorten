const express = require('express');

const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

// Define routes
app.use('/', require('./routes/geturl'));
app.use('/api/url', require('./routes/posturl'));

const PORT = 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
