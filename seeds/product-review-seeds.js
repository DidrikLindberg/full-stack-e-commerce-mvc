const { ProductReview } = require('../models');

const productReviewData = [
    {
        product_id: 1,
        review_id: 1,
    },
    {
        product_id: 1,
        review_id: 2,
    },
    {
        product_id: 2,
        review_id: 3,
    },
    {
        product_id: 2,
        review_id: 4,
    },
    
];

const seedProductReviews = () => ProductReview.bulkCreate(productReviewData);

module.exports = seedProductReviews;


