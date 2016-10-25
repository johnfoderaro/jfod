'use strict';
const gutil = require('gulp-util');
const nodemailer = require('nodemailer');
const express = require('express');
const expressValidator = require('express-validator');
const helmet = require('helmet');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const multer = require('multer');
const form = multer();
const fs = require('fs');

//TODO send reponse data to browser
//TODO validation and sanitizing of user input

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.post('/submit', form.array(), sendMail);
app.use(express.static(__dirname + '/build/'));
app.listen(port, () => gutil.log(`Express listening on port ${port}`));

function sendMail(request, response) {
  // Check honeypot
  request.checkBody('name', 'Invalid entry.').isAlpha();
  const error = request.validationErrors();
  if (error) {
    console.error(error);
    response.send(error);
    return;
  }
  const transporter = nodemailer.createTransport({
    aliases: ["Me", "Mac"],
    domains: ["me.com", "mac.com"],
    host: "smtp.mail.me.com",
    port: 587,
    auth: {
      user: readConfig('icloud'),
      pass: readConfig('password')
    }
  });
  const mailOptions = {
    from: readConfig('email'),
    to: readConfig('email'),
    subject: 'New Jfods.me Submission',
    html: `<h2>From</h2>
           <p>${request.body.name}</p>
           <h2>Reply To</h2>
           <p>${request.body.email}</p>
           <h2>Comment</h2>
           <p>${request.body.comment}</p>`
};
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      response.send(error);
    } else {
      response.send(info);
    }
  });
}

function readConfig(item) {
  const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
  switch(item) {
    case 'icloud':
  return config.icloud;
    case 'password':
  return config.password;
    case 'email':
  return config.email;
  }
}
