const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const authondicate = require('../middlewere/authondicate');
const mongoose = require('mongoose');


require('../db/conn');
const User = require('../model/userSchema');
const roomsInfo = require('../model/roomsInfo');
const feedback= require('../model/feedBack')

router.use(cookieParser());

router.get('/', (req, res) => {
  res.send('hello World from server router js');
});

// Admin Dashboard
router.post('/admindashboard', async (req, res) => {
  const { hname, dec, loc, price, img, noRooms } = req.body;

  if (!hname || !dec || !loc || !price || !img || !noRooms) {
    return res.status(422).json({ error: 'Please fill the details properly' });
  }

  try {
    const room = new roomsInfo({ hname, dec, loc, price, img,noRooms });
    const roomRegister = await room.save();
    console.log(room + 'successfully registered');
    res.status(200).json({ message: 'Room registered successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
        // sending the data to the dataBase
router.get('/admindashboard', (req, res) => {
  roomsInfo.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

            // signUp page
router.post('/login', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ error: 'Please fill the details properly' });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: 'Email already exists' });
    }

    const user = new User({ name, email, password });

    const userRegister = await user.save();
    console.log(user + 'succesfully register');
    res.status(200).json({ message: 'User register succesfully Success' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

        // Login route
router.post('/loginme', async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Please fill the data' });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie('cootoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!userLogin) {
        res.status(400).json({ error: 'Invalid credentials' });
      } else {
        res.status(200).json({ message: 'Login successful' });
      }
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
// payment Ki kahani
router.get('/payment', authondicate, (req, res) => {
  res.send(req.rootUser);
});

// creating support database
    router.post('/support', async (req, res) => {
  const { fname, lname, comment } = req.body;
  if (!fname || !lname || !comment ) {
    return res.status(500).json({ message: 'Please fill the form' });
  }
  try {
    const feedRoom = new feedback({ fname, lname, comment});
    await feedRoom.save();
    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    console.log(err);
  }
});

// creating logout backend here

router.get('/logout', (req, res) => {
  res.clearCookie("cootoken", {path:"/"});
  res.status(200).send("user has logged out succesfully")
});


module.exports = router;
