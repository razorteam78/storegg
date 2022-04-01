const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  fullName : {
    type : String,
    required : [true,'Please add fullname'],
    trim : true,
  },
  fullName : {
    type : String,
    required : [true,'Please add fullname'],
    trim : true,
  },
  fullName : {
    type : String,
    required : [true,'Please add fullname'],
    trim : true,
  },
})

const UserModel = mongoose.model("UserModel",UserSchema)

module.exports = UserModel