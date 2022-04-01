const mongoose = require("mongoose")

const CategorySchema  = new mongoose.Schema({
  name : String,
  slug : String
})

const CategoryModel = mongoose.model("CategoryModel",CategorySchema)

module.exports = CategoryModel