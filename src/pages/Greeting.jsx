import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from '../redux/user/slice';

import { SignupBlock } from '../components';

const Greeting = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [signModal, setSignModal] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/main');
    } else {
      navigate('/');
    }
  }, [user, navigate]);

  const openSighModal = () => {
    setSignModal(true);
  };

  const handleLogin = () => {
    dispatch(setUser({ name: 'John Doe', email: 'upchh@example.com' }));
    navigate('/main');
  };

  return (
    <>
      {signModal && <SignupBlock setSignModal={setSignModal} />}

      <div style={styles.container}>
        <header style={styles.header}>
          <h3>Ok to talk!</h3>

          <div style={styles.buttonBlock}>
            <button onClick={handleLogin}>Log in</button>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonBlock: {
    gap: '20px',
    display: 'flex',
  },
};

export default Greeting;
