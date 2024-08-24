import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './LoginPage/Login';
import Registration from './LoginPage/Registration';
import Sidebar from './Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className='Main'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path='/Task_Manger/*' element={<Sidebar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
