const mongoose = require("mongoose");

const shawarmaSchema = mongoose.Schema(
  {
    name: { type: String, required: true }, 
    varients: [String], 
    prices: [Object], 
    category: { type: String, required: true }, 
    image: { type: String, required: true }, 
    description: { type: String, required: true }, 
  },
  {
    timestamps: true,
  }
);

const shawarmaModel = mongoose.model("Shawarma", shawarmaSchema);
module.exports = shawarmaModel;
