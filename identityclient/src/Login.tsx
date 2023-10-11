import React, { useEffect, useState } from 'react';
import { useAuth } from './auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const { token, setToken } = useAuth();
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userName: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        // Add your login logic here, e.g., API call.
        console.info('User is trying to login with', credentials);
        const response = await axios
            .post<{ token: string }>('https://localhost:7203/api/authentication/login', credentials);
        console.info('Login response', response);
        setToken?.(response.data);
    };
    
    useEffect(() => {
        if (token) {
            navigate('/app/weather');
        } 
    },[token,navigate]);

    return (
        <div className="form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>UserName:</label>
                    <input
                        type="text"
                        name="userName"
                        value={credentials.userName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-control">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
