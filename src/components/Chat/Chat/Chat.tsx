import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import NewMessage from '../NewMessage/NewMessage';
import { SlOptionsVertical } from 'react-icons/sl';
import './Chat.scss';
import Message from '../Message/Message';

interface IChat {
  titleChat: string;
  peopleChat: string;
}

const Chat: React.FC<IChat> = ({ titleChat, peopleChat }) => {
  // useEffect(() => {
  //   const userDataString = localStorage.getItem('user');

  //   if (userDataString !== null) {
  //     const userData = JSON.parse(userDataString);
  //     if (userData && userData.token) {
  //       const token = userData.token;
  //       console.log(token);

  //       const socketUrl = 'ws://lcbe-w2rafwjhaq-oa.a.run.app/lcws';
  //       const socket = io(socketUrl, {
  //         extraHeaders: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       socket.connect();
  //       console.log(socket);
  //     }
  //   }
  // }, []);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  // const unreadMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    // const unreadMessage = unreadMessageRef.current;

    // if (unreadMessage) {
    //   chatContainer.scrollTop = unreadMessage.offsetTop;
    // }
    //Это для непрочинатых смс
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, []);

  return (
    <div style={styles.chat}>
      <div style={styles.chatName}>
        <div>
          <div style={styles.chatTitle}>
            <img src="" alt="" />
            <p style={styles.nameTitle}>{titleChat}</p>
          </div>

          <div style={styles.chatPeople}>
            <img src="" alt="" />
            <p style={styles.namePeople}>{peopleChat}</p>
          </div>
        </div>
        <div style={styles.chatBtn}>
          <button style={styles.chatNameBtn}>
            <SlOptionsVertical style={styles.iconOption} />
          </button>
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBox1" ref={chatContainerRef}>
          <Message
            image="https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
            name="KaRina"
            text="XDFGHJsdfghj xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk"
            time={22}
          />
          <Message
            image="https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
            name="KaRina"
            text="XDFGHJsdfghj xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk"
            time={22}
          />
          <Message
            image="https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
            name="KaRina"
            text="XDFGHJsdfghj xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk"
            time={23}
          />
          <Message
            image="https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
            name="KaRina"
            text="XDFGHJsdfghj xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk"
            time={22}
          />
          <Message
            image="https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
            name="KaRina"
            text="XDFGHJsdfghj xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk"
            time={22}
          />
          <Message
            image="https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
            name="KaRina"
            text="XDFGHJsdfghj xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk"
            time={22}
          />
          <Message
            image="https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
            name="KaRina"
            text="XDFGHJsdfghj xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk"
            time={22}
          />
          <Message
            image="https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
            name="KaRina"
            text="XDFGHJsdfghj xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk"
            time={22}
          />
          <Message
            image="https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
            name="KaRina"
            text="XDFGHJsdfghj xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk"
            time={22}
          />
          <Message
            image="https://upload.wikimedia.org/wikipedia/ru/b/b3/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_%D0%9F%D1%83%D1%82%D1%8C_%D0%B2%D0%BE%D0%B4%D1%8B_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg"
            name="KaRina"
            text="XDFGHJsdfghj xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk  xcdfvghjk xdfghj xcdfghjk xcfvgbhnjmk xdcfghjk"
            time={25}
          />
        </div>
      </div>
      <NewMessage />
    </div>
  );
};

const styles = {
  chat: { width: '100%' },
  chatName: {
    backgroundColor: '#292B31',
    width: '100%',
    minHeight: '91px',
    padding: '17px 0 26px 40px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  chatTitle: {
    display: 'flex',
  },
  nameTitle: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '125%',
  },
  chatPeople: {
    display: 'flex',
    paddingTop: '8px',
  },
  namePeople: {
    color: ' #BBB',
    fontSize: '14px',
    lineHeight: '142.857%',
  },
  chatBtn: { paddingRight: '40px' },
  chatNameBtn: {
    borderRadius: '1000px',
    backgroundColor: '#222326',
    width: '30px',
    height: '30px',
  },
  iconOption: {
    fill: '#BBB',
    marginTop: '2px',
  },
};

export default Chat;
