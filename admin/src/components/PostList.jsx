import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import CommentManager from './CommentManager';

function PostList({ token }) {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(response.data);
    } catch (err) {
      console.error('Erro ao buscar posts:', err);
    }
  }, [token]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const togglePublish = async (postId, published) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/posts/${postId}`,
        { published: !published },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchPosts();
    } catch (err) {
      console.error('Erro ao atualizar post:', err);
    }
  };

  const deletePost = async (postId) => {
    if (window.confirm('Tem certeza que deseja deletar este post?')) {
      try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/posts/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchPosts();
      } catch (err) {
        console.error('Erro ao deletar post:', err);
      }
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      <PostForm token={token} fetchPosts={fetchPosts} editingPost={editingPost} setEditingPost={setEditingPost} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>Publicado: {post.published ? 'Sim' : 'Não'}</p>
            <button onClick={() => togglePublish(post.id, post.published)}>
              {post.published ? 'Despublicar' : 'Publicar'}
            </button>
            <button onClick={() => setEditingPost(post)}>Editar</button>
            <button onClick={() => deletePost(post.id)}>Deletar</button>
            <button onClick={() => setSelectedPostId(post.id)}>Gerenciar Comentários</button>
          </li>
        ))}
      </ul>
      {selectedPostId && <CommentManager token={token} postId={selectedPostId} />}
    </div>
  );
}

export default PostList;