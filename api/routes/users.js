// filepath: c:\Users\Gerson\Desktop\TheOdinProject\blog-app\api\routes\users.js
const express = require('express');
const router = express.Router();

// Example placeholder handlers
router.get('/', (req, res) => res.send('Users route'));
router.post('/', (req, res) => res.send('Create user'));

module.exports = router;