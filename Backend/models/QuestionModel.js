const mongoose = require("mongoose")
// quizid, name, grade, date, time, duration, subject, type, pattern, marks, questions, instructions
const QuestionSchema = new mongoose.Schema({
    questId:{
        type:String , 
        required:true , 
        trime:true
    },
    quizid:{
        type:String , 
        required:true , 
        trime:true
    },
    subject:{
        type:String , 
        required:true,
        trim:true , 
    }, 
    type:{
        type:String , 
        required:true,
        trim:true ,
    },
    marks:{
        type:String , 
        required:true,
        trim:true ,
    },
    question:{
        type:String , 
        required:true,
        trim:true ,
    }, 
    optA:{
        type:String , 
        required:true,
        trim:true ,
    },
    optB:{
        type:String , 
        required:true,
        trim:true ,
    },
    optC:{
        type:String , 
        required:true,
        trim:true ,
    },
    optD:{
        type:String , 
        required:true,
        trim:true ,
    },
    correctOpt:{
        type:String , 
        required:true,
        trim:true ,
    }
})

module.exports = mongoose.model('Question' , QuestionSchema) ;