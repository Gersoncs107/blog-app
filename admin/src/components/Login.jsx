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

    return(
        <div>
            <h2>Login</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>

                <div>
                    <label>Senha</label>
                    <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
    
}

export default Login