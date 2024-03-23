const QuestionSchema =  require('../models/QuestionModel')

exports.addQuest = async (req , res) =>{
    const {quizid, questId,subject,type,marks,question,optA,optB,optC,optD,correctOpt } = req.body ; 

    const questions = QuestionSchema({
        quizid, questId,subject,type,marks,question,optA,optB,optC,optD,correctOpt
    }) 

    try {

        if(!quizid || !questId || !question || !optA || !optB || !subject || !optC|| !type || !optD  || !correctOpt || !marks  ){
            
            return res.status(400).json({message:"Fill All Fields Properly"})
        }
       

        await questions.save()
        res.status(200).json({message:'quest Added'})
    } catch (error) {
        console.log("error" ,error);
        res.status(500).json({message:"Server Error aaya hai "})
    }
}


exports.getQuest = async(req , res) => {
    try {
        console.log("req quest", req.query);
        const resp = await QuestionSchema.find({ questId: req.query.questId }).sort({
          createdAt: -1,
        });
        res.status(200).json(resp);
      } catch (err) {
        res.status(500).json({ message: "Some Error Occured" });
      }
}

exports.getAllQuest =  async(req , res) => {
    try {
        console.log("req quest", req.query.quizid);
        const resp = await QuestionSchema.find({ quizid: req.query.quizid })
        res.status(200).json(resp);
        console.log(resp) ; 
      } catch (err) {
        res.status(500).json({ message: "Some Error Occured" });
      }
}