const mongoose = require("mongoose")

const GameItemSchema  = new mongoose.Schema({
  gameID : String,
  name : String,
  price : Number
})

const GameItemModel = mongoose.model("GameItemModel",GameItemSchema)

module.exports = GameItemModel