const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);


module.exports = router;
