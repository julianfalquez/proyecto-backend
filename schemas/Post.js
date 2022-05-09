const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    owner_id: { type: String, required: true },
    img_url: { type: String, required: true },
    display_name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Post", PostSchema);
