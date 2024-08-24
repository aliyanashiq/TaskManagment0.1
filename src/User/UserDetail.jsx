import React, { useEffect, useState } from 'react';
import { useUserContext } from '../Contexthooks'; // Adjust the import path as needed
import User_form from './User_form'; // Adjust the import path as needed
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { motion } from 'framer-motion';

function UserDetail() {
  const { fetchAllUsers, deleteUser, updateUser } = useUserContext();

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const allUsers = fetchAllUsers();
    setUsers(allUsers);
  }, []);

  const handleDelete = (username) => {
    deleteUser(username);
    setUsers(fetchAllUsers());
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = (updatedUser) => {
    updateUser(updatedUser);
    setEditingUser(null);
    setUsers(fetchAllUsers());
  };

  const handleCloseForm = () => {
    setEditingUser(null);
  };

  return (
    <motion.div
      className='Main-users'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {editingUser &&
        <User_form
          user={editingUser}
          onClose={handleCloseForm}
          onUpdate={handleUpdate}
        />}
      <motion.div
        className='User-container'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Job</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.job}</td>
                <td className='Button-group'>
                  <button style={{backgroundColor:'green', color:'white'}} onClick={() => handleEdit(user)}><CiEdit /></button>
                  <button style={{backgroundColor:'red', color:'white'}} onClick={() => handleDelete(user.username)}><MdDelete /></button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}

export default UserDetail;
