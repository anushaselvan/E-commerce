const { Cart } = require('../models');

const cartData = [
  {
    user_name: 'aaa',
    product_name: 'Hawaiki Logo - Muscle Tee - Black',
    product_quantity: 2,
  },
  {
    user_name: 'aaa',
    product_name: 'Hawaiki Logo - Muscle Tee - Grey',
    product_quantity: 4
  },

];  

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;