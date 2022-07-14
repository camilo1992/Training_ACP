const express = require('express');
const {
  getAllusers,
  addNewUser,
  getUser,
  deleteUser,
} = require('../controllers/userControllers');
const router = express.Router(); // Here we are creatting a new middleware that will be executed once it is hit by

router.route('/').get(getAllusers).post(addNewUser);
router.route('/:id').get(getUser).patch(addNewUser).delete(deleteUser);

module.exports = router;
