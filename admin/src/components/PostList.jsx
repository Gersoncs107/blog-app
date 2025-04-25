import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from './PostForm'

function PostList({token}){
    const [posts, setPosts] = useState([])
    const [editingPost, setEditingPost] = useState(null)
}