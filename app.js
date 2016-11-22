'use strict';

const express = require('express');
const expressValidator = require('express-validator');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const validators = require('./lib/validators');
const contact = require('./routes/contact');
const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator(validators));
app.use('/submit', contact);
app.use(express.static(__dirname + '/public', { extensions: ['html'] }));

module.exports = app;