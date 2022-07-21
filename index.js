// index.js

const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('Hello world!!100021!!'));

const port = process.env.PORT || 8080;


app.listen(port, () => console.log(`Server running on port ${port}`));