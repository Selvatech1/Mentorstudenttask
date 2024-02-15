const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mentor_student_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err.message));

module.exports = mongoose;
