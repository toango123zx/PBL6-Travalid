require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();

import * as envApp from './config/envApp';

const route = require('./routes');

app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'))
// HTTP Logger
app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
route(app);

app.listen(envApp.port, () => {
  console.log(`http://localhost:${envApp.port}`);
})

