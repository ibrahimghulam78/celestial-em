import React from 'react';
import '../assets/fontawesome-free-6.5.1-web/css/all.css';
import logo from "../assets/images/CE logo-01.png";
import img1 from "../assets/images/Group 109.png";
import img2 from "../assets/images/Group 110.png";
import img3 from "../assets/images/Group 111.png";
import img4 from "../assets/images/Mask Group 4.png";
import img5 from "../assets/images/opensea-logo-1.png";
import avt from "../assets/images/metacooler_design_Comic_book_style_Strong_Black_outline_image_o_8cac6e55-ba0b-413d-8ece-48b74333d700.webp";


function Footer() {
    return (
        <div id='footer'>
            <footer>
                <div className='main-sec'>
                    <div className='footer-upper'>
                        <div className='social-icons desktop-icons'>
                            <a href='#'><img src={img1}></img></a>
                            <a href='#'><img src={img2}></img></a>
                            <a href='#'><img src={img3}></img></a>
                        </div>
                        <div className='column footer-body'>
                            <a href="/">
                                <img className="logo" src={logo} />
                            </a>
                        </div>
                        <div className="footer-right">
                            <div className="inner">
                                <a href='#'><img src={img5}></img> <span>OpenSea</span></a>
                                <a href='#'><img src={img4}></img> <span>Rarible</span></a>
                            </div>
                        </div>
                    </div>
                    <img className="footer-avt" src={avt}></img>
                </div>
                    <div className='copyright'>
                        <p>Copyright © 2024 Celestial Empires</p>
                        {/* <p>Powered by <a href='https://datadove.co.uk/'>DataDove</a></p> */}
                    </div>
                {/* </div> */}
            </footer>
        </div >
    );
};

export default Footer;