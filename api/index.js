const express = require('express')
const {PrismaClient} = require('@prisma/client')
require('dotenv').config()

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/', async (req, res) => {
  res.send('Blog API')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})