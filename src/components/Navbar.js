import React from 'react';



function Navbar({ toggleData, toggleControls }) {

  return (

    <div id="navbar">

      <a id="toggle-data" href="#data" onClick={toggleData}>

        <i className="icon-data"></i>Data

      </a>

      <h1>

        3D Solar System<br />

        <span>by <a href="https://twitter.com/JulianGarnier" target="_blank" rel="noopener noreferrer">@JulianGarnier</a></span>

      </h1>

      <a id="toggle-controls" href="#controls" onClick={toggleControls}>

        <i className="icon-controls"></i>Controls

      </a>

    </div>

  );

}



export default Navbar;



