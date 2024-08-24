import React, { useState } from 'react';
import { useUserContext } from '../Contexthooks';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate();
    const { registerUser, loading, error } = useUserContext();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        username: '',
        phone: '',
        job: '',
        resume: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            navigate('/');
        } catch (err) {
            console.error("Registration failed: ", err);
        }
    };

    return (
        <div className='Main-Reg'>
            <div className="reg-container">
                <h1>Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className="UserName">
                        <div className='Input-css'>
                            <label>First Name</label>
                            <input
                                className="input"
                                name="firstName"
                                placeholder="Enter first name"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='Input-feild'>
                            <label>Last Name</label>
                            <input
                                className="input"
                                name="lastName"
                                placeholder="Enter last name"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="Userinf">
                        <div className='Input-feild1'>
                            <label>Email</label>
                            <input
                                className="input"
                                name="email"
                                placeholder="Enter email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='Input-feild10'>
                            <label>Password</label>
                            <input
                                className="input"
                                name="password"
                                placeholder="Enter password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>
                    <div className='Userinter'>
                        <div className='Input-feild'>
                            <label>Username</label>
                            <input
                                className="input"
                                name="username"
                                placeholder="Create Username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="Usertec">
                        <div className='Input-feild01'>
                            <label>Phone Number</label>
                            <input
                                className="input"
                                name="phone"
                                placeholder="Enter Phone no"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='Input-feild2'>
                            <label>Job Title</label>
                            <input
                                className="input"
                                name="job"
                                placeholder="Enter Job Title"
                                type="text"
                                value={formData.job}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="userresume">
                        <label>Upload Resume</label>
                        <input
                            style={{ border: 'none', boxShadow: 'none' }}
                            className="input"
                            name="resume"
                            type="file"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Registration;
