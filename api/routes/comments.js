// filepath: c:\Users\Gerson\Desktop\TheOdinProject\blog-app\api\routes\comments.js
const express = require('express');
const router = express.Router();

// Example placeholder handlers
router.get('/', (req, res) => res.send('Comments route'));
router.post('/', (req, res) => res.send('Create comment'));

module.exports = router;