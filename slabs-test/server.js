const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const { ValidationError } = require('sequelize');
require('dotenv').config();
// const mailchimp = require("@mailchimp/mailchimp_marketing");
const routes = require('./backend/routes');
const { environment } = require('./backend/config');
const isProduction = environment === 'production';

//serve static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('slabs-test/build'));
}

var corsOptions = {
  origin: "http://localhost:3000"
};

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security Middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors(corsOptions));
}

app.use(routes);

// 404 handler
app.use('/', (req, res) => {
  res.status(404).send('404 Not Found');
});


app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;