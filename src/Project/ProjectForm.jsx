import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useUserContext } from '../Contexthooks';
import './project.css';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

function ProjectForm({ initialData }) {
    const navigate = useNavigate();
    const { ProjectList, fetchAllUsers, updateProject } = useUserContext();
    const [projectData, setProjectData] = useState({
        projectName: '',
        details: '',
        assignedUser: []
    });
    const [selectedUser, setSelectedUser] = useState([]);

    useEffect(() => {
        if (initialData) {
            setProjectData(initialData);
            setSelectedUser(initialData.assignedUser.map(user => ({ value: user, label: user })));
        }
    }, [initialData]);

    const userOptions = (fetchAllUsers() || []).map(user => ({
        value: user.username,
        label: user.username
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSelectChange = (selectedOption) => {
        setSelectedUser(selectedOption);
        setProjectData(prevState => ({
            ...prevState,
            assignedUser: (selectedOption || []).map(option => option.value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initialData) {
            updateProject(initialData.id, projectData);
        } else {
            const newProject = {
                id: Date.now(), // Generate a unique ID
                ...projectData
            };
            ProjectList(newProject);
            setProjectData({
                projectName: '',
                details: '',
                assignedUser: []
            });
            setSelectedUser([]);
        }
    };

    return (
        <div className='pro-form'>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                className='main-form'>
                <h1>Project Form</h1>
                <form onSubmit={handleSubmit}>
                    {/* Project Name */}
                    <input
                        name="projectName"
                        placeholder="Enter project name"
                        className="input"
                        type="text"
                        value={projectData.projectName}
                        onChange={handleChange}
                    />

                    {/* Project Details */}
                    <textarea
                        name="details"
                        required
                        placeholder="Enter details"
                        value={projectData.details}
                        onChange={handleChange}
                    />

                    {/* User Dropdown */}
                    <Select
                        options={userOptions}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder="Select User"
                        value={selectedUser}
                        onChange={handleSelectChange}
                        isMulti
                    />
                    <div className="underline"></div>

                    {/* Submit Button */}
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </motion.div>
        </div>
    );
}

export default ProjectForm;
