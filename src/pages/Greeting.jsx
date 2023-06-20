import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from '../redux/user/slice';

const Greeting = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate('/main');
    } else {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = () => {
    dispatch(setUser({ name: 'John Doe', email: 'upchh@example.com' }));
    navigate('/main');
  };

  const handleSignUp = () => {
    dispatch(setUser({ name: 'John Doe', email: 'upchh@example.com' }));
    navigate('/main');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h3>Ok to talk!</h3>

        <div style={styles.buttonBlock}>
          <button onClick={handleLogin}>Log in</button>
          <button onClick={handleSignUp}>Sign up free</button>
        </div>
      </header>
    </div>
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
