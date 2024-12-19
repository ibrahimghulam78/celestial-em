import React from 'react';
import '../App.css';

function GalaxyBalls({ onClick }) {
  return (
    <div className="galaxy-balls">
      <div className="ball" onClick={onClick}>
        <div className="inner-ball galaxy">Galaxy 1</div>
      </div>
      <div className="ball" onClick={onClick}>
        <div className="inner-ball galaxy">Galaxy 2</div>
      </div>
    </div>
  );
}

export default GalaxyBalls;
