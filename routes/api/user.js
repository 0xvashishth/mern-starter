// routes/api/users.js

const express = require('express');
const router = express.Router();

const User = require('../../models/Users');

router.get('/test', (req, res) => res.send('user route testing!\n'));

router.get('/', (req, res) => {
  var a = req.k;
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nobooksfound: 'No Users found' }));
});

// curl -X POST http://localhost:8082/api/books -H "Content-Type: application/json" -d '{"title": "hello", "isbn": 12345, "author":"dharmandi", "description" : "hello", "published_date": "2022-07-26"}'

module.exports = router;