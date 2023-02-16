const router = require('express').Router();
const {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
} = require('../controllers/userController');
const { protect, admin } = require('../middlewares/authMiddleware');

// /api/users
router.route('/').get(protect, admin, getUsers);

// /api/users/login
router.route('/login').post(loginUser);

// /api/users/register
router.route('/register').post(registerUser);

// /api/users/:id
router
  .route('/:id')
  .get(protect, getUserProfile)
  .delete(protect, admin, deleteUser);

// /api/users/profile
router.route('/profile').put(protect, updateUserProfile);

module.exports = router;
