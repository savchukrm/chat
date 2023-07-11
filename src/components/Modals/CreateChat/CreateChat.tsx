import React from 'react';
import { useDispatch } from 'react-redux';

import { CgCloseO } from 'react-icons/cg';

import { closeCreateChatModal } from '../../../redux/modals/slice';

import CreateChatForm from './CreateChatForm';
import { createChat } from '../../../constants/images';

const CreateChat: React.FC = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeCreateChatModal());
  };

  return (
    <div className="modalBlock">
      <div style={styles.container}>
        <div style={styles.btnClose}>
          <CgCloseO onClick={() => closeModal()} width={28} height={28} />
        </div>
        <div>
          <img src={createChat} alt="createChat" width={208} height={450} />
        </div>

        <div style={styles.content}>
          <h3 style={styles.h3}>Сreate your own chat:</h3>

          <CreateChatForm />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '592px',
    height: '450px',
    margin: 'auto',
    position: 'absolute' as 'absolute',
    left: '0px',
    right: '0px',
    top: '20%',

    display: 'flex',
    color: '#fff',
    backgroundColor: '#313338',
    borderRadius: '4px',
  },
  content: {
    position: 'relative' as 'relative',
    padding: '54px 12px 23px',

    display: 'flex',
    flexDirection: 'column' as 'column',
  },
  h3: {
    fontSize: '20px',
    fontWeight: 500,
    marginBottom: '20px',
    lineHeight: '30px',
  },
  welcomeText: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
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

export default CreateChat;
