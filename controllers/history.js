
const User = require("../schemas/User");

const fetchHistory = async (req, res) => {
  const user_id = req.params.id;
  console.log(user_id)
  const user = await User.findOne({ _id: user_id });
  res.send(user.returnHistory());
};

exports.fetchHistory = fetchHistory;
