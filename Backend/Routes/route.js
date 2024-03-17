const router = require('express').Router() ;  
const { addQuest } = require('../controllers/Question');
const { addQuiz } = require('../controllers/Quiz');
const { addStudent } = require('../controllers/Student');
const {AddTeacher} = require('../controllers/Teacher');


router.post('/add-teacher' , AddTeacher)
      .post('/add-student' , addStudent)
      .post('/add-quiz' , addQuiz)
      .post('/add-quest' , addQuest)
module.exports = router ; 