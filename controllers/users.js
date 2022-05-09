const User = require("../schemas/User");

const login = async (req, res) => {
  const { username, password } = req.body;
  const usernameUser = await User.findOne({ username: username });
  if (usernameUser) {
    if (await usernameUser.matchPassword(password)) {
       res.send(usernameUser);
    } else {
      res.status(400).send({ error: "wrong password" });
    }
  } else {
    res.status(400).send({ error: "no user found" });
  }
};
const signup = async (req, res) => {
  const { display_name, username, password } = req.body;
  const usernameUser = await User.findOne({ username: username });
  if (usernameUser) {
    res
      .status(400)
      .send({ error: "There is already an account with that username" });
  } else {
    const newUser = new User({ display_name, username, password });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    res.send("succes");
  }
};
const fetchUser = async (req, res) => {
  const  user_id  = req.query.user_id;
  const idUser = await User.findOne({ _id: user_id });
  if (idUser) {
    res.send(idUser);
  } else {
    res.status(400).send({ error: "No user found" });
  }
};
const fetchPrevLogin = async (req, res) => {
  const { user_id } = req.body;
  const idUser = await User.findOne({ _id: user_id });
  if (idUser) {
    res.send(idUser);
  } else {
    res.status(400).send({ error: "No user found" });
  }
};

exports.login = login;
exports.signup = signup;
exports.fetchPrevLogin = fetchPrevLogin;
exports.fetchUser = fetchUser;
