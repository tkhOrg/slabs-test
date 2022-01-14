const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const { ValidationError } = require('sequelize');
require('dotenv').config();
// const mailchimp = require("@mailchimp/mailchimp_marketing");
const routes = require('../backend/routes');

//serve static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('slabs-test/build'));
}

app.use(routes);

// 404 handler
app.use('/', (req, res) => {
  res.status(404).send('404 Not Found');
});

// global error handler
app.use('/',(err, req, res, next) => {
  const defaultErr =  {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  res.status(errorObj.status).send(errorObj.message);
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