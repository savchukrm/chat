import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { logo } from '../../constants/images';

const NavBar = () => {
  const location = useLocation();

  return (
    <div style={styles.navBarBlock}>
      <div style={styles.logoContainer}>
        <div style={{ paddingLeft: '7px' }}>
          <img src={logo} alt="logo" />
        </div>

        <ul style={styles.menuList}>
          <Link to="/main">
            <li
              className={`menuItem  ${
                location.pathname === '/main' && 'menuItemActive'
              } `}
            >
              <img
                className={`allChatsItem ${
                  location.pathname === '/main' && 'allChatsItemActive'
                }`}
                alt="myChats"
              />
              <span>All Chats</span>
            </li>
          </Link>

          <Link to="/active-chats">
            <li
              className={`menuItem  ${
                location.pathname === '/active-chats' && 'menuItemActive'
              } `}
            >
              <img
                className={`activeChatsItem ${
                  location.pathname === '/active-chats' &&
                  'activeChatsItemActive'
                }`}
                alt="myChats"
              />
              <span>Active Chats</span>
            </li>
          </Link>

          <Link to="/private-messages">
            <li
              className={`menuItem  ${
                location.pathname === '/private-messages' && 'menuItemActive'
              } `}
            >
              <img
                className={`privateChatsItem ${
                  location.pathname === '/private-messages' &&
                  'privateChatsItemActive '
                }`}
                alt="myChats"
              />
              <span>Private messages</span>
            </li>
          </Link>

          <Link to="/my-created-chats">
            <li
              className={`menuItem  ${
                location.pathname === '/my-created-chats' && 'menuItemActive'
              } `}
            >
              <img
                className={`myChatsItem ${
                  location.pathname === '/my-created-chats' &&
                  'myChatsItemActive'
                }`}
                alt="myChats"
              />
              <span>My Created Chats</span>
            </li>
          </Link>
        </ul>
      </div>

      <Link to="/setting">
        <div
          className={`menuItem  ${
            location.pathname === '/setting' && 'menuItemActive'
          } `}
        >
          <img
            className={`settingItem ${
              location.pathname === '/setting' && 'settingItemActive'
            }`}
            alt="setting"
          />
          <span>Setting</span>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  navBarBlock: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '231px',
    height: '100%',
    padding: '24px 13px 10px 38px',
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
};

export default NavBar;
