const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.get('/', async(req, res) => {

  const allUsers = await User.find({native: Boolean(req.query.native)});
  const oneUser = allUsers[Math.round(Math.random() * allUsers.length)];


  return res.json(oneUser);
})




module.exports = router;
