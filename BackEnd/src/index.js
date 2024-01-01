require('dotenv').config();
const express = require('express');
const cookies = require("cookie-parser");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
const compression = require('compression')
import * as envApp from './config/envApp';
const route = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Travalid API",
      version: "1.0.1"
    },
    servers: [
      {
        url: `http://localhost:${envApp.port}`
      }
    ]
  },
  apis: ['./src/common/swagger/apiDocs.yaml'], // files containing annotations as above
};
const openapiSpecification = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));



app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'));
// HTTP Logger
app.use(morgan('combined'));

// Allows the server to identify origin (protocol + domain name + port) to download and use resources from the server  
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // res.header('Access-Control-Allow-Credentials', true);
  next();
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookies());
route(app);

app.listen(envApp.port, () => {
  console.log(`http://localhost:${envApp.port}`);
});
