
// import React, { useState, useRef } from "react";
// import "../App.css";
// import img from '../assets/images/Planet.png';
// import img1 from '../assets/images/Galaxy.png';
// import bubble from '../assets/images/Galaxy bubble.png';

// const GalaxyZoom = () => {
//     const [zoomStage, setZoomStage] = useState(null); // Tracks the current stage: ball, galaxy, planet
//     const [selectedItem, setSelectedItem] = useState(null); // Tracks the selected item
//     const [isZooming, setIsZooming] = useState(false); // Animation state
//     const [zoomPosition, setZoomPosition] = useState({}); // Tracks the zooming position dynamically
//     const [background, setBackground] = useState("ball-bg"); // Background for each step
//     const itemRefs = useRef({}); // Dynamic refs for items (balls, galaxies)

//     const galaxies = {
//         Ball1: [
//             { name: "Milky Way", image: img1 },
//             { name: "Andromeda", image: img1 },
//         ],
//         Ball2: [
//             { name: "Whirlpool", image: img1 },
//             { name: "Sombrero", image: img1 },
//         ],
//     };

//     const planets = {
//         "Milky Way": [
//             { name: "Earth", image: img },
//             { name: "Mars", image: img },
//             { name: "Jupiter", image: img },
//         ],
//         Andromeda: [
//             { name: "Planet A", image: img },
//             { name: "Planet B", image: img },
//         ],
//         Whirlpool: [
//             { name: "Planet X", image: img },
//             { name: "Planet Y", image: img },
//         ],
//         Sombrero: [
//             { name: "Planet Z", image: img },
//         ],
//     };

//     const shuffleArray = (array) => {
//         return array
//             .map((value) => ({ value, sort: Math.random() }))
//             .sort((a, b) => a.sort - b.sort)
//             .map(({ value }) => value);
//     };

//     const calculateZoomPosition = (itemRef) => {
//         if (itemRef) {
//             const rect = itemRef.getBoundingClientRect();
//             return {
//                 top: rect.top,
//                 left: rect.left,
//                 width: rect.width,
//                 height: rect.height,
//             };
//         }
//         return {};
//     };

//     const handleClick = (stage, item, refKey) => {
//         const position = calculateZoomPosition(itemRefs.current[refKey]);
//         setZoomPosition(position);

//         if (stage === "galaxies") setBackground("galaxy-bg");
//         else if (stage === "planets") setBackground("planet-bg");

//         setIsZooming(true);
//         setTimeout(() => {
//             setZoomStage(stage);
//             setSelectedItem(item);
//             setIsZooming(false);
//         }, 1000);
//     };

//     const handleClose = () => {
//         setZoomStage(null);
//         setSelectedItem(null);
//         setIsZooming(false);
//         setZoomPosition({});
//         setBackground("ball-bg");
//     };

//     return (
//         <div id="cosmosplayground">
//             <div className="main-sec">
//                 <div className="main">
//                     <div className="main-line left-line">
//                         <hr className="line" />
//                     </div>
//                     <div className="cosmosplayground-header">
//                         <h1>THE COSMOS IS YOUR PLAYGROUND</h1>
//                         <p>It’s not about where you started. It’s about where you ended up that will define your legacy.</p>
//                     </div>
//                     <div className="main-line right-line">
//                         <hr className="line" />
//                     </div>
//                 </div>
//                 <div className={`galaxy-zoom-container ${background}`}>

//                     {zoomStage === null && (
//                         <>
//                             <div
//                                 ref={(el) => (itemRefs.current["Ball1"] = el)}
//                                 className={`zoom-ball ball-1 ${isZooming ? "zooming" : ""}`}
//                                 onClick={() => handleClick("galaxies", "Ball1", "Ball1")}
//                             >
//                                 <img src={bubble}></img>
//                             </div>
//                             <div
//                                 ref={(el) => (itemRefs.current["Ball2"] = el)}
//                                 className={`zoom-ball ball-2 ${isZooming ? "zooming" : ""}`}
//                                 onClick={() => handleClick("galaxies", "Ball2", "Ball2")}
//                             >
//                                 <img src={bubble}></img>
//                             </div>
//                         </>
//                     )}


