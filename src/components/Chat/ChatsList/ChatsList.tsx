import React from 'react';
import { Scrollbar } from 'react-scrollbars-custom';
import { FiSearch } from 'react-icons/fi';
import ChatRoom from '../ChatRoom/ChatRoom';
import './ChatsList.css';

interface IChatList {
  title: string;
}

const ChatsList: React.FC<IChatList> = ({ title }) => {
  return (
    <div>
      <Scrollbar
        style={{ width: 350, height: 1297 }}
        maximalThumbSize={34}
        thumbYProps={{ className: 'custom-scrollbar-thumb' }}>
        <div style={styles.chatList}>
          <h1 style={styles.titleList}>{title}</h1>
          <div style={styles.wrapperList}>
            <button style={styles.btnList}>All</button>
            <button style={styles.btnListActive}>Unread</button>
          </div>
          <form style={styles.formSearch}>
            <button style={styles.btnSearch}>
              <FiSearch style={styles.iconSearch} />
            </button>
            <input type="text" placeholder="Search" style={styles.entryField} />
          </form>
          <div className="list" style={styles.chatsList}>
            <ChatRoom
              name="Music"
              count={42}
              text="Why Imagine Dragons supports Ukraine through the UNITED24 platform?"
              onClick={() => {}}
            />
            <ChatRoom
              name="Music"
              count={30}
              text="Why Imagine Dragons supports Ukraine through the UNITED24 platform?"
              onClick={() => {}}
            />
            <ChatRoom
              name="Music"
              count={32}
              text="Why Imagine Dragons supports Ukraine through the UNITED24 platform?"
              onClick={() => {}}
            />
            <ChatRoom
              name="Music"
              count={32}
              text="Why Imagine Dragons supports Ukraine through the UNITED24 platform?"
              onClick={() => {}}
            />
            <ChatRoom
              name="Music"
              count={32}
              text="Why Imagine Dragons supports Ukraine through the UNITED24 platform?"
              onClick={() => {}}
            />
            <ChatRoom
              name="Music"
              count={32}
              text="Why Imagine Dragons supports Ukraine through the UNITED24 platform?"
              onClick={() => {}}
            />
            <ChatRoom
              name="Music"
              count={32}
              text="Why Imagine Dragons supports Ukraine through the UNITED24 platform?"
              onClick={() => {}}
            />
            <ChatRoom
              name="Music"
              count={32}
              text="Why Imagine Dragons supports Ukraine through the UNITED24 platform?"
              onClick={() => {}}
            />
            <ChatRoom
              name="Music"
              count={32}
              text="Why Imagine Dragons supports Ukraine through the UNITED24 platform?"
              onClick={() => {}}
            />
            <ChatRoom
              name="Music"
              count={32}
              text="Why Imagine Dragons supports Ukraine through the UNITED24 platform?"
              onClick={() => {}}
            />
          </div>
        </div>
      </Scrollbar>
    </div>
  );
};

const styles = {
  chatList: {
    width: '350px',
    minHeight: '1200px',
    padding: '20px 19px',
    backgroundColor: '#292B31',
  },
  titleList: {
    color: '#FFF',
    fontStyle: 'normal',
    fontSize: '30px',
    fontWeight: '600',
    lineHeight: 'normal',
    paddingBottom: '8px',
  },
  wrapperList: { display: 'flex', gap: '8px', paddingBottom: '24px' },
  btnList: {
    color: '#BBB',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '167%',
  },
  btnListActive: {
    color: '#FFF',
    fontSize: '12px',
    fontStyle: 'normal',
    lineHeight: '167%',
    textDecoration: 'underline',
  },
  formSearch: {
    height: '36px',
    borderRadius: '4px',
    backgroundColor: '#222326',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnSearch: {
    width: '15px',
    height: '15px',
    margin: '12px 4px 13px 8px',
  },
  iconSearch: { color: '#BBBBBB', width: '15px', height: '15px' },
  entryField: {
    height: '100%',
    width: '100%',
    backgroundColor: '#222326',
    borderRadius: '4px',
    color: '#BBB',
    fontSize: '10px',
    fontStyle: 'normal',
    lineHeight: '300%',
  },
  chatsList: { paddingTop: '8px' },
};
export default ChatsList;
