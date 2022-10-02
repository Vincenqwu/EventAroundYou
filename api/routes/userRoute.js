const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const verifyJWT = require('../middleware/verifyJWT');
const signJWT = require('../middleware/signJWT');
const userRoute = express.Router();

// validate user is logged in/authenticated
userRoute.get('/validate', verifyJWT, (_, res) => res.status(200).json({
  message: 'Token validated',
}));

// user sign up
userRoute.post('/register', express.json(), async (req, res) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save user and respond
    const user = await newUser.save();
    res.status(200).json({
      message: 'Registration successful',
      user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// user login
userRoute.post('/login', express.json(), async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      res.status(404).json('user not found');
      return;
    }
    const validPassword = await bcrypt.compare(req.body.password, user?.password);

    if (!validPassword) {
      res.status(400).json('wrong password');
      return;
    }
    const token = signJWT(user.username);
    res.status(200).json({
      message: 'Auth successful',
      token,
      user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a user's account by username
userRoute.delete('/:username', express.json(), verifyJWT, async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.params.username,
    });
    if (user) {
      await Town.deleteMany({
        userId: user._id,
      });
      await User.deleteOne({
        _id: user._id,
      });
      res.status(200).json({
        message: 'User deleted',
        username: req.params.username,
      });
    } else {
      res.status(404).json('user not found');
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

// get a user's info by username
userRoute.get('/:username', express.json(), verifyJWT, async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.params.username,
    });
    if (!user) {
      res.status(404).json('user not found');
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// like an event
userRoute.put('like/:eventId', express.json(), verifyJWT, async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      res.status(404).json('user not found');
      return;
    }
    const event = await Event.findOne({ _id: ObjectId(req.params.eventId) });
    if (!event) {
      res.status(404).json('event not found');
      return;
    }
    if (event.likedBy.includes(user.username)) {
      res.status(400).json('user already liked event');
      return;
    }
    event.likedBy.push(user.username);
    await event.save();
    res.status(200).json({
      message: 'Event liked',
    })
  
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = userRoute;

