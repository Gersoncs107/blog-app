



import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts`)
      .then((response) => setPosts(response.data))
      .catch((err) => console.error('Erro ao buscar posts:', err));
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;// import {useEfect, useState} from 'react';

// function PostList(){
//     const [posts, setPosts] = useState([])

//     useEfect(() => {
//         fetch('http://localhost:3000/posts')
//         .then((res) => res.json())
//         .then((data) => setPosts(data))
//     }, [])

//     return(
//         <div>
//             <h1>Blog</h1>
//         {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//         </div>
//       ))}
//         </div>
//     )
// }

// export default PostList