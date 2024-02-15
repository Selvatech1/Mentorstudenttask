const Mentor = require('../models/Mentor');

// Create Mentor
exports.createMentor = async (req, res) => {
    try {
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.status(201).json(mentor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Show all students for a particular mentor
exports.getMentorStudents = async (req, res) => {
    try {
        const { mentorId } = req.params;
        const mentor = await Mentor.findById(mentorId).populate('students');
        if (!mentor) return res.status(404).json({ error: 'Mentor not found' });

        res.json(mentor.students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addStudentsToMentor = async (req, res) => {
    try {
      const { mentorId, studentIds } = req.body;
      await Student.updateMany({ _id: { $in: studentIds }, mentor: { $exists: false } }, { mentor: mentorId });
      res.status(200).json({ message: 'Students assigned to mentor successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  exports.getStudentsByMentor = async (req, res) => {
    try {
      const { mentorId } = req.params;
      const students = await Student.find({ mentor: mentorId });
      res.status(200).json(students);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };