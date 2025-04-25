import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from './PostForm'

function PostList({token}){
    const [posts, setPosts] = useState([])
    const [editingPost, setEditingPost] = useState(null)

    useEffect(()=> {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            setPosts(response.data)
        } catch (error) {
            
        }
    }
}