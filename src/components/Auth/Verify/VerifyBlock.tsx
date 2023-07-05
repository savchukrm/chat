import React, { useState } from 'react';

import VerifyForm from './VerifyForm';

import { SlClose } from 'react-icons/sl';

interface VerifyBlockProps {
  setVerifyModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const VerifyBlock: React.FC<VerifyBlockProps> = ({ setVerifyModal }) => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="modalBlock">
      <div className="modalContainerVerification">
        <div style={styles.top}>
          <button className="closeBtn" onClick={() => setVerifyModal(false)}>
            <SlClose />
          </button>

          <h3 style={styles.header}>Verify your email</h3>
        </div>

        <p style={{ color: 'red', fontWeight: 500, marginBottom: 20 }}>
          {errorMessage}
        </p>

        <div>
          <p style={styles.text}>
            We have sent a 6 digit code to the email address provided. Please
            enter your code here to complete your registration:
          </p>
        </div>

        <VerifyForm
          setVerifyModal={setVerifyModal}
          setErrorMessage={setErrorMessage}
        />
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
  closeBtn: {
    position: 'absolute' as 'absolute',
    top: -12,
    right: -15,
    color: '#000000',
    fontSize: 28,
    fontWeight: 600,
    cursor: 'pointer',
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: '4px',
    marginBottom: '24px',
  },
};

export default VerifyBlock;
