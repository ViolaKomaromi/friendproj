const bcrypt = require('bcrypt');
const Message = require('../models/Message');

exports.newMessage = async (req, res) => {
  try {
    var newMessage = await Message.create({
      fullname: req.body.fullname,
      email: req.body.email,
      message: req.body.message,
      date: new Date(),
    });
    res.status(200).json({ message: 'Message sent' });
  } catch (error) {
    console.log('the error is', error);
    res
      .status(400)
      .json({ message: 'Something went wrong sending message', error: error });
  }
};
