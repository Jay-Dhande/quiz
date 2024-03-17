const TeacherSchema = require('../models/TeacherModel')

exports.AddTeacher = async(req , res) => {
    const { email ,name, PhoneNo,subject ,classes  , teachId} = req.body ;
    
    const teachers = TeacherSchema({
        email ,name, PhoneNo,subject ,classes,teachId
    }) 

    try {

        if(!email || !name || !PhoneNo || !subject || !classes  || !teachId){
            
            return res.status(400).json({message:"Fill All Fields Properly"})
        }
       

        await teachers.save()
        res.status(200).json({message:'teachers Added'})
    } catch (error) {
        console.log("error" ,error);
        res.status(500).json({message:"Server Error"})
    }
}