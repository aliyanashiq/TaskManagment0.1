import React, { useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaProjectDiagram, FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import { SiGoogleforms } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GrClose } from "react-icons/gr";
import { MdMenuOpen } from "react-icons/md";
import { useUserContext } from '../Contexthooks'; 
import DefaultImage from './Default_pfp.svg.png';
import './Side.css';

function Side() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isOpen, setIsOpen] = useState(false); // State to handle the sidebar open/close
    const { fetchUserDetails } = useUserContext(); // Get the fetchUserDetails function
    const { username, image } = fetchUserDetails(); // Fetch the username and image

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const Side_list = [
        {
            path: 'Dashboard',
            Sidename: 'Dashboard',
            icons: <LuLayoutDashboard />
        },
        {
            path: 'Project/details',
            Sidename: 'Project',
            icons: <FaProjectDiagram />,
            subRoutes: [
                {
                    path: 'Project/details',
                    Sidename: "Pj Detail's",
                    icons: <BiDetail />,
                },
                {
                    path: 'Project/form',
                    Sidename: "Project Form",
                    icons: <SiGoogleforms />,
                }
            ]
        },
        {
            path: 'User/details',
            Sidename: "User's",
            icons: <FaRegUserCircle />,
            subRoutes: [
                {
                    path: 'User/details',
                    Sidename: "User Detail's",
                    icons: <BiDetail />,
                },
                {
                    path: 'User/form',
                    Sidename: "User Form",
                    icons: <SiGoogleforms />,
                }
            ]
        },
        {
            path: 'Setting',
            Sidename: "Settings",
            icons: <IoSettingsOutline />
        }
    ];

    return (
        <div className='Main-sidebar'>
            <motion.div 
                animate={{ width: isOpen ? '200px' : '50px' }} // Toggling sidebar width based on isOpen state
                className='Sidebar'
            >
                <button onClick={handleToggle} className='toggle-button' style={{ left: isOpen ? '11rem' : '2rem' }}>
                    {isOpen ? <GrClose /> : <MdMenuOpen />}
                </button>
                <div className='Upper-side'>
                    <img style={{width:isOpen?'75px':'35px',height:isOpen?'75px':'35px', left:isOpen?'3.5rem':'0.5rem'}} src={image || DefaultImage} alt="User Avatar" /> {/* Display user image or default image */}
                    <motion.h1
                    animate={{ display: isOpen ? 'block' : 'none '}}>{username}</motion.h1>
                </div>
                <div className='Lower-side'>
                    {Side_list.map((item, index) => (
                        <div key={index}>
                            <div onClick={() => item.subRoutes ? toggleMenu(item.Sidename) : null}>
                                <NavLink className='Menu-list' to={`/Task_Manger/${item.path}`} activeClassName="active">
                                    <div className="icons">
                                        {item.icons}
                                    </div>
                                    {isOpen && <div className="link-text">{item.Sidename}</div>}
                                </NavLink>
                            </div>
                            {item.subRoutes && activeMenu === item.Sidename && isOpen && (
                                <div className="sub-menu">
                                    {item.subRoutes.map((subItem, subIndex) => (
                                        <NavLink className='sub-list' to={`/Task_Manger/${subItem.path}`} key={subIndex} activeClassName="active">
                                            <div className="icons">
                                                {subItem.icons}
                                            </div>
                                            <div className="link-text">{subItem.Sidename}</div>
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
            <main></main>
        </div>
    );
}

export default Side;
