import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('NewUser')) || []);
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) || []);

  const registerUser = async (userData) => {
    setLoading(true);
    try {
      const employees = JSON.parse(localStorage.getItem('NewUser')) || [];
      employees.push(userData);
      localStorage.setItem('NewUser', JSON.stringify(employees));
      setUsers(employees);
      setUser(userData);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (username, password) => {
    setLoading(true);
    try {
      const employees = JSON.parse(localStorage.getItem('NewUser')) || [];
      const user = employees.find(user => user.username === username && user.password === password);
      if (user) {
        setUser(user);
        setError(null);
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserDetails = () => {
    const storedUser = JSON.parse(localStorage.getItem('NewUser')) || [];
    if (storedUser.length > 0) {
      const { username, resume } = storedUser[0];
      return { username, resume };
    }
    return { username: 'Guest', resume: null };
  };

  const fetchAllUsers = () => JSON.parse(localStorage.getItem('NewUser')) || [];

  const deleteUser = (username) => {
    setLoading(true);
    try {
      const updatedUsers = users.filter(user => user.username !== username);
      localStorage.setItem('NewUser', JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const updateUser = (updatedUser) => {
    setLoading(true);
    try {
      const updatedUsers = users.map(user =>
        user.username === updatedUser.username ? updatedUser : user
      );
      localStorage.setItem('NewUser', JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const FetchProject = () => {
    return projects;
  };

  const deleteProject = (projectId) => {
    setLoading(true);
    try {
      const updatedProjects = projects.filter(project => project.id !== projectId);
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      setProjects(updatedProjects);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const updateProject = (projectId, updatedProject) => {
    setLoading(true);
    try {
      const updatedProjects = projects.map(project =>
        project.id === projectId ? updatedProject : project
      );
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      setProjects(updatedProjects);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const ProjectList = (newProject) => {
    setLoading(true);
    try {
      const updatedProjects = [...projects, newProject];
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      setProjects(updatedProjects);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, registerUser, loginUser, deleteUser, updateUser, fetchUserDetails, fetchAllUsers, FetchProject, deleteProject, updateProject, ProjectList, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
