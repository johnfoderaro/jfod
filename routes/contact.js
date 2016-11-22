'use strict';

const express = require('express');
const multer = require('multer');
const sendMail = require('../lib/send-mail');
const router = express.Router();
const form = multer();

// Contact form
router.post('/', form.array(), sendMail);

module.exports = router;
