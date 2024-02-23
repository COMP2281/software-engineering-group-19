const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const dbURL = process.env.MONGODB_URI;

// express app
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));

// connect to db on MongoDB Atlas
mongoose
  .connect(dbURL)
  .then(() => {
    console.info("Connected to the database");
  })
  .catch((error) => {
    console.log(error);
  });
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Route to retrieve and console log data from the database
app.get("/data", async (req, res) => {
  try {
    // Directly query the "courses" collection in MongoDB
    const data = await mongoose.connection.db
      .collection("courses")
      .find()
      .toArray();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from the 'courses' collection:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Post request to register a new user

require("./userDetails")

const User = mongoose.model("userDetail");

app.post("/registration", async(req,res) =>{
    const {username,name,email} = req.body;
    try {
        await User.create({
            username,
            uname:name,
            uemail:email,
        });
        res.send({status:"Ok"});
    }
    catch (error){
        res.send({status:"error"});
    }
})

module.exports = app;
