const seedCategories = require('./categoryData');
const seedProducts = require('./productData');
const seedCarts = require('./cartData');
const seedUsers = require('./userData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  
    // await seedUsers();
    // console.log('\n----- USERS SEEDED -----\n');
    
    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');
    
    // await seedCarts();
    // console.log('\n----- CARTS SEEDED -----\n');
    console.log('\n----- SEED COMPLETE -----\n');

  process.exit(0);
};

seedAll();
