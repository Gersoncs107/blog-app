// filepath: c:\Users\Gerson\Desktop\TheOdinProject\blog-app\api\routes\users.js
const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/userController');

// Example placeholder handlers
router.get('/', (req, res) => res.send('Users route'));
router.post('/register', registerUser);

module.exports = router;