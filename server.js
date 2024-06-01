const express = require('express');
const cors = require('cors'); // Import CORS middleware if needed
const mongoose = require('mongoose'); // Import Mongoose if needed

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Use CORS middleware if needed

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to MongoDB if needed
// mongoose.connect('mongodb://localhost:27017/yourdatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
