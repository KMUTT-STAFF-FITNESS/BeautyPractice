import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu   >
      <a className="menu-item" href="/">
        Dashboard
      </a>

      <a className="menu-item" href="/laravel">
        Members
      </a>

      <a className="menu-item" href="/angular">
        Report
      </a>

      <a className="menu-item" href="/react">
        Sign out
      </a>

      
    </Menu>
  );
};