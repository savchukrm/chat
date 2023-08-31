import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import { Chat } from '../components';

const ActiveChats = () => {
  const { isExpanded } = useSelector((state: RootState) => state.size);

  return (
    <div
      className="page-container"
      style={{ paddingLeft: isExpanded ? '273px' : '170px' }}>
      <Chat
        titleChat="Why Imagine Dragons supports Ukraine through the UNITED24
              platform?"
        peopleChat="23 Members, 15 online"
      />
    </div>
  );
};

export default ActiveChats;
