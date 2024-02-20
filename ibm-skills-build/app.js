const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path');

const dbURL = process.env.MONGODB_URI;

//express app
const app = express()

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')));

//connect to db on mongodb atlas
mongoose
    .connect(dbURL)
    .then(() => {
        console.info('Connected to the database');
    })
    .catch((error) => {
        console.log(error)
    })


app.get("/", (req, res) => {
      res.send("Hello, world!");
  });
  
module.exports = app;
