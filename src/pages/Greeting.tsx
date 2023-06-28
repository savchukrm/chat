import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SignupBlock, LoginBlock } from '../components';
import { RootState } from '../redux/store';

import { background, logo } from '../constants/images';

const Greeting = () => {
  const navigate = useNavigate();

  const { name } = useSelector((state: RootState) => state.user);

  const [signModal, setSignModal] = useState(false);
  const [logModal, setLogModal] = useState(false);

  useEffect(() => {
    if (name) {
      navigate('/main');
    } else {
      navigate('/');
    }
  }, [name, navigate]);

  const openSighModal = () => {
    setSignModal(true);
  };

  const openLogModal = () => {
    setLogModal(true);
  };

  return (
    <>
      {signModal && <SignupBlock setSignModal={setSignModal} />}
      {logModal && <LoginBlock setLogModal={setLogModal} />}

      <div style={styles.background}>
        <div style={styles.container}>
          <div>
            <img src={logo} alt="logo" />
          </div>

          <h1 style={styles.greet}>your friendly space...</h1>
          <p style={styles.description}>
            ...a space where it is OK to talk every day on any topic.
          </p>

          <div style={styles.buttonBlock}>
            <button
              style={{ ...styles.btn, ...styles.logIn }}
              onClick={openLogModal}
            >
              Log in
            </button>

            <button
              style={{ ...styles.btn, ...styles.signUp }}
              onClick={openSighModal}
            >
              Sign up free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  background: {
    height: '100vh',
    padding: 20,
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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
  btn: {
    display: 'flex',
    width: '194px',
    height: '64px',
    padding: '8px 12px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
  },
  logIn: {
    color: '#fff',
    border: '1px solid var(--white, #FFF)',
  },
  signUp: {
    background: 'var(--white, #FFF)',
  },
  greet: {
    marginTop: 41,
    fontSize: '80px',
    fontFamily: 'BlackHanSansRegular',
    textTransform: 'uppercase' as const,
    color: 'white',
  },
  description: {
    fontSize: '20px',
    color: 'white',
    lineHeight: '30px',
    fontWeight: 300,
  },
};

export default Greeting;
