import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

import { userPhoto } from '../../constants/images';

import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const { name } = useSelector((state: RootState) => state.user);
  return (
    <>
      <header style={styles.header}>
        <button style={styles.btn}>Create chat</button>

        <div style={styles.userInfo}>
          <img src={userPhoto} alt="userPhoto" width={30} height={24} />
          <span style={styles.userName}>{name}</span>
          <FiChevronDown color="#fff" size={27} />
        </div>
      </header>

      <div style={styles.subtitleBlock}>
        <p style={styles.subtitileText}>
          Hello, {name}! We're so glad you're here! Choose any chat or create
          your own unique and enjoy chatting!
        </p>
      </div>
    </>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '18px 30px',
    gap: '49px',
  },
  btn: {
    borderRadius: '4px',
    backgroundColor: '#2C3FE1',
    padding: '10px 20px',
    color: '#fff',
  },
  userInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
  },
  userName: {
    fontWeight: 500,
    fontSize: '14px',
    color: '#fff',
  },
  subtitleBlock: {
    backgroundColor: '#2C3FE1',
  },
  subtitileText: {
    fontSize: '14px',
    color: '#fff',
    padding: '1px 20px',
  },
};

export default Header;
