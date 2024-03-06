const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));


const bcrypt = require("bcrypt");

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, email, password: hashedPassword });
  try {
    await user.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});


const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(400).send('Invalid Credentials');
  }
});



const request = require('supertest');
const app = require('../app'); 

describe('User Registration and Login', () => {
  it('should register a new user and then log in successfully', async () => {
    const userData = { username: 'newUser', email: 'newuser@example.com', password: 'password123' };

    // Test registration
    await request(app)
      .post('/register')
      .send(userData)
      .expect(201);

    // Test login
    await request(app)
      .post('/login')
      .send({ email: userData.email, password: userData.password })
      .expect(200)
      .then(response => {
        expect(response.body).toHaveProperty('token'); // Check for token in response
      });
  });
});
