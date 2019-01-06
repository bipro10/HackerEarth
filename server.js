const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');


// SETUP EXPRESS APP
const app = express();


// CONNECT TO DB

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//mongoose.Promise = global.Promise;


// USE MIDDLEWARE

// Bodyparser Middleware
app.use(bodyParser.json());

// Initialize Routes
app.use('/api/items', items);

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message});
});


// LISTEN FOR REQUESTS
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));