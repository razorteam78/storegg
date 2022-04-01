const mongoose = require("mongoose")

const CategorySchema  = new mongoose.Schema({
  name : String,
  slug : String
})

module.exports = mongoose.models.CategoryModel || mongoose.model("Cateogry",CategorySchema)