const { User } = require('../models');

const userData = [
  {
    name: 'aaa',
    email: 'aaa@gmail.com',
    password: '*******'
  },
  {
    name: 'bbb',
    email: 'bbb@gmail.com',
    password: '*******'
  },
];  

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;