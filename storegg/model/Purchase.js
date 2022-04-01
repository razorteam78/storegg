const mongoose = require("mongoose")
const GameItemModel = require("./GameItem")
const PaymentModel = require("./Payment")
const UserModel = require("./User")

const PurchaseSchema = new mongoose.Schema({
  user : UserModel,
  gameAccount : {
    type : String,
    required : [true,"You need to enter your game account"]
  },
  gameItem : GameItemModel,
  payment : PaymentModel,
  total : Number,
  state : {
    type : String,
    default : "Not Paid"
  }
})

module.exports = PurchaseModel || mongoose.models.PurchaseModel