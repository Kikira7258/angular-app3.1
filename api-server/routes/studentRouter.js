const express = require('express');
const router = express.Router();
const studentController = require('./../controllers/studentController');
// Import the middle wear
const { getAllStudents,
        createAdvanceStudent,
        checkStudentID,
        checkStudentDetails
      } = require('./../controllers/studentController');

router.param('id', checkStudentID);

// use the middle wear
router
    .route('/')
    .get(getAllStudents)
    .post(checkStudentDetails, createAdvanceStudent);
router
    .route('/:id')
    .get(studentController.getStudentById)
    .patch(studentController.updateStudent)
    .put(studentController.updateStudent)
    .delete(studentController.deleteStudent);

module.exports = router;

