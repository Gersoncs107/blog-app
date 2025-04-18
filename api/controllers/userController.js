const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    const { email, password, name} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        const user = await prisma.user.create({
            data: { email, password: hashedPassword, name}
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário'})
    }
}

