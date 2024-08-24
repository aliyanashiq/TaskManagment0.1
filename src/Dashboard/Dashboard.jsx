import React from 'react';
import { GrProjects } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useUserContext } from '../Contexthooks';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion';

import './Dashboard.css';

function Dashboard() {
  const { fetchAllUsers } = useUserContext();
  const users = fetchAllUsers();

  const data = [
    { name: 'Completed', value: 5 },
    { name: 'In Process', value: 15 },
    { name: 'Projects', value: 10 },
  ];

  const COLORS = ['#36A2EB', '#FFCE56', '#FF6384'];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className='Dash-main'>
      <div className='Lower-dash'>
        <motion.div
          className='Dash-card'
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.div className='dash-project' variants={itemVariants}>
            <h1>Project</h1>
            <div className='Icons'><GrProjects /></div>
            <p className='Count'>10</p>
            <p>Total projects that are in progress</p>
          </motion.div>
          <motion.div className='dash-project' variants={itemVariants}>
            <h1>User's</h1>
            <div className='Icons'><FaUserAlt /></div>
            <p className='Count'>20</p>
            <p>Members of the T&k company</p>
          </motion.div>
          <motion.div className='dash-project' variants={itemVariants}>
            <h1>Complete</h1>
            <div className='Icons'><MdIncompleteCircle /></div>
            <p className='Count'>5</p>
            <p>Total completed projects</p>
          </motion.div>
          <motion.div className='dash-project' variants={itemVariants}>
            <h1>In process</h1>
            <div className='Icons'><GiProcessor /></div>
            <p className='Count'>15</p>
            <p>Total projects in process</p>
          </motion.div>
        </motion.div>

        <motion.div
          className='Display-chart'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Project Status</h2>
          <div className='Pie-style'>
            <ResponsiveContainer width={250} height={250}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className='Upper-dash'>
        <motion.div
          className='User-information'
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          <h2>User List</h2>
          <table className='User-table'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Job</th>
              </tr>
            </thead>
            <motion.tbody variants={listVariants}>
              {users.map((user, index) => (
                <motion.tr key={index} variants={itemVariants}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.phone}</td>
                  <td>{user.job}</td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>

        <motion.div
          className='Social-media'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Social Media Links</h2>
          <ul>
            <motion.li variants={itemVariants}><div className='Social-icons0'><FaTwitter /></div><a href="https://twitter.com">Twitter</a></motion.li>
            <motion.li variants={itemVariants}><div className='Social-icons0'><IoLogoLinkedin/></div><a href="https://linkedin.com">LinkedIn</a></motion.li>
            <motion.li variants={itemVariants}><div className='Social-icons0'><FaFacebookSquare /></div><a href="https://facebook.com">Facebook</a></motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard;
