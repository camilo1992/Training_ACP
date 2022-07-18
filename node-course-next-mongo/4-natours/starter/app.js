const express = require('express');
// for comfort we stored it in a app varialbe
const app = express();
const { json } = require('express');
// we can use another library called morgan which can provide more inf about the request in the cosnole
// this can be very usefull and save us some time
const morgan = require('morgan');
app.use(morgan('dev'));

// impoprt our tours and users rout their modules
const tourRouter = require('./routs/toursRout');
const userRouter = require('./routs/usersRout');

// this is a step which the request has to go through.....
// This is a middleware fucntion that is necessary in order to get access to the body in the post method.
app.use(express.json());

// we can create our own middleware functions , as follow.
app.use((req, res, next) => {
  // this Function is only executed when there is a request
  console.log('we are in a middleware customed f');
  next(); // we have to call next at the end so that the call stack is executed
});

app.use((req, res, next) => {
  // we can even add properties to the req obj when middlewaring ...
  req.requestedTime = new Date().toISOString();
  next();
});

// --------------------tidying up our files---------------------------

// In order to separate our rout into differetn files, we need to create a rout for every group of routes...

// routting for users
app.use('/api/v1/tours', tourRouter); // This process is called mountting router
app.use('/api/v1/users', userRouter);

module.exports = app;
