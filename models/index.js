const Product = require('./Product');
const Category = require('./Category');
const User = require('./User');
const Cart = require('./Cart');


Category.hasMany(Product, {
    foreignKey: 'category_id'
  });

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

User.hasOne(Cart, {
    foreignKey: 'user_name'

});

Product.belongsToMany(User, {
    through: {
      model: Cart,
      unique: false
    },
    as: 'product_name'
  });

module.exports = {
  Product,
  Category,
  User,
  Cart,
};
