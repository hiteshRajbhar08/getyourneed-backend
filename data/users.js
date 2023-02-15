const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Sumire Mizukawa',
    email: 'sumire@sumire.com',
    password: bcrypt.hashSync('sumire', 10),
    isAdmin: true,
  },
  {
    name: 'Hinata Uzumaki',
    email: 'hinata@hinata.com',
    password: bcrypt.hashSync('hinata', 10),
  },
  {
    name: 'Mirajane Strauss',
    email: 'mirajane@mirajane.com',
    password: bcrypt.hashSync('mirajane', 10),
  },
];

module.exports = users;
