const express = require("express");
const route = express.Router();
const TeacherModel = require("../Model/teacherModel");
const { SendResponse } = require("../helper");

// Get Method:

route.get('/', async (req,res)=>{
    
    try{
        const result = await TeacherModel.find();

        if(!result){
            res.send(SendResponse(false, null, "Data Not Found")).status(404);
        }
        else{
            res.send(SendResponse(true, result)).status(200);
        }
    }
    catch (e){
        res.send(SendResponse(false, null, "Internal Server Error")).status(400);
    }

});

// Get By Id Method:

route.get('/:id',(req,res)=>{
    res.send("Get Teacher Data by Id ");
});

// Post Method: 

route.post('/', async (req,res)=>{
    
    const {Name, Course, Contact} = req.body;
    const errorArray = [];

    try{
        if (!Name) {
            errorArray.push("Name : Required");
          }
          if (!Course) {
            errorArray.push("Course : Required");
          }
          if (!Contact) {
            errorArray.push("Contact : Required");
          }
          if (errorArray.length > 0) {
            res
              .send(SendResponse(false, errorArray, null, "All Fields Required"))
              .status(400);
            return;
          } 
        else{
            let Obj = {Name, Course, Contact};
            let Teacher = new TeacherModel(Obj);
            await Teacher.save();

            if(!Teacher){
                res.send(SendResponse(false, null, "Internal Server Error")).status(400);
            }
            else{
                res.send(SendResponse(true, Teacher, "Data Send Successfully")).status(200);
            }
        }  
    }

    catch(e) {
        res.send(SendResponse(false, null, "Internal Server Error")).status(400);
    }


});

// Put Method:

route.put('/:id',(req,res)=>{
    res.send("Update Teacher Data by Id ");

});

// Delete Method:

route.delete('/:id',(req,res)=>{
    res.send("Delete Teacher Data ");

});


module.exports = route;