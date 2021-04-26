// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Categories have many Products
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
