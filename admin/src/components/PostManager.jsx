import { useEffect, useState } from "react";

function PostManager(){
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        const token = localStorage.getItem('token')
        fetch('http://localhost:3000/posts', {
            headers: {Authorization: `Bearer ${token}`}
        })
        .then((res) => res.json())
        .then((data) => setPosts(data))
    }, [])
}