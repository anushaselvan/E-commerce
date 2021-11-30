const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Tanks',
  },
  {
    category_name: 'T-shirts',
  },
  {
    category_name: 'Kids T-Shirts',
  },
];  

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;