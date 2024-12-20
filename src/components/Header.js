import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import "../App.css";
import logo from "../assets/images/CE logo-01.png";
import img1 from "../assets/images/Group 109.png";
import img2 from "../assets/images/Group 110.png";
import img3 from "../assets/images/Group 111.png";
import img4 from "../assets/images/Mask Group 4.png";
import img5 from "../assets/images/opensea-logo-1.png";
import video from "../assets/images/Celestial Empires_1920x1080.mp4";
import avt from "../assets/images/metacooler_design_Comic_book_style_Strong_Black_outline_image_o_3c7be38d-9097-4a16-bb4f-82120566370e.webp";
import img6 from "../assets/images/Group 129.png";
import img7 from "../assets/images/Group 130.png";
import img8 from "../assets/images/Group 131.png";


function Header() {
    const navRef = useRef();
    const [timeLeft, setTimeLeft] = useState(172800);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const handleNavLinkClick = () => {
        if (navRef.current.classList.contains("responsive_nav")) {
            showNavbar();
        }
    };

    const handleConnectWallet = () => {
        setShowModal(true);
    };

    const handleWalletClick = async (walletType) => {
        if (walletType === 'Phantom' && window.solana && window.solana.isPhantom) {
            try {
                const response = await window.solana.connect();
                console.log('Connected with public key:', response.publicKey.toString());
                await logConnection(walletType, 'connected successfully');
            } catch (err) {
                console.error('Connection failed:', err);
            }
        } else if (walletType === 'Solflare') {
            const solflare = new SolflareWalletAdapter();
            if (solflare.connected) {
                console.log('Solflare already connected');
                await logConnection(walletType, 'already connected');
            } else {
                try {
                    await solflare.connect();
                    console.log('Connected with public key:', solflare.publicKey.toString());
                    await logConnection(walletType, 'connected successfully');
                } catch (err) {
                    console.error('Connection failed:', err);
                }
            }
        } else {
            alert(`Please install ${walletType} wallet.`);
        }
        setShowModal(false);
    };

    const logConnection = async (walletType, status) => {
        try {
            await fetch('http://localhost:8080/log-connection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ walletType, status }),
            });
        } catch (error) {
            console.error('Error logging connection:', error);
        }
    };

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);

        return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setIsButtonVisible(true);
        }
    }, [timeLeft]);

    return (
        <div id="top-div">
            <video autoPlay muted loop id="background-video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="main-sec">
                <header>
                    <div className="logo">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className="header-right">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li className="dropdown">
                                <a href="#">Social <span className="arrow"></span></a>
                                <ul className="dropdown-menu social-dropdown">
                                <li><a href="#"><img src={img6} alt="icon" /> Telegram</a></li>
                                <li><a href="#"><img src={img7} alt="icon" /> Discord</a></li>
                                <li><a href="#"><img src={img8} alt="icon" /> Twitter</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="/marketplace">Marketplace <span className="arrow"></span></a>
                                <ul className="dropdown-menu marketplace-dropdown">
                                    <li><a className="marketplace-link" href="#"><img src={img5} alt="icon" /> OpenSea</a></li>
                                    <li><a className="marketplace-link" href="#"><img src={img4} alt="icon" /> Rarible</a></li>
                                </ul>
                            </li>
                            <button className="wallet-btn" onClick={() => setShowModal(true)}>Connect Wallet</button>
                        </ul>
                    </div>
                    <div className="mob-wallet">
                    <button className="wallet-btn" onClick={() => setShowModal(true)}>Connect Wallet</button>
                    </div>
                    <nav ref={navRef}>
                        <ul className="mob-nav">
                            <li><a href="/" onClick={handleNavLinkClick}>Home</a></li>
                            <li><a href="/marketplace" onClick={handleNavLinkClick}>Marketplace</a></li>
                            <li><a href="/blog" onClick={handleNavLinkClick}>Blog</a></li>
                            <li><a href="/contact" onClick={handleNavLinkClick}>Contact</a></li>
                        </ul>
                        <div className="inner">
                            <a href='#' onClick={handleNavLinkClick}><img src={img5} alt="icon" /> <span>OpenSea</span></a>
                            <a href='#' onClick={handleNavLinkClick}><img src={img4} alt="icon" /> <span>Rarible</span></a>
                        </div>
                        <div className='social-icons mob-icons'>
                            <a href='#' onClick={handleNavLinkClick}><img src={img1} alt="icon" /></a>
                            <a href='#' onClick={handleNavLinkClick}><img src={img2} alt="icon" /></a>
                            <a href='#' onClick={handleNavLinkClick}><img src={img3} alt="icon" /></a>
                        </div>
                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            <FaTimes />
                        </button>
                    </nav>
                    <button className="nav-btn" onClick={showNavbar}>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </header>
                <div id="hero-text">
                    <div className="text">
                        <h1>A GREAT RECKONING APPROACHES</h1>
                        <p className="forge">Forge your own destiny in a vibrant, rich and open multiverse, spanning two universes and ten planets.</p>
                        {timeLeft > 0 ? (
                            <p><span className="count-text">Countdown to Mint</span><br /><br /><span className="time"> {formatTime(timeLeft)}</span></p>
                        ) : (
                            isButtonVisible && (
                                <button onClick={() => alert('Time is up!')}>
                                    Explore Now
                                </button>
                            )
                        )}
                    </div>
                </div>
                <img className="avt" src={avt} alt="avatar" />
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Select Wallet</h2>
                        <button onClick={() => handleWalletClick('Phantom')}>Phantom</button>
                        <button onClick={() => handleWalletClick('Solflare')}>Solflare</button>
                        <button className="wallet-close-btn" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;