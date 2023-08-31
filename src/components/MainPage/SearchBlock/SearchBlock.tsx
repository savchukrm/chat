import React, { useState } from 'react';

const SearchBlock = () => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setSearch(event.target.value);
  };
  return (
    <input
      style={style.inputBlock}
      type="text"
      value={search}
      placeholder="Search"
      onChange={handleChange}
      maxLength={100}
    />
  );
};

const style = {
  inputBlock: {
    backgroundColor: '#313338',
    height: '36px',
    width: '100%',
    color: '#bbbbb',
    borderRadius: '4px',
    fontSize: '14px',
    paddingLeft: '12px',
    marginTop: '23px',
  },
};

export default SearchBlock;
