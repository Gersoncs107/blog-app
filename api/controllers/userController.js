const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    const {email, password} = req.body
    try {
        
    } catch (error) {
        res.status(401).json({ error: 'Erro ao fazer login'})
        
    }
}

