const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.createComment = async (req, res) => {
    const { content, username, email} = req.body
    const postId = parseInt(req.params.postId)
    
    try {
        const comment = await prisma.comment.create({
            data: { content, username, email, postId}
        })
        res.status(201).json(comment)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar comentário'})
    }
}