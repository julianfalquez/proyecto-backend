const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    display_name: { type: String, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    cart: { type: [Object] },
    purchaseHistory: { type: [Object] },
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
UserSchema.methods.addToCart = async function (product_id) {
  this.cart = [...this.cart, { product_id: product_id }];
};
UserSchema.methods.returnCart = function () {
  return this.cart;
};
UserSchema.methods.purchase = function () {
  console.log(this.cart);
  this.purchaseHistory = [...this.cart];
  console.log(this.purchaseHistory);
  this.cart = [];
};
UserSchema.methods.returnHistory = function () {
  return this.purchaseHistory;
};

module.exports = mongoose.model("User", UserSchema);
