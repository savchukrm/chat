import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { earth, tickIcon, earthActive } from '../../../../constants/images';
import { setLanguages, setActive } from '../../../../redux/filters/slice';
import { itemsLang } from './constants';
import './index.css';

const LanguagesFilters = () => {
  const dispatch = useDispatch();

  const { languages } = useSelector((state: RootState) => state.languages);
  const { currentLanguage } = useSelector((state: RootState) => state.filters);

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: string) => {
    dispatch(setLanguages(language));
    language !== '64b29bb9a268b5150b670003'
      ? dispatch(setActive(true))
      : dispatch(setActive(false));
    setIsOpen(false);
  };

  const selectedLanguage = itemsLang.find(
    (item) => item.id === currentLanguage,
  );

  return (
    <div className="custom-dropdown-container">
      <div
        className={`select custom-dropdown-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}>
        <img
          src={
            currentLanguage === '64b29bb9a268b5150b670003' ? earth : earthActive
          }
          alt="planet"
          className="dropdown-icon"
        />
        <span>
          Language of communication:
          {selectedLanguage ? selectedLanguage.name : ''}
        </span>
        <div className={`dropdown-triangle ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="custom-dropdown-options">
          {languages.map((item) => (
            <div
              key={item.id}
              className={`custom-dropdown-option ${
                currentLanguage === item.id ? 'selected' : ''
              }`}
              onClick={() => handleLanguageChange(item.id)}>
              {currentLanguage === item.id && (
                <div className="tick">
                  <img src={tickIcon} alt="tick" className="tick-icon" />
                </div>
              )}
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagesFilters;
