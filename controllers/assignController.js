// controllers/assignController.js

const Student = require('../models/assign');
exports.assignStudentToMentor = async (req, res) => {
    try {
      const { mentorId, studentId } = req.body;
      const student = await Student.findById(studentId);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      student.mentor = mentorId;
      await student.save();
      res.status(200).json(student);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

