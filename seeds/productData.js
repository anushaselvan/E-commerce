const { Product } = require('../models');

const productData = [
  {
      product_title: "Hawaiki Logo - Muscle Tee - Black",
      description: "Our most popular - Suns out, guns out Hawaiki logo muscle tee. Ideal top for your everyday workouts or a stylish sleevless option for the warm summer days!",
      price: 50.00,
      filename: "hawaiki-logo-black.jpg",
      category_id: 1
  },
  {
      product_title: "Hawaiki Logo - Muscle Tee - Grey",
      description: "Our most popular - suns out, guns out Hawaiki logo muscle tee. Ideal top for your everyday workouts or a stylish sleevless option for the warm summer days!",
      price: 50.00,
      filename: "grey-hawaiki-logo.jpg",
      category_id: 1

  },
  {
    product_title: "Hawaiki Logo - Tee - Moss",
    description: "Hawaiki logo Tee is perfect for both working out and chilling out. Created with 100% Cotton, it’s breathable and soft and super comfortable",
    price: 50.00,
    filename: "hawaiki-logo-tee.jpg",
    category_id: 2
  },
  {
    product_title: "Hawaiki Logo - Crew - Grey",
    description: "Without question, the Hawaiki logo crew jumper will be your go to option to keep you warm pre/post workouts",
    price: 80.00,
    filename: "hawaiki-logo-crew-back.jpg",
    category_id: 2
  },
  {
    product_title: "Hawaiki Logo - Kids Tee - Moss",
    description: "Dont forget the kids!!! Hawaiki logo tees to cater every member of the family",
    price: 30.00,
    filename: "hawaiki-logo-kids-tee.jpg",
    category_id: 3
  },
  
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
