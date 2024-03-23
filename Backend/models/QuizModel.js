const mongoose = require("mongoose")
// quizid, name, grade, date, time, duration, subject, type, pattern, marks, questions, instructions
const QuizSchema = new mongoose.Schema({
    quizid:{
        type:String , 
        required:true , 
        trime:true
    },
    name:{
        type:String , 
        required:true , 
        trime:true
    },
    grade:{
        type:String , 
        required:true ,
        trime:true,
    },
    date:{
        type:Date , 
        required:true,
        trim:true ,
    },
    time:{
        type:String , 
        required:true,
        trim:true ,
    },
    duration:{
        type:String , 
        required:true,
        trim:true ,
    },
    subject:[{
        type:String , 
        required:true,
        trim:true , 
    }], 
    type:{
        type:String , 
        required:true,
        trim:true ,
    },
    pattern:{
        type:String , 
        required:true,
        trim:true ,
    },
    marks:{
        type:String , 
        required:true,
        trim:true ,
    },
    questions:{
        type:String , 
        required:true,
        trim:true ,
    }, 
    instructions:{
        type:String , 
        required:true,
        trim:true ,
    }
})

module.exports = mongoose.model('Quiz' , QuizSchema) ;