import { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";

function PostDetail() {
    const id = useParams()
    const [post,setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({content: '',username: '', email: ''})

    useeffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
            .then((response) => setPost(response.data))
            .catch((err) => console.error('Erro ao buscar post:', err));

        axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}/comments`)
            .then((response) => setComments(response.data))
            .catch((err) => console.error('Erro ao buscar comentários:', err));    
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/posts/${id}/comments`, newComment)
            setComments([...comments, newComment])
            setNewComment({content: '', username: '', email: ''})
        } catch (error) {
            console.error('Erro ao enviar comentário:', error)
        }
    }

    if(!post) {
        return <div>Carregando...</div>
    }

    return(
        <div>
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <h3>Comentários</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <p>Por: {comment.username || 'Anônimo'}</p>
        </div>
      ))}
      <h4>Adicionar Comentário</h4>
      <form onSubmit={handleCommentSubmit}>
        <div>
          <label>Nome (opcional):</label>
          <input
            type="text"
            value={newComment.username}
            onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
          />
        </div>
        <div>
          <label>Email (opcional):</label>
          <input
            type="email"
            value={newComment.email}
            onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
          />
        </div>
        <div>
          <label>Comentário:</label>
          <textarea
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
    )
}