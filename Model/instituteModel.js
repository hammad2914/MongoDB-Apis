const mongoose = require('mongoose');

const InstituteSchema = new mongoose.Schema({
    Name: {
        type: String,
        required:true,
    },
    Address: {
        type: String,
        required:true,
    },
    ShortName: {
        type: String,
        required:true,
    }
    ,
    Contact: {
        type: String,
        required:true,
    },
})

const InstituteModel = mongoose.model('RegisteredInstitutes',InstituteSchema);


module.exports = InstituteModel;