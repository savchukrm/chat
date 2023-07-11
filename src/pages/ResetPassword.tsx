import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ResetPasswordForm } from '../components';

import axios from 'axios';

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get('email');
  const token = params.get('token');

  const [verifiedToken, setVerifiedToken] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successfulMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (!email || !token) {
      navigate('/');
    } else {
      const checkedToken = async () => {
        try {
          const baseUrl = process.env.REACT_APP_API_URL;
          const endpoint = 'forgot-password/verify';
          const emailParams = `email=${email}`;
          const tokenParams = `token=${token}`;
          const url = `${baseUrl}/${endpoint}?${tokenParams}&${emailParams}`;
          const headers = {
            'Content-Type': 'application/json',
          };

          const response = await axios.get(url, { headers });

          if (response.status === 200) {
            setVerifiedToken(true);
          } else if (response.status === 406) {
            setErrorMessage('Token is invalid');
          }
        } catch (error) {
          console.error(error);
          setErrorMessage('Token is invalid');
        }
      };

      checkedToken();
    }
  }, [email, navigate, token, verifiedToken]);

  return (
    <div style={styles.container}>
      {errorMessage && <p>{errorMessage}</p>}

      {verifiedToken && !successfulMessage && (
        <div style={styles.formBlock}>
          <h3 style={styles.h3}>Enter a new password</h3>

          <p style={styles.subtitle}>Now you can change your password:</p>

          <ResetPasswordForm
            userLogin={email}
            passwordResetToken={token}
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
          />
        </div>
      )}

      {successfulMessage && <p>{successfulMessage}</p>}

      <button style={styles.redirectBtn} onClick={() => navigate('/')}>
        Go to main page
      </button>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  formBlock: {
    border: '1px solid #000',
    borderRadius: '4px',
    padding: '16px',
  },
  h3: {
    fontSize: '30px',
    fontWeight: 600,
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: 400,
    margin: '24px 0',
  },
  redirectBtn: {
    marginTop: '30px',
  },
};

export default ResetPassword;
