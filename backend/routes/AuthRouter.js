const express = require('express');
const {signup} = require('../controllers/AuthController');
const {signupValidation} = require('../middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login',(req, res) => {
    res.send('Login route');
});

router.post('/signup', signupValidation, signup);

module.exports = router;

