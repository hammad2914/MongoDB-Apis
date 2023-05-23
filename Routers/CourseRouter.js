const express = require("express");
const route = express.Router();
const CourseModel = require("../Model/courseModel")
const { SendResponse } = require("../helper");

// Get Method:

route.get('/', async (req,res)=>{
    
    try{
        const result = await CourseModel.find();

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
    res.send("Get Course Data by Id ");
});

// Post Method:

route.post('/', async (req,res)=>{
    
    const {Name, Duration, Fee, ShortName} = req.body;
    const errorArray = [];

    try{
        if (!Name) {
            errorArray.push("Name : Required");
          }
          if (!Duration) {
            errorArray.push("Duration : Required");
          }
          if (!Fee) {
            errorArray.push("Fee : Required");
          }
          if (!ShortName) {
            errorArray.push("ShortName : Required");
          }
          if (errorArray.length > 0) {
            res
              .send(SendResponse(false, errorArray, null, "All Fields Required"))
              .status(400);
            return;
          } 
        else{
            let Obj = {Name, Duration, Fee, ShortName};
            let Course = new CourseModel(Obj);
            await Course.save();

            if(!Course){
                res.send(SendResponse(false, null, "Internal Server Error")).status(400);
            }
            else{
                res.send(SendResponse(true, Course, "Data Send Successfully")).status(200);
            }
        }  
    }

    catch(e) {
        res.send(SendResponse(false, null, "Internal Server Error")).status(400);
    }

});

// Put Method:

route.put('/:id',(req,res)=>{
    res.send("Update Course Data by Id ");

});

// Delete Method:

route.delete('/:id',(req,res)=>{
    res.send("Delete Course Data ");

});


module.exports = route;