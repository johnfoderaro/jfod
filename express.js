'use strict';

const gutil = require('gulp-util');
const express = require('express');
const expressValidator = require('express-validator');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const multer = require('multer');
const sendMail = require('./lib/send-mail');
const validators = require('./lib/validators');
const app = express();
const form = multer();
const port = 3000;

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator(validators));
app.post('/submit', form.array(), sendMail);
app.use(express.static(__dirname + '/build', { extensions: ['html'] }));
app.listen(port, () => gutil.log(`Express listening on port ${port}`));
