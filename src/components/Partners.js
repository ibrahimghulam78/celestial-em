import React from 'react';
import '../App.css';
import img from '../assets/images/Group 74.png';

function Partners() {
    return (
        <div id="partners">
            <div className='main-sec'>
                <div className='main'>
                    <div className='main-line'>
                        <hr className='line'></hr>
                    </div>
                    <div className='partners-header'>
                        <h1>Our Partners</h1>
                    </div>
                    <div className='main-line'>
                        <hr className='line'></hr>
                    </div>
                </div>
                <div className='partners-team'>
                    <div className='team'>
                        <img src={img}></img>
                        <img src={img}></img>
                        <img src={img}></img>
                        <img src={img}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
