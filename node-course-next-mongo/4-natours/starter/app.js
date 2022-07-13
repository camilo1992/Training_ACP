const fs = require('fs');
const express = require('express');
const { json } = require('express');
const app = express();
const port = 3000;
// this is a step which the request has to go through.....
app.use(express.json());

const tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json'));

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
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
});

app.post('/api/v1/tours', (req, res) => {
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
});

app.listen(port, () => {
  console.log(`The serves has started at port ${port}`);
});
