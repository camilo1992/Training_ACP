const fs = require('fs');
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

const tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json'));

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestedTime,
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

const addNewTour = (req, res) => {
  // since this is a post express does not exposes the body into the req
  // we need to create a middleware... ---> something that handles the data in teh middle?
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  // update tours arary with new one
  tours.push(newTour);

  //update tours.json file with the old and new tour
  fs.writeFile(
    './dev-data/data/tours-simple.json',
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: { tour: newTour },
      });
    }
  );

  //res.send('Done');
};
const getTour = (req, res) => {
  // the notation ":" ---> helps us idetentify a parameter ""params"
  // so we can access it though the req.params
  const id = +req.params.id;
  const tour = tours.find((tour) => tour.id === id);
  // we gotta check if the request is valid wether the input is a string or a number o invalid
  if (!tour)
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tour: tour,
    },
  });
};
const updateTour = (req, res) => {
  const id = +req.params.id;
  const tour = tours.find((tour) => tour.id === id);

  if (!tour)
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<updated element here',
    },
  });
};

const deleteTour = (req, res) => {
  const id = +req.params.id;
  const tour = tours.find((tour) => tour.id === id);

  if (!tour)
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });

  res.status(204).json({
    status: 'success',
    data: {
      tour: null,
    },
  });
};

// there are diffent ways of organizing our code
// 1   way
// app.get('/api/v1/tours'), getAllTours;
// app.post('/api/v1/tours', addNewTour);

// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// 2 way
app.route('/api/v1/tours').get(getAllTours).post(addNewTour);
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(addNewTour)
  .delete(deleteTour);

app.listen(port, () => {
  console.log(`The serves has started at port ${port}`);
});
