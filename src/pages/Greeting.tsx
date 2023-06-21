import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SignupBlock, LoginBlock } from '../components';
import { RootState } from '../redux/store';

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

      <div style={styles.container}>
        <header style={styles.header}>
          <h3>Ok to talk!</h3>

          <div style={styles.buttonBlock}>
            <button onClick={openLogModal}>Log in</button>
            <button onClick={openSighModal}>Sign up free</button>
          </div>
        </header>
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: 20,
    maxWidth: 1400,
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between',
  },
  buttonBlock: {
    gap: '20px',
    display: 'flex',
  },
};

export default Greeting;
