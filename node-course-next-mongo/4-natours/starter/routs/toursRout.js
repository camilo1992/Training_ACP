const express = require('express');
const router = express.Router();

// this is object distructuring... this functions are imported form a differetn module in order to
// keep and order... they are exported in the exports object.
const {
  getAllTours,
  addNewTour,
  getTour,
  deleteTour,
  checkID,
  checkBODY,
} = require('../controllers/tourControllers');

// we can also create a param middleware that only will execute with a certain param
// router.param('id', (req, res, next, val) => {
//   console.log(`the reeq param is ${val}`);
//   // val represent the id requested in the url ...
//   next();
// });
router.param('id', checkID);

// as we did it with the checkID function we can also check iff the post request body is correct
// we create it in the toursController and then import it and use right into the post method

// router.route('/api/v1/tours').get(getAllTours).post(addNewTour);
// we do not need to sopecify the rout... since it was specified in the initial middleware...
// in the ap.js file.... as the first argument.
router.route('/').get(getAllTours).post(checkBODY, addNewTour);
// we can chain our methods since we are ussing express... this is a feature taht helps us
// keep an order.

router
  // .route('/api/v1/tours/:id')
  .route('/:id')
  .get(getTour)
  .patch(addNewTour)
  .delete(deleteTour);

module.exports = router;
