import React, { useState, useEffect } from 'react';
import { useUserContext } from '../Contexthooks';
import ProjectForm from './ProjectForm';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { motion, AnimatePresence } from 'framer-motion';

function Project() {
  const { FetchProject, deleteProject, updateProject } = useUserContext();
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(FetchProject());
  }, [FetchProject]);

  const handleEdit = (project) => {
    setCurrentProject(project);
    setIsEditing(true);
  };

  const handleDelete = (projectId) => {
    deleteProject(projectId);
    setProjects(FetchProject()); // Update the projects state after deletion
  };

  const handleCloseForm = () => {
    setIsEditing(false);
    setCurrentProject(null);
  };

  const handleUpdateProject = (updatedProject) => {
    updateProject(updatedProject.id, updatedProject);
    setProjects(FetchProject()); // Update the projects state after update
    setIsEditing(false);
    setCurrentProject(null);
  };

  const handleComma = (assignedUser) => {
    if (Array.isArray(assignedUser)) {
        return assignedUser.join(', ');
    }
    return '';
};

  return (
    <div>
      {isEditing && (
        <ProjectForm
          currentProject={currentProject}
          onClose={handleCloseForm}
          onUpdate={handleUpdateProject}
        />
      )}
      <div className='project-table1'>
        <table className="project-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Team member</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.tr
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <td>{index + 1}</td>
                  <td style={{ width: '20%', fontSize: '20px' }}>{project.projectName}</td>
                  <td className='Khuch' style={{
                   
                    fontSize: '20px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {project.details.length > 70 ? `${project.details.slice(0, 70)}...` : project.details}
                  </td>
                  <td style={{ width: '20%', fontSize: '20px' }}>{handleComma(project.assignedUser)}</td>
                  <td style={{ width: '100%', display: 'flex', gap: '10px', fontSize: '20px' }}>
                    <button style={{ backgroundColor: 'green' }} onClick={() => handleEdit(project)}>
                      <div className='Td-logo'><CiEdit /></div>
                    </button>
                    <button style={{ backgroundColor: 'red' }} onClick={() => handleDelete(project.id)}>
                      <div className='Td-logo'><MdDelete /></div>
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Project;
