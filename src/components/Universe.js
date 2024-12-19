import React from 'react';
import SolarSystem from './SolarSystem';

const Universe = ({ animationSpeed }) => {
    return (
        <div className='uni'>
            <div id="universe" className="scale-stretched">
                <div id="galaxy">
                    <SolarSystem animationSpeed={animationSpeed} />
                </div>
            </div>
        </div>
    );
};

export default Universe;
