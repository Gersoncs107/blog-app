import { useState, useEffect } from 'react';
import axios from 'axios';

function CommentManager({ token, postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComments(response.data);
    } catch (err) {
      console.error('Erro ao buscar comentários:', err);
    }
  };

  const deleteComment = async (commentId) => {
    if (window.confirm('Tem certeza que deseja deletar este comentário?')) {
      try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/comments/${commentId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchComments();
      } catch (err) {
        console.error('Erro ao deletar comentário:', err);
      }
    }
  };

  return (
    <div>
      <h3>Comentários</h3>
      {comments.length === 0 ? (
        <p>Nenhum comentário.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.content}</p>
              <p>Por: {comment.username || 'Anônimo'}</p>
              <button onClick={() => deleteComment(comment.id)}>Deletar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CommentManager;