# mern-starter

### Guide To Initialze New Project

#### Initial Project

- Initialize Packages ` npm init`
- Add Some Initial Dependencies `npm i express mongoose body-parser bcryptjs validation`
	- bcryptjs is a password hashing function designed by Niels Provos and David Mazières
	- body-parser allows us to get the data throughout the request
	- express is our main framework
	- mongoose is used to connect/interact with MongoDB
	- validation (as its name implies) is used for validation
- Add NodeMon `npm i -D nodemon`
	- nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
- create `index.js` in root directory
	```js
	// index.js

	const express = require('express');

	const app = express();

	app.get('/', (req, res) => res.send('Hello world!'));

	const port = process.env.PORT || 8082;

	app.listen(port, () => console.log(`Server running on port ${port}`));
	```
- Now run `node index`
- check the website `http://localhost:8082`. It will display `Hello World!`.
- Now Change `package.json` Of Scripts part.
	```js
	"main": "index.js",
	  "scripts": {
	    "start": "node index.js",
	    "app": "nodemon index.js",
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  ```
- Now `npm install` & run `npm run app` and check the url again.

#### Mongo Database Setup

- We will use mongo atlas for for database.
- First create mongo atlas account at `https://www.mongodb.com/atlas/database`.
- Create a cluster & add username and password. select choose the application & Copy the database link.
- now create `config` directory inside root folder.
- create `db.js` inside config directory & add following code.
	```js
	const mongoose = require('mongoose');
	const config = require('config');
	const db = config.get('mongoURI');

	const connectDB = async () => {
	  try {
	    await mongoose.connect(
	      db,
	      {
	        useNewUrlParser: true
	      }
	    );

	    console.log('MongoDB is Connected...');
	  } catch (err) {
	    console.error(err.message);
	    process.exit(1);
	  }
	};

	module.exports = connectDB;
	```
- create `default.json` in config directory & add it to `.gitignore`. because it will contain the database password & username.
- We need another dependency package called config for the global variable to run our project. `npm i config`
- After this edit `index.js`. just add below two lines to check weather database is working properly or not.
	```js
	const connectDB = require('./config/db');
	connectDB();
	```
- Now check the app. `npm run app` and see in the console. It should show `MongoDB is Connected...`. (Make allow all ip in the mongo cluster to invoke the request.)
- Now create `Route` & `api` directories inside root directory.
- Then create `book.js` inside `api` folder & add following code in it.
	```js
	// routes/api/books.js

	const express = require('express');
	const router = express.Router();

	// Load Book model
	const Book = require('../../models/Book');

	// @route GET api/books/test
	// @description tests books route
	// @access Public
	router.get('/test', (req, res) => res.send('book route testing!'));

	// @route GET api/books
	// @description Get all books
	// @access Public
	```
- 