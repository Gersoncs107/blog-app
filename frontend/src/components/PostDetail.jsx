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
}