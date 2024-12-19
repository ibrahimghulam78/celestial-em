import React from 'react';
import { collections } from './data';

const Gallery = ({ filters, onNFTSelect, activeCollection }) => { // Add activeCollection to props
  const filterNFTs = (nfts) => {
    return nfts.filter(nft => {
      // Check range filters
      if (filters.health && (nft.health < filters.health[0] || nft.health > filters.health[1])) return false;
      if (filters.strength && (nft.strength < filters.strength[0] || nft.strength > filters.strength[1])) return false;
      if (filters.speed && (nft.speed < filters.speed[0] || nft.speed > filters.speed[1])) return false;
      if (filters.stamina && (nft.stamina < filters.stamina[0] || nft.stamina > filters.stamina[1])) return false;
      if (filters.energy && (nft.energy < filters.energy[0] || nft.energy > filters.energy[1])) return false;
      if (filters.basePower && (nft.basePower < filters.basePower[0] || nft.basePower > filters.basePower[1])) return false;
      if (filters.powerRank && (nft.powerRank < filters.powerRank[0] || nft.powerRank > filters.powerRank[1])) return false;

      // Check dropdown filters
      if (filters.cardRank && filters.cardRank !== '' && nft.cardRank !== filters.cardRank) return false;
      if (filters.gender && filters.gender !== '' && nft.gender !== filters.gender) return false;
      if (filters.family && filters.family !== '' && nft.family !== filters.family) return false;
      if (filters.type && filters.type !== '' && nft.type !== filters.type) return false;
      if (filters.status && filters.status !== '' && nft.status !== filters.status) return false;
      if (filters.group && filters.group !== '' && nft.group !== filters.group) return false;
      if (filters.age && filters.age !== '' && nft.age !== filters.age) return false;
      if (filters.nature && filters.nature !== '' && nft.nature !== filters.nature) return false;
      if (filters.primaryWeapon && filters.primaryWeapon !== '' && nft.primaryWeapon !== filters.primaryWeapon) return false;
      if (filters.secondaryWeapon && filters.secondaryWeapon !== '' && nft.secondaryWeapon !== filters.secondaryWeapon) return false;
      if (filters.primaryAccessory && filters.primaryAccessory !== '' && nft.primaryAccessory !== filters.primaryAccessory) return false;
      if (filters.universe && filters.universe !== '' && nft.universe !== filters.universe) return false;
      if (filters.galaxy && filters.galaxy !== '' && nft.galaxy !== filters.galaxy) return false;
      if (filters.system && filters.system !== '' && nft.system !== filters.system) return false;
      if (filters.planet && filters.planet !== '' && nft.planet !== filters.planet) return false;
      if (filters.city && filters.city !== '' && nft.city !== filters.city) return false;

      return true;
    });
  };

  const filteredNFTs = filterNFTs(collections[activeCollection]);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {filteredNFTs.map(nft => (
          <div
            key={nft.id}
            className="nft-card"
            onClick={() => onNFTSelect(nft)}
          >
            <img
              src={nft.image}
              alt={nft.title}
              className="nft-image"
            />
            <div className="nft-overlay">
              <h3>Name</h3>
              <h3 className="nft-title">No. {nft.id}</h3>
              
              {/* <div className="nft-stats">
                <p>Power: {nft.basePower}</p>
                <p>Rank: {nft.cardRank}</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      {filteredNFTs.length === 0 && (
        <div className="no-results">
          <p>No NFTs found matching the selected filters</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;