// impoprt our tours and users rout their modules

const tourRouter = require('./routs/toursRout');
const userRouter = require('./routs/usersRout');

// we call the business owner and requiere express
const express = require('express');
const morgan = require('morgan');
// for comfort we stroed it in a app
const app = express();

const { json } = require('express');

const port = 3000;
// this is a step which the request has to go through.....
// This is a middleware fucntion that is necessary in order to get access to the body in tehpost method.
app.use(express.json());
// we can use another library called moregan which can provide more inf about the request in the cosnole
// thiinf can be very usefull and save us some time
app.use(morgan('dev'));

// we can create our own middleware functions , as follow.
app.use((req, res, next) => {
  console.log('we are in a middleware customed f');
  next();
});
// we can even add properties to the req obj when middlewaring ...

app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});

// there are diffent ways of organizing our code
// 1   way
// app.get('/api/v1/tours'), getAllTours;
// app.post('/api/v1/tours', addNewTour);

// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.d  elete('/api/v1/tours/:id', deleteTour);

// 2 way

// --------------------titying up our files---------------------------

// In order to separate our rout into differetn files, we need to create a rout for every group of routes...

// routting for users
app.use('/api/v1/tours', tourRouter); // This process is called mountting router
app.use('/api/v1/users', userRouter);

app.listen(port, () => {
  console.log(`The serves has started at port ${port}`);
});
