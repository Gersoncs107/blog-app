import { useState } from "react";
import axios from 'axios'

function Login({setToken}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
}