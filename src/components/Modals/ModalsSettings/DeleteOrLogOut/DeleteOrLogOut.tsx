import { FC } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { stylesModals } from '../stylesModals';
import { ButtonForModal } from '../../../Buttons';

interface IDeleteOrLogOut {
  title: string;
  еmoji: any;
  closeModal: () => void;
  text: string;
  name: string;
  email: string;
}

const DeleteOrLogOut: FC<IDeleteOrLogOut> = ({
  title,
  еmoji,
  closeModal,
  text,
  name,
  email,
}) => {
  return (
    <div style={stylesModals.modalWrapper}>
      <div style={stylesModals.titleContainer}>
        <div style={stylesModals.titleModalContainer}>
          <h1 style={stylesModals.titleModal}>{title}</h1>
          <img style={stylesModals.titleImg} src={еmoji} alt="" />
        </div>
        <button style={stylesModals.closeBtn} onClick={closeModal}>
          <IoMdCloseCircleOutline style={stylesModals.iconClose} />
        </button>
      </div>
      <p style={stylesModals.textModal}>{text}</p>
      <div style={stylesModals.infoUser}>
        <img style={stylesModals.userImg} src="" alt="" />
        <div style={stylesModals.userContainer}>
          <p style={stylesModals.userName}>{name}</p>
          <p style={stylesModals.userEmail}>{email}</p>
        </div>
      </div>
      <div style={stylesModals.buttonsModal}>
        <ButtonForModal
          text="Cansel"
          onClick={closeModal}
          color="#000"
          backgroundColor="#fff"
        />
        <ButtonForModal
          text="Delete"
          onClick={() => {}}
          color="#fff"
          backgroundColor="#f84848"
        />
      </div>
    </div>
  );
};

export default DeleteOrLogOut;
