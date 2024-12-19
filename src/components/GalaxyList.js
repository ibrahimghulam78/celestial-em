import React from 'react';
import '../App.css';

function GalaxyList({ onClick }) {
  return (
    <div className="galaxy-list">
      <div className="galaxy-item" onClick={onClick}>Galaxy A</div>
      <div className="galaxy-item" onClick={onClick}>Galaxy B</div>
      <div className="galaxy-item" onClick={onClick}>Galaxy C</div>
    </div>
  );
}

export default GalaxyList;
