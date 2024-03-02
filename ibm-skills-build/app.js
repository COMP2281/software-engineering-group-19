const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const dbURL = "mongodb+srv://dxgd33:Password_1234@cluster0.ugkctfh.mongodb.net/Application";

// Express app
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

// Connect to MongoDB Atlas
mongoose
    .connect(dbURL)
    .then(() => {
        console.info('Connected to the database');
    })
    .catch((error) => {
        console.log(error);
    });

// Route to fetch all courses without using a schema
app.get("/courses", async (req, res) => {
    try {
        const courses = await mongoose.connection.collection('courses').find({}).toArray();
        console.log(courses)
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching courses from the database');
    }
});

// Routes
app.get("/", (req, res) => {
      res.send("Hello, world!");
});

// Export the app for server.js or further configuration
module.exports = app;