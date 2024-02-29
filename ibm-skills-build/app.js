const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

// Use process.env for sensitive information
//const dbURL = process.env.MONGODB_URI;
const dbURL = "mongodb+srv://dxgd33:Password_1234@cluster0.ugkctfh.mongodb.net/"

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



require("./userDetails")

const User = mongoose.model("userDetail");

app.post("/registration", async(req,res) =>{
  const {username,name,email,password} = req.body;
  try {
    await User.create({
      username,
      uname:name,
      uemail:email,
      upassword:password,
    });
    res.send({status:"Ok"});
  } 
  catch (error){
    res.send({status:"error"});
  }
});

// Post method for logging in

app.post('/login', async (req, res) => {
  const {email,password} = req.body;
  const user = await User.findOne({email});

  //Check if user is registered
  if (!user){
    return res.json({error: "User not found."});
  }

  //Check password
  if (await becrypt.compare(password, user.password)){
    const token = jwt.sign({}, JWT_SECRET);

    if (res.status(201)){
        return res.json({status:"ok", data:token});
    } else {
        return res.json({status:"error"});
    }
    res.json({status:"error", error:"Incorrect password"});
  }


});


module.exports = app;


// Start the server
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//  console.log(`Server is running on http://localhost:${PORT}`);
//});
