import React from 'react';
import '../App.css';
import img from '../assets/images/Group 123.png';
import img1 from '../assets/images/Roadmap Mobile.png';
import avt from "../assets/images/metacooler_design_Comic_book_style_Strong_Black_outline_image_o_f6a9ae34-e672-48dd-b829-5643d40b1173.webp";
import img2 from '../assets/images/Roadmap Desktop-2.png';

function RoadMap() {
    return (
        <div id="roadmap">
            <div className='main-sec'>
                <div className='main'>
                    <div className='main-line'>
                        <hr className='line'></hr>
                    </div>
                    <div className='roadmap-header'>
                        <h1>ROAD MAP TO THE STARS</h1>
                        <p>There’s a lot…</p>
                    </div>
                    <div className='main-line'>
                        <hr className='line'></hr>
                    </div>
                </div>
                <img className="roadmap-avt" src={avt}></img>
            </div>
                <div className='img'>
                    <img className='max-desktop' src={img2}></img>
                    <img className='desktop' src={img}></img>
                    <img className='mobile' src={img1}></img>
                </div>
            {/* </div> */}
        </div>
    );
};

export default RoadMap;
