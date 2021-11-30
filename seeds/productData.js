const { Product } = require('../models');

const productData = [
  {
      product_title: "Hawaiki Logo - Muscle Tee - Black",
      description: "Suns out, guns out with your Hawaiki logo muscle tee. Ideal top for your everday workouts or a stylish sleevless option for the warm summer days!",
      price: 50.00,
      filename: "black-hawaiki-logo-2.jpg",
      category_id: 1
  },
  {
      product_title: "Hawaiki Logo - Muscle Tee - Grey",
      description: "Suns out, guns out with your Hawaiki logo muscle tee. Ideal top for your everday workouts or a stylish sleevless option for the warm summer days!",
      price: 50.00,
      filename: "grey-hawaiki-logo.jpg",
      category_id: 1

  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
