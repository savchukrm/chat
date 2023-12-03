import React from 'react';

interface IMessage {
  image: string;
  name: string;
  text: string;
  time: number;
}

const Message: React.FC<IMessage> = ({ image, name, text, time }) => {
  return (
    <div>
      <img src={image} alt="" />
      <div>
        <div>
          <h4>{name}</h4>
          <button></button>
        </div>
        <div>
          <p>{text}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
