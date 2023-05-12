// import models
const Product = require('./product');
const Category = require('./Category');
const Tag = require('./tag');
const ProductTag = require('./ProductTag');
const User = require('./User');
const Address = require('./Address');
const Order = require('./Order');
const OrderItem = require('./OrderItem');
const Payment = require('./Payment');
const Review = require('./Review');
const ProductCategory = require('./ProductCategory');
const ProductReview = require('./ProductReview');


// User has many Addresses
User.hasMany(Address, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// An Order belongs to one User
Order.belongsTo(User, {
    foreignKey: 'user_id'
});

// An Order has many OrderItems
Order.hasMany(OrderItem, {
    foreignKey: 'order_id'
});

// A Product can belong to many Categories
Product.belongsToMany(Category, {
    through: ProductCategory,
    foreignKey: 'product_id',
    otherKey: 'category_id'
});

// An OrderItem belongs to one Product
OrderItem.belongsTo(Product, {
    foreignKey: 'product_id'
});

// An OrderItem belongs to one Order
OrderItem.belongsTo(Order, {
    foreignKey: 'order_id'
});

// An Order has one Payment
Order.belongsTo(Payment, {
    foreignKey: 'order_id'
});

// An Order has one Address
Order.belongsTo(Address, {
    foreignKey: 'address_id'
});

// A Product has many Reviews
// Product.hasMany(Review, {
//     foreignKey: 'product_id'
// });

// A User can have many Reviews
User.hasMany(Review, {
    foreignKey: 'user_id'
});

// A Review belongs to one Product
// Review.belongsTo(Product, {
//     foreignKey: 'product_id'
// });

// A Review belongs to one User
Review.belongsTo(User, {
    foreignKey: 'user_id'
});

// A Product has many Reviews (through ProductReview)
Product.belongsToMany(Review, {
    through: ProductReview,
    foreignKey: 'product_id',
    });
    
    // A Review belongs to many Products (through ProductReview)
Review.belongsToMany(Product, {
    through: ProductReview,
    foreignKey: 'review_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});


module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
    User,
    Address,
    Order,
    OrderItem,
    Payment,
    Review,
    ProductReview

};
