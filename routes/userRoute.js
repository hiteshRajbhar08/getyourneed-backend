const router = require('express').Router();
const {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

// /api/users/login
router.route('/login').post(loginUser);

// /api/users/register
router.route('/register').post(registerUser);

// /api/users/:id
router.route('/:id').get(protect, getUserProfile);

// /api/users/profile
router.route('/profile').put(protect, updateUserProfile);

module.exports = router;
