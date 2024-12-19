import React, { useState } from 'react';

const Sidebar = ({ isOpen, onOpen, onClose, filters, onFilterChange }) => {
  const [openSections, setOpenSections] = useState({
    title1: false,
    title2: false,
    title3: false,
    title4: false,
    title5: false
  });

  const [expandedFilters, setExpandedFilters] = useState({});

  const handleRangeChange = (filterName, value) => {
    onFilterChange(filterName, [0, parseInt(value)]);
  };

  const handleSelectChange = (filterName, value) => {
    onFilterChange(filterName, value);
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleClearAllFilters = () => {
    const defaultFilters = {
      health: [0, 100],
      strength: [0, 100],
      speed: [0, 100],
      stamina: [0, 100],
      energy: [0, 100],
      basePower: [0, 100],
      powerRank: [0, 1200],
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
    };
    onFilterChange('reset', defaultFilters);
  };

  // Add toggle function for filter options
  const toggleFilterOptions = (filterKey) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterKey]: !prev[filterKey]
    }));
  };

  // Modify the select filter rendering to use toggles
  const renderSelectFilter = ({ name, key, options }) => (
    <div key={key} className="filter-group">
      <div 
        className={`filter-header ${expandedFilters[key] ? 'active' : ''}`}
        onClick={() => toggleFilterOptions(key)}
      >
        <div className="filter-header-content">
          <span className="filter-label">{name}</span>
          <div className="filter-header-buttons">
            <span className="selected-value">{filters[key] || 'All'}</span>
            <span className="toggle-icon">{expandedFilters[key] ? '−' : '+'}</span>
          </div>
        </div>
      </div>
      {expandedFilters[key] && (
        <div className="filter-options">
          <div 
            className={`option ${filters[key] === '' ? 'selected' : ''}`}
            onClick={() => handleSelectChange(key, '')}
          >
            All
          </div>
          {options.map(option => (
            <div
              key={option}
              className={`option ${filters[key] === option ? 'selected' : ''}`}
              onClick={() => handleSelectChange(key, option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // Function to render filter sections
  const renderFilterSections = () => (
    <>
      {/* Title 1 - Range Filters */}
      <div className="filter-section-wrapper">
        <div 
          className={`section-header ${openSections.title1 ? 'active' : ''}`} 
          onClick={() => toggleSection('title1')}
        >
          <h3>Title 1</h3>
          <span className="toggle-icon">{openSections.title1 ? '−' : '+'}</span>
        </div>
        {openSections.title1 && (
          <div className="filter-section">
            {[
              { name: 'Health', key: 'health' },
              { name: 'Strength', key: 'strength' },
              { name: 'Speed', key: 'speed' },
              { name: 'Stamina', key: 'stamina' },
              { name: 'Energy', key: 'energy' },
              { name: 'Base Power', key: 'basePower' },
              { name: 'Power Rank', key: 'powerRank', max: 1200 }
            ].map(({ name, key, max = 100 }) => (
              <div key={key} className="filter-group">
                <label className="filter-label">
                  {name}
                  <span className="filter-value">
                    {filters[key]?.[0]} - {filters[key]?.[1]}
                  </span>
                </label>
                <input
                  type="range"
                  className="range-slider"
                  min="0"
                  max={max}
                  value={filters[key]?.[1] || max}
                  onChange={(e) => handleRangeChange(key, e.target.value)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Title 2 */}
      <div className="filter-section-wrapper">
        <div 
          className={`section-header ${openSections.title2 ? 'active' : ''}`} 
          onClick={() => toggleSection('title2')}
        >
          <h3>Title 2</h3>
          <span className="toggle-icon">{openSections.title2 ? '−' : '+'}</span>
        </div>
        {openSections.title2 && (
          <div className="filter-section">
            {[
              { name: 'Card Rank', key: 'cardRank', options: ['Common', 'Rare', 'Legendary', 'Ultimate'] },
              { name: 'Gender', key: 'gender', options: ['Male', 'Female'] }
            ].map(renderSelectFilter)}
          </div>
        )}
      </div>

      {/* Title 3 */}
      <div className="filter-section-wrapper">
        <div 
          className={`section-header ${openSections.title3 ? 'active' : ''}`} 
          onClick={() => toggleSection('title3')}
        >
          <h3>Title 3</h3>
          <span className="toggle-icon">{openSections.title3 ? '−' : '+'}</span>
        </div>
        {openSections.title3 && (
          <div className="filter-section">
            {[
              { name: 'Family', key: 'family', options: ['Celestial Dynasty', 'Shadow Clan', 'Ancient Order'] },
              { name: 'Type', key: 'type', options: ['Human', 'Celestial', 'Ascended Celestial'] },
              { name: 'Status', key: 'status', options: ['Titan', 'Mortal', 'God'] },
              { name: 'Group', key: 'group', options: ['Universal Chaos', 'Order', 'Neutral'] },
              { name: 'Age', key: 'age', options: ['Ancient', 'Young', 'Timeless'] }
            ].map(renderSelectFilter)}
          </div>
        )}
      </div>
      {/* <div className="filter-section-wrapper">
        <div 
          className={`section-header ${openSections.title3 ? 'active' : ''}`} 
          onClick={() => toggleSection('title3')}
        >
          <h3>Title 3</h3>
          <span className="toggle-icon">{openSections.title3 ? '−' : '+'}</span>
        </div>
        {openSections.title3 && (
          <div className="filter-section">
            {[
              { name: 'Family', key: 'family', options: ['Celestial Dynasty', 'Shadow Clan', 'Ancient Order'] },
              { name: 'Type', key: 'type', options: ['Human', 'Celestial', 'Ascended Celestial'] },
              { name: 'Status', key: 'status', options: ['Titan', 'Mortal', 'God'] },
              { name: 'Group', key: 'group', options: ['Universal Chaos', 'Order', 'Neutral'] },
              { name: 'Age', key: 'age', options: ['Ancient', 'Young', 'Timeless'] }
            ].map(({ name, key, options }) => (
              <div key={key} className="filter-group">
                <label className="filter-label">{name}</label>
                <select
                  className="select-input"
                  value={filters[key] || ''}
                  onChange={(e) => handleSelectChange(key, e.target.value)}
                >
                  <option value="">All</option>
                  {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}
      </div> */}

      {/* Title 4 */}
      <div className="filter-section-wrapper">
        <div 
          className={`section-header ${openSections.title4 ? 'active' : ''}`} 
          onClick={() => toggleSection('title4')}
        >
          <h3>Title 4</h3>
          <span className="toggle-icon">{openSections.title4 ? '−' : '+'}</span>
        </div>
        {openSections.title4 && (
          <div className="filter-section">
            {[
              { name: 'Nature', key: 'nature', options: ['Black Magic', 'White Magic', 'Neutral'] },
              { name: 'Primary Weapon', key: 'primaryWeapon', options: ["Death's Embrace", 'Sword of Light'] },
              { name: 'Secondary Weapon', key: 'secondaryWeapon', options: ['Sword', 'Bow', 'Staff'] },
              { name: 'Primary Accessory', key: 'primaryAccessory', options: ['Amulet of Power', 'Ring of Strength'] }
            ].map(renderSelectFilter)}
          </div>
        )}
      </div>
      {/* <div className="filter-section-wrapper">
        <div 
          className={`section-header ${openSections.title4 ? 'active' : ''}`} 
          onClick={() => toggleSection('title4')}
        >
          <h3>Title 4</h3>
          <span className="toggle-icon">{openSections.title4 ? '−' : '+'}</span>
        </div>
        {openSections.title4 && (
          <div className="filter-section">
            {[
              { name: 'Nature', key: 'nature', options: ['Black Magic', 'White Magic', 'Neutral'] },
              { name: 'Primary Weapon', key: 'primaryWeapon', options: ["Death's Embrace", 'Sword of Light'] },
              { name: 'Secondary Weapon', key: 'secondaryWeapon', options: ['Sword', 'Bow', 'Staff'] },
              { name: 'Primary Accessory', key: 'primaryAccessory', options: ['Amulet of Power', 'Ring of Strength'] }
            ].map(({ name, key, options }) => (
              <div key={key} className="filter-group">
                <label className="filter-label">{name}</label>
                <select
                  className="select-input"
                  value={filters[key] || ''}
                  onChange={(e) => handleSelectChange(key, e.target.value)}
                >
                  <option value="">All</option>
                  {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}
      </div> */}

      {/* Title 5 */}
      <div className="filter-section-wrapper">
        <div 
          className={`section-header ${openSections.title5 ? 'active' : ''}`} 
          onClick={() => toggleSection('title5')}
        >
          <h3>Title 5</h3>
          <span className="toggle-icon">{openSections.title5 ? '−' : '+'}</span>
        </div>
        {openSections.title5 && (
          <div className="filter-section">
            {[
              { name: 'Universe', key: 'universe', options: ['Alpha', 'Beta', 'Gamma'] },
              { name: 'Galaxy', key: 'galaxy', options: ['Milky Way', 'Andromeda'] },
              { name: 'System', key: 'system', options: ['Solar', 'Binary'] },
              { name: 'Planet', key: 'planet', options: ['Earth', 'Mars', 'Venus'] },
              { name: 'City', key: 'city', options: ['New York', 'Tokyo', 'London'] }
            ].map(renderSelectFilter)}
          </div>
        )}
      </div>
      {/* <div className="filter-section-wrapper">
        <div 
          className={`section-header ${openSections.title5 ? 'active' : ''}`} 
          onClick={() => toggleSection('title5')}
        >
          <h3>Title 5</h3>
          <span className="toggle-icon">{openSections.title5 ? '−' : '+'}</span>
        </div>
        {openSections.title5 && (
          <div className="filter-section">
            {[
              { name: 'Universe', key: 'universe', options: ['Alpha', 'Beta', 'Gamma'] },
              { name: 'Galaxy', key: 'galaxy', options: ['Milky Way', 'Andromeda'] },
              { name: 'System', key: 'system', options: ['Solar', 'Binary'] },
              { name: 'Planet', key: 'planet', options: ['Earth', 'Mars', 'Venus'] },
              { name: 'City', key: 'city', options: ['New York', 'Tokyo', 'London'] }
            ].map(({ name, key, options }) => (
              <div key={key} className="filter-group">
                <label className="filter-label">{name}</label>
                <select
                  className="select-input"
                  value={filters[key] || ''}
                  onChange={(e) => handleSelectChange(key, e.target.value)}
                >
                  <option value="">All</option>
                  {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </>
  );

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

  // Add this component for reusability
  const FilterCount = () => {
    const count = getActiveFiltersCount();
    return count > 0 ? (
      <span className="filter-count-number">{count}</span>
    ) : null;
  };

  return (
    <>
      {/* Mobile Filter Header */}
      <div className="mobile-filter-header">
        <h2 className="filter-title">Filters</h2>
        <button className="mobile-filter-button" onClick={onOpen}>
          <span className="filter-icon">
            <i className="fa-solid fa-sliders"></i>
            {getActiveFiltersCount() > 0 && (
              <span className="filter-count">{getActiveFiltersCount()}</span>
            )}
          </span>
        </button>
        <div className="mobile-filter-buttons">
          <button className="clear-filters-button" onClick={handleClearAllFilters}>
            Clear All
          </button>
        </div>
      </div>
      

      {/* Desktop Sidebar */}
      <aside className="sidebar desktop-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header-top">
            <h2 className="filter-title">Filters</h2>
            {/* <FilterCount isMobile={false} /> */}
          </div>
          <div className="sidebar-header-buttons">
            <button className="clear-filters-button" onClick={handleClearAllFilters}>
              Clear All
            </button>
          </div>
        </div>
        <div className="filters-container">
          {renderFilterSections()}
        </div>
      </aside>

      {/* Mobile Filter Panel/Popup */}
      <div className={`filter-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
        <aside className={`sidebar mobile-sidebar ${isOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
          <div className="sidebar-header">
            <h2 className="filter-title">Filters</h2>
            <div className="sidebar-header-buttons">
              <button className="clear-filters-button" onClick={handleClearAllFilters}>
                Clear All Filters
              </button>
              <button className="close-filter-button" onClick={onClose}>
                ×
              </button>
            </div>
          </div>
          <div className="filters-container">
            {renderFilterSections()}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;