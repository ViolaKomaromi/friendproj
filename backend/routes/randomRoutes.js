const express = require('express');
const User = require('../models/User');
const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('jwt',{session: false} ), async (req, res) => {

  // for non-native speakers, send empty native query param
  // for native speakers, send native query param "/random?native=native"

  // res.send(req.params)
  console.log(req.query);
  console.log(Boolean(req.query.native));
  console.log(req.user);

  

  
  const allUsers = await User.find({ native: !req.user.native});
  const oneUser = allUsers[Math.round(Math.random() * allUsers.length)];



  return res.json(oneUser);
})




module.exports = router;
