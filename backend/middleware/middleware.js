
const express = require('express');
const User = require('../models/User')


exports.userMiddle = async (req, res, next) => {
    const {body} = req;

    // console.log('i hope i get this 😢');

    try {
        const user = await User.findOne({
            username: body.username
        });

        if(user !== null) {
                throw 'User already exists';
        }
         next();
    } catch (error) {
        res.status(500).send(error);
        
    }
   
}

exports.validateUserExists = async (req, res, next) => {

    const { body } = req;

    try {
        const user = await User.findOne({ username: body.username });

        if(user === null) {
            throw "User does not exist"
        }

        req.user = user;

        next();
    } catch (error) {
        res.status(500).send(error);
    }
}
