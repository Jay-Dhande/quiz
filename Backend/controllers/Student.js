const StudentSchema = require('../models/StudentModel') 
 
exports.addStudent = async(req,res) => {
    const {email ,name, PhoneNo,RollNo , subjects , grade } = req.body ; 

    const students = StudentSchema({
        email ,name, PhoneNo,RollNo , subjects , grade
    }) 

    try {

        if(!email || !name || !PhoneNo || !RollNo || !grade || !subjects  ){
            
            return res.status(400).json({message:"Fill All Fields Properly"})
        }
       

        await students.save()
        res.status(200).json({message:'students Added'})
    } catch (error) {
        console.log("error" ,error);
        res.status(500).json({message:"Server Error aaya hai "})
    }
}