const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { isEmail } = require('validator');

const { Schema } = mongoose;
const SALT_WORK_FACTOR = 10;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    createIndexes: { type: String },
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail, 'Invalid email'],
    createIndexes: { unique: true },
  },
  password: { type: String, required: true },
});

// schema.pre('save', async function save(next) {
//   if (!this.isModified('password')) return next();
//   try {
//     const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
//     this.password = await bcrypt.hash(this.password, salt);
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });

// schema.methods.validatePassword = async function validatePassword(data) {
//   return bcrypt.compare(data, this.password);
// };

const Model = mongoose.model('User', schema);

module.exports = Model;