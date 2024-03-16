const mongoose = require("mongoose")

const QuizSchema = new mongoose.Schema({
    email:{
        
    }
})

module.exports = mongoose.model('Quiz' , QuizSchema) ;