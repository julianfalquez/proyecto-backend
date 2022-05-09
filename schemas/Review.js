const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    product_id: { type: String, required: true },
    rating: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Review", ReviewSchema);
