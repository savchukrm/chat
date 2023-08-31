import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

import ChatBlock from '../ChatBlock';
import AddChat from './AddChat';
import ShowMore from './ShowMore';
import './ChatsContainer.css';

const ChatsContainer = () => {
  const { allChats } = useSelector((state: RootState) => state.allChats);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="chats-container">
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
        <AddChat />
      </div>

      {allChats && allChats.length > 16 && (
        <div className="showMoreBtn">
          <ShowMore handleScroll={scrollToTop} />
        </div>
      )}
    </div>
  );
};

export default ChatsContainer;
