const express = require("express");
const route = express.Router();
const StudentModel = require("../Model/studentModel")
const { SendResponse } = require("../helper")

// Get Method:

route.get('/', async (req, res) => {
    try {
        const result = await StudentModel.find();
        if (!result) {
            res.send(SendResponse(false, null, "No Data Found")).status(404)
        }
        else {
            res.send(SendResponse(true, result)).status(200)
        }
    }

    catch (e) {
        console.log(e)
        res.send(SendResponse(false, null, "Internal Server Error")).status(400)
    }

});

// Get By Id Method:

route.get('/:id', (req, res) => {
    res.send("Get Student Data by Id ");
});

// Post Method:

route.post('/', async (req, res) => {
    const { fullName, fatherName, contact, email, password } = req.body;
    const errorArray = [];
    try {
        if (!fullName) {
            errorArray.push("fullName : Required")
        }
        if (!fatherName) {
            errorArray.push("fatherName : Required")
        }
        if (!contact) {
            errorArray.push("contact : Required")
        }
        if (!email) {
            errorArray.push("email : Required")
        }
        if (!password) {
            errorArray.push("password : Required")
        }
        if (errorArray.length > 0){
            res.send(SendResponse(false, errorArray, null, "All Fields Required")).status(400);
            return;
        }

        else {
            let Obj = { fullName, fatherName, contact, email, password };
            let student = new StudentModel(Obj);
            await student.save();
            if (!student) {
                res.send(SendResponse(false, null, "Internal Server Error")).status(400);
            }
            else {
                res.send(SendResponse(true, student, "Data Saved Successfully")).status(200);
            }
        }
    }
    catch (e) {
        res.send(SendResponse(false, null, "Internal Server Error")).status(400);
    }

});

// Put Method:

route.put('/:id', (req, res) => {
    res.send("Update Student Data by Id ");

});

// Delete Method:

route.delete('/:id', (req, res) => {
    res.send("Delete Student Data ");

});


module.exports = route;