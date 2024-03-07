const mongoose = require('mongoose');

const chatStepSchema = new mongoose.Schema({
  step: Number,
  question: String,
  responses: [{ text: String, nextStep: Number }],
});

module.exports = mongoose.model('ChatStep', chatStepSchema);