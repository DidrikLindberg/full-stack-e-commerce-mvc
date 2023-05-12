const router = require('express').Router();
const { Review } = require('../../models');


//get all Reviews
router.get('/', async (req, res) => {
    try {
      const reviews = await Review.findAll();
      res.status(200).json(reviews);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

  module.exports = router;