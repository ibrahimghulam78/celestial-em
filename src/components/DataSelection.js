import React from 'react';

function DataSelection({ activePlanet, setPlanet }) {
  const planets = [
    { id: 'sun', name: 'Sun' },
    { id: 'mercury', name: 'Mercury' },
    { id: 'venus', name: 'Venus' },
    { id: 'earth', name: 'Earth' },
    { id: 'mars', name: 'Mars' },
    { id: 'jupiter', name: 'Jupiter' },
    { id: 'saturn', name: 'Saturn' },
    { id: 'uranus', name: 'Uranus' },
    { id: 'neptune', name: 'Neptune' }
  ];

  return (
    <div id="data">
      {planets.map(planet => (
        <a
          key={planet.id}
          className={`${planet.id} ${activePlanet === planet.id ? 'active' : ''}`}
          title={planet.id}
          href={`#${planet.id}speed`}
          onClick={(e) => {
            e.preventDefault();
            setPlanet(planet.id);
          }}
        >
          {planet.name}
        </a>
      ))}
    </div>
  );
}

export default DataSelection;