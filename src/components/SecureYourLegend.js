import React, { useState } from 'react';
import '../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../assets/images/Group 74.png';
import Popup from './Popup';
import icon from '../assets/images/Group 78.png';
import iconStar from '../assets/images/Group 79.png';
import iconStar1 from '../assets/images/Path 114.svg';
import iconStar2 from '../assets/images/Group 198.svg';
import iconStar3 from '../assets/images/Group 196.svg';
import iconStar4 from '../assets/images/Group 194.svg';
import iconStar5 from '../assets/images/Group 192.svg';
import iconStar6 from '../assets/images/Group 190.svg';
import iconStar7 from '../assets/images/Group 189.svg';

function SecureYourLegend() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State for managing popup visibility
    const [popupContent, setPopupContent] = useState({}); // State to store the content (heading and text) for the popup

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         },
    //     ]
    // };

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
                    slidesToShow: 2,
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

    const contentData = [
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='popup-header-left'>
                            <div className='id'>
                                <h2>#0001</h2>
                            </div>
                            <div className='name'>
                                <h4>Status</h4>
                                <h2>Nizkah</h2>
                                <h4>The Tormentor of Planets</h4>
                            </div>
                        </div>
                        <div className='popup-header-right'>
                            <div className='icons'>
                                <img src={iconStar6}></img>
                            </div>
                            <div className='ultimate desktop-ultimate'>
                                <p>Power<br />Rank</p>
                                <div className='id'>
                                    <h2>| #001</h2>
                                </div>
                            </div>
                            <div className='ultimate mobile-ultimate'>
                                <p>Power Rank</p>
                                <div className='id'>
                                    <h2>#001</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <img className='group-icon' src={iconStar5}></img>

                                        </div>
                                        <div className='right-column'>
                                            <p>Serves | Character</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Type</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar4}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Family</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar7}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Gender</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar3}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Age</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='full-column first-row-minting'>
                                            <p className='full-column-left'>Nature</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar2}></img>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right nature-icon' src={iconStar1}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Galaxy</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>System</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Planet</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>City</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='weapon-details'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Accessories</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Accessory</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-slider mobile-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider tablet-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe-tablet'>
                                    <div className='account'>
                                        <i class="fa-solid fa-user"></i>
                                        <p>Owner Name</p>
                                    </div>
                                    <div className='universe'>
                                        <div className='universe-left'>
                                            <p>Universe</p>
                                            <div className='id'>
                                                <h2>| 420</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='popup-header-left'>
                            <div className='id'>
                                <h2>#0001</h2>
                            </div>
                            <div className='name'>
                                <h4>Status</h4>
                                <h2>Nizkah</h2>
                                <h4>The Tormentor of Planets</h4>
                            </div>
                        </div>
                        <div className='popup-header-right'>
                            <div className='icons'>
                                <img src={iconStar6}></img>
                            </div>
                            <div className='ultimate desktop-ultimate'>
                                <p>Power<br />Rank</p>
                                <div className='id'>
                                    <h2>| #001</h2>
                                </div>
                            </div>
                            <div className='ultimate mobile-ultimate'>
                                <p>Power Rank</p>
                                <div className='id'>
                                    <h2>#001</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <img className='group-icon' src={iconStar5}></img>

                                        </div>
                                        <div className='right-column'>
                                            <p>Serves | Character</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Type</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar4}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Family</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar7}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Gender</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar3}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Age</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='full-column first-row-minting'>
                                            <p className='full-column-left'>Nature</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar2}></img>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right nature-icon' src={iconStar1}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Galaxy</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>System</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Planet</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>City</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='weapon-details'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Accessories</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Accessory</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-slider mobile-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider tablet-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe-tablet'>
                                    <div className='account'>
                                        <i class="fa-solid fa-user"></i>
                                        <p>Owner Name</p>
                                    </div>
                                    <div className='universe'>
                                        <div className='universe-left'>
                                            <p>Universe</p>
                                            <div className='id'>
                                                <h2>| 420</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='popup-header-left'>
                            <div className='id'>
                                <h2>#0001</h2>
                            </div>
                            <div className='name'>
                                <h4>Status</h4>
                                <h2>Nizkah</h2>
                                <h4>The Tormentor of Planets</h4>
                            </div>
                        </div>
                        <div className='popup-header-right'>
                            <div className='icons'>
                                <img src={iconStar6}></img>
                            </div>
                            <div className='ultimate desktop-ultimate'>
                                <p>Power<br />Rank</p>
                                <div className='id'>
                                    <h2>| #001</h2>
                                </div>
                            </div>
                            <div className='ultimate mobile-ultimate'>
                                <p>Power Rank</p>
                                <div className='id'>
                                    <h2>#001</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <img className='group-icon' src={iconStar5}></img>

                                        </div>
                                        <div className='right-column'>
                                            <p>Serves | Character</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Type</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar4}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Family</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar7}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Gender</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar3}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Age</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='full-column first-row-minting'>
                                            <p className='full-column-left'>Nature</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar2}></img>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right nature-icon' src={iconStar1}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Galaxy</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>System</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Planet</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>City</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='weapon-details'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Accessories</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Accessory</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-slider mobile-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider tablet-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe-tablet'>
                                    <div className='account'>
                                        <i class="fa-solid fa-user"></i>
                                        <p>Owner Name</p>
                                    </div>
                                    <div className='universe'>
                                        <div className='universe-left'>
                                            <p>Universe</p>
                                            <div className='id'>
                                                <h2>| 420</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='popup-header-left'>
                            <div className='id'>
                                <h2>#0001</h2>
                            </div>
                            <div className='name'>
                                <h4>Status</h4>
                                <h2>Nizkah</h2>
                                <h4>The Tormentor of Planets</h4>
                            </div>
                        </div>
                        <div className='popup-header-right'>
                            <div className='icons'>
                                <img src={iconStar6}></img>
                            </div>
                            <div className='ultimate desktop-ultimate'>
                                <p>Power<br />Rank</p>
                                <div className='id'>
                                    <h2>| #001</h2>
                                </div>
                            </div>
                            <div className='ultimate mobile-ultimate'>
                                <p>Power Rank</p>
                                <div className='id'>
                                    <h2>#001</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <img className='group-icon' src={iconStar5}></img>

                                        </div>
                                        <div className='right-column'>
                                            <p>Serves | Character</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Type</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar4}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Family</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar7}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Gender</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar3}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Age</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='full-column first-row-minting'>
                                            <p className='full-column-left'>Nature</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar2}></img>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right nature-icon' src={iconStar1}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Galaxy</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>System</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Planet</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>City</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='weapon-details'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Accessories</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Accessory</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-slider mobile-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider tablet-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe-tablet'>
                                    <div className='account'>
                                        <i class="fa-solid fa-user"></i>
                                        <p>Owner Name</p>
                                    </div>
                                    <div className='universe'>
                                        <div className='universe-left'>
                                            <p>Universe</p>
                                            <div className='id'>
                                                <h2>| 420</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='popup-header-left'>
                            <div className='id'>
                                <h2>#0001</h2>
                            </div>
                            <div className='name'>
                                <h4>Status</h4>
                                <h2>Nizkah</h2>
                                <h4>The Tormentor of Planets</h4>
                            </div>
                        </div>
                        <div className='popup-header-right'>
                            <div className='icons'>
                                <img src={iconStar6}></img>
                            </div>
                            <div className='ultimate desktop-ultimate'>
                                <p>Power<br />Rank</p>
                                <div className='id'>
                                    <h2>| #001</h2>
                                </div>
                            </div>
                            <div className='ultimate mobile-ultimate'>
                                <p>Power Rank</p>
                                <div className='id'>
                                    <h2>#001</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <img className='group-icon' src={iconStar5}></img>

                                        </div>
                                        <div className='right-column'>
                                            <p>Serves | Character</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Type</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar4}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Family</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar7}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Gender</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar3}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Age</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='full-column first-row-minting'>
                                            <p className='full-column-left'>Nature</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar2}></img>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right nature-icon' src={iconStar1}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Galaxy</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>System</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Planet</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>City</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='weapon-details'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Accessories</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Accessory</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-slider mobile-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider tablet-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe-tablet'>
                                    <div className='account'>
                                        <i class="fa-solid fa-user"></i>
                                        <p>Owner Name</p>
                                    </div>
                                    <div className='universe'>
                                        <div className='universe-left'>
                                            <p>Universe</p>
                                            <div className='id'>
                                                <h2>| 420</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='popup-header-left'>
                            <div className='id'>
                                <h2>#0001</h2>
                            </div>
                            <div className='name'>
                                <h4>Status</h4>
                                <h2>Nizkah</h2>
                                <h4>The Tormentor of Planets</h4>
                            </div>
                        </div>
                        <div className='popup-header-right'>
                            <div className='icons'>
                                <img src={iconStar6}></img>
                            </div>
                            <div className='ultimate desktop-ultimate'>
                                <p>Power<br />Rank</p>
                                <div className='id'>
                                    <h2>| #001</h2>
                                </div>
                            </div>
                            <div className='ultimate mobile-ultimate'>
                                <p>Power Rank</p>
                                <div className='id'>
                                    <h2>#001</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <img className='group-icon' src={iconStar5}></img>

                                        </div>
                                        <div className='right-column'>
                                            <p>Serves | Character</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Type</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar4}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Family</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar7}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Gender</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar3}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Age</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='full-column first-row-minting'>
                                            <p className='full-column-left'>Nature</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar2}></img>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right nature-icon' src={iconStar1}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Galaxy</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>System</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Planet</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>City</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='weapon-details'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Accessories</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Accessory</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-slider mobile-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider tablet-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe-tablet'>
                                    <div className='account'>
                                        <i class="fa-solid fa-user"></i>
                                        <p>Owner Name</p>
                                    </div>
                                    <div className='universe'>
                                        <div className='universe-left'>
                                            <p>Universe</p>
                                            <div className='id'>
                                                <h2>| 420</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            content: (
                <div id='popup'>
                    <div className='popup-header'>
                        <div className='popup-header-left'>
                            <div className='id'>
                                <h2>#0001</h2>
                            </div>
                            <div className='name'>
                                <h4>Status</h4>
                                <h2>Nizkah</h2>
                                <h4>The Tormentor of Planets</h4>
                            </div>
                        </div>
                        <div className='popup-header-right'>
                            <div className='icons'>
                                <img src={iconStar6}></img>
                            </div>
                            <div className='ultimate desktop-ultimate'>
                                <p>Power<br />Rank</p>
                                <div className='id'>
                                    <h2>| #001</h2>
                                </div>
                            </div>
                            <div className='ultimate mobile-ultimate'>
                                <p>Power Rank</p>
                                <div className='id'>
                                    <h2>#001</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-name'>
                        <h2>Nizkah</h2>
                        <h4>The Tormentor of Planets</h4>
                    </div>
                    <div className='popup-body'>
                        <div className='popup-left'>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Strength</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Speed</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Stamina</p>
                                </div>
                            </div><div className='side-items'>
                                <div className='number'>
                                    <h3>100</h3>
                                </div>
                                <div className='text'>
                                    <p>Energy</p>
                                </div>
                            </div>
                            <div className='base'>
                                <h3>Base Power:</h3>
                                <h2>100</h2>
                            </div>
                        </div>
                        <div className='popup-right'>
                            <div className='chart-table chart-table-desktop'>
                                <div className='first-details'>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <img className='group-icon' src={iconStar5}></img>

                                        </div>
                                        <div className='right-column'>
                                            <p>Serves | Character</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Type</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar4}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Family</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar7}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Gender</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar3}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Age</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='minting-details'>
                                    <div className='row'>
                                        <div className='full-column first-row-minting'>
                                            <p className='full-column-left'>Nature</p>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right' src={iconStar2}></img>
                                            <p className='full-column-mid'> | </p>
                                            <img className='full-column-right nature-icon' src={iconStar1}></img>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Galaxy</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>System</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>Planet</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='full-column'>
                                            <p className='full-column-left'>City</p>
                                            <p className='full-column-mid'> | </p>
                                            <p className='full-column-right'>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='weapon-details'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Weapon</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Weapon</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='account-table account-desktop'>
                                <div className='account-first'>
                                    <div className='row'>
                                        <div className='single-column'>
                                            <p>Accessories</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>Primary Accessory</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>Secondary Accessory</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='left-column'>
                                            <p>-----</p>
                                        </div>
                                        <div className='right-column'>
                                            <p>-----</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-slider mobile-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe'>
                                    <div className='universe-left'>
                                        <p>Universe</p>
                                        <div className='id'>
                                            <h2>| 420</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='account'>
                                    <i class="fa-solid fa-user"></i>
                                    <p>Owner Name</p>
                                </div>
                            </div>
                            <div className='img-slider tablet-slider'>
                                <Slider className='popup-slider' {...settings}>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='first-details'>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <img className='group-icon' src={iconStar5}></img>

                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Serves | Character</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Type</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar4}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Family</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar7}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Gender</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar3}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Age</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='minting-details'>
                                                <div className='row'>
                                                    <div className='full-column first-row-minting'>
                                                        <p className='full-column-left'>Nature</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar2}></img>
                                                        <p className='full-column-mid'> | </p>
                                                        <img className='full-column-right' src={iconStar1}></img>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Galaxy</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>System</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>Planet</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='full-column'>
                                                        <p className='full-column-left'>City</p>
                                                        <p className='full-column-mid'> | </p>
                                                        <p className='full-column-right'>Lorem Ipsum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='chart-table'>
                                            <div className='weapon-details'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Weapon</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Weapon</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='slides'>
                                        <div className='account-table'>
                                            <div className='account-first'>
                                                <div className='row'>
                                                    <div className='single-column'>
                                                        <p>Accessories</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>Primary Accessory</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>Secondary Accessory</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='left-column'>
                                                        <p>-----</p>
                                                    </div>
                                                    <div className='right-column'>
                                                        <p>-----</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <div className='universe-tablet'>
                                    <div className='account'>
                                        <i class="fa-solid fa-user"></i>
                                        <p>Owner Name</p>
                                    </div>
                                    <div className='universe'>
                                        <div className='universe-left'>
                                            <p>Universe</p>
                                            <div className='id'>
                                                <h2>| 420</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    // Function to handle image click
    const handleImageClick = (index) => {
        setPopupContent(contentData[index]); // Store the corresponding heading and text for the clicked image
        setIsPopupOpen(true); // Open the popup
    };

    // Function to close the popup
    const handleClosePopup = () => {
        setIsPopupOpen(false); // Close the popup
        setPopupContent({}); // Clear the content
    };

    return (
        <div id="secure">
            <div className='main-sec'>
                <div className='main'>
                    <div className='secure-header'>
                        <h1>SECURE YOUR LEGEND AND FORGE YOUR STORY</h1>
                        <p className='secure-header-text'>The genesis pack contains 1,200 of the rarest, most powerful and high-quality cards in the Celestial Empires multiverse – here are some of the highlights.</p>
                    </div>
                    <div className='main-line'>
                        <hr className='line'></hr>
                    </div>
                </div>

                <div className='img-slider'>
                    <Slider {...settings}>
                        {contentData.map((content, index) => (
                            <div className='slides' key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    onClick={() => handleImageClick(index)} // Pass the index of the clicked image
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {/* Popup component */}
            {isPopupOpen && (
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                    <h2>{popupContent.heading}</h2>
                    <p>{popupContent.text}</p>
                    {popupContent.content}
                </Popup>
            )}
        </div>
    );
}

export default SecureYourLegend;
