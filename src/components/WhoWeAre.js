import React from 'react';
import '../App.css';
import img from '../assets/images/Group 74.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WhoWeAre() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };
    return (
        <div id="whoweare">
            <div className='main-sec'>
                <h1>Who we are</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='row'>
                    <div className='column-text'>
                        <h2>achievements</h2>
                        <ul>
                            <li>Achievement-1</li>
                            <li>Achievement-2</li>
                            <li>Achievement-3</li>
                            <li>Achievement-4</li>
                        </ul>
                    </div>
                    <div className='column-img'>
                        <div className='main'>
                            <div className='main-line'>
                                <hr className='line'></hr>
                            </div>
                            <h2>Team</h2>
                            <div className='main-line'>
                                <hr className='line'></hr>
                            </div>
                        </div>
                        <div className='team'>
                            <img src={img}></img>
                            <img src={img}></img>
                            <img src={img}></img>
                        </div>
                        <div className='img-slider'>
                            <Slider {...settings}>
                                <div className='slides'>
                                    <img src={img} />
                                </div>
                                <div className='slides'>
                                    <img src={img} />
                                </div>
                                <div className='slides'>
                                    <img src={img} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
