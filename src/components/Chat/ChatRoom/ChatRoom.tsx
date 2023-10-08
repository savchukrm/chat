import React from 'react';

interface IChatRoom {
  name: string;
  count: number;
  text: string;
  onClick: () => void;
}

const ChatRoom: React.FC<IChatRoom> = ({ name, count, text, onClick }) => {
  return (
    <div style={styles.chatRoom} onClick={onClick}>
      <div style={styles.boxRoom}>
        <p style={styles.nameRoom}>{name}</p>
        <div style={styles.countBox}>
          <span style={styles.countMessage}>{count}</span>
        </div>
      </div>
      <div style={styles.boxMessage}>
        <p style={styles.textMessage}>{text}</p>
      </div>
    </div>
  );
};

const styles = {
  chatRoom: {
    backgroundColor: '#313338',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    marginBottom: '4px',
  },
  boxRoom: {
    padding: '10px 12px 10px 12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameRoom: {
    color: '#616161',
    fontSize: '10px',
    lineHeight: '300%',
  },
  countBox: {
    borderRadius: '4px',
    backgroundColor: '#616161',
    height: '20px',
  },
  countMessage: {
    color: '#BBB',
    fontSize: '12px',
    lineHeight: '167%',
    paddingLeft: '3px',
    paddingRight: '3px',
    display: 'flex',
  },
  boxMessage: { padding: '12px' },
  textMessage: {
    color: '#616161',
    fontSize: '12px',
    lineHeight: '167%',
  },
};

export default ChatRoom;
