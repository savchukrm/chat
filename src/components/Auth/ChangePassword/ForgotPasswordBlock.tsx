import React, { useState } from 'react';

import { SlClose } from 'react-icons/sl';

import SubmitForm from './SubmitForm';

interface ForgotPasswordProps {
  setLoadingModal: React.Dispatch<React.SetStateAction<boolean>>;
  setForgotPasswordModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForgotPasswordBlock: React.FC<ForgotPasswordProps> = ({
  setForgotPasswordModal,
  setLoadingModal,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  const closeForgotPasswordModal = () => {
    setForgotPasswordModal(false);
  };

  return (
    <div className="modalBlock">
      <div className="modalContainer">
        <div style={styles.top}>
          <button
            className="closeBtn"
            onClick={() => closeForgotPasswordModal()}
          >
            <SlClose />
          </button>

          <h3 style={styles.header}>Reset password</h3>
        </div>

        {!successfulSubmit && (
          <p style={{ color: 'red', fontWeight: 500, marginBottom: 20 }}>
            {errorMessage}
          </p>
        )}

        {successfulSubmit ? (
          <p style={styles.text}>
            A password recovery link has been sent to your email adress. Follow
            that link to reset your password.
          </p>
        ) : (
          <SubmitForm
            setLoadingModal={setLoadingModal}
            setErrorMessage={setErrorMessage}
            setSuccessfulSubmit={setSuccessfulSubmit}
          />
        )}
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
    fontSize: 16,
    fontWeight: 400,
    marginTop: '4px',
  },
};

export default ForgotPasswordBlock;
