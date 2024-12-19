import React from 'react';

function Controls({ toggleView, toggleZoom, setScale }) {
  return (
    <div id="controls">
      <label className="set-view">
        <input type="checkbox" onChange={toggleView} />
      </label>
      {/* <label className="set-zoom">
        <input type="checkbox" onChange={toggleZoom} />
      </label> */}
      <label>
        <input 
          type="radio" 
          className="set-speed" 
          name="scale" 
          defaultChecked 
          onChange={() => setScale('speed')}
        />
        <span>Speed</span>
      </label>
      <label>
        <input 
          type="radio" 
          className="set-size" 
          name="scale" 
          onChange={() => setScale('size')}
        />
        <span>Size</span>
      </label>
      <label>
        <input 
          type="radio" 
          className="set-distance" 
          name="scale" 
          onChange={() => setScale('distance')}
        />
        <span>Distance</span>
      </label>
    </div>
  );
}

export default Controls;