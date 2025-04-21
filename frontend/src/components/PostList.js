import {useEfect, useState} from 'react';

function PostList(){
    const [posts, setPosts] = useState([])

    useEfect(() => {
        fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data))
    })
}