import React, { useState } from 'react';

import { SlClose } from 'react-icons/sl';

const SubmitBlock = () => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="modalBlock">
      <div className="modalContainer">
        <div style={styles.top}>
          <button className="closeBtn">
            <SlClose />
          </button>

          <h3 style={styles.header}>Reset password</h3>
        </div>

        <p style={{ color: 'red', fontWeight: 500, marginBottom: 20 }}>
          {errorMessage}
        </p>

        <div>
          <p style={styles.text}>
            Please enter your email here to reset passwordW:
          </p>
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

export default SubmitBlock;
