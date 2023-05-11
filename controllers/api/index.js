const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/user', userRoutes);

module.exports = router;
