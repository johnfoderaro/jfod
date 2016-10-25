'use strict';

const nodemailer = require('nodemailer');
const fs = require('fs');

function sendMail(request, response) {
  // Validate the request data
  request.checkBody('name', 'Please check your entry').hasContent();
  request.checkBody('email', 'Please check your entry').isEmail();
  request.checkBody('comment', 'Please check your entry').hasContent();
  request.checkBody('topic', 'Please check your entry').honeyPot();

  // Sanitize the request data
  request.sanitize('name').escape();
  request.sanitize('email').escape();
  request.sanitize('comment').escape();

  const error = request.validationErrors();
  if (error) {
    response.json({ validator: error });
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
      response.json({ status: { error: 'Error. Looks like something went wrong.' }});
    } else {
      response.json({ status: { success: 'Success! I will be in touch soon.' }});
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

module.exports = sendMail;
