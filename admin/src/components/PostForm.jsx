import { useState, useEffect } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';

function PostForm({ token, fetchPosts, editingPost, setEditingPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPost) {
        await axios.put(
          `${process.env.REACT_APP_API_URL}/posts/${editingPost.id}`,
          { title, content },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/posts`,
          { title, content, published: false },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      fetchPosts();
      setEditingPost(null);
      setTitle('');
      setContent('');
    } catch (err) {
      console.error('Erro ao salvar post:', err);
    }
  };

  return (
    <div>
      <h2>{editingPost ? 'Editar Post' : 'Novo Post'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Conteúdo:</label>
          <Editor
            apiKey="no-api-key" // Substitua pela sua chave do TinyMCE
            value={content}
            onEditorChange={(newContent) => setContent(newContent)}
            init={{
              height: 300,
              menubar: false,
              plugins: ['advlist autolink lists link image charmap print preview anchor'],
              toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image',
            }}
          />
        </div>
        <button type="submit">{editingPost ? 'Atualizar' : 'Criar'}</button>
        {editingPost && (
          <button type="button" onClick={() => setEditingPost(null)}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default PostForm;