const express = require('express');
const app = express();
const StudentRouter = require('./Routers/StudentRouter');
const CourseRouter = require("./Routers/CourseRouter");
const TeacherRouter = require("./Routers/TeacherRouter");
const InstituteRouter = require("./Routers/InstituteRouter");

require("dotenv").config();
const mongoose = require('mongoose')
app.use(express.json())



app.use('/api/students',StudentRouter);
app.use('/api/courses',CourseRouter);
app.use('/api/teachers',TeacherRouter);
app.use('/api/institutes',InstituteRouter);





mongoose.connect(process.env.MONGO_URI).then((res)=>{
    app.listen(process.env.PORT,()=>{
        console.log("Database connected successfully & server is listen on 5000...");
});

}).catch((err)=>{
console.log(err);
})