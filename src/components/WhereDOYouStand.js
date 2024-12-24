import React from 'react';
import '../App.css';
import img from '../assets/images/Group 74.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WhereDoYouStand() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Tablet view
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767, // Mobile view
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };
    return (
        <div id="wheredoyoustand">
            <div className='main-sec'>
                <div className='main'>
                    <div className='wheredoyoustand-header'>
                        <h1>WHERE DO YOU STAND?</h1>
                        <p>With a plethora of factions and organisations, there’s a role for everyone. Whether you want to join the Farmers’ Association, or the Titan Hunters, the decision is in your hands.</p>
                    </div>
                    {/* <div className='main-line'>
                        <hr className='line'></hr>
                    </div> */}
                </div>
                <div className='img-gallery'>
                    <div>
                        <img src={img}></img>
                        <img src={img}></img>
                        <img src={img}></img>
                        <img src={img}></img>
                        <img src={img}></img>
                        <img src={img}></img>
                        <img src={img}></img>
                        <img src={img}></img>
                    </div>
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
    );
};

export default WhereDoYouStand;
