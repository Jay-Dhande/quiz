const router = require('express').Router() ;  
const { addQuest, getQuest, getAllQuest } = require('../controllers/Question');
const { addQuiz ,GetQuiz ,getQuizData} = require('../controllers/Quiz');
const { addStudent } = require('../controllers/Student');
const {AddTeacher} = require('../controllers/Teacher');


router.post('/add-teacher' , AddTeacher)
      .post('/add-student' , addStudent)
      .post('/add-quiz' , addQuiz)
      .post('/add-quest' , addQuest)
      .get('/get-quiz' , GetQuiz) 
      .get('/get-quizinstruction' ,getQuizData )
      .get('/get-quest' , getQuest)
      .get('/get-allquest' , getAllQuest)

      
module.exports = router ; 