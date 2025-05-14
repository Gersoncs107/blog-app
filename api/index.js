const {PrismaClient} = require('@prisma/client')
const express = require('express')
require('dotenv').config()
const app = express()
const prisma = new PrismaClient()

const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
const userRoutes = require('./routes/users');
const cors = require('cors')

app.use(cors({
  origin: ['https://blog-app-eta-five-75.vercel.app/', 'https://blog-app-r8ve.vercel.app/']
}))
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