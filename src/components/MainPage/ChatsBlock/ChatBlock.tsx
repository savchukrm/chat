import React from 'react';

interface ChatBlockProps {
  topic: string;
  category: string;
  language: string;
}

const ChatBlock: React.FC<ChatBlockProps> = ({ topic, category, language }) => {
  return (
    <div style={styles.chatBlock}>
      <div style={styles.header}>{category}</div>

      <div style={styles.blockContent}>
        <h4 style={styles.title}>{topic}</h4>
        <div style={styles.bottomBlock}>here will be button</div>
      </div>
    </div>
  );
};

const styles = {
  chatBlock: {
    width: '362px',
    height: '240px',

    display: 'flex',
    flexDirection: 'column' as 'column',
    backgroundColor: '#313338',
  },
  header: {
    height: '40px',
    width: '100%',
    padding: '4px 12px',
    fontSize: '12px',
    lineHeight: '30px',
    color: '#fff',

    background: 'linear-gradient(90deg, #05386B 0%, #5CDB95 100%)',
  },
  blockContent: {
    height: '100%',

    padding: '32px 12px 12px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontFamily: '',
  },
  bottomBlock: {
    // marginTop: 'auto',
  },
};

export default ChatBlock;
