import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters } from '../../../redux/filters/slice';
import { setFilteredChats } from '../../../redux/allChats/allChats';
import { setSearchText } from '../../../redux/allChats/allChats';
import { RootState } from '../../../redux/store';

import './style.css';

const SearchBlock = () => {
  const dispatch = useDispatch();
  const { allChats, searchText } = useSelector(
    (state: RootState) => state.allChats,
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchText = event.target.value;

      dispatch(setSearchText(searchText));

      performSearch(searchText);
    },
    [dispatch],
  );

  const performSearch = (searchText: string) => {
    dispatch(resetFilters());

    const filteredChats = allChats.filter((chat) =>
      chat.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    dispatch(setFilteredChats(filteredChats));
  };

  return (
    <input
      className="input"
      type="text"
      value={searchText}
      placeholder="Search"
      onChange={handleChange}
      maxLength={100}
    />
  );
};

export default SearchBlock;
