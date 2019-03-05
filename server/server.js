const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// SETUP EXPRESS APP
const app = express();


// CONNECT TO DB

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// route testing
app.get('/test', (req, res) =>{
  console.log('Hello Node');
  res.send('<h2>Hello Node</h2>');
});


// USE MIDDLEWARE

//Body-parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// LISTEN FOR REQUESTS
const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server running on port ${port}...`);
})