const Post = require("../schemas/Post");

const fetchPosts = async (req, res) => {
  if (req.query.user_id) {
    const user_id = req.query.user_id;
    const fetchUserPosts = await Post.find({ owner_id: user_id });
    if (fetchUserPosts.length > 0) {
      res.send(fetchUserPosts);
    } else {
      res.send({ msg: "No posts found" });
    }
  } else if (req.query.post_id) {
    const post_id = req.query.post_id;
    const fetchPosts = await Post.find({ _id: post_id });
    if (fetchPosts.length > 0) {
      res.send(fetchPosts);
    } else {
      res.send({ msg: "No posts found" });
    }
  } else {
    res.status(400).send({ error: "Bad params" });
  }
};

const createPost = async (req, res) => {
  const { owner_id, img_url, display_name, description, price } = req.body;
  console.log(owner_id)
  const newPost = new Post({
    owner_id,
    img_url,
    display_name,
    description,
    price,
  });
  await newPost.save();
  res.send("Post Created");
};

const fetchRecentPosts = async (req, res) => {
  const fetchRecentPosts = await Post.find().sort({createdAt:-1});
  res.send(fetchRecentPosts);
};

exports.fetchPosts = fetchPosts;
exports.createPost = createPost;
exports.fetchRecentPosts = fetchRecentPosts;
