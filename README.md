# mern-starter

### Guide To Initialze New Project

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
- 