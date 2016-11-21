'use strict';

const nodemailer = require('nodemailer');
const fs = require('fs');

// Express callback for '/submit' POST route
function sendMail(request, response) {

  // Validate the request data
  const errorMessage = 'Please check your entry';
  request.checkBody('name', errorMessage).hasContent();
  request.checkBody('email', errorMessage).isEmail();
  request.checkBody('comment', errorMessage).hasContent();
  request.checkBody('topic', errorMessage).honeyPot();

  // Sanitize the request data
  request.sanitize('name').escape();
  request.sanitize('email').escape();
  request.sanitize('comment').escape();

  // Check for validation errors
  const error = request.validationErrors();

  if (error) {
    response.json({ validator: error });
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
           <p>${request.body.name}</p>
           <h2>Reply To</h2>
           <p>${request.body.email}</p>
           <h2>Comment</h2>
           <p>${request.body.comment}</p>`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      response.json({ status: { error: 'Error. Looks like something went wrong.' }});
    } else {
      response.json({ status: { success: 'Success! I will be in touch soon.' }});
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
