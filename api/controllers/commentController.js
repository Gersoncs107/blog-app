const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.createComment = async (req, res) => {
    const { content, username, email} = req.body
    const postId = parseInt(req.params.postId)
    
    try {
        
    } catch (error) {
        
    }
}