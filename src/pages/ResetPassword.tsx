import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ResetPasswordForm } from '../components';

import axios from 'axios';

import { resetPassword, logo, backToHome } from '../constants/images';

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
    localStorage.clear();

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
    <div style={styles.background}>
      <div style={styles.container}>
        <img src={logo} alt="logo" />

        <div style={styles.backToHome}>
          <img src={backToHome} alt="backArrow" />
          <button style={styles.redirectBtn} onClick={() => navigate('/')}>
            Back to Homepage
          </button>
        </div>

        <div style={styles.messageBlock}>
          {errorMessage && (
            <div style={styles.messegeForm}>
              <p>{errorMessage}</p>
            </div>
          )}

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

          {successfulMessage && (
            <div style={styles.messegeForm}>
              <p>{successfulMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    height: '100vh',
    padding: '20px 0',
    backgroundImage: `url(${resetPassword})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: 0,
  },
  container: {
    maxWidth: 1440,
    margin: '10px auto 0',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  messageBlock: {
    position: 'absolute' as 'absolute',
    right: 280,
    top: 200,
  },
  messegeForm: {
    backgroundColor: '#fff',
    width: '432px',
    padding: '20px 16px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
  },
  formBlock: {
    padding: '20px 16px',
    backgroundColor: '#fff',
    borderRadius: '4px',
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
  backToHome: {
    position: 'absolute' as 'absolute',
    left: 45,
    top: 30,
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    cursor: 'pointer',
  },
  redirectBtn: {
    color: '#fff',
    fontSize: '18px',
  },
};

export default ResetPassword;
