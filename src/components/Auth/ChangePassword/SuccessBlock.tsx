import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const SuccessForm = () => {
  const { email } = useSelector((state: RootState) => state.user);

  const handleGoToEmail = () => {
    window.location.href = `https://${email}`;
  };

  return (
    <div>
      <p style={styles.text}>
        A password recovery link has been sent to your email adress. Follow that
        link to reset your password.
      </p>
      <button className="submitBtn" onClick={handleGoToEmail}>
        Go to mail
      </button>
    </div>
  );
};

const styles = {
  text: {
    fontSize: 16,
    fontWeight: 400,
    margin: '20px 0',
  },
};

export default SuccessForm;
