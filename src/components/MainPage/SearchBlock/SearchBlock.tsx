import React, { useState } from 'react';
import './index.css'

const SearchBlock = () => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setSearch(event.target.value);
  };
  const handleSearch = (searchTarget: any) => {
    console.log(searchTarget)
  }
  return (
    <div className='searchContainer'>
      <input
        className='inputBlock'
        type="text"
        value={search}
        placeholder="Search"
        onChange={handleChange}
        maxLength={100}
      />
      <button className='searchButton'
        onClick={() => {handleSearch(search)}}
      />
    </div>
  );
};

// const style = {
//   searchContainer: {
//     display: 'flex'
//   },
//   inputBlock: {
//     backgroundColor: '#313338',
//     height: '36px',
//     width: '100%',
//     color: '#bbbbb',
//     borderRadius: '4px',
//     fontSize: '14px',
//     paddingLeft: '12px',
//     marginTop: '23px',
//   },
//   searchButton: {
//     width: '30px',
//     height: '30px',
//     backgroundColor: '#FFF',
//     marginTop: '25px',
//     position: 'relative'
//   }
// };

export default SearchBlock;
