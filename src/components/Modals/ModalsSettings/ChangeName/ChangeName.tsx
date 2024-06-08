import { FC } from 'react';
import { stylesModals } from '../stylesModals';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { ButtonForModal } from '../../../Buttons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setUser } from '../../../../redux/user/slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

interface IChangeName {
  title: string;
  emoji: any;
  closeModal: () => void;
  text: string;
}

interface IForm {
  name: string;
}

const ChangeName: FC<IChangeName> = ({ title, emoji, closeModal, text }) => {
  const { email, token } = useSelector((state: RootState) => state.user);
  console.log(email, token);

  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    dispatch(setUser({ name: data.name, email: email, token: token }));
    reset();
  };

  const handleSaveButtonClick = () => {
    handleSubmit(onSubmit)();
  };
  return (
    <div style={stylesModals.secondModalWrapper}>
      <div style={stylesModals.titleContainer}>
        <div style={stylesModals.titleModalContainer}>
          <h1 style={stylesModals.titleModal}>{title}</h1>
          <img style={stylesModals.titleImg} src={emoji} alt="" />
        </div>
        <button style={stylesModals.closeBtn} onClick={closeModal}>
          <IoMdCloseCircleOutline style={stylesModals.iconClose} />
        </button>
      </div>

      <div style={stylesModals.infoUserChange}>
        <p style={stylesModals.infoUserText}>{text}</p>
        <form
          style={stylesModals.formUserChange}
          onSubmit={handleSubmit(onSubmit)}>
          <input
            style={stylesModals.inputUserChange}
            type="text"
            placeholder="Write here"
            {...register('name', { required: true, minLength: 1 })}
          />
        </form>
      </div>
      <div style={stylesModals.buttonsModal}>
        <ButtonForModal
          text="Cansel"
          onClick={closeModal}
          color="#000"
          backgroundColor="#fff"
        />
        <ButtonForModal
          text="Save"
          onClick={handleSaveButtonClick}
          color="#fff"
          backgroundColor="#2c3fe1"
        />
      </div>
    </div>
  );
};

export default ChangeName;
