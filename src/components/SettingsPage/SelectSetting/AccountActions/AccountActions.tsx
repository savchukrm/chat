import React, { useState } from 'react';
import SelectSettingTitle from '../SelectSettingTitle';
import { settingsStyles } from '../settingsStyles';
import { ButtonWhite } from '../../../Buttons';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { IoLogOut } from 'react-icons/io5';
import { DeleteOrLogOut } from '../../../Modals/ModalsSettings';
import { emojiPensive, еmojiDisappointed } from '../../../../constants/images';

const AccountActions = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [logOutModal, setlogOutModal] = useState(false);

  const userInfoString = localStorage.getItem('user');
  let userInfo;

  if (userInfoString) {
    userInfo = JSON.parse(userInfoString);
  }

  const deleteAcount = () => {
    setDeleteModal(!deleteModal);
  };

  const logOutFromAcount = () => {
    setlogOutModal(!logOutModal);
  };

  return (
    <div>
      <SelectSettingTitle
        title="Change account settings here:"
        text="Read carefully what each action mean"
      />
      <div style={settingsStyles.editAcountWrapper}>
        <div style={settingsStyles.editContainer}>
          <div>
            <p style={settingsStyles.editText}>Account deletion</p>
            <p style={settingsStyles.editInfo}>
              You will be immediately logged out and will not be able to log in
            </p>
          </div>
          <ButtonWhite
            onClick={deleteAcount}
            icon={<RiDeleteBin6Fill style={settingsStyles.btnIcon} />}
            text="Delete"
          />
        </div>
        <div style={settingsStyles.editContainer}>
          <div>
            <p style={settingsStyles.editText}>Log out</p>
            <p style={settingsStyles.editInfo}>
              To log in again, you will need to enter your login and password
            </p>
          </div>
          <ButtonWhite
            onClick={logOutFromAcount}
            icon={<IoLogOut style={settingsStyles.btnIcon} />}
            text="Edit"
          />
        </div>
      </div>
      {deleteModal && (
        <DeleteOrLogOut
          emoji={еmojiDisappointed}
          title="Delete User Account"
          closeModal={deleteAcount}
          name={userInfo.name}
          text={`Are you sure you want to delete ${userInfo.name} account? You will lose the access to all chat rooms and private messages.`}
          email={userInfo.email}
        />
      )}
      {logOutModal && (
        <DeleteOrLogOut
          emoji={emojiPensive}
          title="Log out"
          closeModal={logOutFromAcount}
          name={userInfo.name}
          text={`Are you sure you want to log out  ${userInfo.name} account? To log in again, you will need to enter your login and password.`}
          email={userInfo.email}
        />
      )}
    </div>
  );
};

export default AccountActions;
