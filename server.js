const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'build'))); // Serve static files from the 'build' directory

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); // Serve the index.html file for all other routes
});

// Connect to MongoDB if needed
mongoose.connect('mongodb://localhost:27017/yourdatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successfully connecting to MongoDB
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    // Exit the process if MongoDB connection fails
    process.exit(1);
  });
