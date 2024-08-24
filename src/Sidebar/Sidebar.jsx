import React from 'react';
import Side from './Side';

import './Side.css';
import Maincontent from './Main-content';

function Sidebar() {
  return (
    <div className='Sibar-main'>
      <Side />
      <Maincontent />
    </div>
  );
}

export default Sidebar;
