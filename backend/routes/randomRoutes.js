const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.get('/random?native=native', async(req, res) => {

  // for non-native speakers, send empty native query param
  // for native speakers, send native query param "/random?native=native"

  // res.send(req.params)
 
  
  const allUsers = await User.find({native: Boolean(req.query.native)});
  const oneUser = allUsers[Math.round(Math.random() * allUsers.length)];

 

  return res.json(oneUser);
})

router.get('/?native=native', (req, res) => {



})


module.exports = router;
