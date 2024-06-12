import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';

import { GreetModals } from '../components';

import { background, logo } from '../constants/images';
import {
  AboutChatSection,
  AboutInterestsSection,
  AboutLanguageSection,
  AboutRoles,
} from '../components/LandingPage';

const Greeting = () => {
  const navigate = useNavigate();

  const { verified } = useSelector((state: RootState) => state.user);

  const [signModal, setSignModal] = useState(false);
  const [logModal, setLogModal] = useState(false);
  const [verifyModal, setVerifyModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);

  useEffect(() => {
    if (verified) {
      navigate('/main');
    } else {
      navigate('/');
    }
  }, [verified, navigate]);

  const openSighModal = () => {
    setSignModal(true);
  };

  const openLogModal = () => {
    setLogModal(true);
  };

  return (
    <>
      <div style={styles.background}>
        <div style={styles.container}>
          <div>
            <img src={logo} alt="logo" />
          </div>

          <h1 className="greet">your friendly space...</h1>
          <p style={styles.description}>
            ...a space where it is OK to talk every day on any topic.
          </p>

          <div style={styles.buttonBlock}>
            <button className="greetBtn logInBtn" onClick={openLogModal}>
              Log in
            </button>

            <button className="greetBtn signUpBtn" onClick={openSighModal}>
              Sign up free
            </button>
          </div>
        </div>
      </div>

      <GreetModals
        signModal={signModal}
        logModal={logModal}
        verifyModal={verifyModal}
        loadingModal={loadingModal}
        setLoadingModal={setLoadingModal}
        setLogModal={setLogModal}
        setVerifyModal={setVerifyModal}
        setSignModal={setSignModal}
        forgotPasswordModal={forgotPasswordModal}
        setForgotPasswordModal={setForgotPasswordModal}
      />

      <AboutChatSection />
      <AboutInterestsSection />
      <AboutLanguageSection />
      <AboutRoles />
    </>
  );
};

const styles = {
  background: {
    height: '100vh',
    padding: '20px 0',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: 0,
  },
  container: {
    maxWidth: 1440,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  buttonBlock: {
    marginTop: 56,
    gap: '20px',
    display: 'flex',
  },
  description: {
    fontSize: '20px',
    color: 'white',
    lineHeight: '30px',
    fontWeight: 300,
  },
};

export default Greeting;
