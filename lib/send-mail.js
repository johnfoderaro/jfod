'use strict';

const fs = require('fs');
const nodemailer = require('nodemailer');
const config = require('./../config');

function sendMail(req, res) {

  const errorMessage = 'Please check your entry.';

  req.checkBody('name', errorMessage).hasContent();
  req.checkBody('email', errorMessage).isEmail();
  req.checkBody('comment', errorMessage).hasContent();
  req.checkBody('topic', errorMessage).honeyPot();

  req.sanitize('name').escape();
  req.sanitize('email').escape();
  req.sanitize('comment').escape();

  const err = req.validationErrors();
  if (err) {
    return res.json({ validator: err });
  }

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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({ status: { error: 'Error. Looks like something went wrong.' }});
    } else {
      res.json({ status: { success: 'Success! I will be in touch soon.' }});
    }
  });
}

module.exports = sendMail;
