const QuizSchema =  require('../models/QuizModel')

exports.addQuiz = async (req , res) =>{
    const {quizid, name, grade, date, time, duration, subject, type, pattern, marks, questions, instructions } = req.body ; 

    const quiz = QuizSchema({
        quizId, name, grade, date, time, duration, subject, type, pattern, marks, questions, instructions
    }) 

    try {

        if(!quizId || !name || !date || !time || !grade || !subject || !duration || !type || !pattern || !marks || !questions || !instructions  ){
            
            return res.status(400).json({message:"Fill All Fields Properly"})
        }
       

        await quiz.save()
        res.status(200).json({message:'quiz Added'})
    } catch (error) {
        console.log("error" ,error);
        res.status(500).json({message:"Server Error aaya hai "})
    }
}