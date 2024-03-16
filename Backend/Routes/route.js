const router = require('express').Router() ;  
const { addStudent } = require('../controllers/Student');
const {AddTeacher} = require('../controllers/Teacher');


router.post('/add-teacher' , AddTeacher)
      .post('/add-student' , addStudent)

module.exports = router ; 