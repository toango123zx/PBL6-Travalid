require('dotenv').config();
const express = require('express');
const cookies = require("cookie-parser");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const compression = require('compression')
import * as envApp from './config/envApp';

const route = require('./routes');

app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'));
// HTTP Logger
app.use(morgan('combined'));

app.use(compression())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookies());
route(app);

app.listen(envApp.port, () => {
  console.log(`http://localhost:${envApp.port}`);
});
