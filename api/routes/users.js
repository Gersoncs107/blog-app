// filepath: c:\Users\Gerson\Desktop\TheOdinProject\blog-app\api\routes\users.js
const express = require('express');
const router = express.Router();
const {registerUser,login, getAllUsers} = require('../controllers/userController');

// Example placeholder handlers
router.get('/', (req, res) => getAllUsers);
router.post('/register', registerUser);
router.post('/login', login);

module.exports = router;