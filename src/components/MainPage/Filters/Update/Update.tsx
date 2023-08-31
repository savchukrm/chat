import React, { useState } from 'react';
import { tickIcon } from '../../../../constants/images';
import { HiClock } from 'react-icons/hi';
import '../Languages/index.css';
import './index.css';

const UpdateFilter = () => {
  const [selectedUpdate, setSelectedUpdate] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdateItemChange = (item: string) => {
    setSelectedUpdate(item);
    setIsOpen(false);
  };

  const updateItems = ['First new', 'First old'];

  return (
    <div className="custom-dropdown-container">
      <div
        className={`select custom-dropdown-header custom-dropdown-header-update ${
          isOpen ? 'open' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown-icon-clock">
          <HiClock
            size={20}
            color={selectedUpdate !== null ? '#2c3fe1' : '#bbbbbb'}
          />
        </div>

        <span className={`text ${selectedUpdate !== null ? 'active' : ''}`}>
          Update{selectedUpdate !== null ? ':' : ''}{' '}
          {selectedUpdate?.toLocaleLowerCase()}
        </span>
        <div className={`dropdown-triangle ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="custom-dropdown-options">
          {updateItems.map((item, index) => (
            <div
              key={item}
              className={`custom-dropdown-option ${
                selectedUpdate === item ? 'selected' : ''
              }`}
              onClick={() => handleUpdateItemChange(item)}>
              {selectedUpdate === item && (
                <div className="tick">
                  <img src={tickIcon} alt="tick" className="tick-icon" />
                </div>
              )}
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdateFilter;
