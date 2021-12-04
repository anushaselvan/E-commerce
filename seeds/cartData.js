const { Cart } = require('../models');

const cartData = [
  {
    user_name: 'aaa',
    product_name: 'Hawaiki Logo - Muscle Tee - Black',
    size: 'S',
    product_quantity: 2,
  },

];  

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;