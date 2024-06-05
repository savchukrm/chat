import React from 'react';
import SelectSettingTitle from '../SelectSettingTitle';
import ButtonWhite from '../../../Buttons/ButtonWhite/ButtonWhite';
import { HiPencil } from 'react-icons/hi2';

const MyProfile = () => {
  return (
    <div>
      <SelectSettingTitle
        title="Choose how you appear and what you see on Oktotalk"
        text="Signed in as yabazilev@gmail.com"
      />
      <div style={styles.editWrapper}>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <ButtonWhite icon={<HiPencil style={styles.btnIcon} />} text="Edit" />
          <p></p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const styles = {
  editWrapper: {
    display: 'flex',
  },
  btnIcon: { width: 14, height: 14 },
};

export default MyProfile;
