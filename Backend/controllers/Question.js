const QuestionSchema =  require('../models/QuestionModel')

exports.addQuest = async (req , res) =>{
    const {quizId, questId,subject,type,marks,question,optA,optB,optC,optD,correctOpt } = req.body ; 

    const questions = QuestionSchema({
        quizId, questId,subject,type,marks,question,optA,optB,optC,optD,correctOpt
    }) 

    try {

        if(!quizId || !questId || !question || !optA || !optB || !subject || !optC|| !type || !optD  || !correctOpt || !marks  ){
            
            return res.status(400).json({message:"Fill All Fields Properly"})
        }
       

        await questions.save()
        res.status(200).json({message:'quest Added'})
    } catch (error) {
        console.log("error" ,error);
        res.status(500).json({message:"Server Error aaya hai "})
    }
}