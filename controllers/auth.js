const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
  createJWT,
} = require("../utils/auth");

exports.signup = (req, res, next) => {
  let { name, username, email, password } = req.body;
  User.findOne({ username: username }, { email: email })
    .then(user => {
      if (user) {
        return res.status(422).json({ errors: [{ user: "email or username already exists" }] });
      } else {

        const user = new User({
          name: name,
          username: username,
          email: email,
          password: password,
        });
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(password, salt, function(err, hash) {
            if (err) throw err;
            user.password = hash;
            user.save()
              .then(response => {
                res.status(200).json({
                  success: true,
                  result: response
                })
              })
              .catch(err => {
                res.status(500).json({
                  errors: [{ error: err }]
                });
              });
          });
        });
      }
    }).catch(err => {
      res.status(500).json({
        errors: [{ error: 'Something went wrong' }]
      });
    })
}

exports.signin = (req, res) => {
  console.log("user verified in middleware!!");
  let { username, password } = req.body;
  User.findOne({ username: username }).then(user => {
    if (!user) {
      return res.status(404).json({
        errors: [{ user: "username not found" }],
      });
    } else {
      console.log("user verified in middleware!!1");
      bcrypt.compare(password, user.password).then(isMatch => {
        console.log("user verified in middleware!!2");
        if (!isMatch) {
          return res.status(400).json({
            errors: [{
              password:
                "incorrect"
            }]
          });
        }
        console.log(process.env.TOKEN_SECRET);
        let access_token = createJWT(
          user.email,
          user._id,
          3600
        );
        console.log("oken");
        jwt.verify(access_token, process.env.TOKEN_SECRET, (err,
          decoded) => {
          if (err) {
            res.status(500).json({ erros: "token not verified" });
          }
          console.log("user verified in middleware!111!");
          if (decoded) {
            console.log("user verified in middleware!1111!");
            return res.status(200).json({
              success: true,
              token: access_token,
              message: user
            });
          }
        });
        console.log("user verified in middleware!!3");
      }).catch(err => {
        console.log("user verified in middleware!!4");
        res.status(500).json({ erros: err });
      });
    }
  }).catch(err => {
    res.status(500).json({ erros: err });
  });
}