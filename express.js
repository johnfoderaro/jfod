'use strict';
const gutil = require('gulp-util');
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/submit', sendMail);
app.use(express.static(__dirname + '/build/'));
app.listen(port, () => gutil.log(`Express listening on port ${port}`));

function sendMail(request, response) {
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
    html: `<h2>Reply To</h2>
           <p>${request.body.email}</p>
           <h2>Comment</h2>
           <p>${request.body.comment}</p>`
};
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      response.json({status: 'error'});
    } else {
      response.json({status: 'success'});
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
