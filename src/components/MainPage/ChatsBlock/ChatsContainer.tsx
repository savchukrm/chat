import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import ChatBlock from './ChatBlock';

const ChatsContainer = () => {
  const { chats } = useSelector((state: RootState) => state.chats);

  return (
    <div style={style.block}>
      {chats.map((chat, index) => {
        return (
          <ChatBlock
            topic={chat.topic}
            language={chat.language}
            category={chat.category}
            key={index}
          />
        );
      })}
    </div>
  );
};

const style = {
  block: {
    marginTop: '51px',
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap' as 'wrap',
  },
};
export default ChatsContainer;
