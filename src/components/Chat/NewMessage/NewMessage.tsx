import React from 'react';
// import { useDispatch } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
// import { sendMessage } from '../../../redux/activeChat/slice';
import { ImAttachment } from 'react-icons/im';
import { BsEmojiSmile, BsFillSendFill } from 'react-icons/bs';

interface IForm {
  messageText: string;
}

const NewMessage = () => {
  // const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    // dispatch(sendMessage(data.messageText));
    reset();
  };
  return (
    <>
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          style={styles.input}
          type="text"
          placeholder="Write a message..."
          {...register('messageText', {
            required: 'Entry text',
            minLength: 1,
          })}
        />
        <div style={styles.btnWrapper}>
          <button style={styles.btnBorder} type="button">
            <ImAttachment style={styles.iconAttach} />
          </button>
          <button style={styles.btnBorder} type="button">
            <BsEmojiSmile style={styles.iconEmoji} />
          </button>
          <button type="submit">
            <BsFillSendFill
              style={{
                fill: '#2C3FE1',
                width: '23px',
                height: '24px',
              }}
            />
          </button>
        </div>
      </form>
    </>
  );
};

const styles = {
  form: {
    width: '100%',
    height: '60px',
    backgroundColor: '#292B31',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    height: '100%',
    width: '100%',
    backgroundColor: '#292B31',
    color: '#BBB',
    paddingLeft: '40px',
    border: 'none',
  },
  btnWrapper: {
    paddingRight: '35px',
    display: 'flex',
  },
  btnBorder: {
    borderRadius: '1000px',
    backgroundColor: '#222326',
    width: '30px',
    height: '30px',
    marginRight: '12px',
  },
  iconAttach: {
    fill: '#BBB',
    width: '14px',
    height: '14px',
    marginTop: '3px',
  },
  iconEmoji: {
    fill: '#BBB',
    width: '16px',
    height: '16px',
    marginTop: '2px',
  },
};

export default NewMessage;
