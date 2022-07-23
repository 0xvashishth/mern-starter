# mern-starter

### Guide To Initialize New Project

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
- create `index.js` in the root directory
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
- Now Change `package.json` Of the Scripts part.
	```js
	"main": "index.js",
	  "scripts": {
	    "start": "node index.js",
	    "app": "nodemon index.js",
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  ```
- Now `npm install` & run `npm run app` and check the URL again.

#### Mongo Database Setup

- We will use mongo atlas for database.
- First, create a mongo atlas account at `https://www.mongodb.com/atlas/database`.
- Create a cluster & add a username and password. select choose the application & Copy the database link.
- now create the `config` directory inside the root folder.
- create the `db.js` inside the config directory & add the following code.
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
- create the `default.json` in config directory & add it to `.gitignore`. because it will contain the database password & username.
- We need another dependency package called config for the global variable to run our project. `npm i config`
- After this edit `index.js`. just add below two lines to check whether a database is working properly or not.
	```js
	const connectDB = require('./config/db');
	connectDB();
	```
- Now check the app. `npm run app` and see in the console. It should show `MongoDB is Connected...`. (Make allow all ip in the mongo cluster to invoke the request.)
- Now create `Route` & `api` directories inside root directory.
- Then create the `book.js` inside the `api` folder & add the following code in it.
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
	router.get('/', (req, res) => {
	  Book.find()
	    .then(books => res.json(books))
	    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
	});

	// @route GET api/books/:id
	// @description Get single book by id
	// @access Public
	router.get('/:id', (req, res) => {
	  Book.findById(req.params.id)
	    .then(book => res.json(book))
	    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
	});

	// @route GET api/books
	// @description add/save book
	// @access Public
	router.post('/', (req, res) => {
	  Book.create(req.body)
	    .then(book => res.json({ msg: 'Book added successfully' }))
	    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
	});

	// @route GET api/books/:id
	// @description Update book
	// @access Public
	router.put('/:id', (req, res) => {
	  Book.findByIdAndUpdate(req.params.id, req.body)
	    .then(book => res.json({ msg: 'Updated successfully' }))
	    .catch(err =>
	      res.status(400).json({ error: 'Unable to update the Database' })
	    );
	});

	// @route GET api/books/:id
	// @description Delete book by id
	// @access Public
	router.delete('/:id', (req, res) => {
	  Book.findByIdAndRemove(req.params.id, req.body)
	    .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
	    .catch(err => res.status(404).json({ error: 'No such a book' }));
	});

	module.exports = router;
	```
- We can test the apis via postman.


#### Now Time To Configure Our Frontend

- We’ll use Create React App to generate our initial file setup.
- just go to another directory. `npx create-react-app askoverflow`
- test react app. `npm start`
- Add some frontend dependencies with code. (available in public/index.html). It includes font-awesome and bootstrap dependencies.
- Frontend tasks and features
	- Add, create or save a new book
	- Show all the books we have stored in the database
	- Show a single book
	- Update a book
	- Delete a book
- Add the following dependencies. Axios is a lightweight HTTP client based similar to a Fetch API. Axios is a promise-based async/await library for readable asynchronous code. We can easily integrate with React, and it is effortless to use in any front-end framework.
	```
	npm install --save react-router-dom
	npm install --save axios
	```
- Make components and make ready the frontend part of the project separately.


#### Now we will connect the backend with frontend

- we need to install cors in our back-end (server-side) project. run `npm install cors` in backend project.
- now start the `npm start` in frontend and `npm run app` in the backend. It should Work!!
