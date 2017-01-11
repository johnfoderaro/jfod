'use strict';

const nodemailer = require('nodemailer');
const fs = require('fs');

// Express callback for '/submit' POST route
function sendMail(req, res) {

  // Validate the req data
  const errorMessage = 'Please check your entry.';
  req.checkBody('name', errorMessage).hasContent();
  req.checkBody('email', errorMessage).isEmail();
  req.checkBody('comment', errorMessage).hasContent();
  req.checkBody('topic', errorMessage).honeyPot();

  // Sanitize the req data
  req.sanitize('name').escape();
  req.sanitize('email').escape();
  req.sanitize('comment').escape();

  // Check for validation errors
  const error = req.validationErrors();

  if (error) {
    res.json({ validator: error });
    return;
  }

  // Set the nodemailer transporter
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

  // Set email options
  const mailOptions = {
    from: readConfig('email'),
    to: readConfig('email'),
    subject: 'New Jfod.me Submission',
    html: `<h2>From</h2>
           <p>${req.body.name}</p>
           <h2>Reply To</h2>
           <p>${req.body.email}</p>
           <h2>Comment</h2>
           <p>${req.body.comment}</p>`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({ status: { error: 'Error. Looks like something went wrong.' }});
    } else {
      res.json({ status: { success: 'Success! I will be in touch soon.' }});
    }
  });
}

// Using the synchronous version of 'fs', as the file is
// incredibly small, with just three pieces of information
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

module.exports = sendMail;
