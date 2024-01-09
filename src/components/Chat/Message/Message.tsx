import React from 'react';
import Arrow from './icon/arrow.jsx';

interface IMessage {
  image: string;
  name: string;
  text: string;
  time: number;
}

const Message: React.FC<IMessage> = ({ image, name, text, time }) => {
  return (
    <div style={styles.container}>
      <div style={styles.containerImg}>
        <img style={styles.image} src={image} alt="" />
      </div>
      <div style={styles.containerMessage}>
        <div style={styles.containerName}>
          <h4 style={styles.name}>{name}</h4>
          <button>
            <Arrow />
          </button>
        </div>
        <div style={styles.containerText}>
          <p style={styles.text}>{text}</p>
          <p style={styles.time}>{time}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '612px',
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: '8px',
    paddingBottom: '12px',
  },
  containerImg: {
    display: 'flex',
    alignItems: 'end',
  },
  image: {
    width: '30px',
    height: '30px',
  },
  containerMessage: {
    flex: '1',
    borderRadius: '10px',
    backgroundColor: '#292B31',
    padding: '8px',
    color: '#FFFFFF',
  },
  containerName: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '4px',
  },
  name: {
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '166.667%',
  },
  containerText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10%',
  },
  text: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '142.857%',
  },
  time: {
    color: '#BBBBBB',
    fontSize: '10px',
    fontWeight: '400',
    marginTop: '0',
    alignSelf: 'flex-end',
  },
};

export default Message;
