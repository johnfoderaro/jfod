'use strict';

const fs = require('fs');
const nodemailer = require('nodemailer');
const config = require('./../config');

// Express callback for '/submit' POST route
function sendMail(req, res) {

  // validate
  const errorMessage = 'Please check your entry.';
  req.checkBody('name', errorMessage).hasContent();
  req.checkBody('email', errorMessage).isEmail();
  req.checkBody('comment', errorMessage).hasContent();
  req.checkBody('topic', errorMessage).honeyPot();

  // sanitize
  req.sanitize('name').escape();
  req.sanitize('email').escape();
  req.sanitize('comment').escape();

  // check for errors
  const err = req.validationErrors();
  if (err) res.json({ validator: err });

  // Set the nodemailer transporter
  const transporter = nodemailer.createTransport({
    aliases: ["Me", "Mac"],
    domains: ["me.com", "mac.com"],
    host: "smtp.mail.me.com",
    port: 587,
    auth: {
      user: config.icloud,
      pass: config.password
    }
  });

  // Set email options
  const mailOptions = {
    from: config.email,
    to: config.email,
    subject: 'New Jfod.me Submission',
    html:`
    <h2>From</h2>
    <p>${req.body.name}</p>
    <h2>Reply To</h2>
    <p>${req.body.email}</p>
    <h2>Comment</h2>
    <p>${req.body.comment}</p>`
  };

  // send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({ status: { error: 'Error. Looks like something went wrong.' }});
    } else {
      res.json({ status: { success: 'Success! I will be in touch soon.' }});
    }
  });
}

module.exports = sendMail;
