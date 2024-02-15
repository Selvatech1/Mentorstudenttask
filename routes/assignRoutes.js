// assignRoutes.js

const express = require('express');
const router = express.Router();
const assignController = require('../controllers/assignController');

// POST request to assign a student to a mentor
router.post('/', assignController.assignStudentToMentor);

module.exports = router;
