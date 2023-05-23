const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:true,
    },
    Course: {
        type: String,
        required:true,
    },
    Contact: {
        type: String,
        required:true,
    },
})

const TeacherModel = mongoose.model('RegisteredTeachers',TeacherSchema);


module.exports = TeacherModel;