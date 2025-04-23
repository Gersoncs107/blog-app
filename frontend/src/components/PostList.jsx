import {useEfect, useState} from 'react';

function PostList(){
    const [posts, setPosts] = useState([])

    useEfect(() => {
        fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data))
    }, [])

    return(
        <div>
            <h1>Blog</h1>
        {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
        </div>
    )
}

export default PostList