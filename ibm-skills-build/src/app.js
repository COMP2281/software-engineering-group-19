const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
//const CourseModel = require('./models/channel.js')
const path = require('path');
const fs = require('fs');
const cors = require('cors');

//const dbURL = process.env.DB_URL
const dbURL = "mongodb+srv://dxgd33:Password_1234@cluster0.ugkctfh.mongodb.net/"

//express app
const app = express()

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')));

//connect to db on mongodb atlas
mongoose
    .connect(dbURL, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.info('Connected to the database');
    })
    .catch((error) => {
        console.log(error)
    })


/*
app.get("/", (req, res) => {
      res.send("Hello, world!");
  });
  
  
  const newCourse = new CourseModel({
      id: 1,
      title: 'title',
      description: 'description',
      link: 'hello'
  });
  
  newCourse.save()
      .then(() => console.log('Course saved'))
      .catch((error) => console.log(error));
  

      app.get('/courseSearch', async (req, res) => {
        if (!req.query.q) {
            return res.status(400).send('Missing query parameter: q');
        }
    
        const query = req.query.q.toLowerCase();
          
        try {
          const courses = await CourseModel.find();
          const results = courses.filter(
            (course) => course.title.toLowerCase().includes(query)
              || course.link.toLowerCase().includes(query)
          );
          const formattedResults = results.map((course) => ({
            title: course.title,
            link: course.link,
          }));
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(formattedResults);
        } catch (err) {
          console.error(err);
          res.status(500).send('An error occurred while searching.');
        }
    });

*/
module.exports = app;


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

app.use(cors({origin: 'http://localhost:3000'}));