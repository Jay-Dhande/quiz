const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
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
        type:Number , 
        required:true ,
        trime:true,
        unique: true
    },
    RollNo:{
        type:String , 
        required:true ,
        trime:true,
        unique: true
    },
    grade:{
        type:String , 
        required:true ,
        trime:true,
    },
    subjects:[{
        type:String , 
        required:true,
        trim:true , 
    }]
})

module.exports = mongoose.model('Student' , StudentSchema) ;