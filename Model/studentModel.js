const mongoose = require('mongoose');

const StdSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required:true,
    },
    fatherName: {
        type: String,
        required:true,
    },
    contact: {
        type: String,
        required:true,
    }
    ,
    email: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true,
    },
    
})

const StdModel = mongoose.model('registeredStudent',StdSchema);


module.exports = StdModel;