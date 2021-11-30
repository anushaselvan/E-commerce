const { User } = require('../models');

const userData = [
  {
    name: 'aaa',
    email: 'aaa@gmail.com',
    password: 'aaa@gmail.com'
  },
  {
    name: 'bbb',
    email: 'bbb@gmail.com',
    password: 'bbb@gmail.com'
  },
];  

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;