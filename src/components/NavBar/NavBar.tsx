import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser, setVerified } from '../../redux/user/slice';

import { logo } from '../../constants/images';

const NavBar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(removeUser());
    dispatch(setVerified(false));
    navigate('/');
  };

  return (
    <div style={styles.navBarBlock}>
      <div style={styles.logoContainer}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul style={styles.menuList}>
          <li>All Chats</li>
          <li>Active Chats</li>
          <li>Private messages</li>
          <li>My Created Chats</li>
        </ul>
      </div>

      <div style={styles.settings}>Settings</div>
      <div onClick={() => handleLogOut()} style={styles.settings}>
        Log Out
      </div>
    </div>
  );
};

const styles = {
  navBarBlock: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '250px',
    height: '100%',
    padding: '24px 13px 0px 38px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    backgroundColor: '#1E1F22',
  },
  logoContainer: {
    marginBottom: 'auto',
  },
  menuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginBottom: 'auto',
  },
  settings: {
    color: 'white',
  },
};

export default NavBar;
