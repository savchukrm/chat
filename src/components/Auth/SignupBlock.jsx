import React from 'react';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import SignupForm from './SignupForm';

const SignupBlock = ({ setSignModal }) => {
  const closeModal = () => {
    setSignModal(false);
  };

  return (
    <div className="modalBlock">
      <div className="modalContainer">
        <div style={styles.top}>
          <button style={styles.closeBtn} onClick={closeModal}>
            <AiOutlineCloseCircle />
          </button>

          <h3 style={styles.header}>Create your free account</h3>
        </div>

        <SignupForm />
      </div>
    </div>
  );
};

const styles = {
  header: {
    fontSize: 28,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '1rem',
  },
  top: {
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: -12,
    right: -15,
    color: '#000000',
    fontSize: 28,
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default SignupBlock;
