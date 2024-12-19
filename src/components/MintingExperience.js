import React, { useState } from 'react';
import GalaxyBalls from './GalaxyBalls';
import GalaxyList from './GalaxyList';
import PlanetList from './PlanetList';
import NFTDisplay from './NFTDisplay';
import '../App.css';

function MintingExperience() {
  const [zoomLevel, setZoomLevel] = useState(0);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 1);
  };

  return (
    <div className="nested-container">
      {/* Render each level based on zoom level */}
      {zoomLevel === 0 && <GalaxyBalls onClick={handleZoomIn} />}
      {zoomLevel === 1 && <GalaxyList onClick={handleZoomIn} />}
      {zoomLevel === 2 && <PlanetList onClick={handleZoomIn} />}
      {zoomLevel === 3 && <NFTDisplay />}
    </div>
  );
}

export default MintingExperience;
