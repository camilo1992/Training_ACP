const express = require('express');
const router = express.Router();
const fs = require('fs');
const {
  getAllTours,
  addNewTour,
  getTour,
  deleteTour,
} = require('../controllers/tourControllers');

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
