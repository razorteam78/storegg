const mongoose = require("mongoose")

const CategoryModel = require("./Category")
const GameItemModel = require("./GameItem")

const GamesSchema = new mongoose.Schema({
  title : {
    type : String,
    required : [true,'Please add game title'],
    unique : true,
    maxlength : [40,'Title cannot be more than 40 characters']
  },
  description : {
    type : String,
    required : true,
  },
  gameItems : [GameItemModel],
  category : [CategoryModel],
  image : String
})

module.exports = GamesModel || mongoose.models.GamesModel