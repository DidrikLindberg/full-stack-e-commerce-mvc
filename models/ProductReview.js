// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize ProductCategory model (table) by extending off Sequelize's Model class
class ProductReview extends Model {}

// set up fields and rules for ProductReview model
ProductReview.init (
{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    references: {
      model: 'Product',
      key: 'id'
    }
  },
  review_id: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    references: {
      model: 'Review',
      key: 'id'
    }
  }
},

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_review',
  });

module.exports = ProductReview;
