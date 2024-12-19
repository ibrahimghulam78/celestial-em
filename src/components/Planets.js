import React, { useState } from 'react';
import PlanetPopup from './PlanetPopup';

function Planets({ id, name, hasMoon, hasRing }) {
  const [showPopup, setShowPopup] = useState(false);

  const handlePlanetClick = (e) => {
    // Stop event propagation to prevent interference with other click handlers
    e.stopPropagation();
    setShowPopup(true);
  };

  return (
    <div id={id} className="orbit">
      <div className="pos">
        {hasMoon && (
          <div className="orbit">
            <div className="pos">
              <div className="moon"></div>
            </div>
          </div>
        )}
        <div className="planet">
          {hasRing && <div className="ring"></div>}
          <dl className="infos" onClick={handlePlanetClick} style={{ cursor: 'pointer' }}>
            <dt>{name}</dt>
            <dd><span></span></dd>
          </dl>
        </div>
      </div>
      {showPopup && (
        <PlanetPopup 
          planet={id} 
          onClose={() => setShowPopup(false)} 
        />
      )}
    </div>
  );
}

export default Planets;