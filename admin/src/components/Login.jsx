import { useState } from "react";
import axios from 'axios'

function Login({setToken}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
                email,
                password
            })
            const token = response.data.token
            setToken(token)
            localStorage.setItem('token', token)
            setError('')
        } catch (error) {
            setError('Invalid email or password')
        }
    }
}