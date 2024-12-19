import React from 'react';
import '../App.css';

function PlanetList({ onClick }) {
  return (
    <div className="planet-list">
      <div className="planet-item" onClick={onClick}>Planet X</div>
      <div className="planet-item" onClick={onClick}>Planet Y</div>
      <div className="planet-item" onClick={onClick}>Planet Z</div>
    </div>
  );
}

export default PlanetList;
