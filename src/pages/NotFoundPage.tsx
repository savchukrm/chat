import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { notFound, logo, backToHome } from '../constants/images';

interface NotFoundPageProps {
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ setShowHeader }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setShowHeader(false);

    return () => {
      setShowHeader(true);
    };
  }, [setShowHeader]);

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <img src={logo} alt="logo" />

        <h1 className="greet">fireeeeeeee...</h1>
        <p style={styles.text}>
          Bro, don't worry. We're putting out the fire. Go to the Homepage and
          breathe...
        </p>

        <div style={styles.backToHome}>
          <img src={backToHome} alt="backArrow" />
          <button style={styles.redirectBtn} onClick={() => navigate('/')}>
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    height: '100vh',
    padding: '20px 0',
    backgroundImage: `url(${notFound})`,
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
  text: {
    fontSize: '20px',
    color: '#fff',
  },
  backToHome: {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    cursor: 'pointer',
    backgroundColor: '#2C3FE1',
    padding: '10px',
    marginTop: '39px',
  },
  redirectBtn: {
    color: '#fff',
    fontSize: '14px',
  },
};

export default NotFoundPage;
