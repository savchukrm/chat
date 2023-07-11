import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BsPlusLg } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';

import { RootState } from '../../redux/store';
import { openCreateChatModal } from '../../redux/modals/slice';
import { userPhoto } from '../../constants/images';

const Header = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state: RootState) => state.user);

  const openModalCreateChat = () => {
    dispatch(openCreateChatModal());
  };

  return (
    <div style={styles.headerContainer}>
      <header style={styles.header}>
        <button style={styles.btn} onClick={() => openModalCreateChat()}>
          <div style={styles.plusCircle}>
            <BsPlusLg width={20} height={20} />
          </div>
          <span style={styles.btnText}>Create chat</span>
        </button>

        <div style={styles.userInfo}>
          <img src={userPhoto} alt="userPhoto" width={30} height={24} />
          <span style={styles.userName}>{name}</span>
          <FiChevronDown color="#fff" size={27} />
        </div>
      </header>
    </div>
  );
};

const styles = {
  headerContainer: {
    position: 'fixed' as 'fixed',
    right: 0,
    width: '90%',
    backgroundColor: '#313338',
    borderBottom: '1px solid #000',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '18px 30px',
    gap: '49px',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',

    padding: '8px 12px',
    color: '#fff',
  },
  plusCircle: {
    borderRadius: '50%',
    backgroundColor: '#2C3FE1',
    padding: '4px',
    width: '28px',
    height: '28px',
  },
  btnText: {
    fontSize: '14px',
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
};

export default Header;
