const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const { ValidationError } = require('sequelize');
require('dotenv').config();
const mailchimp = require("@mailchimp/mailchimp_marketing");

//serve static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('slabs-test/build'));
}

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/emailSubmit', async (req,res) => {
  const { email } = req.body;

  mailchimp.setConfig({
    apiKey: process.env.API_KEY,
    server: "us20"
  })

  //health check
  async function run(){
    const response = await mailchimp.ping.get();
    console.log(response)
  }
  run()

  try{
    const response = await mailchimp.lists.addListMember("ac3bfabd1e", {
        email_address: email,
        status: "subscribed",
      });
      console.log(JSON.stringify(response))
      res.status(200).json(response)
  }catch(err){
    console.log(JSON.stringify(err))
    res.status(400).json(err)
  }
});

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