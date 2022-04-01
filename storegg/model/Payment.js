const mongoose = require("mongoose")
const UserModel = require("./User")

const PaymentSchema = new mongoose.Schema({
  user : UserModel,
  bankAccountName : {
    type : String,
    required : true
  },
  type : String,
  bankName : String,
  bankAccountNumber : String,
  date : Date.now()

})


module.exports = PaymentModel || mongoose.models.PaymentModel