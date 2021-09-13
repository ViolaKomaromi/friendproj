
const express = require('express');
const mockData = require('../MOCK_DATA(2).json');
const axios = require('axios');

const router = express.Router();



router.get('/', (req, res)=> {

    const dataFound = mockData[Math.round(Math.random() * mockData.length)];
    
    return res.json(dataFound);
  })




module.exports = router;
