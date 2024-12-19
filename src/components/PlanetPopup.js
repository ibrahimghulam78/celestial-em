import React from 'react';
import ReactDOM from 'react-dom';

function PlanetPopup({ planet, onClose }) {
  const planetData = {
    sun: {
      title: "The Sun",
      type: "Star",
      description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core.",
      diameter: "1,392,684 km",
      mass: "1.989 × 10^30 kg",
      temperature: "5,500°C (surface)",
      funFact: "The Sun accounts for 99.86% of the Solar System's mass"
    },
    mercury: {
      title: "Mercury",
      type: "Terrestrial Planet",
      description: "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all planets.",
      diameter: "4,879 km",
      distance: "57.9 million km from Sun",
      temperature: "-180°C to 430°C",
      funFact: "Despite being closest to the Sun, Mercury is not the hottest planet"
    },
    venus: {
        title: "Venus",
        type: "Terrestrial Planet",
        description: "Venus is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all planets.",
        diameter: "4,879 km",
        distance: "57.9 million km from Sun",
        temperature: "-180°C to 430°C",
        funFact: "Despite being closest to the Sun, Mercury is not the hottest planet"
      },
      earth: {
        title: "Earth",
        type: "Terrestrial Planet",
        description: "Earth is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all planets.",
        diameter: "4,879 km",
        distance: "57.9 million km from Sun",
        temperature: "-180°C to 430°C",
        funFact: "Despite being closest to the Sun, Mercury is not the hottest planet"
      },
      mars: {
        title: "Mars",
        type: "Terrestrial Planet",
        description: "Mars is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all planets.",
        diameter: "4,879 km",
        distance: "57.9 million km from Sun",
        temperature: "-180°C to 430°C",
        funFact: "Despite being closest to the Sun, Mercury is not the hottest planet"
      },
      jupiter: {
        title: "Jupiter",
        type: "Gas Giant",
        description: "Jupiter is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all planets.",
        diameter: "4,879 km",
        distance: "57.9 million km from Sun",
        temperature: "-180°C to 430°C",
        funFact: "Despite being closest to the Sun, Mercury is not the hottest planet"
      },
      saturn: {
        title: "Saturn",
        type: "Terrestrial Planet",
        description: "Saturn is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all planets.",
        diameter: "4,879 km",
        distance: "57.9 million km from Sun",
        temperature: "-180°C to 430°C",
        funFact: "Despite being closest to the Sun, Mercury is not the hottest planet"
      },
      uranus: {
        title: "Uranus",
        type: "Terrestrial Planet",
        description: "Uranus is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all planets.",
        diameter: "4,879 km",
        distance: "57.9 million km from Sun",
        temperature: "-180°C to 430°C",
        funFact: "Despite being closest to the Sun, Mercury is not the hottest planet"
      },
      neptune: {
        title: "Neptune",
        type: "Terrestrial Planet",
        description: "Neptune is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all planets.",
        diameter: "4,879 km",
        distance: "57.9 million km from Sun",
        temperature: "-180°C to 430°C",
        funFact: "Despite being closest to the Sun, Mercury is not the hottest planet"
      },
  };

  const data = planetData[planet] || {};

  // Use React Portal to render the popup
  return ReactDOM.createPortal(
    <div className="planet-popup-overlay" onClick={onClose}>
      <div className="planet-popup" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="planet-content">
          <h2>{data.title}</h2>
          <div className="planet-info">
            <p className="planet-type">{data.type}</p>
            <div className="planet-description">
              <p>{data.description}</p>
            </div>
            <div className="planet-stats">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Diameter:</strong> {data.diameter}</li>
                {data.distance && <li><strong>Distance from Sun:</strong> {data.distance}</li>}
                <li><strong>Temperature:</strong> {data.temperature}</li>
              </ul>
            </div>
            <div className="fun-fact">
              <h3>Did You Know?</h3>
              <p>{data.funFact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body // Mount the popup directly to the body
  );
}

export default PlanetPopup;