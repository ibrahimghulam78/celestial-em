import React from 'react';
import Planet from './Planets';

function SolarSystem({ scale, activePlanet }) {
  return (
    <div id="universe" className={scale}>
      <div id="galaxy">
        <div id="solar-system" className={activePlanet}>
          <Planet id="mercury" name="Mercury" />
          <Planet id="venus" name="Venus" />
          <Planet id="earth" name="Earth" hasMoon={true} />
          <Planet id="mars" name="Mars" />
          <Planet id="jupiter" name="Jupiter" />
          <Planet id="saturn" name="Saturn" hasRing={true} />
          <Planet id="uranus" name="Uranus" />
          <Planet id="neptune" name="Neptune" />
          <div id="sun">
            <dl className="infos">
              <dt>Sun</dt>
              <dd><span></span></dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;