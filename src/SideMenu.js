// SideMenu.js
import React from 'react';
import './SideMenu.css';

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-menu-btn" onClick={onClose}>Close</button>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
};

export default SideMenu;
