import React from 'react';
import img6 from "../assets/images/Group 129.png";
import img7 from "../assets/images/Group 130.png";
import img8 from "../assets/images/Group 131.png";

const ImageModal = ({ nft, onClose }) => {
  return (
    <div id='marketplace-modal' className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="modal-image-container">
            <img
              src={nft.image}
              alt={nft.title}
              className="modal-image"
            />
          
          </div>

          <div className="modal-info">
            <div className='modal-info-left'>
              <h2 className="modal-title">{nft.title}</h2>
              <ul>
                <li><a href="#"><img src={img8} alt="icon" /></a></li>
                <li><a href="#"><img src={img7} alt="icon" /></a></li>
                <li><a href="#"><img src={img6} alt="icon" /></a></li>
              </ul>
            </div>
            
            {/* <p className="modal-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}

            <div className="attributes-grid">
              {Object.entries(nft).map(([key, value]) => {
                if (key === 'id' || key === 'image' || key === 'title') return null;
                return (
                  <div key={key} className="attribute-card">
                    <h3 className="attribute-label">{key}</h3>
                    <p className="attribute-value">{value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;