//                     {zoomStage === "galaxies" && (
//                         <div className={`galaxy-zoom-popup ${isZooming ? "zooming" : ""}`}>
//                             <div className="galaxy-zoom-popup-content">
//                                 <h2>Galaxies in {selectedItem}</h2>
//                                 <div className="galaxy-zoom-popup-items">
//                                     {shuffleArray(galaxies[selectedItem]).map((galaxy) => (
//                                         <div
//                                             key={galaxy.name}
//                                             className="galaxy-zoom-popup-item"
//                                             onClick={() => handleClick("planets", galaxy.name, galaxy.name)}
//                                         >
//                                             <h3>{galaxy.name}</h3>
//                                             <img src={galaxy.image} />
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <button className="galaxy-zoom-close-button" onClick={handleClose}>
//                                     Close
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {zoomStage === "planets" && (
//                         <div className={`galaxy-zoom-popup ${isZooming ? "zooming" : ""}`}>
//                             <div className="galaxy-zoom-popup-content">
//                                 <h2>Planets in {selectedItem}</h2>
//                                 <div className="galaxy-zoom-popup-items">
//                                     {shuffleArray(planets[selectedItem]).map((planet) => (
//                                         <div key={planet.name} className="galaxy-zoom-popup-item">
//                                             <h3>{planet.name}</h3>
//                                             <img src={planet.image} alt={planet.name} />
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <button className="galaxy-zoom-close-button" onClick={handleClose}>
//                                     Close
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GalaxyZoom;


// import React, { useState, useRef } from "react";
// import "../App.css";
// import img from "../assets/images/Planet.png";
// import img1 from "../assets/images/Galaxy.png";
// import bubble from "../assets/images/Galaxy bubble.png";

// const GalaxyZoom = () => {
//     const [zoomStage, setZoomStage] = useState(null); // Tracks the current stage: ball, galaxy, planet
//     const [selectedItem, setSelectedItem] = useState(null); // Tracks the selected item
//     const [zoomingBall, setZoomingBall] = useState(null); // Tracks which ball is zooming
//     const [zoomPosition, setZoomPosition] = useState({}); // Tracks the zooming position dynamically
//     const [background, setBackground] = useState("ball-bg"); // Background for each step
//     const itemRefs = useRef({}); // Dynamic refs for items (balls, galaxies)

//     const galaxies = {
//         Ball1: [
//             { name: "Milky Way", image: img1 },
//             { name: "Andromeda", image: img1 },
//         ],
//         Ball2: [
//             { name: "Whirlpool", image: img1 },
//             { name: "Sombrero", image: img1 },
//         ],
//     };

//     const planets = {
//         "Milky Way": [
//             { name: "Earth", image: img },
//             { name: "Mars", image: img },
//             { name: "Jupiter", image: img },
//         ],
//         Andromeda: [
//             { name: "Planet A", image: img },
//             { name: "Planet B", image: img },
//         ],
//         Whirlpool: [
//             { name: "Planet X", image: img },
//             { name: "Planet Y", image: img },
//         ],
//         Sombrero: [
//             { name: "Planet Z", image: img },
//         ],
//     };

//     const shuffleArray = (array) => {
//         return array
//             .map((value) => ({ value, sort: Math.random() }))
//             .sort((a, b) => a.sort - b.sort)
//             .map(({ value }) => value);
//     };

//     const calculateZoomPosition = (itemRef) => {
//         if (itemRef) {
//             const rect = itemRef.getBoundingClientRect();
//             return {
//                 top: rect.top,
//                 left: rect.left,
//                 width: rect.width,
//                 height: rect.height,
//             };
//         }
//         return {};
//     };

//     const handleClick = (stage, item, refKey) => {
//         const position = calculateZoomPosition(itemRefs.current[refKey]);
//         setZoomPosition(position);
    
//         setZoomingBall(refKey); // Mark the item being zoomed (ball or galaxy)
    
//         if (stage === "galaxies") setBackground("galaxy-bg");
//         else if (stage === "planets") setBackground("planet-bg");
    
//         setTimeout(() => {
//             setZoomStage(stage);
//             setSelectedItem(item);
//             setZoomingBall(null); // Reset zooming state after animation
//         }, 1000); // Match the animation duration
//     };    

//     const handleClose = () => {
//         setZoomStage(null);
//         setSelectedItem(null);
//         setZoomingBall(null);
//         setZoomPosition({});
//         setBackground("ball-bg");
//     };

//     return (
//         <div id="cosmosplayground">
//             <div className="main-sec">
//                 <div className="main">
//                     <div className="main-line left-line">
//                         <hr className="line" />
//                     </div>
//                     <div className="cosmosplayground-header">
//                         <h1>THE COSMOS IS YOUR PLAYGROUND</h1>
//                         <p>It’s not about where you started. It’s about where you ended up that will define your legacy.</p>
//                     </div>
//                     <div className="main-line right-line">
//                         <hr className="line" />
//                     </div>
//                 </div>
//                 <div className={`galaxy-zoom-container ${background}`}>
//                     {zoomStage === null && (
//                         <>
//                             <div
//                                 ref={(el) => (itemRefs.current["Ball1"] = el)}
//                                 className={`zoom-ball ball-1 ${zoomingBall === "Ball1" ? "zooming" : zoomingBall ? "hidden" : ""
//                                     }`}
//                                 onClick={() => handleClick("galaxies", "Ball1", "Ball1")}
//                             >
//                                 <img src={bubble} alt="Ball 1" />
//                             </div>
//                             <div
//                                 ref={(el) => (itemRefs.current["Ball2"] = el)}
//                                 className={`zoom-ball ball-2 ${zoomingBall === "Ball2" ? "zooming" : zoomingBall ? "hidden" : ""
//                                     }`}
//                                 onClick={() => handleClick("galaxies", "Ball2", "Ball2")}
//                             >
//                                 <img src={bubble} alt="Ball 2" />
//                             </div>
//                         </>
//                     )}


//                     {zoomStage === "galaxies" && (
//                         <div className="galaxy-zoom-popup">
//                             <div className="galaxy-zoom-popup-content">
//                                 <h2>Galaxies in {selectedItem}</h2>
//                                 <div className="galaxy-zoom-popup-items">
//                                     {shuffleArray(galaxies[selectedItem]).map((galaxy) => (
//                                         <div
//                                             key={galaxy.name}
//                                             ref={(el) => (itemRefs.current[galaxy.name] = el)}
//                                             className={`galaxy-zoom-popup-item ${zoomingBall === galaxy.name
//                                                 ? "zooming"
//                                                 : zoomingBall
//                                                     ? "hidden"
//                                                     : ""
//                                                 }`}
//                                             onClick={() => handleClick("planets", galaxy.name, galaxy.name)}
//                                         >
//                                             <h3>{galaxy.name}</h3>
//                                             <img src={galaxy.image} alt={galaxy.name} />
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <button className="galaxy-zoom-close-button" onClick={handleClose}>
//                                     Close
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {zoomStage === "planets" && (
//                         <div className={`galaxy-zoom-popup`}>
//                             <div className="galaxy-zoom-popup-content">
//                                 <h2>Planets in {selectedItem}</h2>
//                                 <div className="galaxy-zoom-popup-items">
//                                     {shuffleArray(planets[selectedItem]).map((planet) => (
//                                         <div key={planet.name} className="galaxy-zoom-popup-item">
//                                             <h3>{planet.name}</h3>
//                                             <img src={planet.image} alt={planet.name} />
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <button className="galaxy-zoom-close-button" onClick={handleClose}>
//                                     Close
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GalaxyZoom;

import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import img1 from "../assets/images/Galaxy.png";
import bubble from "../assets/images/Galaxy bubble.png";
import Navbar from '../components/Navbar';
import Controls from '../components/Controls';
import Data from '../components/DataSelection';
import SolarSystem from '../components/SolarSystem';
import "../assets/css/3DStyles.css";
import avt from "../assets/images/metacooler_design_Comic_book_style_Strong_Black_outline_image_o_dab73397-a6e3-48c6-af98-a3b94cf29e05.webp";


const GalaxyZoom = () => {
    const [zoomStage, setZoomStage] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [zoomingBall, setZoomingBall] = useState(null);
    const [zoomPosition, setZoomPosition] = useState({});
    const [background, setBackground] = useState("ball-bg");
    const itemRefs = useRef({});

    // Solar System State
    const [viewState, setViewState] = useState({
        ui: 'hide-UI',
        view: 'view-2D',
        zoom: 'zoom-large',
        data: 'data-close',
        controls: 'controls-close',
        scale: 'scale-stretched',
        activePlanet: 'earth'
    });

    useEffect(() => {
        if (zoomStage === "planets") {
            setTimeout(() => {
                setViewState(prev => ({
                    ...prev,
                    ui: '',
                    view: 'view-3D',
                    scale: 'scale-stretched set-speed'
                }));
            }, 2000);
        }
    }, [zoomStage]);

    // Solar System Controls
    const toggleData = (e) => {
        e.preventDefault();
        setViewState(prev => ({
            ...prev,
            data: prev.data === 'data-close' ? 'data-open' : 'data-close'
        }));
    };

    const toggleControls = (e) => {
        e.preventDefault();
        setViewState(prev => ({
            ...prev,
            controls: prev.controls === 'controls-close' ? 'controls-open' : 'controls-close'
        }));
    };

    const toggleView = () => {
        setViewState(prev => ({
            ...prev,
            view: prev.view === 'view-3D' ? 'view-2D' : 'view-3D'
        }));
    };

    const toggleZoom = () => {
        setViewState(prev => ({
            ...prev,
            zoom: prev.zoom === 'zoom-large' ? 'zoom-close' : 'zoom-large'
        }));
    };

    const setScale = (scaleType) => {
        const scaleClasses = {
            speed: 'scale-stretched set-speed',
            size: 'scale-s set-size',
            distance: 'scale-d set-distance'
        };
        setViewState(prev => ({
            ...prev,
            scale: scaleClasses[scaleType]
        }));
    };

    const setPlanet = (planet) => {
        setViewState(prev => ({
            ...prev,
            activePlanet: planet
        }));
    };

    // Galaxy Logic
    const galaxies = {
        Ball1: [
            { name: "Milky Way", image: img1 },
            { name: "Andromeda", image: img1 },
        ],
        Ball2: [
            { name: "Whirlpool", image: img1 },
            { name: "Sombrero", image: img1 },
        ],
    };

    const shuffleArray = (array) => {
        if (!array) return [];
        return array
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const handleClick = (stage, item, refKey) => {
        const position = calculateZoomPosition(itemRefs.current[refKey]);
        setZoomPosition(position);
        setZoomingBall(refKey);
    
        if (stage === "galaxies") setBackground("galaxy-bg");
        else if (stage === "planets") setBackground("solar-system-bg");
    
        setTimeout(() => {
            setZoomStage(stage);
            setSelectedItem(item);
            setZoomingBall(null);
        }, 1000);
    };    

    const handleClose = () => {
        setZoomStage(null);
        setSelectedItem(null);
        setZoomingBall(null);
        setZoomPosition({});
        setBackground("ball-bg");
        setViewState({
            ui: 'hide-UI',
            view: 'view-2D',
            zoom: 'zoom-large',
            data: 'data-close',
            controls: 'controls-close',
            scale: 'scale-stretched',
            activePlanet: 'earth'
        });
    };

    const calculateZoomPosition = (itemRef) => {
        if (itemRef) {
            const rect = itemRef.getBoundingClientRect();
            return {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
            };
        }
        return {};
    };

    const classes = `opening ${viewState.ui} ${viewState.view} ${viewState.zoom} ${viewState.data} ${viewState.controls}`;

    return (
        <div id="cosmosplayground">
            <div className="main-sec">
                <div className="main">
                    <div className="main-line left-line">
                        <hr className="line" />
                    </div>
                    <div className="cosmosplayground-header">
                        <h1>THE COSMOS IS YOUR PLAYGROUND</h1>
                        <p>It's not about where you started. It's about where you ended up that will define your legacy.</p>
                    </div>
                    <div className="main-line right-line">
                        <hr className="line" />
                    </div>
                </div>
            </div>
            <div className="main-sec">
                <img className="cosmos-avt" src={avt}></img>
            </div>
                <div className={`galaxy-zoom-container ${background}`}>
                    {zoomStage === null && (
                        <>
                            <div
                                ref={(el) => (itemRefs.current["Ball1"] = el)}
                                className={`zoom-ball ball-1 ${zoomingBall === "Ball1" ? "zooming" : zoomingBall ? "hidden" : ""}`}
                                onClick={() => handleClick("galaxies", "Ball1", "Ball1")}
                            >
                                <img src={bubble} alt="Ball 1" />
                                <h3>Ball 1</h3>
                            </div>
                            <div
                                ref={(el) => (itemRefs.current["Ball2"] = el)}
                                className={`zoom-ball ball-2 ${zoomingBall === "Ball2" ? "zooming" : zoomingBall ? "hidden" : ""}`}
                                onClick={() => handleClick("galaxies", "Ball2", "Ball2")}
                            >
                                <img src={bubble} alt="Ball 2" />
                                <h3>Ball 2</h3>
                            </div>
                        </>
                    )}

                    {zoomStage === "galaxies" && selectedItem && galaxies[selectedItem] && (
                        <div className="galaxy-zoom-popup">
                            <div className="galaxy-zoom-popup-content">
                                {/* <h2>Galaxies in {selectedItem}</h2> */}
                                <div className="galaxy-zoom-popup-items">
                                    {shuffleArray(galaxies[selectedItem]).map((galaxy) => (
                                        <div
                                            key={galaxy.name}
                                            ref={(el) => (itemRefs.current[galaxy.name] = el)}
                                            className={`galaxy-zoom-popup-item ${
                                                zoomingBall === galaxy.name ? "zooming" : zoomingBall ? "hidden" : ""
                                            }`}
                                            onClick={() => handleClick("planets", galaxy.name, galaxy.name)}
                                        >
                                            <h3>{galaxy.name}</h3>
                                            <img src={galaxy.image} alt={galaxy.name} />
                                        </div>
                                    ))}
                                </div>
                                {/* <button className="galaxy-zoom-close-button" onClick={handleClose}>
                                    Close
                                </button> */}
                            </div>
                        </div>
                    )}

                    {zoomStage === "planets" && (
                        <div className={`solar-system-wrapper ${classes}`}>
                            <Navbar 
                                toggleData={toggleData} 
                                toggleControls={toggleControls} 
                            />
                            
                            <Controls 
                                toggleView={toggleView}
                                toggleZoom={toggleZoom}
                                setScale={setScale}
                            />
                            <div className="solar-system-container">
                                <SolarSystem 
                                    scale={viewState.scale}
                                    activePlanet={viewState.activePlanet}
                                />
                            </div>
                            <Data 
                                activePlanet={viewState.activePlanet}
                                setPlanet={setPlanet}
                            />
                            {/* <button className="galaxy-zoom-close-button" onClick={handleClose}>
                                Close
                            </button> */}
                        </div>
                    )}
                </div>
            {/* </div> */}
        </div>
    );
};

export default GalaxyZoom;


// import React, { useState, useRef, useEffect } from "react";
// import "../App.css"; // Existing styles
// import "../assets/css/3DStyles.css"; // Solar system animation styles
// import img from '../assets/images/Planet.png';
// import img1 from '../assets/images/Galaxy.png';
// import bubble from '../assets/images/Galaxy bubble.png';

// const GalaxyZoom = () => {
//     const [zoomStage, setZoomStage] = useState(null); // Tracks the current stage
//     const [selectedItem, setSelectedItem] = useState(null); // Tracks the selected galaxy
//     const [background, setBackground] = useState("ball-bg"); // Background for each step

//     // Initialize 3D animation when in the planets step
//     useEffect(() => {
//         if (zoomStage === "planets") {
//             const body = document.body;
//             body.classList.add("view-3D");
//             return () => {
//                 body.classList.remove("view-3D");
//             };
//         }
//     }, [zoomStage]);


//     const handleClose = () => {
//         setZoomStage(null);
//         setSelectedItem(null);
//         setBackground("ball-bg");
//     };

//     return (
//         <div id="cosmosplayground">
//             <div className="main-sec">
//                 <div className={`galaxy-zoom-container ${background}`}>
//                     {zoomStage === null && (
//                         <>
//                             <div
//                                 className="zoom-ball ball-1"
//                                 onClick={() => {
//                                     setSelectedItem("Ball1");
//                                     setZoomStage("galaxies");
//                                     setBackground("galaxy-bg");
//                                 }}
//                             >
//                                 <img src={bubble} alt="Ball 1" />
//                             </div>
//                             <div
//                                 className="zoom-ball ball-2"
//                                 onClick={() => {
//                                     setSelectedItem("Ball2");
//                                     setZoomStage("galaxies");
//                                     setBackground("galaxy-bg");
//                                 }}
//                             >
//                                 <img src={bubble} alt="Ball 2" />
//                             </div>
//                         </>
//                     )}

//                     {zoomStage === "galaxies" && (
//                         <div className="galaxy-zoom-popup">
//                             <h2>Galaxies in {selectedItem}</h2>
//                             <div className="galaxy-zoom-popup-items">
//                                 <div
//                                     className="galaxy-zoom-popup-item"
//                                     onClick={() => {
//                                         setZoomStage("planets");
//                                         setBackground("planet-bg");
//                                     }}
//                                 >
//                                     <h3>Milky Way</h3>
//                                 </div>
//                                 <div
//                                     className="galaxy-zoom-popup-item"
//                                     onClick={() => {
//                                         setZoomStage("planets");
//                                         setBackground("planet-bg");
//                                     }}
//                                 >
//                                     <h3>Andromeda</h3>
//                                 </div>
//                             </div>
//                             <button className="galaxy-zoom-close-button" onClick={handleClose}>
//                                 Close
//                             </button>
//                         </div>
//                     )}

//                     {zoomStage === "planets" && (
//                         <div id="universe" className="scale-stretched">
//                             <div id="galaxy">
//                                 <div id="solar-system">
//                                     <div id="sun">
//                                         <dl className="infos">
//                                             <dt>Sun</dt>
//                                             <dd><span></span></dd>
//                                         </dl>
//                                     </div>
//                                     <div id="mercury" className="orbit">
//                                         <div className="pos">
//                                             <div className="planet">
//                                                 <dl className="infos">
//                                                     <dt>Mercury</dt>
//                                                     <dd><span></span></dd>
//                                                 </dl>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div id="venus" className="orbit">
//                                         <div className="pos">
//                                             <div className="planet">
//                                                 <dl className="infos">
//                                                     <dt>Venus</dt>
//                                                     <dd><span></span></dd>
//                                                 </dl>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div id="earth" className="orbit">
//                                         <div className="pos">
//                                             <div className="orbit">
//                                                 <div className="pos">
//                                                     <div className="moon"></div>
//                                                 </div>
//                                             </div>
//                                             <div className="planet">
//                                                 <dl className="infos">
//                                                     <dt>Earth</dt>
//                                                     <dd><span></span></dd>
//                                                 </dl>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div id="mars" className="orbit">
//                                         <div className="pos">
//                                             <div className="planet">
//                                                 <dl className="infos">
//                                                     <dt>Mars</dt>
//                                                     <dd><span></span></dd>
//                                                 </dl>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div id="jupiter" className="orbit">
//                                         <div className="pos">
//                                             <div className="planet">
//                                                 <dl className="infos">
//                                                     <dt>Jupiter</dt>
//                                                     <dd><span></span></dd>
//                                                 </dl>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div id="saturn" className="orbit">
//                                         <div className="pos">
//                                             <div className="planet">
//                                                 <div className="ring"></div>
//                                                 <dl className="infos">
//                                                     <dt>Saturn</dt>
//                                                     <dd><span></span></dd>
//                                                 </dl>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div id="uranus" className="orbit">
//                                         <div className="pos">
//                                             <div className="planet">
//                                                 <dl className="infos">
//                                                     <dt>Uranus</dt>
//                                                     <dd><span></span></dd>
//                                                 </dl>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div id="neptune" className="orbit">
//                                         <div className="pos">
//                                             <div className="planet">
//                                                 <dl className="infos">
//                                                     <dt>Neptune</dt>
//                                                     <dd><span></span></dd>
//                                                 </dl>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div id="newPlanet" className="orbit">
//                                         <div className="pos">
//                                             <div className="planet">
//                                                 <dl className="infos">
//                                                     <dt>New Planet</dt>
//                                                     <dd><span>Rotating planet in orbit</span></dd>
//                                                 </dl>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button className="galaxy-zoom-close-button" onClick={handleClose}>
//                                 Close
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GalaxyZoom;
