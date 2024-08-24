import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../Contexthooks'; // Adjust the import path as needed
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { loginUser, loading, error } = useUserContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigator=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(username, password);
        navigator('/Task_Manger/*');
    };

    return (
        <div className='login-main'>
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Enter your username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <p className='Login-massage'>Don't have an account? <Link to="/register" className="register-link">Register</Link></p>
                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;
