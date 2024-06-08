import SelectSettingTitle from '../SelectSettingTitle';
import { ButtonWhite } from '../../../Buttons';
import { HiPencil } from 'react-icons/hi2';
import { settingsStyles } from '../settingsStyles';
import { ChangeName } from '../../../Modals/ModalsSettings';
import { emojiSlightlySmilingFace } from '../../../../constants/images';
import { useState } from 'react';

const MyProfile = () => {
  const [changeName, setChangeName] = useState(false);

  const userInfoString = localStorage.getItem('user');
  let userInfo;

  if (userInfoString) {
    userInfo = JSON.parse(userInfoString);
  }

  const changeNameUser = () => {
    setChangeName(!changeName);
  };

  return (
    <div>
      <SelectSettingTitle
        title="Choose how you appear and what you see on Oktotalk"
        text={`Signed in as ${userInfo.email}`}
      />
      <div style={settingsStyles.editWrapper}>
        <div style={settingsStyles.editContainer}>
          <div>
            <img src="" alt="" style={styles.editPhoto} />
            {/* позже тут сделать пропс на ссылку фото */}
            <p style={settingsStyles.editText}>Your profile photo</p>
          </div>
          <ButtonWhite
            onClick={() => {}}
            icon={<HiPencil style={settingsStyles.btnIcon} />}
            text="Edit"
          />
        </div>
        <div style={settingsStyles.editContainer}>
          <div>
            <p style={settingsStyles.editInfo}>{userInfo.name}</p>
            <p style={settingsStyles.editText}>Your name</p>
          </div>
          <ButtonWhite
            onClick={changeNameUser}
            icon={<HiPencil style={settingsStyles.btnIcon} />}
            text="Edit"
          />
        </div>
        <div style={settingsStyles.editContainer}>
          <div>
            <p style={settingsStyles.editInfo}>English</p>
            <p style={settingsStyles.editText}>Your language</p>
          </div>
          <ButtonWhite
            onClick={() => {}}
            icon={<HiPencil style={settingsStyles.btnIcon} />}
            text="Edit"
          />
        </div>
      </div>
      {changeName && (
        <ChangeName
          title="Let’s change your name"
          emoji={emojiSlightlySmilingFace}
          closeModal={changeNameUser}
          text="Your new name"
        />
      )}
    </div>
  );
};

const styles = {
  editPhoto: {
    width: 47,
    height: 47,
    borderRadius: 50,
  },
};

export default MyProfile;
