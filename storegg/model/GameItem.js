const mongoose = require("mongoose")
const GamesModel = require("./Games")

const GameItemSchema  = new mongoose.Schema({
  gameID : GamesModel,
  name : String,
  price : Number
})

module.exports = GameItemModel || mongoose.models.GameItemModel