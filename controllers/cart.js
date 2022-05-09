const User = require("../schemas/User");

const fetchCart = async (req, res) => {
  const user_id = req.query.user_id;
  const user = await User.findOne({ _id: user_id });
  res.send(user.returnCart());
};

const addToCart = async (req, res) => {
  const { product_id, user_id } = req.body;
  const user = await User.findOne({ _id: user_id });
  user.addToCart(product_id);
  await user.save();
  res.send("Item added");
};

const buyCart = async (req, res) => {
    const {  user_id } = req.body;
    const user = await User.findOne({ _id: user_id });
    user.purchase();
    await user.save();
    res.send("Items Purchased");
};

exports.fetchCart = fetchCart;
exports.addToCart = addToCart;
exports.buyCart = buyCart;
