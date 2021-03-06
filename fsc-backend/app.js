const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//require routes
const indexRouter = require('./routes/index');
const companiesRouter = require('./routes/companies');
const foundersRouter = require('./routes/founders');

const environment = process.env.NODE_ENV || 'development'
if (environment !== 'production') {
  require('dotenv').config(); //setup dotenv unless in production environment, where it is not necessary and may error
}

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, POST, PATCH, GET, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authentication");
  next(); // disable CORS blocking for ease of development
});

//response and request config options
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//tell app when to use which route
app.use('/', indexRouter);
app.use('/companies', companiesRouter);
app.use('/founders', foundersRouter);

module.exports = app;
