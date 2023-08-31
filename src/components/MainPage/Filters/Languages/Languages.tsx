import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { earth, tickIcon, earthActive } from '../../../../constants/images';
import './index.css';

const LanguagesFilters = () => {
  const { languages } = useSelector((state: RootState) => state.languages);

  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown-container">
      <div
        className={`select custom-dropdown-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={selectedLanguage === 'English' ? earth : earthActive}
          alt="planet"
          className="dropdown-icon"
        />
        <span>Language of communication: {selectedLanguage}</span>
        <div className={`dropdown-triangle ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="custom-dropdown-options">
          {languages.map((item) => (
            <div
              key={item.id}
              className={`custom-dropdown-option ${
                selectedLanguage === item.name ? 'selected' : ''
              }`}
              onClick={() => handleLanguageChange(item.name)}
            >
              {selectedLanguage === item.name && (
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
