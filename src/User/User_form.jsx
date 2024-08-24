import React, { useState, useEffect } from 'react';
import { useUserContext } from '../Contexthooks'; // Adjust the import path as needed
import { motion } from 'framer-motion';
import './User.css';

function User_form({ user, onUpdate, onClose }) {
  const { registerUser, updateUser, loading, error } = useUserContext();
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

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await updateUser(formData);
      onUpdate(formData);
    } else {
      await registerUser(formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        username: '',
        phone: '',
        job: '',
        resume: null
      });
    }
  };

  return (
    <motion.div
      className='User-form'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='Main-Reg'>
        <div className="reg-container1">
          <h1>{user ? 'Edit User' : 'User Form'}</h1>
          <form onSubmit={handleSubmit}>
            <div className="UserName">
              <div className='Input-Demo'>
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
              <div className='Input-Demo'>
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
              <div className='Input-Demo'>
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
              <div className='Input-Demo2'>
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
              <div className='Input-Demo'>
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
              <div className='Input-Demo'>
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
              <div className='Input-Demo3'>
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
              {loading ? 'Saving...' : user ? 'Update' : 'Register'}
            </button>
            {error && <p className="error">{error}</p>}
          </form>
          {onClose && <button onClick={onClose}>Close</button>}
        </div>
      </div>
    </motion.div>
  );
}

export default User_form;
