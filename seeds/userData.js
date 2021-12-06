const { User } = require('../models');

const userData = [
  {
    name: 'Sam',
    email: 'sam@email.com',
    password: '$2b$10$sGC3PkNwCIbwpbfFyqhSPO36lCQlLuhfTO3D3Q4MwW4uUqBrIrsry'
  },
  {
    name: 'bbb',
    email: 'bbb@gmail.com',
    password: 'bbb@gmail.com'
  },
];  

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;