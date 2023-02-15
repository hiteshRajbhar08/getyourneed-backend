const { loginUser } = require('../controllers/userController');

const router = require('express').Router();

// /api/users/login
router.route('/login').post(loginUser);

module.exports = router;
