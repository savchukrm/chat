import React from 'react';

// import { useSelector } from 'react-redux';

// import { RootState } from '../redux/store';
import { Chat } from '../components';
import ChatsList from '../components/Chat/ChatsList/ChatsList';

const ActiveChats = () => {
  // const { isExpanded } = useSelector((state: RootState) => state.size);

  return (
    <div
      // className="page-container"
      style={{
        paddingLeft: '117px',
        // isExpanded ? '273px' : '170px'
        display: 'flex',
        paddingTop: '72px',
      }}>
      <div>
        <ChatsList title="Active Chats:" />
      </div>
      <Chat
        titleChat="Why Imagine Dragons supports Ukraine through the UNITED24
              platform?"
        peopleChat="23 Members, 15 online"
        idChat={20}
      />
    </div>
  );
};

export default ActiveChats;
