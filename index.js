const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const authRoutes = require('./routes/userauth/auth');
const bodyParser = require('body-parser')


// routes
const books = require('./routes/api/book');
const users = require('./routes/api/user');

const app = express();
//body-parse
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// cors
app.use(cors({ origin: true, credentials: true }));

// Connect Database
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);
app.use('/api/users', users);
app.use('/api1', authRoutes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));