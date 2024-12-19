import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Gallery from '../components/Gallery';
import ImageModal from '../components/ImageModal';
import OtherPagesHeader from '../components/OtherPagesHeader';

const Marketplace = () => {
  const [filters, setFilters] = useState({
    // Range filters
    health: [0, 100],
    strength: [0, 100],
    speed: [0, 100],
    stamina: [0, 100],
    energy: [0, 100],
    basePower: [0, 100],
    powerRank: [0, 1200],
    
    // Dropdown filters
    cardRank: '',
    gender: '',
    family: '',
    type: '',
    status: '',
    group: '',
    age: '',
    nature: '',
    primaryWeapon: '',
    secondaryWeapon: '',
    primaryAccessory: '',
    universe: '',
    galaxy: '',
    system: '',
    planet: '',
    city: ''
  });

  const [selectedNFT, setSelectedNFT] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const [activeCollection, setActiveCollection] = useState('azuki');

  const handleFilterChange = (filterName, value) => {
    if (filterName === 'reset') {
      // Handle reset all filters
      setFilters(value);
    } else {
      // Handle individual filter changes
      setFilters(prev => ({
        ...prev,
        [filterName]: value
      }));
    }
  };

  const [selectedCollection, setSelectedCollection] = useState(activeCollection);

  const handleCollectionChange = (event) => {
    const collection = event.target.value;
    setActiveCollection(collection);
    setSelectedCollection(collection);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    
    // Count range filters that aren't at their default values
    const rangeFilters = [
      { key: 'health', defaultMax: 100 },
      { key: 'strength', defaultMax: 100 },
      { key: 'speed', defaultMax: 100 },
      { key: 'stamina', defaultMax: 100 },
      { key: 'energy', defaultMax: 100 },
      { key: 'basePower', defaultMax: 100 },
      { key: 'powerRank', defaultMax: 1200 }
    ];

    rangeFilters.forEach(({ key, defaultMax }) => {
      if (filters[key] && 
          (filters[key][0] !== 0 || filters[key][1] !== defaultMax)) {
        count++;
      }
    });

    // Count dropdown filters that aren't empty
    Object.entries(filters).forEach(([key, value]) => {
      if (!rangeFilters.find(rf => rf.key === key) && value !== '') {
        count++;
      }
    });

    return count;
  };

  return (
    <div>
      <OtherPagesHeader />
      <div className="marketplace">
        <div className="collection-toggle">
          {/* Desktop buttons */}
          {/* <div className="desktop-toggle">
            <button 
              className={`toggle-btn ${activeCollection === 'azuki' ? 'active' : ''}`}
              onClick={() => setActiveCollection('azuki')}
            >
              Azuki
            </button>
            <button 
              className={`toggle-btn ${activeCollection === 'elemental' ? 'active' : ''}`}
              onClick={() => setActiveCollection('elemental')}
            >
              Elemental
            </button>
            <button 
              className={`toggle-btn ${activeCollection === 'beanz' ? 'active' : ''}`}
              onClick={() => setActiveCollection('beanz')}
            >
              Beanz
            </button>
          </div> */}

          {/* Mobile dropdown */}
          <div className="mobile-toggle">
            <select value={selectedCollection} onChange={handleCollectionChange}>
              <option value="azuki">Azuki</option>
              <option value="elemental">Elemental</option>
              <option value="beanz">Beanz</option>
            </select>
          </div>
        </div>

        <div className="main-content">
          <Sidebar 
            isOpen={isSidebarOpen}
            onOpen={handleOpenSidebar}
            onClose={handleCloseSidebar}
            filters={filters} 
            onFilterChange={handleFilterChange}
          />
          <div className='mobile-gallery'>
          <Gallery 
              filters={filters} 
              onNFTSelect={setSelectedNFT}
              activeCollection={activeCollection}
              />
          </div>
          <div className="collection-toggle desktop-gallery">
            {/* Desktop buttons */}
            <div className="desktop-toggle">
              <div className='collection-toggle-buttons'>
              <button 
                className={`toggle-btn ${activeCollection === 'azuki' ? 'active' : ''}`}
                onClick={() => setActiveCollection('azuki')}
              >
                Azuki
              </button>
              <button 
                className={`toggle-btn ${activeCollection === 'elemental' ? 'active' : ''}`}
                onClick={() => setActiveCollection('elemental')}
              >
                Elemental
              </button>
              <button 
                className={`toggle-btn ${activeCollection === 'beanz' ? 'active' : ''}`}
                onClick={() => setActiveCollection('beanz')}
              >
                Beanz
              </button>
              </div>
              {getActiveFiltersCount() > 0 && (
                <div className='filters-count'>
                  <h1>Filters: <span className='filters-count-number'>{getActiveFiltersCount()}</span></h1>
                  <div className="active-filters-display">
                    {/* <span className="filter-count-text">Active Filters:</span> */}
                    {/* <span className="filter-count-number">{getActiveFiltersCount()}</span> */}
                  </div>
                </div>
                )}
              <Gallery 
              filters={filters} 
              onNFTSelect={setSelectedNFT}
              activeCollection={activeCollection}
              />
            </div>
          </div>
        </div>

        {selectedNFT && (
          <ImageModal 
            nft={selectedNFT} 
            onClose={() => setSelectedNFT(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default Marketplace;