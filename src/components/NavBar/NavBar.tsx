import React from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser, setVerified } from '../../redux/user/slice';

import { logo, settings } from '../../constants/images';

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
          <Link to="/main">
            <li className="menuItem">
              <img className="allChatsItem" alt="myChats" />
              <span>All Chats</span>
            </li>
          </Link>

          <Link to="/active-chats">
            <li className="menuItem">
              <img className="activeChatsItem" alt="myChats" />
              <span>Active Chats</span>
            </li>
          </Link>

          <Link to="/private-messages">
            <li className="menuItem">
              <img className="privateChatsItem" alt="myChats" />
              <span>Private messages</span>
            </li>
          </Link>

          <Link to="/my-created-chats">
            <li className="menuItem">
              <img className="myChatsItem" alt="myChats" />
              <span>My Created Chats</span>
            </li>
          </Link>
        </ul>
      </div>

      <Link to="/settings">
        <div style={styles.settings}>
          <img src={settings} alt="settings" width={24} height={24} />
          <span>Settings</span>
        </div>
      </Link>
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
    width: '231px',
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
