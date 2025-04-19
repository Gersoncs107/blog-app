const express = require('express')
const {PrismaClient} = require('@prisma/client')
require('dotenv').config()
const app = express()
const prisma = new PrismaClient()

const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
const userRoutes = require('./routes/users');

app.use(express.json())

app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);

app.get('/', async (req, res) => {
  res.send('Blog API')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})