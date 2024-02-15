// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const assignRoutes = require('./routes/assignRoutes'); // Add this line
app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);
app.use('/assign', assignRoutes); // Add this line

// Connect to MongoDB
mongoose.connect('mongodb+srv://selva:Selva@cluster0.pevzx7l.mongodb.net/?retryWrites=true&w=majority', )
  .then(() => {
    console.log('MongoDB connected');
    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
