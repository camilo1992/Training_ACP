const express = require('express');
const router = express.Router(); // Here we are creatting a new middleware that will be executed once it is hit by

const getAllusers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This rout is not yet defined',
  });
};
const addNewUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This rout is not yet defined',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This rout is not yet defined',
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This rout is not yet defined',
  });
};

router.route('/').get(getAllusers).post(addNewUser);
router.route('/:id').get(getUser).patch(addNewUser).delete(deleteUser);

module.exports = router;
