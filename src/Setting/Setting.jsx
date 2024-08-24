import React from 'react';
import { motion } from 'framer-motion';
import DefaultImage from '../Sidebar/Default_pfp.svg.png';
import './Setting.css';
import { useNavigate } from "react-router-dom";
function Setting() {
  const navigate = useNavigate();
  const Handellogout=()=>{
    navigate('/')
  }
  return (
    <motion.div
      className='Setting-Main'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="Setting-container">
        <motion.div
          className="info-containr"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={DefaultImage} width={70} height={70} style={{ borderRadius: '50%' }} alt="User Profile" />
          <div className='Text-information'>
            <h1>User Name</h1>
            <h3>Job Title</h3>
          </div>
          <button className='Logout-button' onClick={Handellogout}>Logout</button>
        </motion.div>
        <motion.div
          className="Notification-bar"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>Notification</h1>
          <div className="Notification-container">
            <div className="noti1">
              <div className="noti-text">
                <h1>Desktop Push Notification</h1>
                <p>Receive push notifications on mentions and comments on your desktop</p>
              </div>
              <div className="Toggle">
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="noti1">
              <div className="noti-text">
                <h1>Mobile Push Notification</h1>
                <p>Receive push notifications on mentions and comments on your mobile</p>
              </div>
              <div className="Toggle">
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="noti1">
              <div className="noti-text">
                <h1>Email Notification</h1>
                <p>Receive notifications on mentions, comments, and edits for your pages on your email</p>
              </div>
              <div className="Toggle">
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="Notification-end"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1>SOUNDS</h1>
          <div className="noti1">
            <div className="noti-text">
              <h1>Message</h1>
            </div>
            <div className="Toggle">
              <label className="toggle-switch">
                <input type="checkbox" />
                <div className="toggle-switch-background">
                  <div className="toggle-switch-handle"></div>
                </div>
              </label>
            </div>
          </div>
          <div className="noti1">
            <div className="noti-text">
              <h1>Mentions</h1>
            </div>
            <div className="Toggle">
              <label className="toggle-switch">
                <input type="checkbox" />
                <div className="toggle-switch-background">
                  <div className="toggle-switch-handle"></div>
                </div>
              </label>
            </div>
          </div>
          <div className="noti1">
            <div className="noti-text">
              <h1>Voice Disconnected</h1>
            </div>
            <div className="Toggle">
              <label className="toggle-switch">
                <input type="checkbox" />
                <div className="toggle-switch-background">
                  <div className="toggle-switch-handle"></div>
                </div>
              </label>
            </div>
          </div>
          <div className="noti1">
            <div className="noti-text">
              <h1>Incoming Ring</h1>
            </div>
            <div className="Toggle">
              <label className="toggle-switch">
                <input type="checkbox" />
                <div className="toggle-switch-background">
                  <div className="toggle-switch-handle"></div>
                </div>
              </label>
            </div>
          </div>
          <div className="noti1">
            <div className="noti-text">
              <h1>Out Ring</h1>
            </div>
            <div className="Toggle">
              <label className="toggle-switch">
                <input type="checkbox" />
                <div className="toggle-switch-background">
                  <div className="toggle-switch-handle"></div>
                </div>
              </label>
            </div>
          </div>
          <div className="noti1">
            <div className="noti-text">
              <h1>User Join</h1>
            </div>
            <div className="Toggle">
              <label className="toggle-switch">
                <input type="checkbox" />
                <div className="toggle-switch-background">
                  <div className="toggle-switch-handle"></div>
                </div>
              </label>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Setting;
