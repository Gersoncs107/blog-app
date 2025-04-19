// filepath: c:\Users\Gerson\Desktop\TheOdinProject\blog-app\api\controllers\postController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

// Get a single post by ID
const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await prisma.post.findUnique({ where: { id: parseInt(id) } });
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch post' });
    }
};

// Create a new post
const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newPost = await prisma.post.create({
            data: { title, content },
        });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};

// Update a post by ID
const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const updatedPost = await prisma.post.update({
            where: { id: parseInt(id) },
            data: { title, content },
        });
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
    }
};

// Delete a post by ID
const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.post.delete({ where: { id: parseInt(id) } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
};

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};