const Product = require("./Product");
const Category = require("./Category");
const User = require("./User");
const Cart = require("./Cart");
// const CartItems = require("./CartItems");
// const CartItems = require("./CartItems");

Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

User.hasMany(Cart, {
  foreignKey: "user_id",
});

User.belongsToMany(Product, {
  through: { model: Cart, unique: false },
  // ,
})

Product.belongsToMany(User, {
  through: { model: Cart, unique: false},
  
});


module.exports = {
  Product,
  Category,
  User,
  Cart,
};
