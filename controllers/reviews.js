const Review = require("../schemas/Review");

const fetchReviews = async (req, res) => {
  const product_id = req.query.product_id;
  const user_id = req.query.user_id;
  const fetchReviews = await Review.find({
    user_id: user_id,
    product_id: product_id,
  });
  res.send(fetchReviews);
};

const postReview = async (req, res) => {
  const { user_id, product_id, rating, description } = req.body;
  const newReview = new Review({
    user_id,
    product_id,
    rating,
    description,
  });
  await newReview.save();
  res.send("Review Created");
};

exports.postReview = postReview;
exports.fetchReviews = fetchReviews;
