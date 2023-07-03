import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { SlClose } from 'react-icons/sl';

import { RootState } from '../../../redux/store';
import { google } from '../../../constants/images';

import LoginForm from './LoginForm';

interface LoginBlockProps {
  setLogModal: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingModal: React.Dispatch<React.SetStateAction<boolean>>;
  setVerifyModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginBlock: React.FC<LoginBlockProps> = ({
  setLogModal,
  setLoadingModal,
  setVerifyModal,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const { email } = useSelector((state: RootState) => state.user);

  const closeModal = () => {
    setLogModal(false);
  };

  const handleVerifyModal = async () => {
    setVerifyModal(true);

    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/resendCode/${email}`;
      const headers = {
        'Content-Type': 'application/json',
      };

      const response = await axios.post(url, email, { headers });

      if (response.status === 200) {
        console.log('Code resend successful');
      } else {
        console.log(response);
        throw new Error('Failed to resend code');
      }
    } catch (error) {
      console.error(error);
    }
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

        <p
          style={{
            color: 'red',
            fontWeight: 500,
            marginBottom: 20,
            fontSize: 18,
          }}
        >
          {errorMessage === 'An account is not verified' ? (
            <span>
              {errorMessage}{' '}
              <span className="reverifyBtn" onClick={() => handleVerifyModal()}>
                Verify email
              </span>
            </span>
          ) : (
            errorMessage
          )}
        </p>

        <LoginForm
          setErrorMessage={setErrorMessage}
          setLoadingModal={setLoadingModal}
        />

        <div style={styles.devider}>
          <span>or</span>
        </div>

        <div className="googleBtn">
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
};

export default LoginBlock;
