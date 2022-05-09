const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    display_name: { type: String, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    cart:{type:[String]}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  return await bcryptjs.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
