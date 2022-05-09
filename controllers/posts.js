const Post = require("../schemas/Post");

const fetchPosts = async (req, res) => {
  if (req.query.user_id) {
    const user_id = req.query.user_id;
    const fetchUserPosts = await Post.find({ owner_id: user_id });
    if (fetchUserPosts.length > 0) {
      return res.status(200).json(fetchUserPosts);
    } else {
      res.send({ msg: "No posts found" });
    }
  } else if (req.query.post_id) {
    const post_id = req.query.post_id;
    const fetchPosts = await Post.findOne({ _id: post_id });
    res.send(fetchPosts);
  } else {
    res.status(400).send({ error: "Bad params" });
  }
};

const createPost = async (req, res) => {
  const { owner_id, img_url, display_name, description, price } = req.body;
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
  const fetchRecentPosts = await Post.find().sort({ createdAt: -1 });
  res.send(fetchRecentPosts);
};

exports.fetchPosts = fetchPosts;
exports.createPost = createPost;
exports.fetchRecentPosts = fetchRecentPosts;
