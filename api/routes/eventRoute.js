const express = require('express');
const User = require('../models/user');
const Event = require('../models/event');
const verifyJWT = require('../middleware/verifyJWT');
const eventRoute = express.Router();

// Create new event
eventRoute.post('/create', express.json(), verifyJWT, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.createdBy});
    if (!user) {
      res.status(404).json('user not found');
      return;
    }
    const newEvent = new Event({
      topic: req.body.topic,
      description: req.body.description,
      hostTime: req.body.hostTime,
      location: req.body.location,
      createdBy: req.body.createdBy,
      industry: req.body.industry,
      likedBy: req.body.likedBy,
    });

    // save event and respond
    const event = await newEvent.save();
    res.status(200).json({
      message: 'Event created successfully',
      event,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get event by id
eventRoute.get('/:eventId', express.json(), async (req, res) => {
  try {
    console.log(req.params.eventId);
    const event = await Event.findOne({ _id: req.params.eventId});
    res.status(200).json(event);

  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all events with latest on top
eventRoute.get('/', express.json(), async (req, res) => {
  try {
    const allEvents = await Event.find({});
    res.status(200).json(allEvents);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get the 10 most popular events
eventRoute.get('/', express.json(), async (req, res) => {
  try {
    const allEvents = await Event.find({}).sort({ likedBy: -1 }).limit(10);
    res.status(200).json(allEvents);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = eventRoute;
