const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

// Create Mentor
router.post('/', mentorController.createMentor);

// Add Students to Mentor
router.post('/:mentorId/students', mentorController.addStudentsToMentor);

// Show all students for a particular mentor
router.get('/:mentorId/students', mentorController.getMentorStudents);

module.exports = router;
