const mongoose = require('mongoose');
const validator = require('validator');


const usersSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalide Email");
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    added_on:{
        type:Date,
        default:Date.now
    }
});

const Userdata = new mongoose.model('user',usersSchema);

module.exports = Userdata;