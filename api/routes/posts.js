const express = require('express');
const router = express.Router();
const {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
} = require('../controllers/postController');
const { createComment } = require('../controllers/commentController');

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

// Add this for nested comments
router.post('/:postId/comments', createComment);

module.exports = router;