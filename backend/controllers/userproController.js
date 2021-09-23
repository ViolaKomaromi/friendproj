const bcrypt = require('bcrypt');
const UserProfile = require('../models/UserProfile');

exports.newUserPro = async (req, res) => {
  try {
    const newMessage = await Message.create({
        fullname: req.body.fullname,
        gender: req.body.gender,
        bio: req.body.bio,
        hobbies: req.body.hobbies,
        beverages: req.body.beverages,
        dishes: req.body.dishes,
        states: req.body.states,
        cities: req.body.cities,
        avatar: req.picName,
        date: new Date(),
    });
    res.status(200).json({ message: 'Profile Updated' });
  } catch (error) {
    console.log('the error is', error);
    res
      .status(400)
      .json({ message: 'Attension !!! Error updating your profile', error: error });
  }
};