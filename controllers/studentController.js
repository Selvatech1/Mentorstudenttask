const Student = require('../models/Student');

// Create Student
exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.changeStudentMentor = async (req, res) => {
    try {
      const { studentId, newMentorId } = req.body;
      const student = await Student.findById(studentId);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      student.mentor = newMentorId;
      await student.save();
      res.status(200).json(student);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  exports.assignMentorToStudent = async (req, res) => {
    try {
      const { studentId, mentorId } = req.body;
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

  exports.getPreviousMentor = async (req, res) => {
    try {
      const { studentId } = req.params;
      const student = await Student.findById(studentId).populate('previousMentor');
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.status(200).json(student.previousMentor);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };