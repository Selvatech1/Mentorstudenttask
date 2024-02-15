// models/assign.js

const mongoose = require('mongoose');

const assignSchema = new mongoose.Schema({
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
    required: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  // Add other properties if needed
});

module.exports = mongoose.model('Assign', assignSchema);
