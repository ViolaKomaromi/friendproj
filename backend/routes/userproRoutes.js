let userproModel = require('../models/UserProfile');
let controller = require('../controllers/userproController');
var express = require('express');
var router = express.Router();
var multer = require('multer');



//image upload to server
let storage = multer.diskStorage({
  destination: "images/",
  filename: function (req, file, cb) {
    let picName = file.originalname.split('.')[0] + "-" + Date.now() + "." + file.mimetype.split('/')[1];
    cb(null, picName);
    req.picName = picName
  
  }
});

let upload = multer({storage: storage})

/* GET users listing. /profile/create */
 router.post('/create', upload.single("file"), function (req, res, next) {
  console.log(req.file.originalname);
  console.log(req.body)
  let user = new userproModel({
    fullname: req.body.fullname,
    gender: req.body.gender,
    bio: req.body.bio,
    hobbies: req.body.hobbies,
    beverages: req.body.beverages,
    dishes: req.body.dishes,
    states: req.body.states,
    cities: req.body.cities,
    avatar: req.picName
  });
  


  user.save().then(result => {
    res.send(result)  
  }).catch(err=>res.send(err))
    //res.send('respond with a resource');
    ////next()
  }); 


  router.get('/create', (req, res , next)=>{
    console.log(req.url)
    res.send('it works')
  })



router.post("/userspros", controller.newUserPro);



module.exports = router;
