import * as envApp from './config/envApp';

require('dotenv').config();
const path = require('path');
const express = require('express');
const cookies = require("cookie-parser");
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'));
// HTTP Logger
app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookies());
route(app);

app.listen(envApp.port, () => {
  console.log(`http://localhost:${envApp.port}`);
});
