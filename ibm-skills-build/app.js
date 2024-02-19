const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

// Use process.env for sensitive information
const dbURL = process.env.MONGODB_URI;

// Express app
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

// Connect to MongoDB Atlas
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.log(error);
  });

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
