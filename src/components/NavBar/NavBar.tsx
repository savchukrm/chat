import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser, setVerified } from '../../redux/user/slice';

import {
  logo,
  myChats,
  allChats,
  settings,
  privateChat,
  activeChats,
} from '../../constants/images';

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
        <div style={{ paddingLeft: '7px' }}>
          <img src={logo} alt="logo" />
        </div>

        <ul style={styles.menuList}>
          <li className="menuItem">
            <img src={allChats} alt="myChats" width={24} height={24} />
            <span>All Chats</span>
          </li>

          <li className="menuItem">
            <img src={activeChats} alt="myChats" width={24} height={24} />
            <span>Active Chats</span>
          </li>

          <li className="menuItem">
            <img src={privateChat} alt="myChats" width={24} height={24} />
            <span>Private messages</span>
          </li>

          <li className="menuItem">
            <img src={myChats} alt="myChats" width={24} height={24} />
            <span>My Created Chats</span>
          </li>
        </ul>
      </div>

      <div style={styles.settings}>
        <img src={settings} alt="settings" width={24} height={24} />
        <span>Settings</span>
      </div>
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
    marginTop: '37px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '26px',
  },
  settings: {
    color: 'white',
  },
};

export default NavBar;
