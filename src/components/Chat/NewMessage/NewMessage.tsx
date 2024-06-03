import { FC, useState } from 'react';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form'; // Импорт useWatch
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { ImAttachment } from 'react-icons/im';
import { BsEmojiSmile, BsFillSendFill } from 'react-icons/bs';

interface IForm {
  messageText: string;
}

interface Position {
  position?: 'absolute' | 'relative';
}
interface INewMessage {
  sendMessage: (message: string) => void;
}
const NewMessage: FC<INewMessage> = ({ sendMessage }) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const { register, handleSubmit, reset, setValue, control } = useForm<IForm>();
  const messageText = useWatch({ name: 'messageText', control });

  const handlerShowEmoji = () => {
    setShowEmoji(!showEmoji);
  };

  const handleEmojiSelect = (emoji: any) => {
    const newText = `${messageText || ''}${emoji.native}`;
    setValue('messageText', newText);
  };

  const onSubmit: SubmitHandler<IForm> = (data) => {
    sendMessage(data.messageText);
    reset();
  };

  return (
    <div style={styles.newMessage}>
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
          <button
            style={styles.btnBorder}
            type="button"
            onClick={handlerShowEmoji}>
            <BsEmojiSmile style={styles.iconEmoji} />
          </button>
          {showEmoji && (
            <div style={styles.boxEmoji}>
              <Picker
                data={data}
                isSearch={true}
                autoFocus={true}
                onEmojiSelect={handleEmojiSelect}
              />
            </div>
          )}

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
    </div>
  );
};

const styles = {
  newMessage: {
    position: 'relative',
  } as Position,
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
  boxEmoji: {
    position: 'absolute',
    right: '0',
    bottom: '100%',
  } as Position,
};

export default NewMessage;
