import { useEffect, useState } from 'react';

function PostManager() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/posts', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const togglePublish = async (postId, published) => {
    const token = localStorage.getItem('token');
    await fetch(`http://localhost:3000/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ published: !published }),
    });
    // Atualizar lista
  };

  return (
    <div>
      <h1>Gerenciar Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>Publicado: {post.published ? 'Sim' : 'Não'}</p>
          <button onClick={() => togglePublish(post.id, post.published)}>
            {post.published ? 'Despublicar' : 'Publicar'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostManager;