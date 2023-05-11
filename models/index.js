// import models
const Product = require('./product');
const Category = require('./Category');
const Tag = require('./tag');
const ProductTag = require('./ProductTag');
const User = require('./User');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // IF a category is deleted, then delete the product as well
  onDelete: 'CASCADE',
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
};
