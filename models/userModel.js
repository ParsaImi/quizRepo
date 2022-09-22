const mongoose = require('mongoose')
const validator = require("validator")


const userSchema = new mongoose.Schema({
        name : {type : String , required : [true , "a user need name"]},
        password : {type : String , required : [true , "a user need password"] , minLength : 8 , select : false},
        passwordconfirm : {type : String ,
        required : [true , "a user need passwordConfirm"] ,
        validate : { validator : function(el) {
            return el === this.password
        } , message : " The Password Shoud be the Same" }  },
        email : {type : String , required : [true , "a user need email"] , unique : true , lowercase : true , validate : [validator.isEmail]},
        photo : {type : String , default : 'default.jpg' },
        passwordChangedAt : Date,
        role : {type : String , enum : ["user","admin"] , default : "user"},
        resetPasswordToken : String,
        resetPasswordTokenExpire : Date,
        active : {
            type : Boolean,
            default : true,
            select : false
        }
    
    
})


const User = mongoose.model("User" , userSchema)
module.exports = User