import React, { FC } from 'react';
import SelectSettingTitle from '../SelectSettingTitle';
import ButtonWhite from '../../../Buttons/ButtonWhite/ButtonWhite';
import { HiPencil } from 'react-icons/hi2';
import { settingsStyles } from '../settingsStyles';

interface IMyProfile {
  name: string;
  language: string;
}
const MyProfile: FC<IMyProfile> = ({ name, language }) => {
  return (
    <div>
      <SelectSettingTitle
        title="Choose how you appear and what you see on Oktotalk"
        text="Signed in as yabazilev@gmail.com"
      />
      <div style={settingsStyles.editWrapper}>
        <div style={settingsStyles.editContainer}>
          <div>
            <img src="" alt="" style={styles.editPhoto} />
            {/* позже тут сделать пропс на ссылку фото */}
            <p style={settingsStyles.editText}>Your profile photo</p>
          </div>
          <ButtonWhite
            icon={<HiPencil style={settingsStyles.btnIcon} />}
            text="Edit"
          />
        </div>
        <div style={settingsStyles.editContainer}>
          <div>
            <p style={settingsStyles.editInfo}>{name}</p>
            <p style={settingsStyles.editText}>Your profile photo</p>
          </div>
          <ButtonWhite
            icon={<HiPencil style={settingsStyles.btnIcon} />}
            text="Edit"
          />
        </div>
        <div style={settingsStyles.editContainer}>
          <div>
            <p style={settingsStyles.editInfo}>{language}</p>
            <p style={settingsStyles.editText}>Your language</p>
          </div>
          <ButtonWhite
            icon={<HiPencil style={settingsStyles.btnIcon} />}
            text="Edit"
          />
        </div>
      </div>
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
