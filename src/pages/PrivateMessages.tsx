import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';

const PrivateMessages = () => {
  const { isExpanded } = useSelector((state: RootState) => state.size);

  return (
    <div
      className="page-container"
      style={{ paddingLeft: isExpanded ? '273px' : '170px' }}
    >
      Private Messages
    </div>
  );
};

export default PrivateMessages;
