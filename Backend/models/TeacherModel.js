const mongoose = require("mongoose")

const TeacherSchema = new mongoose.Schema({
    name:{
        type:String , 
        required:true , 
        trime:true
    },
    email:{
        type:String , 
        required:true , 
        trime:true,
        unique: true
    },
    PhoneNo:{
        type:String , 
        required:true ,
        trime:true,
        unique: true
    },
    subject:{
        type:String , 
        required:true,
        trim:true , 
    },
    classes:[{
        type:String , 
        required:true ,
        trime:true,
    }],
    teachId:{
        type:String , 
        required:true ,
        trime:true,
    }
})

module.exports = mongoose.model('Teacher' , TeacherSchema) ;