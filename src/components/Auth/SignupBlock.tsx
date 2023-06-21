import React from 'react';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import SignupForm from './SignupForm';

interface SignupBlockProps {
  setSignModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupBlock: React.FC<SignupBlockProps> = ({ setSignModal }) => {
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

        <div style={styles.devider}>
          <span>or</span>
        </div>

        <div style={styles.googleBtn}>
          <FcGoogle />
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
  },
  devider: {
    margin: 17,
    textAlign: 'center' as 'center',
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
  googleBtn: {
    cursor: 'pointer',
    borderRadius: 4,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    border: '1px solid #000',
  },
};

export default SignupBlock;
