import React from 'react';

import { SlClose } from 'react-icons/sl';

import { google } from '../../../constants/images';

import LoginForm from './LoginForm';

interface LoginBlockProps {
  setLogModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginBlock: React.FC<LoginBlockProps> = ({ setLogModal }) => {
  const closeModal = () => {
    setLogModal(false);
  };

  return (
    <div className="modalBlock">
      <div className="modalContainer">
        <div style={styles.top}>
          <button className="closeBtn" onClick={closeModal}>
            <SlClose />
          </button>

          <h3 style={styles.header}>Log in</h3>
        </div>

        <LoginForm />

        <div style={styles.devider}>
          <span>or</span>
        </div>

        <div style={styles.googleBtn}>
          <img src={google} alt="google-icon" />
          <span>Log in with Google</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center' as 'center',
    marginBottom: '20px',
  },
  top: {
    position: 'relative' as 'relative',
    display: 'flex',
    alignItems: 'flex-start',
  },
  devider: {
    fontSize: 14,
    fontWeight: 500,
    margin: 10,
    textAlign: 'center' as 'center',
  },
  googleBtn: {
    cursor: 'pointer',
    borderRadius: 4,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    border: '1px solid #000',
    fontSize: 20,
    gap: 10,
  },
};

export default LoginBlock;
