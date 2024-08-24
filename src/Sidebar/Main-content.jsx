import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Add your ProjectForm component
import Dashboard from '../Dashboard/Dashboard'
import User from '../User/UserDetail'
import Project from '../Project/Project'
import Setting from '../Setting/Setting'
import ProjectForm from '../Project/ProjectForm';
import User_form from '../User/User_form';
import UserDetail from '../User/UserDetail';
function Maincontent() {
  return (
    <div className='Main-content' style={{height:'100%', width:'100%'}}>
      <Routes>
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='User' element={<User />} />
        <Route path='User/details' element={<UserDetail />} /> 
        <Route path='User/form' element={<User_form />} /> 
        <Route path='Project/details' element={<Project />} />
        <Route path='Project/form' element={<ProjectForm/>} /> 
        <Route path='Setting' element={<Setting />} />
      </Routes>
    </div>
  );
}

export default Maincontent;
