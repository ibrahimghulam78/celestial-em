import React from 'react';
import '../App.css';
import img from '../assets/images/opensea-logo-1.png';
import img1 from '../assets/images/Mask Group 4.png';
import img2 from '../assets/images/Group 90.png';

function HiddenGems() {
    return (
        <div id="hiddengems">
            <div className='main-sec'>
                <div className='main'>
                    <div className='main-line'>
                        <hr className='line'></hr>
                    </div>
                    <div className='hiddengems-header'>
                        <h1>Find Out Hidden Gems in the Marketplace</h1>
                    </div>
                    <div className='main-line'>
                        <hr className='line'></hr>
                    </div>
                </div>
                <div className='hiddengems-logos'>
                    <div className='logos'>
                        <img src={img}></img>
                        <img src={img1}></img>
                        <img src={img2}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HiddenGems;
