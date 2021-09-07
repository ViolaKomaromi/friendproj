
const mockData = require('../MOCK_DATA(1).json');
const express = require('express');



 const randomFilter = (array) => {
  const range = array.length;

  return array[Math.floor(Math.random() * range)];
};









const Filter = model("Filter", randomFilter);
module.exports = Filter;

