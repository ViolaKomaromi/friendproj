const express = require("express");
const controller = require("../controllers/userController");
const User = require("../models/User");
const {userMiddle, validateUserExists} = require('../middleware/middleware.js');


const router = express.Router();

router.post("/register", controller.registerUser);

router.post("/login", controller.login);

router.get('/profile/:id', async(req, res) => {
      const user = await User.find();
      res.status(200).json(user);
})


router.put('/edit/:id', async (req, res) => {

  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        location: req.body.location,
        interests: req.body.interests,
        gender: req.body.gender,
      },
      { new: true }
    );
    if (user === null) {
      res.status(404).json('user not edited 🔴');
      return;
    }
    res
      .status(200)
      .json({ message: "Profile was updated💚", updatedProfile: user});

  } catch (error) {
    res.status(400).json({ message: "Error happened", error: error });
  }

});

router.delete("/delete/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete(req.body.id);

    if (tea == null) {
      res.status(404).json("User not found");
      return;
    }

    res.status(200).json({ message: "User was deleted.", deletedTea: tea });
  } catch (error) {
    res.status(400).json({ message: "Error happened", error: error });
  }

  res.status(200).json(user);
});



module.exports = router;
