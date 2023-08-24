import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import ChatBlock from './ChatBlock';

const ChatsContainer = () => {
  const { allChats } = useSelector((state: RootState) => state.allChats);

  return (
    <div style={style.block}>
      {allChats.map((chat, index) => {
        return (
          <ChatBlock
            topic={chat.name}
            language={chat.languageId}
            category={chat.categoryId}
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
