const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:true,
    },
    Duration: {
        type: String,
        required:true,
    },
    Fee: {
        type: String,
        required:true,
    }
    ,
    ShortName: {
        type: String,
        required:true,
    },
})

const CourseModel = mongoose.model('RegisteredCourses',CourseSchema);


module.exports = CourseModel;