const { Review } = require ('../models')

const reviewData = 
[
    {
      review_text: "This product exceeded my expectations! It's definitely worth the money.",
      rating: 5,
    },
    {
      review_text: "I was disappointed with this product. It didn't live up to the hype.",
      rating: 2,
    },
    {
      review_text: "I absolutely love this product! It has become a staple in my daily routine.",
      rating: 4,
    },
    {
      review_text: "This product is just okay. I've used better products before.",
      rating: 3,
    }
  ]

  const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
