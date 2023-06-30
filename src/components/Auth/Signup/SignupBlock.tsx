import React, { useState } from 'react';

import { SlClose } from 'react-icons/sl';

import { google } from '../../../constants/images';

import SignupForm from './SignupForm';

interface SignupBlockProps {
  setSignModal: React.Dispatch<React.SetStateAction<boolean>>;
  setVerifyModal: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupBlock: React.FC<SignupBlockProps> = ({
  setSignModal,
  setVerifyModal,
  setLoadingModal,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const closeModal = () => {
    setSignModal(false);
  };

  return (
    <div className="modalBlock">
      <div className="modalContainer">
        <div style={styles.top}>
          <button className="closeBtn" onClick={closeModal}>
            <SlClose />
          </button>

          <h3 style={styles.header}>Create your free account</h3>
        </div>
        <p style={{ color: 'red', fontWeight: 500, marginBottom: 20 }}>
          {errorMessage}
        </p>

        <SignupForm
          setSignModal={setSignModal}
          setVerifyModal={setVerifyModal}
          setLoadingModal={setLoadingModal}
          setErrorMessage={setErrorMessage}
        />

        <div style={styles.devider}>
          <span>or</span>
        </div>

        <div className="googleBtn">
          <img src={google} alt="google-icon" />
          <span>Sign up with Google</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    fontSize: 28,
    fontWeight: 600,
    textAlign: 'center' as 'center',
    marginBottom: '1rem',
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
};

export default SignupBlock;
