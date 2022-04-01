const mongoose = require("mongoose")

const CategoryModel = require("./Category")
const GameItemModel = require("./GameItem")

const GamesSchema = new mongoose.Schema({
  title : {
    type : String,
    required : [true,'Please add game title'],
    unique : true,
    maxlength : [40,'Title cant be more than 40 characters']
  },
  description : {
    type : String,
    required : true,
  },
  gameItems : [GameItemModel],
  category : [CategoryModely],
  image : String
})

const GamesModel = mongoose.model("GamesModel",GamesSchema)

module.exports = GamesModel