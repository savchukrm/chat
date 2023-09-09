import React, { useState } from 'react';
import { tickIcon } from '../../../../constants/images';
import { HiClock } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setUpdate, setActive } from '../../../../redux/filters/slice';

import '../Languages/index.css';
import './index.css';

const UpdateFilter = () => {
  const dispatch = useDispatch();

  const { currentUpdate } = useSelector((state: RootState) => state.filters);

  const [isOpen, setIsOpen] = useState(false);

  const handleUpdateItemChange = (item: string) => {
    dispatch(setUpdate(item));
    dispatch(setActive(true));
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
            color={currentUpdate !== null ? '#2c3fe1' : '#bbbbbb'}
          />
        </div>

        <span className={`text ${currentUpdate !== null ? 'active' : ''}`}>
          Update{currentUpdate !== null ? ':' : ''}{' '}
          {currentUpdate?.toLocaleLowerCase()}
        </span>
        <div className={`dropdown-triangle ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="custom-dropdown-options">
          {updateItems.map((item, index) => (
            <div
              key={item}
              className={`custom-dropdown-option ${
                currentUpdate === item ? 'selected' : ''
              }`}
              onClick={() => handleUpdateItemChange(item)}>
              {currentUpdate === item && (
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
