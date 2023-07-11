import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CgCloseO } from 'react-icons/cg';
import { RootState } from '../../redux/store';
import { closeWelcome } from '../../redux/modals/slice';

import { welcome } from '../../constants/images';

const Welcome: React.FC = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.user);

  const closeModal = () => {
    dispatch(closeWelcome());
  };
  return (
    <div className="modalBlock">
      <div style={styles.container}>
        <div style={styles.btnClose} onClick={() => closeModal()}>
          <CgCloseO width={28} height={28} />
        </div>
        <div>
          <img src={welcome} alt="welcome" width={210} height={440} />
        </div>

        <div style={styles.content}>
          <div>
            <h3 style={styles.h3}>Hello {name},</h3>
            <h3 style={styles.h3}>welcome to Oktotalk!</h3>
            <p style={styles.welcomeText}>
              We are so happy that you are here! Join the conversation or create
              your own chat and invite friends!
            </p>
          </div>

          <button style={styles.btn} onClick={() => closeModal()}>
            Ok, got it! :{`)`}
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '640px',
    height: '440px',
    margin: 'auto',
    position: 'absolute' as 'absolute',
    left: '0px',
    right: '0px',
    top: '20%',

    display: 'flex',
    color: '#fff',
    backgroundColor: '#313338',
  },
  content: {
    position: 'relative' as 'relative',
    padding: '80px 16px 23px',

    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
  },
  h3: {
    fontSize: '30px',
    fontWeight: 600,
  },
  welcomeText: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    paddingTop: '24px',
  },
  btn: {
    color: '#fff',
    borderRadius: '4px',
    backgroundColor: '#2C3FE1',
    width: '400px',
    padding: '10px 20px',
  },
  btnClose: {
    cursor: 'pointer',
    zIndex: 10,
    position: 'absolute' as 'absolute',
    right: '12px',
    top: '12px',
    fontSize: '28px',
    color: '#bbbbbb',
  },
};

export default Welcome;
