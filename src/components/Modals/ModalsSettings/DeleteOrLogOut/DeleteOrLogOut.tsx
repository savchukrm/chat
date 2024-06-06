import { FC } from 'react';

interface IDeleteOrLogOut {
  title: string;
  text: string;
  name: string;
  email: string;
}

const DeleteOrLogOut: FC<IDeleteOrLogOut> = ({ title, text, name, email }) => {
  return (
    <div>
      <div>
        <div>
          <h1>{title}</h1>
          <img src="" alt="" />
        </div>
        <button></button>
      </div>
      <p>{text}</p>
      <div>
        <img src="" alt="" />
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrLogOut;
