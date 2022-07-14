const express = require('express');
const router = express.Router();
const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

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

// Routting for tours
// router.route('/api/v1/tours').get(getAllTours).post(addNewTour);
router.route('/').get(getAllTours).post(addNewTour);
router
  // .route('/api/v1/tours/:id')
  .route('/:id')
  .get(getTour)
  .patch(addNewTour)
  .delete(deleteTour);

module.exports = router;
